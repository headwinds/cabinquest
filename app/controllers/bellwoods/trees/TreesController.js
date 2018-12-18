/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const TreeModel = mongoose.model('TreeModel');
const ForestModel = mongoose.model('ForestModel');
const FeedModel = mongoose.model('FeedModel');

const util = require('util');
const events = require('events');
const _ = require('lodash');

//const Iconv = require('iconv').Iconv;
const zlib = require('zlib');

const FeedParser = require('feedparser');
const request = require('request');

const TreesController = function() {
    console.log('TreesController init');

    events.EventEmitter.call(this);
};

util.inherits(TreesController, events.EventEmitter);

const log = true;

TreesController.prototype.createTreesFromTakeout = function(
    takeoutSubscriptions,
    cabinQuestUserId
) {
    if (log)
        console.log(
            `TreesController - createTreesFromTakeout - total: ${
                takeoutSubscriptions.length
            } for cabinQuestUserId: ${cabinQuestUserId}`
        );

    _.each(takeoutSubscriptions, subscription => {
        const treeModel = new TreeModel();

        treeModel.user = cabinQuestUserId;
        treeModel.text = subscription.text;
        treeModel.title = subscription.title;
        treeModel.type = subscription.type;
        treeModel.xmlUrl = subscription.xmlUrl;
        treeModel.htmlUrl = subscription.htmlUrl;
        treeModel.rating = 0;
        treeModel.frequency = 0;
        treeModel.shared = 0;
        treeModel.tags = [];

        treeModel.save(err => {
            if (err) {
                if (log)
                    console.log(
                        `TreesController createTreesFromTakeout err code: ${err}`
                    );
            } else {
                // var result = { model: treeModel, message: "new tree added"};
                // res.jsonp(result);
                // console.log("TreesController createTreesFromTakeout success!");
            }
        });
    });
};

/**
 * Create tree
 */
TreesController.prototype.create = function(req, res, next) {
    console.log('TreesController create tree - req.params: ', req.body);
    // console.log("TreesController create tree - req.body.params: ", req.body.params);
    // req.body.params

    const data = req.body.params;
    const tree = data.newTree;
    const cabinQuestUser = data.cabinQuestUser;

    console.log('TreesController create tree - tree: ', tree);
    console.log(
        'TreesController create tree - cabinQuestUser: ',
        cabinQuestUser
    );

    const treeObj = {
        userId: cabinQuestUser._id,
        title: tree.title,
        xmlUrl: tree.xmlUrl,
        text: tree.text,
        type: tree.type,
        category: tree.category,
        lastBranchTitles: ['hey', 'goldfish'],
        htmlUrl: tree.htmlUrl,
        rating: 5,
        frequency: 1,
        shared: false,
        tags: tree.tags
    };

    // treeObj.userId = 1;

    TreeModel.findOne({ xmlUrl: treeObj.xmlUrl }, (err, treeModel) => {
        if (err) {
            console.log(`TreesController create err code: ${err}`);
            return res.send('bellwoods/error', {
                errors: err.errors,
                model: treeModel
            });
        } else {
            if (treeModel !== null) {
                console.log('TreesController found! ');

                const result = {
                    model: treeModel,
                    message: 'error: duplicate tree!',
                    userId: treeObj.userId
                };
                return res.jsonp(result);
            } else {
                console.log(
                    'TreesController create - about to save new treeObj: ',
                    treeObj
                );

                var treeModel = new TreeModel();

                treeModel.user = treeObj.userId;
                treeModel.origin = treeObj.origin;
                treeModel.lastBranchTitles = treeObj.lastBranchTitles;
                treeModel.lastReviewedBranchTitles =
                    treeObj.lastReviewedBranchTitles;
                treeModel.text = treeObj.text;
                treeModel.title = treeObj.title;
                treeModel.type = treeObj.type;
                treeModel.category = treeObj.category.toLowerCase();
                treeModel.xmlUrl = treeObj.xmlUrl;
                treeModel.htmlUrl = treeObj.htmlUrl;
                treeModel.rating = treeObj.rating;
                treeModel.frequency = treeObj.frequency;
                treeModel.shared = treeObj.shared;
                treeModel.tags = treeObj.tags;

                treeModel.save(err => {
                    if (err) {
                        console.log(`TreesController create err code: ${err}`);
                        return res.send('bellwoods/error', {
                            errors: err.errors,
                            model: treeModel,
                            message:
                                'problem attempting to create the treemodel'
                        });
                    } else {
                        console.log(
                            'TreesController created saved successfully'
                        );
                        const result = {
                            model: treeModel,
                            message: 'new tree added',
                            userId: treeObj.userId
                        };
                        return res.jsonp(result);
                    }
                });
            }
        }
    });
};

