import Link from "next/link";

export default function Projects(){
    return (
        <section>
            <h1 className="my-5 text-2xl text-center">Projects/websites you can contribute to during this Hackoberfest</h1>
            <ol>
                <Link href="https://dev.to/challenges/hacktoberfest">
                    <li className="bg-gray-500 rounded-full p-2 w-1/4 text-center mb-3 hover:scale-110 hover:transition-all duration-200">dev.to writing challenge</li>
                </Link>
                <Link href="https://hacktoberfest.com">
                    <li className="bg-gray-500 rounded-full p-2 w-1/4 text-center mb-3 hover:scale-110 hover:transition-all duration-200">Hacktoberfest</li>
                </Link>
            </ol>
            <Link href="/" className="animate-pulse text-md">← Back to Home</Link>
        </section>
    )
}