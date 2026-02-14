
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero.tsx';
import ProblemAgitation from './components/ProblemAgitation.tsx';
import TheBetterWay from './components/TheBetterWay.tsx';
import Authority from './components/Authority.tsx';
import BookShowcase from './components/BookShowcase.tsx';
import Testimonials from './components/Testimonials.tsx';
import Roadmap from './components/Roadmap.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import FloatingBanner from './components/FloatingBanner.tsx';
import Navbar from './components/Navbar.tsx';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-pink-500 selection:text-white">
      {/* Background Bokeh Particles */}
      <div className="bokeh-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bokeh-particle"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              backgroundColor: i % 2 === 0 ? '#FF007F' : '#D4AF37',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${i} ${Math.random() * 20 + 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <FloatingBanner />
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <ProblemAgitation />
        <TheBetterWay />
        <Authority />
        <BookShowcase />
        <Testimonials />
        <Roadmap />
        <FinalCTA />
      </main>

      <footer className="py-12 bg-zinc-900 border-t border-zinc-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-heading uppercase tracking-widest text-zinc-500 text-xs mb-4">
            BUILD. PROTECT. GROW.
          </p>
          <p className="text-zinc-400 text-sm">
            Sarah Jones CPA | Licensed in 50 States | Tax Strategist
          </p>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-zinc-600 text-[10px] uppercase tracking-tighter">
            © {new Date().getFullYear()} Sarah Jones CPA. All Rights Reserved.
          </div>
        </div>
      </footer>

      <style>{`
        ${[...Array(15)].map((_, i) => `
          @keyframes float-${i} {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(1.1); }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
};

export default App;
