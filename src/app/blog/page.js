import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCTA from "@/components/blog/BlogCTA";
import { getFeaturedBlog, getNonFeaturedBlogs } from "@/lib/blog-api";

export const metadata = {
  title: "Insights & Perspectives | L2M Coaching & Mentoring",
  description:
    "Practical articles on leadership, coaching, and the inner work of becoming who you're capable of being — written by ICF Certified Coach Lloyd Munyaviri.",
};

export default async function BlogPage() {
  const [featuredPost, gridPosts] = await Promise.all([
    getFeaturedBlog(),
    getNonFeaturedBlogs(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <FeaturedPost post={featuredPost} />
        <BlogGrid posts={gridPosts} />
        <BlogCTA />
      </main>
      <Footer />
    </>
  );
}
