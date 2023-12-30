import React from 'react'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import TutorsSection from '../components/tutors-section/tutors-section';
import InfoSecton from '../components/info-section/info-secton';

const Home = () => {

  return (
    <>
      <Header />
      <InfoSecton />
      <TutorsSection />
      <Footer />
    </>
  )
}

export default Home