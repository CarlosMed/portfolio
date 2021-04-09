import React from 'react';
import { Link } from 'react-router-dom';

interface JobProps {
  jobs: {
    title: string
    slug: string
    workImage: any
  }
}

export const Job = ( { jobs: { title, slug, workImage } }: JobProps ) => (
  <>
    <img
      src={workImage !== undefined ? workImage.fields.file.url : ''}
      alt={title}
    />
    <p>{title}</p>
    <Link to={`/${slug.toString()}`}>+</Link>
  </>
);
