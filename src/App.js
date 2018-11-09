import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <div className="img-container">
            <img src="https://source.unsplash.com/random" alt="" />
            <div className="grid">
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
          </div>
          <nav>
            <ul>
              <li>About</li>
              <li>Email</li>
              <li>Codepen</li>
            </ul>
          </nav>
        </header>

        <section className="about">
          <h1>Carlos Medina</h1>
          <h2>Software Engineer & Designer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
            laudantium.
          </p>
        </section>

        <div className="line-container">
          <div className="line" />
        </div>

        <section className="jobs">
          <div className="job">
            <p>Saf Technologies</p>
            <span>+</span>
          </div>
          <div className="job">
            <p>The Trailer Store</p>
            <span>+</span>
          </div>
          <div className="job">
            <p>Life Made a Little Easier</p>
            <span>+</span>
          </div>
          <div className="job">
            <p>ToDiddlyDo</p>
            <span>+</span>
          </div>
          <div className="job">
            <p>More to Come</p>
            <span>+</span>
          </div>
          <div className="job">
            <p>name06</p>
            <span>+</span>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
