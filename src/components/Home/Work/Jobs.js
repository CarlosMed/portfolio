import { Job } from './Job';
import React, { Component } from 'react';
import { client } from '../../../helpers/helpers';

class Jobs extends Component { constructor(props) {
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
        {jobs.length > 0 &&
          jobs.map((job, i) => <Job jobs={job.fields} key={i} />)}
      </section>
    );
  }
}

export default Jobs;
