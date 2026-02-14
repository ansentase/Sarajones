
import React from 'react';
import { motion } from 'framer-motion';
import { EXTERNAL_LINKS } from '../constants.ts';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,0,127,0.15),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-block relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.8 }}
              className="absolute -top-12 md:-top-16 -left-4 md:-left-16 font-accent text-pink-500 text-6xl md:text-9xl animate-flicker neon-text-pink -rotate-12 select-none z-20"
            >
              Stop
            </motion.div>
            <h1 className="font-heading text-[12vw] md:text-[160px] font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap">
              OVERPAYING
            </h1>
          </div>
          <h2 className="font-heading text-4xl md:text-8xl font-black text-white leading-none tracking-tight uppercase -mt-2 md:-mt-10">
            THE <span className="gradient-gold font-serif-lux italic tracking-normal">IRS</span>
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-zinc-400 text-base md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12 px-2"
        >
          Turn the money you're already overpaying in taxes into <span className="text-white font-bold">real, tax-free, generational wealth</span>. Discover the roadmap to the <span className="text-pink-500 font-bold neon-text-pink">Tax-Free Empire</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          <a href="#books" className="w-full sm:w-auto group relative bg-[#FF007F] text-white px-8 md:px-12 py-5 md:py-6 rounded font-heading font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 neon-border-pink shadow-[0_0_30px_rgba(255,0,127,0.3)]">
            GET THE BOOKS NOW →
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href={EXTERNAL_LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group border-2 border-[#D4AF37] text-[#D4AF37] px-8 md:px-12 py-5 md:py-6 rounded font-heading font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_30px_rgba(212,175,55,0.1)]"
          >
            BOOK SESSION
          </a>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
           className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4"
        >
           <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 overflow-hidden">
                  <img src={`https://picsum.photos/seed/face-${i}/50/50`} alt="client" />
                </div>
              ))}
           </div>
           <span className="font-heading font-black text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 text-center md:text-left">
              Trusted by 3,200+ High-Net-Worth Entrepreneurs
           </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
