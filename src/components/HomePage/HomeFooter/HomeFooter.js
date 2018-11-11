import React from 'react';

import LatestProjects from '../../Shared/LatestProjects'
import styles from './HomeFooter.module.scss';

const HomeFooter = () => {
    return(
        <div className={styles.footer}>
            <LatestProjects />
        </div>
    )
}
export default HomeFooter;