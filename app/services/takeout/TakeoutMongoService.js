/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    TakeoutModel = mongoose.model('TakeoutModel'),
    _ = require('underscore');

var tcPath = '../../';

var ForestController = require(tcPath + 'controllers/bellwoods/forest/ForestController'); 
var TreesController = require(tcPath + 'controllers/bellwoods/trees/TreesController');   
var CabinQuestUsersController = require(tcPath + 'controllers/user/CabinQuestUsersController');

var treesController = new TreesController();
var forestController = new ForestController();


/**
 * Find takeout by id
 */
exports.takeout = function(req, res, next, id) {
    TakeoutModel.load(id, function(err, takeoutModel) {
        if (err) return next(err);
        if (!takeoutModel) return next(new Error('Failed to load takeoutModel ' + id));
        req.takeoutModel = takeoutModel;
        next();
    });
};



/**
 * Create a takeout - todo: this signature should really have the req, res arguments 
 */
exports.create = function( fileName, email, files, cabinQuestUserId, forestTitle ) {

    var subscriptionsObj = _.find(files, function(file){ return file.subscriptions; });
    // I want to strip out all the "/"  
    var strippedSubscriptions = subscriptionsObj.subscriptions;

    var followersObj = _.find(files, function(file){ return file.followers; });
    var likedObj = _.find(files, function(file){ return file.liked; });
    var notesObj = _.find(files, function(file){ return file.notes; });
    var sharedObj = _.find(files, function(file){ return file.shared; });
    var sharedByFollowersObj = _.find(files, function(file){ return file.sharedByFollowers; });
    var starredObj = _.find(files, function(file){ return file.starred; });

    console.log("TakeoutMongoService create - calling convertTakeoutSubscriptionsToTrees cabinQuestUserId: " + cabinQuestUserId);
    
    convertTakeoutSubscriptionsToTrees( strippedSubscriptions, cabinQuestUserId, forestTitle );

    return; // don't create TakeoutModels anymore as they are 16MB and I might never get to using the additional parts anyways...

    ///////////////////////////////////////////////////////////////////////////

    var takeoutModel = new TakeoutModel();

    // 1. created
    takeoutModel.created = new Date(); // was using time.Date() - why? do I need the time module?!
    // 2. filename
    takeoutModel.fileName = fileName;
    // 3. email
    takeoutModel.email = email;
    // 4. subscriptions
    takeoutModel.subscriptions = strippedSubscriptions;
    // 5. followers
    takeoutModel.followers = followersObj.followers;
    // 6. liked
    takeoutModel.liked = likedObj.liked;
    // 7. notes
    takeoutModel.notes = notesObj.notes;
    // 8. shared
    takeoutModel.shared = sharedObj.shared; 
    // 9. sharedByFollowers
    takeoutModel.sharedByFollowers = sharedByFollowersObj.sharedByFollowers
    // 10. starred
    takeoutModel.starred = starredObj.starred;

    console.log("TakeoutMongoService about to insert and save...");  


    // only create if its not a duplicate 

    TakeoutModel.findOne({ email: takeoutModel.email }, function (err, model) {

        if (model) {

             console.log("TakeoutMongoService create already added - duplicate! ");

                // I need response here to tell the client not to proceed with achievements since this is a duplicate!
                
                 // no res passed in!
                 /*
                return res.send('bellwoods/upload', {
                   model: model,
                   message: "duplicate tree"
                });
                */

        } else {

            takeoutModel.save(function(err) {
                if (err) {

                    switch (err.code) {
                        case 11000:
                        case 11001:
                            message = 'Takeout already exists'; // redundant?! not working?!
                            break;
                        default:
                            message = 'Please fill all the required fields';
                    }
                    
                    console.log(err, "TakeoutMongoService error message: " + message);        

                    // no res passed in!
                    //var data = { model: {}, message: "Problem creating takeout - error code: " + err.code}
                    //res.jsonp(data);

                     

                } else {
                    
                    console.log("TakeoutMongoService success");     

                    // no res passed in!
                    //var data = { model: takeoutModel, message: "new takeout created"}
                    //res.jsonp(data);
                }
            });

        }

    });    

};


