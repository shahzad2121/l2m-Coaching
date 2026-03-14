"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  { src: "/images/certificates/certificate-1.png", alt: "Professional certification 1" },
  { src: "/images/certificates/certificate-2.jpg", alt: "Professional certification 2" },
  { src: "/images/certificates/certificate-3.png", alt: "Professional certification 3" },
  { src: "/images/certificates/certificate-4.png", alt: "Professional certification 4" },
  { src: "/images/certificates/certificate-5.png", alt: "Professional certification 5" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-16 lg:py-24 bg-brand-cream-deep border-b border-border/60"
      aria-label="Certifications and accreditations"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-xs tracking-[0.2em] uppercase">
              Accredited & Certified
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>
          <p className="text-brand-slate text-sm max-w-xl mx-auto">
            Recognised by leading professional bodies for coaching excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.src}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative group"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden bg-white border border-border shadow-soft group-hover:shadow-premium transition-shadow duration-300 p-2">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 128px"
                  className="object-contain p-1"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
