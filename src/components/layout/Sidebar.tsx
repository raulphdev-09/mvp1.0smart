import { ArrowUpRight, Menu, PanelLeftClose, Smartphone } from 'lucide-react';
import { business } from '../../config/business';
import { navigationItems } from './navigation';

interface SidebarProps {
  expanded: boolean;
  onToggle: () => void;
  activeSection: string;
}

export function Sidebar({ expanded, onToggle, activeSection }: SidebarProps) {
  return (
    <aside className={`sidebar${expanded ? ' sidebar-expanded' : ''}`} aria-label="Navegação lateral">
      <a className="sidebar-brand" href="#inicio" aria-label={`${business.name} — início`} data-tooltip={business.name}>
        <span className="sidebar-brand-symbol" aria-hidden="true">{business.logo ? <img className="brand-logo" src={business.logo} alt="" width={28} height={28} /> : <Smartphone size={25} strokeWidth={1.6} />}</span>
        <span className="sidebar-brand-name">{business.name}</span>
      </a>
      <button
        className="sidebar-toggle"
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls="desktop-navigation"
        aria-label={expanded ? 'Recolher navegação' : 'Expandir navegação'}
        data-tooltip={expanded ? undefined : 'Expandir menu'}
      >
        {expanded ? <PanelLeftClose size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        <span className="sidebar-label">Recolher menu</span>
      </button>
      <nav id="desktop-navigation" className="sidebar-nav" aria-label="Navegação principal">
        {navigationItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            className={`nav-link${activeSection === id ? ' is-active' : ''}`}
            href={`#${id}`}
            aria-label={label}
            aria-current={activeSection === id ? 'location' : undefined}
            data-tooltip={expanded ? undefined : label}
          >
            <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
            <span className="sidebar-label">{label}</span>
          </a>
        ))}
      </nav>
      <div className="sidebar-footer">
        <a href="#contato" className="sidebar-contact" aria-label="Ir para contato" data-tooltip={expanded ? undefined : 'Contato'}>
          <ArrowUpRight size={22} aria-hidden="true" />
          <span className="sidebar-label">Vamos conversar</span>
        </a>
        {expanded && business.demoMode && <span className="sidebar-demo">Protótipo não oficial</span>}
      </div>
    </aside>
  );
}
