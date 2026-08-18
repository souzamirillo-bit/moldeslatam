export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  originalPrice?: string;
  freeBadge: string;
  iconName: string;
  highlights: string[];
  image?: string;
}

export interface PricingPlan {
  id: 'basic' | 'complete';
  name: string;
  badge?: string;
  originalPrice: string;
  currentPrice: string;
  savings?: string;
  description?: string;
  features: {
    included: string[];
    excluded?: string[];
  };
  bonusesIncluded?: string[];
  ctaText: string;
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  time: string;
  messages: {
    sender: 'customer' | 'sandra';
    text: string;
    time?: string;
  }[];
  salesHighlight?: string;
}

export interface MoldCategory {
  id: string;
  title: string;
  subtitle: string;
  dimensions: string;
  meshType: string;
  count: number;
  image: string;
  description: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
