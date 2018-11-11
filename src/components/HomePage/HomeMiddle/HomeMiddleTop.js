import React from 'react'
import styles from './HomeMiddleTop.module.scss'
import Container from '../../Shared/Container'
import Heading2 from '../../Shared/Heading2'

const HomeMiddleTop = () => (
  <Container>
    <div className={styles.top}>
      <div className={styles.heading_wrapper}>
        <Heading2>what we do</Heading2>
        <h3>Creative architecture studio</h3>
      </div>
    </div>
  </Container>
)

export default HomeMiddleTop
