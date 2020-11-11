import Link from 'next/link';
import styles from '../../styles/RoundedButton.module.css';

const RoundedButton = ({ link, text, icon, isActive }) => {
    const activeButton = isActive ? styles.active : "";
    return (
        <div className={`${styles.button} ${activeButton}`}>
            {icon}
            { link ? <Link href={link}><a>{text}</a></Link> : text}
        </div>
    )
}

export { RoundedButton };