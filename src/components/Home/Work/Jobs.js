import React, { Component } from 'react';
import { Trail, animated } from 'react-spring';

import { Job } from './Job';

import { client } from '../../../helpers/helpers';

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    client.getEntries().then(entry =>
      this.setState({
        jobs: entry.items,
      })
    );
  }

  render() {
    const { jobs } = this.state;
    return (
      <section className="jobs">
        {jobs.length > 0 && (
          <Trail
            native
            keys={job => job.sys.id}
            items={jobs}
            from={{ opacity: 0, transform: 'translate3d(100%, 0, 0)' }}
            to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}>
            {(job, i) => props => {
              return (
                <animated.div className="job" style={props} key={job.sys.id}>
                  <Job jobs={job.fields} />
                </animated.div>
              );
            }}
          </Trail>
        )}
      </section>
    );
  }
}

export default Jobs;
