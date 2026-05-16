import { Phone, ArrowRight, Shield, Award, Star } from 'lucide-react';
import { companyInfo } from '@/lib/data/company';
const badges = [{ icon:Star, text:'5-Star Rated' },{ icon:Shield, text:'Fully Licensed & Insured' },{ icon:Award, text:'CEC Accredited' }];
export function HeroSection() {
  return (
    <section className='relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32 overflow-hidden'>
      <div className='absolute inset-0 bg-grid-pattern' />
      <div className='absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='max-w-3xl'>
          <div className='flex flex-wrap gap-3 mb-8'>
            {badges.map(function(b) { var Icon = b.icon; return (
              <div key={b.text} className='inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-soft'>
                <Icon className='w-4 h-4 text-primary-500' />{b.text}
              </div>
            ); })}
          </div>
          <h1 className='text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight'>
            Save Up to{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600'>80%</span>
            {' '}on Your<br />Electricity Bills
          </h1>
          <p className='text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl'>
            Professional solar panel installation and electrical services across Australia. CEC accredited, fully licensed, with 25-year warranties and government rebate assistance.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a href='#contact' className='inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-xl hover:bg-primary-600 transition-all shadow-lg font-semibold text-lg'>
              Get Free Quote <ArrowRight className='w-5 h-5' />
            </a>
            <a href={'tel:' + companyInfo.phone} className='inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-primary-500 hover:text-primary-500 transition-colors font-semibold text-lg bg-white'>
              <Phone className='w-5 h-5' />{companyInfo.phone}
            </a>
          </div>
          <p className='mt-6 text-sm text-gray-500'>Free site assessment &nbsp;|&nbsp; No obligation quote &nbsp;|&nbsp; Finance available</p>
        </div>
      </div>
    </section>
  );
}