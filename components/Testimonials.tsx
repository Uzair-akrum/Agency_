import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Scott",
    role: "Founder, Aurora",
    quote: "“Tangent Labs have been absolutely incredible to work with. They are highly professional, extremely prompt, and bring a diverse range of skill sets to the table.”",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    borderColor: "border-purple-500",
    shadowColor: "shadow-purple-500/10"
  },
  {
    id: 2,
    name: "Kara",
    role: "Co-founder, Narratize",
    quote: "“I am grateful to be connected with Tangent Labs! They are technically proficient, proactive in communication, and true partners in achieving our goals.”",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    borderColor: "border-rose-500",
    shadowColor: "shadow-rose-500/10"
  },
  {
    id: 3,
    name: "James",
    role: "CTO, TechFlow",
    quote: "“The AI agents they built transformed our customer support workflow overnight. We've seen a 40% reduction in response times.”",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop",
    borderColor: "border-orange-500",
    shadowColor: "shadow-orange-500/10"
  }
];

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 500;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-16 tracking-tight">
          Success, Powered by Tangent Labs
        </h2>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className={`flex-shrink-0 w-[85vw] md:w-[650px] bg-[#111] rounded-xl overflow-hidden border-2 ${item.borderColor} flex flex-col md:flex-row snap-center group relative`}
            >
               {/* Image Section */}
               <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay for mobile readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent md:hidden"></div>
               </div>

               {/* Content Section */}
               <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col bg-[#111]">
                  <div className="mb-8">
                    <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  <div className="mt-auto bg-[#1A1A1A] border border-white/5 rounded-lg p-4">
                    <h4 className="text-white font-bold text-base">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
               </div>
            </div>
          ))}
          
          {/* Spacer to allow scrolling the last item fully into view */}
          <div className="w-12 flex-shrink-0"></div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-8">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110 active:scale-95"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110 active:scale-95"
          >
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};