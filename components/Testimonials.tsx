
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="font-accent text-pink-500 text-3xl mb-2">Social Proof</h3>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            REAL RESULTS, <span className="text-pink-500">REAL PEOPLE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-pink-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="text-pink-500 text-4xl font-serif mb-4 animate-flicker">“</div>
                <p className="text-zinc-100 text-lg leading-relaxed mb-6 font-light italic">
                  {t.quote}
                </p>
              </div>
              
              <div className="flex items-center mt-6 pt-6 border-t border-zinc-800">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border border-pink-500 p-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t.name}</h4>
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-tighter">{t.role}</p>
                </div>
                <div className="ml-auto">
                   <div className="bg-pink-500/10 text-pink-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-pink-500/20">
                      {t.saving}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Counter Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
           {[
             { label: "Books Sold", value: "12,847", icon: "📚" },
             { label: "Clients Served", value: "3,200+", icon: "🤝" },
             { label: "Tax Savings Delivered", value: "$43M+", icon: "💰" },
             { label: "Average Rating", value: "4.9/5", icon: "⭐" }
           ].map((stat, i) => (
             <div key={i} className="text-center p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-all">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-heading text-2xl font-black text-white leading-none">{stat.value}</div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mt-2">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
