import React from 'react';
import Container from '../container/container';
import TutoringImae from '../../assets/tutoring-image.svg';
import styles from './info-section.module.css';

const InfoSecton = () => {
  return (
    <Container>
      <div className={styles.sectionWrapper}>
        <section className={styles.section}>
          <div className={styles.sectionInfo}>
            <h3 className={styles.sectionTitle}>Online tutoring that releases potential</h3>
            <p className={styles.sectionDescription}>We can't stop you worrying about your child. But our expert tutors can help their grades and confidence soar - and help you worry a little less.</p>
          </div>
          <img className={styles.sectionImage} src={TutoringImae} alt='Online chemistry tutoring' />
        </section>
      </div>
    </Container>
  )
}

export default InfoSecton