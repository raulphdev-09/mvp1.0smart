import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getWhatsAppUrl, isValidBrazilianPhone } from '../src/lib/whatsapp';

test('valida número e codifica mensagens de orçamento', () => {
  for (const value of ['', '5511000000000', '5500999999999', '55 11 999999999', 'javascript:alert(1)']) {
    expect(getWhatsAppUrl(value)).toBeNull();
  }
  // Número sintético somente em teste: não é contato da empresa e nunca aparece na interface.
  const syntheticPhone = '5511987654321';
  expect(isValidBrazilianPhone(syntheticPhone)).toBe(true);
  const url = new URL(getWhatsAppUrl(syntheticPhone, 'Tela & conector')!);
  expect(url.origin).toBe('https://wa.me');
  expect(url.searchParams.get('text')).toBe('Olá! Gostaria de um orçamento para: Tela & conector.');
});

for (const width of [360, 768, 1024, 1440]) {
  test(`layout e navegação sem cortes em ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('a[href*="wa.me"]')).toHaveCount(0);
    await expect(page.locator('iframe')).toHaveCount(0);
    await expect(page.locator('.demo-banner')).toContainText('Protótipo comercial não oficial');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (width >= 768) {
      const navigation = page.getByRole('navigation', { name: 'Navegação principal', exact: true });
      await expect(navigation).toBeVisible();
      for (const [label, id] of [['Serviços','servicos'], ['Como funciona','processo'], ['Sobre','sobre'], ['Início','inicio']]) {
        const link = navigation.getByRole('link', { name: label, exact: true });
        await link.click();
        await expect(page).toHaveURL(new RegExp(`#${id}$`));
        await expect(link).toHaveAttribute('aria-current','location');
      }
    } else {
      await page.getByRole('button', { name: 'Abrir menu' }).click();
      await page.getByRole('dialog').getByRole('link', { name: 'Serviços', exact: true }).click();
      await expect(page).toHaveURL(/#servicos$/);
      await expect(page.getByRole('dialog')).toHaveCount(0);
    }
    await page.goto('/');
    await page.getByRole('link', { name: 'Solicitar orçamento', exact: true }).click();
    await expect(page).toHaveURL(/#contato$/);
    await expect(page.getByRole('heading', { name: 'Canais de contato em configuração' })).toBeInViewport();
    expect(errors).toEqual([]);
  });
}

test('menu móvel contém foco, fecha e devolve foco em todos os caminhos', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/');
  const open = page.getByRole('button', { name: 'Abrir menu' });
  await open.click();
  await expect(open).toHaveAttribute('aria-expanded','true');
  await expect(page.getByRole('button', { name: 'Fechar menu' })).toBeFocused();
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('dialog').getByRole('link', { name: 'Contato', exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Fechar menu' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(open).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow','hidden');
  await open.click();
  await page.locator('.mobile-overlay').click({ position: { x: 350, y: 400 } });
  await expect(open).toBeFocused();
  await open.click();
  await page.getByRole('button', { name: 'Fechar menu' }).click();
  await expect(open).toBeFocused();
  await open.click();
  await page.setViewportSize({ width: 1024, height: 800 });
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.locator('body')).not.toHaveCSS('overflow','hidden');
});

for (const width of [360, 1440]) {
  test(`acessibilidade WCAG AA em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    expect((await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
    if (width === 360) {
      await page.getByRole('button', { name: 'Abrir menu' }).click();
      expect((await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
    }
  });
}
