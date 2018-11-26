import React from 'react'
import styles from './Heading2.module.scss'
import cn from 'classnames';

const Heading2 = props => {
  const {color, children, white } = props;
  const h2Styles = cn({ [styles.heading]: true, [styles.white]: white });
  return (
    <h2 className={h2Styles} style={{color}}>{children}</h2>
  )
}

export default Heading2
