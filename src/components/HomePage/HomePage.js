import React from 'react';
import Link from 'gatsby-link';

import styles from './HomePage.module.scss';

const HomePage = () => (
  <div className={styles.home}>
    <h1>Home page</h1>
    <Link to="/">Index page</Link>
  </div>
);

export default HomePage;