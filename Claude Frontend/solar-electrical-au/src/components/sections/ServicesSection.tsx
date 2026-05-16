import { Sun, Battery, Zap, Building2, Wrench, Plug, Check } from 'lucide-react';
import { services } from '@/lib/data/services';
const iconMap: Record<string,any> = { sun:Sun, battery:Battery, zap:Zap, building:Building2, wrench:Wrench, plug:Plug };
export function ServicesSection() {
  return (
    <section id='services' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <span className='text-primary-500 font-semibold text-sm uppercase tracking-wider'>What We Offer</span>
          <h2 className='text-3xl md:text-5xl font-display font-bold text-gray-900 mt-2 mb-4'>Our Services</h2>
          <p className='text-xl text-gray-500 max-w-2xl mx-auto'>Comprehensive solar and electrical solutions for residential and commercial properties across Australia.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map(function(service) {
            var Icon = iconMap[service.icon] || Sun;
            return (
              <div key={service.id} className='relative bg-white rounded-2xl border border-gray-100 shadow-soft p-6 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300'>
                {service.popular && <div className='absolute -top-3 right-5 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full'>Most Popular</div>}
                <div className='w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4'>
                  <Icon className='w-6 h-6 text-primary-500' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>{service.title}</h3>
                <p className='text-gray-500 text-sm mb-4 leading-relaxed'>{service.description}</p>
                <ul className='space-y-2 mb-6'>
                  {service.features.slice(0,4).map(function(f,i) { return (
                    <li key={i} className='flex items-start gap-2 text-sm text-gray-600'>
                      <Check className='w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0' />{f}
                    </li>
                  ); })}
                </ul>
                <div className='pt-4 border-t border-gray-100 flex items-center justify-between'>
                  <div>
                    <p className='text-xs text-gray-400'>Starting from</p>
                    <p className='text-xl font-bold text-gray-900'>${service.pricing.from.toLocaleString()} AUD{service.pricing.unit ? ' ' + service.pricing.unit : ''}</p>
                  </div>
                  <a href='#contact' className='bg-primary-500 text-white px-5 py-2.5 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-sm'>Get Quote</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}