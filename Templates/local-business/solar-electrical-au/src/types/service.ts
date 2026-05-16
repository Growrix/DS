export interface Service {
  id: string; title: string; slug: string; description: string;
  icon: string; features: string[]; benefits: string[]; image: string;
  pricing: { from: number; currency: 'AUD'; unit?: string; };
  popular?: boolean;
}
export interface Testimonial {
  id: string; name: string; location: string; rating: number;
  comment: string; service: string; date: string;
}
export interface FAQ {
  id: string; question: string; answer: string; category: string;
}
export interface CompanyInfo {
  name: string; tagline: string; description: string;
  phone: string; email: string; abn: string;
  address: { street: string; suburb: string; state: string; postcode: string; };
  hours: { weekdays: string; saturday: string; sunday: string; };
  social: { facebook?: string; instagram?: string; linkedin?: string; };
}