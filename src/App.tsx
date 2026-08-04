import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
