
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import TheBetterWay from './components/TheBetterWay';
import Authority from './components/Authority';
import BookShowcase from './components/BookShowcase';
import Testimonials from './components/Testimonials';
import Roadmap from './components/Roadmap';
import FinalCTA from './components/FinalCTA';
import FloatingBanner from './components/FloatingBanner';
import Navbar from './components/Navbar';
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
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`
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
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default App;
