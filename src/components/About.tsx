import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./ui/Reveal";
import BorderGlow from "./ui/BorderGlow";
import { Briefcase, FolderOpen, GraduationCap, Award } from "lucide-react";

const stats = [
  { value: "5+", label: "Internships", icon: <Briefcase size={20} /> },
  { value: "10+", label: "Projects", icon: <FolderOpen size={20} /> },
  { value: "8.14", label: "CGPA", icon: <GraduationCap size={20} /> },
  { value: "2027", label: "Graduating", icon: <Award size={20} /> },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ willChange: "transform, opacity" }}
    >
      <BorderGlow
        edgeSensitivity={30}
        glowColor="217 91 60"
        backgroundColor="var(--bg-primary)"
        borderRadius={14}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={["#3b82f6", "#94a3b8", "#64748b"]}
        className="p-4 md:p-6 shadow-lg group"
      >
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="text-[var(--accent-color)] group-hover:scale-110 transition-transform duration-200 w-fit">
            {stat.icon}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--accent-color)]">
            {stat.value}
          </h3>
          <p className="text-[10px] md:text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">
            {stat.label}
          </p>
        </div>
      </BorderGlow>
    </motion.div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
          {/* Bio text */}
          <div className="flex-1 flex flex-col gap-5">
            <Reveal delay={0.2}>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                I'm a final-year <span className="text-[var(--text-primary)] font-semibold">B.E. Electronics & Communication Engineering</span> student 
                and a passionate Software Developer. With hands-on experience across software engineering, 
                computer vision, enterprise platforms, and space technology, I specialise in building 
                scalable, user-centric applications.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                My technical toolkit spans <span className="text-[var(--text-primary)] font-semibold">React, TypeScript, Python,</span> and robust 
                backend architectures. I thrive on translating complex challenges into elegant, 
                real-world solutions — whether it's an AI-powered SaaS product or an optimised web interface.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                Driven by continuous learning, I'm always exploring new frontiers in tech. When I'm not 
                coding, you'll find me participating in{" "}
                <span className="text-[var(--text-primary)] font-semibold">hackathons</span>, contributing 
                to open-source, or keeping up with the latest in AI and software design.
              </p>
            </Reveal>
          </div>

          {/* Stats grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
