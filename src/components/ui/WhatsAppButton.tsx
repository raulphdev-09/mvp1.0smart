import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { business } from '../../config/business';
import { getWhatsAppUrl } from '../../lib/whatsapp';
export function WhatsAppButton() {
  const [contactVisible, setContactVisible] = useState(false);
  const url = getWhatsAppUrl(business.whatsapp);
  useEffect(() => {
    const contact = document.getElementById('contato');
    if (!contact) return;
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting));
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);
  if (!url || contactVisible) return null;
  return <a className="floating-contact" href={url} target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento pelo WhatsApp (abre em nova aba)"><MessageCircle size={22} /><span>Conversar</span><ArrowUpRight size={18} /></a>;
}
