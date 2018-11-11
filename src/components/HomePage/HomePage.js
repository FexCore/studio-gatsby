import React from 'react';
import Link from 'gatsby-link';
import Splash from "./Splash";

import styles from './HomePage.module.scss';
import HomeMiddle from './HomeMiddle';

const HomePage = () => (
  <div className={styles.home}>
    <Splash />
    <HomeMiddle />
  </div>
);

export default HomePage;