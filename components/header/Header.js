import Link from 'next/link';
import { SearchInput } from '../search-input';
import { MainLogo } from '../main-logo';

import styles from '../../styles/Header.module.css';

const Header = ({ isLoggedIn, isHost }) => {
    function renderNavigationLinkItem(href, text){
        return (
            <li className={styles.navigationItem}>
                    <Link href={href}><a className={styles.navigationLink}>{text}</a></Link>
            </li>
        )
    }
    return (
        <div className={styles.header}>
            <MainLogo />
            <SearchInput />
            <ul className={styles.navigation}>
                {
                    isHost ? renderNavigationLinkItem("/business", "My Business") : renderNavigationLinkItem("/business", "Become a host")
                }
                {
                    renderNavigationLinkItem("/giftcard", "Gift card")
                }
                {
                    isLoggedIn ? renderNavigationLinkItem("/logout", "Logout") : renderNavigationLinkItem("/login", "Login")
                }
            </ul>
        </div>
    )
}

export { Header }