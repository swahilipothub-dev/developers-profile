import ActivityFeed from "../components/ActivityFeed";

export default function ActivityFeedPage() {
    return (
        <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-5">
        <h1 className="text-2xl text-center py-5">Repository Activity Feed</h1>
        <ActivityFeed />
        </main>
    );
}