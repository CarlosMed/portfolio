import React, { Component } from 'react';
import { client } from '../../helpers/helpers';
import JobDescription from './JobDescription';
import('devicon');

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
  }

  componentDidMount() {
    client.getEntries().then(entries => {
      let items = entries.items;
      let content = items
        .map(entry => entry)
        .find(
          item => item.fields.slug === this.props.match.url.replace('/', '')
        );

      this.setState({
        content,
      });
    });
  }

  handleNext = () => {
    console.log('next');
  };

  handlePrev = () => {
    console.log('prev');
  };

  getJobDescription = () => {
    return (
      <JobDescription
        job={this.state.content.fields}
        handleNext={this.handleNext}
        handlePrev={this.handlePrev}
      />
    );
  };

  render() {
    const { content } = this.state;

    return (
      <>
        {content !== null && (
          <div className="description">{this.getJobDescription()}</div>
        )}
      </>
    );
  }
}

export default Description;
