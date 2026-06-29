import { Reveal } from "./ui/Reveal";
import BorderGlow from "./ui/BorderGlow";
import { Award, Trophy } from "lucide-react";
import { useEffect } from "react";

export const Certifications = () => {
  const certifications = [
    { title: "Introduction to Generative AI", issuer: "Google Cloud & Simplilearn" },
    { title: "Python 101 for Data Science", issuer: "IBM (Cognitive Class)", link: "https://courses.cognitiveclass.ai/certificates/151ab764518b40b384afecf46193c4e3" },
    { title: "SQL and Relational Databases 101", issuer: "IBM (Cognitive Class)", link: "https://courses.cognitiveclass.ai/certificates/56bb6c2fea17489bb7b48c5942070814" },
    { title: "Winter Internship Technical Training Program 2026", issuer: "India Space Lab" },
    { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle University" },
    { title: "Building and Deploying Applications with Google AI Studio", issuer: "HCL GUVI" },
    { title: "ChatGPT for Everyone", issuer: "HCL GUVI" },
    { title: "Industrial IoT and Industry 4.0", issuer: "Naan Mudhalvan" },
    { title: "Geodata Processing using Python and Machine Learning", issuer: "IIRS" },
  ];

  const achievements = [
    { title: "ServiceNow Industry Training Program Selection", detail: "Selected as a participant for exclusive industry training" },
    { title: "First Prize – Paper Presentation", detail: "KSR Educational Institution - Technical research presentation" },
    { title: "Smart India Hackathon 2025 & 2026", detail: "National-level hackathon participant & team contributor" },
    { title: "India Space Lab Winter Technical Training", detail: "Completed the India Space Lab Winter Technical Training Program in Space Science and Technology." },
  ];

  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="certifications" className="py-12 md:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
            <div className="h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <Reveal delay={0.2}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[var(--text-primary)]">
                Certifications
              </h3>
            </Reveal>
            <div className="space-y-4 md:space-y-6">
              {certifications.map((cert, i) => (
                <Reveal key={i} delay={0.3 + i * 0.1}>
                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor="217 91 60"
                    backgroundColor="var(--bg-primary)"
                    borderRadius={12}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={['#3b82f6', '#94a3b8', '#64748b']}
                    className="p-4 md:p-6 shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <Award className="text-[var(--accent-color)] shrink-0 mt-1" size={18} />
                      <div>
                        <h4 className="font-bold text-base md:text-lg mb-1">
                          {cert.link ? (
                            <a 
                              href={cert.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-[var(--accent-color)] transition-colors inline-flex items-center gap-2"
                            >
                              {cert.title}
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                          ) : (
                            cert.title
                          )}
                        </h4>
                        <p className="text-[var(--accent-color)] font-medium text-xs md:text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                  </BorderGlow>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal delay={0.4}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[var(--text-primary)]">
                Achievements
              </h3>
            </Reveal>
            <div className="space-y-4 md:space-y-6">
              {achievements.map((achieve, i) => (
                <Reveal key={i} delay={0.5 + i * 0.1}>
                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor="217 91 60"
                    backgroundColor="var(--bg-primary)"
                    borderRadius={12}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={['#3b82f6', '#94a3b8', '#64748b']}
                    className="p-4 md:p-6 shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <Trophy className="text-[var(--accent-color)] shrink-0 mt-1" size={18} />
                      <div>
                        <h4 className="font-bold text-base md:text-lg mb-1">{achieve.title}</h4>
                        <p className="text-[var(--accent-color)] font-medium text-xs md:text-sm">{achieve.detail}</p>
                      </div>
                    </div>
                  </BorderGlow>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.6} width="100%">
          <div className="mt-12 md:mt-20">
            <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Verified Credentials</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="217 91 60"
                backgroundColor="white"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#3b82f6', '#94a3b8', '#64748b']}
                className="shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-shadow p-6"
              >
                <div 
                  data-iframe-width="150" 
                  data-iframe-height="270" 
                  data-share-badge-id="b0b026e2-5384-4db3-8c1e-662066fbba8a" 
                  data-share-badge-host="https://www.credly.com"
                ></div>
              </BorderGlow>
              <BorderGlow
                edgeSensitivity={30}
                glowColor="217 91 60"
                backgroundColor="white"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#3b82f6', '#94a3b8', '#64748b']}
                className="shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-shadow p-6"
              >
                <div 
                  data-iframe-width="150" 
                  data-iframe-height="270" 
                  data-share-badge-id="23505bfa-bbfe-495a-9c73-aafc6903e0f6" 
                  data-share-badge-host="https://www.credly.com"
                ></div>
              </BorderGlow>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
