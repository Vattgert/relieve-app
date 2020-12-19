import { useEffect, useState } from 'react';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { UserIcon } from '../../components/user-icon';
import { RoundedButton } from '../../components/rounded-button';
import { UpvoteItem } from '../../components/upvote-item';
import { ActivityCard } from '../../components/activity-card';

import { AiFillHeart } from 'react-icons/ai';

import serviceApi from '../../services/relieveAPI';
import { useQuery } from '../../utils/useQuery';

import styles from '../../styles/Activity.module.css';
import Link from 'next/link';

const Activity = () => {
    const query = useQuery();
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        if(query){
            const { activityId } = query;
            serviceApi.getActivity(activityId).then(setActivity);
        }
    }, [query]);

    function renderLastLikes(activity){
        let { likes, totalLikes } = activity;
        likes = likes || [];
        return (
            <ul>
                {
                    likes.map((like) => {
                        const { liker: {id, avatar} } = like;
                        return (
                            <li key={id}>
                                <Link href={`/profiles/${encodeURIComponent(id)}`}>
                                    <a>
                                        <UserIcon image={avatar}/>
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                }

                <div className={styles.likeButtons}>
                    <RoundedButton text={totalLikes} icon={<AiFillHeart />}/>
                    <RoundedButton text={"Add to favourite"}/>
                </div>
            </ul>
        )
    }

    function renderTags(tags){
        return (
            <ul>
                {
                    tags.map((tag) => {
                        const { id, title } = tag;
                        return (
                            <li key={id}>
                                <RoundedButton text={title} 
                                                link={`tags/${encodeURIComponent(title.toLowerCase())}`}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    function renderVotes(votes){
        return (
            <ul>
                {
                    votes.map((vote) => {
                        return <li key={vote.id}><UpvoteItem vote={vote}/></li>
                    })
                }
            </ul>
        )
    }



    if(!activity)
        return <div>Temporarily no data</div>
    const { title, date, image, country, city, description, host: { firstName, lastName }, tags, votes } = activity;
    const location = `${country}, ${city}`;
    const hostFullName = `${firstName} ${lastName}`;
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
    const activityDate = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date));
    return (
        <div className="page">
            <Header isLoggedIn={false} isHost={false} />
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2>Outside * Tours | {hostFullName} | {location}</h2>
                        {renderLastLikes(activity)}
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img src={image} alt="rome" />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.mainDetails}>
                                <h3 className={styles.title}>{title}</h3>
                                <span className={styles.date}>{activityDate}</span>
                            </div>
                            <div className={styles.description}>
                                <span>
                                    {description}
                                </span>
                            </div>
                            <div className={styles.tags}>
                                {
                                    renderTags(tags)
                                }
                            </div>
                        </div>
                        <div className={`${styles.lastUpvotes}`}>
                            <div className={styles.header}>
                                <span className={styles.title}>Last User Votes</span>
                            </div>
                            {
                                renderVotes(votes)
                            }
                        </div>
                    </div>
                    <div className={styles.similarActivities}>
                        <div className={styles.header}></div>
                        <ul className={styles.activitiesList}>
                            {
                                /*<li><ActivityCard activity={act}/></li>
                                <li><ActivityCard activity={act}/></li>
                                <li><ActivityCard activity={act}/></li>
                                <li><ActivityCard activity={act}/></li>*/
                            }   
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Activity;