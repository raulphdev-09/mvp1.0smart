import { Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import { business } from '../../config/business';

export function About() {
  return (
    <section id="sobre" className="section-shell about-section" aria-labelledby="about-title">
      <div className="about-grid">
        <div className="about-copy">
          <p className="section-kicker">03 / SOBRE</p>
          <h2 id="about-title">Tecnologia faz parte<br />da sua rotina.</h2>
          {business.aboutText ? <p className="section-intro">{business.aboutText}</p> : business.demoMode ? (
            <>
              <p className="section-intro">Este espaço vai apresentar a {business.name}: sua história, seu ambiente e seu jeito de atender.</p>
              <p className="about-description">Uma apresentação direta, com informações reais para você conhecer a empresa antes de entrar em contato.</p>
              <p className="demo-note"><span className="demo-label">Conteúdo de demonstração</span>Apresentação institucional aguardando aprovação.</p>
            </>
          ) : null}
          <a className="text-link" href="#contato">Conhecer os canais de contato<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        {(business.aboutPhoto || business.demoMode) && <div className="about-visual">
          {business.aboutPhoto ? <img className="about-photo" src={business.aboutPhoto} alt={`Ambiente da ${business.name}`} width="640" height="480" loading="lazy" /> : (
            <div className="about-placeholder">
              <svg viewBox="0 0 280 180" fill="none" aria-hidden="true">
                <g stroke="currentColor" strokeWidth="1.3">
                  <path d="M36 144h208M57 144V61h166v83M48 61h184l-9-25H57zM72 79h45v65M132 79h73v44h-73zM87 26h106M102 19h76" />
                  <path d="M143 90h51M143 99h32M98 110v11M73 36v25M103 36v25M133 36v25M163 36v25M193 36v25" opacity=".5" />
                </g>
              </svg>
              <div className="photo-placeholder-label"><ImageIcon size={17} aria-hidden="true" /><span>Espaço para foto do ambiente</span></div>
              <span className="about-placeholder-caption">Fotografia real a confirmar</span>
            </div>
          )}
        </div>}
      </div>
    </section>
  );
}
