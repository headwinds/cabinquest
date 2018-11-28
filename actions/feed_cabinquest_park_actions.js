import axios from 'axios';
import { addDefaultPortholeTrees } from '../utils/porthole/PortholeFeedUtils';
import {
    FEED_CABINQUEST_GET_PARK,
    FEED_CABINQUEST_GET_PARK_REQUEST,
    FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS,
    FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL,
    FEED_CABINQUEST_POST_TREE,
    FEED_CABINQUEST_POST_TREE_REQUEST,
    FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS,
    FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL,
    FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST,
    FEED_CABINQUEST_POST_DEFAULT_PARK_SUCCESS,
    FEED_CABINQUEST_POST_DEFAULT_PARK_FAIL
} from '../constants';

export function postDefaultParkRequest() {
    return {
        type: FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST
    };
}

export function postDefaultParkSuccess(portholeForest) {
    return {
        type: FEED_CABINQUEST_POST_DEFAULT_PARK_SUCCESS,
        payload: {
            portholeForest
        }
    };
}

export function postDefaultParkFail() {
    return {
        type: FEED_CABINQUEST_POST_DEFAULT_PARK_FAIL
    };
}

export function postDefaultPark(cabinQuestUser) {
    return (dispatch, getState) => {
        dispatch(postDefaultParkRequest());

        return addDefaultPortholeTrees(cabinQuestUser).then(
            response => {
                console.log('postDefaultPark response: ', response);
                const defaultTrees = response;
                return dispatch(postDefaultParkSuccess(defaultTrees));
            },
            error => {}
        );
    };
}

export function onPostCabinQuestTreeRequest() {
    return {
        type: FEED_CABINQUEST_POST_TREE_REQUEST
    };
}

export function onPostCabinQuestTreeReceivedSuccess() {
    console.log('action onPostCabinQuestTreeReceivedSuccess');

    return {
        type: FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS
    };
}

export function onPostCabinQuestTreeReceivedFail(error) {
    return {
        type: FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL,
        payload: {
            error
        }
    };
}

export function postCabinQuestTree(tree) {
    console.log('action postCabinQuestTree');
    return {
        type: FEED_CABINQUEST_POST_TREE,
        payload: { tree }
    };
}

export function onGetCabinQuestParkRequest() {
    return {
        type: FEED_CABINQUEST_GET_PARK_REQUEST
    };
}

export function onGetCabinQuestParkReceivedSuccess(park) {
    console.log('action onGetCabinQuestParkReceivedSuccess park: ', park);

    return {
        type: FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS,
        payload: {
            park
        }
    };
}

export function onGetCabinQuestParkReceivedFail(error) {
    return {
        type: FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL,
        payload: {
            error
        }
    };
}

export function getCabinQuestPark() {
    console.log('action getCabinQuestPark');
    return {
        type: FEED_CABINQUEST_GET_PARK
    };
}
