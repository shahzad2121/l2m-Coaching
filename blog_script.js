// const dotenv = require("dotenv");

// // Next.js typically uses .env.local for local secrets
// dotenv.config({ path: ".env.local" });

// const API_KEY = process.env.NEXT_WIX_ADMIN_API_KEY;

// const SITE_ID = process.env.NEXT_WIX_ADMIN_SITE_ID; // make sure you add this too!

// async function fetchBlogs() {
//   try {
//     const res = await fetch("https://www.wixapis.com/blog/v3/posts", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//         "wix-site-id": SITE_ID,
//         "Content-Type": "application/json"
//       }
//     });

//     const data = await res.json();

//     console.log("===== FULL RESPONSE =====");
//     console.log(JSON.stringify(data, null, 2));

//     if (data.posts && data.posts.length > 0) {
//       console.log("\n===== BLOG TITLES =====");

//       data.posts.forEach((post, index) => {
//         console.log(`${index + 1}. ${post.title}`);
//       });
//     } else {
//       console.log("\nNo posts found or wrong response structure.");
//     }

//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//   }
// }

// fetchBlogs();


const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

const API_KEY = process.env.NEXT_WIX_ADMIN_API_KEY;
const SITE_ID = process.env.NEXT_WIX_ADMIN_SITE_ID;

async function fetchPostContent(slug) {
  const res = await fetch(
    `https://www.wixapis.com/blog/v3/posts/slugs/${slug}?fieldsets=CONTENT`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "wix-site-id": SITE_ID,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  console.log("===== FULL POST WITH CONTENT =====");
  console.log(JSON.stringify(data, null, 2));
}

// Use one of your actual slugs from the previous output
fetchPostContent("template-product-review");