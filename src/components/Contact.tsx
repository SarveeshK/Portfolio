import { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { FaGithub, FaLinkedin, FaEnvelope, FaReddit, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Send } from "lucide-react";
import LogoLoop from "./ui/LogoLoop";

const socialLinks = [
  {
    icon: <FaEnvelope size={22} />,
    href: "mailto:sarveeshkaarthic05@gmail.com",
    label: "Email",
    hoverClass: "hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]",
  },
  {
    icon: <FaGithub size={22} />,
    href: "https://github.com/SarveeshK",
    label: "GitHub",
    hoverClass: "hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]",
  },
  {
    icon: <FaLinkedin size={22} />,
    href: "https://www.linkedin.com/in/sarveeshkaarthicrameshkannan/",
    label: "LinkedIn",
    hoverClass: "hover:border-[#0a66c2] hover:text-[#0a66c2]",
  },
  {
    icon: <FaReddit size={22} />,
    href: "https://www.reddit.com/u/Sarvzthic/s/6JXzjEvH2k",
    label: "Reddit",
    hoverClass: "hover:border-[#ff4500] hover:text-[#ff4500]",
  },
  {
    icon: <FaXTwitter size={22} />,
    href: "https://x.com/sarvzthic",
    label: "X / Twitter",
    hoverClass: "hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]",
  },
  {
    icon: <FaWhatsapp size={22} />,
    href: "https://wa.me/919360181997",
    label: "WhatsApp",
    hoverClass: "hover:border-[#25D366] hover:text-[#25D366]",
  },
  {
    icon: <FaDiscord size={22} />,
    href: "#",
    label: "Discord",
    hoverClass: "hover:border-[#5865F2] hover:text-[#5865F2]",
  },
];

const socialLogoItems = socialLinks.map((s) => ({
  node: (
    <a
      href={s.href}
      target={s.href.startsWith("mailto") || s.href === "#" ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={s.label}
      className={`p-4 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] transition-all duration-200 inline-flex items-center justify-center ${s.hoverClass}`}
    >
      {s.icon}
    </a>
  ),
  title: s.label,
}));

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sarveeshkaarthic05@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Get in Touch</h2>
            <div className="h-1 w-16 bg-[var(--accent-color)] mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </Reveal>
        
        <div className="max-w-2xl mx-auto">
          <Reveal delay={0.2} width="100%">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-6 md:p-10 shadow-xl mb-8 md:mb-12">
              <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="Your name" 
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="your.email@example.com" 
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    placeholder="Tell me about your project or opportunity..." 
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[var(--accent-color)] hover:opacity-90 text-white font-bold py-4 rounded-lg mt-2 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </Reveal>
          
          <Reveal delay={0.4} width="100%">
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-6">Or find me on</p>
              <div className="w-full h-16 relative overflow-hidden">
                <LogoLoop
                  logos={socialLogoItems}
                  speed={45}
                  direction="left"
                  logoHeight={56}
                  gap={20}
                  hoverSpeed={0}
                  scaleOnHover={false}
                  fadeOut={true}
                  fadeOutColor="var(--bg-primary)"
                  ariaLabel="Social media links"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
