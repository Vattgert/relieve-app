import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { UserIcon } from '../../components/user-icon';
import { RoundedButton } from '../../components/rounded-button';
import { ActivityCard } from '../../components/activity-card';
import { Tabs, Tab } from '../../components/tab';

import serviceApi from '../../services/relieveAPI';
import { useQuery } from '../../utils/useQuery';

import styles from '../../styles/pages/Profile.module.css';



const Profile = () => {
    const query = useQuery();

    const [profile, setProfile] = useState(null);
    const [activities, setActivities] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(query){
            const { userId } = query;
            serviceApi.getUserProfile(userId).then(setProfile);
        }
    }, [query]);
    
    function getActivities(params){
        serviceApi.getActivities(params).then((acts) => {
            setActivities(acts);
        });
    }

    function renderActivities(activities){
        activities = activities || [];
        return activities.map((activity) => (
          <li key={activity.id}>
            <ActivityCard activity={activity}/>
          </li>
          )
        )
    }

    if(!profile)
        return <div>No profile fetched</div>
    return (
        <div className="page">
            <Header isLoggedIn={false} isHost={false} />
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.inner}>
                        <RoundedButton text={"Follow"} />
                        <div className={styles.user}>
                            <UserIcon image={profile.avatar} size={"very-large"}/>
                            <div className={`${styles.row} ${styles.blockMargin}`}>
                                <span className={styles.username}>{profile.firstName} {profile.lastName}</span>
                            </div>
                            <div className={styles.row}>
                                <span className={styles.country}>{profile.country}</span>
                            </div>
                        </div>
                        <RoundedButton text={"Visit site"} />
                    </div>
                </div>
                <div className={styles.tabsContainer}>
                    <Tabs> 
                        <Tab label={"My Activities"} onClick={() => getActivities({ host: profile.id })}>
                            <ul className={styles.activitiesContainer}>
                                { renderActivities(activities) }    
                            </ul>
                        </Tab>
                        <Tab label={"Favourites"} onClick={() => getActivities({ user: profile.id, liked: '' })}>
                            <ul className={styles.activitiesContainer}>
                                { renderActivities(activities) }    
                            </ul>
                        </Tab>
                        <Tab label={"Votes"} onClick={() => {}}>

                        </Tab>
                        <Tab label={"Followers"} onClick={() => {}}>

                        </Tab>

                        <Tab label={"Following"} onClick={() => {}}>

                        </Tab>
                    </Tabs> 
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;