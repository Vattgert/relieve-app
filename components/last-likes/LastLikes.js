import Link from 'next/link';

import { AiFillHeart } from 'react-icons/ai';

import { RoundedButton } from '../../components/rounded-button';
import { UserIcon } from '../../components/user-icon';

import styles from '../../styles/LastLikes.module.css';

export const LastLikes = ({ lastLikes, totalLikes }) => {
    lastLikes = lastLikes || [];
    return (
        <ul>
            {
                lastLikes.map((like) => {
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