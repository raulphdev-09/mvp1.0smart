import { ArrowUpRight, Smartphone } from 'lucide-react';
import { MobileNavigation } from './components/layout/MobileNavigation';
import { navigationItems } from './components/layout/navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { QuoteLink } from './components/ui/QuoteLink';
import { useActiveSection } from './hooks/useActiveSection';
import { business } from './config/business';
export default function App() {
  const activeSection = useActiveSection();
  return <>
    <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
    <MobileNavigation activeSection={activeSection} />
    <div className="page-content">
      <header className="desktop-masthead">
        <a className="wordmark" href="#inicio" aria-label={`${business.name} — início`}><Smartphone size={24} aria-hidden="true" />{business.name}<span className="brand-dot">/</span></a>
        <nav className="desktop-navigation" aria-label="Navegação principal">
          {navigationItems.filter(item => item.id !== 'contato').map(({id,label}) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}><span aria-hidden="true">/</span>{label}</a>)}
        </nav>
        <QuoteLink className="masthead-contact">Área de contato<span><ArrowUpRight size={20} aria-hidden="true" /></span></QuoteLink>
      </header>
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        {business.demoMode && <div className="demo-banner"><span className="status-dot" /><span>Protótipo comercial não oficial <span className="demo-banner-detail">· Serviços demonstrativos e fotografias de banco</span></span></div>}
        <Services /><Process /><About /><Contact />
      </main>
      <Footer />
    </div>
    <WhatsAppButton />
  </>;
}
