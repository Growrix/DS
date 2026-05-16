const stats = [
  { value:'2,500+', label:'Installations Completed' },
  { value:'98%', label:'Customer Satisfaction' },
  { value:'15+', label:'Years Experience' },
  { value:'25 Yr', label:'Warranty Coverage' }
];
export function StatsSection() {
  return (
    <section className='bg-gray-900 py-14'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map(function(s,i) { return (
            <div key={i} className='text-center'>
              <div className='text-4xl md:text-5xl font-display font-bold text-primary-400 mb-2'>{s.value}</div>
              <div className='text-gray-400 text-sm'>{s.label}</div>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}