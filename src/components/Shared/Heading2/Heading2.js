import React from 'react'
import styles from './Heading2.module.scss'

const Heading2 = ({ children }) => (
  <h2 className={styles.heading}>{children}</h2>
)

export default Heading2
