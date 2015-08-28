import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
      <div className="card-level-1">
        <h1>Hello, world.</h1>
        <h2>Areas</h2>
      </div>
    );
  }
}

class Subheading extends Component {
  render() {
    return (
      <div className="card-level-2">
        <h2>JSX Rocks</h2>
      </div>
    )
  }
}

export { Heading, Subheading }
