import Link from 'next/link';
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { companyInfo } from '@/lib/data/company';
const serviceLinks = ['Solar Panel Installation','Battery Storage Systems','Electrical Services','Commercial Solar','EV Charger Installation'];
const companyLinks = [{label:'About Us',href:'/about'},{label:'Projects',href:'/projects'},{label:'Contact',href:'/contact'}];
export function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid md:grid-cols-4 gap-10 mb-12'>
          <div>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center'><Sun className='w-6 h-6 text-white' /></div>
              <p className='text-lg font-display font-bold'>{companyInfo.name}</p>
            </div>
            <p className='text-gray-400 text-sm mb-3'>{companyInfo.description}</p>
            <p className='text-gray-500 text-xs'>ABN: {companyInfo.abn}</p>
            <p className='text-gray-500 text-xs mt-1'>CEC Accredited Installer</p>
          </div>
          <div>
            <h4 className='font-semibold mb-4 text-gray-200'>Services</h4>
            <ul className='space-y-2'>{serviceLinks.map(s => <li key={s}><a href='/#services' className='text-gray-400 hover:text-primary-400 text-sm transition-colors'>{s}</a></li>)}</ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4 text-gray-200'>Company</h4>
            <ul className='space-y-2'>{companyLinks.map(l => <li key={l.href}><Link href={l.href} className='text-gray-400 hover:text-primary-400 text-sm transition-colors'>{l.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4 text-gray-200'>Contact</h4>
            <div className='space-y-3 text-sm'>
              <a href={'tel:' + companyInfo.phone} className='flex items-center gap-2 text-gray-400 hover:text-primary-400'><Phone className='w-4 h-4' />{companyInfo.phone}</a>
              <a href={'mailto:' + companyInfo.email} className='flex items-center gap-2 text-gray-400 hover:text-primary-400'><Mail className='w-4 h-4' />{companyInfo.email}</a>
              <div className='flex items-start gap-2 text-gray-400'><MapPin className='w-4 h-4 mt-0.5' /><span>{companyInfo.address.street}, {companyInfo.address.suburb} {companyInfo.address.state} {companyInfo.address.postcode}</span></div>
            </div>
            <div className='flex gap-3 mt-4'>
              <a href={companyInfo.social.facebook || '#'} className='w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors'><Facebook className='w-4 h-4' /></a>
              <a href={companyInfo.social.instagram || '#'} className='w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors'><Instagram className='w-4 h-4' /></a>
              <a href={companyInfo.social.linkedin || '#'} className='w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors'><Linkedin className='w-4 h-4' /></a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-500 text-sm'>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='text-gray-500 hover:text-gray-300 text-sm'>Privacy Policy</a>
            <a href='#' className='text-gray-500 hover:text-gray-300 text-sm'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}