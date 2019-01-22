import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Description from './components/Description/Discription';
import Home from './components/Home/Home';
import './App.scss';

class App extends Component {
  // fake authentication Promise
  authenticate = () => new Promise(resolve => setTimeout(resolve, 2000));

  componentDidMount = () =>
    this.authenticate().then(() => {
      const ele = document.querySelector('.pace');
      if (ele) {
        // fade out
        ele.classList.add('leave');
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = '';
          // document.querySelector('#root').style = 'block';
        }, 1700);
      }
    });

  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/the-trailer-store" component={Description} />
        <Route path="/life-made" component={Description} />
        <Route path="/security-expo" component={Description} />
        <Route path="/todiddlydo" component={Description} />
      </>
    );
  }
}

export default App;
