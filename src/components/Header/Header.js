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
  );
}
