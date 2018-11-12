import React from 'react'
import Button from '../../Shared/Button'
import styles from './FindOutMore.module.scss'

const FindOutMore = ({ children }) => {
  return (
    <div className={styles.find_out}>
      <p>{children}</p>
      <Button>find out more</Button>
    </div>
  )
}

export default FindOutMore
