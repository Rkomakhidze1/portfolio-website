import React from 'react';
import About from '../components/about/About';
import Header from '../components/header/Header';
import Jobs from '../components/jobs/Jobs';
import Referrals from '../components/referrals/Referrals';

function Home() {
  return (
    <>
      <Header />
      <About />
      <Jobs />
      <Referrals />
    </>
  );
}

export default Home;
