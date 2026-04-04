import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 dark:border-slate-800/50 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400 tracking-tighter">
              B<span className="text-slate-900 dark:text-white">.Sable</span>
            </h1>
          </motion.div>

          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-brand-600 hover:bg-brand-700 hover:shadow-brand-500/30 hover:shadow-lg transition-all"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}