import React from 'react'
import styles from './Heading2.module.scss'

const Heading2 = ({color, children }) => (
  <h2 className={styles.heading} style={{color}}>{children}</h2>
)

export default Heading2
