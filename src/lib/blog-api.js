import { fetchWixBlogPosts, fetchWixPostBySlug } from "@/lib/wix";
import { draftJsToHtml } from "@/lib/wix-content";

/**
 * Internal helper: map a raw Wix blog post into the shape
 * expected by the existing UI components.
 */
function mapWixPostToBlog(post) {
  if (!post) return null;

  const coverImage =
    post.media?.wixMedia?.image?.url ??
    "https://static.wixstatic.com/media/78d045_bd3b500c853c4af4a99079daf3ac4a2a~mv2.jpg";

  const date = post.firstPublishedDate || post.lastPublishedDate || null;

  const readTime =
    typeof post.minutesToRead === "number" && post.minutesToRead > 0
      ? `${post.minutesToRead} min read`
      : null;

  // Simple, brand-consistent defaults for fields Wix doesn't provide directly.
  const categoryFromHashtag =
    Array.isArray(post.hashtags) && post.hashtags.length > 0
      ? String(post.hashtags[0])
      : "Insights";

  const safeExcerpt = post.excerpt ?? "";
  const draftSource =
    post.content ??
    post.richContent ??
    post.contentData ??
    post?.content?.text ??
    null;
  const draftHtml = draftSource ? draftJsToHtml(draftSource) : "";
  const fallbackContent = safeExcerpt
    ? `<p>${safeExcerpt
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</p>`
    : "<p></p>";

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    coverImage,
    date,
    readTime,
    author: "Lloyd Munyaviri",
    category: categoryFromHashtag,
    featured: Boolean(post.featured),
    content: draftHtml || fallbackContent,
  };
}

/**
 * Returns all blog posts, sorted newest first.
 */
export async function getAllBlogs() {
  const wixPosts = await fetchWixBlogPosts();
  const mapped = wixPosts.map(mapWixPostToBlog).filter(Boolean);
  return mapped.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Returns the single featured post (first post with featured: true,
 * falling back to the newest post overall).
 */
export async function getFeaturedBlog() {
  const sorted = await getAllBlogs();
  if (!sorted.length) return null;
  return sorted.find((b) => b.featured) ?? sorted[0];
}

/**
 * Returns all posts except the featured one (for the grid section).
 */
export async function getNonFeaturedBlogs() {
  const [all, featured] = await Promise.all([getAllBlogs(), getFeaturedBlog()]);
  if (!all.length) return [];
  if (!featured) return all;
  return all.filter((b) => b.slug !== featured.slug);
}

/**
 * Finds a single blog post by its slug.
 * Returns null if no post matches — caller should invoke notFound().
 */
export async function getBlogBySlug(slug) {
  // Prefer a direct lookup, but fall back to list-based mapping
  // in case the detail endpoint is not available.
  const wixPost = await fetchWixPostBySlug(slug);
  if (wixPost) return mapWixPostToBlog(wixPost);

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
 * Uses the mapped blog list so routing stays in sync with the index.
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
