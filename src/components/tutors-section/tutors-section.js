import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import Container from '../container/container';
import { Button, DatePicker, Empty, Input, Select, Space, Spin } from 'antd';
import styles from './tutors-section.module.css';
import BookIcon from '../../assets/book_icon.png';
import HatIcon from '../../assets/hat_icon.png';

const TutorsSection = () => {
  const [initialTutors, setInitialTutors] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getTutors();
  }, [])

  const getTutors = async () => {
    try {
      const response = await axios.get('https://tutors-back.onrender.com/tutors');
      const tutorsData = response.data;

      setInitialTutors(tutorsData);
      setTutors(tutorsData);
      setLoaded(true);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearch = () => {
    const formattedDate = selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : null;


    const filteredTutors = initialTutors.filter(tutor => {
      const nameMatch = tutor.tutor_name.toLowerCase().includes(searchTerm.toLowerCase());
      const surnameMatch = tutor.tutor_surname.toLowerCase().includes(searchTerm.toLowerCase());
      const isAvailable = !tutor.lessons.some(entry => dayjs(entry.lesson_date).format('YYYY-MM-DD') === formattedDate);

      return (nameMatch || surnameMatch) && isAvailable;
    });

    setTutors(filteredTutors);
  };

  const handleChange = (option) => {
    switch (option) {
      case 'sort':
        setTutors(prev => [...prev].sort((a, b) => a.tutor_id - b.tutor_id));
        break;
      case 'name':
        setTutors(prev => [...prev].sort((a, b) => (a.tutor_name + ' ' + a.tutor_surname).localeCompare(b.tutor_name + ' ' + b.tutor_surname)));
        break;
      case 'price':
        setTutors(prev => [...prev].sort((a, b) => a.hourly_price - b.hourly_price));
        break;
      case 'availability':
        setTutors(prev => [...prev].sort((a, b) => a.lessons.length - b.lessons.length));
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <section className={styles.tutorsSectionWraper} id="tutorsSection">
        <h2 className={styles.title}>Find your subject expert🚀</h2>
        <div className={styles.search}>
          <Space.Compact className={styles.searchBar}>
            <Input
              placeholder="Search tutor"
              maxLength={20}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <DatePicker
              placeholder="Select date"
              onChange={(date) => setSelectedDate(date)}
            />
            <Button
              type="primary"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Space.Compact>
          <div className={styles.sortBar}>
            <div className={styles.tutorsNumber}>{tutors.length} tutors available</div>
            <Select
              className={styles.sort}
              defaultValue="sort"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'sort', label: 'Sort' },
                { value: 'name', label: 'Name A-Z' },
                { value: 'price', label: 'Lowest price' },
                { value: 'availability', label: 'Availability' },
              ]}
            />
          </div>
        </div>
        {isLoaded ? (
          tutors.length ? (
            <div className={styles.tutorsSection}>
              {tutors.map(tutor => (
                <div className={styles.tutorCard} key={tutor.tutor_id}>
                  <div className={styles.tutorNameWrapper}>
                    <div className={styles.tutorName}>{tutor.tutor_name} {tutor.tutor_surname}</div>
                    <div className={styles.tutorPrice}>{tutor.hourly_price} €/h</div>
                  </div>
                  <div className={styles.tutorSpecialization}>
                    <img className={styles.hatIcon} src={HatIcon} alt='educatin hat icon' />

                    <div className={styles.discipline}>{tutor.tutor_specialization}</div>
                  </div>
                  <div className={styles.tutorLessons}>
                    <img className={styles.bookIcon} src={BookIcon} alt='book icon' />
                    <div className={styles.discipline}>{tutor.lessons.length} active lessons</div>
                  </div>

                </div>
              ))}
            </div>
          ) : (<div className={styles.emptyWrapper}><Empty /></div>)
        ) : (<div className={styles.spinWrapper}><Spin size='large' /></div>)
        }

      </section>
    </Container>
  )
}

export default TutorsSection