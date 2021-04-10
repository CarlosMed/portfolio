import React from 'react';
import { Link } from 'react-router-dom';

interface FieldProps {
  jobs: {
    title: string
    slug: string
    workImage: any
  }
}

export const Job = ( {jobs: { title, slug, workImage }}: FieldProps ) => (
  <>
    <img
      src={workImage !== undefined ? workImage.fields.file.url : ''}
      alt={title}
    />
    <p>{title}</p>
    <Link to={`/${slug.toString()}`}>+</Link>
  </>
);
