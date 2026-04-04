import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pt-20">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 pb-20">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}

export default App;