/**
 * Update a tree
 */
TreesController.prototype.update = function(req, res) {
    if (log) console.log('------ TREE UPDATE ------');

    const treeObj = req.body.params;

    if (log)
        console.log(
            `TreesController attempting to update this model with id:  ${
                treeObj._id
            }`
        );

    TreeModel.findOne({ _id: ObjectId(treeObj._id) }, (err, treeModel) => {
        if (treeModel !== null) {
            treeModel.bFeedSelected = treeObj.bFeedSelected;

            treeModel.save(err => {
                if (err) {
                    if (log)
                        console.log(`TreesController update err code: ${err}`);
                    return res.send('bellwoods/error', {
                        errors: err.errors,
                        model: treeModel,
                        message: 'problem attempting to update the treemodel'
                    });
                } else {
                    const result = {
                        model: treeModel,
                        message: 'tree updated'
                    };
                    res.jsonp(result);
                }
            });
        } else {
            if (log)
                console.log(
                    'TreesController - ERROR! - did not find the treeModel since its null'
                );

            res.send('bellwoods/error', {
                errors: null,
                model: null,
                message:
                    'problem attempting to update the treeModel since it did not find it'
            });
        }
    });
};

/**
 * Update a tree category
 */
TreesController.prototype.updateCategory = function(req, res) {
    if (log) console.log('---------------------');

    const treeObj = req.body.params;

    if (log)
        console.log(
            `TreesController attempting to update category this model with id:  ${
                treeObj._id
            }`
        );

    if (log) console.log('---------------------');

    TreeModel.findOne({ _id: ObjectId(treeObj._id) }, (err, treeModel) => {
        if (treeModel !== null) {
            treeModel.category = treeObj.category;

            treeModel.save(err => {
                if (err) {
                    if (log)
                        console.log(`TreesController update err code: ${err}`);
                    return res.send('bellwoods/error', {
                        errors: err.errors,
                        model: treeModel,
                        message:
                            'problem attempting to update the treemodel category'
                    });
                } else {
                    const result = {
                        model: treeModel,
                        message: 'tree updated category'
                    };
                    res.jsonp(result);
                }
            });
        } else {
            if (log)
                console.log(
                    'TreesController - ERROR! - did not find the treeModel since its null'
                );

            res.send('bellwoods/error', {
                errors: null,
                model: null,
                message:
                    'problem attempting to update the treeModel since it did not find it'
            });
        }
    });
};

/**
 * Update a tree visit
 */
TreesController.prototype.updateVisit = function(req, res) {
    if (log) console.log('---------------------');

    const treeObj = req.body.params;

    if (log)
        console.log(
            treeObj,
            `TreesController attempting to update visit this model with id:  ${
                treeObj._id
            }`
        );

    if (log) console.log('---------------------');

    TreeModel.findOne({ _id: ObjectId(treeObj._id) }, (err, treeModel) => {
        if (treeModel !== null) {
            treeModel.lastVisit = new Date();
            treeModel.visits++;

            treeModel.bFeedSelected =
                typeof treeObj.bFeedSelected !== 'undefined'
                    ? treeObj.bFeedSelected
                    : treeModel.bFeedSelected;

            treeModel.save(err => {
                if (err) {
                    if (log)
                        console.log(`TreesController update err code: ${err}`);
                    return res.send('bellwoods/error', {
                        errors: err.errors,
                        model: treeModel,
                        message:
                            'problem attempting to update the treemodel visit'
                    });
                } else {
                    const result = {
                        model: treeModel,
                        message: 'tree updated visit'
                    };
                    res.jsonp(result);
                }
            });
        } else {
            if (log)
                console.log(
                    'TreesController - ERROR! - did not find the treeModel since its null'
                );

            res.send('bellwoods/error', {
                errors: null,
                model: null,
                message:
                    'problem attempting to update the treeModel since it did not find it'
            });
        }
    });
};

/**
 * Update a tree position
 */
