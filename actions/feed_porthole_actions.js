import {FEED_PORTHOLE_GET_FOREST,
    FEED_PORTHOLE_GET_FOREST_REQUEST,
    FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS,
    FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL,} from "../constants";

export function onGetPortholeForestRequest(){
    return{
        type: FEED_PORTHOLE_GET_FOREST_REQUEST,
    }
};


export function onGetPortholeForestReceivedSuccess(portholeForest){
    console.log("action onGetPortholeForestReceivedSuccess portholeForest: ", portholeForest);

    return{
        type: FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS,
        payload: {
            portholeForest,
        },
    }
};

export function onGetPortholeForestReceivedFail(error){
    return{
        type: FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL,
        payload: {
            error,
        },
    }
};

export function getPortholeForest() {
    console.log("action getPortholeForest");
    return {
        type: FEED_PORTHOLE_GET_FOREST
    }
};

