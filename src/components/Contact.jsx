import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Open for Collaborations
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
          Ready to ensure <br />
          <span className="text-emerald-400">excellence together?</span>
        </h2>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          I’m always excited to discuss quality engineering, automation strategies, or new challenges. 
          Drop me a message and let's build something bug-free!
        </p>

        {/* Say Hello Button - Linked to your Email */}
        <div className="flex justify-center mb-16">
          <a 
            href="mailto:lekamgeyashara1@gmail.com" 
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-emerald-500/20"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </div>

        {/* Social Icons - Linked to your Profiles */}
        <div className="flex justify-center gap-8 text-slate-500">
          <a 
            href="https://github.com/YashLekamge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/yashara-lekamge-4600902a0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:lekamgeyashara1@gmail.com" 
            className="hover:text-emerald-400 transition-colors"
            title="Send Email"
          >
            <Send className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-900">
          <p className="text-slate-600 text-sm tracking-wide">
            © {new Date().getFullYear()} Yashara Lekamge. Built with <span className="text-emerald-500/50">React & Tailwind CSS.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;