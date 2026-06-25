import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "./ui/Reveal";
import BorderGlow from "./ui/BorderGlow";
import LogoLoop from "./ui/LogoLoop";
import { FaPeopleGroup } from "react-icons/fa6";
import { ChevronDown, Code2, Layers, Database, Wrench } from "lucide-react";
import {
  SiPython, SiTypescript, SiJavascript, SiReact,
  SiFlask, SiTailwindcss, SiPostgresql, SiMongodb,
  SiDocker, SiVite, SiPostman, SiGithub
} from "react-icons/si";

const techLogos = [
  { node: <SiPython />, title: "Python" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiReact />, title: "React" },
  { node: <SiFlask />, title: "Flask" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiVite />, title: "Vite" },
  { node: <SiPostman />, title: "Postman" },
  { node: <SiGithub />, title: "GitHub" },
];

interface ProgressBarProps {
  name: string;
  percentage: number;
  delay: number;
}

const ProgressBar = ({ name, percentage, delay }: ProgressBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-semibold text-[var(--text-primary)]">{name}</span>
        <span className="text-xs font-medium text-[var(--text-secondary)]">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-[var(--border-color)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "width" }}
          className="h-full bg-[var(--accent-color)] rounded-full"
        />
      </div>
    </div>
  );
};

const skillsCategories = [
  {
    title: "Languages",
    icon: <Code2 size={18} />,
    skills: [
      { name: "Python", percentage: 90 },
      { name: "SQL", percentage: 85 },
      { name: "C", percentage: 65 },
      { name: "TypeScript / JavaScript", percentage: 50 },
    ]
  },
  {
    title: "Libraries & Frameworks",
    icon: <Layers size={18} />,
    skills: [
      { name: "React", percentage: 95 },
      { name: "Flask", percentage: 85 },
      { name: "Tailwind CSS", percentage: 90 },
      { name: "OpenCV", percentage: 85 },
    ]
  },
  {
    title: "Data & Analytics",
    icon: <Database size={18} />,
    skills: [
      { name: "PostgreSQL", percentage: 80 },
      { name: "MongoDB", percentage: 80 },
      { name: "SQLite", percentage: 85 },
    ]
  },
  {
    title: "Platforms & Tools",
    icon: <Wrench size={18} />,
    skills: [
      { name: "Git / GitHub", percentage: 90 },
      { name: "Vite", percentage: 85 },
      { name: "Docker", percentage: 60 },
      { name: "Cloud Deployment", percentage: 75 },
      { name: "Postman", percentage: 50 },
    ]
  },
  {
    title: "Soft Skills",
    icon: <FaPeopleGroup size={18} />,
    skills: [
      { name: "Problem Solving", percentage: 95 },
      { name: "Team Collaboration", percentage: 90 },
      { name: "Communication", percentage: 70 },
      { name: "Continuous Learning", percentage: 100 },
    ]
  }
];

/** Shared panel content — animated when tab changes on desktop */
const SkillsPanel = ({ tabIndex }: { tabIndex: number }) => {
  const cat = skillsCategories[tabIndex];
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="217 91 60"
      backgroundColor="var(--bg-primary)"
      borderRadius={16}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={['#3b82f6', '#94a3b8', '#64748b']}
      className="shadow-xl h-full"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-8 border-b border-[var(--border-color)] pb-6">
          <div className="text-xl text-[var(--accent-color)] font-bold flex items-center">
            {cat.icon}
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">{cat.title}</h3>
        </div>
        <div className="space-y-6">
          {cat.skills.map((skill, index) => (
            <ProgressBar
              key={skill.name + tabIndex}
              name={skill.name}
              percentage={skill.percentage}
              delay={0.05 + index * 0.08}
            />
          ))}
        </div>
      </div>
    </BorderGlow>
  );
};

export const Skills = () => {
  // null = all closed; number = open tab index
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(prev => (prev === index ? null : index));
  };

  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <Reveal>
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="h-1 w-16 bg-[var(--accent-color)] mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <div className="w-full mb-16 h-16 relative overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={40}
              gap={50}
              hoverSpeed={0}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="var(--bg-primary)"
              ariaLabel="Technologies"
            />
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center">

          {/* ── Tab List (Sidebar on desktop, Accordion triggers on mobile) ── */}
          <div className="w-full md:w-[280px] flex flex-col gap-3 shrink-0">
            {skillsCategories.map((category, index) => {
              const isOpen = activeTab === index;
              return (
                <div key={category.title}>
                  <Reveal delay={0.2 + index * 0.08}>
                    <motion.button
                      onClick={() => handleTabClick(index)}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-full text-left p-4 rounded-xl flex items-center gap-4 border transition-colors duration-200 ${
                        isOpen
                          ? "bg-[var(--bg-secondary)] border-[var(--accent-color)] shadow-lg shadow-[var(--accent-color)]/10"
                          : "bg-[var(--bg-secondary)]/40 border-[var(--border-color)] hover:border-[var(--accent-color)]/50 hover:bg-[var(--bg-secondary)]/70"
                      }`}
                    >
                      {/* Icon */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base transition-colors duration-200 ${
                        isOpen ? "text-[var(--accent-color)]" : "text-[var(--text-primary)]"
                      }`}>
                        {category.icon}
                      </div>

                      {/* Label */}
                      <span className={`font-semibold text-sm transition-colors duration-200 ${
                        isOpen ? "text-[var(--text-primary)]" : "text-[var(--text-primary)]"
                      }`}>
                        {category.title}
                      </span>

                      {/* Right indicator — dot on desktop, chevron on mobile */}
                      <div className="ml-auto flex items-center">
                        {/* Desktop: accent dot */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"
                            />
                          )}
                        </AnimatePresence>

                        {/* Mobile: animated chevron */}
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="md:hidden text-[var(--text-secondary)]"
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </div>
                    </motion.button>
                  </Reveal>

                  {/* ── Mobile Accordion Panel (AnimatePresence for smooth open/close) ── */}
                  <div className="md:hidden overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`accordion-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                          style={{ willChange: "height, opacity" }}
                        >
                          <div className="pt-3 pb-1">
                            <SkillsPanel tabIndex={index} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Desktop Content Panel (AnimatePresence for smooth tab switching) ── */}
          <div className="hidden md:block w-full md:w-[450px] shrink-0">
            <AnimatePresence mode="wait">
              {activeTab !== null ? (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <SkillsPanel tabIndex={activeTab} />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center h-48 text-[var(--text-secondary)] text-sm"
                >
                  Select a category to explore skills
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
