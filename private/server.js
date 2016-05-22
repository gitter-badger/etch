// Require dependancies
var express = require('express'),
	app = express(),
	http = require('http').Server(app);

// Start listening
app.listen(process.env.PORT || 3000);

// Set root directory
console.log(process.cwd() + '/public');
app.use(express.static(process.cwd() + '/public'));