import React, { useEffect, useState } from 'react';
import { client } from '../../../helpers/helpers';
import { Job } from './Job';

const Jobs = () => {
  type ContentProps = {
    sys: {
      id: number
    }
    fields: {
      title: string
      slug: string
      workImage: any
    }
  }
  const [ jobs, setJobs ] = useState( [] );

  useEffect( () => {
    client.getEntries().then( ( entry: any ) => setJobs( entry.items ) );
  }, [] );

  return (
    <section className='jobs'>
      {jobs.length > 0 && jobs.map( ( { fields, sys }: ContentProps ) => {
        return (
          <div className='job' key={sys.id}>
            <Job jobs={fields} />
          </div>
        )
      }
      )}
    </section>
  );
};

export default Jobs;
