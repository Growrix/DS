import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
const projects = [
  { id:'1', title:'6.6kW Residential Solar + Battery', location:'Brisbane, QLD', type:'Residential', size:'6.6kW', panels:20, saving:'$2,200/yr', date:'Feb 2024', desc:'Complete solar and Powerwall installation for a family home in suburban Brisbane.' },
  { id:'2', title:'50kW Commercial Rooftop Solar', location:'Gold Coast, QLD', type:'Commercial', size:'50kW', panels:120, saving:'$18,000/yr', date:'Jan 2024', desc:'Large-scale commercial installation for a Gold Coast warehouse.' },
  { id:'3', title:'10kW Solar with EV Charger', location:'Sunshine Coast, QLD', type:'Residential', size:'10kW', panels:25, saving:'$3,800/yr', date:'Mar 2024', desc:'Premium solar system with integrated EV charging for a modern home.' },
  { id:'4', title:'Switchboard Upgrade & Solar', location:'Ipswich, QLD', type:'Residential', size:'8kW', panels:20, saving:'$2,800/yr', date:'Dec 2023', desc:'Full electrical upgrade including switchboard, solar panels, and smart monitoring.' },
  { id:'5', title:'100kW Industrial Solar', location:'Toowoomba, QLD', type:'Industrial', size:'100kW', panels:240, saving:'$42,000/yr', date:'Nov 2023', desc:'Massive industrial installation cutting energy bills by 60%.' },
  { id:'6', title:'8kW Solar + Tesla Powerwall 2', location:'Redcliffe, QLD', type:'Residential', size:'8kW', panels:20, saving:'$3,200/yr', date:'Mar 2024', desc:'Premium residential install with full backup power capability.' }
];
export default function ProjectsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <section className='bg-gradient-to-br from-primary-50 to-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <span className='text-primary-500 font-semibold text-sm uppercase tracking-wider'>Portfolio</span>
            <h1 className='text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2 mb-4'>Our Projects</h1>
            <p className='text-xl text-gray-500 max-w-2xl mx-auto'>Browse our completed installations across Queensland and beyond.</p>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map(function(p){ return (
                <div key={p.id} className='bg-white rounded-2xl border border-gray-100 shadow-soft overflow-hidden hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300'>
                  <div className='h-40 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center'>
                    <span className='text-white text-4xl font-display font-bold'>{p.size}</span>
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full'>{p.type}</span>
                      <span className='text-gray-400 text-xs'>{p.date}</span>
                    </div>
                    <h3 className='font-bold text-gray-900 text-lg mb-1'>{p.title}</h3>
                    <p className='text-gray-500 text-sm mb-3'>{p.location}</p>
                    <p className='text-gray-600 text-sm mb-4 leading-relaxed'>{p.desc}</p>
                    <div className='grid grid-cols-3 gap-3 pt-4 border-t border-gray-100'>
                      <div className='text-center'><p className='font-bold text-gray-900 text-sm'>{p.size}</p><p className='text-gray-400 text-xs'>System</p></div>
                      <div className='text-center'><p className='font-bold text-gray-900 text-sm'>{p.panels}</p><p className='text-gray-400 text-xs'>Panels</p></div>
                      <div className='text-center'><p className='font-bold text-primary-500 text-sm'>{p.saving}</p><p className='text-gray-400 text-xs'>Savings</p></div>
                    </div>
                  </div>
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