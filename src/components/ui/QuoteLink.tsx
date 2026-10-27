import type { ReactNode } from 'react';
import { business } from '../../config/business';
import { getWhatsAppUrl } from '../../lib/whatsapp';
interface Props { children: ReactNode; className?: string; service?: string }
export function QuoteLink({ children, className = 'button button-primary', service }: Props) {
  const url = getWhatsAppUrl(business.whatsapp, service);
  return <a className={className} href={url ?? '#contato'} target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined}>{children}</a>;
}
