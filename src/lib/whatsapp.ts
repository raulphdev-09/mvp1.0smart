const validDdds = new Set([11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,53,54,55,61,62,63,64,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99]);
export function isValidBrazilianPhone(phone: string): boolean {
  return /^55\d{2}(?:9\d{8}|[2-5]\d{7})$/.test(phone) && validDdds.has(Number(phone.slice(2, 4)));
}
export function getWhatsAppUrl(phone: string, service?: string): string | null {
  if (!isValidBrazilianPhone(phone)) return null;
  const message = service
    ? `Olá! Gostaria de um orçamento para: ${service}.`
    : 'Olá! Conheci os serviços pelo site e gostaria de solicitar um orçamento.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
export function safeHttpsUrl(value: string): string | undefined {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : undefined; }
  catch { return undefined; }
}
