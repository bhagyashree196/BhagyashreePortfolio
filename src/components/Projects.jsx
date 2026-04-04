import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Kisan Sahya",
    tech: ["React", "Node.js", "Gemini API", "Translate API"],
    description: "A smart platform aiding farmers to discover government schemes utilizing AI-enhanced responses and voice-based multilingual assistance.",
    status: "live",
    link: "https://github.com/bhagyashree196/KisanSahayata"
  },
  {
    id: 2,
    title: "AI Resume Builder",
    tech: ["React", "Node.js", "Bootstrap", "AI Integration"],
    description: "An intelligent web application that guides students to create ATS-friendly professional resumes with dynamic AI suggestions.",
    status: "in-development",
    link: "https://github.com/bhagyashree196/ResumBuilder"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Featured Projects
          </h2>
          <a href="#" className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline hidden sm:block">
            View all on GitHub &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-card flex flex-col h-full overflow-hidden group"
            >
              {/* Optional: Add an image placeholder here */}
              <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center border-b border-white/10">
                <span className="text-slate-400 font-medium tracking-widest uppercase text-sm">
                  Project Preview
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.status === "in-development" ? (
                    <span className="px-2 py-1 text-xs font-semibold rounded-md bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
                      In Dev 🚧
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-semibold rounded-md bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                      Completed
                    </span>
                  )}
                </div>

                <p className="text-slate-600 dark:text-slate-300 flex-1 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-800 dark:hover:text-brand-300 transition-colors"
                >
                  View Source Repository
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}