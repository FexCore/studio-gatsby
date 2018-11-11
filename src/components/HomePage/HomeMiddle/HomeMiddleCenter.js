import React from 'react'
import styles from './HomeMiddleCenter.module.scss'
import Container from '../../Shared/Container'
import Heading2 from '../../Shared/Heading2'
import FindOutMore from '../../Shared/FindOutMore'

const HomeMiddleCenter = () => (
  <Container>
    <div className={styles.top}>
      <div className={styles.heading_wrapper}>
        <Heading2>what we do</Heading2>
        <h3>
          Creative<br />
          <span>architecture</span>
          <br />studio
        </h3>
        <FindOutMore>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ullamcorper pretium purus, eget aliquet neque auctor sit amet. Quisque
          mattis lectus in lorem volutpat, ut tempor lectus consequat. Nulla id
          porta justo, eget accumsan odio.
        </FindOutMore>
      </div>
    </div>
  </Container>
)

export default HomeMiddleCenter
