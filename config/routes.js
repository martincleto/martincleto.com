
var express = require('express');

module.exports = function (app, config) {
	
  var auth = express.basicAuth(config.user, config.password);	
	
  app.get('/', function(req,res){
    res.send('Hello');
  });

  app.get('/backend', auth, function(req,res){
    res.send('Backend');
  });
  
  app.get('/backend/metadata', auth, function(req,res){
    res.send('Backend > Metadata');
  });
  
  app.get('/backend/contents', auth, function(req,res){
    res.send('Backend > Metadata');
  });
  
  app.get('/backend/experience', auth, function(req,res){
    res.send('Backend > Experience');
  });
  
};