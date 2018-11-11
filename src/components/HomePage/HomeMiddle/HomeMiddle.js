import React from 'react'
import GridOverlay from '../../Shared/GridOverlay'
import styles from './HomeMiddle.module.scss'
import HomeMiddleTop from './HomeMiddleTop';

const HomeMiddle = () => (
  <div className={styles.home_middle}>
    <GridOverlay />
    <HomeMiddleTop />
  </div>
)

export default HomeMiddle
