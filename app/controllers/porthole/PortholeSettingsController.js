

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId; 
var PortholeSettingsModel = mongoose.model('PortholeSettingsModel'); 
var util = require("util");
var events = require("events");
var _ = require("lodash");

var PortholeSettingsController = function() {
    events.EventEmitter.call(this);
}

util.inherits(PortholeSettingsController, events.EventEmitter);


/**
 * save setting
 */
PortholeSettingsController.prototype.saveSetting = function(req, res) {

    console.log('------- UPDATE PORTHOLE SETTING ---------');

    var data = req.body.params;

    console.log(req.body.params, "PortholeSettingsController attempting update setting" );

    console.log('---------------------');
        
    PortholeSettingsModel.findOne({ user: ObjectId( data.userId ) }, function (err, portholeSettingsModel){

        if ( null !== portholeSettingsModel ) {

            console.log("PortholeSettingsController - found model - updating");
      
             portholeSettingsModel[data.attr] = data.val; 

             console.log("PortholeSettingsController - found model - after ", portholeSettingsModel);
              
              portholeSettingsModel.save(function(err) {  
                            if (err) {
                                console.log("PortholeSettingsController update settings err code: " + err);
                                return res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: portholeSettingsModel,
                                    message: "problem attempting to update settings"
                                });

                            } else {
                                var result = { model: portholeSettingsModel, message: "portholeSettingsModel update settings"}; 
                                res.jsonp(result);
                            }  
                        });
          } else {
                
                console.log("PortholeSettingsController - ERROR! - did not find the portholeSettingsModel since its null");

                res.send('bellwoods/error', {
                                    errors: null,
                                    model: null,
                                    message: "problem attempting update settings since portholeSettingsModel is null!",
                                    action: "saveSetting"
                                });
          }
    
    });


};

/**
 * get settings
 */
PortholeSettingsController.prototype.get = function(req, res) {

    console.log('------- GET PORTHOLE SETTINGS ---------');
    var data = req.body.params;

    console.log("PortholeSettingsController attempting get settings for id: " + data.userId );

    //PortholeSettingsModel.findOne({ user: ObjectId( data.userId ) }, function (err, model){
    PortholeSettingsModel.findOne({ user: ObjectId( data.userId ) }, function (err, model){

        if ( null !== model ) {
      
                var result = { model: model, message: "portholeSettingsModel settings found"}; 
                res.jsonp(result);
              
          } else {
                
                console.log("PortholeSettingsController - ERROR! - did not find the portholeSettingsModel since its null");

                res.send('bellwoods/error', {
                                    errors: null,
                                    model: null,
                                    message: "problem attempting to get portholeSettingsModel since its null!",
                                    action: "get"
                                });
          }
    
    });
};


/**
 * create settings
 */
PortholeSettingsController.prototype.create = function(req, res) {

    console.log('------- CREATE PORTHOLE SETTINGS ---------');

    var data = req.body.params;

    console.log(data, "PortholeSettingsController attempting to create settings" );
        
    PortholeSettingsModel.findOne({ user: ObjectId( data.userId ) }, function (err, model ){

        if ( null === model ) {

             
            /*
             for (var ix in data) {
                portholeSettingsModel[ix] = data[ix]; 
             }
             */

            var portholeSettingsModel = new PortholeSettingsModel(); 
            portholeSettingsModel.user = data.userId;

             console.log("PortholeSettingsController create: ", portholeSettingsModel);
      
            portholeSettingsModel.save(function(err) {  
                if (err) {
                    console.log("PortholeSettingsController create settings err code: " + err);
                    return res.send('bellwoods/error', {
                        errors: err.errors,
                        model: portholeSettingsModel,
                        message: "problem attempting to update settings"
                    });

                } else {
                    
                    console.log("PortholeSettingsController - SUCCESS - created the portholeSettingsModel and sent it to the client");

                    var result = { model: portholeSettingsModel, message: "portholeSettingsModel create settings", action: "create"}; 
                    res.jsonp(result);
                }  
            });


          } else {
                
                console.log("PortholeSettingsController - ERROR! - found the portholeSettingsModel - duplicate!");

                res.send('bellwoods/error', {
                                    errors: null,
                                    model: null,
                                    message: "problem attempting create settings - duplicate",
                                    action: "create"
                                });
          }
    
    });


};








module.exports = PortholeSettingsController; 