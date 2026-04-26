import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "NVIDIA Fundamentals of Deep Learning",
    description: "Successfully completed a professional certification focused on deep learning concepts, neural networks, and practical AI model understanding.",
    file: "/certificates/NVDIACertificate.pdf",
    icon: "NVIDIA",
    bg: "bg-[#76b900] dark:bg-[#76b900]/20 text-[#76b900] shadow-[#76b900]/30"
  },
  {
    id: 2,
    title: "Internship - CodeFT Pvt Ltd",
    description: "Completed a 1.5-month internship gaining hands-on experience in real-world development, teamwork, and project execution.",
    file: "/certificates/CodeFTInternship.jpeg", // Assuming placeholder based on prev code
    icon: "CodeFT",
    bg: "bg-blue-600 dark:bg-blue-600/20 text-blue-600 shadow-blue-600/30"
  },
  {
    id: 3,
    title: "PICT XENIA Hackathon 2026",
    description: "Participated in a competitive hackathon, collaborating in a team to build innovative solutions under time constraints.",
    file: "/certificates/PICTHackthonCertificate.pdf",
    icon: "XENIA",
    bg: "bg-purple-600 dark:bg-purple-600/20 text-purple-600 shadow-purple-600/30"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
          Certifications & Experience
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card relative p-6 flex flex-col group overflow-hidden"
            >
              <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${cert.bg} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}></div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <motion.a
                  whileHover={{ x: 5 }}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 transition-colors"
                >
                  View Certificate
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}