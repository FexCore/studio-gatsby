import React from 'react'
import GridOverlay from '../../Shared/GridOverlay'
import HomeMiddleTop from './HomeMiddleTop'
import HomeMiddleCenter from './HomeMiddleCenter'
import styles from './HomeMiddle.module.scss'
import HomeMiddleBottom from './HomeMiddleBottom';

const HomeMiddle = () => (
  <div className={styles.home_middle}>
    <GridOverlay style={{ opacity: 0.102 }} />
    <HomeMiddleTop />
    <HomeMiddleCenter />
    <HomeMiddleBottom />
  </div>
)

export default HomeMiddle
