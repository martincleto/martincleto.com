
var express = require('express')
  , index = require('../app/controllers/index')
  , backend = require('../app/controllers/backend');

module.exports = function (app, config) {
	
  var auth = express.basicAuth(config.user, config.password);	
	
  app.get('/', index.show);
  
  // CMS

  app.get('/backend', auth, backend.index);
  
  app.get('/backend/metadata', auth, function(req,res){
    res.send('Backend > Metadata');
  });
  
  app.get('/backend/contents', auth, function(req,res){
    res.send('Backend > Contents');
  });
  
  app.get('/backend/experience', auth, function(req,res){
    res.send('Backend > Experience');
  });
  
};