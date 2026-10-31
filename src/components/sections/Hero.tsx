import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { business } from '../../config/business';
import { QuoteLink } from '../ui/QuoteLink';
import { HeroIllustration } from './HeroIllustration';

export function Hero() {
  const hasVisual = Boolean(business.heroPhoto || business.demoMode);
  return (
    <section id="inicio" className={`section-shell hero-section${hasVisual ? '' : ' hero-without-visual'}`} aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">ASSISTÊNCIA TÉCNICA</p>
          <h1 id="hero-title" className="hero-title">Seu aparelho precisa de <span>atenção?</span></h1>
          <p className="hero-description">Conheça os serviços e entre em contato para solicitar uma avaliação.</p>
          <div className="hero-actions">
            <QuoteLink>Solicitar orçamento<ArrowUpRight size={18} aria-hidden="true" /></QuoteLink>
            <a className="hero-services-link" href="#servicos">Conhecer serviços<ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </div>
        {hasVisual && <div className={`hero-visual${business.heroPhoto ? ' hero-visual-photo' : ' hero-visual-art'}`}>
          {business.heroPhoto ? (
            <img className="hero-photo" src={business.heroPhoto} alt="Dispositivo eletrônico em reparo na assistência técnica" width="640" height="720" fetchPriority="high" />
          ) : (
            <>
              <div className="hero-visual-top"><span>TECNOLOGIA MERECE CUIDADO</span><ArrowUpRight size={16} /></div>
              <HeroIllustration />
              <div className="hero-art-footer"><span className="hero-art-rule" aria-hidden="true" /><p className="hero-visual-caption">Ilustração de demonstração</p></div>
            </>
          )}
        </div>}
      </div>
    </section>
  );
}
