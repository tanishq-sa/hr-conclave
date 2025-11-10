'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage = 'home' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Panelists', href: '/#panelists' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="relative z-20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logos/1.png" 
                alt="HR Vista Logo" 
                width={40}
                height={40}
                className="h-10 w-10 mr-3 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="w-10 h-10 rounded-lg mr-3 hidden items-center justify-center" style={{ backgroundColor: '#E0C58E' }}>
                <span className="text-lg font-bold" style={{ color: '#112250' }}>HV</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center">
              <div className="flex items-center space-x-8 mr-8">
                <Link 
                  href="/#panelists" 
                  className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${activePage === 'panelists' ? 'opacity-100' : 'opacity-80'}`} 
                  style={{ color: activePage === 'panelists' ? '#E0C58E' : '#D9CBC2' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Panelists
                </Link>
                <Link 
                  href="/media" 
                  className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${activePage === 'media' ? 'opacity-100' : 'opacity-80'}`} 
                  style={{ color: activePage === 'media' ? '#E0C58E' : '#D9CBC2' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Media
                </Link>
                <Link 
                  href="/contact" 
                  className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${activePage === 'contact' ? 'opacity-100' : 'opacity-80'}`} 
                  style={{ color: activePage === 'contact' ? '#E0C58E' : '#D9CBC2' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap" 
                  style={{ backgroundColor: '#E0C58E', color: '#112250' }}
                  onClick={() => window.open('/HRPoster.pdf', '_blank')}
                >
                  View Brochure
                </button>
                <button 
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap" 
                  style={{ backgroundColor: '#E0C58E', color: '#112250' }}
                  onClick={() => window.open('/HRPoster1.pdf', '_blank')}
                >
                  View Itinerary
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-lg" 
              style={{ backgroundColor: '#E0C58E20' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                style={{ color: '#F5F0EA' }} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-30" style={{ backgroundColor: '#112250' }}>
            <div className="px-4 py-6 space-y-4 border-t" style={{ borderColor: '#3B507D' }}>
              <Link 
                href="/#panelists" 
                className={`block text-sm font-medium transition-colors duration-300 hover:opacity-80 ${activePage === 'panelists' ? 'opacity-100' : 'opacity-80'}`} 
                style={{ color: activePage === 'panelists' ? '#E0C58E' : '#D9CBC2' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Panelists
              </Link>
              <Link 
                href="/media" 
                className={`block text-sm font-medium transition-colors duration-300 hover:opacity-80 ${activePage === 'media' ? 'opacity-100' : 'opacity-80'}`} 
                style={{ color: activePage === 'media' ? '#E0C58E' : '#D9CBC2' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Media
              </Link>
              <Link 
                href="/contact" 
                className={`block text-sm font-medium transition-colors duration-300 hover:opacity-80 ${activePage === 'contact' ? 'opacity-100' : 'opacity-80'}`} 
                style={{ color: activePage === 'contact' ? '#E0C58E' : '#D9CBC2' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button 
                className="px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 w-full mb-2" 
                style={{ backgroundColor: '#E0C58E', color: '#112250' }}
                onClick={() => { window.open('/HRPoster.pdf', '_blank'); setIsMobileMenuOpen(false); }}
              >
                View Brochure
              </button>
              <button 
                className="px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 w-full" 
                style={{ backgroundColor: '#E0C58E', color: '#112250' }}
                onClick={() => { window.open('/itinerary.pdf', '_blank'); setIsMobileMenuOpen(false); }}
              >
                Download Itinerary
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
