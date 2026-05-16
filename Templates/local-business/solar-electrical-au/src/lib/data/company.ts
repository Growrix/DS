import { CompanyInfo } from '@/types/service';
export const companyInfo: CompanyInfo = {
  name: 'SolarTech Australia',
  tagline: 'Powering Australia\'s Renewable Future',
  description: 'Leading provider of solar panel installation and electrical services across Australia. CEC accredited, fully licensed, and committed to sustainable energy solutions.',
  phone: '+61 1300 765 278',
  email: 'info@solartechau.com.au',
  abn: '12 345 678 901',
  address: { street: '123 Solar Street', suburb: 'Brisbane', state: 'QLD', postcode: '4000' },
  hours: { weekdays: '7:00 AM - 6:00 PM', saturday: '8:00 AM - 4:00 PM', sunday: 'Closed' },
  social: {
    facebook: 'https://facebook.com/solartechau',
    instagram: 'https://instagram.com/solartechau',
    linkedin: 'https://linkedin.com/company/solartechau'
  }
};