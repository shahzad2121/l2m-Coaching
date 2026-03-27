"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { formatDate } from "@/lib/blog-api";

/**
 * ArticleHero — editorial-style header for blog detail pages.
 * Receives the full `post` object.
 */
export default function ArticleHero({ post }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const isWixImage = post.coverImage?.includes("static.wixstatic.com");

  return (
    <section ref={ref} className="relative pt-24 overflow-hidden">
      {/* Parallax cover image */}
      <div className="relative h-[55vh] lg:h-[65vh] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            unoptimized={isWixImage}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/40 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-0 right-0 section-container z-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/75 hover:text-white text-sm font-medium transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            All Articles
          </Link>
        </div>

        {/* Hero text content */}
        <div className="absolute bottom-0 left-0 right-0 section-container pb-10 lg:pb-14 z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center bg-brand-gold/90 text-brand-navy text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs font-medium">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              <span className="text-white/60 text-xs">·</span>
              <time className="text-white/60 text-xs" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>

            {/* Title */}
            <h1
              className="font-heading font-light text-white leading-tight tracking-tight text-pretty"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
            >
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Author strip below image */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white border-b border-border"
      >
        <div className="section-container py-5">
          <div className="max-w-3xl flex items-center justify-between gap-6 flex-wrap">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-gold-muted border border-brand-gold/30 flex items-center justify-center shrink-0">
                <span className="font-heading text-brand-navy font-semibold text-xs">LM</span>
              </div>
              <div>
                <p className="text-brand-navy font-semibold text-sm leading-none mb-0.5">
                  {post.author}
                </p>
                <p className="text-brand-slate text-xs">ICF Certified Coach</p>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-brand-slate text-sm italic max-w-lg text-pretty hidden md:block">
              {post.excerpt}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
