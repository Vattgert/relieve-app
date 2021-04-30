import { useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Tabs.module.css';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  function onClickTabItem(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="tabs">
      <ol className={styles.tabs}>
        {children.map((child) => {
          return cloneElement(child, {
            ...child.props,
            key: child.props.label,
            activeTab,
            onSelect: onClickTabItem,
          });
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.shape([]),
};

export { Tabs };
