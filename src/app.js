import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <h2>Areas</h2>
      </div>
    );
  }
}

class Subheading extends Component {
  render() {
    return (
      <h2>JSX Rocks</h2>
    )
  }
}

export { Heading, Subheading }
