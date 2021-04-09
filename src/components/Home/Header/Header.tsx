// @ts-nocheck
import React from 'react';
import { animated, Spring } from 'react-spring';

export const Header = () => (
  <Spring
    native
    from={{ opacity: 0, transform: 'translate3d(-100%, 0, 0)' }}
    to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}>
    {props => (
      <animated.header style={props}>
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
      </animated.header>
    )}
  </Spring>
);
