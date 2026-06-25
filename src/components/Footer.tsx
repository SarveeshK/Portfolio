import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-[var(--border-color)] mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-2xl font-bold tracking-tighter">
            Sarveesh Kaarthic<span className="text-[var(--accent-color)]"></span>
          </a>
          <p className="text-[var(--text-secondary)] mt-2 text-sm max-w-xs">
            Building AI-Powered Applications & Intelligent Software Solutions.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/SarveeshK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sarveeshkaarthicrameshkannan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:sarveeshkaarthic05@gmail.com"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+919360181997"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-[var(--border-color)] text-center text-[var(--text-secondary)] text-sm">
        &copy; {new Date().getFullYear()} Sarveesh Kaarthic R. All rights reserved.
      </div>
    </footer>
  );
};
