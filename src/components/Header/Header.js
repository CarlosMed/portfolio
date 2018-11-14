import React from 'react';

export function Header() {
  return (
    <header>
      <div className="img-container">
        <img
          src="https://github.com/CarlosMed/portfolio/blob/dev/src/images/me.jpg?raw=true"
          alt=""
        />
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
          <a href="mailto:carlos.w.med@gmail.com?subject=Hello" target="_blank" rel="noopener noreferrer"><li>Email</li></a>
          <a href="/about"><li>About</li></a>
          <a href="https://www.linkedin.com/in/carlosmed/" target="_blank" rel="noopener noreferrer"><li>LinkedIn</li></a>
          <a href="https://github.com/carlosmed" target="_blank" rel="noopener noreferrer"><li>Github</li></a>
          <a href="https://codepen.io/carlosmed" target="_blank" rel="noopener noreferrer"><li>Codepen</li></a>
        </ul>
      </nav>
    </header>
  );
}
