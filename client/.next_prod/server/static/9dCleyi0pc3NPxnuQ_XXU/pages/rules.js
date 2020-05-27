module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


var TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__("/HRN");

var _createClass = __webpack_require__("WaGi");

var _possibleConstructorReturn = __webpack_require__("ZDA2");

var _getPrototypeOf = __webpack_require__("/+P4");

var _inherits = __webpack_require__("N9n2");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    _inherits(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      _classCallCheck(this, WithRouteWrapper);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    _createClass(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context
        }, this.props));
      }
    }]);

    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ "0Et4":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/feather/ThumbsUp");

/***/ }),

/***/ "0eR8":
/***/ (function(module, exports) {

module.exports = require("butter-toast");

/***/ }),

/***/ "0gaE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useUser; });
/* unused harmony export useSetUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useUserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  logged: false,
  setUser: function setUser() {}
});
var useUser = function useUser() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(UserContext).user;
};
var useSetUser = function useSetUser() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(UserContext).setUser;
};
var useUserContext = function useUserContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(UserContext);
};

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "10NW":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ "1C+D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "butter-toast"
var external_butter_toast_ = __webpack_require__("0eR8");
var external_butter_toast_default = /*#__PURE__*/__webpack_require__.n(external_butter_toast_);

// CONCATENATED MODULE: ./components/Logo/styled.ts

var primaryColor = '#498ea5';
var secondaryColor = 'black';
var duration = '1s';
var LogoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LogoWrapper",
  componentId: "sc-1h7wqv-0"
})(["font-weight:400;text-transform:uppercase;font-size:46px;color:", ";outline:none;text-decoration:none;position:relative;line-height:1;display:inline-block;&::before,&::after{content:'';width:100%;height:2px;z-index:-1;background:", ";position:absolute;transform:scale3d(0,1,1);transition:transform ", ";}&::before{right:0;top:0;transform-origin:100% 50%;}&::after{left:0;bottom:0;transform-origin:0 50%;}span{font-family:'Fredericka the Great',cursive;font-weight:400;text-transform:uppercase;color:", ";padding:0.125em 0;position:relative;transition:color ", ";}span::before,span::after{position:absolute;color:", ";opacity:0;transition:transform ", ",opacity ", ";}span::before{content:attr(data-letters-l);left:0;transform:translate3d(-15px,0,0);}span::after{content:attr(data-letters-r);right:0;transform:translate3d(15px,0,0);}&:hover{color:", ";outline:0;&::before,&::after{transform:scale3d(1,1,1);}span{color:transparent;}span::before,span::after{opacity:1;transform:translate3d(0,0,0);}}"], primaryColor, secondaryColor, duration, primaryColor, duration, secondaryColor, duration, duration, secondaryColor);
// CONCATENATED MODULE: ./components/Logo/Logo.tsx
var __jsx = external_react_default.a.createElement;



var Logo_Logo = function Logo() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(LogoWrapper, null, external_react_default.a.createElement("span", {
    "data-letters-l": "Bur",
    "data-letters-r": "ime"
  }, "Burime")));
};


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Header/Menu/styled.ts

var menuColor = '#bfbaba';
var activeColor = '#498ea5';
var MenuList = external_styled_components_default.a.div.withConfig({
  displayName: "styled__MenuList",
  componentId: "cq35pd-0"
})(["text-align:right;position:relative;display:flex;margin:0 auto;padding:0;list-style:none;"]);
var MenuItem = external_styled_components_default.a.div.withConfig({
  displayName: "styled__MenuItem",
  componentId: "cq35pd-1"
})(["font-size:20px;margin:1em 0;cursor:pointer;font-family:'Neucha',cursive;position:relative;"]);
var MenuLink = external_styled_components_default.a.span.withConfig({
  displayName: "styled__MenuLink",
  componentId: "cq35pd-2"
})(["position:relative;margin:0 1em;padding-right:0;padding-left:0;color:", ";text-decoration:none;transition:color 0.4s;&:before,&:after{-webkit-transform:scale3d(1,1,1);content:'';position:absolute;bottom:-7px;left:0;width:100%;height:4px;transform:scale3d(0,1,1);transform-origin:center left;transition:transform 0.4s cubic-bezier(0.22,0.61,0.36,1);}&:before{background:", ";transition-delay:0.4s;}&:after{background:", ";}&:hover{color:", ";&::before{transform:scale3d(1,1,1);transition-delay:0s;}}", ""], menuColor, menuColor, activeColor, menuColor, function (props) {
  return props.active && Object(external_styled_components_["css"])(["color:", ";&:hover{color:", ";}&:before,&:after{transform:scale3d(1,1,1);}&:before{transition-delay:0s;}"], activeColor, activeColor);
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./constants/index.ts + 6 modules
var constants = __webpack_require__("C/iq");

// CONCATENATED MODULE: ./components/AuthModal/styled.ts


var Centered = external_styled_components_default.a.div.withConfig({
  displayName: "styled__Centered",
  componentId: "sc-12iw0ds-0"
})(["display:flex;margin-bottom:12px;justify-content:center;"]);
var LightText = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LightText",
  componentId: "sc-12iw0ds-1"
})(["color:silver;font-size:12px;text-decoration:underline;"]);
var LoginContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LoginContainer",
  componentId: "sc-12iw0ds-2"
})(["min-width:200px;padding:20px 60px;@media ", "{min-width:300px;}"], constants["b" /* breakpoints */].mobile);
var InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__InputWrapper",
  componentId: "sc-12iw0ds-3"
})(["text-align:center;margin-bottom:12px;"]);
var ActionsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__ActionsWrapper",
  componentId: "sc-12iw0ds-4"
})(["display:flex;justify-content:space-between;margin-top:20px;"]);
var SocialButton = external_styled_components_default.a.a.withConfig({
  displayName: "styled__SocialButton",
  componentId: "sc-12iw0ds-5"
})(["width:40px;height:40px;display:flex;color:white;border-width:0;border-radius:50%;white-space:nowrap;box-shadow:1px 1px 0px 1px rgba(0,0,0,0.05);transition-property:background-color,box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;text-decoration:none;justify-content:center;align-items:center;margin-right:12px;&:focus,&:hover{box-shadow:1px 4px 5px 1px rgba(0,0,0,0.1);}"]);
var VkButton = external_styled_components_default()(SocialButton).withConfig({
  displayName: "styled__VkButton",
  componentId: "sc-12iw0ds-6"
})(["background:#4a76a8;&:focus,&:hover{background:#3d6898;}"]);
var GoogleButton = external_styled_components_default()(SocialButton).withConfig({
  displayName: "styled__GoogleButton",
  componentId: "sc-12iw0ds-7"
})(["background:#4285f4;&:focus,&:hover{background:#2074ff;}"]);
// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// CONCATENATED MODULE: ./components/Dialog/Dialog.tsx
var Dialog_jsx = external_react_default.a.createElement;



