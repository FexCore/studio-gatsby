import React from 'react'
import cn from 'classnames'

import Heading2 from '../Heading2/Heading2'
import Button from '../Button/Button'

import style from './LatestProjects.module.scss'

import Prj1 from '../../../images/project-1.jpg'
import Prj2 from '../../../images/project-2.jpg'
import Prj3 from '../../../images/project-3.jpg'
import Prj4 from '../../../images/project-4.jpg'
const LatestProjects = () => {
  // const latest = classNames({})
  return (
    <div className={style.projects}>
      <div className={cn(style.block, style.latest)}>
        <Heading2 color="#333">Latest  Projects</Heading2>
        <Button href="#" ondark>All projects</Button>
      </div>
      <div className={cn(style.block)}>
        <div className={style.image} style={{ backgroundImage: `url(${Prj1})` }}></div>
        <div className={style.title}>
            <h5 className={style.name}>amer</h5>
            <h5 className={style.where}>where</h5>
            <h5 className={style.what}>what</h5>
        </div>
      </div>
      <div className={cn(style.block)}>
        <div className={style.image} style={{ backgroundImage: `url(${Prj2})` }}></div>
        <div className={style.title}>
            <h5 className={style.name}>amer</h5>
            <h5 className={style.where}>where</h5>
            <h5 className={style.what}>what</h5>
        </div>
      </div>
      <div className={cn(style.block)}>
        <div className={style.image} style={{ backgroundImage: `url(${Prj3})` }}></div>
        <div className={style.title}>
            <h5 className={style.name}>amer</h5>
            <h5 className={style.where}>where</h5>
            <h5 className={style.what}>what</h5>
        </div>
      </div>
      <div className={cn(style.block)}>
        <div className={style.image} style={{ backgroundImage: `url(${Prj4})` }}></div>
        <div className={style.title}>
            <h5 className={style.name}>amer</h5>
            <h5 className={style.where}>where</h5>
            <h5 className={style.what}>what</h5>
        </div>
      </div>
    </div>
  )
}

export default LatestProjects
