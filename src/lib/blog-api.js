/**
 * Blog Data Access Layer
 * ─────────────────────
 * All blog data fetching is isolated here.
 *
 * To migrate from local data to an API/CMS (Sanity, Contentful, etc.),
 * replace the implementations below with fetch() calls. No consuming
 * component or page needs to change — only this file.
 *
 * All functions are async to match the future API contract.
 */

import { blogs } from "@/data/blogs";

/**
 * Returns all blog posts, sorted newest first.
 */
export async function getAllBlogs() {
  return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Returns the single featured post (first post with featured: true,
 * falling back to the newest post overall).
 */
export async function getFeaturedBlog() {
  const sorted = await getAllBlogs();
  return sorted.find((b) => b.featured) ?? sorted[0];
}

/**
 * Returns all posts except the featured one (for the grid section).
 */
export async function getNonFeaturedBlogs() {
  const [all, featured] = await Promise.all([getAllBlogs(), getFeaturedBlog()]);
  return all.filter((b) => b.slug !== featured.slug);
}

/**
 * Finds a single blog post by its slug.
 * Returns null if no post matches — caller should invoke notFound().
 */
export async function getBlogBySlug(slug) {
  const all = await getAllBlogs();
  return all.find((b) => b.slug === slug) ?? null;
}

/**
 * Returns up to `limit` related posts, excluding the current post.
 * Priority: same category → then newest.
 */
export async function getRelatedBlogs(currentSlug, limit = 3) {
  const all = await getAllBlogs();
  const current = all.find((b) => b.slug === currentSlug);
  if (!current) return all.filter((b) => b.slug !== currentSlug).slice(0, limit);

  const sameCategory = all.filter(
    (b) => b.slug !== currentSlug && b.category === current.category
  );
  const others = all.filter(
    (b) => b.slug !== currentSlug && b.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}

/**
 * Returns all slugs — used for generateStaticParams in [slug]/page.js.
 */
export async function getAllBlogSlugs() {
  const all = await getAllBlogs();
  return all.map((b) => ({ slug: b.slug }));
}

/**
 * Formats a date string as "Month D, YYYY" for display.
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
