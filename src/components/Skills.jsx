import { motion } from "framer-motion";

const skills = [
  { name: "Java", category: "Backend" },
  { name: "Python", category: "Backend/AI" },
  { name: "SQL", category: "Database" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Git & GitHub", category: "Tools" }
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
          Core Skills
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center space-x-4 cursor-pointer hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xl group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors">
                {skill.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}