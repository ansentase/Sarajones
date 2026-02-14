
import React from 'react';
import { motion } from 'framer-motion';
import { EXTERNAL_LINKS } from '../constants';

const Authority: React.FC = () => {
  const credentials = [
    "Licensed in All 50 States",
    "MBA + MS Accountancy + MS Finance",
    "Cornell Financial Management Certificate",
    "Certified CFO & Tax Planner",
    "20+ Years Strategic Experience",
    "Straight-Talking Tax Strategist",
    "Tax-Free Empire Founder"
  ];

  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-black text-white text-center uppercase tracking-tighter mb-12">
          MEET YOUR <span className="gradient-gold font-serif-lux italic tracking-normal">STRATEGIST</span>
        </h2>
        
        {/* Infinite Scrolling Badges */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-fast group-hover:pause py-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex whitespace-nowrap">
                {credentials.map((cred, j) => (
                  <div key={j} className="mx-8 flex items-center bg-zinc-900 border border-[#D4AF37]/30 px-6 py-4 rounded-xl hover:neon-border-pink transition-all transform hover:scale-105">
                    <span className="text-2xl mr-3">💎</span>
                    <span className="font-heading font-bold text-[10px] text-white uppercase tracking-widest">{cred}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative"
        >
          {/* New Sarah Influencer Image matching the cover vibe */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 group cursor-pointer" onClick={() => window.open(EXTERNAL_LINKS.profile, '_blank')}>
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
               alt="Sarah Jones CPA Portrait" 
               className="w-full h-auto grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-pink-500 text-white px-4 py-2 rounded-full font-heading font-black text-[8px] uppercase tracking-widest">Follow @sjcpa.taxfreemillionaire</span>
             </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-black border-2 border-[#D4AF37] p-8 rounded-2xl hidden md:block neon-border-gold shadow-2xl z-20">
             <div className="text-4xl font-black font-heading leading-none text-white">$43M+</div>
             <div className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#D4AF37] mt-1">Tax Savings Delivered</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight">SARAH JONES, CPA</h3>
            <div className="flex gap-2">
               <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">MBA</span>
               <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">•</span>
               <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">MS Accountancy</span>
               <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">•</span>
               <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">MS Finance</span>
            </div>
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            Sarah Jones isn't just an accountant. She is a powerhouse tax strategist and Enrolled Agent licensed with the IRS in <span className="text-white font-bold">all 50 states</span>. 
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            Holding a Master of Business Administration, a Master of Science in Accountancy, and a Master of Science in Finance, plus a Certificate in Financial Management from <span className="text-[#D4AF37] font-bold italic">Cornell University</span>, she brings elite-level academic rigor to everyday tax savings.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            Together with her husband Phil Jones, a financial advisor with 20+ years of experience, she helps entrepreneurs flip the script on money and build legacies that last. She's not here to fill boxes; she's here to deliver <span className="text-pink-500 font-bold">transformation</span>.
          </p>

          <div className="pt-6">
            <a 
              href={EXTERNAL_LINKS.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded font-heading font-black text-[10px] uppercase tracking-[0.2em] hover:bg-pink-500 transition-all group"
            >
              READ HER STORY <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee 40s linear infinite;
        }
        .group-hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Authority;
