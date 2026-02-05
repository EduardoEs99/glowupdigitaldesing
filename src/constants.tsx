import type { NavItem, Service, Stat, Testimonial } from './types';
import { Rocket, Globe, Smartphone, BarChart3, Palette, Megaphone } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Desarrollo Web',
    description: 'Sitios web ultrarrápidos y visualmente impactantes que convierten visitas en clientes.',
    icon: Globe,
    color: 'text-cyan-400'
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Estrategias de contenido viral para Instagram, TikTok y LinkedIn que construyen comunidad.',
    icon: Smartphone,
    color: 'text-fuchsia-400'
  },
  {
    id: 'branding',
    title: 'Branding & Diseño',
    description: 'Identidad visual completa: desde el logotipo hasta el tono de voz de tu marca.',
    icon: Palette,
    color: 'text-violet-400'
  },
  {
    id: 'ads',
    title: 'Paid Media (Ads)',
    description: 'Campañas de alto ROI en Meta Ads y Google Ads segmentadas a tu cliente ideal.',
    icon: Megaphone,
    color: 'text-orange-400'
  },
  {
    id: 'seo',
    title: 'Posicionamiento SEO',
    description: 'Domina los resultados de búsqueda y atrae tráfico orgánico de calidad constante.',
    icon: BarChart3,
    color: 'text-green-400'
  },
  {
    id: 'growth',
    title: 'Growth Hacking',
    description: 'Experimentos rápidos y análisis de datos para escalar tu facturación exponencialmente.',
    icon: Rocket,
    color: 'text-red-400'
  }
];

export const STATS: Stat[] = [
  { value: '+150', label: 'Proyectos' },
  { value: '98%', label: 'Retención' },
  { value: '+5', label: 'Años Exp.' },
  { value: '24/7', label: 'Soporte' },
];

// IMÁGENES: Puedes reemplazar estas URLs por las fotos reales de tus clientes
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carolina Silva",
    role: "CEO, TechStart",
    content: "El cambio de imagen fue radical. Pasamos de ser una startup más a vernos como líderes del sector. El ROI se pagó solo en 2 meses.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Felipe Morales",
    role: "Fundador, EcoMarket",
    content: "Increíble atención al detalle. Entendieron mi visión de sostenibilidad y la tradujeron en una web moderna y rápida.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Andrea Riquelme",
    role: "Directora, Clínica Vital",
    content: "Nuestras citas online aumentaron un 200% gracias a la campaña de Google Ads que diseñaron. Son verdaderos expertos.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  }
];
