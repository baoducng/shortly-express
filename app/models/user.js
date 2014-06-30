var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  defaults: {},
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var hashedPass = bcrypt.hashSync(model.get('password'));
      model.set('password', hashedPass);
    });
  }
});

module.exports = User;
