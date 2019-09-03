import React from 'react';
import { About } from './About/About';
import { Header } from './Header/Header';
import Work from './Work/Jobs';

const Home = () => {
  return <div className="main">
        <Header />
        <About />
        <div className="line-container">
          <div className="line" />
        </div>
        <Work />
      </div>;
};

export default Home;