var Dialog_FormDialog = function FormDialog(_ref) {
  var isOpen = _ref.isOpen,
      setOpen = _ref.setOpen,
      children = _ref.children;

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return external_react_default.a.createElement(Dialog_default.a, {
    open: isOpen,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, external_react_default.a.createElement(DialogContent_default.a, null, children));
};
// EXTERNAL MODULE: ./services/api/auth.ts
var auth = __webpack_require__("ZeZm");

// EXTERNAL MODULE: ./components/atoms/Button/Button.tsx + 1 modules
var Button = __webpack_require__("w2+A");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@styled-icons/icomoon/Google3"
var Google3_ = __webpack_require__("6ktU");

// EXTERNAL MODULE: external "@styled-icons/entypo-social/VkWithCircle"
var VkWithCircle_ = __webpack_require__("cnit");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");
var external_react_hook_form_default = /*#__PURE__*/__webpack_require__.n(external_react_hook_form_);

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__("UIRo");

// CONCATENATED MODULE: ./components/AuthModal/SignIn.tsx
var SignIn_jsx = external_react_default.a.createElement;









var SignIn_SignIn = function SignIn(_ref) {
  var onSubmit = _ref.onSubmit,
      onToggle = _ref.onToggle,
      email = _ref.email,
      password = _ref.password;

  var _useForm = external_react_hook_form_default()({
    defaultValues: {
      email: email,
      password: password
    }
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  return external_react_default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    key: "signIn"
  }, external_react_default.a.createElement(Centered, null, external_react_default.a.createElement(GoogleButton, {
    href: "".concat(config["a" /* baseServerUrl */], "/auth/google")
  }, external_react_default.a.createElement(Google3_["Google3"], {
    size: "24"
  })), external_react_default.a.createElement(VkButton, {
    href: "".concat(config["a" /* baseServerUrl */], "/auth/vkontakte")
  }, external_react_default.a.createElement(VkWithCircle_["VkWithCircle"], {
    size: "24"
  }))), external_react_default.a.createElement(Centered, null, external_react_default.a.createElement(LightText, null, "\u0438\u043B\u0438")), external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(core_["TextField"], {
    fullWidth: true,
    label: "email",
    name: "email",
    inputRef: register({
      required: true
    })
  })), external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(core_["TextField"], {
    fullWidth: true,
    label: "\u043F\u0430\u0440\u043E\u043B\u044C",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    inputRef: register({
      required: true
    })
  })), external_react_default.a.createElement(ActionsWrapper, null, external_react_default.a.createElement(Button["c" /* SubmitButton */], null, "\u0412\u043E\u0439\u0442\u0438"), external_react_default.a.createElement(Link_default.a, {
    component: "button",
    onClick: onToggle
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")));
};
// CONCATENATED MODULE: ./components/AuthModal/SignUp.tsx
var SignUp_jsx = external_react_default.a.createElement;






var SignUp_SignUp = function SignUp(_ref) {
  var onSubmit = _ref.onSubmit,
      onToggle = _ref.onToggle;

  var _useForm = external_react_hook_form_default()(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  return external_react_default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    key: "signUp"
  }, external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(core_["TextField"], {
    fullWidth: true,
    label: "\u0438\u043C\u044F",
    name: "name",
    inputRef: register({
      required: true
    })
  })), external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(core_["TextField"], {
    fullWidth: true,
    label: "email",
    name: "email",
    inputRef: register({
      required: true
    })
  })), external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(core_["TextField"], {
    fullWidth: true,
    label: "\u043F\u0430\u0440\u043E\u043B\u044C",
    type: "password",
    name: "password",
    inputRef: register({
      required: true,
      minLength: 6
    })
  })), external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(core_["TextField"], {
    fullWidth: true,
    label: "\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
    type: "password",
    name: "password_repeat",
    inputRef: register({
      required: true,
      minLength: 6
    })
  })), external_react_default.a.createElement(ActionsWrapper, null, external_react_default.a.createElement(Button["c" /* SubmitButton */], null, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), external_react_default.a.createElement(Link_default.a, {
    component: "button",
    onClick: onToggle
  }, "\u0432\u043E\u0439\u0442\u0438")));
};
// EXTERNAL MODULE: ./services/toast.tsx
var toast = __webpack_require__("ZbLY");

// CONCATENATED MODULE: ./components/AuthModal/AuthModal.tsx

var AuthModal_jsx = external_react_default.a.createElement;







var AuthModal_AuthModal = function AuthModal(_ref) {
  var isOpen = _ref.isOpen,
      setOpen = _ref.setOpen;

  var _useState = Object(external_react_["useState"])(true),
      signInMode = _useState[0],
      setSignIn = _useState[1];

  var _useState2 = Object(external_react_["useState"])(),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(),
      password = _useState3[0],
      setPassword = _useState3[1];

  var onLogin = Object(external_react_["useCallback"])(function _callee(_ref2) {
    var email, password, _ref3, status, data;

    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = _ref2.email, password = _ref2.password;
            _context.next = 3;
            return regenerator_default.a.awrap(Object(auth["b" /* signIn */])({
              email: email,
              password: password
            }));

          case 3:
            _ref3 = _context.sent;
            status = _ref3.status;
            data = _ref3.data;

            if (!(status !== 200)) {
              _context.next = 9;
              break;
            }

            Object(toast["a" /* error */])('Ошибка', data.message);
            return _context.abrupt("return");

          case 9:
            document.location.reload(true);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    });
  }, []);
  var onRegistration = Object(external_react_["useCallback"])(function _callee2(_ref4) {
    var name, email, password, _ref5, data, status;

    return regenerator_default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = _ref4.name, email = _ref4.email, password = _ref4.password;
            _context2.next = 3;
            return regenerator_default.a.awrap(Object(auth["a" /* registration */])({
              name: name,
              email: email,
              password: password
            }));

          case 3:
            _ref5 = _context2.sent;
            data = _ref5.data;
            status = _ref5.status;

            if (!(status !== 200)) {
              _context2.next = 9;
              break;
            }

            Object(toast["a" /* error */])('Ошибка', data.message);
            return _context2.abrupt("return");

          case 9:
            Object(toast["b" /* success */])('Успешно', 'Вы зарегистрированы!');
            setEmail(email);
            setPassword(password);
            setSignIn(true);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    });
  }, []);
  var toggleMode = Object(external_react_["useCallback"])(function () {
    setSignIn(!signInMode);
  }, [signInMode]);
  return external_react_default.a.createElement(Dialog_FormDialog, {
    isOpen: isOpen,
    setOpen: setOpen
  }, external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(LoginContainer, null, signInMode ? external_react_default.a.createElement(SignIn_SignIn, {
    email: email,
    password: password,
    onSubmit: onLogin,
    onToggle: toggleMode
  }) : external_react_default.a.createElement(SignUp_SignUp, {
    onSubmit: onRegistration,
    onToggle: toggleMode
  }))));
};
// EXTERNAL MODULE: ./services/contexts/auth.ts
var contexts_auth = __webpack_require__("0gaE");

// EXTERNAL MODULE: external "@styled-icons/fa-solid/UserCircle"
var UserCircle_ = __webpack_require__("FBS0");

// EXTERNAL MODULE: external "@styled-icons/boxicons-regular/LogOut"
var LogOut_ = __webpack_require__("zbXp");

// EXTERNAL MODULE: external "@styled-icons/material/Settings"
var Settings_ = __webpack_require__("10NW");

// EXTERNAL MODULE: external "@styled-icons/entypo/OpenBook"
var OpenBook_ = __webpack_require__("q4gF");

// EXTERNAL MODULE: external "@styled-icons/boxicons-regular/Edit"
var Edit_ = __webpack_require__("7Fih");

// EXTERNAL MODULE: external "@styled-icons/boxicons-regular/Spreadsheet"
var Spreadsheet_ = __webpack_require__("J2XG");

// EXTERNAL MODULE: external "@styled-icons/remix-line/PencilRuler"
var PencilRuler_ = __webpack_require__("g4Mp");

// EXTERNAL MODULE: external "react-use"
var external_react_use_ = __webpack_require__("zKz7");

// CONCATENATED MODULE: ./components/Header/Avatar/styled.ts


var fadeIn = Object(external_styled_components_["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
var AvatarHost = external_styled_components_default.a.div.withConfig({
  displayName: "styled__AvatarHost",
  componentId: "u8bppa-0"
})(["display:flex;align-items:center;cursor:pointer;"]);
var AvatarName = external_styled_components_default.a.div.withConfig({
  displayName: "styled__AvatarName",
  componentId: "u8bppa-1"
})(["padding:0 24px;display:none;@media ", "{display:block;}"], constants["b" /* breakpoints */].mobile);
var AvatarMenuWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__AvatarMenuWrapper",
  componentId: "u8bppa-2"
})(["display:flex;align-items:center;position:absolute;right:0;display:", ";animation:", " 0.3s linear;margin-top:4px;box-shadow:0 0 10px rgba(0,0,0,0.5);z-index:1;"], function (props) {
  return props.open ? 'block' : 'none';
}, fadeIn);
var AvatarMenuItem = external_styled_components_default.a.a.withConfig({
  displayName: "styled__AvatarMenuItem",
  componentId: "u8bppa-3"
})(["display:flex;padding:8px 12px;background-color:white;text-decoration:none;cursor:pointer;&:hover{background-color:", ";}"], constants["c" /* colors */].lightPrimary);
var AvatarMenuText = external_styled_components_default.a.div.withConfig({
  displayName: "styled__AvatarMenuText",
  componentId: "u8bppa-4"
})(["margin-left:8px;font-size:16px;text-align:left;"]);
// EXTERNAL MODULE: external "@styled-icons/boxicons-regular/ChevronDown"
var ChevronDown_ = __webpack_require__("Di8c");

// CONCATENATED MODULE: ./components/Common/styled.ts


