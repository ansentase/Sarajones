
import React from 'react';
import { EXTERNAL_LINKS } from '../constants';

interface Props {
  scrolled: boolean;
}

const Navbar: React.FC<Props> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-12 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-zinc-900' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-heading text-xl md:text-2xl font-black tracking-tighter text-white leading-none">
            SARAH JONES <span className="text-pink-500 group-hover:neon-text-pink transition-all">CPA</span>
          </span>
          <span className="font-heading text-[8px] font-bold tracking-[0.4em] uppercase text-zinc-500 -mt-1 group-hover:text-[#D4AF37] transition-all">
            Tax Free Empire
          </span>
        </div>
        
        <div className="hidden md:flex space-x-10">
          {['Strategy', 'Books', 'Roadmap', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:neon-text-pink transition-all">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={EXTERNAL_LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded font-heading font-black text-[10px] uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105"
          >
            Book Session
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
