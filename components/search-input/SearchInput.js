import { GoSearch } from 'react-icons/go';


import styles from '../../styles/SearchInput.module.css';

const SearchInput = () => {
    return (
        <div className={styles.wrapper}>
            <input name="search" type="text" className={styles.input} />
            <GoSearch className={styles.icon}/>
        </div>
    )
}

export { SearchInput };