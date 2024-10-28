import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-5">
      <section>
        <h1 className="text-2xl text-center py-5">SPH Engineering x Hacktoberfest</h1>
        <p className="text-center text-md pb-5 max-w-prose mx-auto">
          Welcome to the SPH Engineering x Hacktoberfest website. To be featured as a contributor, you have to clear an issue,
          create a PR, and have it approved for your name to make it to the Contributors wall.
        </p>
      </section>
      <section className="grid grid-cols-2 gap-6">
        <Link href="/how-to-contribute" className="text-center text-md border p-4 transition hover:shadow-lg mb-3">
          How to contribute
        </Link>
        <Link href="/contributors" className="text-center text-md border p-4 transition hover:shadow-lg mb-3">
          Contributors
        </Link>
        <Link href="/projects" className="text-center text-md border p-4 transition hover:shadow-lg mb-3">
          Contribute to these projects
        </Link>
        <Link href="/Gallery" className="text-center text-md border p-4 transition hover:shadow-lg mb-3">
          Gallery
        </Link>
        <Link href="/activityfeed">
          <div className="text-center text-md border p-4 hover:duration-200 hover:shadow-lg hover:transition-all mb-3">Repository Activity Feed</div>
        </Link>
      </div>
      </section>
    </main>
  );
}
