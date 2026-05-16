import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
export default function ContactPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <section className='bg-gradient-to-br from-primary-50 to-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4'>Contact Us</h1>
            <p className='text-xl text-gray-500'>Get your free quote or ask us anything.</p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}