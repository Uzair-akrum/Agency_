import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="text-2xl font-medium tracking-tight text-white">
              tangent.
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              <span className="text-gray-300 font-medium">Tangent Labs</span> is a young, full-service software development company with a focus on Generative AI, Web and Mobile. Our customers range from early stage startups to enterprise companies (3000+ in size).
            </p>
          </div>

          {/* Spacer - Adjusted to take up remaining space */}
          <div className="hidden md:block md:col-span-5"></div>

          {/* Contact Column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-medium text-sm mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <a href="tel:+923201529345" className="hover:text-white transition-colors">+923201529345</a>
              <a href="mailto:hello@tangentlabs.co" className="hover:text-white transition-colors">hello@tangentlabs.co</a>
              <address className="not-italic leading-relaxed mt-2">
                16192 Coastal Hwy. <br />
                Lewes, DE 19958
              </address>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-gray-400 text-xs">
            Copyright © 2025 Tangent Labs | All Rights Reserved
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};