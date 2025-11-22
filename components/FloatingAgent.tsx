import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Volume2, VolumeX } from 'lucide-react';
import { generateAgentResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { LazyImage } from './LazyImage';

export const FloatingAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey, I'm Chris from Tangent Labs. Let's find the right solution to make your team work smarter." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const agentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (agentRef.current && !agentRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await generateAgentResponse(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop";

  // Expanded View
  if (isOpen) {
    return (
      <div 
        ref={agentRef}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[400px] h-[60vh] md:h-[500px] bg-[#111] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden z-[60] animate-fade-in-up-fast font-sans"
      >
        {/* Header */}
        <div className="bg-[#161616] p-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                 <LazyImage src={avatarUrl} alt="Chris" />
              </div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-[#161616]"></div>
            </div>
            <div>
              <h4 className="font-medium text-white text-sm">Chris</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">Tangent Labs AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#0a0a0a]" ref={scrollRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed break-words ${
                msg.role === 'user' 
                  ? 'bg-white text-black rounded-br-sm' 
                  : 'bg-[#1A1A1A] text-gray-200 rounded-bl-sm border border-white/5'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1A1A1A] p-3 rounded-2xl rounded-bl-sm border border-white/5 flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-[#161616] border-t border-white/5">
          <div className="relative flex items-center bg-[#0a0a0a] rounded-full border border-white/10 focus-within:border-white/20 transition-colors">
            <input 
              type="text" 
              className="w-full bg-transparent text-white text-sm px-4 py-2.5 outline-none placeholder:text-gray-600"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              onClick={handleSend}
              className={`p-1.5 mr-1.5 rounded-full transition-all flex-shrink-0 ${inputValue ? 'bg-white text-black' : 'text-gray-600'}`}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Collapsed View
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6 pointer-events-none">
      <div className="animate-fade-in-scale pointer-events-auto mx-auto bg-[#111315] border border-white/10 rounded-full p-1 pr-2 shadow-2xl flex items-center gap-3 max-w-fit cursor-pointer hover:border-white/20 transition-all" onClick={() => setIsOpen(true)}>
        
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/5 animate-fade-in-scale">
           <LazyImage src={avatarUrl} alt="Chris" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center mr-2 md:mr-6 max-w-[200px] md:max-w-none animate-fade-in-scale delay-75">
          <span className="text-xs text-gray-300 font-medium leading-tight">
            <span className="font-bold text-white">Hey, I'm Chris from Tangent Labs.</span> Let's find the right solution to make your team work smarter.
          </span>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 pl-3 border-l border-white/10 h-8 animate-fade-in-scale delay-100">
           
           {/* Audio Visualizer (Static/Fake for UI) */}
           <div className="flex items-center gap-0.5 h-4 opacity-50">
              <div className="w-0.5 bg-white h-2 rounded-full"></div>
              <div className="w-0.5 bg-white h-3 rounded-full"></div>
              <div className="w-0.5 bg-white h-4 rounded-full"></div>
              <div className="w-0.5 bg-white h-2 rounded-full"></div>
              <div className="w-0.5 bg-white h-3 rounded-full"></div>
           </div>
           
           {/* Mute Toggle */}
           <button 
             className="text-gray-400 hover:text-white transition-colors"
             onClick={(e) => {
               e.stopPropagation();
               setIsMuted(!isMuted);
             }}
           >
             {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
           </button>
           
           {/* Button */}
           <button className="bg-[#050505] text-white border border-white/10 px-4 py-1.5 rounded-full text-[11px] font-bold hover:bg-black transition-colors whitespace-nowrap">
             Get in Touch
           </button>
        </div>

      </div>
    </div>
  );
};