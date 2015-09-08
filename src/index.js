import React from 'react';
import Router, { DefaultRoute, Route, NotFoundRoute } from 'react-router';
import App from './components/app';
import './stylesheets/main.scss';
// Pages
import LandingPage from './components/landing/LandingPage';
import ViewFishPage from './components/fish/ViewFishPage';
import AboutPage from './components/about/AboutPage';
import NotFoundPage from './components/errors/NotFoundPage';

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={LandingPage}/>
    <Route path="/view/:fish" name="fish" handler={ViewFishPage}/>
    <Route path="about" name="about" handler={AboutPage}/>
    <NotFoundRoute handler={NotFoundPage}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('main'));
});
