import React from 'react'
import cn from 'classnames'
import style from './Button.module.scss'
const Button = props => {
  const { children, href, ondark } = props
  const btnStyle = cn({ [style.btn]: true, [style.ondark]: ondark })
  return (
    <a href={href} className={btnStyle}>
      {children}
    </a>
  )
}

export default Button
