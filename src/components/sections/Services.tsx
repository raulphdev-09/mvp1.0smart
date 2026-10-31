import { ArrowUpRight, Battery, Cable, ScanLine, Smartphone } from 'lucide-react';
import { business, demoServices } from '../../config/business';
import { QuoteLink } from '../ui/QuoteLink';

const serviceIcons = { screen: Smartphone, battery: Battery, charging: Cable, diagnosis: ScanLine };

export function Services() {
  const illustrative = business.services.length === 0 && business.demoMode;
  const services = business.services.length > 0 ? business.services : business.demoMode ? demoServices : [];

  return (
    <section id="servicos" className="section-shell services-section" aria-labelledby="services-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">01 / SERVIÇOS</p>
          <h2 id="services-title">Qual é o problema<br />do seu celular?</h2>
        </div>
        <div className="section-intro">
          <p>Entender o problema é o começo. Encontre abaixo o assunto sobre o qual você quer conversar.</p>
          {illustrative && <><span className="demo-label">Conteúdo de demonstração</span><p className="demo-note">Lista ilustrativa. Serviços e disponibilidade precisam ser confirmados pela empresa.</p></>}
        </div>
      </div>
      {services.length > 0 ? (
        <div className="service-list">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article key={service.id} className="service-row">
                <span className="service-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="service-icon" aria-hidden="true"><Icon size={28} strokeWidth={1.5} /></div>
                <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
                <QuoteLink className="service-action" service={illustrative ? undefined : service.title}>
                  <span>{illustrative ? 'Consultar disponibilidade' : 'Solicitar orçamento'}</span><ArrowUpRight size={20} aria-hidden="true" />
                </QuoteLink>
              </article>
            );
          })}
        </div>
      ) : <p className="section-intro">Consulte os canais de contato para saber quais serviços estão disponíveis.</p>}
    </section>
  );
}
