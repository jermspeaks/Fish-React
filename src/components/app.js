import React, { Component } from 'react';
import Router, { RouteHandler } from 'react-router';
import Template from './app-template';

export default class App extends Component {
  render() {
    return (
      <Template>
        <RouteHandler/>
      </Template>
    )
  }
}
