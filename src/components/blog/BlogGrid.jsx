"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * BlogGrid — responsive grid of BlogCards.
 * Receives `posts` array from the blog data layer.
 */
export default function BlogGrid({ posts }) {
  if (!posts?.length) return null;

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post, i) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <BlogCard post={post} priority={i < 3} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
