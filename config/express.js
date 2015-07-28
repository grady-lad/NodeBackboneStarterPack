"use strict";
var express 	 	 = require("express");
var session      	 = require('express-session');
var cookieParser 	 = require('cookie-parser');
var bodyParser 	 	 = require('body-parser');
var multer   	     = require('multer');
var expressValidator = require('express-validator');
var path 			 = require('path');
/**
 * expose for now
 */
module.exports = function (app, passport) {

	//======================
	// Cookie Parser Config
	//=======================
	app.use(cookieParser()); // read cookies (needed for auth)

	//============================
	// MIddleware Configuration
	//=============================
	app.use(bodyParser.urlencoded({ extended: true })); //configure app to use bodyParser()
	app.use(bodyParser.json()); //this will let us get the data from a POST
	app.use(multer());
	app.use(expressValidator());
	//======================
	// View Configuration
	//=======================
	app.set("views", __dirname + "/../app/views");
	app.set("view engine", "jade");
	app.use(express.static(path.join(__dirname , '/../app/public/')));
};