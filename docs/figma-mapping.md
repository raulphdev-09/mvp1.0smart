# Mapeamento visual para Figma

Nenhum arquivo, URL ou frame do Figma foi fornecido. Esta tabela é uma proposta de organização para um futuro arquivo, baseada no briefing e nos componentes React; não representa uma leitura nem uma sincronização com o Figma.

| Frame/componente sugerido | Componente no código | Estados e conteúdo |
| --- | --- | --- |
| Layout / Desktop navigation | `src/components/layout/Sidebar.tsx` | Recolhido 76px, expandido 256px, seção ativa, hover, foco e tooltip. |
| Layout / Mobile navigation | `src/components/layout/MobileNavigation.tsx` | Barra superior, drawer aberto/fechado, overlay e foco por teclado. |
| Sections / Início | `src/components/sections/Hero.tsx` | H1 único, CTA primário/secundário e espaço identificado para foto real. |
| Sections / Serviços | `src/components/sections/Services.tsx` | Lista orientada a dados; conteúdo demonstrativo identificado. |
| Sections / Como funciona | `src/components/sections/Process.tsx` | Timeline horizontal no desktop e vertical no mobile. |
| Sections / Sobre | `src/components/sections/About.tsx` | Texto institucional aprovado e fotografia real, quando fornecidos. |
| Sections / Contato | `src/components/sections/Contact.tsx` | Canais confirmados; estado de configuração visível só na demonstração. |
| Layout / Footer | `src/components/layout/Footer.tsx` | Identificação do protótipo e retorno ao início. |
| UI / Quote link | `src/components/ui/QuoteLink.tsx` | WhatsApp válido ou âncora `#contato`; hover e foco. |
| UI / Floating contact | `src/components/ui/WhatsAppButton.tsx` | Exibido somente com WhatsApp válido. |

## Tokens e conferência

[`design-tokens.json`](design-tokens.json) contém cores, tipografia, dimensões e duração de movimento em formato DTCG. A importação depende de uma ferramenta compatível com esse formato; não implica importação nativa já executada.

No código, consultar `src/index.css` e `tailwind.config.js`. Mapear cores para variáveis/estilos, fontes para estilos de texto e espaçamentos em múltiplos de 8px. Reservar variantes de 360, 768, 1024 e 1440px para a revisão responsiva.

O laranja `#E87439` serve para CTAs e indicadores com texto escuro. Não usar esse tom em texto longo sobre fundo claro. O token original de texto secundário `#707780` precisa de contraste verificado por fundo e tamanho; um tom derivado mais escuro pode ser necessário para WCAG AA. Fotos e logotipos dependem de arquivos reais autorizados.
