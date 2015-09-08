import React, { Component } from 'react';
// import Router, { Locations, Location, NotFound } from 'react-router-component';
import Router, { RouteHandler } from 'react-router';
import Template from './app-template';


export default class App extends Component {
  render() {

    // return (
    //   <Template>
    //     <Locations>
    //       <Location path='/' handler={LandingPage} />
    //       <Location path='/about' handler={AboutPage} />
    //       <Location path='/view/:fish' handler={ViewFishPage} />
    //       <NotFound handler={NotFoundPage} />
    //     </Locations>
    //   </Template>
    // );
    return (
      <Template>
        <RouteHandler/>
      </Template>
    )
  }
}