TreesController.prototype.updatePosition = function(req, res) {
    if (log) console.log('------- TREE UPDATE POSITION --------');

    const treeObj = req.body.params;

    const bCancelResponse =
        typeof treeObj.bCancelResponse !== 'undefined'
            ? treeObj.bCancelResponse
            : false;

    if (log)
        console.log(
            `TreesController attempting to updatePosition this model with id:  ${
                treeObj._id
            }`
        );

    TreeModel.findOne({ _id: ObjectId(treeObj._id) }, (err, treeModel) => {
        if (treeModel !== null) {
            treeModel.x = treeObj.x;
            treeModel.y = treeObj.y;

            treeModel.save(err => {
                if (err) {
                    if (log)
                        console.log(`TreesController update err code: ${err}`);
                    return res.send('bellwoods/error', {
                        errors: err.errors,
                        model: treeModel,
                        message:
                            'problem attempting to update the treemodel position'
                    });
                } else {
                    const result = {
                        model: treeModel,
                        message: 'tree updated position'
                    };
                    res.jsonp(result);
                }
            });
        } else {
            if (log)
                console.log(
                    'TreesController - ERROR! - did not find the treeModel since its null'
                );

            res.send('bellwoods/error', {
                errors: null,
                model: null,
                message:
                    'problem attempting to update the treeModel since it did not find it'
            });
        }
    });
};

/**
 * Update a tree position
 */
TreesController.prototype.updatePositions = function(req, res) {
    const data = req.body.params;

    if (log) console.log('------- TREE UPDATE POSITIONS --------');

    _.each(data.updatedTreePositionModels, tree => {
        TreeModel.findOne({ _id: ObjectId(tree._id) }, (err, treeModel) => {
            if (treeModel !== null) {
                treeModel.x = tree.x;
                treeModel.y = tree.y;

                treeModel.save(err => {
                    if (err) {
                        if (log)
                            console.log(
                                `TreesController update err code: ${err}`
                            );
                        return res.send('bellwoods/error', {
                            errors: err.errors,
                            model: treeModel,
                            message:
                                'problem attempting to update the treemodel position'
                        });
                    } else {
                        if (log)
                            console.log(
                                `TreesController tree updated: ${treeModel.x}`
                            );
                    }
                });
            } else {
                if (log)
                    console.log(
                        'TreesController - ERROR! - did not find the treeModel since its null'
                    );

                res.send('bellwoods/error', {
                    errors: null,
                    model: null,
                    message:
                        'problem attempting to update the treeModel since it did not find it'
                });
            }
        });
    });

    const result = { message: 'tree positions updated' };
    res.jsonp(result);
};

/**
 * Update a tree branches
 */
TreesController.prototype.updateBranches = function(req, res) {
    if (log) console.log('---------------------');

    const treeObj = req.body.params;

    if (log)
        console.log(
            req.body.params,
            `\n\n TreesController attempting to update visit this model with title:  ${
                treeObj.title
            }`
        );

    if (log) console.log('---------------------');

    TreeModel.findOne(
        { user: treeObj.userId, title: treeObj.title },
        (err, treeModel) => {
            if (treeModel !== null) {
                treeModel.lastVisit = new Date();
                treeModel.visits++;
                treeModel.lastReviewedBranchTitles =
                    treeObj.lastReviewedBranchTitles;
                treeModel.lastBranchTitles = treeObj.lastBranchTitles;

                if (log) console.log(treeModel);
                if (log) console.log('--------------------------');
                if (log)
                    console.log(
                        `TreesController updateBranches treeObj.title: ${
                            treeObj.title
                        }`
                    );

                treeModel.save(err => {
                    if (err) {
                        if (log)
                            console.log(
                                `TreesController update err code: ${err}`
                            );
                        return res.send('bellwoods/error', {
                            errors: err.errors,
                            model: treeModel,
                            message:
                                'problem attempting to update the treemodel branches'
                        });
                    } else {
                        const result = {
                            model: treeModel,
                            message: 'tree branches updated'
                        };
                        res.jsonp(result);
                    }
                });
            } else {
                if (log)
                    console.log(
                        'TreesController - ERROR! - did not find the treeModel since its null'
                    );

                // create( req, res );
                const result = {
                    model: treeModel,
                    message: 'need to create it'
                };
                res.jsonp(result);
            }
        }
    );
};

/**
 * Update a tree
 */
