export interface Service { id: string; title: string; description: string; icon: 'screen' | 'battery' | 'charging' | 'diagnosis' }
export interface ProcessStep { title: string; description: string }
export interface BusinessConfig {
  name: string; demoMode: boolean; logo: string; phone: string; whatsapp: string;
  instagram: string; address: string; hours: string; mapEmbedUrl: string;
  heroPhoto: string; aboutPhoto: string; aboutText: string;
  services: Service[]; process: ProcessStep[];
  seo: { title: string; description: string; image: string; siteUrl: string };
}
export const business: BusinessConfig = {
  name: 'Smart&CIA', demoMode: true,
  logo: '', // REVISAR: logotipo autorizado
  phone: '', // REVISAR: telefone comercial, somente dígitos
  whatsapp: '', // REVISAR: WhatsApp brasileiro 55 + DDD + número
  instagram: '', // REVISAR: URL HTTPS do perfil confirmado
  address: '', // REVISAR: endereço verificado
  hours: '', // REVISAR: horários confirmados
  mapEmbedUrl: '', // REVISAR: incorporação HTTPS somente com endereço verificado
  heroPhoto: '', // REVISAR: fotografia real autorizada do aparelho em reparo
  aboutPhoto: '', // REVISAR: fotografia real autorizada do ambiente
  aboutText: '', // REVISAR: apresentação institucional aprovada
  services: [], // REVISAR: serviços confirmados
  process: [], // REVISAR: etapas reais do atendimento
  seo: {
    title: 'Smart&CIA — demonstração de site para assistência técnica',
    description: 'Protótipo comercial não oficial da Smart&CIA. Explore uma proposta de site para assistência técnica de dispositivos eletrônicos.',
    image: '', // REVISAR: imagem social autorizada
    siteUrl: '', // REVISAR: domínio público definitivo, sem barra final
  },
};
// Exemplos explícitos para demonstrar a interface; não são serviços ou processos confirmados.
export const demoServices: Service[] = [
  { id: 'tela', title: 'Troca de tela', description: 'Uma tela danificada? O primeiro passo é entender o que o aparelho precisa.', icon: 'screen' },
  { id: 'bateria', title: 'Substituição de bateria', description: 'Para conversar sobre autonomia e as condições da bateria do seu dispositivo.', icon: 'battery' },
  { id: 'carga', title: 'Conector de carga', description: 'Dificuldades para carregar merecem uma avaliação do aparelho.', icon: 'charging' },
  { id: 'diagnostico', title: 'Diagnóstico de defeitos', description: 'Conte o que aconteceu para orientar uma avaliação técnica.', icon: 'diagnosis' },
];
export const demoProcess: ProcessStep[] = [
  { title: 'Conte o que aconteceu', description: 'Descreva o problema e informe o modelo do aparelho.' },
  { title: 'Avaliação da solicitação', description: 'A equipe entende a situação e orienta os próximos passos.' },
  { title: 'Alinhamento do orçamento', description: 'Condições e serviço são combinados antes de prosseguir.' },
  { title: 'Orientações de retirada', description: 'Após o atendimento, são alinhadas as instruções de retirada.' },
];

// Fotografias licenciadas e textos editoriais da demonstração, sem afirmar vínculo com a empresa.
export const demoEditorial = {
  headline: 'Celular com problema?',
  headlineDetail: 'Vamos olhar de perto.',
  heroPhoto: '/images/repair-hero.webp',
  detailPhoto: '/images/repair-hands.webp',
  aboutTitle: 'Antes do orçamento, os detalhes.',
  aboutText: 'Uma queda, uma falha ao carregar ou uma tela que deixou de responder. Conte o que mudou e quando o problema começou.',
  aboutDetail: 'Tenha o modelo do aparelho em mãos. Essas informações ajudam a explicar a situação no primeiro contato.',
};
