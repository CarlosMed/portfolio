import React, { Component } from 'react';
import { client } from '../../helpers/helpers';
import JobDescription from './JobDescription';
import('devicon');

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobInfo: null,
      jobLength: 0,
      currentJobNumber: '',
    };
  }

  componentDidMount() {
    client.getEntries().then(entries => {
      let jobLength = entries.total;
      let items = entries.items;
      let jobInfo = items
        .map(entry => entry)
        .find(
          item => item.fields.slug === this.props.match.url.replace('/', '')
        );
      let currentJobNumber = entries.items
        .map( entry => entry )
        .findIndex(
          item => item.fields.slug === this.props.match.url.replace( '/', '' )
        ) + 1;

      this.setState({
        jobInfo,
        jobLength,
        currentJobNumber,
      });
    });
  }

  handleNext = () => {
    client.getEntries().then(entries => {
      let items = entries.items;
      let job = items
        .map(entry => entry)
        .findIndex(
          item => item.fields.slug === this.props.match.url.replace('/', '')
        );
      const next = entries.items[job + 1].fields.slug;

      return this.props.history.push(`/${next}`);
    });
  };

  handlePrev = () =>
    client.getEntries().then(entries => {
      let items = entries.items;
      let job = items
        .map(entry => entry)
        .findIndex(
          item => item.fields.slug === this.props.match.url.replace('/', '')
        );
      const prev = entries.items[job - 1].fields.slug;

      return this.props.history.push(`/${prev}`);
    });

  getJobDescription = () => {
    return (
      <JobDescription
        jobInfo={this.state.jobInfo.fields}
        jobLength={this.state.jobLength}
        currentJobNumber={this.state.currentJobNumber}
        handleNext={this.handleNext}
        handlePrev={this.handlePrev}
      />
    );
  };

  render() {
    const { jobInfo } = this.state;

    return (
      <>
        {jobInfo !== null && (
          <div className="description">{this.getJobDescription()}</div>
        )}
      </>
    );
  }
}

export default Description;
