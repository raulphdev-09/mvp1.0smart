import { Building2, Home, MapPin, Smartphone, Wrench } from 'lucide-react';

export const navigationItems = [
  { id: 'inicio', label: 'Início', icon: Home },
  { id: 'servicos', label: 'Serviços', icon: Smartphone },
  { id: 'processo', label: 'Como funciona', icon: Wrench },
  { id: 'sobre', label: 'Sobre', icon: Building2 },
  { id: 'contato', label: 'Contato', icon: MapPin },
] as const;
