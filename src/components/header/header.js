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
        <header className={styles.header}>
          <div className={styles.logo}>tutorland</div>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Discover your learning journey with the best tutors</h1>
            <Button
              type="primary"
              size='large'
              className={styles.button}
              onClick={handleClick}
            >
              Get started
            </Button>
          </div>
        </header>
      </Container>
    </div>
  )
}

export default Header