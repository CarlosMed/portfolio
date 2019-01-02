import React from 'react';
import Work from './Work/Jobs';
import { Header } from './Header/Header';
import { About } from './About/About';

const Home = props => {
  return <>
        <Header />
        <About />
        <div className="line-container">
          <div className="line" />
        </div>
        <Work />
      </>;
};

export default Home;
