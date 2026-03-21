"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Lloyd" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "#process", label: "The Process" },
  { href: "/contact", label: "Book a Call" },
];

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy relative overflow-hidden">
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.4), transparent)",
        }}
      />

      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                  <span className="font-heading font-semibold text-brand-gold">L</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-heading text-xl font-semibold text-white tracking-wide">
                    L2M Coaching
                  </span>
                  <span className="text-[10px] text-white/40 font-medium tracking-[0.15em] uppercase">
                    & Mentoring
                  </span>
                </div>
              </Link>

              <p className="font-heading text-2xl font-light text-white/80 italic leading-snug mb-6 max-w-xs">
                "Coaching Leaders, Parents & Teens to Unlock Confidence, Clarity & Connection."
              </p>

              <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
                Founded by Lloyd Munyaviri, L2M Coaching delivers expert
                coaching and mentoring to individuals and teams across the UK
                and beyond.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold text-sm tracking-wide mb-6 uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold text-sm tracking-wide mb-6 uppercase">
              Get in Touch
            </h4>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:lloydm2m@gmail.com"
                className="flex items-start gap-3 text-white/50 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold/70" />
                <span className="text-sm">lloydm2m@gmail.com</span>
              </a>

              <a
                href="tel:+447900105099"
                className="flex items-start gap-3 text-white/50 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold/70" />
                <span className="text-sm">+44 7900 105099</span>
              </a>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-gold/40 text-brand-gold text-sm font-medium rounded-full hover:bg-brand-gold/10 transition-all duration-200"
            >
              Book a Free Call
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/35 text-xs">
            © {currentYear} L2M Coaching & Mentoring. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/35 hover:text-white/60 text-xs transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/35 hover:text-white/60 text-xs transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <span className="text-white/20 text-xs">
              Built with care ✦
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
