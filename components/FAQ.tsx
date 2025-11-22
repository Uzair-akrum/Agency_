
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What industries do you serve?",
    answer: "We partner with forward-thinking companies across FinTech, Healthcare, Logistics, and E-commerce. Our AI agents are adaptable and can be customized to handle specific workflows in legal, real estate, and customer support sectors as well."
  },
  {
    question: "How do you manage projects?",
    answer: "Transparency is key. We use agile methodologies with weekly sprints and dedicated communication channels (Slack/Teams). You'll have direct access to the development team and real-time progress tracking through our project management tools."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core expertise lies in Generative AI (Google Gemini, GPT-4), Python, React, Node.js, and cloud infrastructure (AWS, GCP). We build scalable, secure, and high-performance applications tailored to your specific needs."
  },
  {
    question: "How do you ensure quality?",
    answer: "We believe in testing early and often. Our process includes automated unit testing, integration testing, and rigorous human-in-the-loop validation for AI outputs to ensure accuracy, safety, and reliability before deployment."
  },
  {
    question: "What services do you offer?",
    answer: "We specialize in building custom AI Agents, Generative AI integration, End-to-end Web & Mobile Application Development, and AI Strategy Consulting. We don't just wrap APIs; we build intelligent systems."
  },
  {
    question: "What scale of projects do you work on?",
    answer: "We work with everyone from ambitious startups building their MVP to Fortune 500 companies optimizing enterprise workflows. Our architecture is designed to scale from day one."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] flex flex-col items-center">
      <div className="max-w-[800px] w-full px-6">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-16 text-center tracking-tight">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#111] rounded-lg overflow-hidden transition-colors hover:bg-[#141414]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-gray-200 font-medium text-sm md:text-base">{item.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-white' : ''}`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed pr-12 border-t border-white/5 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
