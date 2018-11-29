module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/auth_actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["setCabinQuestUser"] = setCabinQuestUser;
/* harmony export (immutable) */ __webpack_exports__["onSigninRequest"] = onSigninRequest;
/* harmony export (immutable) */ __webpack_exports__["onSigninSuccess"] = onSigninSuccess;
/* harmony export (immutable) */ __webpack_exports__["onSigninFail"] = onSigninFail;
/* harmony export (immutable) */ __webpack_exports__["fetchSignin"] = fetchSignin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./constants/index.js");



var SIGNIN_REQUEST = "SIGNIN_REQUEST";
var SIGNIN_RECEIVED_SUCCESS = "SIGNIN_RECEIVED_SUCCESS";
var SIGNIN_RECEIVED_FAIL = "SIGNIN_RECEIVED_FAIL";



function setCabinQuestUser(cabinQuestUser) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* CABINQUEST_SET_USER */],
    payload: { cabinQuestUser: cabinQuestUser }
  };
}

function onSigninRequest() {
  return {
    type: SIGNIN_REQUEST
  };
}

function onSigninSuccess(profile) {
  return {
    type: SIGNIN_RECEIVED_SUCCESS,
    payload: {
      profile: profile
    }
  };
}

function onSigninFail(error) {
  return {
    type: SIGNIN_RECEIVED_FAIL,
    payload: {
      error: error
    }
  };
}

function fetchSignin(provider) {
  return function (dispatch, getState) {
    dispatch(onSigninRequest());
    return __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()("/auth/" + provider).then(function (response) {
      if (response.status >= 400) {
        throw new Error("home Bad response from server");
        dispatch(onSigninFail(response));
      }
      return response.json();
    }).then(function (json) {
      console.log("home all good", items);
      dispatch(onSigninSuccess(items));
    }).catch(function (err) {
      console.log("fetchSignin failed: ", err);
    });
  };
}

/***/ }),

/***/ "./actions/bellwoods/trees/TreesFactoryService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loadTree */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addTree; });
/* unused harmony export deleteTree */
/* unused harmony export sayHi */
/* unused harmony export updateCategory */
/* unused harmony export updateTree */
/* unused harmony export updateTreePosition */
/* unused harmony export updateTreePositions */
/* unused harmony export updateBranches */
/* unused harmony export updateTreeLatestImage */
/* unused harmony export getTreesById */
/* unused harmony export updateTreeVisit */
/* unused harmony export getTour */
/* unused harmony export getSummary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);



var self = this;
var serverPath = '';

var loadTree = function loadTree(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/load', {
        params: treeObj
    });
};

var addTree = function addTree(payload) {
    console.log('addTree');
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/create', {
        params: payload
    });
};

var deleteTree = function deleteTree(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/delete', {
        params: treeObj
    });
};

var sayHi = function sayHi(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/sayHi', {
        params: treeObj
    });
};

var updateCategory = function updateCategory(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/update/category', {
        params: treeObj
    });
};

var updateTree = function updateTree(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/update', {
        params: treeObj
    });
};

var updateTreePosition = function updateTreePosition(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/update/position', {
        params: treeObj
    });
};

var updateTreePositions = function updateTreePositions(data) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/update/positions', {
        params: data
    });
};

var updateBranches = function updateBranches(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/update/branches', {
        params: treeObj
    });
};

var updateTreeLatestImage = function updateTreeLatestImage(branchUpdateObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/update/visit', {
        params: branchUpdateObj
    });
};

var getTreesById = function getTreesById(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/getTreesById', {
        params: treeObj
    });
};

var updateTreeVisit = function updateTreeVisit(treeObj) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/update/visit', {
        params: treeObj
    });
};

var getTour = function getTour() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(serverPath + '/bellwoods/tour/:id');
};

var getSummary = function getSummary() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(serverPath + '/bellwoods/trees/summary', {
        params: { total: totalNum }
    });
};

/***/ }),

/***/ "./actions/feed_cabinquest_actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = onCabinquestTreesRequest;
/* harmony export (immutable) */ __webpack_exports__["d"] = onGetCabinquestTreesSuccess;
/* harmony export (immutable) */ __webpack_exports__["c"] = onGetCabinquestTreesFail;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCabinquestTrees;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./constants/index.js");


function onCabinquestTreesRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* FEED_CABINQUEST_GET_TREES_REQUEST */]
    };
};

function onGetCabinquestTreesSuccess(branches) {
    console.log("action onGetCabinquestTreesSuccess branches: ", branches);

    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS */],
        payload: {
            branches: branches
        }
    };
};

function onGetCabinquestTreesFail(error) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL */],
        payload: {
            error: error
        }
    };
};

function getCabinquestTrees() {
    console.log("action getCabinquestTrees");
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* FEED_CABINQUEST_GET_TREES */]
    };
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

/***/ }),

/***/ "./actions/feed_cabinquest_park_actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export postDefaultParkRequest */
/* unused harmony export postDefaultParkSuccess */
/* unused harmony export postDefaultParkFail */
/* harmony export (immutable) */ __webpack_exports__["i"] = postDefaultPark;
/* harmony export (immutable) */ __webpack_exports__["g"] = onPostCabinQuestTreeRequest;
/* harmony export (immutable) */ __webpack_exports__["f"] = onPostCabinQuestTreeReceivedSuccess;
/* harmony export (immutable) */ __webpack_exports__["e"] = onPostCabinQuestTreeReceivedFail;
/* harmony export (immutable) */ __webpack_exports__["h"] = postCabinQuestTree;
/* harmony export (immutable) */ __webpack_exports__["d"] = onGetCabinQuestParkRequest;
/* harmony export (immutable) */ __webpack_exports__["c"] = onGetCabinQuestParkReceivedSuccess;
/* harmony export (immutable) */ __webpack_exports__["b"] = onGetCabinQuestParkReceivedFail;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCabinQuestPark;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_porthole_PortholeFeedUtils__ = __webpack_require__("./utils/porthole/PortholeFeedUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./constants/index.js");




function postDefaultParkRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["k" /* FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST */]
    };
}

function postDefaultParkSuccess(portholeForest) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["l" /* FEED_CABINQUEST_POST_DEFAULT_PARK_SUCCESS */],
        payload: {
            portholeForest: portholeForest
        }
    };
}

function postDefaultParkFail() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["j" /* FEED_CABINQUEST_POST_DEFAULT_PARK_FAIL */]
    };
}

function postDefaultPark(cabinQuestUser) {
    return function (dispatch, getState) {
        dispatch(postDefaultParkRequest());

        return Object(__WEBPACK_IMPORTED_MODULE_1__utils_porthole_PortholeFeedUtils__["a" /* addDefaultPortholeTrees */])(cabinQuestUser).then(function (response) {
            console.log('postDefaultPark response: ', response);
            var defaultTrees = response;
            return dispatch(postDefaultParkSuccess(defaultTrees));
        }, function (error) {});
    };
}

function onPostCabinQuestTreeRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["p" /* FEED_CABINQUEST_POST_TREE_REQUEST */]
    };
}

function onPostCabinQuestTreeReceivedSuccess() {
    console.log('action onPostCabinQuestTreeReceivedSuccess');

    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["o" /* FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS */]
    };
}

function onPostCabinQuestTreeReceivedFail(error) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["n" /* FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL */],
        payload: {
            error: error
        }
    };
}

function postCabinQuestTree(tree) {
    console.log('action postCabinQuestTree');
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["m" /* FEED_CABINQUEST_POST_TREE */],
        payload: { tree: tree }
    };
}

function onGetCabinQuestParkRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* FEED_CABINQUEST_GET_PARK_REQUEST */]
    };
}

function onGetCabinQuestParkReceivedSuccess(park) {
    console.log('action onGetCabinQuestParkReceivedSuccess park: ', park);

    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS */],
        payload: {
            park: park
        }
    };
}

function onGetCabinQuestParkReceivedFail(error) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL */],
        payload: {
            error: error
        }
    };
}

function getCabinQuestPark() {
    console.log('action getCabinQuestPark');
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* FEED_CABINQUEST_GET_PARK */]
    };
}

/***/ }),

/***/ "./actions/feed_porthole_actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onGetPortholeForestRequest */
/* harmony export (immutable) */ __webpack_exports__["c"] = onGetPortholeForestReceivedSuccess;
/* harmony export (immutable) */ __webpack_exports__["b"] = onGetPortholeForestReceivedFail;
/* harmony export (immutable) */ __webpack_exports__["a"] = getPortholeForest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./constants/index.js");


function onGetPortholeForestRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["t" /* FEED_PORTHOLE_GET_FOREST_REQUEST */]
    };
};

function onGetPortholeForestReceivedSuccess(portholeForest) {
    console.log("action onGetPortholeForestReceivedSuccess portholeForest: ", portholeForest);

    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["s" /* FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS */],
        payload: {
            portholeForest: portholeForest
        }
    };
};

function onGetPortholeForestReceivedFail(error) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL */],
        payload: {
            error: error
        }
    };
};

function getPortholeForest() {
    console.log("action getPortholeForest");
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["q" /* FEED_PORTHOLE_GET_FOREST */]
    };
};

/***/ }),

/***/ "./actions/home_actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["lastAdded"] = lastAdded;
/* harmony export (immutable) */ __webpack_exports__["fetchStarwars"] = fetchStarwars;
/* harmony export (immutable) */ __webpack_exports__["onGetHeaderRequest"] = onGetHeaderRequest;
/* harmony export (immutable) */ __webpack_exports__["onGetHeaderSuccess"] = onGetHeaderSuccess;
/* harmony export (immutable) */ __webpack_exports__["fetchGetHeader"] = fetchGetHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);



var LAST_ADDED = "LAST_ADDED";
var FOO = "FOO";
var STARWARS_REQUEST = "STARWARS_REQUEST";
var STARWARS_RECEIVED_SUCCESS = "STARWARS_RECEIVED_SUCCESS";

function lastAdded(lastAdded) {
  return {
    type: LAST_ADDED,
    payload: {
      lastAdded: lastAdded
    }
  };
}

function onStarwarsSuccess(items) {
  return {
    type: STARWARS_RECEIVED_SUCCESS,
    payload: {
      items: items
    }
  };
}

function onStarwarsRequest() {
  return {
    type: STARWARS_REQUEST
  };
}

function fetchStarwars() {
  return function (dispatch, getState) {
    dispatch(onStarwarsRequest());

    return __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()("/api/user/starwars").then(function (response) {
      if (response.status >= 400) {
        throw new Error("home Bad response from server");
      }
      return response.json();
    }).then(function (json) {
      console.log("home all good", items);
      dispatch(onStarwarsSuccess(items));
      // return {custom: 'custom', answer: "payload", items: json.items};
    });
  };
}

function onGetHeaderRequest() {
  return {
    type: "APP_FETCH_HEADER_REQUESTED"
  };
}

function onGetHeaderSuccess(header) {
  return {
    type: "APP_FETCH_HEADER_RECEIVED_SUCCESS",
    payload: {
      header: header
    }
  };
}

function fetchGetHeader() {
  return {
    type: "APP_FETCH_HEADER"
  };
}

/***/ }),

/***/ "./apollo/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emotion__ = __webpack_require__("emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_emotion__);
var _jsxFileName = "/Users/brandonflowers/cabinquest/apollo/layout.js";



// Add global styles
Object(__WEBPACK_IMPORTED_MODULE_1_emotion__["injectGlobal"])("*{font-family:Menlo,Monaco,\"Lucida Console\",\"Liberation Mono\",\"DejaVu Sans Mono\",\"Bitstream Vera Sans Mono\",\"Courier New\",monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22BAD9;text-decoration:none;}footer{backgroundColor:rgba(255,255,255,.95);bottom:0;font-size:12px;left:0;padding:15px 0;position:fixed;text-align:center;width:100%;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{align-items:center;background-color:#22BAD9;border:0;color:white;display:flex;padding:5px 7px;transition:background-color .3s;}button:active{background-color:#1B9DB7;transition:background-color .3s;}button:focus{outline:none}");

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      },
      children,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "footer",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { href: "http://twitter.com/headwinds", __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          "@headwinds"
        )
      )
    )
  );
});

/***/ }),

/***/ "./app/models/porthole/PortholeBranchModel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PortholeBranchModel = function PortholeBranchModel(tags, photoUrl, photoLargeUrl, images, link, publishedDate, branchTitleUnescape, feedLink, feedTitle, aboutUnescape, index, textUnescape, bUseText, x, y, bViewed, bTrashed) {
    _classCallCheck(this, PortholeBranchModel);

    this.tags = tags;
    this.photoUrl = photoUrl;
    this.photoLargeUrl = photoLargeUrl;
    this.images = images;
    this.link = link;
    this.publishedDate = publishedDate;
    this.title = branchTitleUnescape;
    this.feedLink = feedLink;
    this.feedTitle = feedTitle;
    this.about = aboutUnescape;
    this.index = index;
    this.text = textUnescape;
    this.useText = bUseText;
    this.x = x;
    this.y = y;
    this.bViewed = bViewed;
    this.bTrashed = bTrashed;
    this.origin = "porthole";
};

/* harmony default export */ __webpack_exports__["a"] = (PortholeBranchModel);

/***/ }),

/***/ "./components/ErrorMessage/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./components/ErrorMessage/styles.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/ErrorMessage/index.js';


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var message = _ref.message;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* Container */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    message
  );
});

/***/ }),

/***/ "./components/ErrorMessage/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);


var Container = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('div')({
  padding: '20px',
  fontSize: '14px',
  color: 'white',
  backgroundColor: 'red'
});

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./components/Header/styles.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/Header/index.js';





var Header = function Header(_ref) {
    var pathname = _ref.router.pathname;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* Container */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { prefetch: true, href: '/bellwoods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3__styles__["b" /* LinkText */],
                    { isActive: pathname === '/about' && 'is-active', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    'bellwoods'
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(Header));

/***/ }),

/***/ "./components/Header/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LinkText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);


var Container = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('header')({
  marginBottom: '25px'
});

var LinkText = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('span')(function (props) {
  return {
    fontSize: '14px',
    marginRight: '15px',
    textDecoration: props.isActive ? 'underline' : 'none'
  };
});

/***/ }),

/***/ "./components/PostList/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PostUpvoter__ = __webpack_require__("./components/PostUpvoter/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ErrorMessage__ = __webpack_require__("./components/ErrorMessage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles__ = __webpack_require__("./components/PostList/styles.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/PostList/index.js';

var _templateObject = _taggedTemplateLiteral(['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n    _allPostsMeta {\n      count\n    }\n  }\n'], ['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n    _allPostsMeta {\n      count\n    }\n  }\n']);



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var POSTS_PER_PAGE = 10;

function PostList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      allPosts = _ref$data.allPosts,
      _allPostsMeta = _ref$data._allPostsMeta,
      loadMorePosts = _ref.loadMorePosts;

  if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ErrorMessage__["a" /* default */], { message: 'Error loading posts.', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  });
  if (allPosts && allPosts.length) {
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5__styles__["c" /* Container */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__styles__["d" /* List */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        allPosts.map(function (post, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__styles__["e" /* ListItem */],
            { key: post.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__styles__["f" /* ListItemContainer */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__styles__["g" /* Num */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  }
                },
                index + 1,
                '. '
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__styles__["a" /* A */],
                { href: post.url, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                post.title
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PostUpvoter__["a" /* default */], { id: post.id, votes: post.votes, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              })
            )
          );
        })
      ),
      areMorePosts ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__styles__["b" /* Button */],
        { onClick: function onClick() {
            return loadMorePosts();
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        loading ? 'Loading...' : 'Show More'
      ) : ''
    );
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    },
    'Loading...'
  );
}

var allPosts = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }
            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat(_toConsumableArray(previousResult.allPosts), _toConsumableArray(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList));

/***/ }),

/***/ "./components/PostList/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ListItemContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);


var Container = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('section')({
  paddingBottom: '20px'
});

var List = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('ul')({
  margin: 0,
  padding: 0
});

var ListItem = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('li')({
  display: 'block',
  marginBottom: '10px'
});

var ListItemContainer = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('div')({
  alignItems: 'center',
  display: 'flex'
});

var Num = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('span')({
  fontSize: '14px',
  marginRight: '5px'
});

var A = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('a')({
  fontSize: '14px',
  marginRight: '10px',
  textDecoration: 'none',
  paddingBottom: 0,
  border: 0
});

var Button = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('button')({
  ':before': {
    alignSelf: 'center',
    borderColor: '#ffffff transparent transparent transparent',
    borderStyle: 'solid',
    borderWidth: '6px 4px 0 4px',
    content: '""',
    height: 0,
    marginRight: '5px',
    width: 0
  }
});

/***/ }),

/***/ "./components/PostUpvoter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./components/PostUpvoter/styles.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/PostUpvoter/index.js';

var _templateObject = _taggedTemplateLiteral(['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n'], ['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n']);



function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* Button */],
    { onClick: function onClick() {
        return upvote(id, votes + 1);
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    votes
  );
}

var upvotePost = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes) {
        return mutate({
          variables: { id: id, votes: votes },
          optimisticResponse: {
            __typename: 'Mutation',
            updatePost: {
              __typename: 'Post',
              id: ownProps.id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostUpvoter));

/***/ }),

/***/ "./components/PostUpvoter/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);


var Button = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('button')({
  backgroundColor: 'transparent',
  border: '1px solid #e4e4e4',
  color: '#000',
  ':active': {
    backgroundColor: 'transparent'
  },
  ':before': {
    alignSelf: 'center',
    borderColor: 'transparent transparent #000000 transparent',
    borderStyle: 'solid',
    borderWidth: '0 4px 6px 4px',
    content: '""',
    height: 0,
    marginRight: '5px',
    width: 0
  }
});

/***/ }),

/***/ "./components/Submit/SubmitTree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles__ = __webpack_require__("./components/Submit/styles.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/Submit/SubmitTree.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SubmitTree = function (_Component) {
    _inherits(SubmitTree, _Component);

    function SubmitTree(props) {
        _classCallCheck(this, SubmitTree);

        return _possibleConstructorReturn(this, (SubmitTree.__proto__ || Object.getPrototypeOf(SubmitTree)).call(this, props));
    }

    _createClass(SubmitTree, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var handleSubmit = function handleSubmit(e) {
                e.preventDefault();

                var title = e.target.elements.title.value;
                var url = e.target.elements.url.value;

                if (title === '' || url === '') {
                    window.alert('Both fields are required.');
                    return false;
                }

                // prepend http if missing from url
                if (!url.match(/^[a-zA-Z]+:\/\//)) {
                    url = 'http://' + url;
                }

                _this2.props.postTree(title, url);
                console.log('SubmitTree props: ', _this2.props);

                // reset form
                e.target.elements.title.value = '';
                e.target.elements.url.value = '';
            };

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6__styles__["a" /* Form */],
                { onSubmit: handleSubmit, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6__styles__["b" /* H2 */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    },
                    'Add a Tree'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__styles__["c" /* Input */], { placeholder: 'title', name: 'title', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__styles__["c" /* Input */], { placeholder: 'url', name: 'url', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'submit', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    'Submit'
                )
            );
        }
    }]);

    return SubmitTree;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (SubmitTree);

/***/ }),

/***/ "./components/Submit/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./components/Submit/styles.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/Submit/index.js';

var _templateObject = _taggedTemplateLiteral(['\n    mutation createPost($title: String!, $url: String!) {\n        createPost(title: $title, url: $url) {\n            id\n            title\n            votes\n            url\n            createdAt\n        }\n    }\n'], ['\n    mutation createPost($title: String!, $url: String!) {\n        createPost(title: $title, url: $url) {\n            id\n            title\n            votes\n            url\n            createdAt\n        }\n    }\n']);



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function Submit(_ref) {
    var createPost = _ref.createPost;

    function handleSubmit(e) {
        e.preventDefault();

        var title = e.target.elements.title.value;
        var url = e.target.elements.url.value;

        if (title === '' || url === '') {
            window.alert('Both fields are required.');
            return false;
        }

        // prepend http if missing from url
        if (!url.match(/^[a-zA-Z]+:\/\//)) {
            url = 'http://' + url;
        }

        createPost(title, url);

        // reset form
        e.target.elements.title.value = '';
        e.target.elements.url.value = '';
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* Form */],
        { onSubmit: handleSubmit, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__styles__["b" /* H2 */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            },
            'GraphQl to GraphCool Test'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["c" /* Input */], { placeholder: 'title', name: 'title', __source: {
                fileName: _jsxFileName,
                lineNumber: 32
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["c" /* Input */], { placeholder: 'url', name: 'url', __source: {
                fileName: _jsxFileName,
                lineNumber: 33
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            },
            'Submit'
        )
    );
}

var createPost = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(createPost, {
    props: function props(_ref2) {
        var mutate = _ref2.mutate;
        return {
            createPost: function createPost(title, url) {
                return mutate({
                    variables: { title: title, url: url },
                    updateQueries: {
                        allPosts: function allPosts(previousResult, _ref3) {
                            var mutationResult = _ref3.mutationResult;

                            var newPost = mutationResult.data.createPost;
                            return Object.assign({}, previousResult, {
                                // Append the new post
                                allPosts: [newPost].concat(_toConsumableArray(previousResult.allPosts))
                            });
                        }
                    }
                });
            }
        };
    }
})(Submit));

/***/ }),

/***/ "./components/Submit/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* unused harmony export H1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);


var Form = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('form')({
    borderBottom: '1px solid #ececec',
    paddingBottom: '20px',
    marginBottom: '20px'
});

var H1 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('h1')({
    fontSize: '20px'
});

var H2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('h2')({
    fontSize: '24px'
});

var Input = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('input')({
    display: 'block',
    marginBottom: '10px'
});

/***/ }),

/***/ "./components/bellwoods/Bellwoods.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_materialUITheme__ = __webpack_require__("./theme/materialUITheme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_Store__ = __webpack_require__("./components/bellwoods/store/Store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_styles__ = __webpack_require__("./pages/styles.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/bellwoods/Bellwoods.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */




//import Button from 'material-ui/Button';
//import Paper from 'material-ui/Paper';

//import { withStyles } from 'material-ui/styles';

//import { withRouter } from 'react-router';



var styles = __WEBPACK_IMPORTED_MODULE_4__theme_materialUITheme__["a" /* overrideStyles */];

var Bellwoods = function (_React$Component) {
    _inherits(Bellwoods, _React$Component);

    function Bellwoods(props) {
        _classCallCheck(this, Bellwoods);

        return _possibleConstructorReturn(this, (Bellwoods.__proto__ || Object.getPrototypeOf(Bellwoods)).call(this, props));
    }

    _createClass(Bellwoods, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Bellwoods componentDidMount');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            this.props = nextProps;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(NextProps) {
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__store_Store__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                })
            );
        }
    }]);

    return Bellwoods;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        app: state.app,
        auth: state.auth
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({}, dispatch);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps))(Bellwoods));

/***/ }),

/***/ "./components/bellwoods/store/Store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_materialUITheme__ = __webpack_require__("./theme/materialUITheme.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/bellwoods/store/Store.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */




//import Button from 'material-ui/Button';
//import Paper from 'material-ui/Paper';

//import { withStyles } from 'material-ui/styles';

//import { withRouter } from 'react-router';

var styles = __WEBPACK_IMPORTED_MODULE_4__theme_materialUITheme__["a" /* overrideStyles */];

var Store = function (_React$Component) {
    _inherits(Store, _React$Component);

    function Store(props) {
        _classCallCheck(this, Store);

        return _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this, props));
    }

    _createClass(Store, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Bellwoods componentDidMount');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            this.props = nextProps;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(NextProps) {
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                },
                'buy stuffs'
            );
        }
    }]);

    return Store;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        app: state.app,
        auth: state.auth
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({}, dispatch);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps))(Store));

/***/ }),

/***/ "./components/day/MyDay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/day/MyDay.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */



var MyDay = function (_React$Component) {
    _inherits(MyDay, _React$Component);

    function MyDay() {
        _classCallCheck(this, MyDay);

        return _possibleConstructorReturn(this, (MyDay.__proto__ || Object.getPrototypeOf(MyDay)).apply(this, arguments));
    }

    _createClass(MyDay, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                })
            );
        }
    }]);

    return MyDay;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (MyDay);

/***/ }),

/***/ "./components/day/PostDay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/day/PostDay.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */



var PostDay = function (_React$Component) {
    _inherits(PostDay, _React$Component);

    function PostDay(props) {
        _classCallCheck(this, PostDay);

        var _this = _possibleConstructorReturn(this, (PostDay.__proto__ || Object.getPrototypeOf(PostDay)).call(this, props));

        _this.state = {
            posts: []
        };
        return _this;
    }

    _createClass(PostDay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                })
            );
        }
    }]);

    return PostDay;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (PostDay);

/***/ }),

/***/ "./components/feed/CabinquestFeed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_feed_cabinquest_actions__ = __webpack_require__("./actions/feed_cabinquest_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_feed_porthole_actions__ = __webpack_require__("./actions/feed_porthole_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_feed_cabinquest_park_actions__ = __webpack_require__("./actions/feed_cabinquest_park_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LoadingAnimation__ = __webpack_require__("./components/feed/LoadingAnimation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/brandonflowers/cabinquest/components/feed/CabinquestFeed.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var CabinquestFeed = function (_Component) {
    _inherits(CabinquestFeed, _Component);

    function CabinquestFeed(props) {
        _classCallCheck(this, CabinquestFeed);

        var _this = _possibleConstructorReturn(this, (CabinquestFeed.__proto__ || Object.getPrototypeOf(CabinquestFeed)).call(this, props));

        _this.state = {
            branches: null
        };

        _this.getTress = _this.getTrees.bind(_this);
        return _this;
    }

    _createClass(CabinquestFeed, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('CabinquestFeed mounted');

            this.getTrees();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log('CabinquestFeed componentWillReceiveProps');

            if (nextProps.feed_cabinquest.branches !== null) {
                this.state.branches = nextProps.feed_cabinquest.branches;

                this.setState({ branches: nextProps.feed_cabinquest.branches });
            }
        }
    }, {
        key: 'getTrees',
        value: function getTrees() {
            this.props.getCabinquestTrees();
            this.props.getPortholeForest();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('CabinquestFeed componentDidUpdate this.props: ', this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //

            var _props$feed_cabinques = this.props.feed_cabinquest,
                branches = _props$feed_cabinques.branches,
                portholeForest = _props$feed_cabinques.portholeForest,
                park = _props$feed_cabinques.park;


            if (portholeForest !== null) console.log('CabinquestFeed render portholeForest: ', portholeForest.length);

            var getItems = function getItems() {
                if (branches !== null && branches.length > 0) {
                    return __WEBPACK_IMPORTED_MODULE_7_lodash__["map"](branches, function (branch, uid) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'item', key: uid, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 64
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: branch.photoUrl, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 65
                                }
                            })
                        );
                    });
                } else return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__LoadingAnimation__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                });
            };

            var getPark = function getPark() {
                if (park !== null && park.length > 0) {
                    return __WEBPACK_IMPORTED_MODULE_7_lodash__["map"](park, function (treeModel, uid) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'item', key: uid, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 77
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 78
                                    }
                                },
                                treeModel.title
                            )
                        );
                    });
                } else return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__LoadingAnimation__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                });
            };

            var getForest = function getForest() {
                if (portholeForest !== null && portholeForest.length > 0) {
                    return __WEBPACK_IMPORTED_MODULE_7_lodash__["map"](portholeForest, function (portholeBranchModel, uid) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'item', key: uid, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 89
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: portholeBranchModel.photoUrl, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 90
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 91
                                    }
                                },
                                portholeBranchModel.feedTitle
                            )
                        );
                    });
                } else return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__LoadingAnimation__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                    }
                });
            };

            var listStyle = {
                height: 300,
                width: 300,
                overflow: 'hidden',
                overflowY: 'auto',
                border: '1px dashed #f1f1f1'
            };
            var totalFeeds = this.props.feed_cabinquest.park !== null ? this.props.feed_cabinquest.park.length : 0;

            var getParkContainer = function getParkContainer() {
                if (_this2.props.auth.cabinQuestUser !== null) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 113
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h2',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 114
                                }
                            },
                            'My Trees'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { style: _extends({}, listStyle, { height: 100 }), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 115
                                }
                            },
                            getPark()
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 118
                                }
                            },
                            totalFeeds,
                            ' Feeds'
                        )
                    );
                } else return null;
            };

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125
                    }
                },
                getParkContainer(),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 127
                        }
                    },
                    'Forest'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: listStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 128
                        }
                    },
                    getForest()
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 129
                        }
                    },
                    'Trees'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: listStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 130
                        }
                    },
                    getItems()
                )
            );
        }
    }]);

    return CabinquestFeed;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var matchStateToProps = function matchStateToProps(state) {
    return {
        home: state.home,
        auth: state.auth,
        feed_cabinquest: state.feed_cabinquest
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({ dispatch: dispatch, getCabinquestTrees: __WEBPACK_IMPORTED_MODULE_3__actions_feed_cabinquest_actions__["a" /* getCabinquestTrees */], getPortholeForest: __WEBPACK_IMPORTED_MODULE_4__actions_feed_porthole_actions__["a" /* getPortholeForest */], getCabinQuestPark: __WEBPACK_IMPORTED_MODULE_5__actions_feed_cabinquest_park_actions__["a" /* getCabinQuestPark */] }, dispatch);
};

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(matchStateToProps, mapDispatchToProps)(CabinquestFeed));

/***/ }),

/***/ "./components/feed/LoadingAnimation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("gsap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gsap__);
var _jsxFileName = "/Users/brandonflowers/cabinquest/components/feed/LoadingAnimation.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */



