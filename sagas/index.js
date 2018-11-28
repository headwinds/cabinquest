import { all } from 'redux-saga/effects';
import {
    getCabinPornSaga,
    getPortholeForestSaga
} from './porthole/PortholeTreeSagas';
import {
    getCabinQuestParkSaga,
    postCabinQuestTreeSaga
} from './cabinquest/CabinQuestParkSagas';
import { helloSaga } from './helloSaga';

export default function* rootSaga(dispatch, getState) {
    yield all([
        helloSaga(dispatch), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        getCabinPornSaga(),
        getPortholeForestSaga(dispatch),
        postCabinQuestTreeSaga(dispatch, getState),
        getCabinQuestParkSaga()
    ]);
}
