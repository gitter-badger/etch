// Require dependancies
var express = require('express'),
	app = express(),
	http = require('http').Server(app);

// Start listening
app.listen(process.env.PORT || 3000);

// Set root directory
app.use(express.static(process.cwd() + '/public'));