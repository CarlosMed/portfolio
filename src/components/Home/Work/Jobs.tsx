import React, { useEffect, useState } from 'react';
import { animated, Trail } from 'react-spring';
import { client } from '../../../helpers/helpers';
import { Job } from './Job';

const Jobs = () => {
  const [ jobs, setJobs ] = useState<any>( [] );

  useEffect( () => {
    client.getEntries().then( ( entry: any ) => setJobs( entry.items ) );
  }, [] );

  return (
    <section className='jobs'>
      {jobs.length > 0 && (
        <Trail
          native
          keys={job => job.sys.id}
          items={jobs}
          from={{ opacity: 0, transform: 'translate3d(100%, 0, 0)' }}
          to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}>
          {job => props => {
            return (
              <animated.div className='job' style={props} key={job.sys.id}>
                <Job jobs={job.fields} />
              </animated.div>
            );
          }}
        </Trail>
      )}
    </section>
  );
};

export default Jobs;
