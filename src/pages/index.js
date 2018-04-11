import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';

class Index extends Component {
  componentDidMount() {
    navigateTo(`/home`);
  }
  render() {
    return (
        <main></main>
    );
  }
}
export default Index;
