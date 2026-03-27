"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDate } from "@/lib/blog-api";

/**
 * BlogCard — reusable card for blog listing grid and related posts.
 * Receives a single `post` object from the blog data layer.
 */
export default function BlogCard({ post, priority = false }) {
  const isWixImage = post.coverImage?.includes("static.wixstatic.com");

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl border border-border shadow-soft hover:border-brand-gold/30 hover:shadow-premium transition-colors duration-300 overflow-hidden flex flex-col"
    >
      {/* Cover image */}
      <Link href={`/blog/${post.slug}`} className="block relative h-52 overflow-hidden shrink-0">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority={priority}
          unoptimized={isWixImage}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center bg-white/90 backdrop-blur text-brand-navy text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide border border-border">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 text-brand-slate/60 text-xs font-medium mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="w-1 h-1 rounded-full bg-brand-slate/30" />
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-heading font-semibold text-brand-navy text-xl leading-snug mb-3 group-hover:text-brand-gold/90 transition-colors duration-200 text-pretty">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-brand-slate text-sm leading-relaxed flex-1 text-pretty mb-5">
          {post.excerpt}
        </p>

        {/* Read more */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-brand-navy font-medium text-sm group-hover:text-brand-gold transition-colors duration-200 mt-auto"
        >
          Read article
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
