import { ArrowDown, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { business } from '../../config/business';
import { QuoteLink } from '../ui/QuoteLink';

export function Hero() {
  return (
    <section id="inicio" className="section-shell hero-section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span aria-hidden="true" />ASSISTÊNCIA TÉCNICA{business.demoMode ? ' · PROPOSTA DE SITE' : ''}</p>
          <h1 id="hero-title" className="hero-title">Seu aparelho<br />precisa de<br /><span>atenção?</span></h1>
          <p className="hero-description">Conheça os serviços e entre em contato para solicitar uma avaliação.</p>
          <div className="hero-actions">
            <QuoteLink>Solicitar orçamento<ArrowUpRight size={18} aria-hidden="true" /></QuoteLink>
            <a className="button button-secondary" href="#servicos">Conhecer serviços<ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          {business.demoMode && <p className="hero-demo-note">Protótipo comercial não oficial. Dados e serviços sujeitos à confirmação.</p>}
        </div>
        {(business.heroPhoto || business.demoMode) && <div className="hero-visual">
          {business.heroPhoto ? (
            <img className="hero-photo" src={business.heroPhoto} alt="Dispositivo eletrônico em reparo na assistência técnica" width="640" height="720" fetchPriority="high" />
          ) : (
            <>
              <div className="hero-visual-top"><span>UM NOVO OLHAR PARA O SEU APARELHO</span><span aria-hidden="true">↗</span></div>
              <svg className="device-illustration" viewBox="0 0 480 480" fill="none" aria-hidden="true">
                <g stroke="currentColor" strokeWidth="1.4">
                  <circle cx="240" cy="240" r="174" strokeDasharray="3 8" opacity=".2" />
                  <path d="M240 44v28M240 408v28M44 240h28M408 240h28" opacity=".3" />
                  <g transform="rotate(-13 240 240)">
                    <rect x="146" y="75" width="188" height="330" rx="28" fill="#eeede8" />
                    <rect x="156" y="85" width="168" height="310" rx="20" />
                    <rect x="211" y="96" width="58" height="12" rx="6" fill="#d8d8d2" stroke="none" />
                    <path d="M139 143v28M139 186v39M341 174v46" />
                    <path d="m240 164-31 55 29 22-31 53 51-44-26-23 27-63" strokeWidth="2" opacity=".6" />
                    <circle cx="240" cy="363" r="3" fill="currentColor" />
                  </g>
                  <path d="M342 104h32v32M106 346v32h32" opacity=".5" />
                  <path d="m328 314 49 49m-57-47 7-7 12 12-7 7zm43 40 8-8 13 13a5.6 5.6 0 0 1-8 8z" strokeWidth="2" />
                </g>
              </svg>
              <div className="photo-placeholder-label"><ImageIcon size={16} aria-hidden="true" /><span>Espaço para fotografia real</span></div>
              <p className="hero-visual-caption">Ilustração de demonstração · imagem a confirmar</p>
            </>
          )}
        </div>}
      </div>
      <a className="hero-scroll" href="#servicos"><ArrowDown size={15} aria-hidden="true" /><span>{business.demoMode ? 'Explore a proposta' : 'Conheça os serviços'}</span></a>
    </section>
  );
}
