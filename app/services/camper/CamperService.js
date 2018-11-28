/* 
 hacked together by headwinds | www.headwinds.net
 see README.md for a more detailed write up 

 Send mess

*/

var mongoose = require('mongoose/');

var CamperService = {};

CamperService.getModel = function(){

  // CAMPER 

  var CamperSchema = new Schema({
      nickname: String,
      fullname: String,
      email: String,
      aFondMemoryAboutCamping: String,
      parks: Array, //ids 1000,1001, 1002
      activities: Array, // ids 0,1,2
      inventory: Array, // ids 100, 101,102
      playlist: Array,
      socialHooks: Array,
      lastParkVisit: String,
      friends: Array,
      hilites: Array,
      futureParkVisit: String
  }); 

  mongoose.model('Camper', CamperSchema);
  var CamperMongooseModel = mongoose.model('Camper'); 

  return CamperMongooseModel; 

}

module.exports = CamperService; 