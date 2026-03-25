export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface UseCase {
  title: string;
  industry: string;
  description: string;
  agents: string[];
  metrics: { label: string; value: string }[];
  color: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface PricingTier {
  name: string;
  price: string | null;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface DocSection {
  id: string;
  title: string;
  items: DocItem[];
}

export interface DocItem {
  id: string;
  title: string;
  href: string;
  badge?: string;
}
