
import React from 'react';
import { motion } from 'framer-motion';
import { EXTERNAL_LINKS } from '../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-black overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://picsum.photos/seed/sarah-final/1920/1080" 
            alt="Sarah Jones Lifestyle" 
            className="w-full h-full object-cover opacity-30 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h3 className="font-accent text-pink-500 text-4xl md:text-6xl mb-4 animate-flicker">Stop</h3>
          <h2 className="font-heading text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            SETTLING <br />
            <span className="text-[#D4AF37] neon-text-gold">FOR LESS</span>
          </h2>
          
          <p className="text-zinc-300 text-xl md:text-2xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Your business. Your wealth. Your legacy. They deserve a CPA who sees what you see—and knows how to get you there.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              href="#books"
              whileHover={{ scale: 1.05 }}
              className="bg-pink-500 text-white px-10 py-6 rounded-md font-heading font-black text-sm uppercase tracking-[0.2em] shadow-2xl neon-border-pink flex flex-col items-center cursor-pointer"
            >
               <span>📚 GET BOTH BOOKS</span>
               <span className="text-[8px] opacity-80 mt-1">Transform Your Financial Future</span>
            </motion.a>
            <motion.a 
              href={EXTERNAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-[#D4AF37] text-black px-10 py-6 rounded-md font-heading font-black text-sm uppercase tracking-[0.2em] shadow-2xl neon-border-gold flex flex-col items-center cursor-pointer"
            >
               <span>🚀 BOOK SESSION</span>
               <span className="text-[8px] opacity-80 mt-1">Work Directly with Sarah</span>
            </motion.a>
          </div>

          <div className="mt-12">
             <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                Join thousands of entrepreneurs who've fired their old CPA <br className="hidden md:block" />
                and started building real wealth.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
