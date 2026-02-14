
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROADMAP_STEPS } from '../constants';

const Roadmap: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            THE SJCPA <span className="text-[#D4AF37]">ROADMAP™</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Your custom financial GPS designed for seven and eight-figure entrepreneurs. 
            A three-stage journey to total wealth freedom.
          </p>
        </div>

        {/* Visual Timeline */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800 hidden md:block" />
           
           {ROADMAP_STEPS.map((step) => (
             <div 
                key={step.id} 
                className="relative z-10 cursor-pointer group flex flex-col items-center"
                onClick={() => setActiveStep(step.id)}
             >
                <motion.div
                  animate={{ 
                    scale: activeStep === step.id ? 1.2 : 1,
                    backgroundColor: activeStep === step.id ? (step.theme === 'pink' ? '#FF007F' : '#D4AF37') : '#111'
                  }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${activeStep === step.id ? 'border-white' : 'border-zinc-800'} transition-all duration-500`}
                >
                  <span className={`font-heading font-black text-sm uppercase ${activeStep === step.id ? 'text-white' : 'text-zinc-500'}`}>
                    {step.title}
                  </span>
                </motion.div>
                <div className={`mt-4 font-heading font-bold text-xs uppercase tracking-widest transition-all ${activeStep === step.id ? (step.theme === 'pink' ? 'text-pink-500' : 'text-[#D4AF37]') : 'text-zinc-600'}`}>
                   Step 0{step.id}
                </div>
             </div>
           ))}
        </div>

        {/* Detail Panels */}
        <div className="relative min-h-[400px]">
           <AnimatePresence mode="wait">
              {ROADMAP_STEPS.map((step) => (
                activeStep === step.id && (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-zinc-900 p-12 rounded-3xl border border-zinc-800 flex flex-col md:flex-row gap-12 items-center"
                  >
                     <div className="md:w-1/3">
                        <div className={`font-heading text-8xl font-black opacity-10 leading-none mb-4 ${step.theme === 'pink' ? 'text-pink-500' : 'text-[#D4AF37]'}`}>
                           0{step.id}
                        </div>
                        <h3 className={`font-heading text-4xl font-black uppercase mb-2 ${step.theme === 'pink' ? 'text-pink-500' : 'text-[#D4AF37]'}`}>
                           {step.title}
                        </h3>
                        <p className="text-white text-xl font-bold uppercase tracking-widest">
                           {step.subtitle}
                        </p>
                     </div>
                     <div className="md:w-2/3">
                        <ul className="grid sm:grid-cols-2 gap-6">
                           {step.details.map((detail, j) => (
                             <li key={j} className="flex items-start text-zinc-300">
                                <span className={`mr-4 mt-1 font-bold ${step.theme === 'pink' ? 'text-pink-500' : 'text-[#D4AF37]'}`}>•</span>
                                <span className="font-light leading-relaxed">{detail}</span>
                             </li>
                           ))}
                        </ul>
                        <div className="mt-12 pt-8 border-t border-zinc-800">
                           <button className={`font-heading font-black text-xs uppercase tracking-[0.2em] transition-all pb-2 border-b-2 ${step.theme === 'pink' ? 'text-pink-500 border-pink-500 hover:text-white hover:border-white' : 'text-[#D4AF37] border-[#D4AF37] hover:text-white hover:border-white'}`}>
                              Inquire About Stage 0{step.id} →
                           </button>
                        </div>
                     </div>
                  </motion.div>
                )
              ))}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
