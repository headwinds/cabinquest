

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId; 

var TreeModel = mongoose.model('TreeModel'); 
var ForestModel = mongoose.model('ForestModel'); 

var util = require("util");
var events = require("events");
var _ = require("lodash");

var ForestController = function() {
    events.EventEmitter.call(this);
}

util.inherits(ForestController, events.EventEmitter);

ForestController.prototype.createForestFromTakeout = function( takeoutSubscriptions, cabinQuestUserId ) {

    console.log("ForestController - createTreesFromTakeout - total: " + takeoutSubscriptions.length + " for cabinQuestUserId: " + cabinQuestUserId)

    var trees = [];

    _.each(takeoutSubscriptions, function(subscription){

        var treeObj = { user: cabinQuestUserId,
                        text: subscription.text,
                        title: subscription.title,
                        type: subscription.type,
                        xmlUrl: subscription.xmlUrl,
                        htmlUrl: subscription.htmlUrl,
                        origin: "takeout",
                        rating: 0, 
                        frequency: 0,
                        shared: 0,
                        bFeedSelected: false,
                        tags: [],
                    }

        var treeModel = new TreeModel(treeObj);
        trees.push(treeModel);
          
           
        treeModel.save(function(err) {  
            if (err) {
                console.log("ForestController createTreesFromTakeout err code: " + err);
                
            } else {
                //var result = { model: treeModel, message: "new tree added"}; 
                //res.jsonp(result);
                //console.log("ForestController createTreesFromTakeout success!");
            }  
        });
       

    });

    // created & lastReviewed add automatically

    var forestModel = new ForestModel();

    forestModel.user = cabinQuestUserId;
    
    var treeIds = [];
    // get the tree ids 
    _.each(trees, function(treeModel){
        treeIds.push(treeModel._id); 
    });

    forestModel.trees = treeIds;
    forestModel.title = "bellwoods";
    
    forestModel.save(function(err) {  
            if (err) {
                console.log("ForestController createForestFromTakeout err code: " + err);
                
            } else {
                //var result = { model: treeModel, message: "new tree added"}; 
                //res.jsonp(result);
                console.log("ForestController createForestFromTakeout success!");
            }  
        });

}

ForestController.prototype.addTakeoutTreesToForest = function( takeoutSubscriptions, cabinQuestUserId, forestTitle ) {

    console.log("TreesController - addTakeoutTreesToForest - total: " + takeoutSubscriptions.length + " for cabinQuestUserId: " + cabinQuestUserId)

    var trees = [];

    _.each(takeoutSubscriptions, function(subscription){

        var treeObj = { user: cabinQuestUserId,
                        text: subscription.text,
                        title: subscription.title,
                        type: subscription.type,
                        xmlUrl: subscription.xmlUrl,
                        htmlUrl: subscription.htmlUrl,
                        origin: "takeout",
                        rating: 0, 
                        frequency: 0,
                        shared: 0,
                        bFeedSelected: false,
                        tags: [],
                    }

        var treeModel = new TreeModel(treeObj);
        trees.push(treeModel);
          
           
        treeModel.save(function(err) {  
            if (err) {
                console.log("ForestController createTreesFromTakeout err code: " + err);
                
            } else {
                //var result = { model: treeModel, message: "new tree added"}; 
                //res.jsonp(result);
                //console.log("ForestController createTreesFromTakeout success!");
            }  
        });
       

    });

    ForestModel.findOne({ user: ObjectId( cabinQuestUserId ), title: forestTitle.toLowerCase() }, function (err, forestModel){

        if ( null !== forestModel ) {

            _.each( trees, function( treeModel ) {

                forestModel.trees.push( treeModel._id ); 

            });


            forestModel.save(function(err) {  
                if (err) {
                    console.log("ForestController createForestFromTakeout err code: " + err);
                    
                } else {
                    //var result = { model: treeModel, message: "new tree added"}; 
                    //res.jsonp(result);
                    console.log("ForestController createForestFromTakeout success!");
                }  
            });

            



        } else {

        }
    }); 
}

/**
 * Find article by id
 */
ForestController.prototype.forest = function(req, res, next, id) {
    ForestModel.load(id, function(err, forestModel) {
        if (err) return next(err);
        if (!forestModel) return next(new Error('ForestController - Failed to load forest ' + id));
        req.forestModel = forestModel;
        next();
    });
};



/**
 * Create tree
 */
ForestController.prototype.create = function(req, res, next) {

    var data = req.body.params;

    var userId = data.userId;
    var title = data.title.toLowerCase();
    var trees = data.trees;

    var treeIds = _.pluck(trees, "_id");

    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log("ForestController create");
    

    ForestModel.findOne({ user: ObjectId( userId ), title: title},  function (err, forestModel) {
        
        if (err) {
            console.log("ForestController create err code: " + err);
                return res.send('bellwoods/error', {
                   errors: err.errors,
                   model: forestModel
                });

        } else {

            // no error but did I find one?! 

             console.log("ForestController create no errors but did I find one? " + forestModel);

            if (null !== forestModel) {
                
                console.log("ForestController create found duplicate! ");
                
                return res.send('bellwoods/forest/duplicate', {
                   model: forestModel,
                   message: "duplicate tree"
                });

            } else {

                var forestModel = new ForestModel();

                forestModel.user = userId;
                forestModel.trees = treeIds;
                forestModel.title = title;
                
                forestModel.save(function(err) {  
                    if (err) {
                        console.log("ForestController create err code: " + err);
                        return res.send('bellwoods/error', {
                            errors: err.errors,
                            model: forestModel
                        });

                    } else {
                        var result = { model: forestModel, message: "new forest added"}; 
                        res.jsonp(result);
                    }  
                });
            };        
        };    
    });
                 
};





