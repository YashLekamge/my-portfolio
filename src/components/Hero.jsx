import React from 'react';
import { Reveal } from './Reveal';
import Typewriter from 'typewriter-effect'; // 1. Typewriter එක import කළා

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-slate-950 pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-slate-300">
        
        {/* වම් පැත්ත - විස්තර */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <Reveal width="100%">
            {/* Typewriter පේළිය */}
            <div className="text-emerald-400 font-mono tracking-widest uppercase text-sm mb-4 h-6">
              <Typewriter
                options={{
                  strings: [
                    'Software Engineering Undergraduate @ NSBM',
                    'Software QA Intern',
                    'Frontend Enthusiast',
                    'Automation Testing Learner'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Hi, I am <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Yashara Lekamge</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
              I specialize in <span className="text-white font-medium">Quality Assurance</span> and <span className="text-white font-medium">Frontend Development</span>. 
              Ensuring high-quality software through automated logic and manual precision.
            </p>
          </Reveal>

          <Reveal width="100%">
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* View My Work Button */}
              <a 
                href="#projects" 
                className="px-8 py-3 bg-emerald-500 text-slate-950 rounded-lg font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 text-center"
              >
                View My Work
              </a>

              {/* Download CV Button */}
              <a 
                href="/YASHARA_LEKAMGE_RESUME.pdf" 
                download="YASHARA_LEKAMGE_RESUME.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 border border-emerald-500 text-emerald-400 rounded-lg font-bold hover:bg-emerald-500/10 transition-all text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-down">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                  <path d="M12 18v-6"/>
                  <path d="m9 15 3 3 3-3"/>
                </svg>
                Download RESUME
              </a>
            </div>
          </Reveal>
        </div>

       
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <Reveal width="fit-content">
            <div className="relative group">
              <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                 src="/profile.jpeg"  
                 alt="Yashara Lekamge" 
                 className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-6 right-6 bg-slate-900 border border-emerald-500 p-2 rounded-full shadow-lg">
                 <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;