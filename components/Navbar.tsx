import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on navigation
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-sans text-2xl font-medium tracking-tight text-white hover:opacity-90 transition-opacity">
          tangent.
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 text-xs font-medium text-gray-400 uppercase tracking-wide">
        <Link to="/" className="text-white transition-colors hover:text-white">Home</Link>
        
        {/* Services Dropdown */}
        <div className="relative group" ref={dropdownRef}>
          <button 
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="flex items-center gap-1 transition-colors hover:text-white focus:outline-none group-hover:text-white"
          >
            Services
            <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#111] border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-200 origin-top ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
            <div className="py-1">
              <Link 
                to="/services/generative-ai" 
                className="block px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                Generative AI
              </Link>
              <Link 
                to="/services/web-development" 
                className="block px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                Web Development
              </Link>
            </div>
          </div>
        </div>

        <a href="/#careers" className="transition-colors hover:text-white">Careers</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:block px-6 py-2 text-xs font-medium text-white bg-[#1A1A1A] rounded-full hover:bg-[#252525] transition-all border border-white/10">
          Book a Call
        </button>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};