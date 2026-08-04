import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import PodcastPage from "./components/PodcastPage";
import CVPage from "./components/CVPage";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
