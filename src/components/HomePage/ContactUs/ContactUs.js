import React from 'react'
import Heading2 from '../../Shared/Heading2'
import Button from '../../Shared/Button'
import style from './ContactUs.module.scss'
const ContactUs = () => {
  return (
    <div className={style.contact}>
      <Heading2>contact</Heading2>
      <h3>
        Let’s <strong>work</strong> together!
      </h3>
      <Button ondark href="#">
        write us
      </Button>
    </div>
  )
}

export default ContactUs