TreesController.prototype.updateLatestImage = function(req, res) {
    if (log) console.log('---------------------');

    const branchUpdateObj = req.body.params;

    if (log)
        console.log(
            branchUpdateObj,
            `TreesController attempting to update updateLatestImage this model with id:  ${
                branchUpdateObj.treeId
            }`
        );

    if (log) console.log('---------------------');

    TreeModel.findOne(
        { _id: ObjectId(branchUpdateObj.treeId) },
        (err, treeModel) => {
            if (treeModel !== null) {
                treeModel.latestImage = branchUpdateObj.latestImage;

                treeModel.save(err => {
                    if (err) {
                        if (log)
                            console.log(
                                `TreesController update err code: ${err}`
                            );
                        return res.send('bellwoods/error', {
                            errors: err.errors,
                            model: treeModel,
                            message:
                                'problem attempting to update the treemodel latestImageUrl'
                        });
                    } else {
                        const result = {
                            model: treeModel,
                            message: 'tree updated latestImageUrl'
                        };
                        res.jsonp(result);
                    }
                });
            } else {
                if (log)
                    console.log(
                        'TreesController - ERROR! - did not find the treeModel since its null'
                    );

                res.send('bellwoods/error', {
                    errors: null,
                    model: null,
                    message:
                        'problem attempting to update the treeModel since it did not find it'
                });
            }
        }
    );
};

const getTree = function(req, res, feedPath) {
    // var user = req.session.cabinQuestUser; // vs _id
    var req = request(feedPath, { timeout: 10000, pool: false });

    req.setMaxListeners(50);

    // Some feeds do not respond without user-agent and accept headers.
    req.setHeader(
        'user-agent',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36'
    );
    req.setHeader('accept', 'text/html,application/xhtml+xml');

    let feedparser = new FeedParser();

    const branches = [];

    if (log) console.log(`TreesController loading feed: ${feedPath}`);

    function maybeDecompress(res, encoding) {
        let decompress;

        if (encoding.match(/\bdeflate\b/)) {
            decompress = zlib.createInflate();
        } else if (encoding.match(/\bgzip\b/)) {
            decompress = zlib.createGunzip();
        }

        return decompress ? res.pipe(decompress) : res;
    }

    function maybeTranslate(res, charset) {
      /*
        let iconv;
        // Use iconv if its not utf8 already.
        if (!iconv && charset && !/utf-*8/i.test(charset)) {
            try {
                iconv = new Iconv(charset, 'utf-8');
                if (log)
                    console.log(
                        'TreesController - Converting from charset %s to utf-8',
                        charset
                    );
                iconv.on('error', done);
                // If we're using iconv, stream will be the output of iconv
                // otherwise it will remain the output of request
                res = res.pipe(iconv);
            } catch (err) {
                res.emit('error', err);
            }
        }*/
        return res;
    }

    function getParams(str) {
        const params = str.split(';').reduce((params, param) => {
            const parts = param.split('=').map(part => {
                return part.trim();
            });
            if (parts.length === 2) {
                params[parts[0]] = parts[1];
            }
            return params;
        }, {});
        return params;
    }

    function done(err) {
        feedparser = null;
        feedparser = undefined;

        if (err) {
            if (log) console.log('TreesController - FEED PARSER ERROR!!!! ---');
            if (log) console.log(err, err.stack);
            // return process.exit(1);

            return res.jsonp({ branches: null, error: err });
        }

        // process.exit();
        return res.jsonp({ branches, error: null });
    }

    // Define our handlers
    req.on('error', done);

    req.on('response', function(res) {
        if (log) console.log('TreesController - feed response ok ');
        // console.log(res);

        if (res.statusCode != 200)
            return this.emit('error', new Error('Bad status code'));

        let encoding = res.headers['content-encoding'] || 'identity',
            charset = getParams(res.headers['content-type'] || '').charset;

        res = maybeDecompress(res, encoding);
        res = maybeTranslate(res, charset);

        res.pipe(feedparser);

        // res.send();
    });

    feedparser.on('error', done);
    feedparser.on('end', done);

    feedparser.on('readable', function() {
        const stream = this;
        const meta = stream.meta;

        // console.log("TreesController - feedparser - meta", meta);

        let branch;
        while ((branch = stream.read())) {
            // console.log(post);
            branches.push(branch);
        }
    });
};

TreesController.prototype.getTreeByRSSUrl = function(req, res, next) {
    if (log)
        console.log(
            `TreesController getTreeByRSSUrl xmlUrl req.query.xmlUrl: ${
                req.query.xmlUrl
            }`
        );

    const feedPath = req.query.xmlUrl;
    // var feedPath = "http://freecabinporn.com/rss/";

    // var feedPath = xmlUrl;
    // treeObj.user = req.session.cabinQuestUser._id;
    getTree(req, res, feedPath);
};

/**
 * Load the tree feed
 */
TreesController.prototype.load = function(req, res, next) {
    const treeObj = req.body.params;
    const feedPath = treeObj.xmlUrl;
    // treeObj.user = req.session.cabinQuestUser._id;

    if (log)
        console.log(
            treeObj,
            `TreesController attempt to load feed: ${feedPath}`
        );

    getTree(req, res, feedPath);
};

