const WIX_API_BASE = "https://www.wixapis.com";

function getAuthHeaders() {
  const apiKey = process.env.NEXT_WIX_ADMIN_API_KEY;
  const siteId =
    process.env.WIX_SITE_ID ?? process.env.NEXT_WIX_ADMIN_SITE_ID;

  if (!apiKey || !siteId) {
    throw new Error(
      "Missing NEXT_WIX_ADMIN_API_KEY or WIX_SITE_ID/NEXT_WIX_ADMIN_SITE_ID. Add them to your environment before using the Wix blog API."
    );
  }

  return {
    Authorization: `Bearer ${apiKey}`,
    "wix-site-id": siteId,
    "Content-Type": "application/json",
  };
}

/**
 * Low-level fetcher for Wix Blog posts.
 * Returns the raw Wix `posts` array, or [] on failure.
 */
export async function fetchWixBlogPosts() {
  try {
    const res = await fetch(`${WIX_API_BASE}/blog/v3/posts`, {
      method: "GET",
      headers: getAuthHeaders(),
      // Cache on the server and revalidate periodically for ISR-style behaviour.
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      console.error(
        "[wix] Failed to fetch blog posts:",
        res.status,
        res.statusText
      );
      return [];
    }

    const data = await res.json();
    return Array.isArray(data.posts) ? data.posts : [];
  } catch (err) {
    console.error("[wix] Error fetching blog posts:", err);
    return [];
  }
}

/**
 * Convenience helper to get a single Wix blog post by slug.
 * This uses the posts list for now; can be swapped to a dedicated
 * `GET /blog/v3/posts/{id}`-style endpoint later.
 */
export async function fetchWixPostBySlug(slug) {
  try {
    // Preferred: ask Wix for the single post with content fieldset.
    const res = await fetch(
      `${WIX_API_BASE}/blog/v3/posts/slugs/${encodeURIComponent(
        slug
      )}?fieldsets=CONTENT`,
      {
        method: "GET",
        headers: getAuthHeaders(),
        next: { revalidate: 300 },
      }
    );

    if (res.ok) {
      const data = await res.json();
      return data?.post ?? null;
    }
  } catch (err) {
    console.error("[wix] Error fetching post by slug endpoint:", err);
  }

  // Fallback for environments where slug endpoint is unavailable.
  const posts = await fetchWixBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

