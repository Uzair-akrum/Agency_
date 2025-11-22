import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    { 
      text: "Just Absolute Results.", 
      icon: <ShieldCheck className="text-white w-6 h-6" />,
      gradient: "bg-gradient-to-br from-red-900/50 to-red-600/50"
    },
    { 
      text: "No Ifs. No Buts.", 
      icon: <ArrowUpRight className="text-white w-6 h-6" />,
      gradient: "bg-gradient-to-br from-red-900/50 to-red-600/50" 
    },
    { 
      text: "Just Absolute Results.", 
      icon: <ShieldCheck className="text-white w-6 h-6" />,
      gradient: "bg-gradient-to-br from-red-900/50 to-red-600/50"
    },
    { 
      text: "No Ifs. No Buts.", 
      icon: <ArrowUpRight className="text-white w-6 h-6" />,
      gradient: "bg-gradient-to-br from-red-900/50 to-red-600/50"
    },
  ];

  // Duplicate items for seamless loop
  const content = [...items, ...items, ...items];

  return (
    <div className="w-full bg-[#0a0a0a] py-12 overflow-hidden relative">
      <div className="flex w-max animate-marquee items-center">
        {content.map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-3xl md:text-5xl font-medium text-white tracking-tight mr-6">{item.text}</span>
            <div className={`w-12 h-12 rounded flex items-center justify-center border border-white/10 ${item.gradient}`}>
               {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};