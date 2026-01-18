import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    
    <div className="bg-slate-950 min-h-screen relative text-slate-300">
      
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
        
       
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      
      <div className="relative z-10">
        <Navbar />
        <Hero /> 
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="py-10 text-center text-slate-600 border-t border-slate-900 bg-transparent">
          <p>© {new Date().getFullYear()} Yashara Lekamge. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;