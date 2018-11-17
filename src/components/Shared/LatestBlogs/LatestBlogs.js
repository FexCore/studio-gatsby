import React from 'react'
import cn from 'classnames'

import Heading2 from '../Heading2/Heading2'
import Button from '../Button/Button'

import style from './LatestBlogs.module.scss'
const LatestBlogs = () => {
  return (
    <div className={style.blogs}>
      <div className={cn(style.block, style.all)}>
        <Heading2>Blog</Heading2>
        <Button ondark href="#">
          ALl stories
        </Button>
        <div className={style.plus} />
      </div>
      <div className={cn(style.block, style.divider)}>
        <h3>Principi Norman Fostera prilikom projektiranja</h3>
        <p>
          Vivamus condimentum lacus at leo semper, id vulputate sem semper.
          Curabitur feugiat facilisis libero non rutrum. Donec feugiat volutpat
          justo. Praesent condimentum, metus eget pellentesque fermentum, ex
          mauris mollis diam, at ...{' '}
        </p>
        <Button ondark href="#">
          read more
        </Button>
      </div>
      <div className={cn(style.block, style.divider)}>
        <h3>Principi Norman Fostera prilikom projektiranja</h3>
        <p>
          Vivamus condimentum lacus at leo semper, id vulputate sem semper.
          Curabitur feugiat facilisis libero non rutrum. Donec feugiat volutpat
          justo. Praesent condimentum, metus eget pellentesque fermentum, ex
          mauris mollis diam, at ...{' '}
        </p>
        <Button ondark href="#">
          read more
        </Button>
      </div>
      <div className={cn(style.block, style.divider)}>
        <h3>Principi Norman Fostera prilikom projektiranja</h3>
        <p>
          Vivamus condimentum lacus at leo semper, id vulputate sem semper.
          Curabitur feugiat facilisis libero non rutrum. Donec feugiat volutpat
          justo. Praesent condimentum, metus eget pellentesque fermentum, ex
          mauris mollis diam, at ...{' '}
        </p>
        <Button ondark href="#">
          read more
        </Button>
      </div>
    </div>
  )
}

export default LatestBlogs
