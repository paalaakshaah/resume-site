import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Hero />
      <Projects />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
