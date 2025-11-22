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
              cogent.
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              <span className="text-gray-300 font-medium">Cogent Labs</span> is a young, full-service software development company with a focus on Generative AI, Web and Mobile. Our customers range from early stage startups to enterprise companies (3000+ in size).
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-3"></div>

          {/* Links Column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-medium text-sm mb-6">Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#careers" className="text-gray-500 hover:text-white text-sm transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-medium text-sm mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <a href="tel:+923001114369" className="hover:text-white transition-colors">+923001114369</a>
              <a href="mailto:hello@cogentlabs.co" className="hover:text-white transition-colors">hello@cogentlabs.co</a>
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
            Copyright © 2025 Cogent Labs | All Rights Reserved
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