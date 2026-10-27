import { business, demoProcess } from '../../config/business';

export function Process() {
  const illustrative = business.process.length === 0 && business.demoMode;
  const steps = business.process.length > 0 ? business.process : business.demoMode ? demoProcess : [];

  return (
    <section id="processo" className="section-shell process-section" aria-labelledby="process-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">02 / COMO FUNCIONA</p>
          <h2 id="process-title">Do primeiro contato<br />ao próximo passo.</h2>
        </div>
        <div className="section-intro">
          <p>Uma conversa clara ajuda você a entender o caminho do atendimento.</p>
          {illustrative && <><span className="demo-label">Conteúdo de demonstração</span><p className="demo-note">Fluxo ilustrativo. As etapas reais precisam ser confirmadas pela empresa.</p></>}
        </div>
      </div>
      {steps.length > 0 ? (
        <ol className="process-list">
          {steps.map((step, index) => (
            <li key={`${index}-${step.title}`} className="process-step">
              <span className="process-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="process-copy"><h3>{step.title}</h3><p>{step.description}</p></div>
            </li>
          ))}
        </ol>
      ) : <p className="section-intro">As orientações sobre o atendimento são informadas pelos canais de contato.</p>}
    </section>
  );
}
