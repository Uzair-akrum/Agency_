import React from 'react';
import { Atom, Snowflake, Sun, Link, Hexagon } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">What solution do you need</h2>
        <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide">
          Shaping Your Digital Journey for Success
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Card 1: Generative AI */}
        <div className="group bg-[#111111] rounded-lg p-8 md:p-12 flex flex-col items-center text-center md:text-left md:items-start transition-colors hover:bg-[#161616]">
          {/* Icon Grid */}
          <div className="mb-12 grid grid-cols-2 gap-4 mx-auto md:mx-0">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center overflow-hidden relative">
               <div className="absolute inset-0 bg-black m-1 rounded-lg flex items-center justify-center">
                  <Link className="text-white w-8 h-8 -rotate-45" />
               </div>
            </div>
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
               <Snowflake className="text-teal-500 w-10 h-10" strokeWidth={1.5} />
            </div>
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
               <Sun className="text-orange-500 w-10 h-10 fill-orange-500/20" strokeWidth={2} />
            </div>
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
               <Hexagon className="text-emerald-500 w-10 h-10" strokeWidth={2} />
            </div>
          </div>

          <div className="mt-auto w-full text-left">
            <h3 className="text-white font-bold text-lg mb-3">Generative AI</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Falling behind in the AI race? We help you move from confusion to execution. Discover what GenAI can do for your business.
            </p>
          </div>
        </div>

        {/* Card 2: Web/Mobile Development */}
        <div className="group bg-[#111111] rounded-lg p-8 md:p-12 flex flex-col items-center text-center md:text-left md:items-start transition-colors hover:bg-[#161616]">
          {/* Icon Grid */}
          <div className="mb-12 grid grid-cols-2 gap-4 mx-auto md:mx-0">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
               <span className="font-bold text-emerald-800 text-sm tracking-tighter">django</span>
            </div>
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center flex-col">
               <span className="font-bold text-slate-800 text-lg leading-none">aws</span>
               <div className="w-8 h-2 border-b-2 border-orange-400 rounded-[50%] mt-[-2px]"></div>
            </div>
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center flex-col gap-1">
               <Atom className="text-sky-400 w-8 h-8" />
               <span className="text-[8px] font-bold text-sky-900 uppercase">React Native</span>
            </div>
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
               <Atom className="text-blue-500 w-10 h-10 animate-spin-slow" />
            </div>
          </div>

          <div className="mt-auto w-full text-left">
            <h3 className="text-white font-bold text-lg mb-3">Web/Mobile Development</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Need a site that's fast, secure, and built to convert? We handle design, code, and performance end-to-end. Let's bring your website to life.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};