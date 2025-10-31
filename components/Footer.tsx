import { FaMapMarkerAlt, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 py-16" style={{ backgroundColor: '#112250' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/logos/1.png" 
                alt="HR Vista Logo" 
                width={32}
                height={32}
                className="h-8 w-8 mr-3 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
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
              <a href="https://www.linkedin.com/company/cpcgchristlavasa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" style={{ backgroundColor: '#E0C58E20' }}>
                <svg className="w-5 h-5" style={{ color: '#F5F0EA' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/hrvista_culavasa?igsh=ZGg5anFzd2JldHoz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" style={{ backgroundColor: '#E0C58E20' }}>
                <svg className="w-5 h-5" style={{ color: '#F5F0EA' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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
              <li><a href="/#panelists" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>Panelists</a></li>
              <li><a href="/media" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>Media</a></li>
              <li><a href="/contact" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>Contact Us</a></li>
              <li><a href="/HRPoster.pdf" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#D9CBC2' }}>View Brochure</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-sm mt-0.5 flex-shrink-0" style={{ color: '#E0C58E' }} />
                <div className="text-sm" style={{ color: '#D9CBC2' }}>
                  Christ Deemed to be University,<br />
                  Pune Lavasa Campus
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-sm flex-shrink-0" style={{ color: '#E0C58E' }} />
                <span className="text-sm" style={{ color: '#D9CBC2' }}>
                  15-16th November 2025
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-sm flex-shrink-0" style={{ color: '#E0C58E' }} />
                <a href="mailto:hrvista.lavasa@christuniversity.in" className="text-sm hover:underline" style={{ color: '#D9CBC2' }}>
                  hrvista.lavasa@christuniversity.in
                </a>
              </div>
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
              Developed and Maintained by <a href="https://www.linkedin.com/in/tanishq-saini7/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#E0C58E' }}>Tanishq Saini</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
