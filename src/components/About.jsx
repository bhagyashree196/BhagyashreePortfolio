import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full"></span>
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                I am a dedicated Full-Stack Developer passionate about building robust, scalable, and user-centric applications. With a strong engineering mindset, I love transforming complex ideas into intuitive digital experiences.
              </p>
              <p>
                Beyond traditional web development, I am deeply engrossed in the AI landscape, exploring how to weave intelligent features directly into software to create smarter, adaptive applications that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}