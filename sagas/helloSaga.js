import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchGetHeader, onGetHeaderSuccess, onGetHeaderRequest } from '../actions/home_actions';



function* fetchHeader(dispatch, url){

    //
    const endPoint = "https://simonw-json-head-sqhcsgfgok.now.sh/?url=" + encodeURIComponent(url); //http:%2F%2Fcabinporn.com%2Frss";
    //const endPoint = "https://simonw-json-head-sqhcsgfgok.now.sh/?url=";

    //console.log("helloSaga fetchHeader endPoint: ", endPoint);

    const request = new Request(endPoint, {
        method: 'GET',
        mode: 'cors',
    });

    try {
        yield put(onGetHeaderRequest());
        const response = yield call(fetch, request);
        const data = yield call([response, response.json]);

        //console.log("helloSaga fetchHeader data: ", data);

        yield put(onGetHeaderSuccess(data));

    } catch (error) {
        console.error("fetchHeader failed: ", error);
        //yield put (onGetCabinquestTreesFail(error));
    }

}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {

    console.log('USER_FETCH_REQUESTED')

    return;
    /*
    try {
        const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
    */
}


/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
export function* helloSaga(dispatch) {
    console.log('Hello Sagas! v3')

    //yield takeLatest("USER_FETCH_REQUESTED", fetchUser);

    const url = 'https://camh-thoughtspot-dev.qochealth.com/';

    yield takeLatest("APP_FETCH_HEADER", fetchHeader, dispatch, url);

    dispatch(fetchGetHeader());

    //fetchHeader();
}

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
/*
function* helloSaga() {
    console.log('Hello Sagas!')
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
*/

/*
 https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
 https://formidable.com/blog/2017/real-world-redux-saga-patterns/
 https://github.com/redux-saga/redux-saga/issues/960
  */


