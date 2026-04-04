import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-10 text-center relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-colors"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>

        <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-brand-200 dark:border-brand-800">
          📧
        </div>

        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Get In Touch
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:bhagyashreesable97@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          bhagyashreesable97@gmail.com
        </motion.a>
      </motion.div>
    </section>
  );
}