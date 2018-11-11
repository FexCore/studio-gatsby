import React from 'react'
import styles from './FindOutMore.module.scss'

const FindOutMore = ({ children }) => {
  return (
    <div className={styles.find_out}>
      <p>{children}</p>
    </div>
  )
}

export default FindOutMore
