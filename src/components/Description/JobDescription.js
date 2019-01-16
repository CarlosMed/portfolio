import React from 'react';
import { JobDescriptionNav } from './JobDescriptionNav';
import { randomColor } from '../../helpers/helpers';

const JobDescription = ({
  jobInfo,
  handleNext,
  handlePrev,
  jobLength,
  currentJobNumber,
  ...props
}) => {
  const { description, title, workImage, technologies, view, github } = jobInfo;
  const styles = { backgroundColor: randomColor() };

  return (
    <>
      <img
        src={workImage !== undefined ? workImage.fields.file.url : ''}
        alt=""
        style={styles}
      />
      <div className="left">
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
      </div>
    </>
  );
};

export default JobDescription;
