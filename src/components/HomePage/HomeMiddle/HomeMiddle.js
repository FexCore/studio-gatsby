import React from 'react'
import GridOverlay from '../../Shared/GridOverlay'
import styles from './HomeMiddle.module.scss'
import HomeMiddleTop from './HomeMiddleTop';
import HomeMiddleCenter from './HomeMiddleCenter';

const HomeMiddle = () => (
  <div className={styles.home_middle}>
    <GridOverlay />
    <HomeMiddleTop />
    <HomeMiddleCenter />
  </div>
)

export default HomeMiddle