var ChevronIcon = external_styled_components_default()(ChevronDown_["ChevronDown"]).withConfig({
  displayName: "styled__ChevronIcon",
  componentId: "sc-2gc31b-0"
})(["transition:transform 0.3s ease-in-out;width:16px;", ""], function (props) {
  return props.open && Object(external_styled_components_["css"])(["transform:rotate(180deg);"]);
});
// CONCATENATED MODULE: ./components/Header/Avatar/Avatar.tsx

var Avatar_jsx = external_react_default.a.createElement;













var Avatar_Avatar = function Avatar(_ref) {
  var user = _ref.user;

  var _useState = Object(external_react_["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var toggleOpen = Object(external_react_["useCallback"])(function () {
    return setOpen(!open);
  }, [open]);
  var ref = Object(external_react_["useRef"])(null);
  Object(external_react_use_["useClickAway"])(ref, function () {
    return setOpen(false);
  });
  var logOut = Object(external_react_["useCallback"])(function _callee() {
    var _ref2, status, data;

    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regenerator_default.a.awrap(Object(auth["c" /* signOut */])());

          case 3:
            _ref2 = _context.sent;
            status = _ref2.status;
            data = _ref2.data;

            if (!(status !== 200)) {
              _context.next = 9;
              break;
            }

            Object(toast["a" /* error */])('Ошибка', data.message);
            return _context.abrupt("return");

          case 9:
            document.location.reload(true);
            _context.next = 14;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12]]);
  }, []);
  return external_react_default.a.createElement("div", {
    ref: ref
  }, external_react_default.a.createElement(AvatarHost, {
    onClick: toggleOpen
  }, external_react_default.a.createElement(UserCircle_["UserCircle"], {
    width: 24
  }), external_react_default.a.createElement(AvatarName, null, user.name), external_react_default.a.createElement(ChevronIcon, {
    open: open
  })), external_react_default.a.createElement(AvatarMenuWrapper, {
    open: open
  }, external_react_default.a.createElement(AvatarMenuItem, {
    href: "/calls"
  }, external_react_default.a.createElement(Edit_["Edit"], {
    width: 16
  }), external_react_default.a.createElement(AvatarMenuText, null, "\u0432\u044B\u0437\u043E\u0432\u044B")), external_react_default.a.createElement(AvatarMenuItem, {
    href: "/all"
  }, external_react_default.a.createElement(Spreadsheet_["Spreadsheet"], {
    width: 16
  }), external_react_default.a.createElement(AvatarMenuText, null, "\u0432\u0441\u0435 \u0431\u0443\u0440\u0438\u043C\u0435")), external_react_default.a.createElement(AvatarMenuItem, {
    href: "/my"
  }, external_react_default.a.createElement(OpenBook_["OpenBook"], {
    width: 16
  }), external_react_default.a.createElement(AvatarMenuText, null, "\u043C\u043E\u0438")), external_react_default.a.createElement(AvatarMenuItem, {
    href: "/rules"
  }, external_react_default.a.createElement(PencilRuler_["PencilRuler"], {
    width: 16
  }), external_react_default.a.createElement(AvatarMenuText, null, "\u043F\u0440\u0430\u0432\u0438\u043B\u0430")), external_react_default.a.createElement(AvatarMenuItem, {
    href: "/settings"
  }, external_react_default.a.createElement(Settings_["Settings"], {
    width: 16
  }), external_react_default.a.createElement(AvatarMenuText, null, "\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), external_react_default.a.createElement(AvatarMenuItem, {
    onClick: logOut
  }, external_react_default.a.createElement(LogOut_["LogOut"], {
    width: 16
  }), external_react_default.a.createElement(AvatarMenuText, null, "\u0432\u044B\u0439\u0442\u0438"))));
};
// CONCATENATED MODULE: ./components/Header/Menu/Menu.tsx
var Menu_jsx = external_react_default.a.createElement;






var Menu_Menu = function Menu(_ref) {
  var items = _ref.items;
  var user = Object(contexts_auth["b" /* useUser */])();

  var _useState = Object(external_react_["useState"])(items[0]),
      activeMenu = _useState[0],
      setActiveMenu = _useState[1];

  var _useState2 = Object(external_react_["useState"])(false),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(MenuList, null, items.map(function (item, i) {
    return external_react_default.a.createElement(MenuItem, {
      key: i,
      onClick: function onClick() {
        return setActiveMenu(item);
      }
    }, external_react_default.a.createElement(MenuLink, {
      active: item === activeMenu
    }, external_react_default.a.createElement(link_default.a, {
      href: item.href
    }, item.text)));
  }), external_react_default.a.createElement(MenuItem, null, user ? external_react_default.a.createElement(Avatar_Avatar, {
    user: user
  }) : external_react_default.a.createElement(MenuLink, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "\u0432\u043E\u0439\u0442\u0438"))), external_react_default.a.createElement(AuthModal_AuthModal, {
    isOpen: isOpen,
    setOpen: setOpen
  }));
};
// CONCATENATED MODULE: ./components/Header/styled.ts


var HeaderHost = external_styled_components_default.a.div.withConfig({
  displayName: "styled__HeaderHost",
  componentId: "sc-1di319z-0"
})(["box-shadow:0 0 4px rgba(0,0,0,0.5);margin-bottom:24px;"]);
var HeaderContent = external_styled_components_default.a.div.withConfig({
  displayName: "styled__HeaderContent",
  componentId: "sc-1di319z-1"
})(["max-width:", ";margin:auto;padding:10px 20px;display:flex;justify-content:space-between;align-items:center;position:relative;justify-content:center;"], constants["f" /* sizes */].siteWidth);
var MenuWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__MenuWrapper",
  componentId: "sc-1di319z-2"
})(["position:absolute;right:20px;@media ", "{right:50px;}"], constants["b" /* breakpoints */].mobile);
var LogoWraepper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LogoWraepper",
  componentId: "sc-1di319z-3"
})([""]);
// CONCATENATED MODULE: ./components/Header/Header.tsx
var Header_jsx = external_react_default.a.createElement;




var menuItems = [];
var Header_Header = function Header() {
  return external_react_default.a.createElement(HeaderHost, null, external_react_default.a.createElement(HeaderContent, null, external_react_default.a.createElement(LogoWraepper, null, external_react_default.a.createElement(Logo_Logo, null), external_react_default.a.createElement("div", {
    style: {
      textAlign: 'center',
      textDecoration: 'underline'
    }
  }, "beta")), external_react_default.a.createElement(MenuWrapper, null, external_react_default.a.createElement(Menu_Menu, {
    items: menuItems
  }))));
};
// CONCATENATED MODULE: ./components/atoms/Section/styled.ts


var Section = external_styled_components_default.a.div.withConfig({
  displayName: "styled__Section",
  componentId: "sc-1kg3h3i-0"
})(["max-width:", ";margin:auto;"], constants["f" /* sizes */].siteWidth);
var SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__SectionWrapper",
  componentId: "sc-1kg3h3i-1"
})(["background-color:#ececec;padding:12px 0;margin:12px 0;"]);
var ContainerContent = external_styled_components_default.a.div.withConfig({
  displayName: "styled__ContainerContent",
  componentId: "sc-1kg3h3i-2"
})(["min-height:", ";"], function (props) {
  return props.minHeight ? "".concat(props.minHeight, "px") : 'auto';
});
// CONCATENATED MODULE: ./components/atoms/Section/Section.tsx
var Section_jsx = external_react_default.a.createElement;


var Section_Container = function Container(_ref) {
  var children = _ref.children,
      minHeight = _ref.minHeight;
  return external_react_default.a.createElement(ContainerContent, {
    minHeight: minHeight
  }, children);
};
var Section_Background = function Background(_ref2) {
  var children = _ref2.children;
  return external_react_default.a.createElement(SectionWrapper, null, external_react_default.a.createElement(Section, null, children));
};

// EXTERNAL MODULE: ./services/socket.tsx
var socket = __webpack_require__("FkUK");

// CONCATENATED MODULE: ./components/organizms/Landing/styled.ts


