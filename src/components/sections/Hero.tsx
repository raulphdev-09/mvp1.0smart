import { ArrowDown, ArrowUpRight, CornerDownRight } from 'lucide-react';
import { business, demoEditorial } from '../../config/business';
import { QuoteLink } from '../ui/QuoteLink';

export function Hero() {
  const photo = business.heroPhoto || (business.demoMode ? demoEditorial.heroPhoto : '');
  const stockPhoto = !business.heroPhoto && business.demoMode;
  return (
    <section id="inicio" className={`section-shell hero-section${photo ? '' : ' hero-without-visual'}`} aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">ASSISTÊNCIA TÉCNICA / CELULARES</p>
          <h1 id="hero-title" className="hero-title">{demoEditorial.headline}<span>{demoEditorial.headlineDetail}</span></h1>
          <p className="hero-description">Conheça os serviços e entre em contato para solicitar uma avaliação.</p>
          <div className="hero-actions">
            <QuoteLink>Solicitar orçamento<ArrowUpRight size={18} aria-hidden="true" /></QuoteLink>
            <a className="hero-services-link" href="#servicos">Ver serviços<ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-contact-note"><CornerDownRight size={20} aria-hidden="true" /><p>Para começar, informe o modelo<br />e conte o que aconteceu.</p></div>
        </div>
        {photo && <figure className="repair-feature">
          <div className="repair-feature-image">
            <img src={photo} alt="Técnico trabalhando em um celular aberto na bancada, com auxílio de um microscópio" width="1400" height="933" fetchPriority="high" />
          </div>
          <figcaption><span>UM OLHAR DE PERTO.</span><span>{stockPhoto ? 'Fotografia de banco · uso ilustrativo' : 'Manutenção de celulares'}</span></figcaption>
        </figure>}
      </div>
      <div className="hero-bottom-line"><span>SMART&CIA</span><a href="#servicos">Conheça as possibilidades de atendimento<ArrowDown size={14} aria-hidden="true" /></a></div>
    </section>
  );
}
