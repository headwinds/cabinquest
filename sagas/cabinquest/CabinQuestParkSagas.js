import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';
import PortholeConfig from '../../config/porthole/PortholeConfig';
import axios from 'axios';
import {
    call,
    put,
    race,
    take,
    takeEvery,
    takeLatest
} from 'redux-saga/effects';
import {
    FEED_CABINQUEST_POST_TREE,
    FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS,
    FEED_CABINQUEST_GET_PARK,
    FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS,
    FEED_CABINQUEST_GET_TREES,
    FEED_PORTHOLE_GET_FOREST,
    FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS
} from '../../constants';
import {
    getCabinQuestPark,
    onGetCabinQuestParkRequest,
    onGetCabinQuestParkReceivedSuccess,
    onGetCabinQuestParkReceivedFail,
    onPostCabinQuestTreeRequest,
    onPostCabinQuestTreeReceivedSuccess,
    onPostCabinQuestTreeReceivedFail
} from '../../actions/feed_cabinquest_park_actions';
import {
    getPortholeBranches,
    createAllPortholeTrees
} from '../porthole/PortholeTreeUtil';

const log = PortholeConfig.getLog('PortholeTreeService'); // (document.domain === "localhost") ? true : false;
const serverPath = PortholeConfig.getServerPath();

// POST TREE ////////////////////////////////////////////////////////////////////////

function* postNewTree(dispatch, getState) {
    console.log('CabinQuestParkSagas postNewTree');

    const endPoint = `${serverPath}/bellwoods/trees/create/`;

    const newTree = getState().feed_cabinquest.newTree;
    const cabinQuestUser = getState().auth.cabinQuestUser;
    const data = { newTree, cabinQuestUser };

    const request = new Request(endPoint, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        yield put(onPostCabinQuestTreeRequest());
        const response = yield call(fetch, request);
        yield put(onPostCabinQuestTreeReceivedSuccess());

        dispatch(getCabinQuestPark());
    } catch (error) {
        console.error('CabinQuestParkSagas postTree error: ', error);
        yield put(onPostCabinQuestTreeReceivedFail(error));
    }
}

export function* postCabinQuestTreeSaga(dispatch, getState) {
    const state = getState();
    console.log('postCabinQuestTreeSaga - ready and listening - start ', state);

    yield takeLatest(
        FEED_CABINQUEST_POST_TREE,
        postNewTree,
        dispatch,
        getState
    );
}

// GET PARK /////////////////////////////////////////////////////////////////////////

function* getPark() {
    const endPoint = `${serverPath}/bellwoods/trees/all`;

    console.log(
        'CabinQuestParkSagas heard and called getPark endPoint: ',
        endPoint
    );
    console.log('CabinQuestParkSagas getPark');

    const request = new Request(endPoint, {
        method: 'GET',
        mode: 'cors'
    });

    try {
        yield put(onGetCabinQuestParkRequest());
        const response = yield call(fetch, request);
        const data = yield call([response, response.json]);

        console.log('CabinQuestParkSagas getPark response data: ', data);

        //const branches = getPortholeBranches(data.branches);

        yield put(onGetCabinQuestParkReceivedSuccess(data));
    } catch (error) {
        console.error('branches parsed failed: ', error);
        yield put(onGetCabinQuestParkReceivedFail(error));
    }
}

export function* getCabinQuestParkSaga() {
    console.log('getCabinQuestParkSaga - ready and listening');

    yield takeLatest(FEED_CABINQUEST_GET_PARK, getPark);
}

// let branches = [];
/*
function* getTree(urls) {
  const endPoint = `${serverPath}/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=${encodeURIComponent(
    urls[0]
  )}`; // http:%2F%2Fcabinporn.com%2Frss";

  console.log("CabinQuestParkSagas heard and called getTree endPoint: ", endPoint);
  console.log("CabinQuestParkSagas getTree");

  const request = new Request(endPoint, {
    method: "GET",
    mode: "cors",
  });

  try {
    yield put(onCabinquestTreesRequest());
    const response = yield call(fetch, request);

    const data = yield call([response, response.json]);

    const branches = getPortholeBranches(data.branches);

    yield put(onGetCabinquestTreesSuccess(branches));
  } catch (error) {
    console.error("branches parsed failed: ", error);
    yield put(onGetCabinquestTreesFail(error));
  }
}

export function* getCabinPornSaga() {
  console.log("getTreesSaga - ready and listening");

  const url = "http://cabinporn.com/rss";
  const designMilkUrl = "http://feeds.feedburner.com/design-milk";

  yield takeLatest(FEED_CABINQUEST_GET_TREES, getTree, [url]);
}

export function* getTreesSaga() {}

// ///////////////////////////////////////////////////////////////////////

export function* getTreeByRSSUrl(treeObj) {
  const serverPath = "https://cabinquest.now.sh";
  const serviceRoute = `${serverPath}/bellwoods/trees/getTreeByRSSUrl/:xmlUrl`;

  const request = new Request(serviceRoute, {
    method: "GET",
    mode: "cors",
    data: { xmlUrl: treeObj.xmlUrl },
  });

  try {
    yield put(onCabinquestTreesRequest());
    const response = yield call(fetch, request);

    const data = yield call([response, response.json]);

    const branches = parse(data.branches);

    // return branches;

    yield put(onGetCabinquestTreesSuccess(branches));
  } catch (error) {
    console.error("branches parsed failed: ", error);
    yield put(onGetCabinquestTreesFail(error));
  }
}
*/
