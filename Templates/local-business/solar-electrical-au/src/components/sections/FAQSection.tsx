'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data/faq';
export function FAQSection() {
  var [open, setOpen] = useState<string|null>(null);
  return (
    <section id='faq' className='py-20 bg-gray-50'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <span className='text-primary-500 font-semibold text-sm uppercase tracking-wider'>FAQs</span>
          <h2 className='text-3xl md:text-5xl font-display font-bold text-gray-900 mt-2 mb-4'>Frequently Asked Questions</h2>
          <p className='text-xl text-gray-500'>Everything you need to know about solar energy in Australia.</p>
        </div>
        <div className='space-y-3'>
          {faqs.map(function(faq) { return (
            <div key={faq.id} className='bg-white rounded-xl border border-gray-100 shadow-soft overflow-hidden'>
              <button className='w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors'
                onClick={function(){ setOpen(open===faq.id ? null : faq.id); }}>
                <span className='font-semibold text-gray-900 pr-4'>{faq.question}</span>
                <ChevronDown className={'w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ' + (open===faq.id ? 'rotate-180' : '')} />
              </button>
              {open===faq.id && <div className='px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3'>{faq.answer}</div>}
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}