var LandingItem = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LandingItem",
  componentId: "sc-1idijhf-0"
})(["text-align:center;padding:12px 0;"]);
var LandingPoint = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LandingPoint",
  componentId: "sc-1idijhf-1"
})(["padding:0 12px;"]);
var LandingPromo = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LandingPromo",
  componentId: "sc-1idijhf-2"
})(["background-color:#ececec;padding:24px;margin:24px 0;", ""], constants["e" /* shadow */].simple);
var LandingBlocks = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LandingBlocks",
  componentId: "sc-1idijhf-3"
})(["display:flex;flex-direction:column;"]);
var LandingBlock = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LandingBlock",
  componentId: "sc-1idijhf-4"
})(["margin-bottom:12px;:before{content:'';display:inline-block;width:12px;height:12px;border-radius:6px;background-color:", ";margin-right:12px;}"], constants["c" /* colors */].primary);
var PromoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__PromoWrapper",
  componentId: "sc-1idijhf-5"
})(["display:grid;grid-template-rows:repeat(auto-fill,1fr);grid-template-columns:1fr;grid-gap:2vw;margin:20px 0;@media ", "{grid-template-rows:1fr 1fr 1fr;grid-template-columns:1fr 1fr;}@media ", "{grid-template-rows:1fr 1fr;grid-template-columns:1fr 1fr 1fr;}"], constants["b" /* breakpoints */].mobile, constants["b" /* breakpoints */].laptop);
var PromoCard = external_styled_components_default.a.div.withConfig({
  displayName: "styled__PromoCard",
  componentId: "sc-1idijhf-6"
})(["display:flex;flex-direction:column;align-items:center;text-align:center;background-color:#f7f7f7;border:solid 1px #bfbaba;", " padding:24px 0;"], constants["e" /* shadow */].simple);
var PromoImg = external_styled_components_default.a.img.withConfig({
  displayName: "styled__PromoImg",
  componentId: "sc-1idijhf-7"
})(["height:200px;border-radius:10px;border:solid 1px #bfbaba;padding:4px;"]);
var PromoTitle = external_styled_components_default.a.div.withConfig({
  displayName: "styled__PromoTitle",
  componentId: "sc-1idijhf-8"
})(["font-size:32px;text-decoration:underline;margin:4px 0;color:", ";", ""], constants["c" /* colors */].primary, constants["d" /* fonts */].neucha);
// EXTERNAL MODULE: ./components/atoms/Title/Title.tsx + 1 modules
var Title = __webpack_require__("Gswr");

// EXTERNAL MODULE: ./components/molecules/Rules/Rules.tsx + 2 modules
var Rules = __webpack_require__("nP3O");

// CONCATENATED MODULE: ./components/organizms/Landing/Promo.tsx
var Promo_jsx = external_react_default.a.createElement;


var promoData = [{
  title: 'Это весело',
  text: 'Играй с друзьями',
  img: 'promo/fun.jpg'
}, {
  title: 'Это креативно',
  text: 'Не границ для фантазии кроме рифм и размера',
  img: 'promo/idea.jpg'
}, {
  title: 'Это полезно',
  text: 'Развиваем лексикон и владение словом',
  img: 'promo/lexicon.jpg'
}, {
  title: 'Это арт-терапия',
  text: 'Разберись в себе, вынимая из головы свои мысли',
  img: 'promo/heart.jpg'
}, {
  title: 'Это по-настоящему',
  text: 'Пишите реальные хиты',
  img: 'promo/words5.jpg'
}, {
  title: 'Это поэзия',
  text: 'Учимся писать стихи своим близким',
  img: 'promo/poetry.jpg'
}];
var Promo_Promo = function Promo() {
  return external_react_default.a.createElement(PromoWrapper, null, promoData.map(function (_ref, i) {
    var title = _ref.title,
        text = _ref.text,
        img = _ref.img;
    return external_react_default.a.createElement(PromoCard, {
      key: i
    }, external_react_default.a.createElement(PromoImg, {
      alt: title,
      src: img
    }), external_react_default.a.createElement(PromoTitle, null, title), external_react_default.a.createElement("div", null, text));
  }));
};
// CONCATENATED MODULE: ./components/organizms/Landing/Landing.tsx
var Landing_jsx = external_react_default.a.createElement;






var Landing_Landing = function Landing() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Section, null, external_react_default.a.createElement(Title["b" /* Title */], {
    underline: true
  }, "\u0418\u0433\u0440\u0430\u0435\u043C \u0432 \u0431\u0443\u0440\u0438\u043C\u0435 \u0432\u043C\u0435\u0441\u0442\u0435!"), external_react_default.a.createElement(LandingItem, null, "\u0425\u043E\u0442\u044C \u0438 \u0431\u0443\u0440\u0438\u043C\u0435 \u0438\u0433\u0440\u0430 \u043D\u0435\u0441\u0435\u0440\u044C\u0435\u0437\u043D\u0430\u044F, \u043D\u043E \u0443 \u043D\u0435\u0435 \u0435\u0441\u0442\u044C \u0441\u0432\u043E\u0438 \u043F\u043B\u044E\u0441\u044B: \u043E\u043D\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0445\u043E\u0440\u043E\u0448\u0438\u043C \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044F\u043C \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0438 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0442\u044C \u0441\u0430\u043C\u043E\u0446\u0435\u043D\u0437\u0443\u0440\u0443, \u0432\u043E\u0441\u043F\u0438\u0442\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u0432\u044B\u043A\u0438 \u0440\u0438\u0444\u043C\u043E\u0432\u043A\u0438 \u0438 \u0437\u0430\u043A\u0430\u043B\u044F\u0435\u0442 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442\u044F\u043C\u0438. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043A\u043E\u043C\u0443-\u0442\u043E \u044D\u0442\u0430 \u0438\u0433\u0440\u0430 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0442\u0443\u043F\u0438\u043A\u0430 \u0438\u043B\u0438 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u043C \u043D\u043E\u0432\u044B\u0445 \u0438\u0434\u0435\u0439 \u0438 \u0440\u0438\u0444\u043C.")), external_react_default.a.createElement(Section_Background, null, external_react_default.a.createElement(Promo_Promo, null)), external_react_default.a.createElement(Section, null, external_react_default.a.createElement(Title["b" /* Title */], null, "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0411\u0443\u0440\u0438\u043C\u0435?"), external_react_default.a.createElement(LandingItem, null, "\u0411\u0443\u0440\u0438\u043C\u0435 (\u0444\u0440. bouts-rim\xE9s \xAB\u0440\u0438\u0444\u043C\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0446\u044B\xBB) \u2014 \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430\u044F \u0438\u0433\u0440\u0430, \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0432 \u0441\u043E\u0447\u0438\u043D\u0435\u043D\u0438\u0438 \u0441\u0442\u0438\u0445\u043E\u0432, \u0447\u0430\u0449\u0435 \u0448\u0443\u0442\u043E\u0447\u043D\u044B\u0445, \u043D\u0430 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0440\u0438\u0444\u043C\u044B, \u0438\u043D\u043E\u0433\u0434\u0430 \u0435\u0449\u0451 \u0438 \u043D\u0430 \u0437\u0430\u0434\u0430\u043D\u043D\u0443\u044E \u0442\u0435\u043C\u0443. \u0418\u043D\u043E\u0433\u0434\u0430 \u043A \u0431\u0443\u0440\u0438\u043C\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0442 \u0438 \u0434\u0440\u0443\u0433\u0443\u044E \u0438\u0433\u0440\u0443, \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u0443\u044E \u0442\u0430\u043A\u0436\u0435 \xAB\u0438\u0433\u0440\u043E\u0439 \u0432 \u0447\u0435\u043F\u0443\u0445\u0443\xBB: \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A \u0438\u043B\u0438 \u0434\u0430\u0436\u0435 \u0441\u0442\u0440\u043E\u0444 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442 \u043B\u0438\u0441\u0442\u043E\u043A \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0443 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F, \u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0432\u0438\u0434\u0438\u043C\u044B\u043C\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0438\u0437 \u043D\u0438\u0445."), external_react_default.a.createElement(Title["b" /* Title */], {
    underline: true
  }, "\u0418\u0433\u0440\u0430\u0439\u0442\u0435 \u0432 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044C!"), external_react_default.a.createElement(LandingPromo, null, external_react_default.a.createElement(Title["b" /* Title */], null, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0444\u0430\u043A\u0442\u044B"), external_react_default.a.createElement(LandingBlocks, null, external_react_default.a.createElement(LandingBlock, null, "\u0411\u0443\u0440\u0438\u043C\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C\u044E \u0443 \u043F\u043E\u044D\u0442\u043E\u0432 XX \u0432\u0435\u043A\u0430 (\u0411\u0440\u0435\u0442\u043E\u043D, \u042D\u043B\u044E\u0430\u0440, \u0410\u0440\u0430\u0433\u043E\u043D)"), external_react_default.a.createElement(LandingBlock, null, "\u0411\u0443\u0440\u0438\u043C\u0435 \u0432\u0445\u043E\u0434\u0438\u043B\u043E \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u0432 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u044B \u041A\u0412\u041D."), external_react_default.a.createElement(LandingBlock, null, "\u0418\u0433\u0440\u0443 \u0432 \u0431\u0443\u0440\u0438\u043C\u0435 \u0441\u0442\u0430\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432 \u0441\u043E\u0441\u0442\u0430\u0432 \u0442\u0440\u0435\u043D\u0438\u043D\u0433\u043E\u0432 \u043C\u043D\u043E\u0433\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438."), external_react_default.a.createElement(LandingBlock, null, "\u042D\u0442\u0430 \u0438\u0433\u0440\u0430 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C \u043D\u0430\u0445\u043E\u0434\u0447\u0438\u0432\u043E\u0441\u0442\u044C, \u0432\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u043E \u044E\u043C\u043E\u0440\u0430, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0441\u0432\u044F\u0437\u0438 \u043C\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u043D\u044B\u043C\u0438, \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434, \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C \u043B\u0435\u043A\u0441\u0438\u043A\u043E\u043D."))), external_react_default.a.createElement(Title["b" /* Title */], null, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B"), external_react_default.a.createElement(Rules["a" /* Rules */], null)));
};
// CONCATENATED MODULE: ./components/molecules/Footer/Footer.tsx
var Footer_jsx = external_react_default.a.createElement;




