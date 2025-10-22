'use client';

import { useState } from 'react';

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Chief Human Resources Officer",
    company: "TechCorp Global",
    bio: "Sarah has over 15 years of experience in strategic HR leadership, specializing in digital transformation and employee engagement.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "VP of People Operations",
    company: "InnovateLabs",
    bio: "Michael is a thought leader in remote work culture and has pioneered several innovative HR practices in the tech industry.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Director of Diversity & Inclusion",
    company: "Global Enterprises",
    bio: "Dr. Rodriguez is a renowned expert in workplace diversity and has authored several books on inclusive leadership.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Head of Talent Acquisition",
    company: "FutureWork Solutions",
    bio: "James specializes in AI-driven recruitment strategies and has helped companies scale their talent acquisition processes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=facee"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #112250 0%, #3B507D 100%)' }}>
      {/* Navbar */}
      <nav className="relative z-20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/logos/1.png" 
                alt="HR Vista Logo" 
                className="h-10 w-10 mr-3 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="w-10 h-10 rounded-lg mr-3 items-center justify-center hidden" style={{ backgroundColor: '#E0C58E' }}>
                <span className="text-lg font-bold" style={{ color: '#112250' }}>HV</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#speakers" className="text-sm font-medium transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>
                  Speakers
                </a>
                <a href="#stats" className="text-sm font-medium transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>
                  About
                </a>
                <a href="#contact" className="text-sm font-medium transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>
                  Contact
                </a>
                <button className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#E0C58E', color: '#112250' }}>
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button className="p-2 rounded-lg" style={{ backgroundColor: '#E0C58E20' }}>
                <svg className="w-6 h-6" style={{ color: '#F5F0EA' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E0C58E' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Header */}
        <header className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#F5F0EA' }}>
                HR Vista
                <span className="block" style={{ color: '#E0C58E' }}>
                  2.0
                </span>
          </h1>
              
              <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed" style={{ color: '#D9CBC2' }}>
                Shaping the Future of Human Resources
              </p>
              
              <p className="text-lg mb-12" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                15-16 November 2025 • Christ Deemed to be University • Pune Lavasa Campus
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <button className="px-8 py-4 border-2 font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105" style={{ borderColor: '#E0C58E', color: '#F5F0EA' }}>
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse" style={{ backgroundColor: '#E0C58E30' }}></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full blur-xl animate-pulse delay-1000" style={{ backgroundColor: '#D9CBC230' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full blur-xl animate-pulse delay-2000" style={{ backgroundColor: '#F5F0EA30' }}></div>
      </div>

      <main className="relative z-10">

        {/* Speakers Section */}
        <section id="speakers" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                Featured Speakers
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#D9CBC2' }}>
                Meet our distinguished panel of HR leaders and industry experts who will share their insights and experiences.
          </p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, index) => (
                <div 
                  key={speaker.id} 
                  className="group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border"
                  style={{ 
                    backgroundColor: '#F5F0EA20', 
                    borderColor: '#E0C58E40',
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="text-center">
                    {/* Speaker Photo */}
                    <div className="relative mb-6">
                      <img 
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: '#F5F0EA' }}>
                      {speaker.name}
                    </h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#E0C58E' }}>
                      {speaker.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                      {speaker.company}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#D9CBC2' }}>
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </main>

      {/* Footer */}
      <footer id="contact" className="relative z-10 py-16" style={{ backgroundColor: '#112250' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/logos/1.png" 
                  alt="HR Vista Logo" 
                  className="h-8 w-8 mr-3 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="w-8 h-8 rounded-lg mr-3 items-center justify-center hidden" style={{ backgroundColor: '#E0C58E' }}>
                  <span className="text-sm font-bold" style={{ color: '#112250' }}>HV</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#F5F0EA' }}>
                  HR Vista 2.0
                </h3>
              </div>
              <p className="text-sm mb-6 max-w-md" style={{ color: '#D9CBC2' }}>
                Shaping the future of Human Resources through innovative strategies, 
                industry insights, and transformative leadership.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" style={{ backgroundColor: '#E0C58E20' }}>
                  <svg className="w-5 h-5" style={{ color: '#F5F0EA' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" style={{ backgroundColor: '#E0C58E20' }}>
                  <svg className="w-5 h-5" style={{ color: '#F5F0EA' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" style={{ backgroundColor: '#E0C58E20' }}>
                  <svg className="w-5 h-5" style={{ color: '#F5F0EA' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#F5F0EA' }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><a href="#speakers" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>Speakers</a></li>
                <li><a href="#stats" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>About Event</a></li>
                <li><a href="#contact" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>Contact Us</a></li>
                <li><a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>Download Brochure</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#F5F0EA' }}>
                Contact Info
              </h4>
              <div className="space-y-2">
                <p className="text-sm" style={{ color: '#D9CBC2' }}>
                  📍 Christ Deemed to be University,<br />
                  Pune Lavasa Campus
                </p>
                <p className="text-sm" style={{ color: '#D9CBC2' }}>
                  📅 15-16 November 2025
                </p>
                <p className="text-sm" style={{ color: '#D9CBC2' }}>
                  📧 info@hrvista.com
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-12 pt-8" style={{ borderColor: '#3B507D' }}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-4 md:mb-0" style={{ color: '#D9CBC2' }}>
                © 2025 HR Vista 2.0. All rights reserved.
              </p>
              <p className="text-sm" style={{ color: '#D9CBC2' }}>
                Developed by Tanishq Saini
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}