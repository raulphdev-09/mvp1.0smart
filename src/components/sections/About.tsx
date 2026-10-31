import { ArrowUpRight } from 'lucide-react';
import { business, demoEditorial } from '../../config/business';

export function About() {
  const photo = business.aboutPhoto || (business.demoMode ? demoEditorial.detailPhoto : '');
  const stockPhoto = !business.aboutPhoto && business.demoMode;
  return (
    <section id="sobre" className="section-shell about-section" aria-labelledby="about-title">
      <div className="about-grid">
        <div className="about-copy">
          <p className="section-kicker">03 / SOBRE O ATENDIMENTO</p>
          <h2 id="about-title">{business.aboutText ? 'Tecnologia faz parte da sua rotina.' : demoEditorial.aboutTitle}</h2>
          {business.aboutText ? <p className="section-intro">{business.aboutText}</p> : business.demoMode ? <>
            <p className="section-intro">{demoEditorial.aboutText}</p>
            <p className="about-description">{demoEditorial.aboutDetail}</p>
            <p className="demo-note">Orientações ilustrativas. O atendimento e os serviços precisam ser confirmados com a empresa.</p>
          </> : null}
          <a className="text-link" href="#contato">Conhecer os canais de contato<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        {photo && <figure className="repair-detail">
          <img src={photo} alt={stockPhoto ? 'Profissional manuseando componentes de um celular aberto sobre uma bancada de reparos' : `Ambiente da ${business.name}`} width="1200" height="1800" loading="lazy" />
          {stockPhoto && <figcaption>Fotografia de banco · não representa a equipe ou o espaço da Smart&CIA</figcaption>}
        </figure>}
      </div>
    </section>
  );
}
