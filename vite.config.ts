import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { business } from './src/config/business';
import { safeHttpsUrl } from './src/lib/whatsapp';
const escapeXml = (text: string) => text.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]!);
function siteMetadata(): Plugin {
  const siteUrl = safeHttpsUrl(business.seo.siteUrl);
  const image = safeHttpsUrl(business.seo.image);
  const publishable = !business.demoMode && !!siteUrl;
  return {
    name: 'business-metadata',
    transformIndexHtml() {
      return [
        { tag: 'title', children: business.seo.title },
        { tag: 'meta', attrs: { name: 'description', content: business.seo.description } },
        { tag: 'meta', attrs: { name: 'robots', content: publishable ? 'index, follow' : 'noindex, nofollow' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:locale', content: 'pt_BR' } },
        { tag: 'meta', attrs: { property: 'og:title', content: business.seo.title } },
        { tag: 'meta', attrs: { property: 'og:description', content: business.seo.description } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' } },
        { tag: 'meta', attrs: { name: 'twitter:title', content: business.seo.title } },
        { tag: 'meta', attrs: { name: 'twitter:description', content: business.seo.description } },
        ...(image ? [{ tag: 'meta', attrs: { property: 'og:image', content: image } }, { tag: 'meta', attrs: { name: 'twitter:image', content: image } }] : []),
        ...(publishable ? [{ tag: 'link', attrs: { rel: 'canonical', href: siteUrl } }, { tag: 'meta', attrs: { property: 'og:url', content: siteUrl } }] : []),
        ...(publishable && business.address ? [{ tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: business.name, address: business.address, url: siteUrl }).replace(/</g, '\\u003c') }] : []),
      ].map(tag => ({ ...tag, injectTo: 'head' as const }));
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: publishable ? `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n` : 'User-agent: *\nDisallow: /\n' });
      if (publishable) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeXml(siteUrl)}</loc></url></urlset>` });
    },
  };
}
export default defineConfig({ plugins: [react(), siteMetadata()] });
