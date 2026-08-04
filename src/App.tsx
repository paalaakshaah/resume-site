import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundLayer from "./components/BackgroundLayer";
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
    <>
      <Hero />
      <div className="bg-[var(--bg)]">
        <Projects />
        <Experience />
        <Education />
        <Skills />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <BackgroundLayer />
      <ScrollToTop />
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
