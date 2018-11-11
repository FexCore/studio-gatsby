import React, { Component } from 'react'
import Link from 'gatsby-link'

import styles from './Menu.module.scss'


export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.toogleMenu = this.toogleMenu.bind(this)
  }
  toogleMenu() {
    console.log('toogleMenu')

    if (this.state.open) {
      this.setState({ open: false })
    } else {
      this.setState({ open: true })
    }
  }

  render() {
    return (
      <div
        id="menu"
        className={`${styles.menu} ${this.state.open ? styles.menuOpen : ''}`}
      >
        <input id="burger" type="checkbox" />
        <label htmlFor="burger" onClick={this.toogleMenu}>
          <span />
          <span />
          <span />
        </label>
        <nav>
          <ul>
            <li>who we are</li>
            <li>what we do</li>
            <li>how we do</li>
            <li>our work</li>
            <li>blog</li>
            <li>contact</li>
          </ul>
        </nav>
          <div className={styles.social}>
            <div className="facebook" />
            <div className="twitter" />
          </div>
      </div>
    )
  }
}
