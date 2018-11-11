import React, { Component } from 'react'
import Link from 'gatsby-link'

import styles from './GridOverlay.module.scss'


export default class GridOverlay extends Component {
  constructor(props) {
    super(props)
    
  }
  

  render() {
    return (
        <div className={styles.grid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
