import React from 'react';
import { ExternalLink, Github, FileText, Code2, Layout } from 'lucide-react';
import { Reveal } from './Reveal'; 

const Projects = () => {
  const myProjects = [
    {
      title: "Manual Test Suite - HackerNoon",
      category: "Manual Testing",
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      desc: "Developed 10 comprehensive functional test cases for User Authentication and Search functionality on the HackerNoon platform. Focused on identifying edge-case scenarios and ensuring UI/UX consistency.",
      tech: ["Test Case Design", "Functional Testing", "UI/UX Testing", "Regression"],
      link: "https://docs.google.com/spreadsheets/d/14NJXWnn7UaIYOm-Yx5nFBxP1B5kznka2/edit?usp=sharing&ouid=112356918023852634846&rtpof=true&sd=true",
      github: "https://github.com/YashLekamge/QA-Portfolio.git"
    },
    {
      title: "Selenium WebDriver Automation",
      category: "Automation",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      desc: "An end-to-end automation suite developed using Java and Selenium WebDriver. Implemented Page Object Model (POM) best practices to ensure code maintainability and efficient test execution.",
      tech: ["Java", "Selenium", "JUnit/TestNG", "Maven", "POM"],
      link: "https://github.com/YashLekamge/QA-Portfolio.git",
      github: "https://github.com/YashLekamge/QA-Portfolio.git"
    },
    {
      title: "Professional QA Portfolio",
      category: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-emerald-400" />,
      desc: "A modern, responsive portfolio website built using React.js and Tailwind CSS. Designed to showcase my technical expertise in Quality Assurance and Frontend development.",
      tech: ["React.js", "Tailwind CSS", "Vite", "Lucide Icons"],
      link: "https://yashara-lekamge.vercel.app",
      github: "https://github.com/YashLekamge/my-portfolio"
    }
  ];

  
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center">
            <span className="text-emerald-400 mr-3">/</span> Featured Projects
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((p, i) => (
            <Reveal key={i} width="100%">
              <div className="group flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">
                    {p.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] text-slate-500 bg-slate-950 border border-slate-800 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    VIEW PROJECT <ExternalLink className="w-3 h-3" />
                  </a>
                  {p.github && (
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors"
                    >
                      SOURCE <Github className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;