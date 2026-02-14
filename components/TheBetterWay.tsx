
import React from 'react';
import { motion } from 'framer-motion';

const TheBetterWay: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Old Way */}
        <div className="flex-1 bg-zinc-950 p-12 md:p-24 flex flex-col justify-center border-r border-zinc-900">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-zinc-600 text-xl font-bold mb-8 uppercase tracking-widest">The Old Way</h3>
            <ul className="space-y-6">
              {['Reactive Tax Filing', 'Generic Advice', 'Once-a-Year Contact', 'Maximum Tax Bills', 'Zero Wealth Strategy'].map((item, i) => (
                <li key={i} className="flex items-center text-zinc-500 font-light text-xl">
                  <span className="mr-4 text-red-900/50">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 h-full w-[2px] bg-pink-500/20 z-10">
          <div className="w-8 h-8 rounded-full bg-pink-500 neon-border-pink flex items-center justify-center text-black font-black text-xs">VS</div>
        </div>

        {/* Right Side: New Way */}
        <div className="flex-1 bg-black p-12 md:p-24 flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-[#D4AF37] text-xl font-bold mb-8 uppercase tracking-widest">The Better Way</h3>
            <ul className="space-y-6">
              {['Proactive Tax Planning', 'Billionaire Strategies', 'Year-Round Partnership', '50-100% Tax Reduction', 'Generational Wealth Building'].map((item, i) => (
                <li key={i} className="flex items-center text-white font-bold text-xl neon-text-gold">
                  <span className="mr-4 text-[#D4AF37]">✨</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12">
               <button className="text-pink-500 font-heading font-black text-xs uppercase tracking-[0.2em] border-b border-pink-500 pb-2 hover:text-white hover:border-white transition-all">
                  See the roadmap in action →
               </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheBetterWay;
