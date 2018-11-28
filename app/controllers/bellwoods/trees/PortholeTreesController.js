var util = require('util');
var events = require('events');
var _ = require('lodash');

var Iconv = require('iconv').Iconv;
var zlib = require('zlib');

var FeedParser = require('feedparser');
var request = require('request');

var PortholeTreesController = function() {
    events.EventEmitter.call(this);
};

util.inherits(PortholeTreesController, events.EventEmitter);

var log = true;

var getTree = function(req, res, feedPath) {
    //var user = req.session.cabinQuestUser; // vs _id
    var req = request(feedPath, { timeout: 10000, pool: false });

    req.setMaxListeners(50);

    // Some feeds do not respond without user-agent and accept headers.
    req.setHeader(
        'user-agent',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36'
    );
    req.setHeader('accept', 'text/html,application/xhtml+xml');
    req.setHeader('Access-Control-Allow-Origin', '*');

    var feedparser = new FeedParser();

    var branches = [];

    if (log) console.log('TreesController loading feed: ' + feedPath);

    function maybeDecompress(res, encoding) {
        var decompress;

        if (encoding.match(/\bdeflate\b/)) {
            decompress = zlib.createInflate();
        } else if (encoding.match(/\bgzip\b/)) {
            decompress = zlib.createGunzip();
        }

        return decompress ? res.pipe(decompress) : res;
    }

    function maybeTranslate(res, charset) {
        var iconv;
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
        }
        return res;
    }

    function getParams(str) {
        var params = str.split(';').reduce(function(params, param) {
            var parts = param.split('=').map(function(part) {
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
            //return process.exit(1);

            return res.jsonp({ branches: null, error: err });
        }

        //process.exit();
        return res.jsonp({ branches: branches, error: null });
    }

    // Define our handlers
    req.on('error', done);

    req.on('response', function(res) {
        if (log) console.log('TreesController - feed response ok ');
        //console.log(res);

        if (res.statusCode != 200)
            return this.emit('error', new Error('Bad status code'));

        var encoding = res.headers['content-encoding'] || 'identity',
            charset = getParams(res.headers['content-type'] || '').charset;

        res = maybeDecompress(res, encoding);
        res = maybeTranslate(res, charset);

        res.pipe(feedparser);

        //res.send();
    });

    feedparser.on('error', done);
    feedparser.on('end', done);

    feedparser.on('readable', function() {
        var stream = this;
        var meta = stream.meta;

        //console.log("TreesController - feedparser - meta", meta);

        var branch;
        while ((branch = stream.read())) {
            //console.log(post);
            branches.push(branch);
        }
    });
};

PortholeTreesController.prototype.getTreeByRSSUrl = function(req, res, next) {
    if (log)
        console.log(
            'TreesController getTreeByRSSUrl xmlUrl req.query.xmlUrl: ' +
                req.query.xmlUrl
        );

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    ); // If needed
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,contenttype'
    ); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    var feedPath = req.query.xmlUrl;
    //var feedPath = "http://freecabinporn.com/rss/";

    //var feedPath = xmlUrl;
    //treeObj.user = req.session.cabinQuestUser._id;
    getTree(req, res, feedPath);
};

/**
 * Load the tree feed
 */
PortholeTreesController.prototype.load = function(req, res, next) {
    var treeObj = req.body.params;
    var feedPath = treeObj.xmlUrl;
    //treeObj.user = req.session.cabinQuestUser._id;

    if (log)
        console.log(
            treeObj,
            'TreesController attempt to load feed: ' + feedPath
        );

    getTree(req, res, feedPath);
};

/**
 * Load the tree feed
 */
PortholeTreesController.prototype.loadCabinPorn = function(req, res, next) {
    var feedPath = 'http://freecabinporn.com/rss/';
    //treeObj.user = req.session.cabinQuestUser._id;

    if (log) console.log('TreesController loading cabin porn');

    getTree(req, res, feedPath);
};

/**
 * Update a user
 */
PortholeTreesController.prototype.getAllTrees = function(req, res) {
    res.send({ info: 'TreesController callback' });

    return;
};

/**
 * Find tree by id
 */
PortholeTreesController.prototype.tree = function(req, res, next, id) {
    if (log) console.log('TreesController - user id: ' + id);

    TreeModel.findOne({
        _id: id
    }).exec(function(err, user) {
        if (err) return next(err);
        if (!user) return next(new Error('Failed to load User ' + id));
        req.profile = user;
        next();
    });
};

module.exports = PortholeTreesController;
