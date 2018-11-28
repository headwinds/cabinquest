import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';
import PortholeConfig from '../../config/porthole/PortholeConfig';
import {
    call,
    put,
    race,
    take,
    takeEvery,
    takeLatest
} from 'redux-saga/effects';
import {
    FEED_CABINQUEST_GET_TREES,
    FEED_PORTHOLE_GET_FOREST,
    FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS
} from '../../constants';
import {
    onCabinquestTreesRequest,
    onGetCabinquestTreesSuccess,
    onGetCabinquestTreesFail
} from '../../actions/feed_cabinquest_actions';
import {
    onGetPortholeForestRequest,
    onGetPortholeForestReceivedSuccess,
    onGetPortholeForestReceivedFail
} from '../../actions/feed_porthole_actions';
import {
    getPortholeBranches,
    createAllPortholeTrees
} from './PortholeTreeUtil';

const log = PortholeConfig.getLog('PortholeTreeService'); //(document.domain === "localhost") ? true : false;
const serverPath = PortholeConfig.getServerPath();

//////////////////////////////////////////////////////////////////////////

//let branches = [];

function* getTree(urls) {
    const endPoint =
        serverPath +
        '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' +
        encodeURIComponent(urls[0]); //http:%2F%2Fcabinporn.com%2Frss";

    console.log(
        'PortholeTreeSagas heard and called getTree endPoint: ',
        endPoint
    );
    console.log('PortholeTreeSagas getTree');

    const request = new Request(endPoint, {
        method: 'GET',
        mode: 'cors'
    });

    try {
        yield put(onCabinquestTreesRequest());
        const response = yield call(fetch, request);

        const data = yield call([response, response.json]);

        const branches = getPortholeBranches(data.branches);

        yield put(onGetCabinquestTreesSuccess(branches));
    } catch (error) {
        console.error('branches parsed failed: ', error);
        yield put(onGetCabinquestTreesFail(error));
    }
}

export function* getCabinPornSaga() {
    console.log('getTreesSaga - ready and listening');

    const url = 'http://cabinporn.com/rss';
    const designMilkUrl = 'http://feeds.feedburner.com/design-milk';

    yield takeLatest(FEED_CABINQUEST_GET_TREES, getTree, [url]);
}

export function* getTreesSaga() {}

/////////////////////////////////////////////////////////////////////////

/*
const validateContent = ( entry ) => {

    // first check for empty or undefined

    for ( var ix in entry ) {

        if ( String(entry[ix]) === "undefined" ) {
            String(entry[ix]) = "not found";
        }

    }

    return entry;

}
*/

export function* getTreeByRSSUrl(treeObj) {
    const serverPath = 'https://cabinquest.now.sh';
    const serviceRoute =
        serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl';

    const request = new Request(serviceRoute, {
        method: 'GET',
        mode: 'cors',
        data: { xmlUrl: treeObj.xmlUrl }
    });

    try {
        yield put(onCabinquestTreesRequest());
        const response = yield call(fetch, request);

        const data = yield call([response, response.json]);

        const branches = parse(data.branches);

        //return branches;

        yield put(onGetCabinquestTreesSuccess(branches));
    } catch (error) {
        console.error('branches parsed failed: ', error);
        yield put(onGetCabinquestTreesFail(error));
    }
}

export const getForestFeed = (trees, bSignedIn) => {
    bSignedIn = typeof bSignedIn !== 'undefined' ? bSignedIn : false;

    const treePromises = [];

    const self = this;

    if (bSignedIn) {
        _.each(trees, function(tree) {
            const treePromise = self.getTreeByRSSUrl(tree).loadTreePromise;

            treePromises.push(treePromise);
        });
    } else {
        const allPortholeTrees = createAllPortholeTrees();

        _.each(trees, function(treeValue) {
            const currentTree = allPortholeTrees[treeValue];

            if (undefined !== currentTree) {
                const treePromise = self.getTreeByRSSUrl(currentTree)
                    .loadTreePromise;
                treePromises.push(treePromise);
            }
        });
    }

    return Promise.all(treePromises);
};

function* getTreeGenerator(treeModel) {
    const serverPath = 'https://cabinquest.now.sh';
    const serviceRoute =
        serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl';

    const request = new Request(serviceRoute, {
        method: 'GET',
        mode: 'cors',
        data: { xmlUrl: treeModel.xmlUrl }
    });

    return (response = yield call(fetch, request));
}

