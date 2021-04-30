import { useState, useEffect } from 'react';

import Link from 'next/link';

import serviceApi from '../../services/relieveAPI';

import styles from '../../styles/CategoriesHeader.module.css';

const CategoriesHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    serviceApi.getTopCategories().then((categories) => {
      console.log(categories);
      setCategories(categories);
    });
  }, []);

  function renderCategoriesHeaderItem({ id, title, link }) {
    return (
      <li className={styles.item} key={id}>
        <Link href={link}>
          <a>{title}</a>
        </Link>
      </li>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span>Top categories</span>
      </div>
      <ul className={styles.list}>
        {categories.map(renderCategoriesHeaderItem)}
      </ul>
    </div>
  );
};

export { CategoriesHeader };
