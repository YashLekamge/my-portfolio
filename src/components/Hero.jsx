import React from 'react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-slate-950 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <p className="text-emerald-400 font-mono tracking-widest uppercase text-sm mb-4">
            Software Engineering Undergraduate @ NSBM
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Hi, I am <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Yashara Lekamge</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            I specialize in <span className="text-white">Quality Assurance</span> and <span className="text-white">Frontend Development</span>. 
            Ensuring high-quality software through automated logic and manual precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 bg-emerald-500 text-slate-950 rounded-lg font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-700 text-white rounded-lg font-bold hover:bg-slate-800 transition-all">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src={profileImg} 
              alt="Yashara Lekamge" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 right-6 bg-slate-900 border border-emerald-500 p-2 rounded-full shadow-lg">
               <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;