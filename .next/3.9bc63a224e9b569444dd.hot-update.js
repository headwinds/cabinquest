webpackHotUpdate(3,{

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./components/Header/styles.js");
var _jsxFileName = '/Users/brandonflowers/cabinquest/components/Header/index.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





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

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(Header);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Header, 'Header', '/Users/brandonflowers/cabinquest/components/Header/index.js');
    reactHotLoader.register(_default, 'default', '/Users/brandonflowers/cabinquest/components/Header/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/signin/Signin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__("./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__("./store/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_home_actions__ = __webpack_require__("./actions/home_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__ = __webpack_require__("./actions/auth_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_feed_cabinquest_park_actions__ = __webpack_require__("./actions/feed_cabinquest_park_actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_styled_jsx_css__ = __webpack_require__("./node_modules/styled-jsx/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_styled_jsx_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_styled_jsx_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SocialButton__ = __webpack_require__("./components/signin/SocialButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_graphql_tag__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/brandonflowers/cabinquest/components/signin/Signin.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    mutation createUser($name: String!, $email: String!) {\n        createUser(name: $name, email: $email) {\n            id\n            name\n            email\n            createdAt\n        }\n    }\n'], ['\n    mutation createUser($name: String!, $email: String!) {\n        createUser(name: $name, email: $email) {\n            id\n            name\n            email\n            createdAt\n        }\n    }\n']);

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
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
    return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["b" /* bindActionCreators */])(_extends({}, __WEBPACK_IMPORTED_MODULE_6__actions_home_actions__, __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__, { getCabinQuestPark: __WEBPACK_IMPORTED_MODULE_8__actions_feed_cabinquest_park_actions__["a" /* getCabinQuestPark */], postDefaultPark: __WEBPACK_IMPORTED_MODULE_8__actions_feed_cabinquest_park_actions__["i" /* postDefaultPark */] }), dispatch);
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["a" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_13_react_apollo__["graphql"])(createUser, {
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
}), __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */], matchStateToProps, mapDispatchToProps))(Signin);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Signin, 'Signin', '/Users/brandonflowers/cabinquest/components/signin/Signin.js');
    reactHotLoader.register(createUser, 'createUser', '/Users/brandonflowers/cabinquest/components/signin/Signin.js');
    reactHotLoader.register(matchStateToProps, 'matchStateToProps', '/Users/brandonflowers/cabinquest/components/signin/Signin.js');
    reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/brandonflowers/cabinquest/components/signin/Signin.js');
    reactHotLoader.register(_default, 'default', '/Users/brandonflowers/cabinquest/components/signin/Signin.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./pages/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export Form */
/* unused harmony export H1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return H2; });
/* unused harmony export Input */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Building; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.es.js");
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



var Form = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('form')({
    borderBottom: '1px solid #ececec',
    paddingBottom: '20px',
    marginBottom: '20px'
});

var H1 = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('h1')({
    fontSize: '20px'
});

var H2 = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('h2')({
    fontSize: '24px'
});

var Input = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('input')({
    display: 'block',
    marginBottom: '10px'
});

var Base = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('div')({
    display: 'flex',
    flexDirection: 'row',
    margin: '20px',
    padding: '20px'
});

var Building = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('div')({
    display: 'block',
    margin: '20px',
    padding: '20px'
});
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Form, 'Form', '/Users/brandonflowers/cabinquest/pages/styles.js');
    reactHotLoader.register(H1, 'H1', '/Users/brandonflowers/cabinquest/pages/styles.js');
    reactHotLoader.register(H2, 'H2', '/Users/brandonflowers/cabinquest/pages/styles.js');
    reactHotLoader.register(Input, 'Input', '/Users/brandonflowers/cabinquest/pages/styles.js');
    reactHotLoader.register(Base, 'Base', '/Users/brandonflowers/cabinquest/pages/styles.js');
    reactHotLoader.register(Building, 'Building', '/Users/brandonflowers/cabinquest/pages/styles.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/styles")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.9bc63a224e9b569444dd.hot-update.js.map