import Link from 'next/link';

import styles from '../../styles/ActivityCard.module.css';

const ActivityCard = ({ activity: {id, title, date, image, host, location }}) => {
    return (
        <div className={styles.wrapper} data-activity-id={id}>
            <div className={styles.rollover}>
                <div className={styles.imageBox}>
                    <img src={image} alt={title} className={styles.image} height="298"/>
                </div>
            </div>
            <div className={styles.informationBox}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.generalInfo}>
                        <span>{location}</span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className={styles.author}>
                    <div className={styles.authorIcon}>
                        <img src={host.icon} alt={host.fullname} />
                    </div>
                    <div className={styles.authorName}>
                        <span style={{ fontWeight: 500 }}>By&nbsp;</span>
                        <span className={styles.name}>
                            <Link href={host.profileLink}><a>{host.fullname}</a></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ActivityCard };