import UserCard from "../components/namecards";
import Link from "next/link";

export default function Contributors(){
    return (
        <div className="mx-10 md:mx-52">
            <h1 className="text-center py-3 font-semibold text-xl">Contributors</h1>
            <p className="text-center">This page is dedicated to displaying the names of those who have contributed to the development of this website</p>
            <UserCard/>
            <Link href="/" className="animate-pulse text-md">← Back to Home</Link>
        </div>
    ) 
}