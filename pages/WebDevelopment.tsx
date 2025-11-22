import React from 'react';
import { ArrowUpRight, Zap, Waypoints, RefreshCcw, Code } from 'lucide-react';
import { Footer } from '../components/Footer';

export const WebDevelopment: React.FC = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Images & Stats */}
          <div className="flex flex-col gap-6 h-full w-full order-2 lg:order-1">
            {/* Top Image */}
            <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Code on screen" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom Stat Card */}
            <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 flex items-center justify-between shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
               <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <span className="text-6xl md:text-7xl font-sans font-medium text-white leading-none">0.1s</span>
                  <p className="text-white/90 text-lg md:text-xl leading-tight max-w-[200px]">
                    Average page load time for our builds
                  </p>
               </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">
              Web & Mobile Development
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] tracking-tight text-white">
              Digital Experiences <br className="hidden lg:block" />
              That Convert <br className="hidden lg:block" />
              Users Into Fans
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
              We architect high-performance web and mobile applications using cutting-edge technologies like React, Node.js, and React Native.
            </p>

            <div className="pt-4">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#252525] transition-all border border-white/10 group">
                Start Your Project
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
              Engineering Excellence
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] tracking-tight text-white">
              Your Codebase Should <br className="hidden lg:block" />
              Be An Asset, <br className="hidden lg:block" />
              Not A Liability
            </h2>

             <div className="pt-2">
                <button className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#252525] transition-all border border-white/10 group">
                  Get a Tech Audit
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed mt-4">
              Stop wrestling with technical debt. We build scalable, maintainable systems that grow with your business, ensuring security and performance at every scale.
            </p>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="grid grid-cols-2 gap-4 h-full w-full">
            
            {/* Card 1: Image */}
            <div className="col-span-1 aspect-square rounded-2xl overflow-hidden relative group">
               <img 
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop" 
                alt="Code Structure" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Card 2: Icon */}
            <div className="col-span-1 aspect-square bg-[#1A1A1A] rounded-2xl p-6 flex items-center justify-center border border-white/5 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Blue Circle for Tech */}
              <div className="w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center gap-1.5 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                   <Code className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Card 3: Gradient + Text */}
            <div className="col-span-2 rounded-2xl p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <div className="h-full w-full flex items-center justify-center p-8 md:p-10 min-h-[200px]">
                  
                  {/* Inner White Card */}
                  <div className="bg-[#f0f0f0] rounded-xl p-6 w-full max-w-md shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative z-10">
                     <p className="font-medium leading-tight">
                       <span className="text-gray-400 text-lg">Reduce </span>
                       <span className="text-[#4F46E5] font-serif text-4xl md:text-5xl italic font-bold mx-1">churn</span>
                       <br />
                       <span className="text-gray-800 text-xl md:text-2xl font-bold tracking-tight">with seamless UX/UI.</span>
                     </p>
                  </div>
                  
                  {/* Source Label */}
                  <span className="absolute bottom-4 right-6 text-white/90 text-[10px] font-medium tracking-wider uppercase z-10">
                     Source: Tangent Analytics
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
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-white leading-tight">
            From Concept to Code <br />
            to Customer
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
                <span className="text-gray-500 text-sm font-medium">Phase 1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy & Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We blueprint your architecture and design high-fidelity prototypes.
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
                <span className="text-gray-300 text-sm font-medium">Phase 2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Agile Development</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Two-week sprints with regular demos. You see the progress as we build.
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
                <span className="text-gray-500 text-sm font-medium">Phase 3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Launch & Scale</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                CI/CD pipeline setup, load testing, and seamless deployment to cloud.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Industries */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-white leading-tight max-w-4xl mx-auto">
            Tailored Solutions for Every Sector
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          
          {/* 01 E-commerce */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">01</span>
             <div className="flex-1 flex items-center">
               <h3 className="text-3xl font-medium text-white tracking-tight">E-Commerce</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
               <span className="text-white font-medium">High-conversion</span> storefronts & headless CMS
             </p>
          </div>

          {/* Image */}
          <div className="aspect-square relative group overflow-hidden bg-[#0e0e0e]">
             <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* 02 SaaS */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">02</span>
             <div className="flex-1 flex items-center">
                <h3 className="text-3xl font-medium text-white tracking-tight">SaaS</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
               <span className="text-white font-medium">Multi-tenant</span> architecture & subscription billing
             </p>
          </div>

          {/* 03 Enterprise */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">03</span>
             <div className="flex-1 flex items-center">
                <h3 className="text-3xl font-medium text-white tracking-tight">Enterprise</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-white font-medium">Internal tools</span> & legacy modernization
             </p>
          </div>

          {/* 04 Mobile */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">04</span>
             <div className="flex-1 flex items-center">
                <h3 className="text-3xl font-medium text-white tracking-tight">Mobile</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-white font-medium">iOS & Android</span> cross-platform apps
             </p>
          </div>

          {/* 05 Healthcare */}
          <div className="bg-[#0e0e0e] p-10 aspect-square flex flex-col items-center justify-between text-center group hover:bg-[#141414] transition-colors">
             <span className="text-4xl font-medium text-[#222]">05</span>
             <div className="flex-1 flex items-center">
                <h3 className="text-3xl font-medium text-white tracking-tight">Healthcare</h3>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-white font-medium">HIPAA-compliant</span> patient portals
             </p>
          </div>

        </div>
      </section>

      {/* Section 5: Comparison */}
      <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-white leading-tight mb-4">
            Why choose Tangent over <br />
            outsourcing agencies?
          </h2>
          <p className="text-gray-400 text-sm tracking-wide">
            We are product partners, not just ticket solvers.
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
              {/* Left Column: Tangent */}
              <div className="divide-y divide-white/5">
                  <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-medium text-white">Tangent</h3>
                  </div>
                  
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">Code Quality</div>
                      <div className="text-white font-medium text-lg">Clean, Modular, Tested</div>
                  </div>
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">Architecture</div>
                      <div className="text-white font-medium text-lg">Scalable Cloud-Native</div>
                  </div>
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">Communication</div>
                      <div className="text-white font-medium text-lg">Daily Updates (Slack/Teams)</div>
                  </div>
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">Maintenance</div>
                      <div className="text-white font-medium text-lg">Proactive Monitoring</div>
                  </div>
                  <div className="p-6 md:px-12 md:py-8">
                      <div className="text-gray-500 text-xs mb-1">Delivery</div>
                      <div className="text-white font-medium text-lg">On Time, On Budget</div>
                  </div>
              </div>

              {/* Right Column: The Others */}
              <div className="divide-y divide-white/5 text-right">
                   <div className="p-8 md:p-12">
                       <h3 className="text-2xl font-medium text-white">Typical Dev Shops</h3>
                   </div>
                   
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">Code Quality</div>
                       <div className="text-gray-300 font-medium text-lg">Spaghetti Code</div>
                   </div>
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">Architecture</div>
                       <div className="text-gray-300 font-medium text-lg">Monolithic Legacy</div>
                   </div>
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">Communication</div>
                       <div className="text-gray-300 font-medium text-lg">Black Box</div>
                   </div>
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">Maintenance</div>
                       <div className="text-gray-300 font-medium text-lg">Hourly Billing Traps</div>
                   </div>
                   <div className="p-6 md:px-12 md:py-8">
                       <div className="text-gray-500 text-xs mb-1">Delivery</div>
                       <div className="text-gray-300 font-medium text-lg">Delays & Scope Creep</div>
                   </div>
              </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="relative h-40 md:h-48 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 opacity-90"></div>
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
               
               <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
                  <span className="text-3xl md:text-4xl font-medium text-white tracking-tight">Ready to build?</span>
                  <button className="px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-black transition-all border border-white/10">
                    Let's Talk Code
                  </button>
               </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};
