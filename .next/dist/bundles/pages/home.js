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
/* harmony export (immutable) */ __webpack_exports__["a"] = onCabinquestTreesRequest;
/* harmony export (immutable) */ __webpack_exports__["c"] = onGetCabinquestTreesSuccess;
/* harmony export (immutable) */ __webpack_exports__["b"] = onGetCabinquestTreesFail;
/* unused harmony export getCabinquestTrees */
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
/* harmony export (immutable) */ __webpack_exports__["h"] = postDefaultPark;
/* harmony export (immutable) */ __webpack_exports__["g"] = onPostCabinQuestTreeRequest;
/* harmony export (immutable) */ __webpack_exports__["f"] = onPostCabinQuestTreeReceivedSuccess;
/* harmony export (immutable) */ __webpack_exports__["e"] = onPostCabinQuestTreeReceivedFail;
/* unused harmony export postCabinQuestTree */
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
/* harmony export (immutable) */ __webpack_exports__["b"] = onGetPortholeForestReceivedSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = onGetPortholeForestReceivedFail;
/* unused harmony export getPortholeForest */
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
var _jsxFileName = "/Users/brandonflowers/lynx/apollo/layout.js";



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
var _jsxFileName = '/Users/brandonflowers/lynx/components/Header/index.js';





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

/***/ "./components/day/MyDay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/brandonflowers/lynx/components/day/MyDay.js';

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
var _jsxFileName = '/Users/brandonflowers/lynx/components/day/PostDay.js';

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

/***/ "./components/footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/brandonflowers/lynx/components/footer/Footer.js';


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

/***/ "./components/home/About.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_Signin__ = __webpack_require__("./components/signin/Signin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header/index.js");
var _jsxFileName = '/Users/brandonflowers/lynx/components/home/About.js';




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var auth = _ref.auth;

    var handleGetExtensionClick = function handleGetExtensionClick() {
        window.open('https://chrome.google.com/webstore/detail/porthole/dilfffpckfhcpgidnmgaeoidgekcjlln?hl=en', '_blank');
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            },
            'CabinQuest'
        ),
        auth.cabinQuestUser !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { display: 'block' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            },
            auth.cabinQuestUser === null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__signin_Signin__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                },
                'Porthole'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                },
                'A Chrome Extension that fills your browser with imagery from your favourite feeds'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { onClick: handleGetExtensionClick, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                },
                'Get It'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { display: 'none' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                },
                'Github'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                    className: 'link',
                    target: '_blank',
                    href: 'https://github.com/headwinds/porthole',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                },
                'source'
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

var _jsxFileName = '/Users/brandonflowers/lynx/components/signin/Signin.js';

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
    return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_6__actions_home_actions__, __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__, { getCabinQuestPark: __WEBPACK_IMPORTED_MODULE_8__actions_feed_cabinquest_park_actions__["a" /* getCabinQuestPark */], postDefaultPark: __WEBPACK_IMPORTED_MODULE_8__actions_feed_cabinquest_park_actions__["h" /* postDefaultPark */] }), dispatch);
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

var _jsxFileName = "/Users/brandonflowers/lynx/components/signin/SocialButton.js";

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
var _jsxFileName = '/Users/brandonflowers/lynx/components/timeline/Timeline.js';

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
	"./production.js": "./config/env/production.js",
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
  // db: "mongodb+srv://headwinds:Bedford22@cluster0-djtby.mongodb.net/nationalpark?retryWrites=true",
  // db: "mongodb://localhost/nationalpark",
  db: "mongodb://headwinds:Bedford22@ds045614.mlab.com:45614/nationalpark",
  // db: "mongodb://brandonflowers@gmail.com:pe$rohaR8u@jello.modulusmongo.net:27017/Aget3ebu",
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

