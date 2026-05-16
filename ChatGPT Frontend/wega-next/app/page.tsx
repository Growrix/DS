import { Menu, Search, Phone, Clock3 } from 'lucide-react'

const services=[
 {title:'Architecture & Construct Works'},
 {title:'Renovation & Material Supply'},
 {title:'Home Interior & Exterior Design'}
]
const design=[
 'Preconstruction Services','Shipbuilding Contracting','Management Certification','Virtual Design & Construction','Sustainable Design'
]
const team=['Antony Karlson','Laura Stone','Kelly Orlando','Eddie Adkins']

export default function Home(){
return <main>
<header className='bg-[#111] text-white text-sm'>
<div className='container flex justify-between py-3'>
<div className='font-bold text-3xl'>WEG<span className='text-orange'>A</span></div>
<div className='hidden md:flex gap-8 items-center'>
<div className='flex items-center gap-2'><Clock3 size={16}/> Monday - Friday 09:00 - 19:00</div>
<div className='flex items-center gap-2'><Phone size={16}/> +9090 8080 4044</div>
<button className='bg-orange px-6 py-2 font-semibold'>INQUIRY</button>
</div>
</div>
<nav className='border-t border-white/10'>
<div className='container flex justify-between items-center py-5'>
<div className='hidden md:flex gap-10 uppercase text-xs tracking-wider'>
{['Home','Our Services','Projects','News','Pages','Purchase Theme'].map(i=><span key={i}>{i}</span>)}
</div>
<div className='flex gap-4'><Menu/><Search/></div>
</div>
</nav>
</header>

<section className='relative min-h-[700px] bg-cover bg-center' style={{backgroundImage:"url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')"}}>
<div className='absolute inset-0 hero-overlay'/>
<div className='container relative z-10 text-white pt-32'>
<h1 className='text-6xl font-light leading-tight max-w-xl'>Wega is <span className='font-extrabold'>Innovation</span> In Construction</h1>
<p className='mt-8 text-lg max-w-lg text-gray-300'>Our company provides a wide selection of crawler cranes, forklifts, access platforms, mobile and tower cranes.</p>
<button className='mt-10 bg-white text-black px-8 py-4 font-semibold'>Check Services</button>
</div>
</section>

<section className='container -mt-20 relative z-20 grid md:grid-cols-3 gap-6'>
{services.map(s=><div key={s.title} className='bg-white p-10 shadow-xl'>
<div className='text-orange text-4xl mb-6'>✦</div>
<h3 className='text-2xl text-navy font-bold mb-4'>{s.title}</h3>
<p className='text-gray-500'>Yet those that embrace change thrive, building legacies that last.</p>
</div>)}
</section>

<section className='section'>
<div className='container grid md:grid-cols-2 gap-16 items-center'>
<img src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop' className='w-full h-[500px] object-cover'/>
<div>
<p className='text-orange uppercase tracking-widest mb-4'>About Company</p>
<h2 className='text-5xl font-extrabold text-navy mb-8'>A Modern Construction & Industrial Agency</h2>
<ul className='space-y-4 text-gray-600'>
<li>✔ Delivering durable infrastructure solutions.</li>
<li>✔ Expertise across residential and commercial projects.</li>
<li>✔ Innovative design backed by engineering excellence.</li>
</ul>
</div>
</div>
</section>

<section className='bg-cover bg-center py-28 text-white' style={{backgroundImage:"linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop')"}}>
<div className='container'>
<h2 className='text-6xl font-light'>Facade engineering <span className='font-bold'>Building Consultancy</span></h2>
<div className='grid md:grid-cols-4 gap-10 mt-16'>
{['Facade Consultancy','Power Supply Management','Sensor Connection','Alarm Systems & Lighting Safety'].map(i=><div key={i}><div className='text-5xl mb-4'>⌘</div><h3 className='font-semibold text-xl'>{i}</h3></div>)}
</div>
</div>
</section>

<section className='section bg-[#f5f5f5]'>
<div className='container'>
<h2 className='text-5xl text-navy font-bold mb-16'>Our Special Design Services</h2>
<div className='grid md:grid-cols-2 gap-8'>
{design.map(i=><div key={i} className='bg-white border p-12 text-center'><h3 className='text-2xl text-navy font-bold'>{i}</h3><p className='text-gray-500 mt-4'>Professional enterprise-level construction services and planning.</p></div>)}
</div>
</div>
</section>

<section className='bg-navy text-white py-24'>
<div className='container grid md:grid-cols-3 gap-10 items-center'>
<div>
<p className='uppercase text-orange'>Our Better Vision</p>
<h2 className='text-5xl font-bold mt-4'>What We Serve Site Areas</h2>
<p className='mt-6 text-gray-300'>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium.</p>
<button className='mt-8 bg-orange px-8 py-4'>READ MORE</button>
</div>
<img src='https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800&auto=format&fit=crop' className='h-[420px] object-cover w-full'/>
<div className='bg-orange p-10'>
<h3 className='text-4xl font-bold mb-8'>Get In Touch</h3>
<div className='space-y-6'>
<input className='w-full bg-transparent border-b py-3 placeholder:text-white/70' placeholder='Your Name'/>
<input className='w-full bg-transparent border-b py-3 placeholder:text-white/70' placeholder='Email Address'/>
<textarea className='w-full bg-transparent border-b py-3 placeholder:text-white/70' placeholder='Your Message'/>
<button className='bg-white text-black px-8 py-4 font-semibold'>SUBMIT</button>
</div>
</div>
</div>
</section>

<section className='section'>
<div className='container text-center'>
<p className='text-orange uppercase'>Let's Help You</p>
<h2 className='text-5xl text-navy font-bold mb-16'>Our Team Members</h2>
<div className='grid md:grid-cols-4 gap-8'>
{team.map((t,i)=><div key={t} className='border p-4'><img src={`https://picsum.photos/seed/${i+1}/400/420`} className='w-full h-[320px] object-cover'/><h3 className='text-2xl font-bold text-navy mt-4'>{t}</h3></div>)}
</div>
</div>
</section>

<footer className='bg-[#1b1b1b] text-white py-20'>
<div className='container grid md:grid-cols-4 gap-10'>
<div><div className='font-bold text-4xl mb-4'>WEG<span className='text-orange'>A</span></div><p className='text-gray-400'>Phone: (+2) 1800 555 2020</p></div>
<div><h4 className='font-bold mb-4'>Quick Links</h4><ul className='space-y-2 text-gray-400'><li>Construction Management</li><li>Management Certification</li></ul></div>
<div><h4 className='font-bold mb-4'>Our Services</h4><ul className='space-y-2 text-gray-400'><li>Virtual Design & Construction</li><li>Shipbuilding Contracting</li></ul></div>
<div><h4 className='font-bold mb-4'>Get Daily Updates</h4><input className='w-full px-4 py-3 text-black' placeholder='Enter email ID'/></div>
</div>
</footer>
</main>
}
