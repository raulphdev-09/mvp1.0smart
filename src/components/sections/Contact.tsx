import { ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { business } from '../../config/business';
import { getWhatsAppUrl, isValidBrazilianPhone, safeHttpsUrl } from '../../lib/whatsapp';
import { QuoteLink } from '../ui/QuoteLink';

export function Contact() {
  const whatsapp = getWhatsAppUrl(business.whatsapp);
  const instagram = safeHttpsUrl(business.instagram);
  const phone = isValidBrazilianPhone(business.phone) ? business.phone : null;
  const map = business.address ? safeHttpsUrl(business.mapEmbedUrl) : undefined;
  const hasContact = Boolean(whatsapp || instagram || phone || business.address || business.hours);
  return (
    <section id="contato" className="section-shell contact-section" aria-labelledby="contact-title">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="section-kicker">04 / VAMOS CONVERSAR</p>
          <h2 id="contact-title">O próximo passo<br />começa com uma<br /><span>conversa.</span></h2>
          <p className="section-intro">Tenha em mãos o modelo do aparelho e uma breve descrição do problema.</p>
          {whatsapp && <div className="contact-actions"><QuoteLink><MessageCircle size={19} aria-hidden="true" />Conversar pelo WhatsApp<ArrowUpRight size={18} aria-hidden="true" /></QuoteLink></div>}
        </div>
        <div className="contact-details">
          {business.address && <div className="contact-detail"><MapPin size={20} aria-hidden="true" /><div><h3>Onde estamos</h3><p>{business.address}</p></div></div>}
          {business.hours && <div className="contact-detail"><Clock3 size={20} aria-hidden="true" /><div><h3>Horário de atendimento</h3><p>{business.hours}</p></div></div>}
          {phone && <div className="contact-detail"><Phone size={20} aria-hidden="true" /><div><h3>Telefone</h3><a href={`tel:+${phone}`}>{phone}</a></div></div>}
          {instagram && <div className="contact-detail"><Instagram size={20} aria-hidden="true" /><div><h3>Instagram</h3><a href={instagram} target="_blank" rel="noopener noreferrer">Visitar perfil<ArrowUpRight size={15} aria-hidden="true" /></a></div></div>}
          {!hasContact && business.demoMode && <div className="contact-empty">
            <span className="contact-status"><span aria-hidden="true" />EM PREPARAÇÃO</span>
            <MessageCircle size={30} strokeWidth={1.4} aria-hidden="true" />
            <h3>Canais de contato<br />em configuração</h3>
            <p>Os contatos serão exibidos aqui após a confirmação dos dados comerciais.</p>
            <span className="demo-label">Conteúdo de demonstração</span>
          </div>}
          {map && <iframe className="contact-map" src={map} title={`Localização da ${business.name}`} width="640" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />}
        </div>
      </div>
    </section>
  );
}
