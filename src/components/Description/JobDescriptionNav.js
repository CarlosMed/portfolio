import React from 'react';
import { Link } from 'react-router-dom';

export function JobDescriptionNav({ handlePrev, handleNext }) {
  return (
    <div className="top">
      <span className="prev" onClick={handlePrev}>
        ⇠
      </span>
      <p>
        <Link to={'/'} className="home">
          Home
        </Link>{' '}
        - <b>01</b> / <b>04</b>
      </p>
      <span className="next" onClick={handleNext}>
        ⇢
      </span>
    </div>
  );
}
