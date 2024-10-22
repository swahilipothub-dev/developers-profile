import UserCard from "../components/namecards";

export default function Contributors(){
    return (
        <div>
            <h1 className="text-center py-3 font-semibold text-xl">Contributors</h1>
            <p className="text-center">This page is dedicated to displaying the names of those who have contributed to the development of this website</p>
            <UserCard/>
        </div>
    ) 
}