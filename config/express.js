
var express = require('express')
  , sass = require('node-sass');

module.exports = function (app, config) {

  // static	
  app.use(
     sass.middleware({
         src: config.root + '/sass',
         dest: config.root + '/public',
         debug: true
     })
  );
  
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