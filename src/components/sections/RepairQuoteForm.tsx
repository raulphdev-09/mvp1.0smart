import { useState, type FormEvent } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { business, demoServices } from '../../config/business';
import { getRepairQuoteUrl, isValidBrazilianPhone } from '../../lib/whatsapp';

export function RepairQuoteForm() {
  const [model, setModel] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const available = isValidBrazilianPhone(business.whatsapp);
  const services = business.services.length ? business.services : business.demoMode ? demoServices : [];

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = getRepairQuoteUrl(business.whatsapp, { model, issue, description });
    if (url) window.location.assign(url);
  }

  return <form className="repair-quote-form" onSubmit={submitQuote} aria-labelledby="quote-form-title">
    <p className="quote-form-kicker"><MessageCircle size={18} aria-hidden="true" />ORÇAMENTO DO SEU CONSERTO</p>
    <h3 id="quote-form-title">O que aconteceu com o aparelho?</h3>
    <p className="quote-form-intro">Preencha os detalhes para continuar a conversa pelo WhatsApp.</p>
    <div className="quote-fields">
      <label htmlFor="quote-model">Marca e modelo do celular<span aria-hidden="true"> *</span></label>
      <input id="quote-model" name="model" value={model} onChange={event => setModel(event.target.value)} placeholder="Ex.: Samsung Galaxy A54" maxLength={100} required autoComplete="off" />
      <label htmlFor="quote-issue">Qual é o problema?<span aria-hidden="true"> *</span></label>
      <select id="quote-issue" name="issue" value={issue} onChange={event => setIssue(event.target.value)} required>
        <option value="" disabled>Selecione uma opção</option>
        {services.map(service => <option key={service.id} value={service.title}>{service.title}</option>)}
        <option value="Outro problema">Outro problema</option>
      </select>
      <label htmlFor="quote-description">Conte um pouco mais <span className="quote-optional">(opcional)</span></label>
      <textarea id="quote-description" name="description" value={description} onChange={event => setDescription(event.target.value)} placeholder="Quando começou? Houve queda ou contato com água?" maxLength={1000} rows={3} />
    </div>
    <button className="button button-primary quote-submit" type="submit" disabled={!available}>Continuar no WhatsApp<ArrowUpRight size={18} aria-hidden="true" /></button>
    <p className="quote-form-note">{available ? 'Você será direcionado ao WhatsApp com a mensagem pronta. Revise e envie quando quiser. O valor do conserto depende da avaliação do aparelho.' : 'O envio será habilitado após a confirmação do WhatsApp de atendimento.'}</p>
  </form>;
}
