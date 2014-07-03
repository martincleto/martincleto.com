/*
 * app/controllers/backend.js
 * 
 */

exports.index = function(req, res){
	
  var bodyClassesValue = req.route.path.split('/');
	
  res.render('backend/index', {
    title: 'Backend',
    bodyClasses: bodyClassesValue,
    layout: 'backend/layout'
  });
  
};