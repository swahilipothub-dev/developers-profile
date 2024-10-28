"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';


interface Activity {
    id: string;
    type: string;
    actor: {
        login: string;
        avatar_url: string;
    };
    repo: {
        name: string;
        url: string;  // GitHub API usually provides a URL link to the repository.
    };
    created_at: string;
}

const GITHUB_API_URL = 'https://api.github.com/repos/swahilipothub-dev/developers-profile/events';

const ActivityFeed: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get(GITHUB_API_URL, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    },
                });
                setActivities(response.data);
            } catch (error) {
                console.error('Error fetching activities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    if (loading) return <p>Loading activities...</p>;
    if (!activities.length) return <p>No recent activities available.</p>;

    return (
        <div className="activityfeed">
            {activities.map(activity => (
                <div key={activity.id} className="activity-card">
                    <Image
                        src={activity.actor.avatar_url}
                        alt={activity.actor.login}
                        width={40}
                        height={40}
                        className="avatar"
                    />
                    <div>
                        <p>
                            <Link href={`https://github.com/${activity.actor.login}`} target="_blank" rel="noopener noreferrer">
                                <strong>{activity.actor.login}</strong>
                            </Link>{" "}
                            {activity.type.replace('Event', '').toLowerCase()}ed in{' '}
                            <Link href={`https://github.com/${activity.repo.name}`} target="_blank" rel="noopener noreferrer">
                                <strong>{activity.repo.name}</strong>
                            </Link>
                        </p>
                        <p className="timestamp">
                            {new Date(activity.created_at).toLocaleString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityFeed;