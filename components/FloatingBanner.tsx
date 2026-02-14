
import React from 'react';

const FloatingBanner: React.FC = () => {
  return (
    <div className="bg-[#FF007F] text-white py-2 px-4 sticky top-0 z-[100] overflow-hidden whitespace-nowrap border-b border-pink-400">
      <div className="flex animate-scroll-text font-bold text-xs md:text-sm tracking-widest items-center">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="flex items-center mx-8">
            <span className="mr-2">🔥 2026 Tax Strategies Just Released</span>
            <span className="mx-4 opacity-50">|</span>
            <span className="mr-2">Jessica in Austin just saved $94K</span>
            <span className="mx-4 opacity-50">|</span>
            <span className="mr-2">Only 3 VIP Partnership Spots Available This Quarter</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingBanner;
