import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
export function TestimonialsSection() {
  return (
    <section id='testimonials' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <span className='text-primary-500 font-semibold text-sm uppercase tracking-wider'>Testimonials</span>
          <h2 className='text-3xl md:text-5xl font-display font-bold text-gray-900 mt-2 mb-4'>What Our Customers Say</h2>
          <p className='text-xl text-gray-500 max-w-2xl mx-auto'>Join thousands of satisfied Australian customers who made the switch to solar.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map(function(t) { return (
            <div key={t.id} className='bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-soft-lg transition-all duration-300'>
              <div className='flex gap-1 mb-4'>{Array.from({length:t.rating}).map(function(_,i){ return <Star key={i} className='w-5 h-5 fill-primary-500 text-primary-500' />; })}</div>
              <p className='text-gray-700 mb-6 leading-relaxed italic text-sm'>&ldquo;{t.comment}&rdquo;</p>
              <div className='flex items-center gap-3 pt-4 border-t border-gray-200'>
                <div className='w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
                  {t.name.split(' ').map(function(n){ return n[0]; }).join('')}
                </div>
                <div>
                  <p className='font-semibold text-gray-900 text-sm'>{t.name}</p>
                  <p className='text-gray-400 text-xs'>{t.location}</p>
                  <p className='text-primary-500 text-xs'>{t.service}</p>
                </div>
              </div>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}