var FooterSection = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__FooterSection",
  componentId: "binxht-0"
})(["border-top:1px solid silver;background-color:#ececec;margin-top:20px;flex:0 0 auto;"]);
var FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "binxht-1"
})(["display:flex;font-size:20px;padding:20px;"]);
var FooterLeft = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__FooterLeft",
  componentId: "binxht-2"
})(["flex:1 1 20%;"]);
var FooterRight = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__FooterRight",
  componentId: "binxht-3"
})(["flex:1 1 80%;text-align:right;"]);
var FooterIconLink = external_styled_components_default.a.a.withConfig({
  displayName: "Footer__FooterIconLink",
  componentId: "binxht-4"
})(["margin-left:12px;"]);
var Footer_Footer = function Footer() {
  return external_react_default.a.createElement(FooterSection, null, external_react_default.a.createElement(Section, null, external_react_default.a.createElement(FooterWrapper, null, external_react_default.a.createElement(FooterLeft, null, "\xA9 2020"), external_react_default.a.createElement(FooterRight, null, "\u0414\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u0441\u0432\u043E\u0438\u043C\u0438 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u0438 \u0438\u0434\u0435\u044F\u043C\u0438, \u0434\u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043E\u0431 \u0438\u0433\u0440\u0430\u0445 \u0432 \u0412\u041A.", external_react_default.a.createElement(FooterIconLink, {
    href: "https://vk.com/club194477253",
    target: "_blank"
  }, external_react_default.a.createElement(VkWithCircle_["VkWithCircle"], {
    width: 24
  }))))));
};
// CONCATENATED MODULE: ./components/organizms/Layout/Layout.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout_Layout; });

var Layout_jsx = external_react_default.a.createElement;

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    html, body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n        font-size: 20px;\n        font-family: 'Nunito', sans-serif;\n    }\n    #__next{\n        height: 100%;\n    }\n    a {\n        color: black;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
var SiteWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__SiteWrapper",
  componentId: "sc-12g38hs-0"
})(["display:flex;flex-direction:column;min-height:100%;"]);
var MainSection = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__MainSection",
  componentId: "sc-12g38hs-1"
})(["flex:1 0 auto;"]);
var Layout_Layout = function Layout(_ref) {
  var children = _ref.children,
      noAuth = _ref.noAuth;
  var user = Object(contexts_auth["b" /* useUser */])();
  return external_react_default.a.createElement(socket["a" /* SocketProvider */], {
    user: user
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "\u0411\u0443\u0440\u0438\u043C\u0435"), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito&display=swap",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Neucha&display=swap",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "favicon/favicon-32x32.png"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "favicon/favicon-16x16.png"
  }), external_react_default.a.createElement("link", {
    rel: "manifest",
    href: "favicon/site.webmanifest"
  })), external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement(SiteWrapper, null, external_react_default.a.createElement(Header_Header, null), external_react_default.a.createElement(MainSection, null, user || noAuth ? external_react_default.a.createElement(Section, null, children) : external_react_default.a.createElement(Landing_Landing, null)), external_react_default.a.createElement(Footer_Footer, null)), external_react_default.a.createElement(external_butter_toast_default.a, {
    timeout: 3000
  }));
};

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6ktU":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/icomoon/Google3");

/***/ }),

/***/ "7Fih":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/Edit");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o3JK");


/***/ }),

/***/ "8+Nu":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("8bdy");

var iterableToArrayLimit = __webpack_require__("fprZ");

var nonIterableRest = __webpack_require__("Bh1o");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "8bdy":
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__("p0XB");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "Bh1o":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "C/iq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var shadow_namespaceObject = {};
__webpack_require__.r(shadow_namespaceObject);
__webpack_require__.d(shadow_namespaceObject, "simple", function() { return simple; });
__webpack_require__.d(shadow_namespaceObject, "small", function() { return small; });
var animations_namespaceObject = {};
__webpack_require__.r(animations_namespaceObject);
__webpack_require__.d(animations_namespaceObject, "slideUpCss", function() { return slideUpCss; });
__webpack_require__.d(animations_namespaceObject, "slider", function() { return slider; });
__webpack_require__.d(animations_namespaceObject, "fade", function() { return fade; });
__webpack_require__.d(animations_namespaceObject, "fadeOut", function() { return fadeOut; });
var fonts_namespaceObject = {};
__webpack_require__.r(fonts_namespaceObject);
__webpack_require__.d(fonts_namespaceObject, "fredericka", function() { return fredericka; });
__webpack_require__.d(fonts_namespaceObject, "nunito", function() { return nunito; });
__webpack_require__.d(fonts_namespaceObject, "neucha", function() { return neucha; });
var breakpoints_namespaceObject = {};
__webpack_require__.r(breakpoints_namespaceObject);
__webpack_require__.d(breakpoints_namespaceObject, "breakpointSizes", function() { return breakpointSizes; });
__webpack_require__.d(breakpoints_namespaceObject, "mobile", function() { return mobile; });
__webpack_require__.d(breakpoints_namespaceObject, "laptop", function() { return laptop; });
__webpack_require__.d(breakpoints_namespaceObject, "desktop", function() { return desktop; });

