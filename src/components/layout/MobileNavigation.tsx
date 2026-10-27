import { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { business } from '../../config/business';
import { navigationItems } from './navigation';

interface MobileNavigationProps { activeSection: string }

export function MobileNavigation({ activeSection }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) menuButton.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const desktop = window.matchMedia('(min-width: 768px)');
    function onResize() { if (desktop.matches) closeMenu(false); }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = drawer.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !drawer.current?.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !drawer.current?.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    onResize();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open, closeMenu]);

  return (
    <>
      <header className="mobile-header">
        <a href="#inicio" className="mobile-brand" aria-label={`${business.name} — início`}>{business.logo && <img className="brand-logo" src={business.logo} alt="" width={28} height={28} />}{business.name}</a>
        <button
          ref={menuButton}
          type="button"
          className="mobile-menu-button"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
        ><Menu size={24} aria-hidden="true" /></button>
      </header>
      {open && (
        <div className="mobile-menu-layer">
          <div className="mobile-overlay" onClick={() => closeMenu()} aria-hidden="true" />
          <div
            ref={drawer}
            id="mobile-navigation"
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="mobile-drawer-header">
              <span id="mobile-menu-title" className="mobile-drawer-title">{business.name}</span>
              <button ref={closeButton} type="button" className="mobile-close-button" aria-label="Fechar menu" onClick={() => closeMenu()}>
                <X size={24} aria-hidden="true" />
              </button>
            </div>
            <nav className="mobile-nav" aria-label="Navegação principal móvel">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`mobile-nav-link${activeSection === id ? ' is-active' : ''}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={() => closeMenu()}
                ><Icon size={22} strokeWidth={1.7} aria-hidden="true" /><span>{label}</span></a>
              ))}
            </nav>
            {business.demoMode && <p className="mobile-drawer-note">Conteúdo de demonstração<br />Protótipo comercial não oficial.</p>}
          </div>
        </div>
      )}
    </>
  );
}
