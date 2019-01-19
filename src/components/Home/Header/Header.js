import React from 'react';

export const Header = () => (
    <header>
      <div className="img-container">
        <img src="https://source.unsplash.com/collection/907185" alt="" />
        <div className="grid">
          <div className="item" />
          <div className="item" />
          <div className="item" />
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
          <li>
            <a
              href="mailto:carlos.w.med@gmail.com?subject=Hello"
              target="_blank"
              rel="noopener noreferrer">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/carlosmed/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/carlosmed"
              target="_blank"
              rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/carlosmed"
              target="_blank"
              rel="noopener noreferrer">
              Codepen
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
