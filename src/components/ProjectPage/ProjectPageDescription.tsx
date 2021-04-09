import 'devicon';
import React from 'react';
import { ProjectPageNav } from './ProjectPageNav';

interface JobDescriptionProps {
  jobInfo: JobInfoDestructed
  handleNext: () => void
  handlePrev: () => void
  jobLength: number
  currentJobNumber: number
}

interface JobInfoDestructed {
  description: string
  title: string
  workImage: any
  technologies: Array<string>
  view: string
  github: string
}

const ProjectPageDescription: React.FC<JobDescriptionProps> = ( {
  jobInfo: { description, title, workImage, technologies, view, github },
  handleNext,
  handlePrev,
  jobLength,
  currentJobNumber,
} ) => (
    <>
          <img
            src={workImage !== undefined ? workImage.fields.file.url : ''}
            alt=""
          />
          <div className="left">
            <ProjectPageNav
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
              {technologies.map( ( technology: any, i: any ) => (
                <li key={i}>
                  <i
                    className={`devicon-${technology.toLowerCase()}-plain colored`}
                  />
                  <span>{technology}</span>
                </li>
              ) )}
            </ul>
            <p>{description}</p>
          </div>
        )
    </>
  )

  export default ProjectPageDescription
