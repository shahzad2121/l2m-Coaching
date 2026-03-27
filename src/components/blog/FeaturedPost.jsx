"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDate } from "@/lib/blog-api";

/**
 * FeaturedPost — large hero card for the top of the blog listing page.
 * Receives the `post` object from blog-api.getFeaturedBlog().
 */
export default function FeaturedPost({ post }) {
  if (!post) return null;
  const isWixImage = post.coverImage?.includes("static.wixstatic.com");

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-7 bg-brand-gold shrink-0" />
            <span className="text-brand-gold font-medium text-xs tracking-[0.2em] uppercase">
              Featured Article
            </span>
          </div>

          {/* Card */}
          <Link href={`/blog/${post.slug}`} className="group block">
            <article className="grid lg:grid-cols-[1fr_1fr] rounded-3xl overflow-hidden border border-border shadow-soft hover:border-brand-gold/25 hover:shadow-premium transition-all duration-400">
              {/* Image */}
              <div className="relative h-72 lg:h-[480px] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  unoptimized={isWixImage}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center bg-brand-gold/90 backdrop-blur text-brand-navy text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                {/* Meta */}
                <div className="flex items-center gap-3 text-brand-slate/60 text-xs font-medium mb-5">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="w-1 h-1 rounded-full bg-brand-slate/30" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-5 text-pretty group-hover:text-brand-gold/90 transition-colors duration-300"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                >
                  {post.title}
                </h2>

                {/* Gold divider */}
                <div className="gold-divider mb-5" />

                {/* Excerpt */}
                <p className="text-brand-slate text-base leading-relaxed mb-8 text-pretty max-w-lg">
                  {post.excerpt}
                </p>

                {/* Author + CTA */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-gold-muted border border-brand-gold/30 flex items-center justify-center">
                      <span className="font-heading text-brand-navy font-semibold text-xs">LM</span>
                    </div>
                    <span className="text-brand-navy text-sm font-medium">{post.author}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-brand-navy font-medium text-sm group-hover:text-brand-gold transition-colors duration-200">
                    Read full article
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
