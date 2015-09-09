/**
 * Routes for express app
 */
var express = require('express');
var React = require('react');
var App = require('../../src/components/app');
var index = '<!DOCTYPE html><html><head></head><body>{{component}}</body></html>';

module.exports = function(app) {
  app.get('/', function (req, res) {
    var componentHtml = React.renderToString(App());
    var html = index.replace('{{component}}', componentHtml);
    res.type('html');
    res.send(html);
  });

};
