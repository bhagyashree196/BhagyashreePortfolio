import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full glass-card p-2 mb-8 mx-auto"
      >
        <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex justify-center items-center">
          {/* Placeholder for Photo */}
          <img src="/certificates/Bhagya.png" alt="Bhagyashree Profile" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center px-3 py-1 rounded-full glass border border-brand-500/30 text-brand-600 dark:text-brand-400 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
      >
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse mr-2"></span>
        Available for new opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white"
      >
        Hello, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400">
          Bhagyashree
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10"
      >
        A passionate Full-Stack Developer bridging the gap between sophisticated engineering and intuitive design. I build scalable web & AI solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a href="#projects" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-500/30 hover:bg-brand-700 font-semibold cursor-pointer w-full text-center transition-all"
          >
            Explore Projects
          </motion.div>
        </a>
        <a href="#contact" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 glass-card border border-slate-300 dark:border-slate-700 rounded-xl font-semibold hover:border-brand-500 cursor-pointer w-full text-center transition-all"
          >
            Contact Me
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}