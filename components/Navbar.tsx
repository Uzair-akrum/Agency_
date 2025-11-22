import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close dropdown and mobile menu on navigation
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5 md:border-none">
        <div className="flex items-center gap-2 relative z-50">
          <Link to="/" className="font-sans text-2xl font-medium tracking-tight text-white hover:opacity-90 transition-opacity">
            tangent.
          </Link>
        </div>

        {/* Desktop Menu */}
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
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 text-xs font-medium text-white bg-[#1A1A1A] rounded-full hover:bg-[#252525] transition-all border border-white/10">
            Book a Call
          </button>
          <button 
            className="md:hidden text-white relative z-50 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#0a0a0a] pt-28 px-6 pb-10 flex flex-col transition-transform duration-700 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="flex flex-col gap-8 flex-grow overflow-y-auto">
              <Link to="/" className="text-3xl font-medium text-white border-b border-white/5 pb-4">Home</Link>
              
              <div className="flex flex-col gap-6">
                  <span className="text-gray-500 text-xs uppercase tracking-widest">Services</span>
                  <Link to="/services/generative-ai" className="text-xl text-gray-200 pl-4 border-l-2 border-white/10 hover:border-white transition-colors">Generative AI</Link>
                  <Link to="/services/web-development" className="text-xl text-gray-200 pl-4 border-l-2 border-white/10 hover:border-white transition-colors">Web Development</Link>
              </div>
          </div>

          <div className="mt-6">
               <button className="w-full py-4 text-base font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-all">
                  Book a Call
               </button>
          </div>
      </div>
    </>
  );
};