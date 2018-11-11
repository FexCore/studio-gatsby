import React from 'react';
import Container from '../../Shared/Container/Container'
import LatestProjects from '../../Shared/LatestProjects'
import styles from './HomeFooter.module.scss';

const HomeFooter = () => {
    return(
        <div className={styles.footer}>
            <Container>
                <LatestProjects />
            </Container>
        </div>
    )
}
export default HomeFooter;