import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence of terminal output appearances
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => setStep(4), 2600),
      setTimeout(() => setStep(5), 3000),
      setTimeout(() => setIsVisible(false), 3800) // End splash screen
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          {/* Subtle Developer Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
          
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-[92%] sm:w-[85%] max-w-2xl bg-[#0d1117]/95 backdrop-blur-xl border border-[#30363d] rounded-xl shadow-[0_0_60px_rgba(59,130,246,0.15)] overflow-hidden"
          >
            {/* macOS Style Terminal Header */}
            <div className="h-12 bg-[#161b22] border-b border-[#30363d] flex items-center px-4 relative">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
              </div>
              <div className="absolute left-[76px] right-[76px] top-0 bottom-0 flex items-center justify-center pointer-events-none">
                <span className="text-[11px] sm:text-sm font-mono text-[#8b949e] truncate">bash - sarveesh@portfolio:~</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 md:p-6 font-mono text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-[#c9d1d9] flex flex-col gap-3 min-h-[200px] md:min-h-[260px] tracking-wide overflow-x-hidden">
              
              {/* Command 1 */}
              <div className="flex items-center">
                <span className="text-blue-500 mr-2 md:mr-3 font-bold">$</span>
                <span className="text-gray-400 mr-2 md:mr-3">~</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, ease: "linear" }}
                  className="overflow-hidden whitespace-nowrap text-gray-200 font-medium tracking-wide"
                >
                  <span className="hidden sm:inline">npx create-portfolio@latest --user="Sarveesh"</span>
                  <span className="inline sm:hidden">npx create-portfolio</span>
                </motion.div>
              </div>

              {/* Step 1 */}
              {step >= 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-400 ml-5 sm:ml-7 md:ml-9 tracking-wide break-words">
                  <span className="text-green-500 mr-2 md:mr-3 font-bold">[ OK ]</span> Fetching profile... <span className="text-gray-300">DONE</span>
                </motion.div>
              )}

              {/* Step 2 */}
              {step >= 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-2 ml-5 sm:ml-7 md:ml-9 tracking-wide">
                  <div className="flex justify-between items-center text-gray-400 break-words">
                    <span><span className="text-green-500 mr-2 md:mr-3 font-bold">[ OK ]</span> Compiling React...</span>
                    <span className="text-blue-400 font-bold ml-2">100%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-[#21262d] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }} 
                      animate={{ width: "100%" }} 
                      transition={{ duration: 0.5, ease: "easeOut" }} 
                      className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step >= 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-400 ml-5 sm:ml-7 md:ml-9 mt-1 tracking-wide break-words">
                  <span className="text-green-500 mr-2 md:mr-3 font-bold">[ OK ]</span> Injecting UI components... <span className="text-gray-300">DONE</span>
                </motion.div>
              )}

              {/* Step 4 */}
              {step >= 4 && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-gray-200 font-medium ml-5 sm:ml-7 md:ml-9 mt-2 tracking-wide break-words">
                  <span className="text-blue-400 mr-2 md:mr-3 font-bold">[ READY ]</span> Portfolio initialized.
                </motion.div>
              )}

              {/* Blinking Cursor at the end */}
              {step >= 5 && (
                <div className="flex items-center mt-2">
                  <span className="text-blue-500 mr-2 md:mr-3 font-bold">$</span>
                  <span className="text-gray-400 mr-2 md:mr-3">portfolio</span>
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 md:w-2.5 h-4 md:h-5 bg-gray-400"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
