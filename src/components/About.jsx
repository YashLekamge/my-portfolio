import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center">
          <span className="text-emerald-400 mr-3">/</span> About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* වම් පැත්ත - Bio Text */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              I am a driven <span className="text-emerald-400 font-semibold">Software Engineering Undergraduate</span> at 
              <span className="text-white font-medium"> NSBM Green University</span>, exploring the intersection where 
              quality assurance meets efficient development.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My passion lies in ensuring that every line of code translates into a seamless user experience. 
              As an aspiring QA Engineer, I focus on bridging the gap between complex software systems 
              and end-user reliability through meticulous testing and automated logic.
            </p>
            <p className="text-slate-400">
              I am constantly learning new technologies to improve my testing frameworks and 
              frontend development skills, aiming to build software that is both high-performing and bug-free.
            </p>
          </div>

          {/* දකුණු පැත්ත - Education Card */}
          <div className="relative group">
            {/* අලංකාර පසුබිම් ආලෝකය (Background Glow) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-emerald-400 font-bold text-lg">BSc (Hons) Software Engineering</h4>
                  <p className="text-white font-medium mt-1">NSBM Green University</p>
                </div>

                <div className="flex flex-col gap-3 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                    <span>2023 - 2027 (Expected)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>Homagama, Sri Lanka</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="pt-4">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-500/20">
                    Undergraduate
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;