//import * as d3 from "d3";

var LoadingAnimation = function (_React$Component) {
    _inherits(LoadingAnimation, _React$Component);

    function LoadingAnimation(props) {
        _classCallCheck(this, LoadingAnimation);

        var _this = _possibleConstructorReturn(this, (LoadingAnimation.__proto__ || Object.getPrototypeOf(LoadingAnimation)).call(this, props));

        _this.draw = _this.draw.bind(_this);
        _this.animate = _this.animate.bind(_this);

        return _this;
    }

    _createClass(LoadingAnimation, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("LoadingAnimation componentDidMount");

            this.draw();
        }
    }, {
        key: "draw",
        value: function draw() {

            var self = this;
            var url = '../../static/img/bellwoods/animals/chicken/chick/chick.svg';

            //import * as Snap from "snapsvg";
            var Snap = __webpack_require__("./node_modules/imports-loader/index.js?this=>window,fix=>module.exports=0!./node_modules/snapsvg/dist/snap.svg.js");

            Snap.load(url, function (loadedFragment) {

                var snap = window.Snap("#svg");

                console.log("LoadingAnimation draw snap: ", snap);

                var group = snap.group();

                group.append(loadedFragment);
                //group.set({ opacity: 0 });
                //group.animate({ transform: 't-100,0,s3',  opacity: 1  }, 0 );
                //group.select("#spotFill").attr({'fill':getPurpleLite()});
                //group.select("#spotFill").attr({'fill': '#E24B70'});
                group.animate({ transform: 's0.7', opacity: 0 }, 0);

                setTimeout(function () {
                    group.animate({ transform: 't0,15,s3', opacity: 1 }, 3000, mina.elastic);
                }, 0);

                setTimeout(function () {
                    //group.select("#spotFill").attr({'fill': '#E24B70'});
                    group.animate({ transform: 't-10,7,s0.3' }, 3000, mina.bounce);
                }, 1000);
            });
        }
    }, {
        key: "animate",
        value: function animate() {
            console.log("LoadingAnimation animate");
            //TweenMax(this.ship, 5, {top:"100px", ease: Power2.easeInOut} )
            //TweenMax.to(this.ship,2,{top:this.state.top, ease: Power2.easeOut});
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "svgContainer", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", { id: "svg", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                })
            );
        }
    }]);

    return LoadingAnimation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LoadingAnimation);

/***/ }),

/***/ "./components/footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/footer/Footer.js';


/* unused harmony default export */ var _unused_webpack_default_export = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 3
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 4
                }
            },
            'Github'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'https://github.com/headwinds/porthole', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                'porthole'
            )
        )
    );
});

/***/ }),

/***/ "./components/signin/Signin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__("./store/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_home_actions__ = __webpack_require__("./actions/home_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__ = __webpack_require__("./actions/auth_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_feed_cabinquest_park_actions__ = __webpack_require__("./actions/feed_cabinquest_park_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_styled_jsx_css__ = __webpack_require__("styled-jsx/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_styled_jsx_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_styled_jsx_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SocialButton__ = __webpack_require__("./components/signin/SocialButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_graphql_tag__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/brandonflowers/cabinquest/components/signin/Signin.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    mutation createUser($name: String!, $email: String!) {\n        createUser(name: $name, email: $email) {\n            id\n            name\n            email\n            createdAt\n        }\n    }\n'], ['\n    mutation createUser($name: String!, $email: String!) {\n        createUser(name: $name, email: $email) {\n            id\n            name\n            email\n            createdAt\n        }\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var config = __webpack_require__("./config/config.js");

var Signin = function (_Component) {
    _inherits(Signin, _Component);

    _createClass(Signin, null, [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var store = _ref.store,
                isServer = _ref.isServer,
                pathname = _ref.pathname,
                query = _ref.query;
        }
    }]);

    function Signin(props) {
        _classCallCheck(this, Signin);

        var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));

        _this.signinWithGoogle = _this.signinWithGoogle.bind(_this);
        _this.handleSocialLogin = _this.handleSocialLogin.bind(_this);
        _this.handleSocialLoginFailure = _this.handleSocialLoginFailure.bind(_this);
        return _this;
    }

    _createClass(Signin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}
    }, {
        key: 'handleSocialLogin',
        value: function handleSocialLogin(user) {
            var _this2 = this;

            ////.log('Signin user: ', user);

            // have we connected this social account?
            var axiosSocialConfig = {
                url: '/authUsers/addSocialLogin',
                method: 'post',
                data: { user: user }
            };

            __WEBPACK_IMPORTED_MODULE_12_axios___default()(axiosSocialConfig).then(function (response) {
                ////.log('Signin social add response: ', response);
            }, function (error) {
                ////.log('Signin social add error: ', error);
            });

            var axiosCabinQuestConfig = {
                url: '/cabinQuestUsers/getUserByEmail',
                method: 'post',
                data: { user: user.profile }
            };

            __WEBPACK_IMPORTED_MODULE_12_axios___default()(axiosCabinQuestConfig).then(function (response) {
                //.log('Signin cabinquestuser: ', response);

                var cabinQuestUser = response.data.model;
                if (cabinQuestUser.status === 'minted') {
                    _this2.props.postDefaultPark(cabinQuestUser);
                }

                _this2.props.setCabinQuestUser(cabinQuestUser);

                _this2.props.getCabinQuestPark();

                var name = cabinQuestUser.username;

                if (user && user.profile.email) {
                    var email = user.profile.email;
                    /*
                    this.props.getUser(email).then(
                        response => {
                            //.log('Signin getUser');
                             //this.props.createUser(name, email);
                        },
                        error => {}
                    );
                    */
                }

                //.log('Signin cabinquestuser this.props: ', this.props);
            }, function (error) {});
        }
    }, {
        key: 'handleSocialLoginFailure',
        value: function handleSocialLoginFailure(err) {
            //.log(err);
        }
    }, {
        key: 'signinWithGoogle',
        value: function signinWithGoogle() {
            // this.props.fetchSignin("google");
            // this.props.history.push("/auth/google");
            location.href = '/auth/google';
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_11__SocialButton__["a" /* default */],
                    {
                        provider: 'google',
                        appId: config.google.clientID,
                        onLoginSuccess: this.handleSocialLogin,
                        onLoginFailure: this.handleSocialLoginFailure,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 124
                        }
                    },
                    'Login with Google'
                )
            );
        }
    }]);

    return Signin;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
/*
https://medium.com/handlebar-labs/graphql-authentication-with-react-native-apollo-part-1-2-9613aacd80b3
*/

var createUser = __WEBPACK_IMPORTED_MODULE_14_graphql_tag___default()(_templateObject);

var matchStateToProps = function matchStateToProps(state) {
    return { home: state.home };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_6__actions_home_actions__, __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__, { getCabinQuestPark: __WEBPACK_IMPORTED_MODULE_8__actions_feed_cabinquest_park_actions__["a" /* getCabinQuestPark */], postDefaultPark: __WEBPACK_IMPORTED_MODULE_8__actions_feed_cabinquest_park_actions__["i" /* postDefaultPark */] }), dispatch);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_13_react_apollo__["graphql"])(createUser, {
    props: function props(_ref2) {
        var mutate = _ref2.mutate;
        return {
            createUser: function createUser(name, email) {
                return mutate({
                    variables: { name: name, email: email },
                    updateQueries: {
                        allPosts: function allPosts(previousResult, _ref3) {
                            var mutationResult = _ref3.mutationResult;

                            var newUser = mutationResult.data.createUser;
                            return Object.assign({}, previousResult, {
                                // Append the new post
                                //allUsers: [newUser, ...previousResult.allUsers]
                            });
                        }
                    }
                });
            }
        };
    }
}), __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */], matchStateToProps, mapDispatchToProps))(Signin));

/***/ }),

/***/ "./components/signin/SocialButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_social_login__ = __webpack_require__("react-social-login");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_social_login__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/brandonflowers/cabinquest/components/signin/SocialButton.js";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Button = function Button(_ref) {
  var children = _ref.children,
      triggerLogin = _ref.triggerLogin,
      props = _objectWithoutProperties(_ref, ["children", "triggerLogin"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "button",
    _extends({ onClick: triggerLogin }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_react_social_login___default()(Button));

/***/ }),

/***/ "./components/timeline/Timeline.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/timeline/Timeline.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */



var Timeline = function (_React$Component) {
    _inherits(Timeline, _React$Component);

    function Timeline() {
        _classCallCheck(this, Timeline);

        return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
    }

    _createClass(Timeline, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                })
            );
        }
    }]);

    return Timeline;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Timeline);

/***/ }),

/***/ "./config/config.js":
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__("underscore");

// Load app configuration
// see all.js for properties

var env = String("development") !== "undefined" ? "development" : "development";

module.exports = _.extend(__webpack_require__("./config/env/all.js"), __webpack_require__("./config/env recursive ^\\.\\/.*\\.js$")("./" + env + ".js") || {});

/***/ }),

/***/ "./config/env recursive ^\\.\\/.*\\.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all.js": "./config/env/all.js",
	"./development.js": "./config/env/development.js",
	"./development_sample.js": "./config/env/development_sample.js",
	"./production.js": "./config/env/production.js",
	"./production_sample.js": "./config/env/production_sample.js",
	"./test.js": "./config/env/test.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./config/env recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./config/env/all.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var path = __webpack_require__("path"),
    rootPath = path.normalize(__dirname + '/../..');

module.exports = {
   root: rootPath,
   db: process.env.MONGOHQ_URL,
   // should be non-guessable - this is pretty guessable... so?! might want to change that later when I know more...
   sessionSecret: 'cabinquest',
   // The name of the MongoDB collection to store sessions in
   sessionCollection: 'sessions',
   pitch: 'is a game about the overlap of city and country. It also allows you to organize your RSS feeds into collections which can be accessed from and contribute to the game.',
   title: 'cabinquest'
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./config/env/development.js":
/***/ (function(module, exports) {

module.exports = {
  db: "mongodb://headwinds:Bedford22@ds045614.mlab.com:45614/nationalpark",
  app: {
    name: "cabinquest"
  },
  facebook: {
    clientID: "1523865861168072",
    clientSecret: "5520ce4a6ef9746c3a6ed7278f9df393",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  twitter: {
    clientID: "GX6Zh0AyFv4OVXg5jncCkLkg9",
    clientSecret: "YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl",
    callbackURL: "http://localhost:3000/auth/twitter/callback"
  },
  github: {
    clientID: "c2b4a2674c27571e7c80",
    clientSecret: "31b30ad2948165852381a2c7d7c506cb7966401e",
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  google: {
    clientID: "347820260770-3h2jms65i96gur0s5nevtgl4h9gch1of.apps.googleusercontent.com",
    clientSecret: "bSJtwAoNAE66UfBh191hEU_Q",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  port: process.env.PORT || 3000,
  host: "localhost"
};

/***/ }),

/***/ "./config/env/development_sample.js":
/***/ (function(module, exports) {

module.exports = {
  db: "",
  app: {
    name: "cabinquest"
  },
  facebook: {
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  twitter: {
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/twitter/callback"
  },
  github: {
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  google: {
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  port: process.env.PORT || 3000,
  host: "localhost"
};

/***/ }),

/***/ "./config/env/production.js":
/***/ (function(module, exports) {

module.exports = {
  db: "mongodb://headwinds:Bedford22@ds045614.mlab.com:45614/nationalpark",
  app: {
    name: "cabinquest"
  },
  facebook: {
    clientID: "1523864221168236",
    clientSecret: "f2a4451fcc3f213db8b03e580f3edc5f",
    callbackURL: "https://cabinquest.now.sh/auth/facebook/callback"
  },
  twitter: {
    clientID: "Sbrkfm4VFG8YhS4QriGrQD5aR",
    clientSecret: "m31nnfIIm8ppvI44hcAgn4YBQQXM7APBmd359kl4lsxcb3XIBk",
    callbackURL: "https://cabinquest.now.sh/auth/twitter/callback"
  },
  github: {
    clientID: "b463b763d963b98427eb",
    clientSecret: "e66caa9000194bf718c8d7189c8df147ad5dfbf3",
    callbackURL: "https://cabinquest.now.sh/auth/github/callback"
  },
  google: {
    clientID: "519628292035-d5kmnmf00tgtnhpi2n3tiblcnnlpba1e.apps.googleusercontent.com",
    clientSecret: "Ka_fJNc6zBmoCvYv_Sp8lsUl",
    callbackURL: "https://cabinquest.now.sh/auth/google/callback"
  },
  port: process.env.PORT || 80,
  host: "cabinquest.mod.bz"
};

/***/ }),

/***/ "./config/env/production_sample.js":
/***/ (function(module, exports) {

module.exports = {
  db: "",
  app: {
    name: "cabinquest"
  },
  facebook: {
    clientID: "",
    clientSecret: "",
    callbackURL: "https://cabinquest.now.sh/auth/facebook/callback"
  },
  twitter: {
    clientID: "",
    clientSecret: "",
    callbackURL: "https://cabinquest.now.sh/auth/twitter/callback"
  },
  github: {
    clientID: "",
    clientSecret: "",
    callbackURL: "https://cabinquest.now.sh/auth/github/callback"
  },
  google: {
    clientID: "",
    clientSecret: "",
    callbackURL: "https://cabinquest.now.sh/auth/google/callback"
  },
  port: process.env.PORT || 80,
  host: ""
};

/***/ }),

/***/ "./config/env/test.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    db: "mongodb://localhost/mean-test",
    port: 3001,
    app: {
        name: "MEAN - A Modern Stack - Test"
    },
    facebook: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
};

/***/ }),

/***/ "./config/porthole/PortholeConfig.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var PortholeConfig = function () {
    function PortholeConfig() {
        _classCallCheck(this, PortholeConfig);

        this.getServerPath = this.getServerPath.bind(this);
        this.isMobile = this.isMobile.bind(this);
        this.track = this.track.bind(this);
        this.getTabletBreakPoint = this.getTabletBreakPoint.bind(this);
        this.getGrid = this.getGrid.bind(this);
        this.getDefaultFeedTitle = this.getDefaultFeedTitle.bind(this);
        this.getDefaultForesTitle = this.getDefaultForesTitle.bind(this);
        this.getQuests = this.getQuests.bind(this);
        this.getLog = this.getLog.bind(this);
    }

    _createClass(PortholeConfig, [{
        key: 'getServerPath',
        value: function getServerPath() {
            var prodPath = 'https://cabinquest.now.sh';
            var devPath = 'http://localhost:' + __WEBPACK_IMPORTED_MODULE_1__config___default.a.port;

            if (false) {
                //
                return prodPath;
            } else {
                return devPath;
            }
            /*
            //var localPath = "http://localhost:" + location.port;
            var localPath = "http://localhost:3000";
            var remotePath = "http://cabinquest-50966.onmodulus.net"; //"http://cabinquest.jit.su";
             var serverPath = (document && document.domain !== "cabinquest-50966.onmodulus.net") ? localPath : remotePath;
            //serverPath = "http://www.cabinquest.jit.su";
            //var serverPath = ($window.isNative) ? "http://www.cabinquest.jit.su" : "";
            //serverPath = ( document.location.port === "8888" ) ? "http://www.cabinquest.jit.su" : "";
            //serverPath = "http://www.cabinquest.jit.su";
            //var serverPath = "http://www.cabinquest.jit.su";
            */
        }
    }, {
        key: 'isMobile',
        value: function isMobile() {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);

            if (this.log) console.log('ConfigService - isMobile check: ' + check);

            return check;
        }
    }, {
        key: 'track',
        value: function track(category, action, opt_label, opt_value, opt_noninteraction) {
            category = typeof category !== 'undefined' ? category : 'missing!';
            action = typeof action !== 'undefined' ? action : 'missing!';
            opt_label = typeof opt_label !== 'undefined' ? opt_label : 'none';
            opt_value = typeof opt_value !== 'undefined' ? opt_value : 'none';
            opt_noninteraction = typeof opt_noninteraction !== 'undefined' ? opt_noninteraction : 'none';

            var domain = document && document.domain.indexOf('cabinquest') === -1 ? ' porthole' : ' cabinquest';
            // var id = domain  + ' ' + trackStr;

            opt_noninteraction += domain;

            // _trackEvent(category, action, opt_label, opt_value, opt_noninteraction)

            _gaq.push(['_trackEvent', category, action, opt_label, opt_value, opt_noninteraction]);
        }
    }, {
        key: 'isNative',
        value: function isNative() {
            return window.isNative;
        }
    }, {
        key: 'getTabletBreakPoint',
        value: function getTabletBreakPoint() {
            return { width: 700, height: 500 };
        }
    }, {
        key: 'getGrid',
        value: function getGrid() {
            // full 6 x 8
            // park 3 x 5
            return { rows: 6, columns: 8 };
        }
    }, {
        key: 'getDefaultFeedTitle',
        value: function getDefaultFeedTitle() {
            return 'Porthole';
        }
    }, {
        key: 'getDefaultForesTitle',
        value: function getDefaultForesTitle() {
            return 'bellwoods';
        }
    }, {
        key: 'getQuests',
        value: function getQuests() {
            var setupReviewCollection = function setupReviewCollection() {
                // $location.path('/bellwoods/park').search({treeOption: 0});
                // $rootScope.$broadcast("NavViewController:forest:click");
            };

            var quest0 = {
                title: 'Cultivate Forest',
                description: '',
                action: setupReviewCollection
            };

            return [quest0];
        }
    }, {
        key: 'getParkPattern',
        value: function getParkPattern() {
            var row0 = ['0_0'];

            var pattern = [];

            return pattern;
        }
    }, {
        key: 'getConcernedViews',
        value: function getConcernedViews() {
            return ['ProfileViewController', 'PortholeSettingsViewController', 'PortholeMediaController'];
        }
    }, {
        key: 'getLog',
        value: function getLog(className) {
            return;

            var logs = [{ className: 'BigCityBraveFactory', log: false }, { className: 'BellwoodsGameActorsFactory', log: false }, { className: 'BellwoodsTreeActorFactory', log: false }, { className: 'BellwoodsModel', log: false }, { className: 'BellwoodsGameController', log: false }, { className: 'BranchesViewController', log: false }, { className: 'ClusterFactory', log: false }, { className: 'CabinQuestUserFactoryService', log: false }, { className: 'CabinQuestViewController', log: false }, { className: 'ControlsViewController', log: false }, { className: 'DronePreloaderFactory', log: false }, { className: 'EvergreenGoldRushFactory', log: false }, { className: 'FileUploadController', log: false }, { className: 'HiveViewController', log: false }, { className: 'HikingPreloaderFactory', log: false }, { className: 'IndexCtrl', log: false }, { className: 'ItemViewController', log: false }, { className: 'LeafViewController', log: false }, { className: 'MessagesViewController', log: false }, { className: 'PortholeSettingsViewController', log: false }, { className: 'PortholeMediaController', log: true }, { className: 'PortholeTreeUtil', log: false }, { className: 'PortholeTreeService', log: false }, { className: 'PortholeViewController', log: true }, { className: 'PortholeImageService', log: false }, { className: 'ProfileViewController', log: false }, { className: 'PortholeAppViewController', log: true }, { className: 'PreloaderShieldController', log: false }, { className: 'NavCtrl', log: false }, { className: 'SigninCtrl', log: false }, { className: 'SpaceViewController', log: true }, { className: 'SpaceFactory', log: false }, { className: 'SpaceAssetFactory', log: true }, { className: 'SpaceAssetConfigFactory', log: false }, { className: 'SpaceStoreFactory', log: false }, { className: 'StoreViewController', log: false }, { className: 'TreeFactoryService', log: false }, { className: 'TagsViewController', log: false }, { className: 'TreeViewController', log: false }, { className: 'UnitAnimationFactory', log: false }, { className: 'TakeoutViewController', log: false }];

            // turn off all in prod
            // docuent is not available server side
            if (document) {
                if (document.domain === 'dilfffpckfhcpgidnmgaeoidgekcjlln' || document.domain === 'cabinquest-50966.onmodulus.net') {
                    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](logs, function (item) {
                        item.log = false;
                    });
                }
            }
            //

            // var result = _.findWhere(logs, {className: className, log: true});

            // return (undefined !== result ) ? true : false;
            return true;
        }
    }]);

    return PortholeConfig;
}();

/* harmony default export */ __webpack_exports__["a"] = (new PortholeConfig());

/***/ }),

/***/ "./constants/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CABINQUEST_SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FEED_CABINQUEST_POST_TREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return FEED_CABINQUEST_POST_TREE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FEED_CABINQUEST_GET_TREES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FEED_CABINQUEST_GET_TREES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEED_CABINQUEST_GET_PARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FEED_CABINQUEST_GET_PARK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FEED_CABINQUEST_POST_DEFAULT_PARK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FEED_CABINQUEST_POST_DEFAULT_PARK_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return FEED_PORTHOLE_GET_FOREST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return FEED_PORTHOLE_GET_FOREST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL; });
/**
 * Created by brandon.flowers on 9/28/17.
 */

// CABINQUEST

var CABINQUEST_SET_USER = 'CABINQUEST_SET_USER';

var FEED_CABINQUEST_POST_TREE = 'FEED_CABINQUEST_POST_TREE';
var FEED_CABINQUEST_POST_TREE_REQUEST = 'FEED_CABINQUEST_POST_TREE_REQUEST';
var FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS = 'FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS';
var FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL = 'FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL';

var FEED_CABINQUEST_GET_TREES = 'FEED_CABINQUEST_GET_TREES';
var FEED_CABINQUEST_GET_TREES_REQUEST = 'FEED_CABINQUEST_GET_TREES_REQUEST';
var FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS = 'FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS';
var FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL = 'FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL';

var FEED_CABINQUEST_GET_PARK = 'FEED_CABINQUEST_GET_PARK';
var FEED_CABINQUEST_GET_PARK_REQUEST = 'FEED_CABINQUEST_GET_PARK_REQUEST';
var FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS = 'FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS';
var FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL = 'FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL';

var FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST = 'FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST';
var FEED_CABINQUEST_POST_DEFAULT_PARK_SUCCESS = 'FEED_CABINQUEST_POST_DEFAULT_PARK_SUCCESS';
var FEED_CABINQUEST_POST_DEFAULT_PARK_FAIL = 'FEED_CABINQUEST_POST_DEFAULT_PARK_FAIL';

// PORTHOLE

var FEED_PORTHOLE_GET_FOREST = 'FEED_PORTHOLE_GET_FOREST';
var FEED_PORTHOLE_GET_FOREST_REQUEST = 'FEED_PORTHOLE_GET_FOREST_REQUEST';
var FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS = 'FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS';
var FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL = 'FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL';

/***/ }),

/***/ "./node_modules/imports-loader/index.js?this=>window,fix=>module.exports=0!./node_modules/snapsvg/dist/snap.svg.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
(function() {
var fix = module.exports=0;

// Snap.svg 0.5.0
//
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-06

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.0 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.5.0",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function () {},
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function () {
            for (var i = 0, ii = this.length; i < ii; i++) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        lastDefined = function () {
            var i = this.length;
            while (--i) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        objtos = Object.prototype.toString,
        Str = String,
        isArray = Array.isArray || function (ar) {
            return ar instanceof Array || objtos.call(ar) == "[object Array]";
        };
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     > Arguments

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
        eve = function (name, scope) {
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out;
        };
        // Undocumented. Debug only.
        eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     > Arguments

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = isArray(name) ? name : name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]

     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.

     - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/
    eve.separator = function (sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else {
            separator = /[\.\/]/;
        }
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        if (typeof f != "function") {
            return function () {};
        }
        var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = isArray(name) ? name : Str(name).split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            }(names[i]));
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events],
            inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                        inodes.unshift({
                            n: e,
                            name: names[i]
                        });
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                        inodes.unshift({
                            n: e,
                            name: key
                        });
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for (i = 0, ii = inodes.length; i < ii; i++) {
            e = inodes[i];
            for (key in e.n[e.name].f) {
                // not empty (has listeners)
                continue prune;
            }
            for (key in e.n[e.name].n) {
                // not empty (has children)
                continue prune;
            }
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = ((function() { return eve; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)))) : (glob.eve = eve));
})(this);

