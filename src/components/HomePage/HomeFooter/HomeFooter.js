import React from 'react';
import Container from '../../Shared/Container/Container'
import LatestProjects from '../../Shared/LatestProjects'
import LatestBlogs from '../../Shared/LatestBlogs'
import ContactUs from '../ContactUs'
import Copyright from '../../Shared/Copyright'
import styles from './HomeFooter.module.scss';

const HomeFooter = () => {
    return(
        <div className={styles.footer}>
            <Container>
                <LatestProjects />
                <div className={styles.row}>
                    <LatestBlogs />
                    <ContactUs />
                </div>
                <Copyright />
            </Container>
        </div>
    )
}
export default HomeFooter;