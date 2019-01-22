import React from 'react';
import { Spring, animated } from 'react-spring';

import { JobDescriptionNav } from './JobDescriptionNav';

const JobDescription = ({
  jobInfo,
  handleNext,
  handlePrev,
  jobLength,
  currentJobNumber,
  ...props
}) => {
  const { description, title, workImage, technologies, view, github } = jobInfo;

  return (
    <>
      <Spring
        native
        from={{ opacity: 0, transform: 'translate3d(-100%, 0, 0)' }}
        to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}>
        {props => (
          <animated.img
            src={workImage !== undefined ? workImage.fields.file.url : ''}
            alt=""
            style={props}
          />
        )}
      </Spring>
      <Spring
        native
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {props => (
          <animated.div className="left" style={props}>
            <JobDescriptionNav
              handlePrev={handlePrev}
              handleNext={handleNext}
              jobLength={jobLength}
              currentJobNumber={currentJobNumber}
            />
            <div className="title">
              <h2>{title}</h2>
              <div>
                {view ? (
                  <a href={view} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                ) : (
                  ''
                )}
                {github ? (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
            <ul>
              {technologies.map((technology, i) => (
                <li key={i}>
                  <i
                    className={`devicon-${technology.toLowerCase()}-plain colored`}
                  />
                  <span>{technology}</span>
                </li>
              ))}
            </ul>
            <p>{description}</p>
          </animated.div>
        )}
      </Spring>
    </>
  );
};

export default JobDescription;
