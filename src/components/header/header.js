import React from 'react';
import Container from '../container/container';
import { Button } from 'antd';
import styles from './header.module.css';

const Header = () => {
  // const tutorsSectionRef = useRef(null);

  const handleClick = () => {
    document.getElementById('tutorsSection').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.headerWrapper}>
      <Container>
        <div className={styles.logo}>tutorland</div>
        <header className={styles.header}>
          <h1 className={styles.title}>Discover your learning journey with the best tutors</h1>
          <Button
            type="primary"
            className={styles.button}
            onClick={handleClick}
          >
            Get started
          </Button>
        </header>
      </Container>
    </div>
  )
}

export default Header