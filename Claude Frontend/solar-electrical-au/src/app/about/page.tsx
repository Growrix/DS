import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { companyInfo } from '@/lib/data/company';
import { Shield, Award, Users, Leaf } from 'lucide-react';
const values = [
  { icon:Award, title:'Quality First', desc:'We only use the highest quality Tier 1 solar panels and components from reputable manufacturers.' },
  { icon:Shield, title:'Safety Always', desc:'All work is performed to Australian standards with full compliance and insurance.' },
  { icon:Users, title:'Customer Focused', desc:'We listen, advise, and deliver solutions tailored to each customer\'s unique needs.' },
  { icon:Leaf, title:'Sustainability', desc:'Committed to helping Australia transition to clean, renewable energy sources.' }
];
const team = [
  { name:'Michael Harrison', role:'CEO & Founder', exp:'20+ years' },
  { name:'Sarah Chen', role:'Head of Installations', exp:'15+ years' },
  { name:'James Kowalski', role:'Lead Electrician', exp:'18+ years' },
  { name:'Emma Williams', role:'Customer Relations', exp:'10+ years' }
];
export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <section className='bg-gradient-to-br from-primary-50 to-white py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <span className='text-primary-500 font-semibold text-sm uppercase tracking-wider'>About Us</span>
            <h1 className='text-4xl md:text-6xl font-display font-bold text-gray-900 mt-2 mb-6'>Powering Australia\'s<br/>Renewable Future</h1>
            <p className='text-xl text-gray-500 max-w-3xl mx-auto'>{companyInfo.description}</p>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl font-display font-bold text-gray-900 mb-6'>Our Story</h2>
                <p className='text-gray-600 mb-4 leading-relaxed'>Founded in 2009, SolarTech Australia began with a simple mission: to make renewable energy accessible and affordable for every Australian home and business.</p>
                <p className='text-gray-600 mb-4 leading-relaxed'>Over 15 years, we have grown from a small Brisbane-based team to one of Queensland\'s most trusted solar and electrical services providers, completing over 2,500 installations.</p>
                <p className='text-gray-600 leading-relaxed'>We are 100% Australian-owned and operated, with deep expertise in local regulations, government incentives, and the unique challenges of the Australian climate.</p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {[{v:'2009',l:'Year Founded'},{v:'2,500+',l:'Installations'},{v:'QLD',l:'Based In'},{v:'98%',l:'Satisfaction'}].map(function(s){ return (
                  <div key={s.l} className='bg-primary-50 rounded-2xl p-6 text-center'>
                    <p className='text-3xl font-display font-bold text-primary-500 mb-1'>{s.v}</p>
                    <p className='text-gray-600 text-sm'>{s.l}</p>
                  </div>
                ); })}
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-display font-bold text-gray-900 text-center mb-12'>Our Values</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {values.map(function(v){ var Icon=v.icon; return (
                <div key={v.title} className='bg-white rounded-2xl p-6 shadow-soft border border-gray-100 text-center'>
                  <div className='w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4'><Icon className='w-6 h-6 text-primary-500' /></div>
                  <h3 className='font-bold text-gray-900 mb-2'>{v.title}</h3>
                  <p className='text-gray-500 text-sm leading-relaxed'>{v.desc}</p>
                </div>
              ); })}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-display font-bold text-gray-900 text-center mb-12'>Meet Our Team</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {team.map(function(m){ return (
                <div key={m.name} className='bg-gray-50 rounded-2xl p-6 text-center border border-gray-100'>
                  <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold'>
                    {m.name.split(' ').map(function(n){ return n[0]; }).join('')}
                  </div>
                  <h3 className='font-bold text-gray-900'>{m.name}</h3>
                  <p className='text-primary-500 text-sm mt-1'>{m.role}</p>
                  <p className='text-gray-400 text-xs mt-1'>{m.exp} experience</p>
                </div>
              ); })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}