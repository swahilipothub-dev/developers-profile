import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-5">
      <div>
        <h1 className="text-2xl text-center py-5">
          SPH Engineering x Hacktoberfest
        </h1>
        <p className="text-center text-md pb-5 md:px-96 lg:px-54">
          Welcome to the SPH Engineering x Hacktoberfest website. To be featured as a contributor, you have to 
          clear an issue, create a PR and have it approved for your name to make it to the `Contributors` wall
        </p>
      </div>
      <div className="grid grid-cols-2 space-x-6">
        <Link href="/how-to-contribute">
          <div className="text-center text-md border p-4 hover:duration-200 hover:shadow-lg hover:transition-all">How to contribute</div>
        </Link>
        <Link href="/contributors">
          <div className="text-center text-md border p-4 hover:duration-200 hover:shadow-lg hover:transition-all">Contributors</div>
        </Link>
      </div>
    </main>
  );
}
