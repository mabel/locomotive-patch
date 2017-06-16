var express = require('express')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , poweredBy = require('connect-powered-by');

module.exports = function() {
  if ('development' == this.env) {
    this.use(express.logger());
  }

  this.use(poweredBy('Locomotive'));
  this.use(express.favicon());
  this.use(express.static(__dirname + '/../../public'));
  this.use(bodyParser.json());
  this.use(bodyParser.urlencoded({extended: true}));
  this.use(methodOverride());
  this.use(this.router);
  this.use(express.errorHandler());
}
