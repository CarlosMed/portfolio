import React, { Component } from 'react';
import { client } from '../../helpers/contentful';

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

  getJobDescription() {
    const {
      description,
      title,
      workImage,
      technologies,
    } = this.state.content.fields;

    return (
      <>
        <img src={workImage === undefined ? '' : workImage.fields.file.url } alt={title} />
        <div className="left">
          <h2>{title}</h2>
          <ul>
            {technologies.map(technology => (
              <li>{technology}</li>
            ))}
          </ul>
          <p>{description}</p>
        </div>
      </>
    );
  }

  render() {
    const { content } = this.state;
    console.log(this.state.content !== null && this.state.content.fields);
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