/**
 * Update a forest
 */
ForestController.prototype.update = function(req, res) {

    console.log('---------------------');

    var data = req.body.params;

    var userId = data.userId;
    var title = data.titleStr.toLowerCase();
    var trees = data.trees;

    var treeIds = _.pluck(trees, "_id");

    console.log(req.body.params, "ForestController attempting to update visit this model with id:  " + userId );

    console.log('---------------------');
        
    ForestModel.findOne({ user: ObjectId( userId ), title: title}, 'user title', function (err, forestModel){

        if ( null !== forestModel ) {
      
              forestModel.lastVisit = new Date();
              forestModel.visits += 1;
              forestModel.trees = treeIds;
              
              forestModel.save(function(err) {  
                            if (err) {
                                console.log("ForestController update err code: " + err);
                                return res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: forestModel,
                                    message: "problem attempting to update the forestModel visit"
                                });

                            } else {
                                var result = { model: forestModel, message: "forestModel updated visit"}; 
                                res.jsonp(result);
                            }  
                        });
          } else {
                
                console.log("ForestController - ERROR! - did not find the forestModel since its null");

                res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: forestModel,
                                    message: "problem attempting to update the forestModel since it did not find it"
                                });
          }
    
    });


};


/**
 * Update a forest
 */
ForestController.prototype.addTreeId = function(req, res) {

    console.log('---------------------');

    var data = req.body.params;

    var userId = data.userId;
    var treeId = data.treeId;
    var title = data.title;

    console.log(req.body.params, "ForestController attempting to addTreeId with id:  " + userId );

    console.log('---------------------');
        
    ForestModel.findOne({ user: ObjectId( userId ), title: title}, function (err, forestModel){

        if ( null !== forestModel ) {
      
              forestModel.trees.push(treeId);
              
              forestModel.save(function(err) {  
                            if (err) {
                                console.log("ForestController update err code: " + err);
                                return res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: forestModel,
                                    message: "problem attempting to addTreeId"
                                });

                            } else {
                                var result = { model: forestModel, message: "forestModel addTreeId success"}; 
                                res.jsonp(result);
                            }  
                        });
          } else {
                
                console.log("ForestController - ERROR! - did not find the forestModel since its null");

                res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: forestModel,
                                    message: "problem attempting to addTreeId since it did not find it"
                                });
          }
    
    });


};

/**
 * Delete a forest
 */
ForestController.prototype.delete = function(req, res) {

    console.log('---------------------');

    var data = req.body.params;

    var userId = data.userId;
    var title = data.titleStr.toLowerCase();

    console.log(req.body.params, "ForestController attempting to delete this model with id:  " + userId );

    console.log('---------------------');

    ForestModel.remove({ user: ObjectId( userId ), title: title}, function(err) {
        
        if (!err) {
                return res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: forestModel,
                                    message: "problem attempting to update the forestModel visit"
                                });
        }
        else {
            var result = { message: "forestModel successfully deleted"}; 
            return res.jsonp(result);
        }

    });

};

/**
 * Send User
 */
ForestController.prototype.getForestByUserId = function(req, res) {

    var cabinQuestUser = req.session.cabinQuestUser;
    
    var data = req.body.params;

    console.log("ForestController - getForestByUserId - data: ", data);


    var userId = data.userId; //(null !== cabinQuestUser) ? cabinQuestUser.id : data.userId;
    var title = data.title; //( undefined !== data ) ? data.title : "bellwoods";

    //var treesTotal = req.body.params.treesTotal;
    //var email = req.body.params.email;
    
    ForestModel
        .findOne({
            user: ObjectId( userId ), 
            title: title
        })
        .populate("trees")
        .exec(function(err, forestModel) {
            
            if (err) {

                return res.send('bellwoods/error', {
                                    errors: err.errors,
                                    model: forestModel,
                                    message: "problem attempting to update the forestModel visit"
                                });
            }
            
            if ( null === forestModel ) {
                
                console.log("ForestController - didn't find the forest: " + forestModel);
                
                //return next ( )
                console.log("ForestController - forest doesn't exist so encourage the user to create one");

                var resultObj = { model: null, message: "no forest found", action: "getForestByUserId" }; 
                      
                return res.jsonp( resultObj );

            } else {

                console.log("ForestController - found it and sent it to client");

                var resultObj = { model: forestModel, message: "found forestModel", action: "getForestByUserId" }; 

                return res.jsonp( resultObj );
            }

        });
};

ForestController.prototype.sayHi = function(req, res, next) {
    console.log("TreesController - sayHi");

    res.send( { info: "TreesController says hi" } );
};

ForestController.prototype.getForestInfo = function(req, res, next) {

    var cabinQuestUser = req.session.cabinQuestUser;
    console.log(cabinQuestUser, "ForestController - getForestInfo");
    

    // a newly created user would have no takeout info
    
    if ( null !== cabinQuestUser ) { 

        ForestModel
            .findOne({
                id: cabinQuestUser.id
            }, "trees")
            .exec(function(err, forestModel) {
                if (err) return next(err);
                
                if ( null === forestModel ) {
                    
                    console.log("ForestController - didn't find any trees from the forest");
                    
                    var data = { model: [], message: "no forest found" }; 
                          
                    return res.jsonp( data );

                }

                if (forestModel) {

                    console.log("ForestController - found it and sent it to client");

                    var data = { model: forestModel, message: "forest found", totalTrees:  forestModel.trees.length }; 

                    return res.jsonp( data );
                }

            });
    } else {
        var resultObj = { model: [], message: "ForestController - getForestInfo - cabinQuestUser is null" }; 
        return res.jsonp( resultObj );
    }
};


module.exports = ForestController; 