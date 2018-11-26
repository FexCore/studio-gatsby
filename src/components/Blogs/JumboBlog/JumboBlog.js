import React from 'react';
import Heading2 from '../../Shared/Heading2'
import Button from '../../Shared/Button'
import style from './JumboBlog.module.scss'
import GridOverlay from '../../Shared/GridOverlay'
const JumboBlog = () => {
  return (
    <div className={style.jumboContainer}>
        <GridOverlay/>
        <div className={style.jumboContent}>
          <Heading2 white>Blog</Heading2>
          <div className={style.title}>
            <h3>Principi Normana Fostera
                prilikom projektiranja</h3>
                <strong>01</strong>
          </div>
          <Button white>Read more</Button>
        </div>
    </div>
  );
};

export default JumboBlog;