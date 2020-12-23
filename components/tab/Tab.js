import { useEffect } from 'react';

import styles from '../../styles/Tabs.module.css';

const Tab = ({ activeTab, onClick, onSelect, label }) => {

    const isActiveTab = activeTab === label;
    const className = `${styles.item} ${isActiveTab ? styles.active : ""}`;

    useEffect(() => {
        if(isActiveTab){
            onClick();
        }
    }, []);

    function onTabClick(){
        if(!isActiveTab){
            onClick();
            onSelect(label);
        }
    }

    return (
        <li className={className} onClick={onTabClick}>
          {label}
        </li>
    );
}

export { Tab }