(function (glob, factory) {
    // AMD support
    if (true) {
        // Define as an anonymous module
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (eve) {
            return factory(glob, eve);
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports != "undefined") {
        // Next for Node.js or CommonJS
        var eve = require("eve");
        module.exports = factory(glob, eve);
    } else {
        // Browser globals (glob is window)
        // Snap adds itself to window
        factory(glob, glob.eve);
    }
}(window || this, function (window, eve) {

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = (function (eve) {
    var animations = {},
    requestAnimFrame = window.requestAnimationFrame       ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame    ||
                       window.oRequestAnimationFrame      ||
                       window.msRequestAnimationFrame     ||
                       function (callback) {
                           setTimeout(callback, 16, new Date().getTime());
                           return true;
                       },
    requestID,
    isArray = Array.isArray || function (a) {
        return a instanceof Array ||
            Object.prototype.toString.call(a) == "[object Array]";
    },
    idgen = 0,
    idprefix = "M" + (+new Date).toString(36),
    ID = function () {
        return idprefix + (idgen++).toString(36);
    },
    diff = function (a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
    timer = Date.now || function () {
        return +new Date;
    },
    sta = function (val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
    speed = function (val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
    duration = function (val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
    stopit = function () {
        var a = this;
        delete animations[a.id];
        a.update();
        eve("mina.stop." + a.id, a);
    },
    pause = function () {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    },
    resume = function () {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
        frame();
    },
    update = function () {
        var a = this,
            res;
        if (isArray(a.start)) {
            res = [];
            for (var j = 0, jj = a.start.length; j < jj; j++) {
                res[j] = +a.start[j] +
                    (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res);
    },
    frame = function (timeStamp) {
        // Manual invokation?
        if (!timeStamp) {
            // Frame loop stopped?
            if (!requestID) {
                // Start frame loop...
                requestID = requestAnimFrame(frame);
            }
            return;
        }
        var len = 0;
        for (var i in animations) if (animations.hasOwnProperty(i)) {
            var a = animations[i],
                b = a.get(),
                res;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
                delete animations[i];
                a.s = 1;
                len--;
                (function (a) {
                    setTimeout(function () {
                        eve("mina.finish." + a.id, a);
                    });
                }(a));
            }
            a.update();
        }
        requestID = len ? requestAnimFrame(frame) : false;
    },
    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in general case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/
    mina = function (a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for (i in animations) if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
                break;
            }
        }
        len == 1 && frame();
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
            (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < 1 / p) {
            l = s * n * n;
        } else {
            if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
            } else {
                if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
})(typeof eve == "undefined" ? function () {} : eve);

// Copyright (c) 2013 - 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = (function(root) {
Snap.version = "0.5.1";
/*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - array (array) array of elements (will return set of elements)
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/
function Snap(w, h) {
    if (w) {
        if (w.nodeType) {
            return wrap(w);
        }
        if (is(w, "array") && Snap.set) {
            return Snap.set.apply(Snap, w);
        }
        if (w instanceof Element) {
            return w;
        }
        if (h == null) {
            // try {
                w = glob.doc.querySelector(String(w));
                return wrap(w);
            // } catch (e) {
                // return null;
            // }
        }
    }
    w = w == null ? "100%" : w;
    h = h == null ? "100%" : h;
    return new Paper(w, h);
}
Snap.toString = function () {
    return "Snap v" + this.version;
};
Snap._ = {};
var glob = {
    win: root.window,
    doc: root.window.document
};
Snap._.glob = glob;
var has = "hasOwnProperty",
    Str = String,
    toFloat = parseFloat,
    toInt = parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    PI = math.PI,
    round = math.round,
    E = "",
    S = " ",
    objectToString = Object.prototype.toString,
    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    separator = Snap._.separator = /[,\s]+/,
    whitespace = /[\s]/g,
    commaSpaces = /[\s]*,[\s]*/,
    hsrg = {hs: 1, rg: 1},
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig,
    idgen = 0,
    idprefix = "S" + (+new Date).toString(36),
    ID = function (el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    },
    xlink = "http://www.w3.org/1999/xlink",
    xmlns = "http://www.w3.org/2000/svg",
    hub = {},
    /*\
     * Snap.url
     [ method ]
     **
     * Wraps path into `"url('<path>')"`.
     - value (string) path
     = (string) wrapped path
    \*/
    URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

function $(el, attr) {
    if (attr) {
        if (el == "#text") {
            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
        }
        if (el == "#comment") {
            el = glob.doc.createComment(attr.text || attr["#text"] || "");
        }
        if (typeof el == "string") {
            el = $(el);
        }
        if (typeof attr == "string") {
            if (el.nodeType == 1) {
                if (attr.substring(0, 6) == "xlink:") {
                    return el.getAttributeNS(xlink, attr.substring(6));
                }
                if (attr.substring(0, 4) == "xml:") {
                    return el.getAttributeNS(xmlns, attr.substring(4));
                }
                return el.getAttribute(attr);
            } else if (attr == "text") {
                return el.nodeValue;
            } else {
                return null;
            }
        }
        if (el.nodeType == 1) {
            for (var key in attr) if (attr[has](key)) {
                var val = Str(attr[key]);
                if (val) {
                    if (key.substring(0, 6) == "xlink:") {
                        el.setAttributeNS(xlink, key.substring(6), val);
                    } else if (key.substring(0, 4) == "xml:") {
                        el.setAttributeNS(xmlns, key.substring(4), val);
                    } else {
                        el.setAttribute(key, val);
                    }
                } else {
                    el.removeAttribute(key);
                }
            }
        } else if ("text" in attr) {
            el.nodeValue = attr.text;
        }
    } else {
        el = glob.doc.createElementNS(xmlns, el);
    }
    return el;
}
Snap._.$ = $;
Snap._.id = ID;
function getAttrs(el) {
    var attrs = el.attributes,
        name,
        out = {};
    for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].namespaceURI == xlink) {
            name = "xlink:";
        } else {
            name = "";
        }
        name += attrs[i].name;
        out[name] = attrs[i].textContent;
    }
    return out;
}
function is(o, type) {
    type = Str.prototype.toLowerCase.call(type);
    if (type == "finite") {
        return isFinite(o);
    }
    if (type == "array" &&
        (o instanceof Array || Array.isArray && Array.isArray(o))) {
        return true;
    }
    return  type == "null" && o === null ||
            type == typeof o && o !== null ||
            type == "object" && o === Object(o) ||
            objectToString.call(o).slice(8, -1).toLowerCase() == type;
}
/*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/
Snap.format = (function () {
    var tokenRegex = /\{([^\}]+)\}/g,
        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function (all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
    return function (str, obj) {
        return Str(str).replace(tokenRegex, function (all, key) {
            return replacer(all, key, obj);
        });
    };
})();
function clone(obj) {
    if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
    }
    var res = new obj.constructor;
    for (var key in obj) if (obj[has](key)) {
        res[key] = clone(obj[key]);
    }
    return res;
}
Snap._.clone = clone;
function repush(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
    }
}
function cacher(f, scope, postprocessor) {
    function newf() {
        var arg = Array.prototype.slice.call(arguments, 0),
            args = arg.join("\u2400"),
            cache = newf.cache = newf.cache || {},
            count = newf.count = newf.count || [];
        if (cache[has](args)) {
            repush(count, args);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(scope, arg);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
    }
    return newf;
}
Snap._.cacher = cacher;
function angle(x1, y1, x2, y2, x3, y3) {
    if (x3 == null) {
        var x = x1 - x2,
            y = y1 - y2;
        if (!x && !y) {
            return 0;
        }
        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
    } else {
        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
    }
}
function rad(deg) {
    return deg % 360 * PI / 180;
}
function deg(rad) {
    return rad * 180 / PI % 360;
}
function x_y() {
    return this.x + S + this.y;
}
function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
}

/*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/
Snap.rad = rad;
/*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/
Snap.deg = deg;
/*\
 * Snap.sin
 [ method ]
 **
 * Equivalent to `Math.sin()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) sin
\*/
Snap.sin = function (angle) {
    return math.sin(Snap.rad(angle));
};
/*\
 * Snap.tan
 [ method ]
 **
 * Equivalent to `Math.tan()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) tan
\*/
Snap.tan = function (angle) {
    return math.tan(Snap.rad(angle));
};
/*\
 * Snap.cos
 [ method ]
 **
 * Equivalent to `Math.cos()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) cos
\*/
Snap.cos = function (angle) {
    return math.cos(Snap.rad(angle));
};
/*\
 * Snap.asin
 [ method ]
 **
 * Equivalent to `Math.asin()` only works with degrees, not radians.
 - num (number) value
 = (number) asin in degrees
\*/
Snap.asin = function (num) {
    return Snap.deg(math.asin(num));
};
/*\
 * Snap.acos
 [ method ]
 **
 * Equivalent to `Math.acos()` only works with degrees, not radians.
 - num (number) value
 = (number) acos in degrees
\*/
Snap.acos = function (num) {
    return Snap.deg(math.acos(num));
};
/*\
 * Snap.atan
 [ method ]
 **
 * Equivalent to `Math.atan()` only works with degrees, not radians.
 - num (number) value
 = (number) atan in degrees
\*/
Snap.atan = function (num) {
    return Snap.deg(math.atan(num));
};
/*\
 * Snap.atan2
 [ method ]
 **
 * Equivalent to `Math.atan2()` only works with degrees, not radians.
 - num (number) value
 = (number) atan2 in degrees
\*/
Snap.atan2 = function (num) {
    return Snap.deg(math.atan2(num));
};
/*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/
Snap.angle = angle;
/*\
 * Snap.len
 [ method ]
 **
 * Returns distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len = function (x1, y1, x2, y2) {
    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
};
/*\
 * Snap.len2
 [ method ]
 **
 * Returns squared distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len2 = function (x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
};
/*\
 * Snap.closestPoint
 [ method ]
 **
 * Returns closest point to a given one on a given path.
 - path (Element) path element
 - x (number) x coord of a point
 - y (number) y coord of a point
 = (object) in format
 {
    x (number) x coord of the point on the path
    y (number) y coord of the point on the path
    length (number) length of the path to the point
    distance (number) distance from the given point to the path
 }
\*/
// Copied from http://bl.ocks.org/mbostock/8027637
Snap.closestPoint = function (path, x, y) {
    function distance2(p) {
        var dx = p.x - x,
            dy = p.y - y;
        return dx * dx + dy * dy;
    }
    var pathNode = path.node,
        pathLength = pathNode.getTotalLength(),
        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
        best,
        bestLength,
        bestDistance = Infinity;

    // linear scan for coarse approximation
    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
            best = scan;
            bestLength = scanLength;
            bestDistance = scanDistance;
        }
    }

    // binary search for precise estimate
    precision *= .5;
    while (precision > .5) {
        var before,
            after,
            beforeLength,
            afterLength,
            beforeDistance,
            afterDistance;
        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
            best = before;
            bestLength = beforeLength;
            bestDistance = beforeDistance;
        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
            best = after;
            bestLength = afterLength;
            bestDistance = afterDistance;
        } else {
            precision *= .5;
        }
    }

    best = {
        x: best.x,
        y: best.y,
        length: bestLength,
        distance: Math.sqrt(bestDistance)
    };
    return best;
}
/*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/
Snap.is = is;
/*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/
Snap.snapTo = function (values, value, tolerance) {
    tolerance = is(tolerance, "finite") ? tolerance : 10;
    if (is(values, "array")) {
        var i = values.length;
        while (i--) if (abs(values[i] - value) <= tolerance) {
            return values[i];
        }
    } else {
        values = +values;
        var rem = value % values;
        if (rem < tolerance) {
            return value - rem;
        }
        if (rem > values - tolerance) {
            return value - rem + values;
        }
    }
    return value;
};
// Colour
/*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/
Snap.getRGB = cacher(function (colour) {
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    if (colour == "none") {
        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
    }
    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
    if (!colour) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    var res,
        red,
        green,
        blue,
        opacity,
        t,
        values,
        rgb = colour.match(colourRegExp);
    if (rgb) {
        if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
            values = rgb[4].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        }
        if (rgb[5]) {
            values = rgb[5].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
            values = rgb[6].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsl2rgb(red, green, blue, opacity);
        }
        red = mmin(math.round(red), 255);
        green = mmin(math.round(green), 255);
        blue = mmin(math.round(blue), 255);
        opacity = mmin(mmax(opacity, 0), 1);
        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
        rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
        rgb.opacity = is(opacity, "finite") ? opacity : 1;
        return rgb;
    }
    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
}, Snap);
/*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/
Snap.hsb = cacher(function (h, s, b) {
    return Snap.hsb2rgb(h, s, b).hex;
});
/*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/
Snap.hsl = cacher(function (h, s, l) {
    return Snap.hsl2rgb(h, s, l).hex;
});
/*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/
Snap.rgb = cacher(function (r, g, b, o) {
    if (is(o, "finite")) {
        var round = math.round;
        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
    }
    return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
});
var toHex = function (color) {
    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
        red = "rgb(255, 0, 0)";
    toHex = cacher(function (color) {
        if (color.toLowerCase() == "red") {
            return red;
        }
        i.style.color = red;
        i.style.color = color;
        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        return out == red ? null : out;
    });
    return toHex(color);
},
hsbtoString = function () {
    return "hsb(" + [this.h, this.s, this.b] + ")";
},
hsltoString = function () {
    return "hsl(" + [this.h, this.s, this.l] + ")";
},
rgbtoString = function () {
    return this.opacity == 1 || this.opacity == null ?
            this.hex :
            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
},
prepareRGB = function (r, g, b) {
    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g = r.g;
        r = r.r;
    }
    if (g == null && is(r, string)) {
        var clr = Snap.getRGB(r);
        r = clr.r;
        g = clr.g;
        b = clr.b;
    }
    if (r > 1 || g > 1 || b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
    }

    return [r, g, b];
},
packageRGB = function (r, g, b, o) {
    r = math.round(r * 255);
    g = math.round(g * 255);
    b = math.round(b * 255);
    var rgb = {
        r: r,
        g: g,
        b: b,
        opacity: is(o, "finite") ? o : 1,
        hex: Snap.rgb(r, g, b),
        toString: rgbtoString
    };
    is(o, "finite") && (rgb.opacity = o);
    return rgb;
};
/*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/
Snap.color = function (clr) {
    var rgb;
    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
        rgb = Snap.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
        rgb = Snap.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else {
        if (is(clr, "string")) {
            clr = Snap.getRGB(clr);
        }
        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
            rgb = Snap.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = Snap.rgb2hsb(clr);
            clr.v = rgb.b;
        } else {
            clr = {hex: "none"};
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            clr.error = 1;
        }
    }
    clr.toString = rgbtoString;
    return clr;
};
/*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsb2rgb = function (h, s, v, o) {
    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        o = h.o;
        h = h.h;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsl2rgb = function (h, s, l, o) {
    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
        l = h.l;
        s = h.s;
        h = h.h;
    }
    if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/
Snap.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = C == 0 ? null :
        V == r ? (g - b) / C :
        V == g ? (b - r) / C + 2 :
                 (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    S = C == 0 ? 0 : C / V;
    return {h: H, s: S, b: V, toString: hsbtoString};
};
/*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/
Snap.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = C == 0 ? null :
        M == r ? (g - b) / C :
        M == g ? (b - r) / C + 2 :
                 (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    L = (M + m) / 2;
    S = C == 0 ? 0 :
         L < .5 ? C / (2 * L) :
                  C / (2 - 2 * L);
    return {h: H, s: S, l: L, toString: hsltoString};
};

// Transformations
/*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/
Snap.parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    var pth = Snap.path(pathString);
    if (pth.arr) {
        return Snap.path.clone(pth.arr);
    }

    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
        data = [];
    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
        data = Snap.path.clone(pathString);
    }
    if (!data.length) {
        Str(pathString).replace(pathCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            if (name == "m" && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
            }
            if (name == "o" && params.length == 1) {
                data.push([b, params[0]]);
            }
            if (name == "r") {
                data.push([b].concat(params));
            } else while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        });
    }
    data.toString = Snap.path.toString;
    pth.arr = Snap.path.clone(data);
    return data;
};
/*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/
var parseTransformString = Snap.parseTransformString = function (TString) {
    if (!TString) {
        return null;
    }
    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
        data = [];
    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
        data = Snap.path.clone(TString);
    }
    if (!data.length) {
        Str(TString).replace(tCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            data.push([b].concat(params));
        });
    }
    data.toString = Snap.path.toString;
    return data;
};
function svgTransform2string(tstr) {
    var res = [];
    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
        params = params.split(/\s*,\s*|\s+/);
        if (name == "rotate" && params.length == 1) {
            params.push(0, 0);
        }
        if (name == "scale") {
            if (params.length > 2) {
                params = params.slice(0, 2);
            } else if (params.length == 2) {
                params.push(0, 0);
            }
            if (params.length == 1) {
                params.push(params[0], 0, 0);
            }
        }
        if (name == "skewX") {
            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
        } else if (name == "skewY") {
            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
        } else {
            res.push([name.charAt(0)].concat(params));
        }
        return all;
    });
    return res;
}
Snap._.svgTransform2string = svgTransform2string;
Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
function transform2matrix(tstr, bbox) {
    var tdata = parseTransformString(tstr),
        m = new Snap.Matrix;
    if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
            if (command == "t" && tlen == 2){
                m.translate(t[1], 0);
            } else if (command == "t" && tlen == 3) {
                if (absolute) {
                    x1 = inver.x(0, 0);
                    y1 = inver.y(0, 0);
                    x2 = inver.x(t[1], t[2]);
                    y2 = inver.y(t[1], t[2]);
                    m.translate(x2 - x1, y2 - y1);
                } else {
                    m.translate(t[1], t[2]);
                }
            } else if (command == "r") {
                if (tlen == 2) {
                    bb = bb || bbox;
                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.rotate(t[1], x2, y2);
                    } else {
                        m.rotate(t[1], t[2], t[3]);
                    }
                }
            } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                    bb = bb || bbox;
                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.scale(t[1], t[1], x2, y2);
                    } else {
                        m.scale(t[1], t[1], t[2], t[3]);
                    }
                } else if (tlen == 5) {
                    if (absolute) {
                        x2 = inver.x(t[3], t[4]);
                        y2 = inver.y(t[3], t[4]);
                        m.scale(t[1], t[2], x2, y2);
                    } else {
                        m.scale(t[1], t[2], t[3], t[4]);
                    }
                }
            } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
        }
    }
    return m;
}
Snap._.transform2matrix = transform2matrix;
Snap._unit2px = unit2px;
var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
    function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
            return a == bup || !!(bup && bup.nodeType == 1 && (
                adown.contains ?
                    adown.contains(bup) :
                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
            ));
    } :
    function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
function getSomeDefs(el) {
    var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) ||
            el.node.parentNode && wrap(el.node.parentNode) ||
            Snap.select("svg") ||
            Snap(0, 0),
        pdefs = p.select("defs"),
        defs  = pdefs == null ? false : pdefs.node;
    if (!defs) {
        defs = make("defs", p.node).node;
    }
    return defs;
}
function getSomeSVG(el) {
    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
}
Snap._.getSomeDefs = getSomeDefs;
Snap._.getSomeSVG = getSomeSVG;
function unit2px(el, name, value) {
    var svg = getSomeSVG(el).node,
        out = {},
        mgr = svg.querySelector(".svg---mgr");
    if (!mgr) {
        mgr = $("rect");
        $(mgr, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"});
        svg.appendChild(mgr);
    }
    function getW(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {width: val});
        try {
            return mgr.getBBox().width;
        } catch (e) {
            return 0;
        }
    }
    function getH(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {height: val});
        try {
            return mgr.getBBox().height;
        } catch (e) {
            return 0;
        }
    }
    function set(nam, f) {
        if (name == null) {
            out[nam] = f(el.attr(nam) || 0);
        } else if (nam == name) {
            out = f(value == null ? el.attr(nam) || 0 : value);
        }
    }
    switch (el.type) {
        case "rect":
            set("rx", getW);
            set("ry", getH);
        case "image":
            set("width", getW);
            set("height", getH);
        case "text":
            set("x", getW);
            set("y", getH);
        break;
        case "circle":
            set("cx", getW);
            set("cy", getH);
            set("r", getW);
        break;
        case "ellipse":
            set("cx", getW);
            set("cy", getH);
            set("rx", getW);
            set("ry", getH);
        break;
        case "line":
            set("x1", getW);
            set("x2", getW);
            set("y1", getH);
            set("y2", getH);
        break;
        case "marker":
            set("refX", getW);
            set("markerWidth", getW);
            set("refY", getH);
            set("markerHeight", getH);
        break;
        case "radialGradient":
            set("fx", getW);
            set("fy", getH);
        break;
        case "tspan":
            set("dx", getW);
            set("dy", getH);
        break;
        default:
            set(name, getW);
    }
    svg.removeChild(mgr);
    return out;
}
/*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.select = function (query) {
    query = Str(query).replace(/([^\\]):/g, "$1\\:");
    return wrap(glob.doc.querySelector(query));
};
/*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.selectAll = function (query) {
    var nodelist = glob.doc.querySelectorAll(query),
        set = (Snap.set || Array)();
    for (var i = 0; i < nodelist.length; i++) {
        set.push(wrap(nodelist[i]));
    }
    return set;
};

function add2group(list) {
    if (!is(list, "array")) {
        list = Array.prototype.slice.call(arguments, 0);
    }
    var i = 0,
        j = 0,
        node = this.node;
    while (this[i]) delete this[i++];
    for (i = 0; i < list.length; i++) {
        if (list[i].type == "set") {
            list[i].forEach(function (el) {
                node.appendChild(el.node);
            });
        } else {
            node.appendChild(list[i].node);
        }
    }
    var children = node.childNodes;
    for (i = 0; i < children.length; i++) {
        this[j++] = wrap(children[i]);
    }
    return this;
}
// Hub garbage collector every 10s
setInterval(function () {
    for (var key in hub) if (hub[has](key)) {
        var el = hub[key],
            node = el.node;
        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
            delete hub[key];
        }
    }
}, 1e4);
function Element(el) {
    if (el.snap in hub) {
        return hub[el.snap];
    }
    var svg;
    try {
        svg = el.ownerSVGElement;
    } catch(e) {}
    /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/
    this.node = el;
    if (svg) {
        this.paper = new Paper(svg);
    }
    /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/
    this.type = el.tagName || el.nodeName;
    var id = this.id = ID(this);
    this.anims = {};
    this._ = {
        transform: []
    };
    el.snap = id;
    hub[id] = this;
    if (this.type == "g") {
        this.add = add2group;
    }
    if (this.type in {g: 1, mask: 1, pattern: 1, symbol: 1}) {
        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
            this[method] = Paper.prototype[method];
        }
    }
}
   /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element.
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5, // or dash-separated names
     |     width: "*=2" // prefixed values
     | });
     | console.log(el.attr("fill")); // #fc0
     * Prefixed values in format `"+=10"` supported. All four operations
     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
     * and `-`: `"+=2em"`.
    \*/
    Element.prototype.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0, ii = attr.length; i < ii; i++) {
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
/*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/
Snap.parse = function (svg) {
    var f = glob.doc.createDocumentFragment(),
        full = true,
        div = glob.doc.createElement("div");
    svg = Str(svg);
    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
        svg = "<svg>" + svg + "</svg>";
        full = false;
    }
    div.innerHTML = svg;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
        if (full) {
            f = svg;
        } else {
            while (svg.firstChild) {
                f.appendChild(svg.firstChild);
            }
        }
    }
    return new Fragment(f);
};
function Fragment(frag) {
    this.node = frag;
}
/*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/
Snap.fragment = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        f = glob.doc.createDocumentFragment();
    for (var i = 0, ii = args.length; i < ii; i++) {
        var item = args[i];
        if (item.node && item.node.nodeType) {
            f.appendChild(item.node);
        }
        if (item.nodeType) {
            f.appendChild(item);
        }
        if (typeof item == "string") {
            f.appendChild(Snap.parse(item).node);
        }
    }
    return new Fragment(f);
};

function make(name, parent) {
    var res = $(name);
    parent.appendChild(res);
    var el = wrap(res);
    return el;
}
function Paper(w, h) {
    var res,
        desc,
        defs,
        proto = Paper.prototype;
    if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
        if (w.snap in hub) {
            return hub[w.snap];
        }
        var doc = w.ownerDocument;
        res = new Element(w);
        desc = w.getElementsByTagName("desc")[0];
        defs = w.getElementsByTagName("defs")[0];
        if (!desc) {
            desc = $("desc");
            desc.appendChild(doc.createTextNode("Created with Snap"));
            res.node.appendChild(desc);
        }
        if (!defs) {
            defs = $("defs");
            res.node.appendChild(defs);
        }
        res.defs = defs;
        for (var key in proto) if (proto[has](key)) {
            res[key] = proto[key];
        }
        res.paper = res.root = res;
    } else {
        res = make("svg", glob.doc.body);
        $(res.node, {
            height: h,
            version: 1.1,
            width: w,
            xmlns: xmlns
        });
    }
    return res;
}
function wrap(dom) {
    if (!dom) {
        return dom;
    }
    if (dom instanceof Element || dom instanceof Fragment) {
        return dom;
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
        return new Paper(dom);
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
    }
    return new Element(dom);
}

Snap._.make = make;
Snap._.wrap = wrap;
/*\
 * Paper.el
 [ method ]
 **
 * Creates an element on paper with a given name and no attributes
 **
 - name (string) tag name
 - attr (object) attributes
 = (Element) the current element
 > Usage
 | var c = paper.circle(10, 10, 10); // is the same as...
 | var c = paper.el("circle").attr({
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
 | // and the same as
 | var c = paper.el("circle", {
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
\*/
Paper.prototype.el = function (name, attr) {
    var el = make(name, this.node);
    attr && el.attr(attr);
    return el;
};
/*\
 * Element.children
 [ method ]
 **
 * Returns array of all the children of the element.
 = (array) array of Elements
\*/
Element.prototype.children = function () {
    var out = [],
        ch = this.node.childNodes;
    for (var i = 0, ii = ch.length; i < ii; i++) {
        out[i] = Snap(ch[i]);
    }
    return out;
};
function jsonFiller(root, o) {
    for (var i = 0, ii = root.length; i < ii; i++) {
        var item = {
                type: root[i].type,
                attr: root[i].attr()
            },
            children = root[i].children();
        o.push(item);
        if (children.length) {
            jsonFiller(children, item.childNodes = []);
        }
    }
}
/*\
 * Element.toJSON
 [ method ]
 **
 * Returns object representation of the given element and all its children.
 = (object) in format
 o {
 o     type (string) this.type,
 o     attr (object) attributes map,
 o     childNodes (array) optional array of children in the same format
 o }
\*/
Element.prototype.toJSON = function () {
    var out = [];
    jsonFiller([this], out);
    return out[0];
};
// default
eve.on("snap.util.getattr", function () {
    var att = eve.nt();
    att = att.substring(att.lastIndexOf(".") + 1);
    var css = att.replace(/[A-Z]/g, function (letter) {
        return "-" + letter.toLowerCase();
    });
    if (cssAttr[has](css)) {
        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
    } else {
        return $(this.node, att);
    }
});
var cssAttr = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    "clip": 0,
    "clip-path": 0,
    "clip-rule": 0,
    "color": 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    "cursor": 0,
    "direction": 0,
    "display": 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    "fill": 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    "filter": 0,
    "flood-color": 0,
    "flood-opacity": 0,
    "font": 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    "kerning": 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    "marker": 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    "mask": 0,
    "opacity": 0,
    "overflow": 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    "stroke": 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    "visibility": 0,
    "word-spacing": 0,
    "writing-mode": 0
};

eve.on("snap.util.attr", function (value) {
    var att = eve.nt(),
        attr = {};
    att = att.substring(att.lastIndexOf(".") + 1);
    attr[att] = value;
    var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
        css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
    if (cssAttr[has](css)) {
        this.node.style[style] = value == null ? E : value;
    } else {
        $(this.node, attr);
    }
});
(function (proto) {}(Paper.prototype));

// simple ajax
/*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/
Snap.ajax = function (url, postData, callback, scope){
    var req = new XMLHttpRequest,
        id = ID();
    if (req) {
        if (is(postData, "function")) {
            scope = callback;
            callback = postData;
            postData = null;
        } else if (is(postData, "object")) {
            var pd = [];
            for (var key in postData) if (postData.hasOwnProperty(key)) {
                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
            }
            postData = pd.join("&");
        }
        req.open(postData ? "POST" : "GET", url, true);
        if (postData) {
            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        if (callback) {
            eve.once("snap.ajax." + id + ".0", callback);
            eve.once("snap.ajax." + id + ".200", callback);
            eve.once("snap.ajax." + id + ".304", callback);
        }
        req.onreadystatechange = function() {
            if (req.readyState != 4) return;
            eve("snap.ajax." + id + "." + req.status, scope, req);
        };
        if (req.readyState == 4) {
            return req;
        }
        req.send(postData);
        return req;
    }
};
/*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/
Snap.load = function (url, callback, scope) {
    Snap.ajax(url, function (req) {
        var f = Snap.parse(req.responseText);
        scope ? callback.call(scope, f) : callback(f);
    });
};
var getOffset = function (elem) {
    var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
    return {
        y: top,
        x: left
    };
};
/*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/
Snap.getElementByPoint = function (x, y) {
    var paper = this,
        svg = paper.canvas,
        target = glob.doc.elementFromPoint(x, y);
    if (glob.win.opera && target.tagName == "svg") {
        var so = getOffset(target),
            sr = target.createSVGRect();
        sr.x = x - so.x;
        sr.y = y - so.y;
        sr.width = sr.height = 1;
        var hits = target.getIntersectionList(sr, null);
        if (hits.length) {
            target = hits[hits.length - 1];
        }
    }
    if (!target) {
        return null;
    }
    return wrap(target);
};
/*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with five arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/
Snap.plugin = function (f) {
    f(Snap, Element, Paper, glob, Fragment);
};
glob.win.Snap = Snap;
return Snap;
}(window || this));

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        unit2px = Snap._unit2px,
        $ = Snap._.$,
        make = Snap._.make,
        getSomeDefs = Snap._.getSomeDefs,
        has = "hasOwnProperty",
        wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        if (this.type == "tspan") {
            return Snap._.box(this.node.getClientRects().item(0));
        }
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this,
            m = new Snap.Matrix;
        if (el.removed) {
            return Snap._.box();
        }
        while (el.type == "use") {
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._,
            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function () {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix;
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix,
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ?
                            Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
                m.add(ms[i]);
            }
            return {
                string: string,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, {gradientTransform: this.matrix});
            } else if (this.type == "pattern") {
                $(this.node, {patternTransform: this.matrix});
            } else {
                $(this.node, {transform: this.matrix});
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this,
                    first;
                el.forEach(function (el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" ||
            this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = Snap.url(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, {id: it.id});
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, {id: clone.id});
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0){
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) if (key[has](i)) {
                    this.data(i, key[i]);
                }
                return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' +
                            attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
    elproto.toDataURL = function () {
        if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/
    Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/
    Fragment.prototype.selectAll = elproto.selectAll;
});

// Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        has = "hasOwnProperty";
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function (attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) if (el.anims[has](id)) {
            (function (a) {
                res.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function (val) {
                        return a.status(val);
                    },
                    stop: function () {
                        a.stop();
                    }
                });
            }(el.anims[id]));
        }
        return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = attrs.dur;
            attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
            el = this;
        for (var key in attrs) if (attrs[has](key)) {
            if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
            } else {
                from = +el.attr(key);
                to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
        }
        var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
                var attr = {};
                for (var key in keys) if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
                el.attr(attr);
            }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
        });
        return el;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString,
        Str = String,
        math = Math,
        E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function (matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + b * this.c,
                bNew = a * this.b + b * this.d;
            this.e += e * this.a + f * this.c;
            this.f += e * this.b + f * this.d;
            this.c = c * this.a + d * this.c;
            this.d = c * this.b + d * this.d;

            this.a = aNew;
            this.b = bNew;
            return this;
        };
        /*\
         * Matrix.multLeft
         [ method ]
         **
         * Multiplies a passed affine transform to the left: M * this.
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        Matrix.prototype.multLeft = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + c * this.b,
                cNew = a * this.c + c * this.d,
                eNew = a * this.e + c * this.f + e;
            this.b = b * this.a + d * this.b;
            this.d = b * this.c + d * this.d;
            this.f = b * this.e + d * this.f + f;

            this.a = aNew;
            this.c = cNew;
            this.e = eNew;
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/
        matrixproto.translate = function (x, y) {
            this.e += x * this.a + y * this.c;
            this.f += x * this.b + y * this.d;
            return this;
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/
        matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.translate(cx, cy);
            this.a *= x;
            this.b *= x;
            this.c *= y;
            this.d *= y;
            (cx || cy) && this.translate(-cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/
        matrixproto.rotate = function (a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.skewX
         [ method ]
         **
         * Skews the matrix along the x-axis
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skewX = function (x) {
            return this.skew(x, 0);
        };
        /*\
         * Matrix.skewY
         [ method ]
         **
         * Skews the matrix along the y-axis
         - y (number) Angle to skew along the y-axis (in degrees).
        \*/
        matrixproto.skewY = function (y) {
            return this.skew(0, y);
        };
        /*\
         * Matrix.skew
         [ method ]
         **
         * Skews the matrix
         - y (number) Angle to skew along the y-axis (in degrees).
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skew = function (x, y) {
            x = x || 0;
            y = y || 0;
            x = Snap.rad(x);
            y = Snap.rad(y);
            var c = math.tan(x).toFixed(9);
            var b = math.tan(y).toFixed(9);
            return this.add(1, b, c, 1, 0, 0);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function () {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/
        matrixproto.determinant = function () {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function () {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.b], [this.c, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }

            // rotation
            var sin = row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function (shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) +
                        (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E) +
                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/
    Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/
    Snap.matrix = function (a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty",
        make = Snap._.make,
        wrap = Snap._.wrap,
        is = Snap.is,
        getSomeDefs = Snap._.getSomeDefs,
        reURLValue = /^url\((['"]?)([^)]+)\1\)$/,
        $ = Snap._.$,
        URL = Snap.url,
        Str = String,
        separator = Snap._.separator,
        E = "";
    /*\
     * Snap.deurl
     [ method ]
     **
     * Unwraps path from `"url(<path>)"`.
     - value (string) url path
     = (string) unwrapped path
    \*/
    Snap.deurl = function (value) {
        var res = String(value).match(reURLValue);
        return res ? res[2] : value;
    }
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function (clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    }(function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            var clip,
                node = value.node;
            while (node) {
                if (node.nodeName === "clipPath") {
                    clip = new Element(node);
                    break;
                }
                if (node.nodeName === "svg") {
                    clip = undefined;
                    break;
                }
                node = node.parentNode;
            }
            if (!clip) {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    }));
    function fillStroke(name) {
        return function (value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 &&
                (value.node.firstChild.tagName == "radialGradient" ||
                value.node.firstChild.tagName == "linearGradient" ||
                value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient"
                   || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string) {
        string = Str(string);
        var tokens = string.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1],
            params = tokens[2],
            stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function (el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function (el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        var len = stops.length,
            start = 0,
            j = 0;
        function seed(i, end) {
            var step = (end - start) / (i - j);
            for (var k = j; k < i; k++) {
                stops[k].offset = +(+start + step * (k - j)).toFixed(2);
            }
            j = i;
            start = end;
        }
        len--;
        for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
            seed(i, stops[i].offset);
        }
        stops[len].offset = stops[len].offset || 100;
        seed(len, stops[len].offset);
        return {
            type: type,
            params: params,
            stops: stops
        };
    });

    eve.on("snap.util.attr.d", function (value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, {d: value});
    })(-1);
    eve.on("snap.util.attr.#text", function (value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function (value) {
        eve.stop();
        this.attr({d: value});
    })(-1);
    eve.on("snap.util.attr.class", function (value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function (value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function (value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function (value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function (value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while (tp.node.firstChild) {
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this),
                    path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({id: id});
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({id: id});
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({"xlink:href": "#" + id});
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while (node.firstChild) {
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function (value) {
        if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function (chunk) {
                    var out = $("tspan");
                    if (is(chunk, "array")) {
                        for (var i = 0; i < chunk.length; i++) {
                            out.appendChild(tuner(chunk[i]));
                        }
                    } else {
                        out.appendChild(glob.doc.createTextNode(chunk));
                    }
                    out.normalize && out.normalize();
                    return out;
                };
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);


    eve.on("snap.util.getattr.transform", function () {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function () {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function () {
        function getter(end) {
            return function () {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function (value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, {id: value.id});
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    }());
    eve.on("snap.util.getattr.r", function () {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function () {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function () {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.fill", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.fill", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.stroke", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.stroke", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function () {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function () {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function () {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g,
        rgBadSpace = /[\t\r\n\f]/g,
        rgTrim = /(^\s+|\s+$)/g,
        Str = String,
        elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.addClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;

        if (classes.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.removeClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        if (curClasses.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/
    elproto.hasClass = function (value) {
        var elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/
    elproto.toggleClass = function (value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        j = 0;
        while (clazz = classes[j++]) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }

        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var operators = {
            "+": function (x, y) {
                    return x + y;
                },
            "-": function (x, y) {
                    return x - y;
                },
            "/": function (x, y) {
                    return x / y;
                },
            "*": function (x, y) {
                    return x * y;
                }
        },
        Str = String,
        reUnit = /[a-z]+$/i,
        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function (val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this,
            bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype,
        is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    var preload = (function () {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function (src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function () {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }());

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr ={
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = {d: d};
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var attr,
            el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/
    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [vbx, vby, vbw, vbh];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/
    proto.mask = function (first) {
        var attr,
            el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/
    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = {patternUnits: "userSpaceOnUse"};
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [vx, vy, vw, vh];
            } else {
                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/
    proto.use = function (id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({id: Snap._.id(id)});
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", {"xlink:href": "#" + id});
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/
    proto.symbol = function (vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
        }

        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function () {
        var $ = Snap._.$;
        // gradients' helpers
        /*\
         * Element.stops
         [ method ]
         **
         * Only for gradients!
         * Returns array of gradient stops elements.
         = (array) the stops array.
        \*/
        function Gstops() {
            return this.selectAll("stop");
        }
        /*\
         * Element.addStop
         [ method ]
         **
         * Only for gradients!
         * Adds another stop to the gradient.
         - color (string) stops color
         - offset (number) stops offset 0..100
         = (object) gradient element
        \*/
        function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {
                    offset: +offset + "%"
                };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            var stops = this.stops(),
                inserted;
            for (var i = 0; i < stops.length; i++) {
                var stopOffset = parseFloat(stops[i].attr("offset"));
                if (stopOffset > offset) {
                    this.node.insertBefore(stop, stops[i].node);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.node.appendChild(stop);
            }
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0,
                    x2 = $(this.node, "x2") || 1,
                    y1 = $(this.node, "y1") || 0,
                    y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5,
                    cy = this.node.cy || .5,
                    r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        /*\
         * Element.setStops
         [ method ]
         **
         * Only for gradients!
         * Updates stops of the gradient based on passed gradient descriptor. See @Ppaer.gradient
         - str (string) gradient descriptor part after `()`.
         = (object) gradient element
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         | g.setStops("#fff-#000-#f00-#fc0");
        \*/
        function GsetStops(str) {
            var grad = str,
                stops = this.stops();
            if (typeof str == "string") {
                grad = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
            }
            if (!Snap.is(grad, "array")) {
                return;
            }
            for (var i = 0; i < stops.length; i++) {
                if (grad[i]) {
                    var color = Snap.color(grad[i].color),
                        attr = {"offset": grad[i].offset + "%"};
                    attr["stop-color"] = color.hex;
                    if (color.opacity < 1) {
                        attr["stop-opacity"] = color.opacity;
                    }
                    stops[i].attr(attr);
                } else {
                    stops[i].remove();
                }
            }
            for (i = stops.length; i < grad.length; i++) {
                this.addStop(grad[i].color, grad[i].offset);
            }
            return this;
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops,
                len = stops.length;
            for (var i = 0; i < len; i++) {
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            el.setStops = GsetStops;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/
        proto.toDataURL = function () {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({node: node});
                }
                node = next;
            }
        };
    }());
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += [
                                "C" + O(point.start.x),
                                O(point.start.y),
                                O(point.m.x),
                                O(point.m.y),
                                O(point.x),
                                O(point.y)
                            ];
                            if (onlystart) {return sp;}
                            subpaths.start = sp;
                            sp = [
                                "M" + O(point.x),
                                O(point.y) + "C" + O(point.n.x),
                                O(point.n.y),
                                O(point.end.x),
                                O(point.end.y),
                                O(p[5]),
                                O(p[6])
                            ].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {x: mx, y: my},
            n: {x: nx, y: ny},
            start: {x: ax, y: ay},
            end: {x: cx, y: cy},
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(
            bbox.min.x,
            bbox.min.y,
            bbox.max.x - bbox.min.x,
            bbox.max.y - bbox.min.y
        );
    }
    function isPointInsideBBox(bbox, x, y) {
        return  x >= bbox.x &&
                x <= bbox.x + bbox.width &&
                y >= bbox.y &&
                y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (
            mmax(x1, x2) < mmin(x3, x4) ||
            mmin(x1, x2) > mmax(x3, x4) ||
            mmax(y1, y2) < mmin(y3, y4) ||
            mmin(y1, y2) > mmax(y3, y4)
        ) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (
            px2 < +mmin(x1, x2).toFixed(2) ||
            px2 > +mmax(x1, x2).toFixed(2) ||
            px2 < +mmin(x3, x4).toFixed(2) ||
            px2 > +mmax(x3, x4).toFixed(2) ||
            py2 < +mmin(y1, y2).toFixed(2) ||
            py2 > +mmax(y1, y2).toFixed(2) ||
            py2 < +mmin(y3, y4).toFixed(2) ||
            py2 > +mmax(y3, y4).toFixed(2)
        ) {
            return;
        }
        return {x: px, y: py};
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 8),
            n2 = ~~(l2 / 8),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({x: p.x, y: p.y, t: i / n1});
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({x: p.x, y: p.y, t: i / n2});
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) &&
               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0,
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [
                ["M", +x + +r, y],
                ["l", w - r * 2, 0],
                ["a", r, r, 0, 0, 1, r, r],
                ["l", 0, h - r * 2],
                ["a", r, r, 0, 0, 1, -r, r],
                ["l", r * 2 - w, 0],
                ["a", r, r, 0, 0, 1, -r, -r],
                ["l", 0, r * 2 - h],
                ["a", r, r, 0, 0, 1, r, -r],
                ["z"]
            ];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [
                ["M", x, y],
                ["m", 0, -ry],
                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
                ["z"]
            ];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function (el) {
            return el.attr("path");
        },
        circle: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function (el) {
            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function (el) {
            return "M" + el.attr("points");
        },
        polygon: function (el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 &&
            pathArray[0][0] == "M" &&
            pathArray[1][0].toUpperCase() == "R" &&
            pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [
                _13 * x1 + _23 * ax,
                _13 * y1 + _23 * ay,
                _13 * x2 + _23 * ax,
                _13 * y2 + _23 * ay,
                x2,
                y2
            ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {x: X, y: Y};
            });
        if (!rx || !ry) {
            return [x1, y1, x2, y2, x2, y2];
        }
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = x * x / (rx * rx) + y * y / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }

    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [],
            bounds = [[], []],
            a, b, c, t, t1, t2, b2ac, sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }

        var x, y, j = tvalues.length,
            jlen = j,
            mt;
        while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
            bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;


        return {
          min: {x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1])},
          max: {x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1])}
        };
    }

    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            processPath = function (path, d, pcom) {
                var nx, ny;
                if (!path) {
                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null);
                switch (path[0]) {
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                        break;
                    case "S":
                        if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
                            nx = d.x * 2 - d.bx;          // And reflect the previous
                            ny = d.y * 2 - d.by;          // command's control point relative to the current point.
                        }
                        else {                            // or some else or nothing
                            nx = d.x;
                            ny = d.y;
                        }
                        path = ["C", nx, ny].concat(path.slice(1));
                        break;
                    case "T":
                        if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
                            d.qx = d.x * 2 - d.qx;        // And make a reflection similar
                            d.qy = d.y * 2 - d.qy;        // to case "S".
                        }
                        else {                            // or something else or nothing
                            d.qx = d.x;
                            d.qy = d.y;
                        }
                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                        break;
                    case "L":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            },
            fixArc = function (pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while (pi.length) {
                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                        p2 && (pcoms2[i] = "A"); // the same as above
                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            fixM = function (path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                    path2.splice(i, 0, ["M", a2.x, a2.y]);
                    a1.bx = 0;
                    a1.by = 0;
                    a1.x = path1[i][1];
                    a1.y = path1[i][2];
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            pcoms1 = [], // path commands of original path p
            pcoms2 = [], // path commands of original path p2
            pfirst = "", // temporary holder for original path command
            pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
            {
                pcoms1[i] = pfirst; // Save current path command
                i && ( pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) { // the same procedures is done to p2
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);

                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }

                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [
                        {x: +crp[i - 2], y: +crp[i - 1]},
                        {x: +crp[i],     y: +crp[i + 1]},
                        {x: +crp[i + 2], y: +crp[i + 3]},
                        {x: +crp[i + 4], y: +crp[i + 5]}
                    ];
            if (z) {
                if (!i) {
                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
                } else if (iLen - 4 == i) {
                    p[3] = {x: +crp[0], y: +crp[1]};
                } else if (iLen - 2 == i) {
                    p[2] = {x: +crp[0], y: +crp[1]};
                    p[3] = {x: +crp[2], y: +crp[3]};
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {x: +crp[i], y: +crp[i + 1]};
                }
            }
            d.push(["C",
                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
                  (p[1].y + 6*p[2].y - p[3].y) / 6,
                  p[2].x,
                  p[2].y
            ]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function (x, y, X, Y) {
        var r = 100,
            b = box(x - r / 2, y - r / 2, r, r),
            inside = [],
            getter = X[0].hasOwnProperty("x") ? function (i) {
                return {
                    x: X[i].x,
                    y: X[i].y
                };
            } : function (i) {
                return {
                    x: X[i],
                    y: Y[i]
                };
            },
            found = 0;
        while (r <= 1e6 && !found) {
            for (var i = 0, ii = X.length; i < ii; i++) {
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r)
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity,
            res;
        for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res = inside[i];
            }
        }
        return res;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function (items) {
        this.items = [];
	this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
    setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item,
            len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/
    setproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin,
            handler = function () {
                if (begin) {
                    this.b = begin;
                } else {
                    begin = this.b;
                }
            },
            cb = 0,
            set = this,
            callbacker = callback && function () {
                if (++cb == set.length) {
                    callback.call(this);
                }
            };
        return this.forEach(function (el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    /*\
     * Set.remove
     [ method ]
     **
     * Removes all children of the set.
     *
     = (object) Set object
    \*/
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/
    setproto.bind = function (attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function (v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    /*\
     * Set.attr
     [ method ]
     **
     * Equivalent of @Element.attr.
     = (object) Set object
    \*/
    setproto.attr = function (value) {
        var unbound = {};
        for (var k in value) {
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
            this.splice(i, 1);
            return true;
        }
        return false;
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Inserts set elements after given element.
     **
     - element (object) set will be inserted after this element
     = (object) Set object
    \*/
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    /*\
     * Set.getBBox
     [ method ]
     **
     * Union of all bboxes of the set. See @Element.getBBox.
     = (object) bounding box descriptor. See @Element.getBBox.
    \*/
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
        }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Creates a clone of the set.
     **
     = (object) New Set object
    \*/
    setproto.clone = function (s) {
        s = new Set;
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    /*\
     * Snap.Set
     [ property ]
     **
     * Set constructor.
    \*/
    Snap.Set = Set;
    /*\
     * Snap.set
     [ method ]
     **
     * Creates a set and fills it with list of arguments.
     **
     = (object) New Set object
     | var r = paper.rect(0, 0, 10, 10),
     |     s1 = Snap.set(), // empty set
     |     s2 = Snap.set(r, paper.circle(100, 100, 20)); // prefilled set
    \*/
    Snap.set = function () {
        var set = new Set;
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[%a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t": return [l, 0, 0];
            case "m": return [l, 1, 0, 0, 1, 0, 0];
            case "r": if (item.length == 4) {
                return [l, 0, item[2], item[3]];
            } else {
                return [l, 0];
            }
            case "s": if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
            } else if (item.length == 3) {
                return [l, 1, 1];
            } else {
                return [l, 1];
            }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t1 = t1 || new Snap.Matrix;
        t2 = t2 || new Snap.Matrix;
        t1 = Snap.parseTransformString(t1.toTransformString()) || [];
        t2 = Snap.parseTransformString(t2.toTransformString()) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0, j, jj,
            tt1, tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if (tt1[0] != tt2[0] ||
                tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) ||
                tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])
                ) {
                    t1 = Snap._.transform2matrix(t1, getBBox());
                    t2 = Snap._.transform2matrix(t2, getBBox());
                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                    break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2], clr[3]);
    }
    function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + k++ + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(obj);
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function (name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this;
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (typeof b == "string") {
                b = Str(b).replace(/\.{3}|\u2026/g, a);
            }
            a = this.matrix;
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.transform2matrix(Snap._.svgTransform2string(b), this.getBBox());
            } else {
                b = Snap._.transform2matrix(b, this.getBBox());
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function (val) { return val; }
            };
        }
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
    has = "hasOwnProperty",
    supportsTouch = "createTouch" in glob.doc,
    events = [
        "click", "dblclick", "mousedown", "mousemove", "mouseout",
        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
        "touchcancel"
    ],
    touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
    getScroll = function (xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft",
            doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    },
    preventDefault = function () {
        this.returnValue = false;
    },
    preventTouch = function () {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function () {
        this.cancelBubble = true;
    },
    stopTouch = function () {
        return this.originalEvent.stopPropagation();
    },
    addEvent = function (obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
            f = function (e) {
                var scrollY = getScroll("y", element),
                    scrollX = getScroll("x", element);
                if (supportsTouch && touchMap[has](type)) {
                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                            var olde = e;
                            e = e.targetTouches[i];
                            e.originalEvent = olde;
                            e.preventDefault = preventTouch;
                            e.stopPropagation = stopTouch;
                            break;
                        }
                    }
                }
                var x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                return fn.call(element, e, x, y);
            };

        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }

        obj.addEventListener(realName, f, false);

        return function () {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }

            obj.removeEventListener(realName, f, false);
            return true;
        };
    },
    drag = [],
    dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
    dragUp = function (e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
                        try {
                            this.events[i].f.call(this);
                        } catch (e) {}
                    }
                }
                return this;
            };
            Snap["un" + eventName] =
            elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) if (events[l].name == eventName &&
                               (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({el: el, start: start, init: init});
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) if (draggable[i].el == this) {
            this.unmousedown(draggable[i].init);
            draggable.splice(i, 1);
            eve.unbind("snap.drag.*." + this.id);
            eve.unbind("snap.draginit." + this.id);
        }
        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };

    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, {id: value.id});
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, .3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
        if (opacity == null) {
            if (color == null) {
                opacity = blur;
                blur = 4;
                color = "#000";
            } else {
                opacity = color;
                color = blur;
                blur = 4;
            }
        }
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
//        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box,
        is = Snap.is,
        firstLetter = /^[^a-z]*([tbmlrc])/i,
        toString = function () {
            return "T" + this.dx + "," + this.dy;
        };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/
    Element.prototype.getAlign = function (el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el),
            bb = this.getBBox(),
            out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
            break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
            break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
            break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
            break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
            break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
            break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/
    Element.prototype.align = function (el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    // Colours are from https://www.materialui.co
    var red         = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
        pink        = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
        purple      = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
        deeppurple  = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
        indigo      = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
        blue        = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
        lightblue   = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
        cyan        = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
        teal        = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
        green       = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
        lightgreen  = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
        lime        = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
        yellow      = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
        amber       = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
        orange      = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
        deeporange  = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
        brown       = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
        grey        = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
        bluegrey    = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
    /*\
     * Snap.mui
     [ property ]
     **
     * Contain Material UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.mui.deeppurple, stroke: Snap.mui.amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.mui = {};
    /*\
     * Snap.flat
     [ property ]
     **
     * Contain Flat UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.flat.carrot, stroke: Snap.flat.wetasphalt});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.flat = {};
    function saveColor(colors) {
        colors = colors.split(/(?=#)/);
        var color = new String(colors[5]);
        color[50] = colors[0];
        color[100] = colors[1];
        color[200] = colors[2];
        color[300] = colors[3];
        color[400] = colors[4];
        color[500] = colors[5];
        color[600] = colors[6];
        color[700] = colors[7];
        color[800] = colors[8];
        color[900] = colors[9];
        if (colors[10]) {
            color.A100 = colors[10];
            color.A200 = colors[11];
            color.A400 = colors[12];
            color.A700 = colors[13];
        }
        return color;
    }
    Snap.mui.red = saveColor(red);
    Snap.mui.pink = saveColor(pink);
    Snap.mui.purple = saveColor(purple);
    Snap.mui.deeppurple = saveColor(deeppurple);
    Snap.mui.indigo = saveColor(indigo);
    Snap.mui.blue = saveColor(blue);
    Snap.mui.lightblue = saveColor(lightblue);
    Snap.mui.cyan = saveColor(cyan);
    Snap.mui.teal = saveColor(teal);
    Snap.mui.green = saveColor(green);
    Snap.mui.lightgreen = saveColor(lightgreen);
    Snap.mui.lime = saveColor(lime);
    Snap.mui.yellow = saveColor(yellow);
    Snap.mui.amber = saveColor(amber);
    Snap.mui.orange = saveColor(orange);
    Snap.mui.deeporange = saveColor(deeporange);
    Snap.mui.brown = saveColor(brown);
    Snap.mui.grey = saveColor(grey);
    Snap.mui.bluegrey = saveColor(bluegrey);
    Snap.flat.turquoise = "#1abc9c";
    Snap.flat.greensea = "#16a085";
    Snap.flat.sunflower = "#f1c40f";
    Snap.flat.orange = "#f39c12";
    Snap.flat.emerland = "#2ecc71";
    Snap.flat.nephritis = "#27ae60";
    Snap.flat.carrot = "#e67e22";
    Snap.flat.pumpkin = "#d35400";
    Snap.flat.peterriver = "#3498db";
    Snap.flat.belizehole = "#2980b9";
    Snap.flat.alizarin = "#e74c3c";
    Snap.flat.pomegranate = "#c0392b";
    Snap.flat.amethyst = "#9b59b6";
    Snap.flat.wisteria = "#8e44ad";
    Snap.flat.clouds = "#ecf0f1";
    Snap.flat.silver = "#bdc3c7";
    Snap.flat.wetasphalt = "#34495e";
    Snap.flat.midnightblue = "#2c3e50";
    Snap.flat.concrete = "#95a5a6";
    Snap.flat.asbestos = "#7f8c8d";
    /*\
     * Snap.importMUIColors
     [ method ]
     **
     * Imports Material UI colours into global object.
     | Snap.importMUIColors();
     | Snap().rect(0, 0, 10, 10).attr({fill: deeppurple, stroke: amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.importMUIColors = function () {
        for (var color in Snap.mui) {
            if (Snap.mui.hasOwnProperty(color)) {
                window[color] = Snap.mui[color];
            }
        }
    };
});

return Snap;
}));
}.call(window));

/***/ }),

/***/ "./pages/bellwoods.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__("./store/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apollo_layout__ = __webpack_require__("./apollo/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Submit__ = __webpack_require__("./components/Submit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Submit_SubmitTree__ = __webpack_require__("./components/Submit/SubmitTree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_feed_cabinquest_park_actions__ = __webpack_require__("./actions/feed_cabinquest_park_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_home_actions__ = __webpack_require__("./actions/home_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_PostList__ = __webpack_require__("./components/PostList/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_apollo__ = __webpack_require__("next-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_next_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_timeline_Timeline__ = __webpack_require__("./components/timeline/Timeline.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_Footer__ = __webpack_require__("./components/footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_day_PostDay__ = __webpack_require__("./components/day/PostDay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_day_MyDay__ = __webpack_require__("./components/day/MyDay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_feed_CabinquestFeed__ = __webpack_require__("./components/feed/CabinquestFeed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_signin_Signin__ = __webpack_require__("./components/signin/Signin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_bellwoods_Bellwoods__ = __webpack_require__("./components/bellwoods/Bellwoods.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__styles__ = __webpack_require__("./pages/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/brandonflowers/cabinquest/pages/bellwoods.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












// import Home from "../components/home/Home";











// import Theme from "../components/theme/Theme";




// import css from "styled-jsx/css";

var pilotUri = 'https://api.graph.cool/simple/v1/cji0cqlrx2pot0149bdqhnbyv';
var config = {
    link: new __WEBPACK_IMPORTED_MODULE_13_apollo_link_http__["HttpLink"]({
        uri: pilotUri, // Server URL (must be absolute)
        opts: {
            credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
        }
    })
};

var BellwoodsPage = function (_Component) {
    _inherits(BellwoodsPage, _Component);

    function BellwoodsPage(props) {
        _classCallCheck(this, BellwoodsPage);

        return _possibleConstructorReturn(this, (BellwoodsPage.__proto__ || Object.getPrototypeOf(BellwoodsPage)).call(this, props));
    }

    _createClass(BellwoodsPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {}
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__apollo_layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__components_bellwoods_Bellwoods__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                })
            );
        }
    }]);

    return BellwoodsPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var matchStateToProps = function matchStateToProps(state) {
    return {
        home: state.home,
        auth: state.auth,
        feed: state.feed_cabinquest
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_10__actions_home_actions__, { postCabinQuestTree: __WEBPACK_IMPORTED_MODULE_9__actions_feed_cabinquest_park_actions__["h" /* postCabinQuestTree */] }), dispatch);
};

var BellwoodsHOC = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */], matchStateToProps, mapDispatchToProps), Object(__WEBPACK_IMPORTED_MODULE_12_next_apollo__["withData"])(config))(BellwoodsPage);

/* harmony default export */ __webpack_exports__["default"] = (BellwoodsHOC);

/***/ }),

/***/ "./pages/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Form */
/* unused harmony export H1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return H2; });
/* unused harmony export Input */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Building; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);


var Form = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('form')({
    borderBottom: '1px solid #ececec',
    paddingBottom: '20px',
    marginBottom: '20px'
});

var H1 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('h1')({
    fontSize: '20px'
});

var H2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('h2')({
    fontSize: '24px'
});

var Input = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('input')({
    display: 'block',
    marginBottom: '10px'
});

var Base = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('div')({
    display: 'flex',
    flexDirection: 'row',
    margin: '20px',
    padding: '20px'
});

var Building = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('div')({
    display: 'block',
    margin: '20px',
    padding: '20px'
});

/***/ }),

/***/ "./reducers/cabinquest_auth_reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_reducer_utils__ = __webpack_require__("./utils/reducer_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./constants/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  cabinQuestUser: null
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__utils_reducer_utils__["a" /* createReducer */])(initialState, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* CABINQUEST_SET_USER */], function (state, payload) {
  return Object.assign({}, state, {
    cabinQuestUser: payload.cabinQuestUser
  });
})));

/***/ }),

/***/ "./reducers/feed_cabinquest_reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_reducer_utils__ = __webpack_require__("./utils/reducer_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./constants/index.js");
var _createReducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
    branches: null,
    portholeForest: null,
    park: null,
    newTree: null,
    error: null,
    isFetching: false
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__utils_reducer_utils__["a" /* createReducer */])(initialState, (_createReducer = {}, _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["m" /* FEED_CABINQUEST_POST_TREE */], function (state, payload) {
    return Object.assign({}, state, {
        newTree: payload.tree
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["p" /* FEED_CABINQUEST_POST_TREE_REQUEST */], function (state) {
    return Object.assign({}, state, {
        isFetching: true
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["o" /* FEED_CABINQUEST_POST_TREE_RECEIVED_SUCCESS */], function (state, payload) {
    return Object.assign({}, state, {
        isFetching: false
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["n" /* FEED_CABINQUEST_POST_TREE_RECEIVED_FAIL */], function (state, payload) {
    return Object.assign({}, state, {
        error: payload.error,
        isFetching: false
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* FEED_CABINQUEST_GET_PARK_REQUEST */], function (state) {
    return Object.assign({}, state, {
        isFetching: true
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* FEED_CABINQUEST_GET_PARK_RECEIVED_SUCCESS */], function (state, payload) {
    return Object.assign({}, state, {
        park: payload.park,
        isFetching: false
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FEED_CABINQUEST_GET_PARK_RECEIVED_FAIL */], function (state, payload) {
    return Object.assign({}, state, {
        error: payload.error,
        isFetching: false
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* FEED_CABINQUEST_GET_TREES_REQUEST */], function (state) {
    return Object.assign({}, state, {
        isFetching: true
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* FEED_CABINQUEST_GET_TREES_RECEIVED_SUCCESS */], function (state, payload) {
    return Object.assign({}, state, {
        branches: payload.branches,
        isFetching: false
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* FEED_CABINQUEST_GET_TREES_RECEIVED_FAIL */], function (state, payload) {
    return Object.assign({}, state, {
        error: payload.error,
        isFetching: false
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["t" /* FEED_PORTHOLE_GET_FOREST_REQUEST */], function (state) {
    return Object.assign({}, state, {
        isFetching: true
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["s" /* FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS */], function (state, payload) {
    return Object.assign({}, state, {
        portholeForest: payload.portholeForest,
        isFetching: false
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["k" /* FEED_CABINQUEST_POST_DEFAULT_PARK_REQUEST */], function (state) {
    return Object.assign({}, state, {
        isFetching: true
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["s" /* FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS */], function (state, payload) {
    return Object.assign({}, state, {
        portholeForest: payload.portholeForest,
        isFetching: false
    });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["r" /* FEED_PORTHOLE_GET_FOREST_RECEIVED_FAIL */], function (state, payload) {
    return Object.assign({}, state, {
        error: payload.error,
        isFetching: false
    });
}), _createReducer)));

/***/ }),

/***/ "./reducers/home_reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_reducer_utils__ = __webpack_require__("./utils/reducer_utils.js");
var _createReducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var FOO = "FOO";
var BAR = "BAR";
var STARWARS_REQUEST = "STARWARS_REQUEST";
var STARWARS_RECEIVED_SUCCESS = "STARWARS_RECEIVED_SUCCESS";

var initialState = {
    foo: 'bar',
    bar: 'foo',
    header: null,
    isFetching: false,
    items: null
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__utils_reducer_utils__["a" /* createReducer */])(initialState, (_createReducer = {}, _defineProperty(_createReducer, "APP_FETCH_HEADER_REQUESTED", function APP_FETCH_HEADER_REQUESTED(state) {
    return Object.assign({}, state, {
        isFetching: true
    });
}), _defineProperty(_createReducer, "APP_FETCH_HEADER_RECEIVED_SUCCESS", function APP_FETCH_HEADER_RECEIVED_SUCCESS(state, payload) {
    return Object.assign({}, state, {
        header: payload.header,
        isFetching: false
    });
}), _defineProperty(_createReducer, STARWARS_REQUEST, function (state) {
    return Object.assign({}, state, {
        isFetching: true
    });
}), _defineProperty(_createReducer, STARWARS_RECEIVED_SUCCESS, function (state, payload) {
    return Object.assign({}, state, {
        items: payload.items
    });
}), _defineProperty(_createReducer, BAR, function (state, payload) {
    return Object.assign({}, state, {
        bar: payload.bar
    });
}), _createReducer)));

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_reducer__ = __webpack_require__("./reducers/home_reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_cabinquest_reducer__ = __webpack_require__("./reducers/feed_cabinquest_reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cabinquest_auth_reducer__ = __webpack_require__("./reducers/cabinquest_auth_reducer.js");
/* eslint-disable */





/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  home: __WEBPACK_IMPORTED_MODULE_1__home_reducer__["a" /* default */],
  feed_cabinquest: __WEBPACK_IMPORTED_MODULE_2__feed_cabinquest_reducer__["a" /* default */],
  auth: __WEBPACK_IMPORTED_MODULE_3__cabinquest_auth_reducer__["a" /* default */]
}));

/***/ }),

/***/ "./sagas/cabinquest/CabinQuestParkSagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = postCabinQuestTreeSaga;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCabinQuestParkSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_porthole_PortholeConfig__ = __webpack_require__("./config/porthole/PortholeConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_feed_cabinquest_park_actions__ = __webpack_require__("./actions/feed_cabinquest_park_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__porthole_PortholeTreeUtil__ = __webpack_require__("./sagas/porthole/PortholeTreeUtil.js");


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(postNewTree),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(postCabinQuestTreeSaga),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getPark),
    _marked4 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getCabinQuestParkSaga);










var log = __WEBPACK_IMPORTED_MODULE_3__config_porthole_PortholeConfig__["a" /* default */].getLog('PortholeTreeService'); // (document.domain === "localhost") ? true : false;
var serverPath = __WEBPACK_IMPORTED_MODULE_3__config_porthole_PortholeConfig__["a" /* default */].getServerPath();

// POST TREE ////////////////////////////////////////////////////////////////////////

function postNewTree(dispatch, getState) {
    var endPoint, newTree, cabinQuestUser, data, request, response;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function postNewTree$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('CabinQuestParkSagas postNewTree');

                    endPoint = serverPath + '/bellwoods/trees/create/';
                    newTree = getState().feed_cabinquest.newTree;
                    cabinQuestUser = getState().auth.cabinQuestUser;
                    data = { newTree: newTree, cabinQuestUser: cabinQuestUser };
                    request = new Request(endPoint, {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    _context.prev = 6;
                    _context.next = 9;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_cabinquest_park_actions__["g" /* onPostCabinQuestTreeRequest */])());

                case 9:
                    _context.next = 11;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default.a, request);

                case 11:
                    response = _context.sent;
                    _context.next = 14;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_cabinquest_park_actions__["f" /* onPostCabinQuestTreeReceivedSuccess */])());

                case 14:

                    dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_cabinquest_park_actions__["a" /* getCabinQuestPark */])());
                    _context.next = 22;
                    break;

                case 17:
                    _context.prev = 17;
                    _context.t0 = _context['catch'](6);

                    console.error('CabinQuestParkSagas postTree error: ', _context.t0);
                    _context.next = 22;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_cabinquest_park_actions__["e" /* onPostCabinQuestTreeReceivedFail */])(_context.t0));

                case 22:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[6, 17]]);
}

function postCabinQuestTreeSaga(dispatch, getState) {
    var state;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function postCabinQuestTreeSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    state = getState();

                    console.log('postCabinQuestTreeSaga - ready and listening - start ', state);

                    _context2.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_6__constants__["m" /* FEED_CABINQUEST_POST_TREE */], postNewTree, dispatch, getState);

                case 4:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

// GET PARK /////////////////////////////////////////////////////////////////////////

function getPark() {
    var endPoint, request, response, data;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getPark$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    endPoint = serverPath + '/bellwoods/trees/all';


                    console.log('CabinQuestParkSagas heard and called getPark endPoint: ', endPoint);
                    console.log('CabinQuestParkSagas getPark');

                    request = new Request(endPoint, {
                        method: 'GET',
                        mode: 'cors'
                    });
                    _context3.prev = 4;
                    _context3.next = 7;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_cabinquest_park_actions__["d" /* onGetCabinQuestParkRequest */])());

                case 7:
                    _context3.next = 9;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default.a, request);

                case 9:
                    response = _context3.sent;
                    _context3.next = 12;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["call"])([response, response.json]);

                case 12:
                    data = _context3.sent;


                    console.log('CabinQuestParkSagas getPark response data: ', data);

                    //const branches = getPortholeBranches(data.branches);

                    _context3.next = 16;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_cabinquest_park_actions__["c" /* onGetCabinQuestParkReceivedSuccess */])(data));

                case 16:
                    _context3.next = 23;
                    break;

                case 18:
                    _context3.prev = 18;
                    _context3.t0 = _context3['catch'](4);

                    console.error('branches parsed failed: ', _context3.t0);
                    _context3.next = 23;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_cabinquest_park_actions__["b" /* onGetCabinQuestParkReceivedFail */])(_context3.t0));

                case 23:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this, [[4, 18]]);
}

function getCabinQuestParkSaga() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getCabinQuestParkSaga$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    console.log('getCabinQuestParkSaga - ready and listening');

                    _context4.next = 3;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* FEED_CABINQUEST_GET_PARK */], getPark);

                case 3:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this);
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

/***/ }),

/***/ "./sagas/helloSaga.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = helloSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_home_actions__ = __webpack_require__("./actions/home_actions.js");


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(fetchHeader),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(fetchUser),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(helloSaga);




function fetchHeader(dispatch, url) {
    var endPoint, request, response, data;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function fetchHeader$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:

                    //
                    endPoint = "https://simonw-json-head-sqhcsgfgok.now.sh/?url=" + encodeURIComponent(url); //http:%2F%2Fcabinporn.com%2Frss";
                    //const endPoint = "https://simonw-json-head-sqhcsgfgok.now.sh/?url=";

                    //console.log("helloSaga fetchHeader endPoint: ", endPoint);

                    request = new Request(endPoint, {
                        method: 'GET',
                        mode: 'cors'
                    });
                    _context.prev = 2;
                    _context.next = 5;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_2__actions_home_actions__["onGetHeaderRequest"])());

                case 5:
                    _context.next = 7;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(fetch, request);

                case 7:
                    response = _context.sent;
                    _context.next = 10;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([response, response.json]);

                case 10:
                    data = _context.sent;
                    _context.next = 13;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_2__actions_home_actions__["onGetHeaderSuccess"])(data));

                case 13:
                    _context.next = 18;
                    break;

                case 15:
                    _context.prev = 15;
                    _context.t0 = _context['catch'](2);

                    console.error("fetchHeader failed: ", _context.t0);
                    //yield put (onGetCabinquestTreesFail(error));

                case 18:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[2, 15]]);
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function fetchUser(action) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function fetchUser$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:

                    console.log('USER_FETCH_REQUESTED');

                    return _context2.abrupt('return');

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
function helloSaga(dispatch) {
    var url;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function helloSaga$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    console.log('Hello Sagas! v3');

                    //yield takeLatest("USER_FETCH_REQUESTED", fetchUser);

                    url = 'https://camh-thoughtspot-dev.qochealth.com/';
                    _context3.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])("APP_FETCH_HEADER", fetchHeader, dispatch, url);

                case 4:

                    dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_home_actions__["fetchGetHeader"])());

                    //fetchHeader();

                case 5:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
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

