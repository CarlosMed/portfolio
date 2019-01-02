import React, { Component } from 'react';
import { client } from '../../helpers/contentful';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    /**
     * TODO: Sort the info out so that it can be pushed to the state in content
     */
    client.getEntries().then(entries => {
      let items = entries.items;
      let content = items
        .map(entry => entry)
        .find( item => item.fields.slug === this.props.match.url.replace( '/', '' ));

      this.setState({
        content
      })
    });
  }

  render() {
    return <h1>{this.props.match.url}</h1>;
  }
}

export default Description;
