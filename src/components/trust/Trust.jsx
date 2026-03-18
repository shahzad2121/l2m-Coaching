"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Clock, Star, BookOpen, Globe } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "ICF Certified",
    subtitle: "Professional Coach",
    description:
      "Internationally accredited through the International Coaching Federation — the gold standard in professional coaching.",
  },
  {
    icon: Clock,
    title: "10+ Years",
    subtitle: "Coaching Experience",
    description:
      "Over a decade of transformative coaching work with individuals, teams, and organisations across multiple sectors.",
  },
  {
    icon: Users,
    title: "200+ Clients",
    subtitle: "Lives Transformed",
    description:
      "From corporate executives to teenagers, a proven track record of helping people unlock their true potential.",
  },
  {
    icon: BookOpen,
    title: "Multi-Sector",
    subtitle: "Expert Background",
    description:
      "Deep expertise spanning leadership development, personal growth, parenting, and corporate team performance.",
  },
  {
    icon: Star,
    title: "Certified NLP",
    subtitle: "Practitioner",
    description:
      "Advanced training in Neuro-Linguistic Programming to accelerate behavioural change and mindset breakthroughs.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    subtitle: "Remote & In-Person",
    description:
      "Coaching clients across the UK, Africa, and beyond — delivered online or face-to-face to fit your life.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Trust() {
  return (
    <section id="trust" className="py-24 lg:py-36 bg-brand-cream-deep relative">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.3), transparent)",
        }}
      />

      <div className="px-4 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
              Credentials & Trust
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2 className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Why Clients Trust{" "}
            <span className="italic text-gradient-gold">Lloyd Munyaviri</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-2xl mx-auto text-pretty">
            Backed by international accreditation, years of practice, and a
            genuine commitment to your transformation.
          </p>
        </motion.div>

        {/* Content layout: sticky image left + staggered cards right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-13 items-start">
          {/* Sticky landscape certificate image (left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-premium bg-white">
              {/* Fixed height so the landscape certificate fully covers the sticky panel */}
              <div className="h-[360px] sm:h-[460px] lg:h-[550px] relative">
                <Image
                  src="/images/client-handing-certificate.png"
                  alt="Client handing over a certificate to Lloyd Munyaviri"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 520px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Subtle frame highlight */}
              <div
                className="pointer-events-none absolute -bottom-4 -right-4 w-full h-full rounded-3xl -z-10 border-2 border-brand-gold/20"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Right: credentials grid with stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={cred.title}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-2xl p-8 border border-border shadow-soft hover:shadow-premium transition-shadow duration-300 cursor-default flex flex-col h-full min-h-[250px]"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-gold-muted flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                  </div>

                  {/* Gold divider */}
                  <div className="gold-divider mb-5" />

                  {/* Text */}
                  <h3 className="font-heading text-2xl font-semibold text-brand-navy mb-1">
                    {cred.title}
                  </h3>
                  <p className="text-brand-gold text-xs font-medium tracking-[0.15em] uppercase mb-4">
                    {cred.subtitle}
                  </p>
                  <p className="text-brand-slate text-sm leading-relaxed grow">
                    {cred.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom logos/badges strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-12 border-t border-border flex flex-wrap items-center justify-center gap-8"
        >
          {[
            "International Coaching Federation",
            "NLP Practitioner Certified",
            "Leadership Development",
            "Corporate & Executive Coaching",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-brand-slate/70 text-xs font-medium tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
