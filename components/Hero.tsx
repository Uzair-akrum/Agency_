import React from 'react';
import { ArrowUpRight, ScanFace, CheckCircle2, LayoutGrid } from 'lucide-react';
import { LazyImage } from './LazyImage';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Typography */}
        <div className="flex flex-col gap-8">
          <span className="text-gray-500 text-xs font-medium tracking-wide uppercase opacity-0 animate-fade-in-up delay-100">
            Welcome To Tangent Labs
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium leading-[1.1] tracking-tight text-white opacity-0 animate-fade-in-up delay-200">
            Your Competitor Isn’t <br className="hidden lg:block" />
            Smarter—Their <br className="hidden lg:block" />
            AI Agent Is
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed opacity-0 animate-fade-in-up delay-300">
            We specialize in practical AI agents that deliver real-world results, measurable and undeniable.
          </p>

          <div className="pt-2 opacity-0 animate-fade-in-up delay-500">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#252525] transition-all border border-white/10">
              Book a Call
            </button>
          </div>
        </div>

        {/* Right Column: Bento Grid */}
        <div className="grid grid-cols-2 gap-4 h-full w-full opacity-0 animate-fade-in-scale delay-300">
          
          {/* Card 1: Portrait */}
          <div className="col-span-1 aspect-square rounded-lg overflow-hidden relative">
             <LazyImage 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Member" 
            />
          </div>

          {/* Card 2: Stats */}
          <div className="col-span-1 aspect-square bg-[#0F1115] rounded-lg p-6 flex flex-col justify-center border border-white/5">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">93% Projects</h3>
            <p className="text-gray-400 text-lg leading-snug">
              delivered on time and on budget
            </p>
          </div>

          {/* Card 3: Orange Gradient Action */}
          <div className="col-span-2 h-32 rounded-lg p-6 relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600">
             <div className="flex items-center gap-4 z-10">
                <div className="w-10 h-10 border border-white/30 rounded flex items-center justify-center">
                   <LayoutGrid className="text-white/80 w-5 h-5" />
                </div>
                <span className="text-white font-medium text-sm md:text-base">Discover our custom-built AI agents in action</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};