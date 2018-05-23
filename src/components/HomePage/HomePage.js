import React from 'react';
import Link from 'gatsby-link';
import Splash from "./Splash";

import styles from './HomePage.module.scss';

const HomePage = () => (
  <div className={styles.home}>
    <Splash />
  </div>
);

export default HomePage;