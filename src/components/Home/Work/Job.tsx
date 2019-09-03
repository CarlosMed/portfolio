import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  jobs: JobProps
}

interface JobProps {
  title: string
  slug: string
  workImage: any
}

export const Job: React.FC<Props> = ( { jobs: { title, slug, workImage } } ) => (
  <>
    <img
      src={workImage !== undefined ? workImage.fields.file.url : ''}
      alt={title}
    />
    <p>{title}</p>
    <Link to={`/${slug.toString()}`}>+</Link>
  </>
);
