import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from '../container/container';
import { Button, Input, Space } from 'antd';
import styles from './tutors-section.module.css';
import StudyIcon from '../../assets/study_icon.png';

const TutorsSection = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    getTutors();
  }, [])

  const getTutors = async () => {
    try {
      const response = await axios.get('https://tutors-back.onrender.com/tutors');
      setTutors(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <h2 className={styles.title}>Find your subject expert🚀</h2>
      <Space.Compact style={{ width: '100%' }}>
        <Input placeholder="Enter tutor name" />
        <Button type="primary">Search</Button>
      </Space.Compact>
      <section className={styles.tutorsSection}>

        {tutors.map(tutor => (
          <div className={styles.tutorCard} key={tutor.tutor_id}>
            <div className={styles.tutorNameWrapper}>
              <div className={styles.tutorName}>{tutor.tutor_name} {tutor.tutor_surname}</div>
              <div className={styles.tutorPrice}>{tutor.hourly_price} €/h</div>
            </div>
            <div className={styles.tutorSpecialization}>
              <img className={styles.studyIcon} src={StudyIcon} alt='book icon' />
              <div className={styles.discipline}>{tutor.tutor_specialization}</div>
            </div>

          </div>
        ))}
      </section>
    </Container>
  )
}

export default TutorsSection