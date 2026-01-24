import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between md:justify-end items-center">
        
       
        <div className="md:hidden text-emerald-400 font-bold tracking-widest text-sm uppercase">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-slate-300 hover:text-emerald-400 transition-colors uppercase tracking-widest text-[11px]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Phone  */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-emerald-400 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Animation  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-950 border-b border-slate-900 md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-slate-300 hover:text-emerald-400 transition-colors uppercase tracking-widest text-xs font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;