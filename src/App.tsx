import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import ClickSpark from "./components/ui/ClickSpark";
import DotField from "./components/ui/DotField";

// Known valid hash routes — anything else → 404
const VALID_HASHES = ["", "#", "#about", "#projects", "#experience", "#skills", "#certifications", "#contact", "#hero"];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const [is404, setIs404] = useState(false);

  // Hash-based 404 detection
  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash.split("?")[0]; // strip query params
      const path = window.location.pathname;
      // If on a non-root path (e.g. /about, /resume), show 404
      const isUnknownPath = path !== "/" && path !== "/index.html";
      const isUnknownHash = Boolean(hash && !VALID_HASHES.includes(hash));
      setIs404(isUnknownPath || isUnknownHash);
    };
    checkRoute();
    window.addEventListener("hashchange", checkRoute);
    return () => window.removeEventListener("hashchange", checkRoute);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const gradientFrom = isDarkMode ? 'rgba(168, 85, 247, 0.8)' : 'rgba(59, 130, 246, 0.8)';
  const gradientTo = isDarkMode ? 'rgba(180, 151, 207, 0.6)' : 'rgba(147, 197, 253, 0.6)';
  const glowColor = isDarkMode ? 'rgba(10, 10, 10, 1)' : 'rgba(255, 255, 255, 1)';

  // 404 page
  if (is404) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <NotFound />
      </div>
    );
  }

  return (
    <ClickSpark
      sparkColor="#3b82f6"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={600}
    >
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative">
        {/* Scroll progress bar — pinned above everything */}
        <ScrollProgress />

        <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
          <DotField
            dotRadius={1.5}
            dotSpacing={22}
            bulgeStrength={67}
            glowRadius={110}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={200}
            cursorForce={0.09}
            bulgeOnly
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            glowColor={glowColor}
          />
        </div>
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ClickSpark>
  );
}

export default App;
