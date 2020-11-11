import Link from 'next/link';

import styles from '../../styles/MainLogo.module.css';

const MainLogo = () => {
    return <Link href="/">
                <a className={styles.logoLink}>
                    <img className={styles.mainLogo} src="/images/logo.png" alt="logo" />
                </a>
            </Link>
}

export { MainLogo }