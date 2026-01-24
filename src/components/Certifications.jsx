import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react'; 
import { Reveal } from './Reveal'; 
import { motion } from 'framer-motion';

const Certifications = () => {
  const myCertifications = [
    {
      title: "Python for Beginners",
      issuer: "CODL,University Of Moratuwa,Sri Lanka", 
      date: "2026",
      link: "https://drive.google.com/file/d/1g69Rl1hm1Ahvv3AEY3GFPrKw_qzcKhO1/view?usp=sharing", 
    },
    {
      title: "Web Design for Beginners",
      issuer: "CODL,University Of Moratuwa,Sri Lanka",
      date: "2026",
      link: "https://drive.google.com/file/d/1R5cjFAef8y9tZvgXHS7pp1eitvsBO1yX/view?usp=sharing", 
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-900/10">
      <div className="max-w-4xl mx-auto px-6">
        
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
            <span className="text-emerald-400 mr-3">/</span> Certifications
          </h2>
        </Reveal>

        <div className="space-y-4">
          {myCertifications.map((cert, i) => (
            <Reveal key={i} width="100%">
             
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="group flex items-center justify-between bg-slate-900/50 border border-slate-800 p-5 rounded-xl hover:border-emerald-500/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors text-left">
                        {cert.title}
                      </h3>
                      <p className="text-slate-500 text-sm text-left">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 text-slate-400 group-hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </motion.div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;