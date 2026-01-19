import React from 'react';
import { Reveal } from './Reveal';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-slate-950 pt-20">
      
      {/* 1. Background Enhancements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* 2. Avatar Section  */}
        <Reveal width="fit-content">
          <div className="relative mb-10">
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#10b981_360deg)] opacity-40 blur-sm"
            />
            
            {/* Image Container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-slate-900 rounded-full p-2 shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)] border border-white/10 overflow-hidden">
              <img 
                src="/profile.jpeg" 
                alt="Yashara Lekamge" 
                className="w-full h-full object-cover rounded-full grayscale-[10%] hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-110"
              />
            </div>
          </div>
        </Reveal>

        {/* 3. Content Section */}
        <div className="max-w-4xl mx-auto">
          <Reveal width="100%">
            <div className="text-emerald-400 font-mono tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 h-6 bg-emerald-400/5 px-4 py-1 rounded-full border border-emerald-400/20 inline-block">
              <Typewriter
                options={{
                  strings: ['Software Engineering Undergraduate', 'Software QA Intern', 'Frontend Enthusiast'],
                  autoStart: true, 
                  loop: true, 
                  delay: 50,
                }}
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Yashara <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Lekamge</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light px-4">
              Bridging the gap between <span className="text-emerald-100 font-medium border-b border-emerald-500/30">robust testing</span> and 
              <span className="text-emerald-100 font-medium border-b border-emerald-500/30 ml-1">elegant frontend design</span>.
            </p>
          </Reveal>

          {/* 4. Action Buttons */}
          <Reveal width="100%">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="group relative px-10 py-4 bg-emerald-500 text-slate-950 rounded-full font-bold transition-all shadow-xl shadow-emerald-500/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/YASHARA_LEKAMGE_RESUME.pdf" 
                download 
                className="px-10 py-4 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800/50 hover:border-slate-500 transition-all text-sm md:text-base flex items-center gap-2"
              >
                Download RESUME
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;