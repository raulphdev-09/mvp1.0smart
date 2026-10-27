# Smart&CIA — Website MVP

Protótipo comercial **não oficial** de um site institucional para assistência técnica de dispositivos eletrônicos. Single page em português, com sidebar recolhível, navegação mobile e caminho curto até o orçamento. A demonstração não confirma serviços, contatos ou condições comerciais da empresa.

React + TypeScript strict + Vite + Tailwind CSS; ícones Lucide e fontes Manrope/Inter hospedadas pelo próprio site. Sem backend, banco, autenticação, formulário remoto, pagamentos ou serviço pago obrigatório.

## Desenvolvimento

Use Node.js 24 e npm. No checkout:

```sh
npm ci
npm run dev
```

`npm install` também instala as dependências; use `npm ci` para reproduzir o lockfile sem alterá-lo. Para gerar e inspecionar a versão de produção:

```sh
npm run lint
npm run build
npm run preview
```

O build gera `dist/`. Não há variáveis de ambiente obrigatórias para a aplicação.

## Testes

```sh
npx playwright install chromium
npm test
```

Os testes de navegador verificam o fluxo de navegação e as regras da demonstração. O ambiente precisa de Chromium e das bibliotecas de sistema correspondentes; em uma máquina Linux nova, use `npx playwright install --with-deps chromium` quando houver permissão para instalar essas bibliotecas.

A configuração de CI em `.github/workflows/ci.yml` executa `npm ci`, lint, build e testes a cada push e pull request. A existência do workflow não confirma uma execução verde no GitHub.

## Personalizar os dados

Edite **somente informações comerciais verificadas** em [`src/config/business.ts`](src/config/business.ts). Os campos desconhecidos estão vazios e marcados com `// REVISAR`.

| Campo | Como preencher |
| --- | --- |
| `name`, `logo` | Nome aprovado e arquivo de logotipo autorizado; o nome atual identifica a proposta, sem afirmar caráter oficial. |
| `phone`, `whatsapp` | Número brasileiro com país e DDD, somente dígitos. Confirmar que o número de WhatsApp realmente recebe mensagens. |
| `instagram` | URL HTTPS do perfil confirmado. |
| `address`, `hours`, `mapEmbedUrl` | Endereço e horários verificados; mapa somente depois de confirmar o endereço. |
| `services` | Lista de serviços realmente prestados, com descrição aprovada e ícone suportado pelo tipo. |
| `process` | Etapas reais do atendimento; as etapas demonstrativas não são afirmações sobre a empresa. |
| `heroPhoto`, `aboutPhoto`, `aboutText` | Fotografias próprias/autorizadas e apresentação institucional aprovada. |
| `seo` | Título, descrição, imagem social autorizada e URL HTTPS pública definitiva. |
| `demoMode` | Manter `true` até aprovação dos dados e autorização do responsável. |

Sem WhatsApp válido, os CTAs de orçamento vão para `#contato` e o botão flutuante fica oculto. A mensagem de configuração de canais aparece somente na demonstração. O gerador de links é único em `src/lib/whatsapp.ts`; a validação de formato não prova a titularidade nem a existência da conta.

Os exemplos de serviços e processo são identificados visualmente e aparecem apenas no modo demonstrativo. Campos comerciais ausentes não devem receber valores plausíveis. Fotos reais devem ter texto alternativo, dimensões reservadas e, preferencialmente, formato WebP/AVIF.

## Design e Figma

Nenhum arquivo ou frame do Figma foi fornecido. O design segue o briefing; [`docs/design-tokens.json`](docs/design-tokens.json) registra seus tokens e [`docs/figma-mapping.md`](docs/figma-mapping.md) oferece um mapa conceitual para um futuro arquivo. Não houve leitura ou sincronização com o Figma.

A tipografia, as cores e os espaçamentos são definidos em `src/index.css` e `tailwind.config.js`. O laranja é usado em destaques e CTAs com texto escuro; o contraste deve ser verificado ao alterar cores.

## GitHub e Lovable

O repositório previsto é `raulphdev-09/mvp1.0smart`. Preserve seu nome e sua identidade depois de conectar ao Lovable. Use Conventional Commits; experimentos em `feat/*` ou `fix/*`, por pull request, mantendo `main` compilável.

