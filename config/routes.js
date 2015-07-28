"use strict";
var site = require('../app/controllers/site');


module.exports = function (app) {
	
  //========================
  // Site Frontend Routes
  // =======================
  app.get("/" , site.home);
  

};