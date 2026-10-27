# Smart&CIA — regras do projeto

- MVP institucional estático em React, TypeScript strict, Vite e Tailwind CSS. Sem backend, banco, autenticação, pagamentos ou serviços pagos.
- Toda informação comercial fica em `src/config/business.ts`. Não inventar contatos, endereço, horários, preços, prazos, garantias, avaliações ou serviços confirmados. Campos desconhecidos vazios com `// REVISAR`.
- Demonstrações devem ser claramente identificadas; ocultar conteúdo comercial ausente fora do modo de demonstração. Não usar logos ou fotos sem autorização.
- WhatsApp somente via `src/lib/whatsapp.ts`, com número brasileiro válido. Sem número: CTA de orçamento aponta a `#contato`, sem botão flutuante.
- Design: fundo #F6F5F1, sidebar #181B20, destaque #E87439, Manrope/Inter, espaçamentos de 8px. Sem gradientes, fotografias artificiais ou números de marketing.
- Sidebar desktop fixa, inicialmente recolhida em 76px, expandida em 256px; conteúdo acompanha. Menu mobile com Escape, overlay, focus trap e retorno do foco.
- Componentes pequenos e tipados, aproximadamente até 200 linhas. Pastas: components/layout, components/sections, components/ui, config, hooks, lib.
- Ler arquivos antes de editar. Preservar alterações existentes. Cada tarefa já é isolada: usar o checkout atual, sem criar worktree salvo pedido explícito.
- Validar com `npm run lint`, `npm run build`, `npm test`. Não publicar sem confirmar conta/plano gratuito e dados comerciais.
- Commits Conventional Commits. Experimentos em feat/* ou fix/* e PR; main deve compilar.