/***/ }),

/***/ "./sagas/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__porthole_PortholeTreeSagas__ = __webpack_require__("./sagas/porthole/PortholeTreeSagas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cabinquest_CabinQuestParkSagas__ = __webpack_require__("./sagas/cabinquest/CabinQuestParkSagas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helloSaga__ = __webpack_require__("./sagas/helloSaga.js");


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(rootSaga);






function rootSaga(dispatch, getState) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function rootSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_4__helloSaga__["a" /* helloSaga */])(dispatch), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
                    Object(__WEBPACK_IMPORTED_MODULE_2__porthole_PortholeTreeSagas__["a" /* getCabinPornSaga */])(), Object(__WEBPACK_IMPORTED_MODULE_2__porthole_PortholeTreeSagas__["b" /* getPortholeForestSaga */])(dispatch), Object(__WEBPACK_IMPORTED_MODULE_3__cabinquest_CabinQuestParkSagas__["b" /* postCabinQuestTreeSaga */])(dispatch, getState), Object(__WEBPACK_IMPORTED_MODULE_3__cabinquest_CabinQuestParkSagas__["a" /* getCabinQuestParkSaga */])()]);

                case 2:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

/***/ }),

/***/ "./sagas/porthole/PortholeImageUtil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cancelLoad */
/* unused harmony export plainLoadImage */
/* unused harmony export loadImage */
/* unused harmony export getSateliteImage */
/* unused harmony export loadImageSVG */
/* unused harmony export loadImageInDiv */
/* unused harmony export bulkLoadImagesInDiv */
/* unused harmony export getVideoUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getImagesFromDescription; });
/* unused harmony export getVideosFromDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_porthole_PortholeConfig__ = __webpack_require__("./config/porthole/PortholeConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_image_preloader__ = __webpack_require__("image-preloader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_image_preloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_image_preloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bluebird__);
var _this = this;




var loadImageHelper = __webpack_require__("load-img"); // https://github.com/mattdesl/load-img



//const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

/*
const jsdom = require('jsdom');
const xmlserializer = require('xmlserializer');

let Snap = null;

jsdom.env('', ['node_modules/snapsvg/dist/snap.svg.js'], (error, window) => {
    if (error) throw error;

    const paper = window.Snap(100, 100);

    const rect = paper.rect(20, 20, 60, 60);
    rect.attr({fill: 'red'});

    const svg = xmlserializer.serializeToString(paper.node);
    window.close();

    console.log(svg);


    Snap = window.Snap;
});
*/

