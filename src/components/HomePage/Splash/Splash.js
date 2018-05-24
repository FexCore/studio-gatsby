import React from 'react'
import Link from 'gatsby-link'
import logo from '../../../images/architecture-interior-design-logo.png'

import styles from './Splash.module.scss'

const Splash = () => (
  <div className={styles.splash}>
    <nav>
      <ul>
        <li>who we are</li>
        <li>what we do</li>
        <li>how we do</li>
        <li>our work</li>
        <li>blog</li>
        <li>contact</li>
      </ul>
    </nav>
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
