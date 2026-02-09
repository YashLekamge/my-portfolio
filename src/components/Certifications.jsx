import React, { useState } from 'react'; // useState import 
import { ExternalLink, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'; 
import { Reveal } from './Reveal'; 
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
  
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6;

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
      },
      {
        title: "Introduction to Cypress",
        issuer: "Test Automation University",
        date: "2026",
        link: "https://drive.google.com/file/d/1R5cjFAef8y9tZvgXHS7pp1eitvsBO1yX/view?usp=sharing", 
      },
      {
        title: "Cypress With TypeScript",
        issuer: "Test Automation University",
        date: "2026",
        link: "https://drive.google.com/file/d/1byIq-BB0D4OjVYw6spQtuLmj1s9V9pNq/view?usp=sharing", 
      },
      {
        title: "Acceptance Test Driven Development for the Front End",
        issuer: "Test Automation University",
        date: "2026",
        link: "https://drive.google.com/file/d/1TJSniaWukkeDXd3n-nKSBjYzhC7W2FvR/view?usp=sharing", 
      },
      {
        title: "Test Automation for Accessibility",
        issuer: "Test Automation University",
        date: "2026",
        link: "https://drive.google.com/file/d/1xgbxc7RMuJy8p8Ly4Y0Kcs0JhHzFeYYP/view?usp=sharing", 
      },
      {
        title: "Web Element Locator Strategies",
        issuer: "Test Automation University",
        date: "2026",
        link: "https://drive.google.com/file/d/1UXNlx2bOjpfKeiy8Ii_kO3bjZxoGfISV/view?usp=sharing", 
      },
      {
        title: "Introduction to Playwright",
        issuer: "Test Automation University",
        date: "2026",
        link: "https://drive.google.com/file/d/1jkjOLOVzJxcZmUpjUcfNNIdd-vFfGyLa/view?usp=sharing", 
      },
      {
        title: "Advanced Playwright",
        issuer: "Test Automation University",
        date: "2026",
        link: "https://drive.google.com/file/d/1qcRJ-mBJkowjy912RYYilbdNSrt9gm_v/view?usp=sharing", 
      },
      {
        title: "API Learning 101 Completion",
        issuer: "Postman API",
        date: "2026",
        link: "https://github.com/nisalgunawardhana/api-learning-101/pull/103", 
      }
  ];

  
  const visibleCertifications = showAll ? myCertifications : myCertifications.slice(0, initialCount);

  return (
    <section id="certifications" className="py-24 bg-slate-900/10">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center justify-center md:justify-start">
            <span className="text-emerald-400 mr-3">/</span> Certifications
          </h2>
        </Reveal>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleCertifications.map((cert, i) => (
            <Reveal key={i} width="100%">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group h-full flex flex-col justify-between bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/40 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="p-2 text-slate-500 group-hover:text-emerald-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors leading-tight mb-2 text-left">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="mt-4 border-t border-slate-800 pt-4 text-left">
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-slate-500 text-xs">
                      Issued: {cert.date}
                    </p>
                  </div>
                </motion.div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {myCertifications.length > initialCount && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500/50 text-white rounded-full transition-all duration-300 font-medium"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show More ({myCertifications.length - initialCount} more) <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;