var log = __WEBPACK_IMPORTED_MODULE_0__config_porthole_PortholeConfig__["a" /* default */].getLog("PortholeImageService");

var defaultImageUrl = "http://images2.fanpop.com/image/photos/9600000/Astro-Boy-astro-boy-9613180-720-1296.jpg";
var defaultFullScreenImageUrl = "images/no-internet-backup.jpg";

var cancelLoad = function cancelLoad() {

    if (window.stop !== undefined) {
        window.stop();
    } else if (document.execCommand !== undefined) {
        document.execCommand("Stop", false);
    }
};

var plainLoadImage = function plainLoadImage(url, altUrl, timeoutMilliseconds) {

    timeoutMilliseconds = typeof timeoutMilliseconds === "undefined" ? 10000 : timeoutMilliseconds;

    var timer;

    function clearTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function handleFail() {
        // kill previous error handlers
        this.onload = this.onabort = this.onerror = function () {};
        // stop existing timer
        clearTimer();
        // switch to alternate url
        if (this.src === url) {
            this.src = altUrl;
        }
    }

    var img = new Image();
    img.onerror = img.onabort = handleFail;
    img.onload = function () {
        clearTimer();
    };
    img.src = url;

    timer = setTimeout(function (theImg) {
        return function () {
            handleFail.call(theImg);
        };
    }(img), timeoutMilliseconds);

    return img;
};

var loadImage = function loadImage(photoURLStr, successCallback, errorCallback, treeActorCallback) {

    var decodedPhotoUrl = decodeURIComponent(photoURLStr);

    console.log("PortholeImageService loadImage decodedPhotoUrl: ", decodedPhotoUrl);

    // https://www.npmjs.com/package/image-preloader

    var preloader = new __WEBPACK_IMPORTED_MODULE_1_image_preloader___default.a();

    preloader.onProgress = function (info) {
        console.log('image with source %s is loaded with status %s', info.value.src, info.status);
    };

    // note you can pass in multiple urlOrImgElement1, urlOrImgElement2, urlOrImgElement3
    var promise = preloader.preload(photoURLStr);

    promise.then(function (status) {
        console.log('all done!', status);

        var img = new Image();
        img.src = photoURLStr;

        var imgObj = { url: photoURLStr, width: img.naturalWidth, height: img.naturalHeight };

        successCallback(imgObj);
        treeActorCallback(imgObj);
    });

    /*
      const loadImage = require('load-img');
      loadImage('images/foo.png', {
     crossOrigin: 'Anonymous'
     }, (err, img) => {
     if (err) throw err;
     console.log(img.width, img.height);
     document.body.appendChild(img);
     });
      */
};

var getSateliteImage = function getSateliteImage() {

    var altImageNum = Math.floor(Math.random() * 16);
    var altImagePath = "./static/img/photos/default" + String(altImageNum) + ".jpg";

    return altImagePath;
};

var loadImageSVG = function loadImageSVG(imgDetailsObj, callback) {

    if (log) console.log("PortholeImageService - loadImageSVG - imgDetailsObj: ", imgDetailsObj);

    /*
      var onSVGLoadedHandler = function(data){
         var fillColor = ( imgDetailsObj.color ) ? imgDetailsObj.color : "#009900";
         if (log) console.log("PortholeImageService - onSVGLoadedHandler - imgDetailsObj: ", imgDetailsObj);
         var imgDefs = data.select("defs");
        //btnGroup.append(defs);
          if (imgDetailsObj.name === "game") {
            Snap(imgDefs).select("#game_0_Layer1_0_FILL").select("path")
                .attr("opacity", 1)
                .attr("fill", "#70cbc8");
        }
          //if (log) console.log("PortholeImageService - onSVGLoadedHandler - loadSVG - imgDefs: ", imgDefs);
         var part = ( typeof imgDetailsObj.part !== "undefined" ) ? imgDetailsObj.part : "";
         var imgGroup = data.select('#' + imgDetailsObj.name + part);
        var scaleNum = imgDetailsObj.scaleNum;
         if (log) console.log("PortholeImageService - onSVGLoadedHandler - imgDefs: ", imgDefs);
        if (log) console.log("PortholeImageService - onSVGLoadedHandler - imgGroup", imgGroup);
         var translateStr = 'translate(' + imgDetailsObj.x + ',' + imgDetailsObj.y + ') scale(' + scaleNum + ')';
         if ( imgDetailsObj.bBtn && null !== imgGroup ) {
            imgGroup.click( imgDetailsObj.action );
        }
         if ( null !== imgGroup ) {
             imgGroup.attr("transform", translateStr);
            imgGroup.attr("opacity", imgDetailsObj.opacity);
             imgGroup.attr("pointer-events", imgDetailsObj.events);
            imgGroup.attr("cursor", imgDetailsObj.cursor);
             //if (log) console.log("PortholeImageService - onSVGLoadedHandler - loadedSVG - imgDetailsObj.name: " + imgDetailsObj.name);
             callback(imgGroup, imgDefs);
         } else {
            if (log) console.log("PortholeImageService - onSVGLoadedHandler ERROR! - imgGroup is null");
        }
     };
     Snap.load(imgDetailsObj.url, onSVGLoadedHandler);
     */
};

var loadImageInDiv = function loadImageInDiv(el, photoURLStr) {

    // remove old photo
    el.find("img").remove();

    /*
     var loader = new PxLoader( { statusInterval: 2000 } );
    var decodedPhotoUrl = decodeURIComponent(photoURLStr);
    var pxImage = new PxLoaderImage(decodedPhotoUrl);
     loader.add(pxImage);
     // callback that runs every time an image loads
    loader.addProgressListener(function(e) {
         ////////console.log(e, "load progress");
    });
     loader.addCompletionListener(function(e) {
         //console.log(pxImage, "load complete");
        var img = pxImage.img;
         //img.naturalHeight;
        //img.naturalWidth;
         //$(img).css("width", "100%");
        //$(img).css("id", "landscape");
         el.append(img);
         onLargePhotoLoadCompleteHanlder();
     });
     loader.start();
    */

    var decodedPhotoUrl = decodeURIComponent(photoURLStr);

    //const loadImage = require('load-img');

    loadImageHelper(decodedPhotoUrl, {
        crossOrigin: 'Anonymous'
    }, function (err, img) {
        if (err) throw err;

        console.log("PortholeImageUtil loadImageInDiv: ", img.width, img.height);
        //document.body.appendChild(img);
        el.append(img);
    });
};

var bulkLoadImagesInDiv = function bulkLoadImagesInDiv(el, idStr, imageObjs, successCallback) {

    var images = [];
    var imgCounter = 0;

    var that = _this;

    var onLoaderCompleteHandler = function onLoaderCompleteHandler(e) {

        var img = e.resource.img;

        if (e.error) {

            if (log) console.log("PortholeImageService - bulkLoadImagesInDiv ERROR - error loading image ", e);

            var imgPath = that.getSateliteImage();
            var imgTag = $("<img src='" + imgPath + "'/>");

            img = imgTag;
        }

        console.log("PortholeImageService - bulkLoadImagesInDiv - complete listener img: ", img);

        imgCounter++;
        images.push(img);

        if (imageObjs.length === imgCounter) {

            console.log("PortholeImageService - bulkLoadImagesInDiv - all complete");

            successCallback({ images: images });
        }
    };

    _.each(imageObjs, function (imgObj, index) {

        var loader = new PxLoader({ statusInterval: 2000 });

        var decodedPhotoUrl = decodeURIComponent(imgObj.path);
        var pxImage = new PxLoaderImage(decodedPhotoUrl);

        loader.add(pxImage);
        loader.addCompletionListener(onLoaderCompleteHandler);

        loader.start();
    });
};

var getVideoUrl = function getVideoUrl(branchObj) {

    // then try the description

    if (undefined !== branchObj.description) {

        var contentStr = branchObj.description;
        //
        var imageUrl = null;

        // default
        var startIndexNum = contentStr.indexOf("http");
        var endIndexNum = contentStr.indexOf(".jpg");

        // check for jpgs
        if (endIndexNum === -1) {

            endIndexNum = contentStr.indexOf(".png");

            if (log) console.log("PortholeImageService - getVideoUrl - no jpgs");

            // check for pngs
            if (endIndexNum === -1) {
                if (log) console.log("PortholeImageService - getVideoUrl - no pngs");

                endIndexNum = contentStr.indexOf(".gif");

                // check for gifs
                if (endIndexNum === -1) {
                    if (log) console.log("PortholeImageService - getVideoUrl - no gifs");

                    return defaultImageUrl;
                }
            }
        }
    }
};

var getImagesFromDescription = function getImagesFromDescription(branchObj) {

    //console.log("PortholeImageService - getImagesFromDescription - branchObj: ", branchObj);

    if (branchObj === null) {
        console.error("PortholeImageUtil getImagesFromDescription branchObj is null!");
        return;
    }

    var images = [];
    var uniqueImages = [];

    var description = branchObj.description ? branchObj.description : branchObj.summary;
    var defaultFullScreenImageUrl = getSateliteImage(); //"img/loaders/defaultbackground.png"; //"./img/wallpapers/bluewallpaper";

    var imageUrl = null;
    var useText = false;

    var addImage = function addImage(imgPath, useText) {

        if (log) console.log("PortholeImageService - adding image imgPath: " + imgPath);

        if (imgPath === defaultFullScreenImageUrl) useText = true;

        var resultImageObj = {
            imageUrl: imageUrl,
            defaultImageUrl: defaultFullScreenImageUrl,
            useText: useText,
            text: description,
            large: true // assume it is large enough until loaded

            // or uniq
        };var found = _.find(uniqueImages, imgPath);
        //const uniquePaths = _.uniq(uniqueImages)

        if (!found) {

            resultImageObj.imageUrl = imgPath;
            images.push(resultImageObj);
            uniqueImages.push(imgPath);
        }
    };

    var temp = document.createElement('div');
    var frag = document.createDocumentFragment();

    temp.innerHTML = description;
    frag.appendChild(temp);

    var imgTags = temp.getElementsByTagName('img');

    // also search for image tags - frag will auto convert image to img!
    //if (log) console.log("PortholeImageService imgTags: ", imgTags);

    _.each(imgTags, function (img, index) {

        if (typeof img !== "undefined") {

            var imgURL;
            //if (log) console.log("PortholeImageService img: ", img);

            if (typeof img.dataset !== "undefined") {

                //imgURL = img.dataset.imgSrc;

                if (typeof img.dataset.src !== "undefined") {

                    imgURL = img.dataset.src;
                    if (log) console.log("PortholeImageService tests img.dataset.src: " + imgURL);
                } else if (undefined !== img.dataset.imgSrc) {

                    imgURL = img.dataset.imgSrc;
                    if (log) console.log("PortholeImageService tests img.dataset.imgSrc: " + imgURL);
                } else {
                    imgURL = img.src;
                }

                if (log) console.log("PortholeImageService tests img.dataset ", img.dataset);
            } else {
                imgURL = img.src;
            }

            if (log) console.log("PortholeImageService 1 px Height check ");

            if (typeof imgURL !== "undefined") {

                var noTrackingGifCheck = true;
                if (typeof img.height !== "undefined" && img.height === 1) {

                    if (log) console.log("PortholeImageService 1 px Height found!");

                    noTrackingGifCheck = false;
                }

                var noFeedsPortal = imgURL.indexOf("feedsportal") !== -1 ? false : true;

                if (log) console.log("PortholeImageService noFeedsPortal: " + noFeedsPortal);
                if (log) console.log("PortholeImageService imgURL: " + imgURL);

                if (noTrackingGifCheck && noFeedsPortal) addImage(imgURL, false);
            }
        }
    });

    // at least 1 image is required
    if (images.length === 0) {
        addImage(defaultFullScreenImageUrl, true);
    }

    if (log) console.log("PortholeImageService images.length: " + images.length);

    return images;
};

var getVideosFromDescription = function getVideosFromDescription(branchObj) {

    if (log) console.log("PortholeImageService - getVideosFromDescription - branchObj: ", branchObj);

    var videos = [];
    var unqiueVideos = [];

    var description = branchObj.description ? branchObj.description : branchObj.summary;

    var videoUrl = null;

    var addVideo = function addVideo(videoPath) {

        if (log) console.log("PortholeImageService addVideo videoPath: " + videoPath);

        var resultVideoObj = {
            videoUrl: videoUrl
        };

        var dupResult = _.contains(uniqueImages, videoPath);

        if (dupResult !== true) {

            resultVideoObj.videoUrl = videoPath;
            videos.push(resultVideoObj);
            unqiueVideos.push(videoUrl);
        }
    };

    var temp = document.createElement('div');
    var frag = document.createDocumentFragment();

    temp.innerHTML = description;
    frag.appendChild(temp);

    var videoTags = temp.getElementsByTagName('video');

    //if (log) console.log("PortholeImageService imageTags: ", imageTags);

    if (videoTags.length > 0) {

        _.each(videoTags, function (video, index) {

            if (typeof video.dataset !== "undefined") {

                /*
                  embedType: "video"
                 embedUrl: "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZjSXcdvd-ME%3Fwmode%3Dopaque%26feature%3Doembed&wmode=opaque&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZjSXcdvd-ME%26feature%3Dyoutu.be&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZjSXcdvd-ME%2Fhqdefault.jpg&key=6efca6e5ad9640f180f14146a0bc1392&type=text%2Fhtml&schema=youtube"
                 height: "100%"
                 src: "http://www.youtube.com/watch?v=ZjSXcdvd-ME"
                 width: "100%"
                  */

                addVideo(video.dataset.src);
            }
        });
    }

    return videos;
};

/***/ }),

/***/ "./sagas/porthole/PortholeTreeSagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCabinPornSaga;
/* unused harmony export getTreesSaga */
/* unused harmony export getTreeByRSSUrl */
/* unused harmony export getForestFeed */
/* harmony export (immutable) */ __webpack_exports__["b"] = getPortholeForestSaga;
/* unused harmony export getPortholeForestSagaAAA */
/* unused harmony export getForestFeedByTreeModels */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_porthole_PortholeConfig__ = __webpack_require__("./config/porthole/PortholeConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("./constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__ = __webpack_require__("./actions/feed_cabinquest_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__ = __webpack_require__("./actions/feed_porthole_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PortholeTreeUtil__ = __webpack_require__("./sagas/porthole/PortholeTreeUtil.js");


var _this = this;

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTree),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getCabinPornSaga),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTreesSaga),
    _marked4 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTreeByRSSUrl),
    _marked5 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTreeGenerator),
    _marked10 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getPortholeForestFeed),
    _marked11 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getPortholeForestSaga),
    _marked12 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getPortholeForestNotWorking),
    _marked13 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getPortholeForestSagaAAA);










var log = __WEBPACK_IMPORTED_MODULE_3__config_porthole_PortholeConfig__["a" /* default */].getLog('PortholeTreeService'); //(document.domain === "localhost") ? true : false;
var serverPath = __WEBPACK_IMPORTED_MODULE_3__config_porthole_PortholeConfig__["a" /* default */].getServerPath();

//////////////////////////////////////////////////////////////////////////

//let branches = [];

function getTree(urls) {
    var endPoint, request, _response, data, branches;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTree$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    endPoint = serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' + encodeURIComponent(urls[0]); //http:%2F%2Fcabinporn.com%2Frss";

                    console.log('PortholeTreeSagas heard and called getTree endPoint: ', endPoint);
                    console.log('PortholeTreeSagas getTree');

                    request = new Request(endPoint, {
                        method: 'GET',
                        mode: 'cors'
                    });
                    _context.prev = 4;
                    _context.next = 7;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["b" /* onCabinquestTreesRequest */])());

                case 7:
                    _context.next = 9;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default.a, request);

                case 9:
                    _response = _context.sent;
                    _context.next = 12;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["call"])([_response, _response.json]);

                case 12:
                    data = _context.sent;
                    branches = Object(__WEBPACK_IMPORTED_MODULE_8__PortholeTreeUtil__["b" /* getPortholeBranches */])(data.branches);
                    _context.next = 16;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["d" /* onGetCabinquestTreesSuccess */])(branches));

                case 16:
                    _context.next = 23;
                    break;

                case 18:
                    _context.prev = 18;
                    _context.t0 = _context['catch'](4);

                    console.error('branches parsed failed: ', _context.t0);
                    _context.next = 23;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["c" /* onGetCabinquestTreesFail */])(_context.t0));

                case 23:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[4, 18]]);
}

function getCabinPornSaga() {
    var url, designMilkUrl;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getCabinPornSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    console.log('getTreesSaga - ready and listening');

                    url = 'http://cabinporn.com/rss';
                    designMilkUrl = 'http://feeds.feedburner.com/design-milk';
                    _context2.next = 5;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_5__constants__["f" /* FEED_CABINQUEST_GET_TREES */], getTree, [url]);

                case 5:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

function getTreesSaga() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTreesSaga$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}

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

function getTreeByRSSUrl(treeObj) {
    var serverPath, serviceRoute, request, _response2, data, branches;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTreeByRSSUrl$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    serverPath = 'https://cabinquest.now.sh';
                    serviceRoute = serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl';
                    request = new Request(serviceRoute, {
                        method: 'GET',
                        mode: 'cors',
                        data: { xmlUrl: treeObj.xmlUrl }
                    });
                    _context4.prev = 3;
                    _context4.next = 6;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["b" /* onCabinquestTreesRequest */])());

                case 6:
                    _context4.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default.a, request);

                case 8:
                    _response2 = _context4.sent;
                    _context4.next = 11;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["call"])([_response2, _response2.json]);

                case 11:
                    data = _context4.sent;
                    branches = parse(data.branches);

                    //return branches;

                    _context4.next = 15;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["d" /* onGetCabinquestTreesSuccess */])(branches));

                case 15:
                    _context4.next = 22;
                    break;

                case 17:
                    _context4.prev = 17;
                    _context4.t0 = _context4['catch'](3);

                    console.error('branches parsed failed: ', _context4.t0);
                    _context4.next = 22;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["c" /* onGetCabinquestTreesFail */])(_context4.t0));

                case 22:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this, [[3, 17]]);
}

var getForestFeed = function getForestFeed(trees, bSignedIn) {
    bSignedIn = typeof bSignedIn !== 'undefined' ? bSignedIn : false;

    var treePromises = [];

    var self = _this;

    if (bSignedIn) {
        _.each(trees, function (tree) {
            var treePromise = self.getTreeByRSSUrl(tree).loadTreePromise;

            treePromises.push(treePromise);
        });
    } else {
        var allPortholeTrees = Object(__WEBPACK_IMPORTED_MODULE_8__PortholeTreeUtil__["a" /* createAllPortholeTrees */])();

        _.each(trees, function (treeValue) {
            var currentTree = allPortholeTrees[treeValue];

            if (undefined !== currentTree) {
                var treePromise = self.getTreeByRSSUrl(currentTree).loadTreePromise;
                treePromises.push(treePromise);
            }
        });
    }

    return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.all(treePromises);
};

function getTreeGenerator(treeModel) {
    var serverPath, serviceRoute, request;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTreeGenerator$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    serverPath = 'https://cabinquest.now.sh';
                    serviceRoute = serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl';
                    request = new Request(serviceRoute, {
                        method: 'GET',
                        mode: 'cors',
                        data: { xmlUrl: treeModel.xmlUrl }
                    });
                    _context5.next = 5;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default.a, request);

                case 5:
                    return _context5.abrupt('return', response = _context5.sent);

                case 6:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked5, this);
}

