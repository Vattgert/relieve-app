import { useEffect, useState } from 'react';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { RoundedButton } from '../../components/rounded-button';
import { UpvoteItem } from '../../components/upvote-item';
import { LastLikes } from '../../components/last-likes';

import serviceApi from '../../services/relieveAPI';
import { useQuery } from '../../utils/useQuery';

import styles from '../../styles/Activity.module.css';

const Activity = () => {
  const query = useQuery();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    if (query) {
      const { activityId } = query;
      serviceApi.getActivity(activityId).then(setActivity);
    }
  }, [query]);

  function renderTags(tags) {
    return (
      <ul>
        {tags.map((tag) => {
          const { id, title } = tag;
          return (
            <li key={id}>
              <RoundedButton
                text={title}
                link={`tags/${encodeURIComponent(title.toLowerCase())}`}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  function renderVotes(votes) {
    return (
      <ul>
        {votes.map((vote) => {
          return (
            <li key={vote.id}>
              <UpvoteItem vote={vote} />
            </li>
          );
        })}
      </ul>
    );
  }

  if (!activity) return <div>Temporarily no data</div>;

  const {
    title,
    date,
    image,
    country,
    city,
    description,
    host: { firstName, lastName },
    tags,
    votes,
    likes,
    totalLikes,
  } = activity;

  const location = `${country}, ${city}`;
  const hostFullName = `${firstName} ${lastName}`;

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const activityDate = new Intl.DateTimeFormat('en-US', dateOptions).format(
    new Date(date),
  );

  return (
    <div className="page">
      <Header isLoggedIn={false} isHost={false} />
      <div className="container">
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>
              Outside * Tours | {hostFullName} | {location}
            </h2>
            <LastLikes lastLikes={likes} totalLikes={totalLikes} />
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
                <span>{description}</span>
              </div>
              <div className={styles.tags}>{renderTags(tags)}</div>
            </div>
            <div className={`${styles.lastUpvotes}`}>
              <div className={styles.header}>
                <span className={styles.title}>Last User Votes</span>
              </div>
              {renderVotes(votes)}
            </div>
          </div>
          <div className={styles.similarActivities}>
            <div className={styles.header}></div>
            <ul className={styles.activitiesList}>
              {/*<li><ActivityCard activity={act}/></li>
                                <li><ActivityCard activity={act}/></li>
                                <li><ActivityCard activity={act}/></li>
                                <li><ActivityCard activity={act}/></li>*/}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
