import React from 'react'
import cn from 'classnames'
import style from './Button.module.scss'
const Button = props => {
  const { children, href, ondark, white } = props
  const btnStyle = cn({ [style.btn]: true, [style.ondark]: ondark , [style.white]: white })
  return (
    <a href={href} className={btnStyle}>
      {children}
    </a>
  )
}

export default Button
