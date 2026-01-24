import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center md:justify-end items-center">
       
        
        <div className="flex space-x-8 text-sm font-medium">
          {['About', 'Skills', 'Projects','Certifications', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-slate-300 hover:text-emerald-400 transition-colors uppercase tracking-widest text-xs"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;