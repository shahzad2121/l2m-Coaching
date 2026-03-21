import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleCTA from "@/components/blog/ArticleCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import {
  getBlogBySlug,
  getRelatedBlogs,
  getAllBlogSlugs,
} from "@/lib/blog-api";

/**
 * Pre-generates all blog post pages at build time.
 * To add a new post, simply add it to src/data/blogs.js.
 */
export async function generateStaticParams() {
  return getAllBlogSlugs();
}

/**
 * Generates per-page metadata from the blog post data.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | L2M Coaching`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const [post, relatedPosts] = await Promise.all([
    getBlogBySlug(slug),
    getRelatedBlogs(slug, 3),
  ]);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ArticleHero post={post} />
        <ArticleContent content={post.content} />
        <ArticleCTA />
        <RelatedPosts posts={relatedPosts} />
      </main>
      <Footer />
    </>
  );
}
