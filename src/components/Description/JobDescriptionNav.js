import React from 'react';
import { Link } from 'react-router-dom';

export function JobDescriptionNav({
  handlePrev,
  handleNext,
  jobLength,
  currentJobNumber,
}) {
  return (
    <div className="top">
      <button
        className="prev"
        onClick={handlePrev}
        style={currentJobNumber === 1 ? { visibility: 'hidden' } : {}}
        disabled={currentJobNumber === 1 ? true : false}>
        ⇠
      </button>
      <p>
        <Link to={'/'} className="home">
          Home
        </Link>{' '}
        - <b>0{currentJobNumber}</b> / <b>0{jobLength}</b>
      </p>
      <button
        className="next"
        onClick={handleNext}
        style={jobLength === currentJobNumber ? { visibility: 'hidden' } : {}}
        disabled={jobLength === currentJobNumber ? true : false}>
        ⇢
      </button>
    </div>
  );
}
