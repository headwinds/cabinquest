import {FEED_CABINQUEST_GET_TREES,
        FEED_CABINQUEST_GET_TREES_REQUEST,
        FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS,
        FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL,} from "../constants";


export function onCabinquestTreesRequest(){
    return{
        type: FEED_CABINQUEST_GET_TREES_REQUEST,
    }
};


export function onGetCabinquestTreesSuccess(branches){
    console.log("action onGetCabinquestTreesSuccess branches: ", branches);

    return{
        type: FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS,
        payload: {
            branches,
        },
    }
};

export function onGetCabinquestTreesFail(error){
    return{
        type: FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL,
        payload: {
            error,
        },
    }
};

export function getCabinquestTrees() {
    console.log("action getCabinquestTrees");
    return {
        type:  FEED_CABINQUEST_GET_TREES
    }
};

/*

export function getCabinquestTrees() {

    //const payload = new Promise( (res) => { res('orc') });

    const url = "https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss";

    const payload = fetch(url);

     const fetchCabinPornPromise = fetch(url)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(json) {
            console.log("json: ", json);
            dispatch( onGetCabinquestTreesSuccess(json.branches) );
        });

    //return fetchCabinPornPromise;


    Promise.all(
        fetchCabinPornPromise
    ).then(
        response => {
            console.log("all promise response: ", response);
        },
        error => {

        }
    )

    return {
        type: FEED_CABINQUETS_GET_TREES,
        payload: payload
    }

}
*/

