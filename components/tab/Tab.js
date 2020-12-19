import styles from '../../styles/Tabs.module.css';

const Tab = ({ activeTab, onClick, onSelect, label }) => {

    const className = `${styles.item} ${activeTab === label ? styles.active : ""}`;

    function onTabClick(){
        onClick();
        onSelect(label);
    }

    return (
        <li className={className} onClick={onTabClick}>
          {label}
        </li>
    );
}

export { Tab }