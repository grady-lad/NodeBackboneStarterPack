"use strict";

exports.home = function (req, res) {
  res.render("site/home", {title: 'Home'});
};