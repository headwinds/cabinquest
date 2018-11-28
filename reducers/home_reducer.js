import { createReducer } from '../utils/reducer_utils';

const FOO = "FOO";
const BAR = "BAR";
const STARWARS_REQUEST = "STARWARS_REQUEST";
const STARWARS_RECEIVED_SUCCESS = "STARWARS_RECEIVED_SUCCESS";

const initialState = {
    foo: 'bar',
    bar: 'foo',
    header: null,
    isFetching: false,
    items: null,
};

export default createReducer(initialState, {
    ["APP_FETCH_HEADER_REQUESTED"]: state =>
        Object.assign({}, state, {
            isFetching: true,
        }),
    ["APP_FETCH_HEADER_RECEIVED_SUCCESS"]: (state, payload) =>
        Object.assign({}, state, {
            header: payload.header,
            isFetching: false,
        }),  
    [STARWARS_REQUEST]: state =>
        Object.assign({}, state, {
            isFetching: true,
        }),  
    [STARWARS_RECEIVED_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            items: payload.items,
        }),
    [BAR]: (state, payload) =>
        Object.assign({}, state, {
            bar: payload.bar,
        }),
});
