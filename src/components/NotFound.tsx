import { motion } from "framer-motion";
import { ArrowLeft, Home, Frown } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Animated 404 number */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6"
        >
          <span className="text-[10rem] md:text-[14rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-[var(--accent-color)] to-purple-500 select-none">
            404
          </span>
          {/* Glowing backdrop */}
          <div className="absolute inset-0 text-[10rem] md:text-[14rem] font-black leading-none text-[var(--accent-color)] opacity-10 blur-2xl select-none">
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Frown size={22} className="text-[var(--accent-color)]" />
          <h1 className="text-xl md:text-2xl font-bold">Page not found</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[var(--text-secondary)] mb-10 text-base md:text-lg leading-relaxed"
        >
          Looks like this page drifted off into the void. The link might be broken,
          or the page may have moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/"
            className="flex items-center justify-center gap-2 bg-[var(--accent-color)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Home size={18} /> Back to Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--border-color)] transition-colors"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </motion.div>

        {/* Subtle animated decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-[var(--border-color)] rounded-full opacity-20 hidden md:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-[var(--accent-color)]/20 rounded-full hidden md:block"
        />
      </div>
    </div>
  );
};
