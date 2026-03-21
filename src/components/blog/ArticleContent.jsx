"use client";

import { motion } from "framer-motion";

/**
 * ArticleContent — renders the full HTML blog content with premium prose styling.
 * Uses dangerouslySetInnerHTML (content is internal/trusted — not user-generated).
 *
 * The `.article-prose` class in globals.css handles all typography:
 * headings, paragraphs, blockquotes, lists, and links.
 */
export default function ArticleContent({ content }) {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
      </div>
    </section>
  );
}
