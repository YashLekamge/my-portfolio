const Skills = () => {
  const categories = [
    {
      title: "QA & Testing",
      skills: ["Manual Testing", "Selenium WebDriver", "Test Case Writing", "Java", "Jira", "Bug Reporting"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "HTML5 & CSS3"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-emerald-400 mr-2">/</span> Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <h4 className="text-emerald-400 font-bold mb-6 text-lg tracking-wide uppercase">{cat.title}</h4>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-950 text-slate-300 rounded-md border border-slate-800 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;