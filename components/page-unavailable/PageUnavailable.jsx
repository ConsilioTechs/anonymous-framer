import Link from "next/link";

export default function PageUnavailable({ title }) {
  return (
    <main className="min-h-screen bg-paper pt-20">
      <section className="flex min-h-[52vh] items-center bg-ink text-white">
        <div className="container-x py-20">
          <p className="section-label">Coming soon</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-none md:text-6xl">
            {title} page not available yet
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
            This route is connected from the home page navigation and can be
            designed when the final content is ready.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex bg-white px-7 py-4 text-xs font-black uppercase text-ink"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
