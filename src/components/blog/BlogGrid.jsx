"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";

const INITIAL_VISIBLE_POSTS = 6;
const POSTS_PER_BATCH = 6;

/**
 * BlogGrid — responsive grid of BlogCards.
 * Receives `posts` array from the blog data layer.
 */
export default function BlogGrid({ posts }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_POSTS);

  if (!posts?.length) return null;

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < posts.length;

  return (
    <section className="py-12 lg:py-16 bg-brand-cream-deep">
      <div className="section-container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-px w-7 bg-brand-gold shrink-0" />
          <span className="text-brand-gold font-medium text-xs tracking-[0.2em] uppercase">
            All Articles
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <BlogCard post={post} priority={i < 3} />
            </motion.div>
          ))}
        </div>

        {/* Progressive reveal */}
        {hasMorePosts ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex justify-center"
          >
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + POSTS_PER_BATCH, posts.length)
                )
              }
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-brand-navy/25 text-brand-navy text-sm font-medium hover:border-brand-gold/50 hover:text-brand-gold transition-colors duration-200"
            >
              See more
            </button>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
