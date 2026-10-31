import type { ReactNode } from 'react';
import { business } from '../../config/business';
import { getWhatsAppUrl } from '../../lib/whatsapp';
interface Props { children: ReactNode; className?: string; service?: string; direct?: boolean }
export function QuoteLink({ children, className = 'button button-primary', service, direct = false }: Props) {
  const url = direct ? getWhatsAppUrl(business.whatsapp, service) : null;
  return <a className={className} href={url ?? '#contato'} target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined}>{children}</a>;
}
