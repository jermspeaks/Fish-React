var express = require('express');

var app = express();

require('./config/express')(app);
require('./config/routes')(app);

app.listen(app.get('port'));
