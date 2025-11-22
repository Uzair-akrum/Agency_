import React from 'react';
import { ArrowUpRight, Zap, Waypoints, RefreshCcw } from 'lucide-react';
import { Footer } from '../components/Footer';

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
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="w-14 h-14 flex items-center justify-start text-white relative z-10">
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
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-br-xl pointer-events-none"></div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#0e0e0e] p-8 md:p-10 rounded-xl border border-white/5 flex flex-col gap-12 group hover:bg-[#141414] transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-start text-white group-hover:scale-110 transition-transform">
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

      {/* Section 4: Industries */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-white leading-tight max-w-4xl mx-auto">
            If a Human Can Do It Online — So Can Our AI Agent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          
          {/* 01 FinTech */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">01</span>
             <div className="flex-1 flex items-center">
               <h3 className="text-3xl font-medium text-white tracking-tight">FinTech</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
               <span className="text-white font-medium">Human-like deep</span> research in complex industry
             </p>
          </div>

          {/* Image */}
          <div className="aspect-square relative group overflow-hidden bg-[#0e0e0e]">
             <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* 02 Content Creation */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">02</span>
             <div className="flex-1 flex items-center">
                <h3 className="text-3xl font-medium text-white tracking-tight">Content Creation</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
               <span className="text-white font-medium">AI Visibility</span> Audit for your Business
             </p>
          </div>

          {/* 03 Blockchain */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">03</span>
             <div className="flex-1 flex items-center">
                <h3 className="text-3xl font-medium text-white tracking-tight">Blockchain</h3>
             </div>
             {/* Hidden description reveals on hover */}
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-white font-medium">Automated</span> smart contract verification
             </p>
          </div>

          {/* 04 HealthCare */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">04</span>
             <div className="flex-1 flex items-center">
                <h3 className="text-3xl font-medium text-white tracking-tight">HealthCare</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-white font-medium">HIPAA Compliant</span> data processing agents
             </p>
          </div>

          {/* 05 Customer Service */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">05</span>
             <div className="flex-1 flex items-center">
                <h3 className="text-3xl font-medium text-white tracking-tight">Customer Service</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-white font-medium">Instant</span> multi-channel resolution
             </p>
          </div>

        </div>
      </section>

      {/* Section 5: Comparison */}
      <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-white leading-tight mb-4">
            What makes us better <br />
            than the rest?
          </h2>
          <p className="text-gray-400 text-sm tracking-wide">
            Built for execution, not experimentation.
          </p>
        </div>

        <div className="relative bg-[#0e0e0e] rounded-2xl border border-white/5 overflow-hidden">
          
          {/* VS Badge */}
          <div className="absolute left-1/2 top-[100px] -translate-x-1/2 z-10">
             <div className="bg-[#0a0a0a] border border-white/10 text-white font-bold text-xl px-4 py-3 rounded-lg shadow-xl">
               VS
             </div>
          </div>

          <div className="grid grid-cols-2 relative divide-x divide-white/5">
              {/* Left Column: Cogent */}
              <div className="divide-y divide-white/5">
                  <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-medium text-white">Cogent</h3>
                  </div>
                  
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">AI Output Evaluation</div>
                      <div className="text-white font-medium text-lg">95%+ results out of the box</div>
                  </div>
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">Multi-modal</div>
                      <div className="text-white font-medium text-lg">Yes</div>
                  </div>
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">AI Token cost</div>
                      <div className="text-white font-medium text-lg">&gt;75% savings</div>
                  </div>
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">Uptime</div>
                      <div className="text-white font-medium text-lg">99.9%</div>
                  </div>
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">Agents in production</div>
                      <div className="text-white font-medium text-lg">25+</div>
                  </div>
              </div>

              {/* Right Column: The Others */}
              <div className="divide-y divide-white/5 text-right">
                   <div className="p-8 md:p-12">
                       <h3 className="text-2xl font-medium text-white">The Others</h3>
                   </div>
                   
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">AI Output Evaluation</div>
                       <div className="text-gray-300 font-medium text-lg">None</div>
                   </div>
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">Multi-modal</div>
                       <div className="text-gray-300 font-medium text-lg">No</div>
                   </div>
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">AI Token cost</div>
                       <div className="text-gray-300 font-medium text-lg">0% savings</div>
                   </div>
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">Uptime</div>
                       <div className="text-gray-300 font-medium text-lg">??</div>
                   </div>
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">Agents in production</div>
                       <div className="text-gray-300 font-medium text-lg">Mostly demos</div>
                   </div>
              </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="relative h-40 md:h-48 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 opacity-90"></div>
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
               
               <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
                  <span className="text-3xl md:text-4xl font-medium text-white tracking-tight">You in?</span>
                  <button className="px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-black transition-all border border-white/10">
                    Get in Touch
                  </button>
               </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};