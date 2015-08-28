import React from 'react';
import App, { Heading, Subheading } from './App';
import './stylesheets/style.scss';

React.render(<Heading />, document.getElementById('root'));
React.render(<Subheading />, document.getElementById('root-two'));
