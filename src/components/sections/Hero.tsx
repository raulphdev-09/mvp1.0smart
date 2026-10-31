import { ArrowDown, ArrowUpRight, Wrench } from 'lucide-react';
import { business, demoEditorial } from '../../config/business';
import { QuoteLink } from '../ui/QuoteLink';

export function Hero() {
  const photo = business.heroPhoto || (business.demoMode ? demoEditorial.heroPhoto : '');
  const stockPhoto = !business.heroPhoto && business.demoMode;
  return <section id="inicio" className={`reference-hero${photo ? '' : ' reference-hero-no-photo'}`} aria-labelledby="hero-title">
    {photo && <div className="hero-backdrop"><img src={photo} alt="Técnico trabalhando em um celular aberto na bancada, com auxílio de um microscópio" width="1400" height="933" fetchPriority="high" /></div>}
    <div className="hero-color-wash" aria-hidden="true" />
    <div className="reference-hero-inner">
      <div className="reference-hero-copy">
        <div className="hero-brand-lockup"><p className="hero-brand-name">{business.name}</p><p className="hero-eyebrow">ASSISTÊNCIA TÉCNICA</p></div>
        <h1 id="hero-title"><span className="headline-ribbon">Manutenção</span><span className="headline-ribbon headline-ribbon-light">de celulares.</span><span className="headline-open">Para o seu<br />dia a dia.</span></h1>
        <p className="reference-hero-description">Conheça os serviços para o seu aparelho e entre em contato para solicitar uma avaliação.</p>
        <div className="reference-hero-actions">
          {business.demoMode && <div className="repair-thumbnails" aria-hidden="true"><img src={demoEditorial.detailPhoto} alt="" width="120" height="144" /><img src={demoEditorial.heroPhoto} alt="" width="120" height="144" /></div>}
          <QuoteLink className="reference-contact">Solicitar orçamento<span><ArrowUpRight size={23} aria-hidden="true" /></span></QuoteLink>
        </div>
      </div>
      {photo && <div className="hero-photo-details">
        <svg className="phone-outline" viewBox="0 0 440 540" fill="none" aria-hidden="true"><path d="M118 34h210q52 0 52 52v354q0 52-52 52H116q-52 0-52-52V304q0-20-18-30l-20-12q-22-13-10-36t36-12l28 14q18 9 18-14V86q0-52 20-52Z" stroke="white" strokeOpacity=".85" strokeWidth="3" /><path d="M175 34v7q0 18 18 18h54q18 0 18-18v-7" stroke="white" strokeOpacity=".85" strokeWidth="3" /><circle cx="380" cy="398" r="7" fill="#71D8F2" stroke="white" strokeWidth="3" /></svg>
        <span className="photo-callout photo-callout-top">Um olhar de perto</span>
        <span className="photo-callout photo-callout-bottom">Nos detalhes do aparelho</span>
        <div className="hero-care-card"><Wrench size={28} strokeWidth={1.4} aria-hidden="true" /><p>Conte o que<br />aconteceu.</p><span>O primeiro passo é entender.</span><a href="#servicos" aria-label="Conhecer serviços"><ArrowUpRight size={22} aria-hidden="true" /></a></div>
      </div>}
      <div className="reference-hero-footer"><a href="#servicos"><ArrowDown size={16} aria-hidden="true" />Explore os serviços</a><span>{stockPhoto ? 'Fotografia de banco · uso ilustrativo' : 'Smart&CIA / Manutenção de celulares'}</span></div>
    </div>
  </section>;
}
