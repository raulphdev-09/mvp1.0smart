import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { business } from '../../config/business';
import { getWhatsAppUrl } from '../../lib/whatsapp';
export function WhatsAppButton() {
  const url = getWhatsAppUrl(business.whatsapp);
  if (!url) return null;
  return <a className="floating-contact" href={url} target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento pelo WhatsApp (abre em nova aba)"><MessageCircle size={22} /><span>Conversar</span><ArrowUpRight size={18} /></a>;
}
