import React from 'react';
import Container from '../../Shared/Container/Container'
import LatestProjects from '../../Shared/LatestProjects'
import LatestBlogs from '../../Shared/LatestBlogs'
import styles from './HomeFooter.module.scss';

const HomeFooter = () => {
    return(
        <div className={styles.footer}>
            <Container>
                <LatestProjects />
                <LatestBlogs />
            </Container>
        </div>
    )
}
export default HomeFooter;