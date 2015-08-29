import React, { Component } from 'react';
import Router, { Locations, Location, NotFound } from 'react-router-component';
import Template from './app-template';
import LandingPage from './landing/LandingPage';
import ViewFishPage from './fish/ViewFishPage';
import AboutPage from './about/AboutPage';
import NotFoundPage from './errors/NotFoundPage';

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

