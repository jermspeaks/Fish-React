import React, { Component } from 'react';
import Template from './app-template'
import Fish from './fish/fish'

export default class App extends Component {
  render() {
    return (
      <Template>
        <h3>Consumer Guide</h3>
        <p>Seafood Watch recommendations show you which seafood items are "Best Choices" or "Good Alternatives," and which ones you should "Avoid."</p>
        <Fish />
      </Template>
    );
  }
}
