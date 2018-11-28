

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId; 
var TreeModel = mongoose.model('TreeModel'); 
var FeedModel = mongoose.model('FeedModel'); 
var util = require("util");
var events = require("events");
var _ = require("lodash");

var FeedController = function() {
    events.EventEmitter.call(this);
}

util.inherits(FeedController, events.EventEmitter);


/**
 * Create tree
 */
FeedController.prototype.create = function(req, res, next) {

    var data = req.body.params;

     console.log('------- FEED CREATE ---------');

    console.log(data);

    FeedModel.findOne({ user: ObjectId( data.user ), title: data.title},  function (err, model) {
        
        if (err) {
            console.log("FeedController create err code: " + err);
                return res.send('bellwoods/error', {
                   errors: err.errors,
                   model: model
                });

        } else {

            // no error but did I find one?! 

             console.log("FeedController create no errors but did I find one? " + model);

            if (null !== model) {
                console.log("FeedController create found duplicate! ");
                
                return res.send('bellwoods/feed/duplicate', {
                   model: model,
                   message: "duplicate feed"
                });

            } else {

                var feedModel = new FeedModel();

                feedModel.title = data.feedTitle;
                feedModel.user = data.userId;
                feedModel.allTrees = data.allTrees;
                feedModel.activeTrees = data.activeTrees;

                 console.log("FeedController new feed created and saved");
                
                feedModel.save(function(err) {  
                    if (err) {
                        console.log("FeedController create err code: " + err);
                        return res.send('bellwoods/error', {
                            errors: err.errors,
                            model: feedModel
                        });

                    } else {
                        var result = { model: feedModel, message: "new feed created"}; 
                        res.jsonp(result);
                    }  
                });
            };        
        };    
    });
                 
};


/**
 * add tree to feed
 */
FeedController.prototype.add = function(req, res) {

    console.log('------- ADD TREE TO FEED ---------');

    var data = req.body.params;

    var userId = data.userId;
    var treeId = data.treeId;
    var feedTitle = data.feedTitle;

    console.log(req.body.params, "FeedController attempting to add tree to this feed with treeId:  " + treeId );

    console.log('---------------------');
        
    FeedModel.findOne({ user: ObjectId( userId ), title: feedTitle }, function (err, feedModel){

        if ( null !== feedModel ) {
      
              feedModel.allTrees = data.allTrees;
              
              feedModel.save(function(err) {  
                            if (err) {
                                console.log("FeedController add tree to feed err code: " + err);
                                return res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: feedModel,
                                    message: "problem attempting to add tree to the feed"
                                });

                            } else {
                                var result = { model: feedModel, message: "feedModel updated visit"}; 
                                res.jsonp(result);
                            }  
                        });
          } else {
                
                console.log("FeedController - ERROR! - did not find the feedModel since its null");

                res.send('bellwoods/error', {
                                    errors: null,
                                    model: null,
                                    message: "problem attempting to add tree to the feedModel since it did not find it",
                                    action: "add"
                                });
          }
    
    });


};

/**
 * update the active trees in the feed
 */
FeedController.prototype.update = function(req, res) {

    console.log('------- UPDATE FEED  ---------');

    var data = req.body.params;

    var userId = data.userId;
    var feedTitle = data.feedTitle;

    //var allTrees = ( typeof data.allTrees !== "undefined" ) ? data.allTrees : null; 

    console.log("FeedController attempting to update feed with tree ids length " +  data.allTrees.length );

        
    FeedModel.findOne({ user: ObjectId( userId ), title: feedTitle }, function (err, feedModel){

        if ( null !== feedModel ) {

            console.log("FeedController - updateWithTreeIds - feed found so updating it");
      
              //_.each(treeIds, function(treeId){
                // feedModel.trees.push(treeId);
              //}); 
       
            var allTreeIds = _.pluck(data.allTrees, "_id" );
            feedModel.allTrees = allTreeIds;

            feedModel.activeTrees = data.activeTrees;
            
              
            feedModel.save(function(err, model) {  
                if (err) {
                        console.log("FeedController update feed with tree ids err code: " + err);
                        return res.send('bellwoods/error', {
                            errors: err.errors,
                            model: null,
                            message: "problem attempting to update feed with tree ids"
                        });

                    } else {
                        var result = { model: model, message: "feedModel updated feed with new tree ids", action: "update"}; 
                        return res.jsonp(result);
                    }  
                });
          }
    });
};


/**
 * remove tree from feed
 */
FeedController.prototype.remove = function(req, res) {

    console.log('------- REMOVE TREE FROM FEED ---------');

    var data = req.body.params;

    var userId = data.userId;
    var treeId = data.treeId;
    var feedTitle = data.feedTitle;

    console.log("FeedController attempting to remove tree this feed with treeId:  " + treeId );
       
    FeedModel.findOne({ user: ObjectId( userId ), title: feedTitle }, function (err, feedModel){

        if ( null !== feedModel ) {
      
               var currentList = feedModel.trees;
               var newList = _.reject(currentList, function(curTreeId){ return curTreeId === treeId; });

              feedModel.trees = newList;

              feedModel.save(function(err) {  
                            if (err) {
                                console.log("FeedController remove tree from feed err code: " + err);
                                return res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: feedModel,
                                    message: "problem attempting to remove the tree to the feed"
                                });

                            } else {
                    
                                var result = { model: feedModel, message: "feedModel remove visit"}; 
                                return res.jsonp(result);
                            }  
                        });
          } else {
                
                console.log("FeedController - ERROR! - did not find the feedModel since its null");

                return res.send('bellwoods/error', {
                                    errors: null,
                                    model: null,
                                    message: "problem attempting to remove tree to the feedModel since it did not find it",
                                    action: "remove"
                                });
          }
    
    });


};

/**
 * Send User
 */
FeedController.prototype.getFeed = function(req, res, next) {

     console.log('------- GET FEED ---------');

    //var cabinQuestUser = req.session.cabinQuestUser;
    var data = req.body.params;

    console.log("FeedController - getFeedByUserId - data: ", data);

    //var treesTotal = req.body.params.treesTotal;
    //var email = req.body.params.email;

    var userId = data.userId;
    var feedTitle = data.feedTitle;
    
    FeedModel.findOne({ user: ObjectId( userId ), title: feedTitle })
            .populate('allTrees')
            .exec( function(err, feedModel) {

                if ( null !== feedModel ) {

                    console.log("Found FeedModel and populated trees");
                        
                    var result = { model: feedModel, message: "feedModel found!", action: "get"}; 
                    return res.jsonp(result);

                  } else {
                        
                    console.log("FeedController - ERROR! - did not get the feedModel since its null");

                    return res.send('bellwoods/error', {
                                        errors: null,
                                        model: null,
                                        message: "problem attempting to get the feed model",
                                        action: "get"
                                    });
                  }

    });
};



module.exports = FeedController; 