function getPortholeForestFeed(dispatch) {
    var _marked6, _marked7, _marked8, _marked9, treeObj, treeBranches, treePromises, treeModels, rssUrls, keys, badFeeds, finalTreeModels, fetchTree, loadFeed, pollForFeed, count, forest, allDone, runPolling, runOnce;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getPortholeForestFeed$(_context10) {
        while (1) {
            switch (_context10.prev = _context10.next) {
                case 0:
                    runOnce = function runOnce() {
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
                        var model = finalTreeModels[count]; //treeModels[keys[count]];
                        var generator = model ? loadFeed(model) : undefined;

                        //if (!generator) return;

                        var next = generator.next();

                        next.value.then(function (response) {
                            var portholeBranches = Object(__WEBPACK_IMPORTED_MODULE_8__PortholeTreeUtil__["b" /* getPortholeBranches */])(response.branches);
                            forest.push(portholeBranches);

                            var max = finalTreeModels.length;

                            var branches = _.reduce(forest, function (acc, models) {
                                return acc.concat(models);
                            }, []);

                            dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__["c" /* onGetPortholeForestReceivedSuccess */])(branches));
                        });
                    };

                    runPolling = function runPolling(generator) {
                        var model = finalTreeModels[count]; //treeModels[keys[count]];

                        if (model) generator = pollForFeed(model);

                        var next = generator.next();

                        next.value.then(function (response) {
                            var portholeBranches = Object(__WEBPACK_IMPORTED_MODULE_8__PortholeTreeUtil__["b" /* getPortholeBranches */])(response.branches);
                            forest.push(portholeBranches);

                            var max = finalTreeModels.length;

                            if (count < max) {
                                runPolling(generator);
                                count++;
                            } else {
                                var branches = _.reduce(forest, function (acc, models) {
                                    return acc.concat(models);
                                }, []);

                                dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__["c" /* onGetPortholeForestReceivedSuccess */])(branches));
                            }
                        });
                    };

                    allDone = function allDone(portholeBranches) {
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function allDone$(_context9) {
                            while (1) {
                                switch (_context9.prev = _context9.next) {
                                    case 0:
                                        console.log('pollForFeed allDone!');
                                        //yield put(onGetPortholeForestReceivedSuccess(portholeBranches));
                                        _context9.next = 3;
                                        return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])({
                                            type: __WEBPACK_IMPORTED_MODULE_5__constants__["s" /* FEED_PORTHOLE_GET_FOREST_RECEIVED_SUCCESS */],
                                            portholeBranches: portholeBranches
                                        });

                                    case 3:
                                    case 'end':
                                        return _context9.stop();
                                }
                            }
                        }, _marked9, this);
                    };

                    pollForFeed = function pollForFeed(treeModel) {
                        var url, endPoint, headers, request;
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function pollForFeed$(_context8) {
                            while (1) {
                                switch (_context8.prev = _context8.next) {
                                    case 0:
                                        console.log('pollForFeed treeModel: ', treeModel);

                                        url = treeModel.xmlUrl;
                                        endPoint = serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' + encodeURIComponent(url);
                                        headers = new Headers({
                                            'Content-Type': 'application/json',
                                            'Access-Control-Allow-Origin': '*'
                                        });

                                        //const cors = (treeModel.title === "Design Milk" || treeModel.title === "Dwell") ? "no-cors" : "cors";

                                        request = new Request(endPoint, {
                                            method: 'GET',
                                            mode: 'cors'
                                            //headers: headers
                                        });

                                    case 5:
                                        if (false) {
                                            _context8.next = 16;
                                            break;
                                        }

                                        _context8.prev = 6;
                                        _context8.next = 9;
                                        return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()(request).then(function (response) {
                                            var json = response.json();
                                            return json;
                                        }, function (error) {
                                            dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__["b" /* onGetPortholeForestReceivedFail */])(error));
                                        });

                                    case 9:
                                        _context8.next = 14;
                                        break;

                                    case 11:
                                        _context8.prev = 11;
                                        _context8.t0 = _context8['catch'](6);

                                        console.error('pollForFeed ERROR!: ', _context8.t0);

                                    case 14:
                                        _context8.next = 5;
                                        break;

                                    case 16:
                                    case 'end':
                                        return _context8.stop();
                                }
                            }
                        }, _marked8, this, [[6, 11]]);
                    };

                    loadFeed = function loadFeed(treeModel) {
                        var url, endPoint, headers, request;
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function loadFeed$(_context7) {
                            while (1) {
                                switch (_context7.prev = _context7.next) {
                                    case 0:
                                        console.log('pollForFeed treeModel: ', treeModel);

                                        url = treeModel.xmlUrl;
                                        endPoint = serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' + encodeURIComponent(url);
                                        headers = new Headers({
                                            'Content-Type': 'application/json',
                                            'Access-Control-Allow-Origin': '*'
                                        });

                                        //const cors = (treeModel.title === "Design Milk" || treeModel.title === "Dwell") ? "no-cors" : "cors";

                                        request = new Request(endPoint, {
                                            method: 'GET',
                                            mode: 'cors'
                                            //headers: headers
                                        });
                                        _context7.prev = 5;
                                        _context7.next = 8;
                                        return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()(request).then(function (response) {
                                            var json = response.json();
                                            return json;
                                        }, function (error) {
                                            dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__["b" /* onGetPortholeForestReceivedFail */])(error));
                                        });

                                    case 8:
                                        _context7.next = 13;
                                        break;

                                    case 10:
                                        _context7.prev = 10;
                                        _context7.t0 = _context7['catch'](5);

                                        console.error('pollForFeed ERROR!: ', _context7.t0);

                                    case 13:
                                    case 'end':
                                        return _context7.stop();
                                }
                            }
                        }, _marked7, this, [[5, 10]]);
                    };

                    fetchTree = function fetchTree(key) {
                        var treeModel, url, endPoint, request, response, data;
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function fetchTree$(_context6) {
                            while (1) {
                                switch (_context6.prev = _context6.next) {
                                    case 0:
                                        treeModel = treeObj[key];


                                        console.log('getPortholeForestFeed treeModel: ', treeModel);

                                        //getTreeByRSSUrl(treeModel);
                                        url = treeModel.xmlUrl;
                                        endPoint = serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' + encodeURIComponent(url); //http:%2F%2Fcabinporn.com%2Frss";

                                        console.log('PortholeTreeSagas getPortholeForestFeed endPoint: ', endPoint);

                                        request = new Request(endPoint, {
                                            method: 'GET',
                                            mode: 'cors'
                                        });
                                        _context6.next = 8;
                                        return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default.a, request);

                                    case 8:
                                        response = _context6.sent;
                                        _context6.next = 11;
                                        return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["call"])([response, response.json]);

                                    case 11:
                                        data = _context6.sent;


                                        console.log('PortholeTreeSagas getPortholeForestFeed len: ', data.branches.length);

                                        return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_8__PortholeTreeUtil__["b" /* getPortholeBranches */])(data.branches));

                                    case 14:
                                    case 'end':
                                        return _context6.stop();
                                }
                            }
                        }, _marked6, this);
                    };

                    _marked6 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(fetchTree), _marked7 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(loadFeed), _marked8 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(pollForFeed), _marked9 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(allDone);
                    treeObj = Object(__WEBPACK_IMPORTED_MODULE_8__PortholeTreeUtil__["a" /* createAllPortholeTrees */])(); // returns an object!

                    treeBranches = [];
                    treePromises = [];
                    treeModels = [];
                    rssUrls = [];
                    keys = [];


                    _.forIn(treeObj, function (data, key) {
                        rssUrls.push(data.xmlUrl);
                        keys.push(key);
                        treeModels.push(data);
                    });

                    //const without = {title: "Design Milk"} || model.title === "Dwell")

                    badFeeds = ['Documentary', 'Venture Beat', 'Walker Film'];

                    //const one = _.reject(treeModels, {title: "Design Milk"});
                    //const two = _.reject(treeModels, {title: "Documentary"});

                    finalTreeModels = _.reject(treeModels, function (model) {
                        return badFeeds.indexOf(model.title) > -1 ? true : false;
                    });

                    //https://www.sitepoint.com/asynchronous-apis-using-fetch-api-es6-generators/

                    count = 0;
                    forest = [];


                    runOnce();

                case 19:
                case 'end':
                    return _context10.stop();
            }
        }
    }, _marked10, this);
}

function getPortholeForestSaga(dispatch) {
    var _args11 = arguments;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getPortholeForestSaga$(_context11) {
        while (1) {
            switch (_context11.prev = _context11.next) {
                case 0:
                    console.log('getPortholeForestSaga - ready and listening - args: ', _args11);

                    _context11.next = 3;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_5__constants__["q" /* FEED_PORTHOLE_GET_FOREST */], getPortholeForestFeed, dispatch);

                case 3:
                case 'end':
                    return _context11.stop();
            }
        }
    }, _marked11, this);
}

function getPortholeForestNotWorking() {
    var treeModels, treeBranches, treePromises, rssUrls, keys, fetchTree, requests, responses;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getPortholeForestNotWorking$(_context12) {
        while (1) {
            switch (_context12.prev = _context12.next) {
                case 0:
                    fetchTree = function fetchTree(treeModel) {
                        var url = treeModel.xmlUrl;

                        var endPoint = 'https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=' + encodeURIComponent(url);

                        var headers = new Headers({
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        });

                        var request = new Request(endPoint, {
                            method: 'GET',
                            mode: 'cors',
                            headers: headers
                        });

                        return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()(request).then(function (d) {
                            var json = d.json();
                            return json;
                        });
                    };

                    treeModels = Object(__WEBPACK_IMPORTED_MODULE_8__PortholeTreeUtil__["a" /* createAllPortholeTrees */])(); // returns an object!

                    treeBranches = [];
                    treePromises = [];
                    rssUrls = [];
                    keys = [];


                    _.forIn(treeModels, function (data, key) {
                        rssUrls.push(data.xmlUrl);
                        keys.push(key);
                    });

                    requests = _.map(treeModels, function (treeModel) {
                        return fetchTree(treeModel);
                    });
                    _context12.next = 10;
                    return requests;

                case 10:
                    responses = _context12.sent;


                    console.log('getPortholeForestSaga - getPortholeForest responses: ', responses);

                case 12:
                case 'end':
                    return _context12.stop();
            }
        }
    }, _marked12, this);
}

function getPortholeForestSagaAAA() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getPortholeForestSagaAAA$(_context13) {
        while (1) {
            switch (_context13.prev = _context13.next) {
                case 0:
                    console.log('getPortholeForestSaga - ready and listening');

                    _context13.next = 3;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_5__constants__["q" /* FEED_PORTHOLE_GET_FOREST */], getPortholeForest);

                case 3:
                case 'end':
                    return _context13.stop();
            }
        }
    }, _marked13, this);
}

var getForestFeedByTreeModels = function getForestFeedByTreeModels(treeModels) {
    var treePromises = [];

    //const self = this;

    _.each(treeModels, function (treeModel) {
        var treePromise = getTreeByRSSUrl(treeModel);
        treePromises.push(treePromise);
    });

    //return Promise.all(treePromises);
    __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.all(treePromises).then(function (response) {
        console.log('getForestFeedByTreeModels all done');
    }, function (error) {
        console.log('getForestFeedByTreeModels error');
    });
};

/***/ }),

/***/ "./sagas/porthole/PortholeTreeUtil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAllPortholeTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPortholeBranches; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_models_porthole_PortholeBranchModel__ = __webpack_require__("./app/models/porthole/PortholeBranchModel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortholeImageUtil__ = __webpack_require__("./sagas/porthole/PortholeImageUtil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);




var getRSSBranch = function getRSSBranch(branch, index) {

    //console.log('PortholeTreeUtil getRSSBranch branch: ', branch);

    //if (log) console.log("PortholeTreeService - getRSSBranch");

    // note: remember to clear cache to test this!

    var tags = [];

    //validate content

    //branch = validateContent(branch);

    var images = Object(__WEBPACK_IMPORTED_MODULE_1__PortholeImageUtil__["a" /* getImagesFromDescription */])(branch);

    //if (log) console.log("PortholeTreeService - getRSSBranch - images: ", images);


    var resultImageObj = images[0];
    var photoUrl = resultImageObj.useText ? resultImageObj.defaultImageUrl : resultImageObj.imageUrl;

    // works for some...
    //if (log) console.log(branch, "PortholeTreeService - getRSSBranch")

    // replace 500 with 1280 - only works for CabinPorn
    var photoLargeUrl = photoUrl.indexOf("500") > -1 ? photoUrl.replace("500", "1280") : photoUrl;

    var branchTitleUnescape = __WEBPACK_IMPORTED_MODULE_2_lodash__["unescape"](branch.title);
    var branchDescriptionUnescape = __WEBPACK_IMPORTED_MODULE_2_lodash__["unescape"](resultImageObj.text);

    /*
      author: nullcategories: Array[6]0: "cabin"1: "cabinporn"2: "colorado"3: "snow"4: "solar"5: "submission"length: 6__proto__: Array[0]comments: nulldate: "2015-02-10T18:14:16.000Z"description: "<img src="http://41.media.tumblr.com/cf362224cafdd95b00cd92be8b71b890/tumblr_niofin4r6P1qzwmsso1_500.jpg"/><br/><br/><p>Artist-in-Residence cabin up Lefthand Canyon in <b>Ward, CO</b>. </p><p>Submitted by Sasha Arsic.</p>"enclosures: Array[0]guid: "http://cabinporn.com/post/110646415150"image: Objectlink: "http://cabinporn.com/post/110646415150"meta: Objectoriglink: nullpermalink: "http://cabinporn.com/post/110646415150"pubDate: "2015-02-10T18:14:16.000Z"pubdate: "2015-02-10T18:14:16.000Z"rss:@: Objectrss:category: Array[6]rss:description: Objectrss:guid: Objectrss:link: Objectrss:pubdate: Objectrss:title: Objectsource: Objectsummary: "<img src="http://41.media.tumblr.com/cf362224cafdd95b00cd92be8b71b890/tumblr_niofin4r6P1qzwmsso1_500.jpg"/><br/><br/><p>Artist-in-Residence cabin up Lefthand Canyon in <b>Ward, CO</b>. </p><p>Submitted by Sasha Arsic.</p>"title: "Artist-in-Residence cabin up Lefthand Canyon in Ward,..."
     var portholeBranch = {
     tags: tags,
     photoURL: photoURL,
     photoLargeURL: photoLargeURL,
     link: branch.link,
     publishedDate: branch.publishedDate,
     title: branchTitleUnescape,
     feedLink: branch.meta.link,
     feedTitle: branch.meta.title,
     about: branchTitleUnescape,
     index: index,
     text: branchDescriptionUnescape,
     useText: resultImageObj.useText,
     x: 0,
     y: 0,
     };
     */
    // fix title
    if (branch.meta) {
        if (branch.meta.title === "National Geographic Photo of the Day") branch.meta.title = "National Geographic";else if (branch.meta.title === "Latest Articles") branch.meta.title = "Dwell";else if (branch.meta.title === "Latest Items from TreeHugger") branch.meta.title = "TreeHugger";else if (branch.meta.title.trim() === "Polygon -  All") branch.meta.title = "Polygon";else if (branch.meta.title.trim() === "Behance Featured Projects") branch.meta.title = "Behance";else if (branch.meta.title.trim() === "Abduzeedo Design Inspiration - Design Inspiration & Tutorials") branch.meta.title = "Abduzeedo";else if (branch.meta.title.trim() === "Latest News - Pitchfork") branch.meta.title = "Pitchfork";else if (branch.meta.title.trim() === "rackk and ruin") branch.meta.title = "Rackk and Ruin";else if (branch.meta.title.trim() === "BOILER ROOM") branch.meta.title = "Boiler Room";else if (branch.meta.title.trim() === "CRISTIAN ORDONEZ") branch.meta.title = "Cristian Ordóñez";else if (branch.meta.title.trim() === "Get Outside — Medium") branch.meta.title = "Headlands";else if (branch.meta.title.trim() === "ArtStation - Latest Picks") branch.meta.title = "ArtStation";else if (branch.meta.title.trim() === "Y! Sports Blogs  - Yahoo Canada Sports") branch.meta.title = "Yahoo Sports";else if (branch.meta.title.trim() === "International Documentary Association") branch.meta.title = "Documentary";else if (branch.meta.title.trim() === "/Film") branch.meta.title = "Slash";else if (branch.meta.title.trim() === "Film Blog | The Guardian") branch.meta.title = "The Guardian";else if (branch.meta.title.trim() === "Crosscuts") branch.meta.title = "Walker";else if (branch.meta.title.trim() === "NBA.com: News") branch.meta.title = "NBA";else if (branch.meta.title.trim() === "CONTEMPORIST") branch.meta.title = "Contemporist";else if (branch.meta.title.trim() === "Sports - The Inquisitr News") branch.meta.title = "The Inquisitr";else if (branch.meta.title.trim() === "designboom | architecture & design magazine") branch.meta.title = "designboom";
    }

    var link = branch.meta ? branch.meta.link : branch.link;
    var title = branch.meta ? branch.meta.title : branchTitleUnescape;
    var about = branchDescriptionUnescape;
    var text = branchDescriptionUnescape;

    var portholeBranch = new __WEBPACK_IMPORTED_MODULE_0__app_models_porthole_PortholeBranchModel__["a" /* default */](branch.categories, photoUrl, photoLargeUrl, images, branch.link, branch.date, branchTitleUnescape, link, title, about, index, text, resultImageObj.useText, 0, 0, false, false);

    return portholeBranch;
};

var createAllPortholeTrees = function createAllPortholeTrees() {

    // 1
    var cabinPornTreeObj = { _id: "1", xmlUrl: "http://cabinporn.com/rss", type: "rss", title: "Cabin Porn™", category: "architecture", origin: "porthole" };
    // 2
    var coolHuntingTreeObj = { _id: "2", xmlUrl: "http://feeds.coolhunting.com/ch", type: "rss", title: "Cool Hunting", category: "design", origin: "porthole" };
    // 3
    //var swissmissTreeObj = { _id : "54cb9435d1796e940600008b", xmlUrl : "http://feeds2.feedburner.com/Swissmiss", type : "rss", title : "Swiss Miss" };
    var designmilkTreeObj = { _id: "3", xmlUrl: "http://feeds.feedburner.com/design-milk?format=xml", type: "rss", title: "Design Milk", category: "design", origin: "porthole" };
    // 4
    var wiredTreeObj = { _id: "4", xmlUrl: "http://feeds.wired.com/wired/index", type: "rss", title: "WIRED", category: "technology", origin: "porthole" };
    // 5
    var boingboingTreeObj = { _id: "5", xmlUrl: "http://feeds.boingboing.net/boingboing/iBag", type: "rss", title: "Boing Boing", category: "technology", origin: "porthole" };
    // 6
    var kotakuTreeObj = { _id: "6", xmlUrl: "http://kotaku.com/rss/vip", type: "rss", title: "Kotaku", category: "gaming", origin: "porthole" };
    // 7
    var treeHuggerTreeObj = { _id: "7", xmlUrl: "http://www.treehugger.com/feeds/latest/", type: "rss", title: "Tree Hugger", category: "technology", origin: "porthole" };
    // 8
    var nationalGeographicTreeObj = { _id: "8", xmlUrl: "http://feeds.nationalgeographic.com/ng/photography/photo-of-the-day/", type: "rss", title: "National Geographic", category: "technology", origin: "porthole" };
    // 9
    var dwellTreeObj = { _id: "9", xmlUrl: "https://www.dwell.com/@dwell/rss", type: "rss", title: "Dwell", category: "architecture", origin: "porthole" };
    // 10
    var colossalTreeObj = { _id: "10", xmlUrl: "http://feeds.feedburner.com/colossal", type: "rss", title: "Colossal", category: "design", origin: "porthole" };
    // 11
    var polygonTreeObj = { _id: "11", xmlUrl: "http://www.polygon.com/rss/index.xml", type: "rss", title: "Polygon", category: "gaming", origin: "porthole" };
    // 12
    var architizerTreeObj = { _id: "12", xmlUrl: "http://architizer.tumblr.com/rss", type: "rss", title: "Architizer", category: "architecture", origin: "porthole" };
    // 13
    var harpersbazaarTreeObj = { _id: "13", xmlUrl: "http://harpersbazaar.tumblr.com/rss", type: "rss", title: "Harpers Bazaar", category: "fashion", origin: "porthole" };
    // 14
    var wTreeObj = { _id: "14", xmlUrl: "http://w.tumblr.com/rss", type: "rss", title: "W", category: "fashion", origin: "porthole" };
    // 15
    var booooooomTreeObj = { _id: "15", xmlUrl: "http://www.booooooom.com/feed/", type: "rss", title: "BOOOOOOOM!", category: "art", origin: "porthole" };
    // 16
    var abduzeedoTreeObj = { _id: "16", xmlUrl: "http://feeds.feedburner.com/abduzeedo", type: "rss", title: "Abduzeedo", category: "design", origin: "porthole" };
    // 17
    var behanceTreeObj = { _id: "17", xmlUrl: "https://www.behance.net/feeds/projects", type: "rss", title: "Behance", category: "art", origin: "porthole" };
    // 18
    var bleacherReportTreeObj = { _id: "18", xmlUrl: "http://bleacherreport.tumblr.com/rss", type: "rss", title: "Bleacher Report", category: "sports", origin: "porthole" };
    // 19
    var gamespotTreeObj = { _id: "19", xmlUrl: "http://www.gamespot.com/feeds/mashup/", type: "rss", title: "GameSpot", category: "gaming", origin: "porthole" };
    // 20
    var twitchfilmTreeObj = { _id: "20", xmlUrl: "http://feeds.twitchfilm.com/TwitchEverything", type: "rss", title: "TwitchFilm", category: "film", origin: "porthole" };
    // 21
    var mmTreeObj = { _id: "21", xmlUrl: "http://www.50mm.jp/?format=rss", type: "rss", title: "50mm", category: "photography", origin: "porthole" };
    // 22
    var stuckTreeObj = { _id: "22", xmlUrl: "http://www.stuckincustoms.com/feed/", type: "rss", title: "Stuck in Customs", category: "photography", origin: "porthole" };
    // 23
    var nmeTreeObj = { _id: "23", xmlUrl: "http://www.nme.com/rss/reviews", type: "rss", title: "Nme", category: "music", origin: "porthole" };
    // 24
    var pitchforkTreeObj = { _id: "24", xmlUrl: "http://pitchfork.com/rss/news/", type: "rss", title: "Pitchfork", category: "music", origin: "porthole" };
    // 25
    var boilerroomTreeObj = { _id: "25", xmlUrl: "http://boilerroom.tv/feed/", type: "rss", title: "Boiler Room", category: "music", origin: "porthole" };
    // 26
    var ruinTreeObj = { _id: "26", xmlUrl: "http://feeds.feedburner.com/RackkAndRuin", type: "rss", title: "Rackk and Ruin", category: "fashion", origin: "porthole" };
    // 27
    var paperholmTreeObj = { _id: "27", xmlUrl: "http://www.paperholm.com/rss", type: "rss", title: "Paperholm", category: "art", origin: "porthole" };
    // 28
    //var fraserTreeObj = { _id : "28", xmlUrl : "https://fraserflowers.wordpress.com/feed/", type : "rss", title : "fraser", category: "photography", origin: "porthole" };
    // 29
    var cristianTreeObj = { _id: "29", xmlUrl: "http://cristianordonez.tumblr.com/rss/", type: "rss", title: "Cristian Ordóñez", category: "photography", origin: "porthole" };
    // 30
    var headlandsTreeObj = { _id: "30", xmlUrl: "https://medium.com/feed/get-outside/", type: "rss", title: "headlands", category: "photography", origin: "porthole" };
    // 31
    var artnationTreeObj = { _id: "31", xmlUrl: "https://artstation.com/artwork.rss", type: "rss", title: "ArtStation", category: "art", origin: "porthole" };
    // 32
    var nycscoutTreeObj = { _id: "32", xmlUrl: "http://feeds.feedburner.com/scoutingny", type: "rss", title: "Scouting NY", category: "photography", origin: "porthole" };
    // 33
    var taviTreeObj = { _id: "33", xmlUrl: "http://www.thestylerookie.com/feeds/posts/default", type: "rss", title: "tavi gevinson", category: "fashion", origin: "porthole" };
    // 34
    var repellerTreeObj = { _id: "34", xmlUrl: "http://www.manrepeller.com/feed", type: "rss", title: "Man Repeller", category: "fashion", origin: "porthole" };
    // 35
    var slashFilmTreeObj = { _id: "35", xmlUrl: "http://www.slashfilm.com/feed/", type: "rss", title: "Slash", category: "film", origin: "porthole" };
    // 36
    var guardianFilmTreeObj = { _id: "36", xmlUrl: "http://www.theguardian.com/film/filmblog/rss", type: "rss", title: "Guardian Film", category: "film", origin: "porthole" };
    // 37
    var walkerFilmTreeObj = { _id: "37", xmlUrl: "http://blogs.walkerart.org/filmvideo/feed/", type: "rss", title: "Walker Film", category: "film", origin: "porthole" };
    // 38
    var docFilmTreeObj = { _id: "38", xmlUrl: "http://www.documentary.org/rss.xml", type: "rss", title: "Documentary", category: "film", origin: "porthole" };
    // 39
    //var yahoosportsTreeObj = { _id : "39", xmlUrl : "https://ca.sports.yahoo.com/blogs/rss.xml", type : "rss", title : "Yahoo Sports", category: "sports", origin: "porthole" };
    // 40
    var venturebeatTreeObj = { _id: "40", xmlUrl: "http://venturebeat.com/feed/", type: "rss", title: "Venture Beat", category: "technology", origin: "porthole" };
    // 41
    var killscreenTreeObj = { _id: "41", xmlUrl: "https://killscreen.com/feed/", type: "rss", title: "Killscreen", category: "gaming", origin: "porthole" };
    // 42
    var inquisitrTreeObj = { _id: "42", xmlUrl: "http://feeds.inquisitr.com/TheInquisitrSport", type: "rss", title: "The Inquisitr Sport", category: "sports", origin: "porthole" };
    // 43
    var sbnationTreeObj = { _id: "43", xmlUrl: "http://www.sbnation.com/rss/current", type: "rss", title: "SB Nation", category: "sports", origin: "porthole" };
    // 44
    var dezeenTreeObj = { _id: "44", xmlUrl: "http://www.dezeen.com/feed/", type: "rss", title: "Dezeen", category: "architecture", origin: "porthole" };
    // 45
    var contemporistTreeObj = { _id: "45", xmlUrl: "http://feeds.feedburner.com/contemporist", type: "rss", title: "Contemporist", category: "architecture", origin: "porthole" };
    // 46
    var eikongraphiaTreeObj = { _id: "46", xmlUrl: "http://eikongraphia.com/?feed=rss2", type: "rss", title: "Eikongraphia", category: "photography", origin: "porthole" };
    // 47
    var unhappyTreeObj = { _id: "47", xmlUrl: "http://unhappyhipsters.com/rss", type: "rss", title: "Unhappy Hipsters", category: "design", origin: "porthole" };
    // 48
    var architectureTreeObj = { _id: "48", xmlUrl: "http://architectureblog.tumblr.com/rss", type: "rss", title: "The Architecture Blog", category: "architecture", origin: "porthole" };
    // 49
    var designboomTreeObj = { _id: "49", xmlUrl: "http://www.designboom.com/feed/", type: "rss", title: "Design Boom", category: "design", origin: "porthole" };
    // 50
    var nautilusTreeObj = { _id: "50", xmlUrl: "http://nautil.us/rss/all", type: "rss", title: "Nautilus", category: "technology", origin: "porthole" };
    // 51


    /*
      http://www.slashfilm.com/feed/
      http://www.theguardian.com/film/filmblog/rss
      http://blogs.walkerart.org/filmvideo/feed/
      http://www.documentary.org/rss.xml
      */

    console.log("PortholeTreeService - createPortholeTrees");

    var allPortholeTrees = {
        "cabinporn": cabinPornTreeObj,
        "treehugger": treeHuggerTreeObj,
        "wired": wiredTreeObj,
        "coolhunting": coolHuntingTreeObj,
        "kotaku": kotakuTreeObj,
        "nationalgeographic": nationalGeographicTreeObj,
        "colossal": colossalTreeObj,
        "dwell": dwellTreeObj,
        "designmilk": designmilkTreeObj,
        "boingboing": boingboingTreeObj,
        "polygon": polygonTreeObj,
        "architizer": architizerTreeObj,
        "harpersbazaar": harpersbazaarTreeObj,
        "w": wTreeObj,
        "booooooom": booooooomTreeObj,
        "abduzeedo": abduzeedoTreeObj,
        "behance": behanceTreeObj,
        "bleacherreport": bleacherReportTreeObj,
        "gamespot": gamespotTreeObj,
        "twitchfilm": twitchfilmTreeObj,
        "mm": mmTreeObj,
        "stuck": stuckTreeObj,
        "nme": nmeTreeObj,
        "pitchfork": pitchforkTreeObj,
        "boilerroom": boilerroomTreeObj,
        "ruin": ruinTreeObj,
        "paperholm": paperholmTreeObj,
        //"fraser" : fraserTreeObj,
        "cristian": cristianTreeObj,
        "headlands": headlandsTreeObj,
        "artnation": artnationTreeObj,
        "nycscout": nycscoutTreeObj,
        "tavi": taviTreeObj,
        "repeller": repellerTreeObj,
        //"yahoosports" : yahoosportsTreeObj,
        "slash": slashFilmTreeObj,
        "guardian": guardianFilmTreeObj,
        "walker": walkerFilmTreeObj,
        "doc": docFilmTreeObj,
        "venturebeat": venturebeatTreeObj,
        "killscreen": killscreenTreeObj,
        "inquisitr": inquisitrTreeObj,
        "sbnation": sbnationTreeObj,
        "dezeen": dezeenTreeObj,
        "contemporist": contemporistTreeObj,
        "eikongraphia": eikongraphiaTreeObj,
        "unhappy": unhappyTreeObj,
        "architecture": architectureTreeObj,
        "designboom": designboomTreeObj,
        "nautilus": nautilusTreeObj
    };

    return allPortholeTrees;
};

var getAllPortholeTrees = function getAllPortholeTrees() {

    return allPortholeTrees = createAllPortholeTrees();
};
/*
export const parse = ( result, type ) => {

    var portholeBranches = [];

    _.each(result.branches, function(branch, index) {

        switch(type){

            case "cool" :
                portholeBranch = getCoolBranch(branch, index);
                break;

            case "rss" :
                portholeBranch = getRSSBranch(branch, index);
                break;

            default :
                portholeBranch = getRSSBranch(branch, index);
                break;
        }

        portholeBranches.push(portholeBranch);

    });

    return portholeBranches;


};
*/

var getPortholeBranches = function getPortholeBranches(branches) {

    var portholeBranches = [];

    console.log('PortholeTreeUtil getPortholeBranches branches: ', branches);

    __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](branches, function (branch, index) {
        var portholeBranch = getRSSBranch(branch, index);
        portholeBranches.push(portholeBranch);
    });

    return portholeBranches;
};

/***/ }),