/**
 * Load the tree feed
 */
TreesController.prototype.loadCabinPorn = function(req, res, next) {
    const feedPath = 'http://freecabinporn.com/rss/';
    // treeObj.user = req.session.cabinQuestUser._id;

    if (log) console.log('TreesController loading cabin porn');

    getTree(req, res, feedPath);
};

/**
 * Send User
 */
TreesController.prototype.getTreesById = function(req, res, next) {
    // var cabinQuestUser = req.session.cabinQuestUser;
    // console.log(req.session.cabinQuestUser, "TreesController - getTrees");

    if (log) console.log('TreesController - getTrees');
    const treeObj = req.body.params;

    // var treesTotal = req.body.params.treesTotal;
    // var email = req.body.params.email;

    TreeModel.find({
        user: treeObj.userId
    }).exec((err, trees) => {
        if (err) return next(err);

        if (trees === null) {
            if (log)
                console.log(
                    `TreesController - didn't find the trees: ${trees}`
                );

            // return next ( )
            if (log)
                console.log(
                    "TreesController - trees don't exist so we need to create it!"
                );

            var resultObj = { model: [], message: 'no trees found' };

            return res.jsonp(resultObj);
        }

        if (trees) {
            if (log)
                console.log(
                    'TreesController - found them and sent it to client'
                );

            var resultObj = { model: trees, message: 'trees found' };

            return res.jsonp(resultObj);
        }
    });
};

/**
 * Find tour by cabinquest user id
 */
TreesController.prototype.tour = function(req, res, next, id) {
    ForestModel.load(id, (err, forestModel) => {
        if (err) return next(err);
        if (!forestModel)
            return next(new Error(`Failed to load forestModel ${id}`));
        req.forestModel = forestModel;

        next();
    });
};

/**
 * Update a user
 */
TreesController.prototype.getAllTrees = function(req, res) {
    res.send({ info: 'TreesController callback' });

    return;
};

/**
 * Find tree by id
 */
TreesController.prototype.tree = function(req, res, next, id) {
    if (log) console.log(`TreesController - user id: ${id}`);

    TreeModel.findOne({
        _id: id
    }).exec((err, user) => {
        if (err) return next(err);
        if (!user) return next(new Error(`Failed to load User ${id}`));
        req.profile = user;
        next();
    });
};

TreesController.prototype.sayHi = function(req, res, next) {
    if (log) console.log('TreesController - sayHi');

    res.send({ info: 'TreesController says hi' });
};

/**
 * add
 */

TreesController.prototype.addTree = function(
    req,
    res,
    next,
    treeObj,
    finished
) {
    if (log) console.log('TreesController - addTree');

    // res.send( { info: "TreesController add Tree" } );

    this.create(req, res, next, treeObj, finished);
};

/**
 * edit
 */
/*
TreesController.prototype.editTree = function(req, res, next, id) {
    console.log("TreesController - user id: " + id);

    TreeModel
        .findOne({
            _id: id
        })
        .exec(function(err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load User ' + id));
            req.profile = user;
            next();
        });
};
*/

/**
 * delete
 */
TreesController.prototype.deleteTree = function(req, res) {
    if (log) console.log('------ DELETE TREE ------');

    const treeObj = req.body.params;

    if (log) console.log(treeObj);

    TreeModel.findOne(
        { xmlUrl: treeObj.xmlUrl, user: ObjectId(treeObj.user) },
        (err, treeModel) => {
            if (treeModel !== null) {
                treeModel.remove(err => {
                    if (err) {
                        if (log)
                            console.log(
                                `TreesController remove err code: ${err}`
                            );
                        return res.send('bellwoods/error', {
                            errors: err.errors,
                            model: treeModel,
                            message:
                                'problem attempting to remove the treemodel'
                        });
                    } else {
                        const result = {
                            model: treeModel,
                            message: 'tree succesfully removed'
                        };
                        res.jsonp(result);
                    }
                });
            } else {
                if (log)
                    console.log(
                        'TreesController - ERROR! - did not remove the treeModel'
                    );

                res.send('bellwoods/error', {
                    errors: null,
                    model: null,
                    message: 'problem attempting to remove the treeModel'
                });
            }
        }
    );
};

/**
 * List of trees
 */
TreesController.prototype.all = function(req, res) {
    if (log) console.log('TreesController - fetch all trees ');

    TreeModel.find().exec((err, trees) => {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(trees);
        }
    });
};

module.exports = TreesController;