// CONCATENATED MODULE: ./constants/colors.ts
/* harmony default export */ var colors = ({
  primary: '#498ea5',
  plaseholder: '#498ea5',
  lightPrimary: '#d0f3ff',
  textPrimary: '#ffffff',
  secondary: '#e45151',
  danger: '#e45151',
  grey: '#111111'
});
// CONCATENATED MODULE: ./constants/sizes.ts
/* harmony default export */ var sizes = ({
  siteWidth: '1040px'
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./constants/shadow.ts

var simple = Object(external_styled_components_["css"])(["box-shadow:0 0 10px rgba(0,0,0,0.5);"]);
var small = Object(external_styled_components_["css"])(["box-shadow:0 0 5px rgba(0,0,0,0.4);"]);
// CONCATENATED MODULE: ./constants/animations.ts

var slideUpCss = Object(external_styled_components_["css"])(["opacity:0;transform:scale(0.9) translateY(-10px);transition:opacity 300ms ease-out 100ms,transform 300ms ease-out 100ms;&.enter-active{opacity:1;transform:scale(1) translateY(0);}&.enter-done{opacity:1;transform:scale(1) translateY(0);}&.exit-active{opacity:0;transform:scale(0.9) translateY(10px);}&.exit-done{display:none;}"]);
var slider = Object(external_styled_components_["css"])(["height:0;transition:height 200ms ease-in;&.enter-done{height:500px;}&.exit-done{display:none;}"]);
var fade = Object(external_styled_components_["css"])(["opacity:0;display:none;transition:opacity 500ms ease-in;&.enter{display:block;}&.enter-done{display:block;opacity:1;}"]);
var fadeOut = Object(external_styled_components_["css"])(["transition:opacity 500ms ease-in;opacity:1;&.enter{opacity:0;}&.enter-done{display:none;}"]);
// CONCATENATED MODULE: ./constants/fonts.ts

var fredericka = Object(external_styled_components_["css"])(["font-family:'Fredericka the Great',cursive;"]);
var nunito = Object(external_styled_components_["css"])(["font-family:'Nunito',sans-serif;"]);
var neucha = Object(external_styled_components_["css"])(["font-family:'Neucha',cursive;"]);
// CONCATENATED MODULE: ./constants/breakpoints.ts
var breakpointSizes = {
  mobile: '720px',
  laptop: '1024px',
  desktop: '1280px'
};
var mobile = "(min-width: ".concat(breakpointSizes.mobile, ")");
var laptop = "(min-width: ".concat(breakpointSizes.laptop, ")");
var desktop = "(min-width: ".concat(breakpointSizes.desktop, ")");
// CONCATENATED MODULE: ./constants/index.ts
/* concated harmony reexport colors */__webpack_require__.d(__webpack_exports__, "c", function() { return colors; });
/* concated harmony reexport sizes */__webpack_require__.d(__webpack_exports__, "f", function() { return sizes; });
/* concated harmony reexport animations */__webpack_require__.d(__webpack_exports__, "a", function() { return animations_namespaceObject; });
/* concated harmony reexport shadow */__webpack_require__.d(__webpack_exports__, "e", function() { return shadow_namespaceObject; });
/* concated harmony reexport fonts */__webpack_require__.d(__webpack_exports__, "d", function() { return fonts_namespaceObject; });
/* concated harmony reexport breakpoints */__webpack_require__.d(__webpack_exports__, "b", function() { return breakpoints_namespaceObject; });








/***/ }),

/***/ "Di8c":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Et9M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Size; });
var Size;

(function (Size) {
  Size[Size["sm"] = 0] = "sm";
  Size[Size["md"] = 1] = "md";
  Size[Size["lg"] = 2] = "lg";
})(Size || (Size = {}));

/***/ }),

/***/ "FBS0":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/fa-solid/UserCircle");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "FkUK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SocketContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pI2v");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("UIRo");





var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var SocketContext = Object(react__WEBPACK_IMPORTED_MODULE_6__["createContext"])(null);
var useSocket = function useSocket() {
  return Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(SocketContext);
};
var SocketProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SocketProvider, _Component);

  function SocketProvider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SocketProvider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SocketProvider).call(this, props));
    _this.state = {
      socket: null
    };

    if (!props.user) {
      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this);
    }

    _this.state = {
      socket: socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()(_config__WEBPACK_IMPORTED_MODULE_7__[/* baseServerUrl */ "a"], props.opts || {
        query: "user=".concat(props.user.email)
      })
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SocketProvider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SocketContext.Provider, {
        value: this.state.socket
      }, this.props.children);
    }
  }]);

  return SocketProvider;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "Gswr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./constants/enums.ts
var enums = __webpack_require__("Et9M");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/index.ts + 6 modules
var constants = __webpack_require__("C/iq");

// CONCATENATED MODULE: ./components/atoms/Title/styled.ts



var TitleWrapper = external_styled_components_default.a.h2.withConfig({
  displayName: "styled__TitleWrapper",
  componentId: "sc-8bnp8l-0"
})(["font-size:32px;color:", ";text-align:center;margin-top:0;text-decoration:", ";margin-bottom:", ";"], constants["c" /* colors */].primary, function (props) {
  return props.underline && 'underline';
}, function (props) {
  return props.size === enums["a" /* Size */].lg && '24px' || props.size === enums["a" /* Size */].md && '12px' || '8px';
});
var RedTitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__RedTitleWrapper",
  componentId: "sc-8bnp8l-1"
})(["font-size:32px;color:", ";font-family:'Neucha',cursive;text-align:center;margin-bottom:16px;"], constants["c" /* colors */].danger);
// CONCATENATED MODULE: ./components/atoms/Title/Title.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Title_Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Title_RedTitle; });
var __jsx = external_react_default.a.createElement;



var Title_Title = function Title(_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? enums["a" /* Size */].md : _ref$size,
      underline = _ref.underline;
  return external_react_default.a.createElement(TitleWrapper, {
    size: size,
    underline: underline
  }, children);
};
var Title_RedTitle = function RedTitle(_ref2) {
  var children = _ref2.children;
  return external_react_default.a.createElement(RedTitleWrapper, null, children);
};

/***/ }),

/***/ "J2XG":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/Spreadsheet");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JxIq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UIRo");


var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _config__WEBPACK_IMPORTED_MODULE_1__[/* baseServerUrl */ "a"],
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 400;
  }
});
var getApi = function getApi() {
  return api;
};

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__("8+Nu");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  var _url$split = url.split('#'),
      _url$split2 = _slicedToArray(_url$split, 2),
      pathname = _url$split2[0],
      hash = _url$split2[1]; // tslint:disable-next-line


  var _pathname$split = pathname.split('?'),
      _pathname$split2 = _slicedToArray(_pathname$split, 2),
      path = _pathname$split2[0],
      qs = _pathname$split2[1];

  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += "/";
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UIRo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseServerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ga_analitics; });
var isClient = false;
var baseServerUrl = "http://goburime.ru:3003";
var ga_analitics = undefined;

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, function (_, $1) {
    return groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZbLY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var butter_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0eR8");
/* harmony import */ var butter_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(butter_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ThumbsUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0Et4");
/* harmony import */ var _styled_icons_feather_ThumbsUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ThumbsUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_material_MoodBad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ksuT");
/* harmony import */ var _styled_icons_material_MoodBad__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_MoodBad__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ThumbsUpStyled = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_styled_icons_feather_ThumbsUp__WEBPACK_IMPORTED_MODULE_2__["ThumbsUp"]).withConfig({
  displayName: "toast__ThumbsUpStyled",
  componentId: "m09e70-0"
})(["padding:8px;"]);
var MoodBadStyled = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_styled_icons_material_MoodBad__WEBPACK_IMPORTED_MODULE_3__["MoodBad"]).withConfig({
  displayName: "toast__MoodBadStyled",
  componentId: "m09e70-1"
})(["padding:8px;color:red;"]);
var success = function success(title, text) {
  butter_toast__WEBPACK_IMPORTED_MODULE_1___default.a.raise({
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(butter_toast__WEBPACK_IMPORTED_MODULE_1__["Cinnamon"].Crunch, {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThumbsUpStyled, null),
      title: title,
      content: text,
      scheme: butter_toast__WEBPACK_IMPORTED_MODULE_1__["Cinnamon"].Crunch.SCHEME_GREEN
    })
  });
};
var error = function error(title, text) {
  butter_toast__WEBPACK_IMPORTED_MODULE_1___default.a.raise({
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(butter_toast__WEBPACK_IMPORTED_MODULE_1__["Cinnamon"].Crunch, {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoodBadStyled, {
        fill: "black"
      }),
      title: title,
      content: text,
      scheme: butter_toast__WEBPACK_IMPORTED_MODULE_1__["Cinnamon"].Crunch.SCHEME_RED
    })
  });
};

/***/ }),

/***/ "ZeZm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return status; });
/* unused harmony export get */
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JxIq");


var api = Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* getApi */ "a"])();

var errorHandle = function errorHandle(error, unknownMessage) {
  var message = error.response ? error.response.data.message : unknownMessage;
  return {
    data: {
      message: message
    },
    status: 555
  };
};

var registration = function registration(user) {
  return api.post('auth/registration', user)["catch"](function (error) {
    return errorHandle(error, 'Регистрация недоступна');
  });
};
var signIn = function signIn(user) {
  return api.post('auth/login', user)["catch"](function (error) {
    return errorHandle(error, 'Авторизация недоступна');
  });
};
var signOut = function signOut() {
  return api.get('auth/logout')["catch"](function (error) {
    return errorHandle(error, 'Неизвестная ошибка');
  });
};
var status = function status(cookie) {
  var _ref, status, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function status$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(api.get('auth/status', {
            headers: {
              Cookie: "connect.sid=".concat(cookie['connect.sid'])
            }
          }));

        case 2:
          _ref = _context.sent;
          status = _ref.status;
          data = _ref.data;

          if (!(status !== 200)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", {
            logged: false,
            user: null
          });

        case 7:
          return _context.abrupt("return", data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};
