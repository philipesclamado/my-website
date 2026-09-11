import Link from "next/link";
import { formatDate, getBlogPosts } from "../elements/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div
            key={post.slug}
            className="flex flex-col p-2 text-base md:flex-row md:text-sm"
          >
            <span className="text-subtext tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}:&nbsp;
            </span>
            <Link
              className="wrap-break-word leading-relaxed underline hover:decoration-highlight"
              href={`/elements/${post.slug}`}
            >
              {post.metadata.title}
            </Link>
          </div>
        ))}
    </div>
  );
}
