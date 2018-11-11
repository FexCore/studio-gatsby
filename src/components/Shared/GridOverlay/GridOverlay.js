import React, { Component } from 'react'

import styles from './GridOverlay.module.scss'

const GridOverlay = props => (
  <div className={styles.grid} {...props}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)

export default GridOverlay