function* getPortholeForestFeed(dispatch) {
    const treeObj = createAllPortholeTrees(); // returns an object!
    const treeBranches = [];
    const treePromises = [];
    const treeModels = [];

    const rssUrls = [];
    const keys = [];

    _.forIn(treeObj, (data, key) => {
        rssUrls.push(data.xmlUrl);
        keys.push(key);
        treeModels.push(data);
    });

    //const without = {title: "Design Milk"} || model.title === "Dwell")

    const badFeeds = ['Documentary', 'Venture Beat', 'Walker Film'];

    //const one = _.reject(treeModels, {title: "Design Milk"});
    //const two = _.reject(treeModels, {title: "Documentary"});
    const finalTreeModels = _.reject(treeModels, model => {
        return badFeeds.indexOf(model.title) > -1 ? true : false;
    });

    function* fetchTree(key) {
        const treeModel = treeObj[key];

        console.log('getPortholeForestFeed treeModel: ', treeModel);

        //getTreeByRSSUrl(treeModel);
        const url = treeModel.xmlUrl;

        const endPoint =
            serverPath +
            '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' +
            encodeURIComponent(url); //http:%2F%2Fcabinporn.com%2Frss";

        console.log(
            'PortholeTreeSagas getPortholeForestFeed endPoint: ',
            endPoint
        );

        const request = new Request(endPoint, {
            method: 'GET',
            mode: 'cors'
        });

        const response = yield call(fetch, request);
        const data = yield call([response, response.json]);

        console.log(
            'PortholeTreeSagas getPortholeForestFeed len: ',
            data.branches.length
        );

        return getPortholeBranches(data.branches);
    }

    function* loadFeed(treeModel) {
        console.log('pollForFeed treeModel: ', treeModel);

        const url = treeModel.xmlUrl;

        const endPoint =
            serverPath +
            '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' +
            encodeURIComponent(url);

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        //const cors = (treeModel.title === "Design Milk" || treeModel.title === "Dwell") ? "no-cors" : "cors";

        const request = new Request(endPoint, {
            method: 'GET',
            mode: 'cors'
            //headers: headers
        });

        try {
            yield fetch(request).then(
                response => {
                    var json = response.json();
                    return json;
                },
                error => {
                    dispatch(onGetPortholeForestReceivedFail(error));
                }
            );
        } catch (error) {
            console.error('pollForFeed ERROR!: ', error);
        }
    }

    //https://www.sitepoint.com/asynchronous-apis-using-fetch-api-es6-generators/
    function* pollForFeed(treeModel) {
        console.log('pollForFeed treeModel: ', treeModel);

        const url = treeModel.xmlUrl;

        const endPoint =
            serverPath +
            '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' +
            encodeURIComponent(url);

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        //const cors = (treeModel.title === "Design Milk" || treeModel.title === "Dwell") ? "no-cors" : "cors";

        const request = new Request(endPoint, {
            method: 'GET',
            mode: 'cors'
            //headers: headers
        });

        while (true) {
            try {
                yield fetch(request).then(
                    response => {
                        var json = response.json();
                        return json;
                    },
                    error => {
                        dispatch(onGetPortholeForestReceivedFail(error));
                    }
                );
            } catch (error) {
                console.error('pollForFeed ERROR!: ', error);
            }
        }
    }

    let count = 0;
    const forest = [];

    function* allDone(portholeBranches) {
        console.log('pollForFeed allDone!');
        //yield put(onGetPortholeForestReceivedSuccess(portholeBranches));
        yield put({
            type: FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS,
            portholeBranches
        });
    }

    function runPolling(generator) {
        const model = finalTreeModels[count]; //treeModels[keys[count]];

        if (model) generator = pollForFeed(model);

        const next = generator.next();

        next.value.then(response => {
            const portholeBranches = getPortholeBranches(response.branches);
            forest.push(portholeBranches);

            const max = finalTreeModels.length;

            if (count < max) {
                runPolling(generator);
                count++;
            } else {
                const branches = _.reduce(
                    forest,
                    function(acc, models) {
                        return acc.concat(models);
                    },
                    []
                );

                dispatch(onGetPortholeForestReceivedSuccess(branches));
            }
        });
    }

    function runOnce() {
        //console.log('wild: ', finalTreeModels);
        // 0 = cabinQuest
        // 1 = treeHugger
        // 2 = wired
        // 3 = coolHunting
        // 4 = kotaku
        // 5 = national geographic
        // 6 = collassal
        // 7 = dwell
        // 8 = designmilk
        count = 5;
        const model = finalTreeModels[count]; //treeModels[keys[count]];
        let generator = model ? loadFeed(model) : undefined;

        //if (!generator) return;

        const next = generator.next();

        next.value.then(response => {
            const portholeBranches = getPortholeBranches(response.branches);
            forest.push(portholeBranches);

            const max = finalTreeModels.length;

            const branches = _.reduce(
                forest,
                function(acc, models) {
                    return acc.concat(models);
                },
                []
            );

            dispatch(onGetPortholeForestReceivedSuccess(branches));
        });
    }

    runOnce();
}

export function* getPortholeForestSaga(dispatch) {
    console.log(
        'getPortholeForestSaga - ready and listening - args: ',
        arguments
    );

    yield takeLatest(FEED_PORTHOLE_GET_FOREST, getPortholeForestFeed, dispatch);
}

function* getPortholeForestNotWorking() {
    const treeModels = createAllPortholeTrees(); // returns an object!
    const treeBranches = [];
    const treePromises = [];

    const rssUrls = [];
    const keys = [];

    _.forIn(treeModels, (data, key) => {
        rssUrls.push(data.xmlUrl);
        keys.push(key);
    });

    function fetchTree(treeModel) {
        const url = treeModel.xmlUrl;

        const endPoint =
            'https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' +
            encodeURIComponent(url);

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        const request = new Request(endPoint, {
            method: 'GET',
            mode: 'cors',
            headers
        });

        return fetch(request).then(function(d) {
            var json = d.json();
            return json;
        });
    }

    const requests = _.map(treeModels, treeModel => {
        return fetchTree(treeModel);
    });

    const responses = yield requests;

    console.log(
        'getPortholeForestSaga - getPortholeForest responses: ',
        responses
    );
}

export function* getPortholeForestSagaAAA() {
    console.log('getPortholeForestSaga - ready and listening');

    yield takeLatest(FEED_PORTHOLE_GET_FOREST, getPortholeForest);
}

export const getForestFeedByTreeModels = treeModels => {
    const treePromises = [];

    //const self = this;

    _.each(treeModels, function(treeModel) {
        const treePromise = getTreeByRSSUrl(treeModel);
        treePromises.push(treePromise);
    });

    //return Promise.all(treePromises);
    Promise.all(treePromises).then(
        response => {
            console.log('getForestFeedByTreeModels all done');
        },
        error => {
            console.log('getForestFeedByTreeModels error');
        }
    );
};
