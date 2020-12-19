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
    const [activities, setActivities] = useState([]);
    const router = useRouter();
    const { userId } = router.query;
    
    function getActivities(){
        console.log("call");
        serviceApi.getActivitiesByUser(userId).then((acts) => {
            console.log(acts);
            setActivities(acts);
        });
    }

    function getFavouriteActivities(){
        serviceApi.getFavouriteActivities(userId).then((acts) => {
            console.log(acts);
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

    return (
        <div className="page">
            <Header isLoggedIn={false} isHost={false} />
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.inner}>
                        <RoundedButton text={"Follow"} />
                        <div className={styles.user}>
                            <UserIcon image={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/220px-Pierre-Person.jpg"} size={"very-large"}/>
                            <div className={`${styles.row} ${styles.blockMargin}`}>
                                <span className={styles.username}>Ivan Tsiupa</span>
                            </div>
                            <div className={styles.row}>
                                <span className={styles.country}>Ukraine</span>
                            </div>
                        </div>
                        <RoundedButton text={"Visit site"} />
                    </div>
                </div>
                <div className={styles.tabsContainer}>
                    <Tabs> 
                        <Tab label={"My Activities"} onClick={() => getActivities()}>
                            <ul className={styles.activitiesContainer}>
                                { renderActivities(activities) }    
                            </ul>
                        </Tab>
                        <Tab label={"Favourites"} onClick={() => getFavouriteActivities()}>
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