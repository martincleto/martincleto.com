/*
 * app/models/position.js
 * 
 */

// Dependencies

var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;
  

// Schemas

var ProjectSchema = new Schema({
  title: {type : String, default : '', trim : true},
  url: {type : String, default : '', trim : true}
});

var PositionSchema = new Schema({
  title: {type : String, default : '', trim : true},
  description: {type : String, default : '', trim : true},
  company: {
  	name : {type : String, default : '', trim : true},
  	url: {type : String, default : '', trim : true}
  },
  projects: [ProjectSchema],
  start: {type : Number},
  end: {type : Number}
});

// Validations


mongoose.model('Position', PositionSchema);