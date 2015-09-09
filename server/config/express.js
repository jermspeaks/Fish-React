var express = require('express');
var path = require('path');

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

module.exports = function(app) {
	app.set('port', (process.env.PORT || 3000));

	// X-Powered-By header has no functional value.
  // Keeping it makes it easier for an attacker to build the site's profile
  // It can be removed safely
  app.disable('x-powered-by');

	app.set('views', path.join(__dirname, '..', 'views'));

	app.set('view cache', false);


	app.set('view engine', 'ejs');

	var node_env = process.env.NODE_ENV;
  console.log('Environment: ' + node_env);

	var port = (node_env === 'production') ? app.get('port') : 3000;

	// It is important to catch any errors from the proxy or the
	// server will crash. An example of this is connecting to the
	// server when webpack is bundling
	proxy.on('error', function(e) {
		console.log('Could not connect to proxy, please try again...');
	});
}
