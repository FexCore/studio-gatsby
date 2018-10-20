import React from 'react'
import Link from 'gatsby-link'
import logo from '../../../images/architecture-interior-design-logo.png'

import styles from './Main.module.scss'

const Main = () => (
  <div className={styles.splash}>
    <div className={styles.grid}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <img width="140" src={logo} alt="Logo" />
    <h2>
      We love <strong>bringing ideas to life</strong>.
    </h2>
    <div className={styles.mousey}>
      <div className={styles.scroller} />
    </div>
  </div>
)

export default Main
