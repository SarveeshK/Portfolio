import React, { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Reveal } from "./ui/Reveal";
import BorderGlow from "./ui/BorderGlow";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Projects = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  const projects = [
    {
      title: "Nuzhai",
      description: "Developed an alumni event registration platform for attendance tracking and participant management with a focus on usability and efficient event organization.",
      image: "/nuzhai.png",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Hook Form", "Zod"],
      metric: "Event Registration & Tracking",
      github: "https://github.com/SarveeshK",
      demo: ""
    },
    {
      title: "Agri Robot Perception System",
      description: "AI-powered computer vision system capable of detecting coconut trees using a custom-trained YOLOv8 model for autonomous farming robots.",
      image: "/coconut.png",
      tags: ["Python", "YOLOv8", "OpenCV", "Machine Learning"],
      metric: "High accuracy edge detection",
      github: "https://github.com/SarveeshK",
      demo: ""
    },
    {
      title: "Work Hub - CES",
      description: "Enterprise workflow management and issue tracking platform with role-based access control and automated task allocation.",
      image: "/workhub.png",
      tags: ["React", "TypeScript", ".NET 8", "PostgreSQL"],
      metric: "40% task allocation reduction",
      github: "https://github.com/SarveeshK",
      demo: "https://issue-tracker-13zc.onrender.com/"
    },
    {
      title: "Galaxy Website",
      description: "Premium user experience website with advanced animation techniques, interactive 3D elements, and smooth responsive design.",
      image: "/galaxy.png",
      tags: ["React", "Framer Motion", "GSAP", "Tailwind"],
      metric: "High performance UI/UX",
      github: "https://github.com/SarveeshK",
      demo: "https://galaxy.gceerode.in/"
    },
    {
      title: "Docky SaaS",
      description: "Built a secure SaaS platform for document management with dedicated user and administrator dashboards and enterprise-grade security.",
      image: "/docky_saas.png",
      tags: ["React", "Flask", "Python", "MongoDB"],
      metric: "MVP Deployed",
      github: "https://github.com/SarveeshK",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-16 bg-[var(--accent-color)] rounded-full mb-4"></div>
            <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl">
              A selection of my recent work across AI, enterprise software, and frontend development.
            </p>
          </div>
        </Reveal>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          style={{ willChange: "auto" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full flex flex-col"
              style={{ willChange: "transform, opacity" }}
            >
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
                className="h-full group shadow-lg project-card"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden shrink-0 z-10">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-20 pointer-events-none" />
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-30 bg-[var(--accent-color)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                      {project.metric}
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-4 md:mb-6 flex-1 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md text-[var(--text-primary)]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto border-t border-[var(--border-color)] pt-4 relative z-30">
                      {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
                          <FaGithub size={16} /> Code
                        </a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-200 ml-auto">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
