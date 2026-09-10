import Image from "next/image";

export default function NotFound() {
  return (
    <section>
      <Image
        width={600}
        height={368}
        src="/images/emmett-error.jpg"
        alt="404"
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
    </section>
  );
}
