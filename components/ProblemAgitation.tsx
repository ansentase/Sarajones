
import React from 'react';
import { motion } from 'framer-motion';

const ProblemAgitation: React.FC = () => {
  const cards = [
    {
      number: '$150k+',
      title: 'WASTED ANNUALLY',
      desc: "The average entrepreneur overpays this much in taxes because they're stuck with a 'checkbox' CPA."
    },
    {
      number: '90%',
      title: 'NEVER HEAR THIS',
      desc: "Strategies like the Augusta Rule, Cost Segregation, and captive insurance? Your CPA should be mentioning these. They're not."
    },
    {
      number: '48H',
      title: 'PER YEAR',
      desc: "That's all most CPAs spend on you per year. You deserve a strategic partner, not a form-filler."
    }
  ];

  return (
    <section id="strategy" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="font-accent text-pink-500 text-3xl mb-2">The Problem</h3>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            THE BROKEN <span className="text-pink-500">SYSTEM</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-pink-500/50 transition-all group overflow-hidden"
            >
              <div className="font-heading text-5xl md:text-6xl font-black text-pink-500 mb-4 group-hover:scale-110 transition-transform origin-left">
                {card.number}
              </div>
              <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-4 uppercase">
                {card.title}
              </h4>
              <div className="w-12 h-1 bg-pink-500 mb-6 group-hover:w-full transition-all duration-500" />
              <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
