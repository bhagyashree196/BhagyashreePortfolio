import { motion } from "framer-motion";

const achievements = [
  { id: 1, title: "Big Code Google Qualified", icon: "🏆", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", border: "border-blue-200 dark:border-blue-800" },
  { id: 2, title: "PICT XENIA Hackathon", icon: "💻", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30", border: "border-purple-200 dark:border-purple-800" },
  { id: 3, title: "NVIDIA Deep Learning Certificate", icon: "📜", color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30", border: "border-emerald-200 dark:border-emerald-800" },
  { id: 4, title: "Internship CodeFT Pvt Ltd", icon: "🏢", color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30", border: "border-orange-200 dark:border-orange-800" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
          Key Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`glass flex items-center p-4 sm:p-5 rounded-2xl border ${item.border} hover:shadow-lg transition-all group cursor-default`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${item.bg} ${item.color} flex shrink-0 items-center justify-center text-xl sm:text-2xl mr-4 sm:mr-5 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}