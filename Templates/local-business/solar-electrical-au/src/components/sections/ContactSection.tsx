'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { companyInfo } from '@/lib/data/company';
import { services } from '@/lib/data/services';
export function ContactSection() {
  var [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent) { e.preventDefault(); setSubmitted(true); }
  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <span className='text-primary-500 font-semibold text-sm uppercase tracking-wider'>Get In Touch</span>
          <h2 className='text-3xl md:text-5xl font-display font-bold text-gray-900 mt-2 mb-4'>Ready to Go Solar?</h2>
          <p className='text-xl text-gray-500 max-w-2xl mx-auto'>Get your free, no-obligation quote today. Our experts will design the perfect system for your needs.</p>
        </div>
        <div className='grid lg:grid-cols-5 gap-12'>
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-primary-500 rounded-2xl p-6 text-white'>
              <h3 className='text-xl font-bold mb-5'>Contact Information</h3>
              <div className='space-y-4'>
                <a href={'tel:' + companyInfo.phone} className='flex items-center gap-3 hover:opacity-80'>
                  <div className='w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center'><Phone className='w-5 h-5' /></div>
                  <div><p className='text-xs text-primary-100'>Phone</p><p className='font-semibold'>{companyInfo.phone}</p></div>
                </a>
                <a href={'mailto:' + companyInfo.email} className='flex items-center gap-3 hover:opacity-80'>
                  <div className='w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center'><Mail className='w-5 h-5' /></div>
                  <div><p className='text-xs text-primary-100'>Email</p><p className='font-semibold'>{companyInfo.email}</p></div>
                </a>
                <div className='flex items-start gap-3'>
                  <div className='w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mt-0.5'><MapPin className='w-5 h-5' /></div>
                  <div><p className='text-xs text-primary-100'>Address</p><p className='font-semibold'>{companyInfo.address.street}, {companyInfo.address.suburb} {companyInfo.address.state} {companyInfo.address.postcode}</p></div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mt-0.5'><Clock className='w-5 h-5' /></div>
                  <div><p className='text-xs text-primary-100'>Hours</p><p className='font-semibold text-sm'>Mon-Fri: {companyInfo.hours.weekdays}</p><p className='font-semibold text-sm'>Sat: {companyInfo.hours.saturday}</p><p className='font-semibold text-sm'>Sun: {companyInfo.hours.sunday}</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-3 bg-gray-50 rounded-2xl p-8 border border-gray-100'>
            {submitted ? (
              <div className='text-center py-12'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl'>✅</div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Thank You!</h3>
                <p className='text-gray-500'>We received your request. Our team will contact you within 24 hours.</p>
                <button onClick={function(){ setSubmitted(false); }} className='mt-6 text-primary-500 font-semibold hover:underline'>Submit another enquiry</button>
              </div>
            ) : (
              <>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>Request a Free Quote</h3>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div><label className='block text-sm font-semibold text-gray-700 mb-1.5'>First Name *</label><input required type='text' placeholder='John' className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm' /></div>
                    <div><label className='block text-sm font-semibold text-gray-700 mb-1.5'>Last Name *</label><input required type='text' placeholder='Smith' className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm' /></div>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div><label className='block text-sm font-semibold text-gray-700 mb-1.5'>Phone *</label><input required type='tel' placeholder='0400 000 000' className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm' /></div>
                    <div><label className='block text-sm font-semibold text-gray-700 mb-1.5'>Email *</label><input required type='email' placeholder='john@example.com' className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm' /></div>
                  </div>
                  <div><label className='block text-sm font-semibold text-gray-700 mb-1.5'>Suburb & Postcode *</label><input required type='text' placeholder='Brisbane 4000' className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm' /></div>
                  <div><label className='block text-sm font-semibold text-gray-700 mb-1.5'>Service *</label><select required className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm'><option value=''>Select a service...</option>{services.map(function(s){ return <option key={s.id} value={s.slug}>{s.title}</option>; })}</select></div>
                  <div><label className='block text-sm font-semibold text-gray-700 mb-1.5'>Message</label><textarea rows={3} placeholder='Tell us about your project...' className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm resize-none' /></div>
                  <button type='submit' className='w-full bg-primary-500 text-white px-8 py-4 rounded-xl hover:bg-primary-600 transition-colors font-semibold text-base shadow-lg flex items-center justify-center gap-2'>
                    <Send className='w-5 h-5' /> Send Quote Request
                  </button>
                  <p className='text-center text-xs text-gray-400'>Free assessment &nbsp;|&nbsp; No obligation &nbsp;|&nbsp; Response within 24 hours</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}