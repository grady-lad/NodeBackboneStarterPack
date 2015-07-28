var express = require('express');
var Config = require('./config/config');
var app = express();

config = new Config();
//========================
//LOGGING
//========================
var bole = require("bole");

bole.output({level: "debug", stream: process.stdout});
var log = bole("server");

log.info("server process starting");

//======================
// Bootstraping
//======================
require('./config/express')(app);
require('./config/routes')(app);

//=============================
// Development Server Config
//===============================
if(process.env.NODE_ENV === 'development' || 'test'){
	var livereload  = require('express-livereload');
	livereload(app, {watchDir: process.cwd() + "/app/"});
	
	app.listen(config.port, config.ip, function (error) {
		if (error) {
			log.error("Unable to listen for connections", error);
			process.exit(10);
		}
		log.info("express is listening on http://" +
		config.ip + ":" + config.port);
	});
}

module.exports = app;