import React from 'react';
import { ArrowUpRight, Zap, Waypoints, RefreshCcw } from 'lucide-react';

export const GenerativeAI: React.FC = () => {
  return (
    <>
      {/* Section 1: Hero (Existing) */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Images & Stats */}
          <div className="flex flex-col gap-6 h-full w-full order-2 lg:order-1">
            {/* Top Image */}
            <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="Team working on AI" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom Stat Card */}
            <div className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 rounded-2xl p-8 md:p-12 flex items-center justify-between shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
               <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <span className="text-6xl md:text-7xl font-sans font-medium text-white leading-none">80%</span>
                  <p className="text-white/90 text-lg md:text-xl leading-tight max-w-[200px]">
                    Reduction in reliance on human support
                  </p>
               </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">
              Generative AI
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] tracking-tight text-white">
              Build AI Agents That <br className="hidden lg:block" />
              Work - Not Just <br className="hidden lg:block" />
              Demos
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
              We audit your systems, uncover high-leverage use cases, and deploy AI agents that deliver measurable results.
            </p>

            <div className="pt-4">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#252525] transition-all border border-white/10 group">
                Book a Call
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Fastest-Growing Companies */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col gap-8">
            <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">
              Welcome To Cogent Labs
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] tracking-tight text-white">
              The Fastest-Growing <br className="hidden lg:block" />
              Companies Aren’t <br className="hidden lg:block" />
              Hiring More—They’re <br className="hidden lg:block" />
              Building AI Agents
            </h2>

             <div className="pt-2">
                <button className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#252525] transition-all border border-white/10 group">
                  Book a Call
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed mt-4">
              Every week spent on repetitive tasks is a week lost on growth. Generative AI isn’t just a tech trend—it’s your competitive edge. We help you move from hype to execution.
            </p>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="grid grid-cols-2 gap-4 h-full w-full">
            
            {/* Card 1: Image */}
            <div className="col-span-1 aspect-square rounded-2xl overflow-hidden relative group">
               <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Card 2: Icon */}
            <div className="col-span-1 aspect-square bg-[#1A1A1A] rounded-2xl p-6 flex items-center justify-center border border-white/5 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Lime Green Circle */}
              <div className="w-28 h-28 bg-[#a3e635] rounded-full flex items-center justify-center gap-1.5 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                  {/* Audio Bars Animation */}
                  <div className="w-1.5 h-6 bg-[#1A1A1A] rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                  <div className="w-1.5 h-10 bg-[#1A1A1A] rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
                  <div className="w-1.5 h-14 bg-[#1A1A1A] rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                  <div className="w-1.5 h-8 bg-[#1A1A1A] rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                  <div className="w-1.5 h-4 bg-[#1A1A1A] rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
              </div>
            </div>

            {/* Card 3: Gradient + Text */}
            <div className="col-span-2 rounded-2xl p-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <div className="h-full w-full flex items-center justify-center p-8 md:p-10 min-h-[200px]">
                  
                  {/* Inner White Card */}
                  <div className="bg-[#f0f0f0] rounded-xl p-6 w-full max-w-md shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative z-10">
                     <p className="font-medium leading-tight">
                       <span className="text-gray-400 text-lg">A </span>
                       <span className="text-[#D93025] font-serif text-4xl md:text-5xl italic font-bold mx-1">1s delay</span>
                       <br />
                       <span className="text-gray-800 text-xl md:text-2xl font-bold tracking-tight">in load time can reduce conversions.</span>
                     </p>
                  </div>
                  
                  {/* Source Label */}
                  <span className="absolute bottom-4 right-6 text-white/90 text-[10px] font-medium tracking-wider uppercase z-10">
                     Source: Fleexy
                  </span>
               </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 3: Process */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-gray-500 text-xs font-medium tracking-widest uppercase mb-3 block">
            Here's How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-white leading-tight">
            A Simple, Streamlined <br />
            Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Step 1 */}
          <div className="bg-[#0e0e0e] p-8 md:p-10 rounded-xl border border-white/5 flex flex-col gap-12 group hover:bg-[#141414] transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-start text-white group-hover:scale-110 transition-transform">
               {/* Placeholder for Dotted Spark Icon - using Zap as generic match */}
               <Zap className="w-10 h-10 text-white opacity-90" strokeWidth={1.5} style={{ strokeDasharray: '4 2' }} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-500 text-sm font-medium">Step 1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery Workshop</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Understand your operations and pain points.
              </p>
            </div>
          </div>

          {/* Step 2 - Highlighted */}
          <div className="bg-[#111] p-8 md:p-10 rounded-xl border-2 border-white/20 flex flex-col gap-12 relative shadow-[0_0_50px_rgba(255,255,255,0.05)] transform md:-translate-y-2">
             {/* Highlight glow effect overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="w-14 h-14 flex items-center justify-start text-white relative z-10">
               {/* Placeholder for Dotted Flow Icon - using Waypoints */}
               <Waypoints className="w-10 h-10 text-white opacity-100" strokeWidth={1.5} style={{ strokeDasharray: '3 3' }} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-300 text-sm font-medium">Step 2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design & Prototype</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Map workflows, test key interactions, align on success metrics.
              </p>
            </div>
            {/* Bottom corner gradient hint similar to image */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-br-xl pointer-events-none"></div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#0e0e0e] p-8 md:p-10 rounded-xl border border-white/5 flex flex-col gap-12 group hover:bg-[#141414] transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-start text-white group-hover:scale-110 transition-transform">
               {/* Placeholder for Dotted Cycle Icon - using RefreshCcw */}
               <RefreshCcw className="w-10 h-10 text-white opacity-90" strokeWidth={1.5} style={{ strokeDasharray: '4 2' }} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-500 text-sm font-medium">Step 3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deploy & Measure</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deliver agent in production, measure business impact, refine.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
