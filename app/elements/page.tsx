import { BlogPosts } from "../components/posts";

export const metadata = {
  title: "Elements",
  description: "Poorly research ideas that I find myself repeating anyways.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Elements</h1>
      <BlogPosts />
    </section>
  );
}
