import React from 'react'
import styles from './HomeMiddleBottom.module.scss'
import Container from '../../Shared/Container'
import Heading2 from '../../Shared/Heading2'
import FindOutMore from '../../Shared/FindOutMore'

const HomeMiddleBottom = () => (
  <div className={styles.top}>
    <Container>
      <div className={styles.lamp_wrapper}>
        <div className={styles.heading_wrapper}>
          <Heading2>our work</Heading2>
          <h3>
            We<br />
            bring<br />
            <span>value!</span>
          </h3>
          <FindOutMore>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ullamcorper pretium purus, eget aliquet neque auctor sit amet.
            Quisque mattis lectus in lorem volutpat, ut tempor lectus consequat.
            Nulla id porta justo, eget accumsan odio.
          </FindOutMore>
        </div>
      </div>
    </Container>
  </div>
)

export default HomeMiddleBottom
