import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import BorderGlow from "./ui/BorderGlow";
import { Reveal } from "./ui/Reveal";

const experiences = [
  {
    company: "Datacorp",
    role: "AI / Computer Vision Intern",
    period: "June 2026 – July 2026",
    points: [
      "Developed object detection systems using OpenCV and trained custom YOLOv8 models.",
      "Built robust computer vision pipelines for autonomous agricultural robots.",
    ],
  },
  {
    company: "Infotact Solutions",
    role: "Python Development Intern",
    period: "Jan 2026 – Present",
    points: [
      "Contributing to Python-based backend systems and REST API development.",
      "Implementing software automation and core application logic.",
    ],
  },
  {
    company: "Macs Solutions",
    role: "Web Developer Intern",
    period: "Dec 2025 – Jan 2026",
    points: [
      "Architected 'Work Hub-CES', reducing administrative task allocation time by 40%.",
      "Implemented full-stack features with React, .NET 8, and role-based access control.",
    ],
  },
  {
    company: "Nuvai AI Solutions",
    role: "Full Stack with AI Trainee",
    period: "July 2025 – Aug 2025",
    points: [
      "Developed web applications leveraging modern frameworks and AI-assisted tools.",
      "Optimized application modules in a collaborative agile team environment.",
    ],
  },
  {
    company: "India Space Lab",
    role: "Winter Technical Intern",
    period: "Feb 2026 – March 2026",
    points: [
      "Gained practical exposure to space technologies, CubeSats, and Remote Sensing.",
      "Studied Advanced Drone Technology and Geographic Information Systems (GIS).",
    ],
  },
];

const CardContent = ({ exp }: { exp: typeof experiences[0] }) => (
  <motion.div
    whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
    whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
    style={{ willChange: "transform" }}
    className="group relative"
  >
    {/* Left accent bar — slides in on hover */}
    <motion.div
      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[var(--accent-color)] z-10 pointer-events-none"
      initial={{ scaleY: 0, opacity: 0 }}
      whileHover={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      style={{ originY: 0.5 }}
    />
    <BorderGlow
      edgeSensitivity={30}
      glowColor="217 91 60"
      backgroundColor="var(--bg-primary)"
      borderRadius={12}
      glowRadius={50}
      glowIntensity={1.2}
      coneSpread={30}
      animated={false}
      colors={["#3b82f6", "#94a3b8", "#64748b"]}
      className="shadow-lg group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.18)] transition-shadow duration-300"
    >
      <div className="p-5 md:p-6">
        <div className="flex flex-col mb-3 md:mb-4">
          <span className="text-xs md:text-sm font-semibold text-[var(--accent-color)] mb-1">
            {exp.period}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-200">
            {exp.role}
          </h3>
          <h4 className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-200">
            {exp.company}
          </h4>
        </div>
        <ul className="list-disc list-inside text-sm text-[var(--text-secondary)] space-y-2">
          {exp.points.map((point, i) => (
            <li key={i} className="leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-200">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </BorderGlow>
  </motion.div>
);

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  // Smooth the raw scroll value so the line draws butter-smoothly
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-12 md:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Professional Experience
          </h2>
          <div className="h-1 w-16 bg-[var(--accent-color)] rounded-full mx-auto mb-8 md:mb-14"></div>
        </Reveal>

        <div ref={sectionRef} className="relative">
          {/* ── MOBILE timeline line (left rail) ─────────────────── */}
          <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-[var(--border-color)]" />
          <motion.div
            style={{ scaleY: lineProgress, originY: 0 }}
            className="md:hidden absolute left-[11px] top-0 bottom-0 w-[2px] bg-[var(--accent-color)]"
          />

          {/* ── DESKTOP timeline line (center) ───────────────────── */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--border-color)]" />
          <motion.div
            style={{ scaleY: lineProgress, originY: 0 }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[var(--accent-color)]"
          />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">

                {/* ══════════════════════════════
                    MOBILE — left-rail layout
                ══════════════════════════════ */}
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: [0, 1.4, 1], opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="md:hidden absolute left-[11px] -translate-x-1/2 top-5 w-[14px] h-[14px] rounded-full bg-[var(--accent-color)] border-[3px] border-[var(--bg-secondary)] z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-full bg-[var(--accent-color)]"
                  />
                </motion.div>

                {/* Card — slides in from left */}
                <motion.div
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  style={{ willChange: "transform, opacity" }}
                  className="md:hidden pl-7"
                >
                  <CardContent exp={exp} />
                </motion.div>

                {/* ══════════════════════════════
                    DESKTOP — alternating zigzag
                ══════════════════════════════ */}
                <div
                  className={`hidden md:flex items-center w-full gap-0 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Card side */}
                  <div className="w-[46%]">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <CardContent exp={exp} />
                    </motion.div>
                  </div>

                  {/* Center dot — exactly on the line */}
                  <div className="w-[8%] flex justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-[var(--accent-color)] border-4 border-[var(--bg-secondary)] z-10 relative"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-[var(--accent-color)]"
                      />
                    </motion.div>
                  </div>

                  {/* Empty spacer side */}
                  <div className="w-[46%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

