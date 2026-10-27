import { ArrowUp } from 'lucide-react';
import { business } from '../../config/business';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-name">{business.name}</span>
        {business.demoMode && <p>Protótipo comercial não oficial.<br />Dados e imagens dependem de aprovação.</p>}
      </div>
      <a href="#inicio" className="footer-back">Voltar ao início <ArrowUp size={16} aria-hidden="true" /></a>
    </footer>
  );
}
