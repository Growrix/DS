'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Sun, Menu, X, Phone } from 'lucide-react';
import type { TemplateNavigationItem } from '@/lib/foundation-contract';
import type { CompanyInfo } from '@/types/service';

type HeaderProps = {
  companyInfo: CompanyInfo;
  navigation: TemplateNavigationItem[];
};

export function Header({ companyInfo, navigation }: HeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className='bg-white border-b border-gray-100 sticky top-0 z-50 shadow-soft'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          <Link href='/' className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center'>
              <Sun className='w-6 h-6 text-white' />
            </div>
            <div>
              <p className='text-lg font-display font-bold text-gray-900 leading-tight'>{companyInfo.name}</p>
              <p className='text-xs text-gray-500'>{companyInfo.tagline}</p>
            </div>
          </Link>
          <nav className='hidden md:flex items-center gap-6'>
            {navigation.map(l => <Link key={l.href} href={l.href} className='text-gray-600 hover:text-primary-500 font-medium transition-colors text-sm'>{l.label}</Link>)}
            <a href={'tel:' + companyInfo.phone} className='flex items-center gap-2 bg-primary-500 text-white px-5 py-2.5 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-sm'>
              <Phone className='w-4 h-4' />{companyInfo.phone}
            </a>
          </nav>
          <button className='md:hidden p-2' onClick={() => setOpen(!open)}>
            {open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
        {open && (
          <nav className='md:hidden py-4 border-t border-gray-100 flex flex-col gap-3'>
            {navigation.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className='text-gray-700 hover:text-primary-500 font-medium py-1'>{l.label}</Link>)}
            <a href={'tel:' + companyInfo.phone} className='bg-primary-500 text-white px-5 py-3 rounded-lg font-semibold text-center'>{companyInfo.phone}</a>
          </nav>
        )}
      </div>
    </header>
  );
}