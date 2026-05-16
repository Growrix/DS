import { Shield, Award, Clock, Users, ThumbsUp, Leaf } from 'lucide-react';
const reasons = [
  { icon:Award, title:'CEC Accredited', desc:'All installers are Clean Energy Council accredited ensuring quality and compliance.' },
  { icon:Shield, title:'25-Year Warranty', desc:'Comprehensive product and workmanship warranties protecting your investment.' },
  { icon:Clock, title:'Fast Installation', desc:'Most residential systems installed within 1-2 days with minimal disruption.' },
  { icon:Users, title:'Local Experts', desc:'Australian-owned with deep knowledge of local regulations and incentives.' },
  { icon:ThumbsUp, title:'98% Satisfaction', desc:'Thousands of happy customers across Queensland and beyond.' },
  { icon:Leaf, title:'Eco Committed', desc:'Helping Australians reduce carbon footprint and build a sustainable future.' }
];
export function WhyUsSection() {
  return (
    <section id='about' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <span className='text-primary-500 font-semibold text-sm uppercase tracking-wider'>Why Choose Us</span>
          <h2 className='text-3xl md:text-5xl font-display font-bold text-gray-900 mt-2 mb-4'>The SolarTech Difference</h2>
          <p className='text-xl text-gray-500 max-w-2xl mx-auto'>Over 15 years delivering premium solar and electrical solutions to Australian homes and businesses.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {reasons.map(function(r) { var Icon = r.icon; return (
            <div key={r.title} className='bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-shadow'>
              <div className='w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4'><Icon className='w-6 h-6 text-white' /></div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>{r.title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{r.desc}</p>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}