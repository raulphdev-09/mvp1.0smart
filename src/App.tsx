import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNavigation } from './components/layout/MobileNavigation';
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
  const [expanded, setExpanded] = useState(false);
  const activeSection = useActiveSection();
  return <>
    <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
    <Sidebar expanded={expanded} onToggle={() => setExpanded(!expanded)} activeSection={activeSection} />
    <MobileNavigation activeSection={activeSection} />
    <div className={`page-content${expanded ? ' navigation-expanded' : ''}`}>
      <header className="desktop-masthead">
        <a className="wordmark" href="#inicio" aria-label={`${business.name} — início`}>{business.name}<span className="brand-dot">.</span></a>
        <span className="masthead-note">Tecnologia merece cuidado.</span>
        <QuoteLink className="masthead-contact">Vamos conversar <ArrowUpRight size={17} /></QuoteLink>
      </header>
      {business.demoMode && <div className="demo-banner"><span className="status-dot" /><span>Protótipo comercial não oficial <span className="demo-banner-detail">· Conteúdo de demonstração</span></span></div>}
      <main id="conteudo" tabIndex={-1}>
        <Hero /><Services /><Process /><About /><Contact />
      </main>
      <Footer />
    </div>
    <WhatsAppButton />
  </>;
}