/***/ "./store/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger__ = __webpack_require__("redux-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sagas_index__ = __webpack_require__("./sagas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_index__ = __webpack_require__("./reducers/index.js");








var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_1_redux_saga___default()();
var loggerMiddleware = Object(__WEBPACK_IMPORTED_MODULE_3_redux_logger__["createLogger"])();

var initializeStore = function initializeStore(initialState) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_5__reducers_index__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(sagaMiddleware, __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a, loggerMiddleware));

  sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_4__sagas_index__["a" /* default */], store.dispatch, store.getState);

  return store;
};

/* harmony default export */ __webpack_exports__["a"] = (initializeStore);

/***/ }),

/***/ "./theme/materialUITheme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return overrideStyles; });
/* unused harmony export themeSettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_misc__ = __webpack_require__("./utils/misc.js");
/* eslint-disable */



var muiConfig = {
    palette: {
        primaryColor: Object(__WEBPACK_IMPORTED_MODULE_0__utils_misc__["c" /* getPrimaryTheme */])(),
        accentColor: Object(__WEBPACK_IMPORTED_MODULE_0__utils_misc__["b" /* getMoodyPurple */])()
    }
};

var faintBlack = '#e5c8ec1f'; // try to find hover background color // originally was "(0, 0, 0, 0.12)"

// buttons
var btnStyle = {
    textTransform: 'none',
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: '#4D3F99',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2
};
var deleteBtnStyle = {
    textTransform: 'none',
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: '#E14C71',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2
};
var fabDeleteBtnStyle = { backgroundColor: 'black', opacity: 0.3 };
var loginBtnStyle = {
    textTransform: 'none',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#4D3F99',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2
};
var welcomeBtnStyle = {
    textTransform: 'none',
    marginTop: 20,
    marginRight: 40,
    borderRadius: 10,
    backgroundColor: '#4D3F99',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2
};

var primaryBtnStyle = {
    textTransform: 'none',
    marginTop: 0,
    marginRight: 0,
    borderRadius: 10,
    backgroundColor: Object(__WEBPACK_IMPORTED_MODULE_0__utils_misc__["c" /* getPrimaryTheme */])(),
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2
};
var accentBtnStyle = {
    textTransform: 'none',
    marginTop: 0,
    marginRight: 0,
    borderRadius: 10,
    backgroundColor: Object(__WEBPACK_IMPORTED_MODULE_0__utils_misc__["b" /* getMoodyPurple */])(),
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2
};

var overlayStyle = {
    borderRadius: 10,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 2,
    marginLeft: -10,
    marginRight: -10
};
var labelStyle = { textTransform: 'none' };
var checkboxLabelStyle = { color: '#666' };

var overrideStyles = {
    commonBtn: btnStyle,
    primaryBtn: primaryBtnStyle,
    accentBtn: accentBtnStyle,
    loginBtn: loginBtnStyle,
    deleteBtn: deleteBtnStyle,
    welcomeBtn: welcomeBtnStyle,
    overlayStyle: overlayStyle,
    labelStyle: labelStyle,
    checkboxLabelStyle: checkboxLabelStyle,
    fabDeleteBtn: fabDeleteBtnStyle,
    errorColor: Object(__WEBPACK_IMPORTED_MODULE_0__utils_misc__["a" /* getAdminRed */])(),
    saveSpot: {},
    listIconColor: { color: Object(__WEBPACK_IMPORTED_MODULE_0__utils_misc__["d" /* getPurple */])() },
    listIconText: { fontFamily: 'Open Sans, Helvetica, Arial, sans-serif' },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
    },
    icon: { color: 'white' },
    label: {
        textTransform: 'none',
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: '14px'
    },
    checked: {
        background: 'transparent',
        color: muiConfig.palette.accentColor
    },
    textField: {
        width: 280,
        color: '#999'
    },
    textArea: {
        width: 280,
        color: '#999'
    },
    autocompleteInput: {
        width: 280,
        fontSize: 12,
        color: '#666'
    },
    progress: {
        color: muiConfig.palette.accentColor,
        backgroundColor: '#FFF'
    }
};

var themeSettings = {
    direction: 'ltr',
    palette: {
        common: {
            black: '#000',
            white: '#fff',
            transparent: 'rgba(0, 0, 0, 0)',
            fullBlack: 'rgba(0, 0, 0, 1)',
            darkBlack: 'rgba(0, 0, 0, 0.87)',
            lightBlack: 'rgba(0, 0, 0, 0.54)',
            minBlack: 'rgba(0, 0, 0, 0.26)',
            faintBlack: faintBlack,
            fullWhite: 'rgba(255, 255, 255, 1)',
            darkWhite: 'rgba(255, 255, 255, 0.87)',
            lightWhite: 'rgba(255, 255, 255, 0.54)'
        },
        type: 'light',
        primary: {
            '50': '#e3f2fd',
            '100': '#bbdefb',
            '200': '#90caf9',
            '300': '#64b5f6',
            '400': '#42a5f5',
            '500': muiConfig.palette.primaryColor,
            '600': '#1e88e5',
            '700': '#1976d2',
            '800': '#1565c0',
            '900': '#0d47a1',
            A100: '#82b1ff',
            A200: '#448aff',
            A400: '#2979ff',
            A700: muiConfig.palette.primaryColor,
            contrastDefaultColor: 'light'
        },
        secondary: {
            '50': '#fce4ec',
            '100': '#f8bbd0',
            '200': '#f48fb1',
            '300': '#f06292',
            '400': '#ec407a',
            '500': muiConfig.palette.accentColor,
            '600': '#d81b60',
            '700': '#c2185b',
            '800': '#ad1457',
            '900': '#880e4f',
            A100: '#ff80ab',
            A200: '#ff4081',
            A400: muiConfig.palette.accentColor,
            A700: '#c51162',
            contrastDefaultColor: 'light'
        },
        error: {
            '50': '#ffebee',
            '100': '#ffcdd2',
            '200': '#ef9a9a',
            '300': '#e57373',
            '400': '#ef5350',
            '500': '#f44336',
            '600': '#e53935',
            '700': '#d32f2f',
            '800': '#c62828',
            '900': '#b71c1c',
            A100: '#ff8a80',
            A200: '#ff5252',
            A400: '#ff1744',
            A700: '#d50000',
            contrastDefaultColor: 'light'
        },
        grey: {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '200': '#eeeeee',
            '300': '#e0e0e0',
            '400': '#bdbdbd',
            '500': '#9e9e9e',
            '600': '#757575',
            '700': '#616161',
            '800': '#424242',
            '900': muiConfig.palette.accentColor,
            A100: muiConfig.palette.accentColor, // "#d5d5d5"
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161',
            contrastDefaultColor: 'dark'
        },
        shades: {
            dark: {
                text: {
                    primary: 'rgba(255, 255, 255, 1)',
                    secondary: 'rgba(255, 255, 255, 0.7)',
                    disabled: 'rgba(255, 255, 255, 0.5)',
                    hint: 'rgba(255, 255, 255, 0.5)',
                    icon: 'rgba(255, 255, 255, 0.5)',
                    divider: 'rgba(255, 255, 255, 0.12)',
                    lightDivider: 'rgba(255, 255, 255, 0.075)'
                },
                input: {
                    bottomLine: 'rgba(255, 255, 255, 0.7)',
                    helperText: 'rgba(255, 255, 255, 0.7)',
                    labelText: 'rgba(255, 255, 255, 0.7)',
                    inputText: 'rgba(255, 255, 255, 1)',
                    disabled: 'rgba(255, 255, 255, 0.5)'
                },
                action: {
                    active: 'rgba(255, 255, 255, 1)',
                    disabled: 'rgba(255, 255, 255, 0.3)'
                },
                background: {
                    default: '#303030',
                    paper: '#424242',
                    appBar: '#212121',
                    contentFrame: '#212121'
                },
                line: {
                    stepper: '#bdbdbd'
                }
            },
            light: {
                text: {
                    primary: 'rgba(0, 0, 0, 0.87)',
                    secondary: 'rgba(0, 0, 0, 0.54)',
                    disabled: 'rgba(0, 0, 0, 0.38)',
                    hint: 'rgba(0, 0, 0, 0.38)',
                    icon: 'rgba(0, 0, 0, 0.38)',
                    divider: 'rgba(0, 0, 0, 0.12)',
                    lightDivider: 'rgba(0, 0, 0, 0.075)'
                },
                input: {
                    bottomLine: muiConfig.palette.accentColor,
                    helperText: 'rgba(0, 0, 0, 0.54)',
                    labelText: 'rgba(0, 0, 0, 0.54)',
                    inputText: 'rgba(0, 0, 0, 0.87)',
                    disabled: 'rgba(0, 0, 0, 0.42)'
                },
                action: {
                    active: 'rgba(0, 0, 0, 0.54)',
                    disabled: 'rgba(0, 0, 0, 0.26)'
                },
                background: {
                    default: '#fafafa',
                    paper: '#fff',
                    appBar: '#f5f5f5',
                    contentFrame: '#eeeeee'
                },
                line: {
                    stepper: '#bdbdbd'
                }
            }
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
            icon: 'rgba(0, 0, 0, 0.38)',
            divider: 'rgba(0, 0, 0, 0.12)',
            lightDivider: 'rgba(0, 0, 0, 0.075)'
        },
        input: {
            bottomLine: muiConfig.palette.accentColor,
            helperText: 'rgba(0, 0, 0, 0.54)',
            labelText: 'rgba(0, 0, 0, 0.54)',
            inputText: 'rgba(0, 0, 0, 0.87)',
            disabled: 'rgba(0, 0, 0, 0.42)'
        },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.26)'
        },
        background: {
            default: '#fafafa',
            paper: '#fff',
            appBar: '#f5f5f5',
            contentFrame: '#eeeeee'
        },
        line: {
            stepper: '#bdbdbd'
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        display4: {
            fontSize: '7rem',
            fontWeight: 300,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            letterSpacing: '-.04em',
            lineHeight: '1.14286em',
            marginLeft: '-.06em',
            color: 'rgba(0, 0, 0, 0.54)'
        },
        display3: {
            fontSize: '3.5rem',
            fontWeight: 400,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            letterSpacing: '-.02em',
            lineHeight: '1.30357em',
            marginLeft: '-.04em',
            color: 'rgba(0, 0, 0, 0.54)'
        },
        display2: {
            fontSize: '2.8125rem',
            fontWeight: 400,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.06667em',
            marginLeft: '-.04em',
            color: 'rgba(0, 0, 0, 0.54)'
        },
        display1: {
            fontSize: '2.125rem',
            fontWeight: 400,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.20588em',
            marginLeft: '-.04em',
            color: 'rgba(0, 0, 0, 0.54)'
        },
        headline: {
            fontSize: '1.5rem',
            fontWeight: 400,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.35417em',
            color: 'rgba(0, 0, 0, 0.87)'
        },
        title: {
            fontSize: '1.3125rem',
            fontWeight: 500,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.16667em',
            color: 'rgba(0, 0, 0, 0.87)'
        },
        subheading: {
            fontSize: '1rem',
            fontWeight: 400,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.5em',
            color: 'rgba(0, 0, 0, 0.87)'
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.71429em',
            color: 'rgba(0, 0, 0, 0.87)'
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.46429em',
            color: 'rgb(102, 102, 102)'
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.375em',
            color: 'rgba(0, 0, 0, 0.54)'
        },
        button: {
            fontSize: '0.6rem',
            textTransform: 'none',
            fontWeight: 400,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            color: 'white'
        }
    },
    mixins: {
        toolbar: {
            minHeight: 56,
            '@media (min-width:1px) and (orientation: landscape)': {
                minHeight: 48
            },
            '@media (min-width:600px)': {
                minHeight: 64
            }
        }
    },
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 1,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        }
    },
    shadows: ['none', '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)', '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)', '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)', '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)', '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)', '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)', '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)', '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)', '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)', '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)', '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)', '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)', '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)', '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)', '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)', '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)', '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)', '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)', '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)', '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)', '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)', '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)', '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)', '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)'],
    transitions: {
        easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
        },
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195
        }
    },
    spacing: {
        unit: 8
    },
    zIndex: {
        mobileStepper: 900,
        menu: 1000,
        appBar: 1100,
        drawerOverlay: 1200,
        navDrawer: 1300,
        dialogOverlay: 1400,
        dialog: 1500,
        layer: 2000,
        popover: 2100,
        snackbar: 2900,
        tooltip: 3000
    }
};

/***/ }),

/***/ "./utils/LogUtil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* unused harmony export logError */
/* eslint-disable */

function log(message, arg) {
    if (document.domain.indexOf("uat") > -1 || document.domain.indexOf("dev") > -1 || document.domain.indexOf("localhost") > -1) {
        arg = typeof arg === "undefined" ? "" : arg;
        console.log(message, arg);
    }
}

function logError(message, arg) {
    if (document.domain.indexOf("uat") > -1 || document.domain.indexOf("dev") > -1 || document.domain.indexOf("localhost") > -1) {
        arg = typeof arg === "undefined" ? "" : arg;
        console.error(message, arg);
    }
}

/***/ }),

/***/ "./utils/message/MessageUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return broadcast; });
var broadcast = function broadcast(message) {};

/***/ }),

/***/ "./utils/misc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateStr */
/* unused harmony export validateNum */
/* unused harmony export getTimeFromSeconds */
/* unused harmony export getHoursDiv */
/* unused harmony export getHoursFromSavedSpot */
/* unused harmony export transformLower */
/* unused harmony export createConstants */
/* unused harmony export createReducer */
/* unused harmony export parseJSON */
/* unused harmony export validateEmail */
/* harmony export (immutable) */ __webpack_exports__["d"] = getPurple;
/* unused harmony export getTeal */
/* unused harmony export getMauve */
/* unused harmony export getPurpleLite */
/* harmony export (immutable) */ __webpack_exports__["b"] = getMoodyPurple;
/* unused harmony export getPlusPurple */
/* harmony export (immutable) */ __webpack_exports__["a"] = getAdminRed;
/* harmony export (immutable) */ __webpack_exports__["c"] = getPrimaryTheme;
/* unused harmony export getOtherPurple */
/* unused harmony export capitalizeFirstLetter */
/* unused harmony export getDisplayTimeAsString */
/* unused harmony export getDisplayTime */
/* unused harmony export getDaysAsSingleLetters */
/* unused harmony export getDayOfWeek */
/* unused harmony export convertTimeToZuluHour */
/* unused harmony export convertTimeToNumber */
/* unused harmony export convertShiftLatLongToTwoDecimal */
/* unused harmony export convertShiftBackDecimalToLatLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LogUtil__ = __webpack_require__("./utils/LogUtil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var _jsxFileName = '/Users/brandonflowers/cabinquest/utils/misc.js';
/* eslint-disable */
/* eslint max-len: 0, no-param-reassign: 0 */






var baz = function baz(str) {
    return (str.indexOf('0:00 AM to 11:59 PM') || str.indexOf('0:00 AM - 11:59 PM')) > -1;
};

function validateStr(str) {
    if (typeof str === 'string' && String(str) !== 'null') return str;else return '';
}

function validateNum(num) {
    if (typeof num === 'number') return num;else return 0;
}

function getTimeFromSeconds(seconds) {
    return __WEBPACK_IMPORTED_MODULE_3_moment___default.a.utc(seconds * 1000).format('h:mm A');
}

function getHoursDiv(info, specialStyle, pStyle) {
    var hours = void 0;

    var normalPStyle = { margin: 0, padding: 0, fontSize: 14, color: '#666' };
    var normalStyle = { textAlign: 'left', marginLeft: 35 };

    pStyle = typeof pStyle === 'undefined' ? normalPStyle : pStyle;

    specialStyle = typeof specialStyle === 'undefined' ? normalStyle : specialStyle;

    Object(__WEBPACK_IMPORTED_MODULE_2__LogUtil__["a" /* log */])('misc - getHoursDiv - info: ', info);

    var getTimeFromSeconds = function getTimeFromSeconds(seconds) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default.a.utc(seconds * 1000).format('h:mm A');
    };

    var validateDisplay = function validateDisplay(str, day) {
        if (str.indexOf('Invalid') > -1) {
            // most likely closed on these days if there is an error in the time
            var newStr = day === 'Saturday' || day === 'Sunday' ? day + ' Closed' : 'Error in Time Entry - Please Report';

            return newStr;
        } else {
            if (str.indexOf('0:00 AM to 11:59 PM') > -1 || str.indexOf('0:00 AM - 11:59 PM') > -1) {
                return day + ' Open 24 Hours';
            } else return day + ' ' + str;
        }
    };

    // if a key is missing?
    var unknown = '? to ?';
    var hoursArr = ['Mon ' + unknown, 'Tues ' + unknown, 'Wed ' + unknown, 'Thurs ' + unknown, 'Fri ' + unknown, 'Sat ' + unknown, 'Sun ' + unknown];
    // bad data may not have this...
    //if (info.open_monday) {
    __WEBPACK_IMPORTED_MODULE_0_lodash__["forIn"](info, function (value, key) {
        if (key === 'open_monday' || key === 'openmonday') {
            if (info.open_monday) {
                var displayMonOpenTime = getTimeFromSeconds(info.open_monday_open);
                var displayMonClosedTime = getTimeFromSeconds(info.open_monday_close);
                var displayMonTime = displayMonOpenTime + ' to ' + displayMonClosedTime;

                hoursArr.splice(0, 1, validateDisplay(displayMonTime, 'Monday'));
            } else if (info.openmonday) {
                var _displayMonOpenTime = getTimeFromSeconds(info.openmondayopen);
                var _displayMonClosedTime = getTimeFromSeconds(info.openmondayclose);
                var _displayMonTime = _displayMonOpenTime + ' to ' + _displayMonClosedTime;

                hoursArr.splice(0, 1, validateDisplay(_displayMonTime, 'Monday'));
            } else hoursArr.splice(0, 1, 'Closed Monday');
        } else if (key === 'open_tuesday' || key === 'opentuesday') {
            if (info.open_tuesday) {
                var displayTuesOpenTime = getTimeFromSeconds(info.open_tuesday_open);
                var displayTuesClosedTime = getTimeFromSeconds(info.open_tuesday_close);
                var displayTuesTime = displayTuesOpenTime + ' to ' + displayTuesClosedTime;
                hoursArr.splice(1, 1, validateDisplay(displayTuesTime, 'Tuesday'));
            } else if (info.opentuesday) {
                var _displayTuesOpenTime = getTimeFromSeconds(info.opentuesdayopen);
                var _displayTuesClosedTime = getTimeFromSeconds(info.opentuesdayclose);
                var _displayTuesTime = _displayTuesOpenTime + ' to ' + _displayTuesClosedTime;
                hoursArr.splice(1, 1, validateDisplay(_displayTuesTime, 'Tuesday'));
            } else hoursArr.splice(1, 1, 'Closed Tuesday');
        } else if (key === 'open_wednesday' || key === 'openwednesday') {
            if (info.open_wednesday) {
                var displayWedOpenTime = getTimeFromSeconds(info.open_wednesday_open);
                var displayWedClosedTime = getTimeFromSeconds(info.open_wednesday_close);
                var displayWedTime = displayWedOpenTime + ' to ' + displayWedClosedTime;

                hoursArr.splice(2, 1, validateDisplay(displayWedTime, 'Wednesday'));
            } else if (info.openwednesday) {
                var _displayWedOpenTime = getTimeFromSeconds(info.openwednesdayopen);
                var _displayWedClosedTime = getTimeFromSeconds(info.openwednesdayclose);
                var _displayWedTime = _displayWedOpenTime + ' to ' + _displayWedClosedTime;

                hoursArr.splice(2, 1, validateDisplay(_displayWedTime, 'Wednesday'));
            } else hoursArr.splice(2, 1, 'Closed Wednesday');
        } else if (key === 'open_thursday' || key === 'openthursday') {
            if (info.open_thursday) {
                var displayThurOpenTime = getTimeFromSeconds(info.open_thursday_open);
                var displayThurClosedTime = getTimeFromSeconds(info.open_thursday_close);
                var displayThurTime = displayThurOpenTime + ' to ' + displayThurClosedTime;

                hoursArr.splice(3, 1, validateDisplay(displayThurTime, 'Thursday'));
            } else if (info.openthursday) {
                var _displayThurOpenTime = getTimeFromSeconds(info.openthursdayopen);
                var _displayThurClosedTime = getTimeFromSeconds(info.openthursdayclose);
                var _displayThurTime = _displayThurOpenTime + ' to ' + _displayThurClosedTime;

                hoursArr.splice(3, 1, validateDisplay(_displayThurTime, 'Thursday'));
            } else hoursArr.splice(3, 1, 'Closed Thursday');
        } else if (key === 'open_friday' || key === 'openfriday') {
            if (info.open_friday) {
                var displayFriOpenTime = getTimeFromSeconds(info.open_friday_open);
                var displayFriClosedTime = getTimeFromSeconds(info.open_friday_close);
                var displayFriTime = displayFriOpenTime + ' to ' + displayFriClosedTime;

                hoursArr.splice(4, 1, validateDisplay(displayFriTime, 'Friday'));
            } else if (info.openfriday) {
                var _displayFriOpenTime = getTimeFromSeconds(info.openfridayopen);
                var _displayFriClosedTime = getTimeFromSeconds(info.openfridayclose);
                var _displayFriTime = _displayFriOpenTime + ' to ' + _displayFriClosedTime;

                hoursArr.splice(4, 1, validateDisplay(_displayFriTime, 'Friday'));
            } else hoursArr.splice(4, 1, 'Closed Friday');
        } else if (key === 'open_saturday' || key === 'opensaturday') {
            if (info.open_saturday) {
                var displaySatOpenTime = getTimeFromSeconds(info.open_saturday_open);
                var displaySatClosedTime = getTimeFromSeconds(info.open_saturday_close);
                var displaySatTime = displaySatOpenTime + ' to ' + displaySatClosedTime;

                hoursArr.splice(5, 1, validateDisplay(displaySatTime, 'Saturday'));
            } else if (info.opensaturday) {
                var _displaySatOpenTime = getTimeFromSeconds(info.opensaturdayopen);
                var _displaySatClosedTime = getTimeFromSeconds(info.opensaturdayclose);
                var _displaySatTime = _displaySatOpenTime + ' to ' + _displaySatClosedTime;

                hoursArr.splice(5, 1, validateDisplay(_displaySatTime, 'Saturday'));
            } else hoursArr.splice(5, 1, 'Closed Saturday');
        } else if (key === 'open_sunday' || key === 'opensunday') {
            if (info.open_sunday) {
                var displaySunOpenTime = getTimeFromSeconds(info.open_sunday_open);
                var displaySunClosedTime = getTimeFromSeconds(info.open_sunday_close);
                var displaySunTime = displaySunOpenTime + ' to ' + displaySunClosedTime;

                hoursArr.splice(6, 1, validateDisplay(displaySunTime, 'Sunday'));
            } else if (info.opensunday) {
                var _displaySunOpenTime = getTimeFromSeconds(info.opensundayopen);
                var _displaySunClosedTime = getTimeFromSeconds(info.opensundayclose);
                var _displaySunTime = _displaySunOpenTime + ' to ' + _displaySunClosedTime;

                hoursArr.splice(6, 1, validateDisplay(_displaySunTime, 'Sunday'));
            } else hoursArr.splice(6, 1, 'Closed Sunday');
        }

        /*
            "Jarvis Collegiate GSA - Gay/Lesbian/Bisexual/Transgender Support Groups"
            open_friday:true
            open_friday_close:61200 // time as seconds
            open_friday_open:32400
            open_monday:true
            open_monday_close:61200
            open_monday_open:32400
            open_saturday:false
            open_sunday:false
            open_thursday:true
            open_thursday_close:61200
            open_thursday_open:32400
            open_tuesday:true
            open_tuesday_close:61200
            open_tuesday_open:32400
            open_twentyfourseven:false
            open_wednesday:true
            open_wednesday_close:61200
            open_wednesday_open:32400
             */
    });
    //} else return null;

    Object(__WEBPACK_IMPORTED_MODULE_2__LogUtil__["a" /* log */])('getHoursDiv hoursArr: ', hoursArr);

    if (hoursArr.length === 0) {
        Object(__WEBPACK_IMPORTED_MODULE_2__LogUtil__["a" /* log */])('getHoursDiv possible bad times');
        return null;
    } else {
        var plist = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](hoursArr, function (hour, uid) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'p',
                { key: uid, style: pStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 335
                    }
                },
                hour === 'null' ? 'No hours' : hour
            );
        });

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: specialStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 340
                }
            },
            plist
        );
    }
}

function getHoursFromSavedSpot(savedSpot) {
    if (savedSpot.hours !== 'null' || savedSpot.hours.toLowerCase() !== 'no hours') {
        var days = {};
        var dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](dayKeys, function (dayKey) {
            var closeHour = void 0,
                closeMinute = void 0,
                closeNight = void 0,
                label = void 0,
                openHour = void 0,
                openMinute = void 0,
                openMorning = void 0,
                open = void 0;

            if (savedSpot.hasOwnProperty('open_' + dayKey + '_open')) {
                var closeTime = getTimeFromSeconds(savedSpot['open_' + dayKey + '_close']) !== 'Invalid date' ? getTimeFromSeconds(savedSpot['open_' + dayKey + '_close']) : '5:00 PM';
                var closeAMorPM = closeTime.toLowerCase().indexOf('pm') > -1 ? 'PM' : 'AM';
                closeHour = closeTime.split(':')[0];
                closeMinute = closeTime.split(':')[1].split(' ')[0];
                closeNight = closeAMorPM;
                label = capitalizeFirstLetter(dayKey.substr(0, 3));
                var openTime = getTimeFromSeconds(savedSpot['open_' + dayKey + '_open']) !== 'Invalid date' ? getTimeFromSeconds(savedSpot['open_' + dayKey + '_open']) : '9:00 AM';
                var openAMorPM = openTime.toLowerCase().indexOf('pm') > -1 ? 'PM' : 'AM';
                openHour = openTime.split(':')[0];
                openMinute = openTime.split(':')[1].split(' ')[0];
                openMorning = openAMorPM;
                open = savedSpot['open_' + dayKey];
            } else {
                closeHour = '5';
                closeMinute = '00';
                closeNight = 'PM';
                label = capitalizeFirstLetter(dayKey.substr(0, 3));
                openHour = '9';
                openMinute = '00';
                openMorning = 'AM';
                open = false;
            }

            var day = {
                closeHour: closeHour,
                closeMinute: closeMinute,
                closeNight: closeNight,
                label: label,
                openHour: openHour,
                openMinute: openMinute,
                openMorning: openMorning,
                open: open
            };

            days[dayKey] = day;
        });

        var hours = {
            checkBox: {
                alwaysOpen: {
                    label: '24/7',
                    val: false
                }
            },
            days: days
        };

        return hours;
    }
}

function transformLower(obj) {
    var lowercaseData = __WEBPACK_IMPORTED_MODULE_0_lodash__["transform"](obj, function (result, val, key) {
        result[key.toLowerCase()] = val;
    });
    return lowercaseData;
}

function createConstants() {
    for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
        constants[_key] = arguments[_key];
    }

    return constants.reduce(function (acc, constant) {
        acc[constant] = constant;
        return acc;
    }, {});
}

function createReducer(initialState, reducerMap) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];

        var reducer = reducerMap[action.type];

        return reducer ? reducer(state, action.payload) : state;
    };
}

function parseJSON(response) {
    return response.data;
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function getPurple() {
    return '#4D3F99';
}

function getTeal() {
    return '#5bc5b6';
}

function getMauve() {
    return 'rgb(159, 155, 204)';
}

function getPurpleLite() {
    return '#9f9bcc';
}

function getMoodyPurple() {
    return '#be9ac8';
}

function getPlusPurple() {
    return '#9F9BCD';
}

function getAdminRed() {
    return ''; // Maformed CSS error when I put a hex or a string ?!
}

function getPrimaryTheme() {
    return '#4D3F99'; //"#30ad96";//"rgb(0, 188, 212)";
}

function getOtherPurple() {
    return '#792592';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDisplayTimeAsString(date) {
    var now = typeof date === 'undefined' ? new Date() : date;

    var mins = now.getMinutes() < 10 ? String('0' + now.getMinutes()) : now.getMinutes();
    var hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    var AMorPM = now.getHours() > 12 ? ' PM' : ' AM';

    var generalDisplayTime = hours + ':' + mins + AMorPM;
    ////console.log("getDisplayTime: ", generalDisplayTime)
    return generalDisplayTime;
}

function getDisplayTime(date) {
    var now = typeof date === 'undefined' ? new Date() : date;

    var mins = now.getMinutes() < 10 ? String('0' + now.getMinutes()) : now.getMinutes();
    var hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    var AMorPM = now.getHours() > 12 ? ' PM' : ' AM';

    var month = now.getMonth();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var displayMonth = months[month];

    var generalDisplayTime = displayMonth + ' ' + now.getDate() + ', ' + now.getFullYear() + ' ' + hours + ':' + mins + AMorPM;
    ////console.log("getDisplayTime: ", generalDisplayTime);

    var readDisplayTime = generalDisplayTime.indexOf('undefined') > -1 ? '' : generalDisplayTime;

    return readDisplayTime;
}

function getDaysAsSingleLetters() {
    return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
}

function getDayOfWeek(date) {
    var now = typeof date === 'undefined' ? new Date() : date;
    var dayOfWeekIndex = now.getDay();
    var days = getDaysAsSingleLetters();
    return days[dayOfWeekIndex];
}

function convertTimeToZuluHour(day, isStartTime) {
    if (isStartTime) {
        var hour = day.openMorning === 'PM' ? Number(day.openHour) + 12 : Number(day.openHour);
        var min = day.openMinute === '0' ? '00' : day.openMinute;
        var together = String(hour) + String(min);
        var zulu = Number(together);
        return zulu;
    } else {
        var _hour = day.closeNight === 'PM' ? Number(day.closeHour) + 12 : Number(day.closeHour);
        var _min = day.closeMinute === '0' ? '00' : day.closeMinute;
        var _together = String(_hour) + String(_min);
        var _zulu = Number(_together);
        return _zulu;
    }
}

function convertTimeToNumber(day, isStartTime) {
    var date = new Date();

    if (isStartTime) {
        var hour = day.openMorning === 'PM' ? Number(day.openHour) + 12 : Number(day.openHour);
        var min = day.openMinute === '0' ? '00' : day.openMinute;

        date.setHours(hour);
        date.setMinutes(min);
    } else {
        var _hour2 = day.closeNight === 'PM' ? Number(day.closeHour) + 12 : Number(day.closeHour);
        var _min2 = day.closeMinute === '0' ? '00' : day.closeMinute;

        date.setHours(_hour2);
        date.setMinutes(_min2);
    }
    // database store the date as seconds
    return __WEBPACK_IMPORTED_MODULE_3_moment___default()(date).diff(__WEBPACK_IMPORTED_MODULE_3_moment___default()().startOf('day'), 'seconds');
}

var decShift = 100000000;

function convertShiftLatLongToTwoDecimal(lat, long) {
    // make sure the number has 7 decimal 10000000
    var convert = function convert(coord) {
        return coord.toFixed(8);
    };

    var twoDecLatNum = convert(lat) * decShift;
    var twoDecLongNum = convert(lat) * decShift;

    return { lat: twoDecLatNum, long: twoDecLongNum };
}

function convertShiftBackDecimalToLatLong(lat, long) {
    var lat8Dec = lat / decShift;
    var long8Dec = long / decShift;

    return { lat: lat8Dec, long: long8Dec };
}

/***/ }),

