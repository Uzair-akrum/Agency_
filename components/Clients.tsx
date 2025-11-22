import React from 'react';
import { Globe, Triangle, Activity, TrendingUp } from 'lucide-react';

export const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <h2 className="text-center text-white text-xl md:text-2xl font-medium uppercase tracking-wide mb-16">
          Trusted Clients and Partners
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/5">
          
          {/* 1. Blabble */}
          <div className="aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 bg-[#1A1A1A]/40 hover:bg-[#1A1A1A] transition-colors p-8">
             <span className="text-2xl md:text-3xl font-bold text-[#333] tracking-tight font-serif">Blabble.</span>
          </div>

          {/* 2. MaxAB */}
          <div className="aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 bg-[#1A1A1A]/40 hover:bg-[#1A1A1A] transition-colors p-8 flex-col gap-1">
             <span className="text-lg text-[#333] font-serif opacity-60">مكسب</span>
             <span className="text-2xl md:text-3xl font-bold text-[#333] tracking-tight leading-none">maxab</span>
          </div>

          {/* 3. NHS */}
          <div className="aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 bg-[#1A1A1A]/40 hover:bg-[#1A1A1A] transition-colors p-8">
             <span className="text-3xl md:text-4xl font-black italic text-[#333] tracking-tighter">NHS</span>
          </div>

          {/* 4. Narratize */}
          <div className="aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 bg-[#1A1A1A]/40 hover:bg-[#1A1A1A] transition-colors p-8">
             <div className="flex items-start text-[#333]">
                <span className="text-xs mt-1 mr-0.5">+</span>
                <span className="text-xl md:text-2xl font-light tracking-wide">narratize</span>
                <span className="text-[8px] mt-1 ml-0.5">®</span>
             </div>
          </div>

          {/* 5. Aurora */}
          <div className="aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 bg-[#1A1A1A]/40 hover:bg-[#1A1A1A] transition-colors p-8 gap-2">
             <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center">
                <Triangle className="w-4 h-4 text-[#444] fill-[#444]" />
             </div>
             <span className="text-xl md:text-2xl font-light text-[#333] tracking-widest uppercase">AURORA</span>
          </div>

          {/* 6. Boosted */}
          <div className="aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 bg-[#1A1A1A]/40 hover:bg-[#1A1A1A] transition-colors p-8">
             <span className="text-2xl md:text-3xl font-black text-[#333] tracking-tight">B<span className="tracking-widest">oo</span>sted</span>
          </div>

          {/* 7. Options Depth */}
          <div className="aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 bg-[#1A1A1A]/40 hover:bg-[#1A1A1A] transition-colors p-8 relative">
             <div className="flex flex-col items-start">
                <div className="relative">
                   <TrendingUp className="absolute -top-3 -right-4 w-6 h-6 text-[#333] opacity-50" strokeWidth={1.5} />
                   <span className="text-xl md:text-2xl font-bold text-[#333]">Options</span>
                </div>
                <span className="text-sm md:text-base font-light text-[#333] tracking-widest uppercase ml-1">DEPTH</span>
             </div>
          </div>

          {/* 8. Unicef */}
          <div className="aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 bg-[#1A1A1A]/40 hover:bg-[#1A1A1A] transition-colors p-8 gap-2">
             <span className="text-2xl md:text-3xl font-medium text-[#333] lowercase">unicef</span>
             <Globe className="w-6 h-6 text-[#333] opacity-60" strokeWidth={1.5} />
          </div>

        </div>
      </div>
    </section>
  );
};