import React, { Component } from 'react';
import Header from './header/app-header';

export default class Template extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
};
