import React, { Component } from 'react';
import Router, { Locations, Location, NotFound } from 'react-router-component';
import Template from './app-template'
import Fish from './fish/fish'


export default class App extends Component {
  render() {
    return (
      <Template>
        <Locations>
          <Location path='/' handler={LandingPage} />
          <Location path='/about' handler={AboutPage} />
          <Location path='/view/:fish' handler={ViewFishPage} />
          <NotFound handler={NotFoundPage} />
        </Locations>
      </Template>
    );
  }
}

class LandingPage extends Component {
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

class AboutPage extends Component {
  render() {
    return <div>About Page</div>;
  }
}

class ViewFishPage extends Component {
  render() {
    return <div>Pending</div>;
  }
}

class NotFoundPage extends Component {
  render() {
    return <b>Not Found!</b>;
  }
}