


exports.index = function(req, res){
  res.render('backend/index', {
    title: 'Backend index',
    layout: 'backend/layout'
  });
}