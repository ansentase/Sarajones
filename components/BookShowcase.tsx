
import React from 'react';
import { motion } from 'framer-motion';
import { BOOKS } from '../constants.ts';

const BookShowcase: React.FC = () => {
  return (
    <section id="books" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="font-heading text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            THE TAX-FREE <span className="text-pink-500">EMPIRE</span>
          </h2>
          <p className="text-zinc-500 font-heading font-bold uppercase tracking-[0.3em] text-[10px] mt-4">
            BEST-SELLING STRATEGIES BY SARAH JONES, CPA
          </p>
        </div>

        <div className="space-y-48">
          {BOOKS.map((book, idx) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Virtual Book Mockup matching provided JPGs */}
              <div className="lg:w-1/2 relative group perspective-1000">
                <div className={`absolute -inset-10 rounded-full opacity-10 group-hover:opacity-30 transition-opacity blur-[100px] ${book.theme === 'pink' ? 'bg-pink-500' : 'bg-emerald-500'}`} />
                
                <motion.div 
                  whileHover={{ rotateY: -10, scale: 1.02 }}
                  className="relative mx-auto w-full max-w-[420px]"
                >
                  <div className={`relative aspect-[2/3] rounded-r-lg overflow-hidden shadow-[20px_40px_80px_rgba(0,0,0,0.9)] border border-zinc-800/50 bg-[#050505]`}>
                    
                    {/* Background Styles matching the JPGs */}
                    {book.id === 'tax-free-millionaire' ? (
                      <div className="absolute inset-0 bg-[#0a1a14]">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.2),transparent_70%)]" />
                        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/glitter.png')]" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-[#080808]" />
                    )}

                    {/* Sarah Portrait - Using the provided image files */}
                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90">
                       <img 
                         src={book.image} 
                         className="w-full h-full object-cover object-top"
                         alt={book.title}
                         onError={(e) => {
                           // Fallback if image not found in root
                           e.currentTarget.src = book.id === 'tax-free-millionaire' 
                             ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
                             : 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800';
                         }}
                       />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

                    {/* Content Layout matching JPGs (Overlaid to ensure high visibility) */}
                    <div className="relative z-10 h-full flex flex-col p-6 md:p-10 justify-between pointer-events-none">
                       {/* Labels matching the actual cover text positions */}
                       {book.id === 'fire-my-cpa' ? (
                         <div className="text-center">
                            <p className="text-white font-heading font-black text-[10px] md:text-[12px] uppercase tracking-[0.4em] opacity-80">
                              SARAH JONES, CPA
                            </p>
                         </div>
                       ) : <div />}

                       <div className="text-center">
                          {/* Visual spacers to allow the image text to show through if it's there */}
                          <div className="h-20" /> 
                       </div>

                       <div className="text-center">
                          {book.id === 'tax-free-millionaire' ? (
                            <div className="pt-4 border-t border-white/10">
                              <p className="text-white font-heading font-black text-[10px] md:text-[12px] uppercase tracking-[0.3em]">
                                SARAH JONES, CPA <span className="text-pink-500 italic lowercase">and</span> PHIL JONES
                              </p>
                            </div>
                          ) : (
                            <div className="pt-4 border-t border-white/10">
                              <p className="text-white text-[8px] md:text-[10px] font-medium italic tracking-tight opacity-70">
                                An Entrepreneur's Guide to Financial Success and <span className="font-bold">Massive Tax Savings</span>
                              </p>
                            </div>
                          )}
                       </div>
                    </div>
                  </div>
                  
                  {/* Spine Edge */}
                  <div className="absolute top-0 left-0 w-[4%] h-full bg-gradient-to-r from-black/60 via-white/5 to-transparent pointer-events-none" />
                </motion.div>
              </div>

              {/* Copy Sections */}
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className={`h-px w-12 ${book.theme === 'pink' ? 'bg-pink-500' : 'bg-[#D4AF37]'}`} />
                  <span className={`font-heading font-black text-xs uppercase tracking-widest ${book.theme === 'pink' ? 'text-pink-500' : 'text-[#D4AF37]'}`}>
                    {book.id === 'tax-free-millionaire' ? 'STOP OVERPAYING' : 'THE ULTIMATE GUIDE'}
                  </span>
                </div>
                
                <h3 className="font-heading text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
                  {book.id === 'tax-free-millionaire' ? (
                    <>Build Your <br /><span className="gradient-gold font-serif-lux italic tracking-normal">Tax Free</span> Empire</>
                  ) : (
                    <>Elevate Your <br /><span className="text-pink-500">Financial Future</span></>
                  )}
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  {book.description}
                </p>

                <div className="grid gap-4">
                  {book.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${book.theme === 'pink' ? 'bg-pink-500 shadow-[0_0_10px_#FF007F]' : 'bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]'}`} />
                      <span className="text-zinc-200 font-medium text-sm">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <a 
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-12 py-5 rounded font-heading font-black text-[10px] uppercase tracking-[0.2em] transition-all transform hover:scale-105 ${book.theme === 'pink' ? 'bg-pink-500 text-white neon-border-pink shadow-[0_0_40px_rgba(255,0,127,0.2)]' : 'bg-[#D4AF37] text-black neon-border-gold shadow-[0_0_40px_rgba(212,175,55,0.2)]'}`}
                  >
                    {book.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default BookShowcase;