/***/ "./utils/porthole/PortholeFeedUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addDefaultPortholeTrees; });
/* unused harmony export getAllPortholeTrees */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_porthole_PortholeBranchModel__ = __webpack_require__("./app/models/porthole/PortholeBranchModel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PortholeTreeUtils__ = __webpack_require__("./utils/porthole/PortholeTreeUtils.js");
var _this = this;





//import {createForestWithPortholeTrees} from
//import {updateStatus} from

var serverPath = '/';
var bSignedIn = true;

var validateContent = function validateContent(entry) {
    for (var ix in entry) {
        if (String(entry[ix]) === 'undefined') {
            entry[ix] = 'not found';
        }
    }

    return entry;
};

var addDefaultPortholeTrees = function addDefaultPortholeTrees(cabinQuestUserModel) {
    console.log('addDefaultPortholeTrees: ', cabinQuestUserModel);
    var allPortholeTreesObj = getAllPortholeTrees(); // returns an object with keys
    var allPortholeTrees = [];

    for (var ix in allPortholeTreesObj) {
        var tree = allPortholeTreesObj[ix];
        allPortholeTrees.push(tree);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_3__PortholeTreeUtils__["a" /* addPortholeTrees */])(allPortholeTrees, cabinQuestUserModel);
};

var getRSSBranch = function getRSSBranch(branch, index) {
    var tags = [];
    branch = validateContent(branch);

    var images = PortholeImageService.getImagesFromDescription(branch);

    var resultImageObj = images[0];
    var photoUrl = resultImageObj.useText ? resultImageObj.defaultImageUrl : resultImageObj.imageUrl;

    // works for some...

    // replace 500 with 1280 - only works for CabinPorn
    var photoLargeUrl = photoUrl.indexOf('500') > -1 ? photoUrl.replace('500', '1280') : photoUrl;

    var branchTitleUnescape = _.unescape(branch.title);
    var branchDescriptionUnescape = _.unescape(resultImageObj.text);

    /*
     author: nullcategories: Array[6]0: "cabin"1: "cabinporn"2: "colorado"3: "snow"4: "solar"5: "submission"length: 6__proto__: Array[0]comments: nulldate: "2015-02-10T18:14:16.000Z"description: "<img src="http://41.media.tumblr.com/cf362224cafdd95b00cd92be8b71b890/tumblr_niofin4r6P1qzwmsso1_500.jpg"/><br/><br/><p>Artist-in-Residence cabin up Lefthand Canyon in <b>Ward, CO</b>. </p><p>Submitted by Sasha Arsic.</p>"enclosures: Array[0]guid: "http://cabinporn.com/post/110646415150"image: Objectlink: "http://cabinporn.com/post/110646415150"meta: Objectoriglink: nullpermalink: "http://cabinporn.com/post/110646415150"pubDate: "2015-02-10T18:14:16.000Z"pubdate: "2015-02-10T18:14:16.000Z"rss:@: Objectrss:category: Array[6]rss:description: Objectrss:guid: Objectrss:link: Objectrss:pubdate: Objectrss:title: Objectsource: Objectsummary: "<img src="http://41.media.tumblr.com/cf362224cafdd95b00cd92be8b71b890/tumblr_niofin4r6P1qzwmsso1_500.jpg"/><br/><br/><p>Artist-in-Residence cabin up Lefthand Canyon in <b>Ward, CO</b>. </p><p>Submitted by Sasha Arsic.</p>"title: "Artist-in-Residence cabin up Lefthand Canyon in Ward,..."
    var portholeBranch = {
      tags: tags,
      photoURL: photoURL,
      photoLargeURL: photoLargeURL,
      link: branch.link,
      publishedDate: branch.publishedDate,
      title: branchTitleUnescape,
      feedLink: branch.meta.link,
      feedTitle: branch.meta.title,
      about: branchTitleUnescape,
      index: index,
      text: branchDescriptionUnescape,
      useText: resultImageObj.useText,
      x: 0,
      y: 0,
    };
    */
    // fix title
    if (branch.meta.title === 'National Geographic Photo of the Day') branch.meta.title = 'National Geographic';else if (branch.meta.title === 'Latest Articles') branch.meta.title = 'Dwell';else if (branch.meta.title === 'Latest Items from TreeHugger') branch.meta.title = 'TreeHugger';else if (branch.meta.title.trim() === 'Polygon -  All') branch.meta.title = 'Polygon';else if (branch.meta.title.trim() === 'Behance Featured Projects') branch.meta.title = 'Behance';else if (branch.meta.title.trim() === 'Abduzeedo Design Inspiration - Design Inspiration & Tutorials') branch.meta.title = 'Abduzeedo';else if (branch.meta.title.trim() === 'Latest News - Pitchfork') branch.meta.title = 'Pitchfork';else if (branch.meta.title.trim() === 'rackk and ruin') branch.meta.title = 'Rackk and Ruin';else if (branch.meta.title.trim() === 'BOILER ROOM') branch.meta.title = 'Boiler Room';else if (branch.meta.title.trim() === 'CRISTIAN ORDONEZ') branch.meta.title = 'Cristian Ordóñez';else if (branch.meta.title.trim() === 'Get Outside — Medium') branch.meta.title = 'Headlands';else if (branch.meta.title.trim() === 'ArtStation - Latest Picks') branch.meta.title = 'ArtStation';else if (branch.meta.title.trim() === 'Y! Sports Blogs  - Yahoo Canada Sports') branch.meta.title = 'Yahoo Sports';else if (branch.meta.title.trim() === 'International Documentary Association') branch.meta.title = 'Documentary';else if (branch.meta.title.trim() === '/Film') branch.meta.title = 'Slash';else if (branch.meta.title.trim() === 'Film Blog | The Guardian') branch.meta.title = 'The Guardian';else if (branch.meta.title.trim() === 'Crosscuts') branch.meta.title = 'Walker';else if (branch.meta.title.trim() === 'NBA.com: News') branch.meta.title = 'NBA';else if (branch.meta.title.trim() === 'CONTEMPORIST') branch.meta.title = 'Contemporist';else if (branch.meta.title.trim() === 'Sports - The Inquisitr News') branch.meta.title = 'The Inquisitr';else if (branch.meta.title.trim() === 'designboom | architecture & design magazine') branch.meta.title = 'designboom';

    var portholeBranch = new __WEBPACK_IMPORTED_MODULE_2__app_models_porthole_PortholeBranchModel__["a" /* default */](branch.categories, photoUrl, photoLargeUrl, images, branch.link, branch.date, branchTitleUnescape, branch.meta.link, branch.meta.title, branchDescriptionUnescape, index, branchDescriptionUnescape, resultImageObj.useText, 0, 0, false, false);

    return portholeBranch;
};

var createAllPortholeTrees = function createAllPortholeTrees() {
    // 1
    var cabinPornTreeObj = {
        _id: '1',
        xmlUrl: 'http://cabinporn.com/rss',
        type: 'rss',
        title: 'Cabin Porn™',
        category: 'architecture',
        origin: 'porthole'
    };
    // 2
    var coolHuntingTreeObj = {
        _id: '2',
        xmlUrl: 'http://feeds.coolhunting.com/ch',
        type: 'rss',
        title: 'Cool Hunting',
        category: 'design',
        origin: 'porthole'
    };
    // 3
    //var swissmissTreeObj = { _id : "54cb9435d1796e940600008b", xmlUrl : "http://feeds2.feedburner.com/Swissmiss", type : "rss", title : "Swiss Miss" };
    var designmilkTreeObj = {
        _id: '3',
        xmlUrl: 'http://feeds.feedburner.com/design-milk',
        type: 'rss',
        title: 'Design Milk',
        category: 'design',
        origin: 'porthole'
    };
    // 4
    var wiredTreeObj = {
        _id: '4',
        xmlUrl: 'http://feeds.wired.com/wired/index',
        type: 'rss',
        title: 'WIRED',
        category: 'technology',
        origin: 'porthole'
    };
    // 5
    var boingboingTreeObj = {
        _id: '5',
        xmlUrl: 'http://feeds.boingboing.net/boingboing/iBag',
        type: 'rss',
        title: 'Boing Boing',
        category: 'technology',
        origin: 'porthole'
    };
    // 6
    var kotakuTreeObj = {
        _id: '6',
        xmlUrl: 'http://kotaku.com/rss/vip',
        type: 'rss',
        title: 'Kotaku',
        category: 'gaming',
        origin: 'porthole'
    };
    // 7
    var treeHuggerTreeObj = {
        _id: '7',
        xmlUrl: 'http://www.treehugger.com/feeds/latest/',
        type: 'rss',
        title: 'Tree Hugger',
        category: 'technology',
        origin: 'porthole'
    };
    // 8
    var nationalGeographicTreeObj = {
        _id: '8',
        xmlUrl: 'http://feeds.nationalgeographic.com/ng/photography/photo-of-the-day/',
        type: 'rss',
        title: 'National Geographic',
        category: 'technology',
        origin: 'porthole'
    };
    // 9
    var dwellTreeObj = {
        _id: '9',
        xmlUrl: 'http://www.dwell.com/articles/feed',
        type: 'rss',
        title: 'Dwell',
        category: 'architecture',
        origin: 'porthole'
    };
    // 10
    var colossalTreeObj = {
        _id: '10',
        xmlUrl: 'http://feeds.feedburner.com/colossal',
        type: 'rss',
        title: 'Colossal',
        category: 'design',
        origin: 'porthole'
    };
    // 11
    var polygonTreeObj = {
        _id: '11',
        xmlUrl: 'http://www.polygon.com/rss/index.xml',
        type: 'rss',
        title: 'Polygon',
        category: 'gaming',
        origin: 'porthole'
    };
    // 12
    var architizerTreeObj = {
        _id: '12',
        xmlUrl: 'http://architizer.tumblr.com/rss',
        type: 'rss',
        title: 'Architizer',
        category: 'architecture',
        origin: 'porthole'
    };
    // 13
    var harpersbazaarTreeObj = {
        _id: '13',
        xmlUrl: 'http://harpersbazaar.tumblr.com/rss',
        type: 'rss',
        title: 'Harpers Bazaar',
        category: 'fashion',
        origin: 'porthole'
    };
    // 14
    var wTreeObj = {
        _id: '14',
        xmlUrl: 'http://w.tumblr.com/rss',
        type: 'rss',
        title: 'W',
        category: 'fashion',
        origin: 'porthole'
    };
    // 15
    var booooooomTreeObj = {
        _id: '15',
        xmlUrl: 'http://www.booooooom.com/feed/',
        type: 'rss',
        title: 'BOOOOOOOM!',
        category: 'art',
        origin: 'porthole'
    };
    // 16
    var abduzeedoTreeObj = {
        _id: '16',
        xmlUrl: 'http://feeds.feedburner.com/abduzeedo',
        type: 'rss',
        title: 'Abduzeedo',
        category: 'design',
        origin: 'porthole'
    };
    // 17
    var behanceTreeObj = {
        _id: '17',
        xmlUrl: 'https://www.behance.net/feeds/projects',
        type: 'rss',
        title: 'Behance',
        category: 'art',
        origin: 'porthole'
    };
    // 18
    var bleacherReportTreeObj = {
        _id: '18',
        xmlUrl: 'http://bleacherreport.tumblr.com/rss',
        type: 'rss',
        title: 'Bleacher Report',
        category: 'sports',
        origin: 'porthole'
    };
    // 19
    var gamespotTreeObj = {
        _id: '19',
        xmlUrl: 'http://www.gamespot.com/feeds/mashup/',
        type: 'rss',
        title: 'GameSpot',
        category: 'gaming',
        origin: 'porthole'
    };
    // 20
    var twitchfilmTreeObj = {
        _id: '20',
        xmlUrl: 'http://feeds.twitchfilm.com/TwitchEverything',
        type: 'rss',
        title: 'TwitchFilm',
        category: 'film',
        origin: 'porthole'
    };
    // 21
    var mmTreeObj = {
        _id: '21',
        xmlUrl: 'http://www.50mm.jp/?format=rss',
        type: 'rss',
        title: '50mm',
        category: 'photography',
        origin: 'porthole'
    };
    // 22
    var stuckTreeObj = {
        _id: '22',
        xmlUrl: 'http://www.stuckincustoms.com/feed/',
        type: 'rss',
        title: 'Stuck in Customs',
        category: 'photography',
        origin: 'porthole'
    };
    // 23
    var nmeTreeObj = {
        _id: '23',
        xmlUrl: 'http://www.nme.com/rss/reviews',
        type: 'rss',
        title: 'Nme',
        category: 'music',
        origin: 'porthole'
    };
    // 24
    var pitchforkTreeObj = {
        _id: '24',
        xmlUrl: 'http://pitchfork.com/rss/news/',
        type: 'rss',
        title: 'Pitchfork',
        category: 'music',
        origin: 'porthole'
    };
    // 25
    var boilerroomTreeObj = {
        _id: '25',
        xmlUrl: 'http://boilerroom.tv/feed/',
        type: 'rss',
        title: 'Boiler Room',
        category: 'music',
        origin: 'porthole'
    };
    // 26
    var ruinTreeObj = {
        _id: '26',
        xmlUrl: 'http://feeds.feedburner.com/RackkAndRuin',
        type: 'rss',
        title: 'Rackk and Ruin',
        category: 'fashion',
        origin: 'porthole'
    };
    // 27
    var paperholmTreeObj = {
        _id: '27',
        xmlUrl: 'http://www.paperholm.com/rss',
        type: 'rss',
        title: 'Paperholm',
        category: 'art',
        origin: 'porthole'
    };
    // 28
    //var fraserTreeObj = { _id : "28", xmlUrl : "https://fraserflowers.wordpress.com/feed/", type : "rss", title : "fraser", category: "photography", origin: "porthole" };
    // 29
    var cristianTreeObj = {
        _id: '29',
        xmlUrl: 'http://cristianordonez.tumblr.com/rss/',
        type: 'rss',
        title: 'Cristian Ordóñez',
        category: 'photography',
        origin: 'porthole'
    };
    // 30
    var headlandsTreeObj = {
        _id: '30',
        xmlUrl: 'https://medium.com/feed/get-outside/',
        type: 'rss',
        title: 'headlands',
        category: 'photography',
        origin: 'porthole'
    };
    // 31
    var artnationTreeObj = {
        _id: '31',
        xmlUrl: 'https://artstation.com/artwork.rss',
        type: 'rss',
        title: 'ArtStation',
        category: 'art',
        origin: 'porthole'
    };
    // 32
    var nycscoutTreeObj = {
        _id: '32',
        xmlUrl: 'http://feeds.feedburner.com/scoutingny',
        type: 'rss',
        title: 'Scouting NY',
        category: 'photography',
        origin: 'porthole'
    };
    // 33
    var taviTreeObj = {
        _id: '33',
        xmlUrl: 'http://www.thestylerookie.com/feeds/posts/default',
        type: 'rss',
        title: 'tavi gevinson',
        category: 'fashion',
        origin: 'porthole'
    };
    // 34
    var repellerTreeObj = {
        _id: '34',
        xmlUrl: 'http://www.manrepeller.com/feed',
        type: 'rss',
        title: 'Man Repeller',
        category: 'fashion',
        origin: 'porthole'
    };
    // 35
    var slashFilmTreeObj = {
        _id: '35',
        xmlUrl: 'http://www.slashfilm.com/feed/',
        type: 'rss',
        title: 'Slash',
        category: 'film',
        origin: 'porthole'
    };
    // 36
    var guardianFilmTreeObj = {
        _id: '36',
        xmlUrl: 'http://www.theguardian.com/film/filmblog/rss',
        type: 'rss',
        title: 'Guardian Film',
        category: 'film',
        origin: 'porthole'
    };
    // 37
    var walkerFilmTreeObj = {
        _id: '37',
        xmlUrl: 'http://blogs.walkerart.org/filmvideo/feed/',
        type: 'rss',
        title: 'Walker Film',
        category: 'film',
        origin: 'porthole'
    };
    // 38
    var docFilmTreeObj = {
        _id: '38',
        xmlUrl: 'http://www.documentary.org/rss.xml',
        type: 'rss',
        title: 'Documentary',
        category: 'film',
        origin: 'porthole'
    };
    // 39
    //var yahoosportsTreeObj = { _id : "39", xmlUrl : "https://ca.sports.yahoo.com/blogs/rss.xml", type : "rss", title : "Yahoo Sports", category: "sports", origin: "porthole" };
    // 40
    var venturebeatTreeObj = {
        _id: '40',
        xmlUrl: 'http://venturebeat.com/feed/',
        type: 'rss',
        title: 'Venture Beat',
        category: 'technology',
        origin: 'porthole'
    };
    // 41
    var killscreenTreeObj = {
        _id: '41',
        xmlUrl: 'https://killscreen.com/feed/',
        type: 'rss',
        title: 'Killscreen',
        category: 'gaming',
        origin: 'porthole'
    };
    // 42
    var inquisitrTreeObj = {
        _id: '42',
        xmlUrl: 'http://feeds.inquisitr.com/TheInquisitrSport',
        type: 'rss',
        title: 'The Inquisitr Sport',
        category: 'sports',
        origin: 'porthole'
    };
    // 43
    var sbnationTreeObj = {
        _id: '43',
        xmlUrl: 'http://www.sbnation.com/rss/current',
        type: 'rss',
        title: 'SB Nation',
        category: 'sports',
        origin: 'porthole'
    };
    // 44
    var dezeenTreeObj = {
        _id: '44',
        xmlUrl: 'http://www.dezeen.com/feed/',
        type: 'rss',
        title: 'Dezeen',
        category: 'architecture',
        origin: 'porthole'
    };
    // 45
    var contemporistTreeObj = {
        _id: '45',
        xmlUrl: 'http://feeds.feedburner.com/contemporist',
        type: 'rss',
        title: 'Contemporist',
        category: 'architecture',
        origin: 'porthole'
    };
    // 46
    var eikongraphiaTreeObj = {
        _id: '46',
        xmlUrl: 'http://eikongraphia.com/?feed=rss2',
        type: 'rss',
        title: 'Eikongraphia',
        category: 'photography',
        origin: 'porthole'
    };
    // 47
    var unhappyTreeObj = {
        _id: '47',
        xmlUrl: 'http://unhappyhipsters.com/rss',
        type: 'rss',
        title: 'Unhappy Hipsters',
        category: 'design',
        origin: 'porthole'
    };
    // 48
    var architectureTreeObj = {
        _id: '48',
        xmlUrl: 'http://architectureblog.tumblr.com/rss',
        type: 'rss',
        title: 'The Architecture Blog',
        category: 'architecture',
        origin: 'porthole'
    };
    // 49
    var designboomTreeObj = {
        _id: '49',
        xmlUrl: 'http://www.designboom.com/feed/',
        type: 'rss',
        title: 'Design Boom',
        category: 'design',
        origin: 'porthole'
    };
    // 50
    var nautilusTreeObj = {
        _id: '50',
        xmlUrl: 'http://nautil.us/rss/all',
        type: 'rss',
        title: 'Nautilus',
        category: 'technology',
        origin: 'porthole'
    };
    // 51

    /*
    http://www.slashfilm.com/feed/
    http://www.theguardian.com/film/filmblog/rss
    http://blogs.walkerart.org/filmvideo/feed/
    http://www.documentary.org/rss.xml
    */

    var allPortholeTrees = {
        cabinporn: cabinPornTreeObj,
        treehugger: treeHuggerTreeObj,
        wired: wiredTreeObj,
        coolhunting: coolHuntingTreeObj,
        kotaku: kotakuTreeObj,
        nationalgeographic: nationalGeographicTreeObj,
        colossal: colossalTreeObj,
        dwell: dwellTreeObj,
        designmilk: designmilkTreeObj,
        boingboing: boingboingTreeObj,
        polygon: polygonTreeObj,
        architizer: architizerTreeObj,
        harpersbazaar: harpersbazaarTreeObj,
        w: wTreeObj,
        booooooom: booooooomTreeObj,
        abduzeedo: abduzeedoTreeObj,
        behance: behanceTreeObj,
        bleacherreport: bleacherReportTreeObj,
        gamespot: gamespotTreeObj,
        twitchfilm: twitchfilmTreeObj,
        mm: mmTreeObj,
        stuck: stuckTreeObj,
        nme: nmeTreeObj,
        pitchfork: pitchforkTreeObj,
        boilerroom: boilerroomTreeObj,
        ruin: ruinTreeObj,
        paperholm: paperholmTreeObj,
        //"fraser" : fraserTreeObj,
        cristian: cristianTreeObj,
        headlands: headlandsTreeObj,
        artnation: artnationTreeObj,
        nycscout: nycscoutTreeObj,
        tavi: taviTreeObj,
        repeller: repellerTreeObj,
        //"yahoosports" : yahoosportsTreeObj,
        slash: slashFilmTreeObj,
        guardian: guardianFilmTreeObj,
        walker: walkerFilmTreeObj,
        doc: docFilmTreeObj,
        venturebeat: venturebeatTreeObj,
        killscreen: killscreenTreeObj,
        inquisitr: inquisitrTreeObj,
        sbnation: sbnationTreeObj,
        dezeen: dezeenTreeObj,
        contemporist: contemporistTreeObj,
        eikongraphia: eikongraphiaTreeObj,
        unhappy: unhappyTreeObj,
        architecture: architectureTreeObj,
        designboom: designboomTreeObj,
        nautilus: nautilusTreeObj
    };

    return allPortholeTrees;
};

var getAllPortholeTrees = function getAllPortholeTrees() {
    return createAllPortholeTrees();
};

var loadTree = function loadTree(treeObj) {
    var serviceRoute = serverPath + '/bellwoods/trees/load';

    self.data = {
        loadTreePromise: __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(devPath, {
            params: serviceRoute
        })
    };

    return self.data;
};

var loadTreeById = function loadTreeById(treeObj) {
    var serviceRoute = serverPath + '/bellwoods/trees/getTreeByRSSUrl/' + treeObj._id;

    self.data = {
        loadTreePromise: __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(serviceRoute)
    };

    return self.data;
};

var getTreeByRSSUrl = function getTreeByRSSUrl(treeObj) {
    var serviceRoute = serverPath + '/bellwoods/trees/getTreeByRSSUrl/:xmlUrl';

    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(serviceRoute, {
        params: { xmlUrl: treeObj.xmlUrl }
    });
};

var parse = function parse(result, type) {
    var portholeBranches = [];

    _.each(result.branches, function (branch, index) {
        switch (type) {
            case 'cool':
                portholeBranch = getCoolBranch(branch, index);
                break;

            case 'rss':
                portholeBranch = getRSSBranch(branch, index);
                break;

            default:
                portholeBranch = getRSSBranch(branch, index);
                break;
        }

        portholeBranches.push(portholeBranch);
    });

    return portholeBranches;
};

var getForestFeed = function getForestFeed(trees, bSignedIn) {
    bSignedIn = typeof bSignedIn !== 'undefined' ? bSignedIn : false;

    var treePromises = [];

    var parent = _this;
    var currentTree = void 0;

    if (bSignedIn) {
        _.each(trees, function (tree) {
            var treePromise = parent.getTreeByRSSUrl(tree);
            treePromises.push(treePromise);
        });
    } else {
        var allPortholeTrees = createAllPortholeTrees();

        _.each(trees, function (treeValue) {
            //

            currentTree = allPortholeTrees[treeValue];

            if (undefined !== currentTree) {
                var treePromise = parent.getTreeByRSSUrl(currentTree);
                treePromises.push(treePromise);
            }
        });
    }

    return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.all(treePromises);
};

var getForestFeedByTreeModels = function getForestFeedByTreeModels(treeModels) {
    var treePromises = [];

    var parent = _this;

    _.each(treeModels, function (treeModel) {
        var treePromise = parent.getTreeByRSSUrl(treeModel);
        treePromises.push(treePromise);
    });

    return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.all(treePromises);
};

/***/ }),

/***/ "./utils/porthole/PortholeTreeUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hasTreeBeenUpdated */
/* unused harmony export getActiveTrees */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPortholeTrees; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_bellwoods_trees_TreesFactoryService__ = __webpack_require__("./actions/bellwoods/trees/TreesFactoryService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_MessageUtils__ = __webpack_require__("./utils/message/MessageUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PortholeFeedUtils__ = __webpack_require__("./utils/porthole/PortholeFeedUtils.js");






var hasTreeBeenUpdated = function hasTreeBeenUpdated(loadedBranchTitles, savedBranchTitles) {
    //console.log(arguments, "PortholeTreeUtil - hasTreeBeenUpdated");

    var bUpdated = false;

    if (savedBranchTitles.length > 0) {
        // compare them... simple first
        var aDif = __WEBPACK_IMPORTED_MODULE_2_lodash__["difference"](loadedBranchTitles, savedBranchTitles);
        bUpdated = aDif.length > 0 ? true : false;

        if (bUpdated) Object(__WEBPACK_IMPORTED_MODULE_3__message_MessageUtils__["a" /* broadcast */])('PortholeTreeUtil:update', {
            messageHTML: '<p>This feed has been updated with new posts.</p>'
        });

        /*
          could take it further and compare update dates and then use the resulting diff array to show which branches have been updated
        */
    }

    return bUpdated;
};

//var updateFeed = function(feedTitle, userId) {};

var getActiveTrees = function getActiveTrees(feedModel) {
    var activeTrees = [];

    __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](feedModel.allTrees, function (tree) {
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](feedModel.activeTrees, function (activeId) {
            if (tree._id === activeId) {
                //activeTrees.push(tree);
                activeTrees.push(tree);
            }
        });
    });

    return activeTrees;
};

var addPortholeTrees = function addPortholeTrees(allPortholeTrees, cabinQuestUser) {
    console.log('addPortholeTrees cabinQuestUser: ', cabinQuestUser);

    var treePromises = [];

    __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](allPortholeTrees, function (portholeTree) {
        var addTreeSuccessCallback = function addTreeSuccessCallback(successData) {};

        var addTreeErrorCallback = function addTreeErrorCallback(errorData) {
            Object(__WEBPACK_IMPORTED_MODULE_3__message_MessageUtils__["a" /* broadcast */])('Error:server:general', { error: errorData });
        };

        var lastBranchTitles = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](portholeTree.branches, 'title');

        var lastReviewedBranchViewed = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](portholeTree.branches, {
            bViewed: true
        });

        var lastReviewedBranchTitles = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](lastReviewedBranchViewed, 'title');

        var newTree = {
            userId: cabinQuestUser._id,
            origin: 'porthole',
            lastBranchTitles: lastBranchTitles,
            lastReviewedBranchTitles: lastReviewedBranchTitles,
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

        var payload = { cabinQuestUser: cabinQuestUser, newTree: newTree };

        treePromises.push(Object(__WEBPACK_IMPORTED_MODULE_1__actions_bellwoods_trees_TreesFactoryService__["a" /* addTree */])(payload));
    });

    return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.all(treePromises);
};

/***/ }),

/***/ "./utils/reducer_utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConstants */
/* harmony export (immutable) */ __webpack_exports__["a"] = createReducer;
function createConstants() {
    for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
        constants[_key] = arguments[_key];
    }

    return constants.reduce(function (acc, constant) {
        acc[constant] = constant;
        return acc;
    }, {});
}

function createReducer(initialState, reducerMap) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];

        var reducer = reducerMap[action.type];

        return reducer ? reducer(state, action.payload) : state;
    };
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/bellwoods.js");


/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "bluebird":
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "emotion":
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "gsap":
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "image-preloader":
/***/ (function(module, exports) {

module.exports = require("image-preloader");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "load-img":
/***/ (function(module, exports) {

module.exports = require("load-img");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-apollo":
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-emotion":
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-social-login":
/***/ (function(module, exports) {

module.exports = require("react-social-login");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/css":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/css");

/***/ }),

/***/ "underscore":
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ })

/******/ });
//# sourceMappingURL=bellwoods.js.map