import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import ProjectPage from './components/ProjectPage/ProjectPage';

const App = () => {
  // fake authentication Promise
  const authenticate = () => new Promise(resolve => setTimeout(resolve, 2000));

  useEffect(() => {
    authenticate().then( () => {
      const ele = document.querySelector( '.pace' );
      if ( ele ) {
        // fade out
        ele.classList.add( 'leave' );
        setTimeout( () => {
          // remove from DOM
          ele.outerHTML = '';
          // document.querySelector('#root').style = 'block';
        }, 1700 );
      }
    } )
  }, [])

    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/the-trailer-store" component={ProjectPage} />
        <Route path="/life-made" component={ProjectPage} />
        <Route path="/security-expo" component={ProjectPage} />
        <Route path="/todiddlydo" component={ProjectPage} />
      </>
    );
}

export default App;
