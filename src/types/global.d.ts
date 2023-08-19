export {};

declare global {
  interface Post {
    title: string;
    datePublished: string;
    slug: string;
    tags: string[];
  }

  interface PostProps {
    post: Post[];
  }
}