var convertSubscriptionsStrToArray = function( subscriptionsStr ){

    var aSubscriptions = [];

    var headerObj = JSON.parse(subscriptionsStr);

    var aSubscriptions = headerObj.opml.body.outline; 

    return aSubscriptions; 

}; 

var convertTakeoutSubscriptionsToTrees = function( subscriptionsStr, cabinQuestUserId, forestTitle ) {

    var aSubscriptions = convertSubscriptionsStrToArray(subscriptionsStr);

    //treesController.createTreesFromTakeout(aSubscriptions, cabinQuestUserId);
   // forestController.createForestFromTakeout(aSubscriptions, cabinQuestUserId );
   forestController.addTakeoutTreesToForest(aSubscriptions, cabinQuestUserId, forestTitle);
}



/**
 * Send User
 */
exports.getTakeout = function(req, res, next) {

    var cabinQuestUser = req.session.cabinQuestUser;
    console.log(cabinQuestUser, "TakeoutMongoService - getTakeout");

    
    TakeoutModel
        .findOne({
            id: cabinQuestUser.id
        })
        .exec(function(err, takeout) {
            if (err) return next(err);
            
            if ( null === takeout ) {
                
                console.log("TakeoutMongoService - didn't find the takeout: " + takeout);
                
                //return next ( )
                console.log("TakeoutMongoService - takeout is null - so we're returning a takeout found message");

                var resultObj = { model: [], message: "no takeout found" }; 
                      
                return res.jsonp( resultObj );

            }

            if (takeout) {

                console.log("TakeoutMongoService - found it and sent it to client");
                takeout.subscriptions = convertSubscriptionsStrToArray( takeout.subscriptions );

                var data = { model: takeout, message: "takeout found" }; 

                return res.jsonp( data );
            }

        });
};

exports.getTakeoutInfo = function(req, res, next) {

    var cabinQuestUser = req.session.cabinQuestUser;
    console.log(cabinQuestUser, "TakeoutMongoService - getTakeoutInfo");
    console.log(req.session, "TakeoutMongoService - getTakeoutInfo");

    // a newly created user would have no takeout info
    
    if ( null !== cabinQuestUser ) { 

        TakeoutModel
            .findOne({
                id: cabinQuestUser.id
            }, "subscriptions")
            .exec(function(err, takeout) {
                if (err) return next(err);
                
                if ( null === takeout ) {
                    
                    console.log("TakeoutMongoService - didn't find the takeout: " + takeout);
                    
                    //return next ( )
                    console.log("TakeoutMongoService - trees don't exist so we need to create it!");

                    var data = { model: [], message: "no takeout found" }; 
                          
                    return res.jsonp( data );

                }

                if (takeout) {

                    console.log("TakeoutMongoService - found it and sent it to client");

                    takeout.subscriptions = convertSubscriptionsStrToArray( takeout.subscriptions );

                    var data = { model: takeout, message: "takeout found", totalSubscriptions:  takeout.subscriptions.length }; 

                    return res.jsonp( data );
                }

            });
    } else {
        var resultObj = { model: [], message: "TakeoutMongoService - getTakeoutInfo - cabinQuestUser is null" }; 
        return res.jsonp( resultObj );
    }
};

/**
 * Update a Takeout record ??? not sure we need this...probably not 
 */
/*
exports.update = function(req, res) {
    var takeoutModel = req.takeoutModel;

    takeoutModel = _.extend(takeoutModel, req.body);

    takeoutModel.save(function(err) {
        res.jsonp(takeoutModel);
    });
};
*/

/**
 * Delete a Takeout record
 */
 /*
exports.destroy = function(req, res) {
    var takeoutModel = req.takeoutModel;

    takeoutModel.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(takeoutModel);
        }
    });
};
*/

/**
 * Show a Takeout record
 */
exports.show = function(req, res) {
    res.jsonp(req.takeoutModel);
};

/**
 * List of Takeout records
 */
exports.all = function(req, res) {
    TakeoutModel.find().sort('-created').populate('user', 'name username').exec(function(err, takeouts) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(takeouts);
        }
    });
};
