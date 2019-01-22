import React from 'react';
import { Link } from 'react-router-dom';


export const Job = props => {
  const { title, slug, workImage } = props.jobs;
  return (
    <>
      <img
        src={workImage !== undefined ? workImage.fields.file.url : ''}
        alt={title}
      />
      <p>{title}</p>
      <Link to={`/${slug.toString()}`}>+</Link>
    </>
  );
};
