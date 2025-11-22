import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border border-white/10 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="mt-8 text-xs font-mono text-gray-500 uppercase tracking-widest animate-pulse">
        Initializing Tangent Systems...
      </div>
    </div>
  );
};