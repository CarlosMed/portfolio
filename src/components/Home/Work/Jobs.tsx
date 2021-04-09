import React, { CSSProperties, useEffect, useState } from 'react';
import { client } from '../../../helpers/helpers';
import { Job } from './Job';

const Jobs = () => {
  type ContentProps = {
    sys: {
      id: number
    }
    fields: {
      jobs: {
        title: string
        slug: string
        workImage: any
      }
    }
  }
  const [ jobs, setJobs ] = useState( [] );

  useEffect( () => {
    client.getEntries().then( ( entry: any ) => setJobs( entry.items ) );
  }, [] );

  return (
    <section className='jobs'>
      {jobs.length > 0 && (
        ( { sys, fields }: ContentProps ) => ( props: CSSProperties ) => {
          return (
            <div className='job' style={props} key={sys.id}>
              <Job jobs={fields.jobs} />
            </div>
          );
        }
      )}
    </section>
  );
};

export default Jobs;
