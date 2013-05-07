
var express = require('express');

module.exports = function (app, config) {
	
  app.use(express.static(config.root + '/public'));	

  // set views path, template engine and default layout
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');	
	
  app.configure(function () {
  	app.use(express.bodyParser());
    app.use(express.methodOverride());
    
    app.use(app.router);
    
  });
   
}