import React from 'react'
import Link from 'gatsby-link'
import logo from '../../../images/architecture-interior-design-logo.png'
import Menu from '../../Shared/Menu'
import GridOverlay from '../../Shared/GridOverlay'
import styles from './Splash.module.scss'

const Splash = () => (
  <div className={styles.splash}>
    <GridOverlay />
    <Menu />
    <img width="140" src={logo} alt="Logo" />
    <h2>
      We love <strong>bringing ideas to life</strong>.
    </h2>
    <div className={styles.mousey}>
      <div className={styles.scroller} />
    </div>
  </div>
)

export default Splash