/***/ "./config/env/production.js":
/***/ (function(module, exports) {

// pe$rohaR8u
// mongo jello.modulusmongo.net:27017/Aget3ebu -u headwinds -p bedford22
// mongo ds045614.mlab.com:45614/nationalpark -u headwinds -p bedford22

// "mongodb://headwinds:bedford22@ds045614.mlab.com:45614/nationalpark"
// "mongodb://headwinds:bedford22@jello.modulusmongo.net:27017/Aget3ebu",

module.exports = {
  // db: "mongodb+srv://headwinds:Bedford22@cluster0-djtby.mongodb.net/test?retryWrites=true",
  // db: "mongodb://headwinds:bedford22@jello.modulusmongo.net:27017/Aget3ebu",
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

/***/ "./pages/home.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_home_actions__ = __webpack_require__("./actions/home_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_apollo__ = __webpack_require__("next-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_timeline_Timeline__ = __webpack_require__("./components/timeline/Timeline.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_Footer__ = __webpack_require__("./components/footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_day_PostDay__ = __webpack_require__("./components/day/PostDay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_day_MyDay__ = __webpack_require__("./components/day/MyDay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_bluebird__ = __webpack_require__("bluebird");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__styles__ = __webpack_require__("./pages/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_signin_Signin__ = __webpack_require__("./components/signin/Signin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_home_About__ = __webpack_require__("./components/home/About.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/brandonflowers/lynx/pages/home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









// import Home from "../components/home/Home";











// import Theme from "../components/theme/Theme";




// import css from "styled-jsx/css";

// SAMP
var sampleUri = 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn';
var pilotUri = 'https://api.graph.cool/simple/v1/cji0cqlrx2pot0149bdqhnbyv';

var config = {
    link: new __WEBPACK_IMPORTED_MODULE_9_apollo_link_http__["HttpLink"]({
        uri: pilotUri, // Server URL (must be absolute)
        opts: {
            credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
        }
    })
};

//https://api.graph.cool/simple/v1/cji0cqlrx2pot0149bdqhnbyv

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            socialUser: null
        };

        _this.handleEnterBellwoods = _this.handleEnterBellwoods.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {}
    }, {
        key: 'handleEnterBellwoods',
        value: function handleEnterBellwoods(e) {
            e.preventDefault();
            __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.push('/bellwoods');
        }
    }, {
        key: 'render',
        value: function render() {
            var listStyle = {
                height: 300,
                width: 300,
                overflow: 'hidden',
                overflowY: 'auto',
                border: '1px dashed #f1f1f1'
            };

            var monthsLen = this.props.auth.cabinQuestUser === null ? 'No Subscription' : this.props.auth.cabinQuestUser.dues_paid_dates.length + ' Months';

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__apollo_layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_18__styles__["a" /* Base */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 81
                            }
                        },
                        this.props.auth.cabinQuestUser === null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__components_home_About__["a" /* default */], { auth: this.props.auth, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 83
                            }
                        }),
                        this.props.auth.cabinQuestUser !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_18__styles__["b" /* Building */],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 87
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_18__styles__["c" /* H2 */],
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 88
                                    }
                                },
                                'Name:',
                                ' ',
                                this.props.auth.cabinQuestUser.username
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 92
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'button',
                                    { onClick: this.handleEnterBellwoods, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 93
                                        }
                                    },
                                    'enter bellwoods'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 98
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 99
                                        }
                                    },
                                    'experience:',
                                    this.props.auth.cabinQuestUser.experience
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 106
                                        }
                                    },
                                    'points:',
                                    this.props.auth.cabinQuestUser.points
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 110
                                        }
                                    },
                                    'scout:',
                                    this.props.auth.cabinQuestUser.scout
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 114
                                        }
                                    },
                                    'speed:',
                                    this.props.auth.cabinQuestUser.speed
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 118
                                        }
                                    },
                                    'status:',
                                    this.props.auth.cabinQuestUser.status
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 122
                                        }
                                    },
                                    'Achievements:',
                                    ' ',
                                    this.props.auth.cabinQuestUser.achievements.length
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 129
                                        }
                                    },
                                    'Subscription: ',
                                    monthsLen
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var matchStateToProps = function matchStateToProps(state) {
    return {
        home: state.home,
        auth: state.auth,
        feed: state.feed_cabinquest
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_7__actions_home_actions__), dispatch);
};

var HomeHOC = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */], matchStateToProps, mapDispatchToProps), Object(__WEBPACK_IMPORTED_MODULE_8_next_apollo__["withData"])(config))(Home);

/* harmony default export */ __webpack_exports__["default"] = (HomeHOC);

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
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["a" /* onCabinquestTreesRequest */])());

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
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["c" /* onGetCabinquestTreesSuccess */])(branches));

                case 16:
                    _context.next = 23;
                    break;

                case 18:
                    _context.prev = 18;
                    _context.t0 = _context['catch'](4);

                    console.error('branches parsed failed: ', _context.t0);
                    _context.next = 23;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["b" /* onGetCabinquestTreesFail */])(_context.t0));

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
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["a" /* onCabinquestTreesRequest */])());

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
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["c" /* onGetCabinquestTreesSuccess */])(branches));

                case 15:
                    _context4.next = 22;
                    break;

                case 17:
                    _context4.prev = 17;
                    _context4.t0 = _context4['catch'](3);

                    console.error('branches parsed failed: ', _context4.t0);
                    _context4.next = 22;
                    return Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_6__actions_feed_cabinquest_actions__["b" /* onGetCabinquestTreesFail */])(_context4.t0));

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

                            dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__["b" /* onGetPortholeForestReceivedSuccess */])(branches));
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

                                dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__["b" /* onGetPortholeForestReceivedSuccess */])(branches));
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
                                            dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__["a" /* onGetPortholeForestReceivedFail */])(error));
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
                                            dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_feed_porthole_actions__["a" /* onGetPortholeForestReceivedFail */])(error));
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

/***/ "./utils/message/MessageUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return broadcast; });
var broadcast = function broadcast(message) {};

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

module.exports = __webpack_require__("./pages/home.js");


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
//# sourceMappingURL=home.js.map