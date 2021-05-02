import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Tabs.module.css';

const Tab = ({ activeTab, onClick, onSelect, label }) => {
  const isActiveTab = activeTab === label;
  const className = `${styles.item} ${isActiveTab ? styles.active : ''}`;

  useEffect(() => {
    if (isActiveTab) {
      onClick();
    }
  }, []);

  function onTabClick() {
    if (!isActiveTab) {
      onClick();
      onSelect(label);
    }
  }

  return (
    <li className={className} onClick={onTabClick}>
      {label}
    </li>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  label: PropTypes.string,
};

export { Tab };