var get = function get(url) {
  return api.get(url);
};

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "b3CU":
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__("pbKT");

var setPrototypeOf = __webpack_require__("vjea");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__("/HRN");

var _createClass = __webpack_require__("WaGi");

var _possibleConstructorReturn = __webpack_require__("ZDA2");

var _getPrototypeOf = __webpack_require__("/+P4");

var _inherits = __webpack_require__("N9n2");

var _typeof = __webpack_require__("iZP3");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && _typeof(url) === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && _typeof(child) === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (_typeof(child.ref) === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "cnit":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/entypo-social/VkWithCircle");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = _Object$create(null);

  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__("ln6h");

var _slicedToArray = __webpack_require__("8+Nu");

var _typeof = __webpack_require__("iZP3");

var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _classCallCheck = __webpack_require__("/HRN");

var _createClass = __webpack_require__("WaGi");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

var utils_1 = __webpack_require__("g/15");

var rewrite_url_for_export_1 = __webpack_require__("P5f7");

var route_matcher_1 = __webpack_require__("gguc");

var route_regex_1 = __webpack_require__("YTqd");

var is_dynamic_1 = __webpack_require__("/jkW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var Router =
/*#__PURE__*/
function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription;

    _classCallCheck(this, Router);

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.historyId !== _this.historyId) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (false) {}

      _this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // we use a historyId to enable ignoring invalid popstates

    this.historyId = Math.random();

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = _Object$assign({}, data, {
        Component: Component
      });

      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new _Promise(function (resolve, reject) {
        // marking route changes as a navigation start entry
        if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = _typeof(_url) === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = _typeof(_as) === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) {}

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse = url_1.parse(url, true),
            pathname = _url_1$parse.pathname,
            query = _url_1$parse.query,
            protocol = _url_1$parse.protocol;

        if (!pathname || protocol) {
          if (false) {}

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        } // @ts-ignore pathname is always a string


        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse2 = url_1.parse(as),
              asPathname = _url_1$parse2.pathname;

          var rr = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

          if (!routeMatch) {
            var error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

            if (false) {} else {
              console.error(error);
            }

            return resolve(false);
          } // Merge params into `query`, overwriting any specified in search


          _Object$assign(query, routeMatch);
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
        // @ts-ignore pathname is always a string

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          var hash = window.location.hash.substring(1);

          if (false) { var appComp; } // @ts-ignore pathname is always defined


          _this2.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
            hash: hash
          }));

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (false) {}

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        // @ts-ignore method should always exist on history
        window.history[method]({
          url: url,
          as: as,
          options: _Object$assign({}, options, {
            historyId: this.historyId
          })
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return _Promise.resolve(cachedRouteInfo);
      }

      return new _Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (Component) {
          return resolve({
            Component: Component
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component;

        if (false) { var _require, isValidElementType; }

        return new _Promise(function (resolve, reject) {
          // we provide AppTree later so this needs to be `any`
          _this3.getInitialProps(Component, {
            pathname: pathname,
            query: query,
            asPath: as
          }).then(function (props) {
            routeInfo.props = props;
            _this3.components[route] = routeInfo;
            resolve(routeInfo);
          }, reject);
        });
      })["catch"](function (err) {
        return new _Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR') {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (Component) {
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new _Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          }));
        });
      });
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch `page` code, you may wait for the data during `page` rendering.
     * This feature only works in production!
     * @param url of prefetched `page`
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      return new _Promise(function (resolve, reject) {
        var _url_1$parse3 = url_1.parse(url),
            pathname = _url_1$parse3.pathname,
            protocol = _url_1$parse3.protocol;

        if (!pathname || protocol) {
          if (false) {}

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (false) {} // @ts-ignore pathname is always defined

        var route = toRoute(pathname);

        _this4.pageLoader.prefetch(route).then(resolve, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, Component, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              Component = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", Component);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var cancelled, cancel, App, props, status, _url_1$parse4, pathname, AppTree, err;

      return _regeneratorRuntime.async(function getInitialProps$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              cancelled = false;

              cancel = function cancel() {
                cancelled = true;
              };

              this.clc = cancel;
              App = this.components['/_app'].Component;

              if (!Component.__NEXT_SPR) {
                _context2.next = 12;
                break;
              }

              // pathname should have leading slash
              _url_1$parse4 = url_1.parse(ctx.asPath || ctx.pathname), pathname = _url_1$parse4.pathname;
              pathname = !pathname || pathname === '/' ? '/index' : pathname;
              _context2.next = 9;
              return _regeneratorRuntime.awrap(fetch( // @ts-ignore __NEXT_DATA__
              "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json")).then(function (res) {
                if (!res.ok) {
                  status = res.status;
                  throw new Error('failed to load prerender data');
                }

                return res.json();
              })["catch"](function (err) {
                console.error("Failed to load data", status, err);
                window.location.href = pathname;
                return new _Promise(function () {});
              }));

            case 9:
              props = _context2.sent;
              _context2.next = 17;
              break;

            case 12:
              AppTree = this._wrapApp(App);
              ctx.AppTree = AppTree;
              _context2.next = 16;
              return _regeneratorRuntime.awrap(utils_1.loadGetInitialProps(App, {
                AppTree: AppTree,
                Component: Component,
                router: this,
                ctx: ctx
              }));

            case 16:
              props = _context2.sent;

            case 17:
              if (cancel === this.clc) {
                this.clc = null;
              }

              if (!cancelled) {
                _context2.next = 22;
                break;
              }

              err = new Error('Loading initial props cancelled');
              err.cancelled = true;
              throw err;

            case 22:
              return _context2.abrupt("return", props);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
    }
  }]);

  return Router;
}();

Router.events = mitt_1["default"]();
exports["default"] = Router;

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fprZ":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("XXOK");

var _isIterable = __webpack_require__("yLu3");

