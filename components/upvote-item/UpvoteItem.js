import Link from 'next/link';

import { UserIcon } from '../user-icon';
import { VoteCircle } from '../vote-circle';

import styles from '../../styles/UpvoteItem.module.css';

const UpvoteItem = ({ user }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.upvoter}>
                <UserIcon image={"https://source.unsplash.com/B4TjXnI0Y2c"} size={"large"} />
                <div className={styles.upvoterInfo}>
                    <span className={styles.info}>
                        <span className={styles.name}>Ivan Tsiupa</span> 
                        &nbsp;from&nbsp;
                        <span className={styles.country}>Ukraine</span>
                    </span>
                    <span className={styles.website}>
                        <Link href="http://relieve.com:8080">
                            <a>relieve.com</a>
                        </Link>
                    </span>
                </div>
            </div>   
            <div className={styles.votes}>
                <VoteCircle grade={"10"} position={"host"} text={"Host"}/>
                <VoteCircle grade={"9"} position={"content"} text={"Content"}/>
                <VoteCircle grade={"8"} position={"satisfaction"} text={"Satisfaction"}/>
                <VoteCircle grade={"7"} position={"valueForMoney"} text={"Value for money"}/>
                <span className={styles.average}>8.60</span>
            </div>
        </div>
    )
}

export { UpvoteItem };