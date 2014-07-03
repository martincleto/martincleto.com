/*
 * app/controllers/index.js
 * 
 */

exports.show = function(req, res){
  res.render('index', { title: 'Express' });
};