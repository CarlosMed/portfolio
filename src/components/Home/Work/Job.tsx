import React from 'react';
import { Link } from 'react-router-dom';

interface FieldProps {
  jobs: {
    title: string
    slug: string
    workImage: any
  }
}

export const Job = ( { jobs: { title, slug, workImage } }: FieldProps ) => (
  <>
    <Link className='job' to={`/${slug.toString()}`}>
      <img
        src={workImage !== undefined ? workImage.fields.file.url : ''}
        alt={title}
      />
      <p>{title}</p>
      <span>+</span>
    </Link>
  </>
);
