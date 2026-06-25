import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import ShinyText from "./ui/ShinyText";
import MagicRings from "./ui/MagicRings";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-12 md:pt-20 pb-8 md:pb-12">
      <div className="container mx-auto max-w-6xl px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Open to Work badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Open to Work
          </motion.div>

          <Reveal>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
              Hi, I'm <ShinyText text="Sarveesh Kaarthic" speed={3} color="var(--text-primary)" shineColor="var(--accent-color)" />
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <h2 className="text-xl md:text-4xl font-medium text-[var(--text-secondary)] mb-4 md:mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold">AI-Powered</span><br />
              Intelligent Solutions.
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-base md:text-xl text-[var(--text-secondary)] mb-6 md:mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Software Developer specializing in Computer Vision and Enterprise Software. 
              I enjoy creating impactful products that combine innovation, scalability, and user-centric design.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8 items-center md:items-start">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <a
                  href="#projects"
                  className="flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto text-sm md:text-base"
                >
                  View My Projects <ArrowRight size={18} />
                </a>
                <a
                  href="/Sarveesh_Resume_-_One_Page.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-2 border border-[var(--border-color)] bg-[var(--bg-secondary)] px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium hover:bg-[var(--border-color)] transition-colors w-full sm:w-auto text-sm md:text-base"
                >
                  Download Resume <Download size={18} />
                </a>
              </div>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://github.com/SarveeshK" target="_blank" rel="noopener noreferrer" className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sarveeshkaarthicrameshkannan/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] hover:text-[#0a66c2] hover:border-[#0a66c2] transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:sarveeshkaarthic05@gmail.com" className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-center">
          <Reveal delay={0.2} width="fit-content">
            <div className="relative flex items-center justify-center">
              <div className="hidden md:block absolute w-[600px] h-[600px] z-0 opacity-40 dark:opacity-60 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
                <MagicRings
                  color="#3b82f6"
                  colorTwo="#94a3b8"
                  ringCount={5}
                  speed={0.8}
                  attenuation={15}
                  lineThickness={2}
                  baseRadius={0.25}
                  radiusStep={0.1}
                  scaleRate={0.1}
                  opacity={1}
                  blur={0}
                  noiseAmount={0.05}
                  rotation={0}
                  ringGap={1.5}
                  fadeIn={0.7}
                  fadeOut={0.5}
                  followMouse={true}
                  mouseInfluence={0.1}
                  hoverScale={1.1}
                  parallax={0.05}
                  clickBurst={false}
                />
              </div>
              <img 
                src="/Portfolio image.jpeg" 
                alt="Sarveesh Kaarthic" 
                className="relative z-10 w-48 h-48 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-full shadow-2xl border border-[var(--border-color)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
