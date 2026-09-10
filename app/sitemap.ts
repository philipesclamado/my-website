import { getBlogPosts } from "./elements/utils";

export const baseUrl = "localhost:3000";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/elements/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/elements"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
