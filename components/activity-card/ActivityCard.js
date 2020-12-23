import Link from 'next/link';

import styles from '../../styles/ActivityCard.module.css';

const ActivityCard = ({ activity: { id, title, date, image, host, country, city, votes }, showRating = false }) => {
    const activityLocation = `${country}, ${city}`;
    const { firstName, lastName, avatar, id: hostId } = host;
    const fullName = `${firstName} ${lastName}`;
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
    const activityDate = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date));

    const countMeanRating = (votes) => {
        if(votes && Array.isArray(votes)){
            const userVotes = votes[0];
            const ratings = Object.values(userVotes);
            const ratingsSum = ratings.reduce((a, b) => a + b, 0);
            return (ratingsSum / ratings.length).toFixed(2) || 0
        }
    }

    const renderRating = (showRating, rating) => {
        if(showRating){
            return (
                <span className={styles.activityRating}>{rating}</span>
            )
        }
    }

    const darkenedStyle = showRating ? styles.darkened : ''

    return (
        <div className={styles.wrapper} data-activity-id={id}>
            <div className={`${styles.rollover} ${darkenedStyle}`}>
                { renderRating(showRating, countMeanRating(votes)) }
                <div className={styles.imageBox}>
                    <Link href={`/activities/${encodeURIComponent(id)}`}>
                        <a><img src={image} alt={title} className={`${styles.image}`} height="298"/></a>
                    </Link>
                </div>
            </div>
            <div className={styles.informationBox}>
                <div>
                    <h3 className={styles.title}>
                    <Link href={`/activities/${encodeURIComponent(id)}`}><a>{title}</a></Link>
                    </h3>
                    <div className={styles.generalInfo}>
                        <span>{activityLocation}</span>
                        <span>{activityDate}</span>
                    </div>
                </div>
                <div className={styles.author}>
                    <div className={styles.authorIcon}>
                        <img src={avatar} alt={fullName} />
                    </div>
                    <div className={styles.authorName}>
                        <span style={{ fontWeight: 500 }}>By&nbsp;</span>
                        <span className={styles.name}>
                            <Link href={`/profiles/${encodeURIComponent(hostId)}`}><a>{fullName}</a></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ActivityCard };