function _iterableToArrayLimit(arr, i) {
  if (!(_isIterable(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__("iZP3");

var _regeneratorRuntime = __webpack_require__("ln6h");

var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (true) {
            _context.next = 4;
            break;
          }

          if (!(App.prototype && App.prototype.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (false) {}

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "g4Mp":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/remix-line/PencilRuler");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var params = {};

    _Object$keys(groups).forEach(function (slugName) {
      var m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ksuT":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/material/MoodBad");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__("iZP3");

var _getIterator = __webpack_require__("XXOK");

var _construct = __webpack_require__("b3CU");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(urlPropertyFields), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      if (_typeof(_router[property]) === 'object') {
        instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nP3O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/index.ts + 6 modules
var constants = __webpack_require__("C/iq");

// CONCATENATED MODULE: ./components/molecules/Slide/styled.ts


var SlideWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__SlideWrapper",
  componentId: "sc-10anrng-0"
})(["display:flex;height:500px;flex-direction:column;align-items:center;margin-bottom:12px;@media ", "{height:400px;flex-direction:", ";}"], constants["b" /* breakpoints */].mobile, function (props) {
  return props.right ? 'row-reverse' : 'row';
});
var SlideBlock = external_styled_components_default.a.div.withConfig({
  displayName: "styled__SlideBlock",
  componentId: "sc-10anrng-1"
})(["height:50%;width:60%;margin:10px;@media ", "{width:50%;height:100%;}"], constants["b" /* breakpoints */].mobile);
var ImageBlock = external_styled_components_default()(SlideBlock).withConfig({
  displayName: "styled__ImageBlock",
  componentId: "sc-10anrng-2"
})(["padding:10px;border:solid 1px silver;& img{width:100%;height:100%;}"]);
var RuleNumber = external_styled_components_default.a.div.withConfig({
  displayName: "styled__RuleNumber",
  componentId: "sc-10anrng-3"
})(["border-radius:50%;font-size:44px;width:42px;height:42px;padding:8px;background:#fff;border:2px solid ", ";color:", ";display:flex;justify-content:center;align-items:center;margin-bottom:12px;"], constants["c" /* colors */].primary, constants["c" /* colors */].primary);
var TextBlock = external_styled_components_default()(SlideBlock).withConfig({
  displayName: "styled__TextBlock",
  componentId: "sc-10anrng-4"
})(["padding:16px;font-size:20px;align-items:center;display:flex;flex-flow:column;justify-content:center;text-align:center;", " @media ", "{font-size:23px;}"], constants["d" /* fonts */].nunito, constants["b" /* breakpoints */].mobile);
var SliderTitle = external_styled_components_default.a.div.withConfig({
  displayName: "styled__SliderTitle",
  componentId: "sc-10anrng-5"
})(["font-size:40px;color:", ";", " @media ", "{font-size:52px;}"], constants["c" /* colors */].primary, constants["d" /* fonts */].neucha, constants["b" /* breakpoints */].mobile);
// CONCATENATED MODULE: ./components/molecules/Slide/Slide.tsx
var __jsx = external_react_default.a.createElement;


var Slide_Slide = function Slide(_ref) {
  var title = _ref.title,
      right = _ref.right,
      slideNumber = _ref.slideNumber,
      text = _ref.text,
      img = _ref.img;
  return external_react_default.a.createElement(SlideWrapper, {
    right: right
  }, external_react_default.a.createElement(ImageBlock, null, external_react_default.a.createElement("img", {
    src: img
  })), external_react_default.a.createElement(TextBlock, null, slideNumber && external_react_default.a.createElement(RuleNumber, null, slideNumber), title && external_react_default.a.createElement(SliderTitle, null, title), external_react_default.a.createElement("div", null, text)));
};
// CONCATENATED MODULE: ./components/molecules/Rules/Rules.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rules_Rules; });
var Rules_jsx = external_react_default.a.createElement;



var RulesWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Rules__RulesWrapper",
  componentId: "sc-1yp1fpd-0"
})(["margin-bottom:12px;"]);
var Rules_Rules = function Rules() {
  return external_react_default.a.createElement(RulesWrapper, null, external_react_default.a.createElement(Slide_Slide, {
    slideNumber: 1,
    right: true,
    img: "/rules/step_1.jpg",
    text: "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C\u0442\u0435, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043B\u0438\u0441\u0442 \u0431\u0443\u043C\u0430\u0433\u0438, 2 \u0440\u0443\u0447\u043A\u0438, \u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0438"
  }), external_react_default.a.createElement(Slide_Slide, {
    slideNumber: 2,
    img: "/rules/step_2.jpg",
    text: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 2 \u0441\u0442\u0440\u043E\u0447\u043A\u0438 \u043D\u0430 \u0437\u0430\u0434\u0430\u043D\u043D\u0443\u044E \u0442\u0435\u043C\u0443"
  }), external_react_default.a.createElement(Slide_Slide, {
    slideNumber: 3,
    right: true,
    img: "/rules/step_3.jpg",
    text: "\u0417\u0430\u0442\u0435\u043C \u0441\u043E\u0433\u043D\u0438\u0442\u0435 \u043B\u0438\u0441\u0442\u043E\u043A \u0442\u0430\u043A, \u0447\u0442\u043E \u0431\u044B \u0431\u044B\u043B\u043E \u0432\u0438\u0434\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0443 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u0438\u0433\u0440\u043E\u043A\u0443"
  }), external_react_default.a.createElement(Slide_Slide, {
    slideNumber: 4,
    img: "/rules/step_4.jpg",
    text: "\u0412\u0442\u043E\u0440\u043E\u0439 \u0438\u0433\u0440\u043E\u043A \u0432\u0438\u0434\u0438\u0442 \u0432\u0430\u0448\u0443 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0438 \u043F\u0438\u0448\u0435\u0442 \u0441\u0432\u043E\u0438 \u0434\u0432\u0435 \u0441\u0442\u0440\u043E\u043A\u0438, \u0441\u0442\u0430\u0440\u0430\u044F\u0441\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0440\u0438\u0444\u043C\u043E\u0432\u0430\u0442\u044C \u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0438\u0445\u043E\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F"
  }), external_react_default.a.createElement(Slide_Slide, {
    slideNumber: 5,
    right: true,
    img: "/rules/step_5.jpg",
    text: "\u0422\u0430\u043A \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F \u0431\u0443\u043C\u0430\u0433\u0430, \u0438\u043B\u0438 \u043E\u0431\u0430 \u0438\u0433\u0440\u043E\u043A\u0430 \u043D\u0435 \u0440\u0435\u0448\u0430\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F"
  }), external_react_default.a.createElement(Slide_Slide, {
    slideNumber: 6,
    img: "/rules/step_6.jpg",
    text: "\u0422\u0435\u043F\u0435\u0440\u044C \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0438\u0442\u0435 \u043B\u0438\u0441\u0442\u043E\u043A \u0438 \u043F\u0440\u043E\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043E \u0443 \u0412\u0430\u0441 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0432 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u043C \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0435. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u0435\u0440\u0435\u0434 \u0432\u0430\u043C \u0431\u0435\u0437 \u0434\u0432\u0443\u0445 \u043C\u0438\u043D\u0443\u0442 \u0448\u0435\u0434\u0435\u0432\u0440."
  }));
};

/***/ }),

/***/ "o3JK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_molecules_Rules_Rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nP3O");
/* harmony import */ var _components_organizms_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1C+D");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Page = function Page() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organizms_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[/* Layout */ "a"], {
    noAuth: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_molecules_Rules_Rules__WEBPACK_IMPORTED_MODULE_1__[/* Rules */ "a"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pbKT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "q4gF":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/entypo/OpenBook");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w2+A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/index.ts + 6 modules
var constants = __webpack_require__("C/iq");

// CONCATENATED MODULE: ./components/atoms/Button/styled.ts


var _rootPreset;



var ButtonType;

(function (ButtonType) {
  ButtonType[ButtonType["primary"] = 0] = "primary";
  ButtonType[ButtonType["white"] = 1] = "white";
  ButtonType[ButtonType["danger"] = 2] = "danger";
})(ButtonType || (ButtonType = {}));

var rootPreset = (_rootPreset = {}, Object(defineProperty["a" /* default */])(_rootPreset, ButtonType.primary, Object(external_styled_components_["css"])(["background:transparent;color:", ";border:2px solid ", ";&:hover{background-color:", ";color:white;}"], constants["c" /* colors */].primary, constants["c" /* colors */].primary, constants["c" /* colors */].primary)), Object(defineProperty["a" /* default */])(_rootPreset, ButtonType.white, Object(external_styled_components_["css"])(["background:white;color:", ";border:2px solid ", ";&:hover{border-color:#0a4b61;color:#0a4b61;}"], constants["c" /* colors */].primary, constants["c" /* colors */].primary)), Object(defineProperty["a" /* default */])(_rootPreset, ButtonType.danger, Object(external_styled_components_["css"])(["background:", ";color:white;border:none;&:hover{background-color:red;color:white;}"], constants["c" /* colors */].danger)), _rootPreset);
var sizePreset = {
  sm: Object(external_styled_components_["css"])(["font-size:16px;padding:8px 16px;"]),
  md: Object(external_styled_components_["css"])(["font-size:20px;padding:12px 24px;"])
};
var ButtonHost = external_styled_components_default.a.button.withConfig({
  displayName: "styled__ButtonHost",
  componentId: "sc-1oqwi77-0"
})(["cursor:pointer;border-radius:3px;transition:0.5s all ease-out;font-family:'Nunito',sans-serif;", " ", " ", ""], function (_ref) {
  var buttonType = _ref.buttonType;
  return rootPreset[buttonType];
}, function (_ref2) {
  var size = _ref2.size;
  return sizePreset[size || 'md'];
}, function (props) {
  return props.width && Object(external_styled_components_["css"])(["width:", "px;"], props.width);
});
// CONCATENATED MODULE: ./components/atoms/Button/Button.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button_Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Button_SubmitButton; });
/* concated harmony reexport ButtonType */__webpack_require__.d(__webpack_exports__, "b", function() { return ButtonType; });
var __jsx = external_react_default.a.createElement;


var Button_Button = function Button(_ref) {
  var children = _ref.children,
      width = _ref.width,
      size = _ref.size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? ButtonType.primary : _ref$type,
      onClick = _ref.onClick;
  return external_react_default.a.createElement(ButtonHost, {
    size: size,
    width: width,
    onClick: onClick,
    buttonType: type
  }, children);
};
var Button_SubmitButton = function SubmitButton(_ref2) {
  var children = _ref2.children;
  return external_react_default.a.createElement(ButtonHost, {
    buttonType: ButtonType.primary,
    type: "submit"
  }, children);
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zKz7":
/***/ (function(module, exports) {

module.exports = require("react-use");

/***/ }),

/***/ "zbXp":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/LogOut");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });