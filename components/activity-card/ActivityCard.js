import Link from 'next/link';

import styles from '../../styles/ActivityCard.module.css';

const ActivityCard = ({ activity: { id, title, date, image, host, country, city }}) => {
    const activityLocation = `${country}, ${city}`;
    const { firstName, lastName, avatar, id: hostId } = host;
    const fullName = `${firstName} ${lastName}`;
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
    const activityDate = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date));

    return (
        <div className={styles.wrapper} data-activity-id={id}>
            <div className={styles.rollover}>
                <div className={styles.imageBox}>
                    <Link href={`/activities/${encodeURIComponent(id)}`}>
                        <a><img src={image} alt={title} className={styles.image} height="298"/></a>
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
                            <Link href={`/profile/${encodeURIComponent(hostId)}`}><a>{fullName}</a></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ActivityCard };