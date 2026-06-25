import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter">
            SK
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Sarveesh_Resume_-_One_Page.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white transition-all duration-200"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--border-color)] transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-2 pr-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--border-color)] transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[var(--text-primary)]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full-screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-full bg-[var(--bg-primary)] z-[60] md:hidden flex flex-col pt-20 px-6 pb-8"
          >
            {/* Close button in overlay */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-5 p-2 text-[var(--text-primary)]"
            >
              <X size={26} />
            </button>

            <div className="flex flex-col gap-1 flex-1 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--text-primary)] text-xl font-semibold py-4 border-b border-[var(--border-color)] flex items-center justify-between group"
                >
                  {link.name}
                  <span className="text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform text-lg">›</span>
                </a>
              ))}
            </div>

            {/* Resume CTA pinned to bottom */}
            <a
              href="/Sarveesh_Resume_-_One_Page.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[var(--accent-color)] text-white py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity mt-4 mb-4"
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
