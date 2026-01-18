import React from 'react';
import { Reveal } from './Reveal';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent pt-20">
      
     
      <Reveal width="fit-content">
        <div className="relative mb-10">
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#10b981_360deg)] opacity-30 blur-md"
          />
         
          <div className="relative w-40 h-40 md:w-52 md:h-52 bg-slate-900 rounded-full p-1 shadow-2xl overflow-hidden border border-slate-800">
            <img 
              src="/profile.jpeg" 
              alt="Yashara Lekamge" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </Reveal>

      {/* 2. Content Section */}
      <div className="max-w-3xl mx-auto">
        <Reveal width="100%">
          {/* Typewriter text */}
          <div className="text-emerald-400 font-mono tracking-[0.2em] uppercase text-xs mb-4 h-6">
            <Typewriter
              options={{
                strings: ['Software Engineering Undergraduate', 'Software QA Intern', 'Frontend Enthusiast'],
                autoStart: true, 
                loop: true, 
                delay: 50,
              }}
            />
          </div>
          
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Yashara <span className="text-emerald-400">Lekamge</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Bridging the gap between <span className="text-white font-medium">robust testing</span> and 
            <span className="text-white font-medium"> elegant frontend design</span>.
          </p>
        </Reveal>

        {/* 3. Buttons */}
        <Reveal width="100%">
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#projects" className="px-10 py-4 bg-emerald-500 text-slate-950 rounded-full font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 text-sm">
              View My Work
            </a>
            <a href="/YASHARA_LEKAMGE_RESUME.pdf" download className="px-10 py-4 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 transition-all text-sm">
              Download RESUME
            </a>
          </div>
        </Reveal>
      </div>

      {/* 4. Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-slate-600 text-[10px] uppercase tracking-[0.3em]"
      >
        Scroll Down
      </motion.div>
    </section>
  );
};

export default Hero;