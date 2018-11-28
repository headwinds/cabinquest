import Promise from 'bluebird';
import { addTree } from '../../actions/bellwoods/trees/TreesFactoryService';
import * as _ from 'lodash';
import { broadcast } from '../message/MessageUtils';
import { getAllPortholeTrees } from './PortholeFeedUtils';

export const hasTreeBeenUpdated = (loadedBranchTitles, savedBranchTitles) => {
    //console.log(arguments, "PortholeTreeUtil - hasTreeBeenUpdated");

    let bUpdated = false;

    if (savedBranchTitles.length > 0) {
        // compare them... simple first
        var aDif = _.difference(loadedBranchTitles, savedBranchTitles);
        bUpdated = aDif.length > 0 ? true : false;

        if (bUpdated)
            broadcast('PortholeTreeUtil:update', {
                messageHTML: '<p>This feed has been updated with new posts.</p>'
            });

        /*
          could take it further and compare update dates and then use the resulting diff array to show which branches have been updated
        */
    }

    return bUpdated;
};

//var updateFeed = function(feedTitle, userId) {};

export const getActiveTrees = feedModel => {
    const activeTrees = [];

    _.each(feedModel.allTrees, function(tree) {
        _.each(feedModel.activeTrees, function(activeId) {
            if (tree._id === activeId) {
                //activeTrees.push(tree);
                activeTrees.push(tree);
            }
        });
    });

    return activeTrees;
};

export const addPortholeTrees = (allPortholeTrees, cabinQuestUser) => {
    console.log('addPortholeTrees cabinQuestUser: ', cabinQuestUser);

    const treePromises = [];

    _.each(allPortholeTrees, portholeTree => {
        const addTreeSuccessCallback = successData => {};

        const addTreeErrorCallback = function(errorData) {
            broadcast('Error:server:general', { error: errorData });
        };

        const lastBranchTitles = _.map(portholeTree.branches, 'title');

        const lastReviewedBranchViewed = _.filter(portholeTree.branches, {
            bViewed: true
        });

        const lastReviewedBranchTitles = _.map(
            lastReviewedBranchViewed,
            'title'
        );

        const newTree = {
            userId: cabinQuestUser._id,
            origin: 'porthole',
            lastBranchTitles,
            lastReviewedBranchTitles,
            text: portholeTree.title,
            title: portholeTree.title,
            type: 'RSS',
            category: portholeTree.category,
            xmlUrl: portholeTree.xmlUrl,
            htmlUrl: portholeTree.xmlUrl,
            rating: 0,
            frequency: 0,
            shared: 0,
            tags: []
        };

        console.log('ProfileViewController - addTree - newTree: ', newTree);

        const payload = { cabinQuestUser, newTree };

        treePromises.push(addTree(payload));
    });

    return Promise.all(treePromises);
};
