import { useEffect, useState } from 'react';

import { Header } from '../components/header';
import { CategoriesHeader } from '../components/categories-header';
import { ActivityCard } from '../components/activity-card';

import serviceApi from '../services/relieveAPI';

import styles from '../styles/Home.module.css'

export default function Home() {
  const [tours, setTours] = useState([]);

  function renderTours(activities){
    activities = activities || [];
    return activities.map((activity) => (
      <li key={activity.id}>
        <ActivityCard activity={activity}/>
      </li>
      )
    )
  }

  useEffect(() => {
    serviceApi.getTours().then(tours => setTours(tours));
  }, []);

  return (
    <div className="page">
      <Header isLoggedIn={false} isHost={false} />
      <CategoriesHeader />
      {<div className={`${styles.container} ${styles.innerContainer}`}>
        <div>
          <ul className={styles.activitiesList}>
            {renderTours(tours)}
          </ul>
        </div>
      </div>}
    </div>
  )
}
