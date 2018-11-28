const util = require('util');
const events = require('events');
const _ = require('lodash');

const appPath = '../../../../app';

const TreesController = require(`${appPath}/controllers/bellwoods/trees/TreesController`);
// const TreesController = require(`${appPath}/controllers/bellwoods/trees/PortholeTreesController`);

const TreesRoutesController = function(app, passport, auth) {
    events.EventEmitter.call(this);

    console.log('TreesRoutesController init');

    // Trees
    const treesController = new TreesController();

    app.get('/bellwoods/all', treesController.all);

    // create the trees from the takout - I don' think this route exists because TakeoutMongoService calls ForestController instead
    // app.post('/bellwoods/trees/takeout/create', treesController.createTreesFromTakeout );

    // view the trees
    app.get('/bellwoods/trees/all', treesController.all);

    app.post('/bellwoods/trees/create', treesController.create);
    // app.post('/bellwoods/trees/create', auth.requiresLogin, treesController.create);

    // update the trees
    // app.post('/bellwoods/trees/update', auth.requiresLogin, treesController.update);
    app.post(
        '/bellwoods/trees/update',
        auth.requiresLogin,
        treesController.update
    );
    app.post(
        '/bellwoods/trees/update/category',
        auth.requiresLogin,
        treesController.updateCategory
    );
    app.post(
        '/bellwoods/trees/update/visit',
        auth.requiresLogin,
        treesController.updateVisit
    );
    app.post(
        '/bellwoods/trees/update/position',
        auth.requiresLogin,
        treesController.updatePosition
    );
    app.post(
        '/bellwoods/trees/update/positions',
        auth.requiresLogin,
        treesController.updatePositions
    );
    app.post(
        '/bellwoods/trees/update/latestImage',
        auth.requiresLogin,
        treesController.updateLatestImage
    );
    app.post(
        '/bellwoods/trees/update/branches',
        auth.requiresLogin,
        treesController.updateBranches
    );

    app.post(
        '/bellwoods/trees/getTreesById',
        auth.requiresLogin,
        treesController.getTreesById
    );

    app.post(
        '/bellwoods/trees/delete',
        auth.requiresLogin,
        treesController.deleteTree
    );

    app.post(
        '/bellwoods/trees/sayHi',
        auth.requiresLogin,
        treesController.sayHi
    );
    // app.post('/bellwoods/trees/update', auth.requiresLogin, treesController.update);

    app.post('/bellwoods/trees/load', treesController.load);

    app.get(
        '/bellwoods/trees/getTreeByRSSUrl/:_id',
        treesController.getTreeByRSSUrl
    );
    app.param('_id', treesController.getTreeByRSSUrl);

    app.get('/bellwoods/trees/loadCabinPorn', treesController.loadCabinPorn);

    app.get('/bellwoods/tour/:id', treesController.tour);
    app.param('bellwoodsTourId', treesController.tour);

    // app.post('/bellwoods/trees/create', treesController.create );
    // app.get('/bellwoods/trees/create', treesController.create );

    /*
    // hmmmm I need to understand authUsers create! redundant?!
    app.get('/bellwoods/trees/get', treesController.getAllTrees);

    // add
    app.post('/bellwoods/trees/create', treesController.create );

    // get all trees
    app.get('/bellwoods/trees/all', treesController.all );

    // edit
    app.post('/bellwoods/trees/edit', treesController.editTree );
     */
    // delete

    // simple test to see something in the browser
    app.get('/bellwoods/test/hi', treesController.sayHi);

    this.className = 'TreesRoutesController';
};

util.inherits(TreesRoutesController, events.EventEmitter);

module.exports = TreesRoutesController;
