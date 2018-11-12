import { Work } from './components/Work/Work';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Header />

        <About />

        <div className="line-container">
          <div className="line" />
        </div>

        <Work />
      </main>
    );
  }
}

export default App;
