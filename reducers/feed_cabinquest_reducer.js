import { createReducer } from '../utils/reducer_utils';
import {
    FEED_CABINQUEST_GET_TREES_REQUEST,
    FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS,
    FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL,
    FEED_PORTHOLE_GET_FOREST_REQUEST,
    FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS,
    FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL,
    FEED_CABINQUEST_GET_PARK_REQUEST,
    FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS,
    FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL,
    FEED_CABINQUEST_POST_TREE,
    FEED_CABINQUEST_POST_TREE_REQUEST,
    FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS,
    FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL,
    FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST,
    FEED_CABINQUEST_POST_DEFAULT_PARK_SUCCESS
} from '../constants';

const initialState = {
    branches: null,
    portholeForest: null,
    park: null,
    newTree: null,
    error: null,
    isFetching: false
};

export default createReducer(initialState, {
    [FEED_CABINQUEST_POST_TREE]: (state, payload) =>
        Object.assign({}, state, {
            newTree: payload.tree
        }),
    [FEED_CABINQUEST_POST_TREE_REQUEST]: state =>
        Object.assign({}, state, {
            isFetching: true
        }),
    [FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            isFetching: false
        }),
    [FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL]: (state, payload) =>
        Object.assign({}, state, {
            error: payload.error,
            isFetching: false
        }),
    [FEED_CABINQUEST_GET_PARK_REQUEST]: state =>
        Object.assign({}, state, {
            isFetching: true
        }),
    [FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            park: payload.park,
            isFetching: false
        }),
    [FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL]: (state, payload) =>
        Object.assign({}, state, {
            error: payload.error,
            isFetching: false
        }),
    [FEED_CABINQUEST_GET_TREES_REQUEST]: state =>
        Object.assign({}, state, {
            isFetching: true
        }),
    [FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            branches: payload.branches,
            isFetching: false
        }),
    [FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL]: (state, payload) =>
        Object.assign({}, state, {
            error: payload.error,
            isFetching: false
        }),
    [FEED_PORTHOLE_GET_FOREST_REQUEST]: state =>
        Object.assign({}, state, {
            isFetching: true
        }),
    [FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            portholeForest: payload.portholeForest,
            isFetching: false
        }),
    [FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST]: state =>
        Object.assign({}, state, {
            isFetching: true
        }),
    [FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            portholeForest: payload.portholeForest,
            isFetching: false
        }),
    [FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL]: (state, payload) =>
        Object.assign({}, state, {
            error: payload.error,
            isFetching: false
        })
});
