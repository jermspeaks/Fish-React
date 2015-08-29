import React, { Component } from 'react';
import Template from './app-template'
import Fish from './fish/fish'

export default class App extends Component {
  render() {
    return (
      <Template>
        <h3>Fishes</h3>
        <Fish />
      </Template>
    );
  }
}