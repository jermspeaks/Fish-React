import React, {Component} from 'react';
import Fish from '../fish/fish'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h3>Consumer Guide</h3>
        <p>Seafood Watch recommendations show you which seafood items are "Best Choices" or "Good Alternatives," and which ones you should "Avoid."</p>
        <Fish />
      </div>
    );
  }
}