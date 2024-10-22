import Link from "next/link";

export default function HowTo(){
    return(
        <>
        <h1 className="text-3xl py-5 text-center">How to contribute</h1>
        <section className="mx-10 md:mx-52"> 
            <div>
                <ol className="list-decimal">
                    <li>Fork the repository: <a className="bg-gray-400 rounded-full px-2" href="https://github.com/swahilipothub-dev/developers-profile">swahilipothub-dev/developer-profile</a> </li>
                    <li>Clone your repository to your local machine</li>
                    <li>Make the changes according to those stated in the <span>Issues</span> section in GitHub.</li>
                    <li>While you&apos;re at it, update your name on the <span>Contributors</span> list.</li>
                </ol>
            </div>
            <br />
            <p className="italic">Have a fun moment contributing to the repository!! Happy coding!</p>
            <br /><hr className="border-l"/><br />
            <Link href="/" className="animate-pulse text-md">← Back to Home</Link>
        </section>
        </>
    )
}