A conexão nativa requer acesso ao projeto no Lovable: **Settings → Connectors → GitHub**. A sincronização bidirecional descrita no briefing ocorre somente em `main`. A criação do código neste checkout não realiza essa conexão nem confirma a sincronização.

O MVP foi enviado para `main`. A consulta do CI por `gh run list` retornou `Forbidden`; `api.github.com` ainda não está permitido na política de rede em execução. A adição desse domínio foi salva no rascunho do ambiente, mas depende de aplicação das configurações. Não há confirmação de CI verde.

## Publicar na Render

O arquivo [`render.yaml`](render.yaml) prepara um **Static Site**, com deploy automático a partir de `main`:

- Build: `npm ci && npm run build`.
- Diretório publicado: `dist`.
- Rewrite: `/*` para `/index.html`.
- Cache de um ano com `immutable` em `/assets/*`, cujos nomes são versionados pelo Vite.

Antes de publicar, confirme no painel da Render o plano gratuito e a ausência de recursos pagos, autorize o acesso ao GitHub e revise as pendências comerciais. Depois, crie um Blueprint a partir do repositório, revise o serviço estático e aplique a configuração. Não há credencial da Render nem URL pública incluída no projeto.

Após obter a URL pública, valide sidebar, menu mobile, todas as âncoras, CTAs, ausência de dados fictícios apresentados como reais e headers de cache. A demonstração deve permanecer não indexável. Configure o domínio final e revise a geração de `robots.txt` e `sitemap.xml` antes de autorizar indexação. JSON-LD de empresa local só pode usar dados confirmados.

## Validação e entrega por fases

| Fase | Entrega prevista no código | Verificação | Pendências do cliente |
| --- | --- | --- | --- |
| 1 — Fundação | Stack, tokens, fontes locais, configuração tipada e utilitário WhatsApp | Build e TypeScript strict aprovados | Marca autorizada, dados e eventual arquivo Figma. |
| 2 — Navegação | Sidebar desktop, menu mobile acessível e seção ativa | Navegação validada em Chromium, inclusive teclado e foco móvel | Aprovação visual e de navegação. |
| 3 — Conteúdo | Início, Serviços, Como funciona, Sobre, Contato e rodapé | 5 seções, CTAs e ausência de contatos fictícios verificados | Serviços, processo, fotos, textos e canais reais. |
| 4 — Qualidade | Responsividade, acessibilidade e SEO básico | Lint, build e 8 testes aprovados; axe sem violações AA detectadas | Aprovação dos dados antes de habilitar indexação. |
| 5 — Publicação | CI e Blueprint da Render | Push em `main` confirmado; CI remoto e Render pendentes | Acesso às contas, integração Lovable, plano gratuito e domínio. |

### Lighthouse mobile

Meta: ≥ 90 em Performance, Acessibilidade, Boas práticas e SEO. **Auditoria local realizada em Chromium com Lighthouse 13.6.0**: Performance 100, Acessibilidade 100, Boas práticas 100 e SEO 63. O resultado de SEO decorre do bloqueio intencional de indexação (`noindex, nofollow` e `Disallow: /`) da demonstração; preservar essa proteção até a aprovação dos dados e domínio. CLS medido: 0,01. Resumo em [`docs/lighthouse-mobile.json`](docs/lighthouse-mobile.json). As notas são locais, não de produção; não há deploy confirmado. Testes automatizados não substituem revisão manual de acessibilidade com tecnologias assistivas.

Checklist completo de informações e aprovações: [`docs/PENDENCIAS.md`](docs/PENDENCIAS.md). Regras para futuras alterações: [`AGENTS.md`](AGENTS.md).

Validação local: `npm ci`, `npm run lint` e `npm run build` concluíram; `npm test` executou 8 testes em Chromium, todos aprovados. Layouts de 360, 768, 1024 e 1440px, expansão da sidebar, âncoras, menu móvel (teclado/overlay/scroll/foco), regras de WhatsApp e axe WCAG AA foram verificados. O servidor de desenvolvimento também renderizou sem erro JavaScript.
