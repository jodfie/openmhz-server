var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var User = require('./user');

const systemSchema = mongoose.Schema({
    name: String,
    shortName: String,
    systemType: String,
    county: String,
    country: String,
    city: String,
    state: String,
    description: String,
    status: String,
    showScreenName: Boolean,
    allowContact: {
          type: Boolean,
          default: true
      },
    callAvg: Number,
    callCount: Number,
    ignoreUnknownTalkgroup : Boolean,
    active: {type: Boolean, default: false},
    lastActive: Date,
    userId:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    key: String
  });

  systemSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  systemSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };

  module.exports = systemSchema;