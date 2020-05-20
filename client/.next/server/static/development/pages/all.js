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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AuthModal/AuthModal.tsx":
/*!********************************************!*\
  !*** ./components/AuthModal/AuthModal.tsx ***!
  \********************************************/
/*! exports provided: AuthModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModal", function() { return AuthModal; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/AuthModal/styled.ts");
/* harmony import */ var _Dialog_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dialog/Dialog */ "./components/Dialog/Dialog.tsx");
/* harmony import */ var _services_api_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/auth */ "./services/api/auth.ts");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignIn */ "./components/AuthModal/SignIn.tsx");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUp */ "./components/AuthModal/SignUp.tsx");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast */ "./services/toast.tsx");

var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\AuthModal\\AuthModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var AuthModal = function AuthModal(_ref) {
  var isOpen = _ref.isOpen,
      setOpen = _ref.setOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      signInMode = _useState[0],
      setSignIn = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      password = _useState3[0],
      setPassword = _useState3[1];

  var onLogin = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee(_ref2) {
    var email, password, _ref3, status, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = _ref2.email, password = _ref2.password;
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_auth__WEBPACK_IMPORTED_MODULE_4__["signIn"])({
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

            Object(_services_toast__WEBPACK_IMPORTED_MODULE_7__["error"])('Ошибка', data.message);
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
  var onRegistration = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee2(_ref4) {
    var name, email, password, _ref5, data, status;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = _ref4.name, email = _ref4.email, password = _ref4.password;
            _context2.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_auth__WEBPACK_IMPORTED_MODULE_4__["registration"])({
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

            Object(_services_toast__WEBPACK_IMPORTED_MODULE_7__["error"])('Ошибка', data.message);
            return _context2.abrupt("return");

          case 9:
            Object(_services_toast__WEBPACK_IMPORTED_MODULE_7__["success"])('Успешно', 'Вы зарегистрированы!');
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
  var toggleMode = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSignIn(!signInMode);
  }, [signInMode]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_3__["FormDialog"], {
    isOpen: isOpen,
    setOpen: setOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LoginContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, signInMode ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SignIn__WEBPACK_IMPORTED_MODULE_5__["SignIn"], {
    email: email,
    password: password,
    onSubmit: onLogin,
    onToggle: toggleMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SignUp__WEBPACK_IMPORTED_MODULE_6__["SignUp"], {
    onSubmit: onRegistration,
    onToggle: toggleMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
};

/***/ }),

/***/ "./components/AuthModal/SignIn.tsx":
/*!*****************************************!*\
  !*** ./components/AuthModal/SignIn.tsx ***!
  \*****************************************/
/*! exports provided: SignIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/AuthModal/styled.ts");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Button/Button */ "./components/atoms/Button/Button.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/urls */ "./constants/urls.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\AuthModal\\SignIn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var SignIn = function SignIn(_ref) {
  var onSubmit = _ref.onSubmit,
      onToggle = _ref.onToggle,
      email = _ref.email,
      password = _ref.password;

  var _useForm = react_hook_form__WEBPACK_IMPORTED_MODULE_6___default()({
    defaultValues: {
      email: email,
      password: password
    }
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    key: "signIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Centered"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["GoogleButton"], {
    href: "".concat(_constants_urls__WEBPACK_IMPORTED_MODULE_7__["baseServerUrl"], "/auth/google"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaGoogle"], {
    size: "24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u0412\u043E\u0439\u0442\u0438"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Centered"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["LightText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\u0438\u043B\u0438")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    fullWidth: true,
    label: "email",
    name: "email",
    inputRef: register({
      required: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    fullWidth: true,
    label: "\u043F\u0430\u0440\u043E\u043B\u044C",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    inputRef: register({
      required: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ActionsWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__["SubmitButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "\u0412\u043E\u0439\u0442\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "button",
    onClick: onToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")));
};

/***/ }),

/***/ "./components/AuthModal/SignUp.tsx":
/*!*****************************************!*\
  !*** ./components/AuthModal/SignUp.tsx ***!
  \*****************************************/
/*! exports provided: SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/AuthModal/styled.ts");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Button/Button */ "./components/atoms/Button/Button.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\AuthModal\\SignUp.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SignUp = function SignUp(_ref) {
  var onSubmit = _ref.onSubmit,
      onToggle = _ref.onToggle;

  var _useForm = react_hook_form__WEBPACK_IMPORTED_MODULE_5___default()(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    key: "signUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    fullWidth: true,
    label: "\u0438\u043C\u044F",
    name: "name",
    inputRef: register({
      required: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    fullWidth: true,
    label: "email",
    name: "email",
    inputRef: register({
      required: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    fullWidth: true,
    label: "\u043F\u0430\u0440\u043E\u043B\u044C",
    type: "password",
    name: "password",
    inputRef: register({
      required: true,
      minLength: 6
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    fullWidth: true,
    label: "\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
    type: "password",
    name: "password_repeat",
    inputRef: register({
      required: true,
      minLength: 6
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ActionsWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__["SubmitButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "button",
    onClick: onToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u0432\u043E\u0439\u0442\u0438")));
};

/***/ }),

/***/ "./components/AuthModal/styled.ts":
/*!****************************************!*\
  !*** ./components/AuthModal/styled.ts ***!
  \****************************************/
/*! exports provided: Centered, LightText, LoginContainer, InputWrapper, ActionsWrapper, GoogleButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Centered", function() { return Centered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightText", function() { return LightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContainer", function() { return LoginContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsWrapper", function() { return ActionsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleButton", function() { return GoogleButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Centered = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Centered",
  componentId: "sc-12iw0ds-0"
})(["display:flex;margin-bottom:12px;justify-content:center;"]);
var LightText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LightText",
  componentId: "sc-12iw0ds-1"
})(["color:silver;font-size:12px;text-decoration:underline;"]);
var LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LoginContainer",
  componentId: "sc-12iw0ds-2"
})(["min-width:300px;padding:20px 60px;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__InputWrapper",
  componentId: "sc-12iw0ds-3"
})(["text-align:center;margin-bottom:12px;"]);
var ActionsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ActionsWrapper",
  componentId: "sc-12iw0ds-4"
})(["display:flex;justify-content:space-between;margin-top:20px;"]);
var GoogleButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "styled__GoogleButton",
  componentId: "sc-12iw0ds-5"
})(["padding:10px 20px;display:flex;color:white;border-width:0;background:#4285f4;border-radius:2px;white-space:nowrap;box-shadow:1px 1px 0px 1px rgba(0,0,0,0.05);transition-property:background-color,box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;text-decoration:none;&:focus,&:hover{box-shadow:1px 4px 5px 1px rgba(0,0,0,0.1);}& span{padding-left:20px;}"]);

/***/ }),

/***/ "./components/Chat/Chat.tsx":
/*!**********************************!*\
  !*** ./components/Chat/Chat.tsx ***!
  \**********************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket */ "./services/socket.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/Chat/styled.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _services_contexts_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/contexts/auth */ "./services/contexts/auth.ts");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_boxicons_regular_Send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styled-icons/boxicons-regular/Send */ "@styled-icons/boxicons-regular/Send");
/* harmony import */ var _styled_icons_boxicons_regular_Send__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Send__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_socketEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/socketEvents */ "./constants/socketEvents.ts");
/* harmony import */ var _UsersBadge_UsersBadge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UsersBadge/UsersBadge */ "./components/Chat/UsersBadge/UsersBadge.tsx");
/* harmony import */ var _services_api_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api/messages */ "./services/api/messages.ts");
/* harmony import */ var _services_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/date */ "./services/date.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\Chat\\Chat.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Chat = function Chat() {
  var user = Object(_services_contexts_auth__WEBPACK_IMPORTED_MODULE_4__["useUser"])();

  if (!_config__WEBPACK_IMPORTED_MODULE_3__["isClient"] || !user) {
    return null;
  }

  var socket = Object(_services_socket__WEBPACK_IMPORTED_MODULE_1__["useSocket"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      newMessage = _useState2[0],
      setNewMessage = _useState2[1];

  var _useMessages = Object(_services_api_messages__WEBPACK_IMPORTED_MODULE_9__["useMessages"])(user.email, socket),
      messages = _useMessages.messages,
      activeUsers = _useMessages.activeUsers;

  var endEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var openChat = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (open) return;
    if (!endEl || !endEl.current) return;
    setTimeout(function () {
      return endEl.current && endEl.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 500);
    setOpen(true);
  }, [open]);

  var printMessage = function printMessage(e) {
    return setNewMessage(e.currentTarget.value);
  };

  var sendMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!newMessage) {
      return;
    }

    socket.emit(_constants_socketEvents__WEBPACK_IMPORTED_MODULE_7__["sendCommonMessage"], {
      author: user,
      content: newMessage
    });
    setNewMessage('');
  }, [socket, newMessage]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, !open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatHeader"], {
    onClick: openChat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatHeaderInner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersBadge_UsersBadge__WEBPACK_IMPORTED_MODULE_8__["UsersBadge"], {
    amount: activeUsers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["CSSTransition"], {
    "in": open,
    timeout: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatInner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["CloseIcon"], {
    onClick: function onClick() {
      return setOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MessagesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, messages.map(function (message) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"], {
      key: message.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MessageInfo"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MessageAuthor"], {
      isMine: message.isMine,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, message.author.name, ":"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MessageDate"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, Object(_services_date__WEBPACK_IMPORTED_MODULE_10__["format"])(message.date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MessageContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, message.content));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: endEl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatToolBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatInputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatInput"], {
    value: newMessage,
    placeholder: "\u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
    onChange: function onChange(e) {
      return printMessage(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ChatAction"], {
    onClick: sendMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_icons_boxicons_regular_Send__WEBPACK_IMPORTED_MODULE_6__["Send"], {
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))))));
};

/***/ }),

/***/ "./components/Chat/UsersBadge/UsersBadge.tsx":
/*!***************************************************!*\
  !*** ./components/Chat/UsersBadge/UsersBadge.tsx ***!
  \***************************************************/
/*! exports provided: UsersBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersBadge", function() { return UsersBadge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/Chat/UsersBadge/styled.ts");
/* harmony import */ var _styled_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/material/SupervisedUserCircle */ "@styled-icons/material/SupervisedUserCircle");
/* harmony import */ var _styled_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\Chat\\UsersBadge\\UsersBadge.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UsersBadge = function UsersBadge(_ref) {
  var amount = _ref.amount;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["UsersBadgeHost"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["UsersBadgeContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_2__["SupervisedUserCircle"], {
    width: 36,
    height: 36,
    fill: _constants__WEBPACK_IMPORTED_MODULE_3__["colors"].primary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["UsersBadgeAmount"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, amount)));
};

/***/ }),

/***/ "./components/Chat/UsersBadge/styled.ts":
/*!**********************************************!*\
  !*** ./components/Chat/UsersBadge/styled.ts ***!
  \**********************************************/
/*! exports provided: UsersBadgeHost, UsersBadgeContent, UsersBadgeAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersBadgeHost", function() { return UsersBadgeHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersBadgeContent", function() { return UsersBadgeContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersBadgeAmount", function() { return UsersBadgeAmount; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");


var UsersBadgeHost = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__UsersBadgeHost",
  componentId: "sc-1u16bjo-0"
})(["height:100%;display:flex;justify-content:center;align-items:center;"]);
var UsersBadgeContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__UsersBadgeContent",
  componentId: "sc-1u16bjo-1"
})(["display:flex;border-radius:8px;padding:0 8px;color:", ";align-items:center;"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);
var UsersBadgeAmount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__UsersBadgeAmount",
  componentId: "sc-1u16bjo-2"
})(["height:12px;font-size:16px;padding-left:4px;"]);

/***/ }),

/***/ "./components/Chat/styled.ts":
/*!***********************************!*\
  !*** ./components/Chat/styled.ts ***!
  \***********************************/
/*! exports provided: ChatContainer, ChatHeader, ChatHeaderInner, ChatInner, ChatToolBar, ChatInput, ChatInputWrapper, ChatAction, CloseIcon, MessagesContainer, ContentWrapper, ChatMessage, MessageInfo, MessageDate, MessageAuthor, MessageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContainer", function() { return ChatContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHeader", function() { return ChatHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHeaderInner", function() { return ChatHeaderInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInner", function() { return ChatInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatToolBar", function() { return ChatToolBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInput", function() { return ChatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInputWrapper", function() { return ChatInputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAction", function() { return ChatAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesContainer", function() { return MessagesContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageInfo", function() { return MessageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDate", function() { return MessageDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAuthor", function() { return MessageAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageContent", function() { return MessageContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../constants */ "./constants/index.ts");
/* harmony import */ var _styled_icons_evil_CloseO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/evil/CloseO */ "@styled-icons/evil/CloseO");
/* harmony import */ var _styled_icons_evil_CloseO__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_evil_CloseO__WEBPACK_IMPORTED_MODULE_2__);



var ChatContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChatContainer",
  componentId: "sc-28n2x1-0"
})(["position:fixed;bottom:110px;right:0;@media ", "{bottom:66px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].mobile);
var ChatHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChatHeader",
  componentId: "sc-28n2x1-1"
})(["width:80px;height:80px;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:", ";padding:10px;font-family:'Neucha',cursive;position:relative;cursor:pointer;", " transition:background-color 0.3s ease-in-out;&:hover{background-color:#005e7d;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary, _constants__WEBPACK_IMPORTED_MODULE_1__["shadow"].simple);
var ChatHeaderInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChatHeaderInner",
  componentId: "sc-28n2x1-2"
})(["width:85%;height:85%;border-radius:50%;background-color:silver;transition:all 0.3s ease-in-out;&:hover{width:98%;height:98%;}"]);
var ChatInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChatInner",
  componentId: "sc-28n2x1-3"
})(["border:1px solid silver;border-radius:2px;", " ", ""], _constants__WEBPACK_IMPORTED_MODULE_1__["shadow"].small, _constants__WEBPACK_IMPORTED_MODULE_1__["animations"].fade);
var ChatToolBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChatToolBar",
  componentId: "sc-28n2x1-4"
})(["border-top:1px solid silver;flex:0 0 40px;display:flex;align-items:center;background-color:white;"]);
var ChatInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "styled__ChatInput",
  componentId: "sc-28n2x1-5"
})(["font-size:18px;padding:10px;padding-right:24px;margin:10px;border:solid 1px ", ";::placeholder{color:", ";}"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary, _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].plaseholder);
var ChatInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChatInputWrapper",
  componentId: "sc-28n2x1-6"
})(["flex:1 1 auto;"]);
var ChatAction = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChatAction",
  componentId: "sc-28n2x1-7"
})(["flex:0 0 auto;padding:5px 12px;color:", ";cursor:pointer;"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);
var CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_evil_CloseO__WEBPACK_IMPORTED_MODULE_2__["CloseO"]).withConfig({
  displayName: "styled__CloseIcon",
  componentId: "sc-28n2x1-8"
})(["color:", ";width:32px;position:absolute;left:-37px;cursor:pointer;background-color:white;"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);
var MessagesContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MessagesContainer",
  componentId: "sc-28n2x1-9"
})(["display:flex;flex-direction:column;justify-content:flex-end;padding:12px;background-color:#e2e2e2;"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ContentWrapper",
  componentId: "sc-28n2x1-10"
})(["height:400px;flex:1 1 auto;overflow-y:scroll;"]);
var ChatMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChatMessage",
  componentId: "sc-28n2x1-11"
})(["display:flex;margin-bottom:8px;"]);
var MessageInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MessageInfo",
  componentId: "sc-28n2x1-12"
})(["flex-basis:30%;"]);
var MessageDate = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MessageDate",
  componentId: "sc-28n2x1-13"
})(["font-size:8px;"]);
var MessageAuthor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MessageAuthor",
  componentId: "sc-28n2x1-14"
})(["", ""], function (props) {
  return props.isMine && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:", ";"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].secondary);
});
var MessageContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MessageContent",
  componentId: "sc-28n2x1-15"
})(["flex-basis:70%;"]);

/***/ }),

/***/ "./components/Common/styled.ts":
/*!*************************************!*\
  !*** ./components/Common/styled.ts ***!
  \*************************************/
/*! exports provided: ChevronIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronIcon", function() { return ChevronIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-icons/boxicons-regular/ChevronDown */ "@styled-icons/boxicons-regular/ChevronDown");
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);


var ChevronIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__["ChevronDown"]).withConfig({
  displayName: "styled__ChevronIcon",
  componentId: "sc-2gc31b-0"
})(["transition:transform 0.3s ease-in-out;width:16px;", ""], function (props) {
  return props.open && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["transform:rotate(180deg);"]);
});

/***/ }),

/***/ "./components/Dialog/Dialog.tsx":
/*!**************************************!*\
  !*** ./components/Dialog/Dialog.tsx ***!
  \**************************************/
/*! exports provided: FormDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDialog", function() { return FormDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\Dialog\\Dialog.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FormDialog = function FormDialog(_ref) {
  var isOpen = _ref.isOpen,
      setOpen = _ref.setOpen,
      children = _ref.children;

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: isOpen,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, children));
};

/***/ }),

/***/ "./components/Header/Avatar/Avatar.tsx":
/*!*********************************************!*\
  !*** ./components/Header/Avatar/Avatar.tsx ***!
  \*********************************************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_UserCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/fa-solid/UserCircle */ "@styled-icons/fa-solid/UserCircle");
/* harmony import */ var _styled_icons_fa_solid_UserCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_UserCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_LogOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-icons/boxicons-regular/LogOut */ "@styled-icons/boxicons-regular/LogOut");
/* harmony import */ var _styled_icons_boxicons_regular_LogOut__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_LogOut__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-icons/material/Settings */ "@styled-icons/material/Settings");
/* harmony import */ var _styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_entypo_OpenBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/entypo/OpenBook */ "@styled-icons/entypo/OpenBook");
/* harmony import */ var _styled_icons_entypo_OpenBook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_entypo_OpenBook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_boxicons_regular_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styled-icons/boxicons-regular/Edit */ "@styled-icons/boxicons-regular/Edit");
/* harmony import */ var _styled_icons_boxicons_regular_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Edit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_boxicons_regular_Spreadsheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styled-icons/boxicons-regular/Spreadsheet */ "@styled-icons/boxicons-regular/Spreadsheet");
/* harmony import */ var _styled_icons_boxicons_regular_Spreadsheet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Spreadsheet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_remix_line_PencilRuler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styled-icons/remix-line/PencilRuler */ "@styled-icons/remix-line/PencilRuler");
/* harmony import */ var _styled_icons_remix_line_PencilRuler__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_remix_line_PencilRuler__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./components/Header/Avatar/styled.ts");
/* harmony import */ var _services_api_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/api/auth */ "./services/api/auth.ts");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/toast */ "./services/toast.tsx");
/* harmony import */ var _Common_styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Common/styled */ "./components/Common/styled.ts");

var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\Header\\Avatar\\Avatar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Avatar = function Avatar(_ref) {
  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var toggleOpen = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setOpen(!open);
  }, [open]);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react_use__WEBPACK_IMPORTED_MODULE_9__["useClickAway"])(ref, function () {
    return setOpen(false);
  });
  var logOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee() {
    var _ref2, status, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_auth__WEBPACK_IMPORTED_MODULE_11__["signOut"])());

          case 3:
            _ref2 = _context.sent;
            status = _ref2.status;
            data = _ref2.data;

            if (!(status !== 200)) {
              _context.next = 9;
              break;
            }

            Object(_services_toast__WEBPACK_IMPORTED_MODULE_12__["error"])('Ошибка', data.message);
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarHost"], {
    onClick: toggleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_icons_fa_solid_UserCircle__WEBPACK_IMPORTED_MODULE_2__["UserCircle"], {
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarName"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, user.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_styled__WEBPACK_IMPORTED_MODULE_13__["ChevronIcon"], {
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuWrapper"], {
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuItem"], {
    href: "/calls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_icons_boxicons_regular_Edit__WEBPACK_IMPORTED_MODULE_6__["Edit"], {
    width: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u0432\u044B\u0437\u043E\u0432\u044B")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuItem"], {
    href: "/all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_icons_boxicons_regular_Spreadsheet__WEBPACK_IMPORTED_MODULE_7__["Spreadsheet"], {
    width: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "\u0432\u0441\u0435 \u0431\u0443\u0440\u0438\u043C\u0435")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuItem"], {
    href: "/my",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_icons_entypo_OpenBook__WEBPACK_IMPORTED_MODULE_5__["OpenBook"], {
    width: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\u043C\u043E\u0438")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuItem"], {
    href: "/rules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_icons_remix_line_PencilRuler__WEBPACK_IMPORTED_MODULE_8__["PencilRuler"], {
    width: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u043F\u0440\u0430\u0432\u0438\u043B\u0430")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuItem"], {
    href: "/settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__["Settings"], {
    width: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuItem"], {
    onClick: logOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_icons_boxicons_regular_LogOut__WEBPACK_IMPORTED_MODULE_3__["LogOut"], {
    width: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["AvatarMenuText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\u0432\u044B\u0439\u0442\u0438"))));
};

/***/ }),

/***/ "./components/Header/Avatar/styled.ts":
/*!********************************************!*\
  !*** ./components/Header/Avatar/styled.ts ***!
  \********************************************/
/*! exports provided: AvatarHost, AvatarName, AvatarMenuWrapper, AvatarMenuItem, AvatarMenuText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarHost", function() { return AvatarHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarName", function() { return AvatarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarMenuWrapper", function() { return AvatarMenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarMenuItem", function() { return AvatarMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarMenuText", function() { return AvatarMenuText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
var AvatarHost = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__AvatarHost",
  componentId: "u8bppa-0"
})(["display:flex;align-items:center;cursor:pointer;"]);
var AvatarName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__AvatarName",
  componentId: "u8bppa-1"
})(["padding:0 24px;display:none;@media ", "{display:block;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].mobile);
var AvatarMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__AvatarMenuWrapper",
  componentId: "u8bppa-2"
})(["display:flex;align-items:center;position:absolute;right:0;display:", ";animation:", " 0.3s linear;margin-top:4px;box-shadow:0 0 10px rgba(0,0,0,0.5);z-index:1;"], function (props) {
  return props.open ? 'block' : 'none';
}, fadeIn);
var AvatarMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "styled__AvatarMenuItem",
  componentId: "u8bppa-3"
})(["display:flex;padding:8px 12px;background-color:white;text-decoration:none;cursor:pointer;&:hover{background-color:", ";}"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].lightPrimary);
var AvatarMenuText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__AvatarMenuText",
  componentId: "u8bppa-4"
})(["margin-left:8px;font-size:16px;text-align:left;"]);

/***/ }),

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logo/Logo */ "./components/Logo/Logo.tsx");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu/Menu */ "./components/Header/Menu/Menu.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/Header/styled.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\Header\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var menuItems = [];
var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderHost"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["LogoWraepper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "beta")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["MenuWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    items: menuItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))));
};

/***/ }),

/***/ "./components/Header/Menu/Menu.tsx":
/*!*****************************************!*\
  !*** ./components/Header/Menu/Menu.tsx ***!
  \*****************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/Header/Menu/styled.ts");
/* harmony import */ var _AuthModal_AuthModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AuthModal/AuthModal */ "./components/AuthModal/AuthModal.tsx");
/* harmony import */ var _services_contexts_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/contexts/auth */ "./services/contexts/auth.ts");
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Avatar/Avatar */ "./components/Header/Avatar/Avatar.tsx");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\Header\\Menu\\Menu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Menu = function Menu(_ref) {
  var items = _ref.items;
  var user = Object(_services_contexts_auth__WEBPACK_IMPORTED_MODULE_4__["useUser"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(items[0]),
      activeMenu = _useState[0],
      setActiveMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, items.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      key: i,
      onClick: function onClick() {
        return setActiveMenu(item);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MenuLink"], {
      active: item === activeMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, item.text)));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["MenuLink"], {
    onClick: function onClick() {
      return setOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\u0432\u043E\u0439\u0442\u0438"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthModal_AuthModal__WEBPACK_IMPORTED_MODULE_3__["AuthModal"], {
    isOpen: isOpen,
    setOpen: setOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

/***/ }),

/***/ "./components/Header/Menu/styled.ts":
/*!******************************************!*\
  !*** ./components/Header/Menu/styled.ts ***!
  \******************************************/
/*! exports provided: MenuList, MenuItem, MenuLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuList", function() { return MenuList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLink", function() { return MenuLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var menuColor = '#bfbaba';
var activeColor = '#498ea5';
var MenuList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MenuList",
  componentId: "cq35pd-0"
})(["text-align:right;position:relative;display:flex;margin:0 auto;padding:0;list-style:none;"]);
var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MenuItem",
  componentId: "cq35pd-1"
})(["font-size:20px;margin:1em 0;cursor:pointer;font-family:'Neucha',cursive;position:relative;"]);
var MenuLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "styled__MenuLink",
  componentId: "cq35pd-2"
})(["position:relative;margin:0 1em;padding-right:0;padding-left:0;color:", ";text-decoration:none;transition:color 0.4s;&:before,&:after{-webkit-transform:scale3d(1,1,1);content:'';position:absolute;bottom:-7px;left:0;width:100%;height:4px;transform:scale3d(0,1,1);transform-origin:center left;transition:transform 0.4s cubic-bezier(0.22,0.61,0.36,1);}&:before{background:", ";transition-delay:0.4s;}&:after{background:", ";}&:hover{color:", ";&::before{transform:scale3d(1,1,1);transition-delay:0s;}}", ""], menuColor, menuColor, activeColor, menuColor, function (props) {
  return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:", ";&:hover{color:", ";}&:before,&:after{transform:scale3d(1,1,1);}&:before{transition-delay:0s;}"], activeColor, activeColor);
});

/***/ }),

/***/ "./components/Header/styled.ts":
/*!*************************************!*\
  !*** ./components/Header/styled.ts ***!
  \*************************************/
/*! exports provided: HeaderHost, HeaderContent, MenuWrapper, LogoWraepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderHost", function() { return HeaderHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWraepper", function() { return LogoWraepper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");


var HeaderHost = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__HeaderHost",
  componentId: "sc-1di319z-0"
})(["box-shadow:0 0 4px rgba(0,0,0,0.5);margin-bottom:24px;"]);
var HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__HeaderContent",
  componentId: "sc-1di319z-1"
})(["max-width:", ";margin:auto;padding:10px 20px;display:flex;justify-content:space-between;align-items:center;position:relative;justify-content:center;"], _constants__WEBPACK_IMPORTED_MODULE_1__["sizes"].siteWidth);
var MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MenuWrapper",
  componentId: "sc-1di319z-2"
})(["position:absolute;right:50px;"]);
var LogoWraepper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LogoWraepper",
  componentId: "sc-1di319z-3"
})([""]);

/***/ }),

/***/ "./components/Logo/Logo.tsx":
/*!**********************************!*\
  !*** ./components/Logo/Logo.tsx ***!
  \**********************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/Logo/styled.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\Logo\\Logo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-letters-l": "Bur",
    "data-letters-r": "ime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Burime")));
};



/***/ }),

/***/ "./components/Logo/styled.ts":
/*!***********************************!*\
  !*** ./components/Logo/styled.ts ***!
  \***********************************/
/*! exports provided: LogoWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var primaryColor = '#498ea5';
var secondaryColor = 'black';
var duration = '1s';
var LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LogoWrapper",
  componentId: "sc-1h7wqv-0"
})(["font-weight:400;text-transform:uppercase;font-size:46px;color:", ";outline:none;text-decoration:none;position:relative;line-height:1;display:inline-block;&::before,&::after{content:'';width:100%;height:2px;z-index:-1;background:", ";position:absolute;transform:scale3d(0,1,1);transition:transform ", ";}&::before{right:0;top:0;transform-origin:100% 50%;}&::after{left:0;bottom:0;transform-origin:0 50%;}span{font-family:'Fredericka the Great',cursive;font-weight:400;text-transform:uppercase;color:", ";padding:0.125em 0;position:relative;transition:color ", ";}span::before,span::after{position:absolute;color:", ";opacity:0;transition:transform ", ",opacity ", ";}span::before{content:attr(data-letters-l);left:0;transform:translate3d(-15px,0,0);}span::after{content:attr(data-letters-r);right:0;transform:translate3d(15px,0,0);}&:hover{color:", ";outline:0;&::before,&::after{transform:scale3d(1,1,1);}span{color:transparent;}span::before,span::after{opacity:1;transform:translate3d(0,0,0);}}"], primaryColor, secondaryColor, duration, primaryColor, duration, secondaryColor, duration, duration, secondaryColor);

/***/ }),

/***/ "./components/atoms/Button/Button.tsx":
/*!********************************************!*\
  !*** ./components/atoms/Button/Button.tsx ***!
  \********************************************/
/*! exports provided: Button, SubmitButton, ButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/atoms/Button/styled.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _styled__WEBPACK_IMPORTED_MODULE_1__["ButtonType"]; });

var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\atoms\\Button\\Button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Button = function Button(_ref) {
  var children = _ref.children,
      width = _ref.width,
      size = _ref.size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? _styled__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].primary : _ref$type,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ButtonHost"], {
    size: size,
    width: width,
    onClick: onClick,
    buttonType: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children);
};
var SubmitButton = function SubmitButton(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ButtonHost"], {
    buttonType: _styled__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].primary,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children);
};


/***/ }),

/***/ "./components/atoms/Button/styled.ts":
/*!*******************************************!*\
  !*** ./components/atoms/Button/styled.ts ***!
  \*******************************************/
/*! exports provided: ButtonType, ButtonHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonHost", function() { return ButtonHost; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");


var _rootPreset;



var ButtonType;

(function (ButtonType) {
  ButtonType[ButtonType["primary"] = 0] = "primary";
  ButtonType[ButtonType["white"] = 1] = "white";
  ButtonType[ButtonType["danger"] = 2] = "danger";
})(ButtonType || (ButtonType = {}));

var rootPreset = (_rootPreset = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_rootPreset, ButtonType.primary, Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:transparent;color:", ";border:2px solid ", ";&:hover{background-color:", ";color:white;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_rootPreset, ButtonType.white, Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:white;color:", ";border:2px solid ", ";&:hover{border-color:#0a4b61;color:#0a4b61;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_rootPreset, ButtonType.danger, Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:", ";color:white;border:none;&:hover{background-color:red;color:white;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].danger)), _rootPreset);
var sizePreset = {
  sm: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-size:16px;padding:8px 16px;"]),
  md: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-size:20px;padding:12px 24px;"])
};
var ButtonHost = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "styled__ButtonHost",
  componentId: "sc-1oqwi77-0"
})(["cursor:pointer;border-radius:3px;transition:0.5s all ease-out;font-family:'Nunito',sans-serif;", " ", " ", ""], function (_ref) {
  var buttonType = _ref.buttonType;
  return rootPreset[buttonType];
}, function (_ref2) {
  var size = _ref2.size;
  return sizePreset[size || 'md'];
}, function (props) {
  return props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:", "px;"], props.width);
});

/***/ }),

/***/ "./components/atoms/Section/Section.tsx":
/*!**********************************************!*\
  !*** ./components/atoms/Section/Section.tsx ***!
  \**********************************************/
/*! exports provided: Section, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/atoms/Section/styled.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\atoms\\Section\\Section.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Section = function Section(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["SectionContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children);
};
var Container = function Container(_ref2) {
  var children = _ref2.children,
      minHeight = _ref2.minHeight;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ContainerContent"], {
    minHeight: minHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "./components/atoms/Section/styled.ts":
/*!********************************************!*\
  !*** ./components/atoms/Section/styled.ts ***!
  \********************************************/
/*! exports provided: SectionContent, ContainerContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContent", function() { return SectionContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerContent", function() { return ContainerContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");


var SectionContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SectionContent",
  componentId: "sc-1kg3h3i-0"
})(["max-width:", ";margin:auto;"], _constants__WEBPACK_IMPORTED_MODULE_1__["sizes"].siteWidth);
var ContainerContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ContainerContent",
  componentId: "sc-1kg3h3i-1"
})(["min-height:", ";"], function (props) {
  return props.minHeight ? "".concat(props.minHeight, "px") : 'auto';
});

/***/ }),

/***/ "./components/atoms/Spinner/Spinner.tsx":
/*!**********************************************!*\
  !*** ./components/atoms/Spinner/Spinner.tsx ***!
  \**********************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\atoms\\Spinner\\Spinner.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var SpinnerBase = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Spinner__SpinnerBase",
  componentId: "sc-1vterhs-0"
})(["margin:16px;animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid grey;border-right:2px solid grey;border-bottom:2px solid grey;border-left:4px solid ", ";background:transparent;width:80px;height:80px;border-radius:50%;"], rotate360, _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);
var SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Spinner__SpinnerWrapper",
  componentId: "sc-1vterhs-1"
})(["display:flex;justify-content:center;"]);
var Spinner = function Spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerBase, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};

/***/ }),

/***/ "./components/atoms/Title/Title.tsx":
/*!******************************************!*\
  !*** ./components/atoms/Title/Title.tsx ***!
  \******************************************/
/*! exports provided: Title, RedTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedTitle", function() { return RedTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/atoms/Title/styled.ts");
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/enums */ "./constants/enums.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\atoms\\Title\\Title.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Title = function Title(_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? _constants_enums__WEBPACK_IMPORTED_MODULE_2__["Size"].md : _ref$size,
      underline = _ref.underline;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["TitleWrapper"], {
    size: size,
    underline: underline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};
var RedTitle = function RedTitle(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["RedTitleWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "./components/atoms/Title/styled.ts":
/*!******************************************!*\
  !*** ./components/atoms/Title/styled.ts ***!
  \******************************************/
/*! exports provided: TitleWrapper, RedTitleWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleWrapper", function() { return TitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedTitleWrapper", function() { return RedTitleWrapper; });
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../constants/enums */ "./constants/enums.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");



var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "styled__TitleWrapper",
  componentId: "sc-8bnp8l-0"
})(["font-size:32px;color:", ";text-align:center;margin-top:0;text-decoration:", ";margin-bottom:", ";"], _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, function (props) {
  return props.underline && 'underline';
}, function (props) {
  return props.size === _constants_enums__WEBPACK_IMPORTED_MODULE_0__["Size"].lg && '24px' || props.size === _constants_enums__WEBPACK_IMPORTED_MODULE_0__["Size"].md && '12px' || '8px';
});
var RedTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styled__RedTitleWrapper",
  componentId: "sc-8bnp8l-1"
})(["font-size:32px;color:", ";font-family:'Neucha',cursive;text-align:center;margin-bottom:16px;"], _constants__WEBPACK_IMPORTED_MODULE_2__["colors"].danger);

/***/ }),

/***/ "./components/atoms/styled.ts":
/*!************************************!*\
  !*** ./components/atoms/styled.ts ***!
  \************************************/
/*! exports provided: BurimeTitle, BurimeName, ActionsBlock, Action, OpenStyled, HeartEmpty, HeartFilled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurimeTitle", function() { return BurimeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurimeName", function() { return BurimeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsBlock", function() { return ActionsBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenStyled", function() { return OpenStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartEmpty", function() { return HeartEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartFilled", function() { return HeartFilled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _styled_icons_entypo_OpenBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/entypo/OpenBook */ "@styled-icons/entypo/OpenBook");
/* harmony import */ var _styled_icons_entypo_OpenBook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_entypo_OpenBook__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_remix_line_Heart2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-icons/remix-line/Heart2 */ "@styled-icons/remix-line/Heart2");
/* harmony import */ var _styled_icons_remix_line_Heart2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_remix_line_Heart2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_zondicons_Heart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-icons/zondicons/Heart */ "@styled-icons/zondicons/Heart");
/* harmony import */ var _styled_icons_zondicons_Heart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_zondicons_Heart__WEBPACK_IMPORTED_MODULE_4__);





var BurimeTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__BurimeTitle",
  componentId: "yihi3w-0"
})(["font-family:'Fredericka the Great',cursive;text-decoration:underline;font-size:32px;padding-bottom:8px;color:", ";", ""], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary, function (props) {
  return props.center && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["text-align:center;"]);
});
var BurimeName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__BurimeName",
  componentId: "yihi3w-1"
})(["font-size:16px;text-align:right;margin-bottom:8px;"]);
var ActionsBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ActionsBlock",
  componentId: "yihi3w-2"
})(["display:flex;"]);
var Action = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Action",
  componentId: "yihi3w-3"
})(["padding-left:8px;color:", ";"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);
var cursorIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["cursor:pointer;color:", ";"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);
var OpenStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_entypo_OpenBook__WEBPACK_IMPORTED_MODULE_2__["OpenBook"]).withConfig({
  displayName: "styled__OpenStyled",
  componentId: "yihi3w-4"
})(["", ""], cursorIcon);
var HeartEmpty = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_remix_line_Heart2__WEBPACK_IMPORTED_MODULE_3__["Heart2"]).withConfig({
  displayName: "styled__HeartEmpty",
  componentId: "yihi3w-5"
})(["", ""], cursorIcon);
var HeartFilled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_zondicons_Heart__WEBPACK_IMPORTED_MODULE_4__["Heart"]).withConfig({
  displayName: "styled__HeartFilled",
  componentId: "yihi3w-6"
})(["", ""], cursorIcon);

/***/ }),

/***/ "./components/molecules/Footer/Footer.tsx":
/*!************************************************!*\
  !*** ./components/molecules/Footer/Footer.tsx ***!
  \************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_entypo_social_VkWithCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/entypo-social/VkWithCircle */ "@styled-icons/entypo-social/VkWithCircle");
/* harmony import */ var _styled_icons_entypo_social_VkWithCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_entypo_social_VkWithCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Section_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Section/Section */ "./components/atoms/Section/Section.tsx");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\molecules\\Footer\\Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FooterSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterSection",
  componentId: "binxht-0"
})(["border-top:1px solid silver;background-color:#ececec;margin-top:20px;flex:0 0 auto;"]);
var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "binxht-1"
})(["display:flex;font-size:20px;padding:20px;"]);
var FooterLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterLeft",
  componentId: "binxht-2"
})(["flex:1 1 20%;"]);
var FooterRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterRight",
  componentId: "binxht-3"
})(["flex:1 1 80%;text-align:right;"]);
var FooterIconLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Footer__FooterIconLink",
  componentId: "binxht-4"
})(["margin-left:12px;"]);
var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Section_Section__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\xA9 2020"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u0414\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u0441\u0432\u043E\u0438\u043C\u0438 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u0438 \u0438\u0434\u0435\u044F\u043C\u0438, \u0434\u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043E\u0431 \u0438\u0433\u0440\u0430\u0445 \u0432 \u0412\u041A.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterIconLink, {
    href: "https://vk.com/club194477253",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_icons_entypo_social_VkWithCircle__WEBPACK_IMPORTED_MODULE_2__["VkWithCircle"], {
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))))));
};

/***/ }),

/***/ "./components/molecules/MySlider/MySlider.tsx":
/*!****************************************************!*\
  !*** ./components/molecules/MySlider/MySlider.tsx ***!
  \****************************************************/
/*! exports provided: MySlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySlider", function() { return MySlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/molecules/MySlider/styled.tsx");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timer */ "./components/molecules/MySlider/Timer.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\molecules\\MySlider\\MySlider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MySlider = function MySlider(_ref) {
  var children = _ref.children,
      autoSlide = _ref.autoSlide;
  var childWidth = 100;
  var numberOfChildren = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      activeCard = _useState[0],
      setActiveCard = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      autoSlider = _useState2[0],
      setAutoSlider = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = new _Timer__WEBPACK_IMPORTED_MODULE_2__["Timer"](goRight, autoSlide);
    setAutoSlider(timer);
    timer.start();
    return function () {
      timer.stop();
    };
  }, [activeCard]);
  var goLeft = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    if (event && event.preventDefault) event.preventDefault();
    var nextInitialCard = activeCard < 1 ? numberOfChildren - 1 : activeCard - 1;
    setActiveCard(nextInitialCard);
  }, [activeCard]);
  var goRight = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (event && event.preventDefault) event.preventDefault();
    var nextInitialCard = activeCard >= numberOfChildren - 1 ? 0 : activeCard + 1;
    setActiveCard(nextInitialCard);
  }, [activeCard]);

  var renderChildren = function renderChildren(children) {
    return react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["CardWrapper"], {
        key: index,
        width: childWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, child);
    });
  };

  var renderDots = function renderDots() {
    var array = new Array(numberOfChildren);
    return array.map(function (index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Dot"], {
        key: index,
        active: index === activeCard,
        onClick: function onClick() {
          return setActiveCard(index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onMouseLeave: function onMouseLeave() {
      return autoSlider && autoSlider.start();
    },
    onMouseEnter: function onMouseEnter() {
      return autoSlider && autoSlider.stop();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["SliderWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["LeftArrow"], {
    onClick: goLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["SliderTrack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["SliderList"], {
    translateX: activeCard * childWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, renderChildren(children))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["RightArrow"], {
    onClick: goRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["DotsWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, renderDots()));
};

/***/ }),

/***/ "./components/molecules/MySlider/Timer.ts":
/*!************************************************!*\
  !*** ./components/molecules/MySlider/Timer.ts ***!
  \************************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");


var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Timer);

    this.callback = callback;
    this.delay = delay;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Timer, [{
    key: "stop",
    value: function stop() {
      clearInterval(this.timerId);
    }
  }, {
    key: "start",
    value: function start() {
      clearInterval(this.timerId);
      this.timerId = setInterval(this.callback, this.delay);
    }
  }]);

  return Timer;
}();

/***/ }),

/***/ "./components/molecules/MySlider/styled.tsx":
/*!**************************************************!*\
  !*** ./components/molecules/MySlider/styled.tsx ***!
  \**************************************************/
/*! exports provided: SliderList, SliderTrack, SliderWrapper, CardWrapper, LeftArrow, RightArrow, DotsWrapper, Dot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderList", function() { return SliderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderTrack", function() { return SliderTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderWrapper", function() { return SliderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftArrow", function() { return LeftArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightArrow", function() { return RightArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotsWrapper", function() { return DotsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dot", function() { return Dot; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SliderList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SliderList",
  componentId: "sc-2y45sy-0"
})(["transform:translateX(", ");transition:transform 0.6s ease-in-out;"], function (_ref) {
  var translateX = _ref.translateX;
  return translateX ? "-".concat(translateX, "%") : '0%';
});
var SliderTrack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SliderTrack",
  componentId: "sc-2y45sy-1"
})(["width:auto;position:relative;height:auto;width:100%;display:inline-block;white-space:nowrap;overflow:hidden;vertical-align:top;"]);
var SliderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SliderWrapper",
  componentId: "sc-2y45sy-2"
})(["position:relative;padding:", ";margin:", ";"], function (props) {
  return props.padding || '0px 0px';
}, function (props) {
  return props.margin || '0px 0px';
});
var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__CardWrapper",
  componentId: "sc-2y45sy-3"
})(["outline:none;width:", ";min-height:1px;margin:0;padding:0;display:inline-block;vertical-align:top;white-space:normal;"], function (_ref2) {
  var width = _ref2.width;
  return "".concat(width, "%");
});
var LeftArrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styled__LeftArrow",
  componentId: "sc-2y45sy-4"
})(["color:#000;position:absolute;margin-left:3px;margin-top:11px;width:16px;height:2px;background-color:#000000;left:0px;top:calc(50% - 5px);border:0;cursor:pointer;outline:none;z-index:1;:before{content:'';position:absolute;left:1px;top:-5px;width:10px;height:10px;border-top:solid 2px #000000;border-right:solid 2px #000000;transform:rotate(-135deg);}:after{content:'';position:absolute;}"]);
var RightArrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styled__RightArrow",
  componentId: "sc-2y45sy-5"
})(["color:#000;position:absolute;margin-left:2px;margin-top:11px;width:16px;height:1px;background-color:#000000;right:0px;top:calc(50% - 5px);border:0;cursor:pointer;outline:none;:before{content:'';position:absolute;right:1px;top:-5px;width:10px;height:10px;border-top:solid 2px #000000;border-right:solid 2px #000000;transform:rotate(45deg);}:after{content:'';position:absolute;}"]);
var DotsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "styled__DotsWrapper",
  componentId: "sc-2y45sy-6"
})(["display:block;list-style:none;text-align:center;padding:0px;margin:0px;"]);
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "styled__Dot",
  componentId: "sc-2y45sy-7"
})(["display:inline-block;pointer-events:none;button{pointer-events:all;border:0;background:0 0;cursor:pointer;font-size:1.8em;line-height:1.2em;margin:0 5px;", ":hover{color:#000000;}:focus{outline:none;}}"], function (_ref3) {
  var active = _ref3.active;
  return active ? 'color: #000000;' : 'color: #E5E5E5;';
});

/***/ }),

/***/ "./components/molecules/Rules/Rules.tsx":
/*!**********************************************!*\
  !*** ./components/molecules/Rules/Rules.tsx ***!
  \**********************************************/
/*! exports provided: Rules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rules", function() { return Rules; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slide_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Slide/Slide */ "./components/molecules/Slide/Slide.tsx");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\molecules\\Rules\\Rules.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var RulesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Rules__RulesWrapper",
  componentId: "sc-1yp1fpd-0"
})(["margin-bottom:12px;"]);
var rulesFont = 23;
var Rules = function Rules() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RulesWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide_Slide__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
    fontSize: rulesFont,
    slideNumber: 1,
    right: true,
    img: "/rules/step_1.jpg",
    text: "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C\u0442\u0435, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043B\u0438\u0441\u0442 \u0431\u0443\u043C\u0430\u0433\u0438, 2 \u0440\u0443\u0447\u043A\u0438 \u0438 \u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C \u0438 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide_Slide__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
    fontSize: rulesFont,
    slideNumber: 2,
    img: "/rules/step_2.jpg",
    text: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 2 \u0441\u0442\u0440\u043E\u0447\u043A\u0438 \u043D\u0430 \u0437\u0430\u0434\u0430\u043D\u043D\u0443\u044E \u0442\u0435\u043C\u0443",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide_Slide__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
    fontSize: rulesFont,
    slideNumber: 3,
    right: true,
    img: "/rules/step_3.jpg",
    text: "\u0417\u0430\u0442\u0435\u043C \u0441\u043E\u0433\u043D\u0438\u0442\u0435 \u043B\u0438\u0441\u0442\u043E\u043A \u0442\u0430\u043A \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u043B\u043E \u0432\u0438\u0434\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0443 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u0438\u0433\u0440\u043E\u043A\u0443",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide_Slide__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
    fontSize: rulesFont,
    slideNumber: 4,
    img: "/rules/step_4.jpg",
    text: "\u0412\u0442\u043E\u0440\u043E\u0439 \u0438\u0433\u0440\u043E\u043A \u0432\u0438\u0434\u0438\u0442 \u0432\u0430\u0448\u0443 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0438 \u043F\u0438\u0448\u0435\u0442 \u0441\u0432\u043E\u0438 \u0434\u0432\u0435 \u0441\u0442\u0440\u043E\u043A\u0438, \u0441\u0442\u0430\u0440\u0430\u044F\u0441\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0440\u0438\u0444\u043C\u043E\u0432\u0430\u0442\u044C \u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0438\u0445\u043E\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide_Slide__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
    fontSize: rulesFont,
    slideNumber: 5,
    right: true,
    img: "/rules/step_5.jpg",
    text: "\u0422\u0430\u043A \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u043A\u0430 \u043D\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F \u0431\u0443\u043C\u0430\u0433\u0430 \u0438\u043B\u0438 \u043E\u0431\u0430 \u0438\u0433\u0440\u043E\u043A\u0430 \u043D\u0435 \u0440\u0435\u0448\u0430\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide_Slide__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
    fontSize: rulesFont,
    slideNumber: 6,
    img: "/rules/step_6.jpg",
    text: "\u0422\u0435\u043F\u0435\u0440\u044C \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0438\u0442\u0435 \u043B\u0438\u0441\u0442\u043E\u043A - \u043F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u0447\u0442\u043E \u0443 \u0412\u0430\u0441 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0432 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u043C \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0435. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u0435\u0440\u0435\u0434 \u0432\u0430\u043C \u0431\u0435\u0437 \u0434\u0432\u0443\u0445 \u043C\u0438\u043D\u0443\u0442 \u0448\u0435\u0434\u0435\u0432\u0440. ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

/***/ }),

/***/ "./components/molecules/Slide/Slide.tsx":
/*!**********************************************!*\
  !*** ./components/molecules/Slide/Slide.tsx ***!
  \**********************************************/
/*! exports provided: Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/molecules/Slide/styled.ts");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\molecules\\Slide\\Slide.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Slide = function Slide(_ref) {
  var title = _ref.title,
      right = _ref.right,
      slideNumber = _ref.slideNumber,
      text = _ref.text,
      img = _ref.img,
      fontSize = _ref.fontSize;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["SlideWrapper"], {
    right: right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ImageBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
    fontSize: fontSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, slideNumber && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["RuleNumber"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, slideNumber), title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["SliderTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, text)));
};

/***/ }),

/***/ "./components/molecules/Slide/styled.ts":
/*!**********************************************!*\
  !*** ./components/molecules/Slide/styled.ts ***!
  \**********************************************/
/*! exports provided: SlideWrapper, SlideBlock, ImageBlock, RuleNumber, TextBlock, SliderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWrapper", function() { return SlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideBlock", function() { return SlideBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlock", function() { return ImageBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleNumber", function() { return RuleNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBlock", function() { return TextBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderTitle", function() { return SliderTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");


var SlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SlideWrapper",
  componentId: "sc-10anrng-0"
})(["display:flex;height:500px;flex-direction:column;align-items:center;margin-bottom:12px;@media ", "{height:400px;flex-direction:", ";}"], _constants__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].mobile, function (props) {
  return props.right ? 'row-reverse' : 'row';
});
var SlideBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SlideBlock",
  componentId: "sc-10anrng-1"
})(["height:50%;width:60%;margin:10px;@media ", "{width:50%;height:100%;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].mobile);
var ImageBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(SlideBlock).withConfig({
  displayName: "styled__ImageBlock",
  componentId: "sc-10anrng-2"
})(["padding:10px;border:solid 1px silver;& img{width:100%;height:100%;}"]);
var RuleNumber = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__RuleNumber",
  componentId: "sc-10anrng-3"
})(["border-radius:50%;font-size:44px;width:42px;height:42px;padding:8px;background:#fff;border:2px solid ", ";color:", ";display:flex;justify-content:center;align-items:center;margin-bottom:12px;"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary, _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);
var TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(SlideBlock).withConfig({
  displayName: "styled__TextBlock",
  componentId: "sc-10anrng-4"
})(["padding:16px;font-size:20px;align-items:center;display:flex;flex-flow:column;justify-content:center;text-align:center;", " @media ", "{font-size:", ";}"], _constants__WEBPACK_IMPORTED_MODULE_1__["fonts"].nunito, _constants__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].mobile, function (_ref) {
  var fontSize = _ref.fontSize;
  return fontSize ? "".concat(fontSize, "px") : '32px';
});
var SliderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SliderTitle",
  componentId: "sc-10anrng-5"
})(["font-size:40px;color:", ";", " @media ", "{font-size:52px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary, _constants__WEBPACK_IMPORTED_MODULE_1__["fonts"].neucha, _constants__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].mobile);

/***/ }),

/***/ "./components/organizms/AllBurimeList/AllBurimeList.tsx":
/*!**************************************************************!*\
  !*** ./components/organizms/AllBurimeList/AllBurimeList.tsx ***!
  \**************************************************************/
/*! exports provided: AllBurimeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBurimeList", function() { return AllBurimeList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_contexts_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/contexts/auth */ "./services/contexts/auth.ts");
/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Title/Title */ "./components/atoms/Title/Title.tsx");
/* harmony import */ var _services_api_burime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api/burime */ "./services/api/burime.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atoms_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/styled */ "./components/atoms/styled.ts");
/* harmony import */ var _services_api_likes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/api/likes */ "./services/api/likes.ts");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-data-table-component */ "react-data-table-component");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _atoms_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/Spinner/Spinner */ "./components/atoms/Spinner/Spinner.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");



var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\organizms\\AllBurimeList\\AllBurimeList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var RowsPerPage = 20;

var prepareRows = function prepareRows(burimes, userEmail) {
  return burimes.map(function (_ref) {
    var id = _ref.id,
        likes = _ref.likes,
        theme = _ref.theme,
        user1 = _ref.user1,
        user2 = _ref.user2,
        createdAt = _ref.createdAt;
    return {
      id: id.toString(),
      burimeId: id,
      theme: theme,
      user1: user1.name,
      opponent: user2.name,
      iLike: likes.some(function (like) {
        return like.user.email === userEmail;
      }),
      likes: likes.length,
      createdAt: dayjs__WEBPACK_IMPORTED_MODULE_7___default()(createdAt).format('DD/MM/YYYY')
    };
  });
};

var mobileBreakpoint = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_constants__WEBPACK_IMPORTED_MODULE_12__["breakpoints"].breakpointSizes.mobile, 10);

var prepareColumns = function prepareColumns(_ref2) {
  var onOpen = _ref2.onOpen,
      onLike = _ref2.onLike,
      onDislike = _ref2.onDislike;
  return [{
    name: 'Заголовок',
    selector: 'theme',
    sortable: true
  }, {
    name: 'Вызвал',
    selector: 'user1',
    sortable: true,
    right: true,
    hide: mobileBreakpoint
  }, {
    name: 'Принял',
    selector: 'opponent',
    sortable: true,
    right: true,
    hide: mobileBreakpoint
  }, {
    name: 'Дата',
    selector: 'createdAt',
    sortable: true,
    right: true
  }, {
    name: 'Нравится',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_styled__WEBPACK_IMPORTED_MODULE_8__["ActionsBlock"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, row.iLike ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_styled__WEBPACK_IMPORTED_MODULE_8__["HeartFilled"], {
        onClick: function onClick() {
          return onDislike(row.burimeId);
        },
        width: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_styled__WEBPACK_IMPORTED_MODULE_8__["HeartEmpty"], {
        onClick: function onClick() {
          return onLike(row.burimeId);
        },
        width: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_styled__WEBPACK_IMPORTED_MODULE_8__["Action"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, row.likes));
    },
    button: true,
    right: true
  }, {
    name: 'Прочесть',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_styled__WEBPACK_IMPORTED_MODULE_8__["OpenStyled"], {
        width: 16,
        onClick: function onClick() {
          return onOpen(row.burimeId);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      });
    },
    button: true,
    right: true
  }];
};

var setLike = function setLike(isLike, burimes, burimeId, userEmail) {
  var burime = burimes.find(function (burime) {
    return burime.id === burimeId;
  });

  if (isLike) {
    burime.likes.push({
      user: {
        email: userEmail
      }
    });
  } else {
    burime.likes = burime.likes.filter(function (burime) {
      return burime.user.email !== userEmail;
    });
  }

  return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(burimes);
};

var AllBurimeList = function AllBurimeList() {
  var user = Object(_services_contexts_auth__WEBPACK_IMPORTED_MODULE_4__["useUser"])();

  if (!user) {
    return null;
  }

  Object(_services_api_burime__WEBPACK_IMPORTED_MODULE_6__["useActiveBurime"])();

  var _useBurimesPage = Object(_services_api_burime__WEBPACK_IMPORTED_MODULE_6__["useBurimesPage"])({
    page: 1,
    size: RowsPerPage
  }),
      loading = _useBurimesPage.loading,
      burimes = _useBurimesPage.burimes,
      setBurimes = _useBurimesPage.setBurimes,
      total = _useBurimesPage.total,
      setPage = _useBurimesPage.setPage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();

  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState);

  var onOpen = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (burimeId) {
    return Object(_services_api_burime__WEBPACK_IMPORTED_MODULE_6__["goToBurime"])(burimeId);
  }, []);
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (burimeId) {
    return Object(_services_api_likes__WEBPACK_IMPORTED_MODULE_9__["like"])(burimeId).then(function () {
      return setBurimes(setLike(true, burimes, burimeId, user.email));
    });
  }, [burimes]);
  var onDislike = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (burimeId) {
    return Object(_services_api_likes__WEBPACK_IMPORTED_MODULE_9__["dislike"])(burimeId).then(function () {
      return setBurimes(setLike(false, burimes, burimeId, user.email));
    });
  }, [burimes]);
  var rows = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return prepareRows(burimes, user.email);
  }, [burimes]);
  var columns = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return prepareColumns({
      onOpen: onOpen,
      onLike: onLike,
      onDislike: onDislike
    });
  }, [onOpen, onLike, onDislike]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "\u0412\u0441\u0435 \u0431\u0443\u0440\u0438\u043C\u0435"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_10___default.a, {
    noHeader: true,
    columns: columns,
    data: rows,
    progressPending: loading,
    progressComponent: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }),
    pagination: true,
    paginationServer: true,
    paginationTotalRows: total,
    paginationRowsPerPageOptions: [RowsPerPage],
    paginationPerPage: RowsPerPage,
    onChangePage: function onChangePage(page) {
      return setPage(page);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }));
};

/***/ }),

/***/ "./components/organizms/Landing/Landing.tsx":
/*!**************************************************!*\
  !*** ./components/organizms/Landing/Landing.tsx ***!
  \**************************************************/
/*! exports provided: Landing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return Landing; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/organizms/Landing/styled.ts");
/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Title/Title */ "./components/atoms/Title/Title.tsx");
/* harmony import */ var _molecules_MySlider_MySlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../molecules/MySlider/MySlider */ "./components/molecules/MySlider/MySlider.tsx");
/* harmony import */ var _molecules_Rules_Rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/Rules/Rules */ "./components/molecules/Rules/Rules.tsx");
/* harmony import */ var _molecules_Slide_Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/Slide/Slide */ "./components/molecules/Slide/Slide.tsx");

var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\organizms\\Landing\\Landing.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var settings = {
  autoSlide: 3000
};
var Landing = function Landing() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\u0418\u0433\u0440\u0430\u0435\u043C \u0432 \u0431\u0443\u0440\u0438\u043C\u0435 \u0432\u043C\u0435\u0441\u0442\u0435!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_MySlider_MySlider__WEBPACK_IMPORTED_MODULE_4__["MySlider"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Slide_Slide__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    img: "/fun.jpg",
    title: "\u042D\u0442\u043E \u0432\u0435\u0441\u0435\u043B\u043E",
    text: "\u0418\u0433\u0440\u0430\u0439 \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Slide_Slide__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    right: true,
    img: "/idea.jpg",
    title: "\u042D\u0442\u043E \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E",
    text: "\u041D\u0435 \u0433\u0440\u0430\u043D\u0438\u0446 \u0434\u043B\u044F \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438 \u043A\u0440\u043E\u043C\u0435 \u0440\u0438\u0444\u043C \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Slide_Slide__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    img: "/words1.jpg",
    title: "\u042D\u0442\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E",
    text: "\u041B\u0435\u043A\u0441\u0438\u043A\u043E\u043D \u0438 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0432\u043E\u043C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Slide_Slide__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    right: true,
    img: "/heart.jpg",
    title: "\u042D\u0442\u043E \u0430\u0440\u0442-\u0442\u0435\u0440\u0430\u043F\u0438\u044F",
    text: "\u0420\u0430\u0437\u0431\u0435\u0440\u0438\u0441\u044C \u0432 \u0441\u0435\u0431\u0435, \u0432\u044B\u043D\u0438\u043C\u0430\u044F \u0438\u0437 \u0433\u043E\u043B\u043E\u0432\u044B \u0441\u0432\u043E\u0438 \u0441\u043B\u043E\u0432\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Slide_Slide__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    img: "/poetry.jpg",
    title: "\u042D\u0442\u043E \u043F\u043E\u044D\u0437\u0438\u044F",
    text: "\u0423\u0447\u0438\u043C\u0441\u044F \u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0442\u0438\u0445\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Slide_Slide__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    right: true,
    img: "/words5.jpg",
    title: "\u042D\u0442\u043E \u043F\u043E-\u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443",
    text: "\u041F\u0438\u0448\u0438\u0442\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0445\u0438\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0411\u0443\u0440\u0438\u043C\u0435"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u0411\u0443\u0440\u0438\u043C\u0435 - \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0441\u043B\u043E\u0432\u043E\u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u0411\u0443\u0440\u0438\u043C\u0435 (\u0444\u0440. bouts-rim\xE9s \xAB\u0440\u0438\u0444\u043C\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0446\u044B\xBB) \u2014 \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430\u044F \u0438\u0433\u0440\u0430, \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0432 \u0441\u043E\u0447\u0438\u043D\u0435\u043D\u0438\u0438 \u0441\u0442\u0438\u0445\u043E\u0432, \u0447\u0430\u0449\u0435 \u0448\u0443\u0442\u043E\u0447\u043D\u044B\u0445, \u043D\u0430 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0440\u0438\u0444\u043C\u044B, \u0438\u043D\u043E\u0433\u0434\u0430 \u0435\u0449\u0451 \u0438 \u043D\u0430 \u0437\u0430\u0434\u0430\u043D\u043D\u0443\u044E \u0442\u0435\u043C\u0443. \u0418\u043D\u043E\u0433\u0434\u0430 \u043A \u0431\u0443\u0440\u0438\u043C\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0442 \u0438 \u0434\u0440\u0443\u0433\u0443\u044E \u0438\u0433\u0440\u0443, \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u0443\u044E \u0442\u0430\u043A\u0436\u0435 \xAB\u0438\u0433\u0440\u043E\u0439 \u0432 \u0447\u0435\u043F\u0443\u0445\u0443\xBB: \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A \u0438\u043B\u0438 \u0434\u0430\u0436\u0435 \u0441\u0442\u0440\u043E\u0444 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442 \u043B\u0438\u0441\u0442\u043E\u043A \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0443 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F, \u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0432\u0438\u0434\u0438\u043C\u044B\u043C\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0438\u0437 \u043D\u0438\u0445."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u0425\u043E\u0442\u044C \u0438 \u0431\u0443\u0440\u0438\u043C\u0435 \u0438\u0433\u0440\u0430 \u043D\u0435\u0441\u0435\u0440\u044C\u0435\u0437\u043D\u0430\u044F, \u043D\u043E \u0443 \u043D\u0435\u0435 \u0435\u0441\u0442\u044C \u0441\u0432\u043E\u0438 \u043F\u043B\u044E\u0441\u044B: \u043E\u043D\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0445\u043E\u0440\u043E\u0448\u0438\u043C \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044F\u043C \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0438 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0442\u044C \u0441\u0430\u043C\u043E\u0446\u0435\u043D\u0437\u0443\u0440\u0443, \u0432\u043E\u0441\u043F\u0438\u0442\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u0432\u044B\u043A\u0438 \u0440\u0438\u0444\u043C\u043E\u0432\u043A\u0438 \u0438 \u0437\u0430\u043A\u0430\u043B\u044F\u0435\u0442 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442\u044F\u043C\u0438. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043A\u043E\u043C\u0443-\u0442\u043E \u044D\u0442\u0430 \u0438\u0433\u0440\u0430 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0442\u0443\u043F\u0438\u043A\u0430 \u0438\u043B\u0438 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u043C \u043D\u043E\u0432\u044B\u0445 \u0438\u0434\u0435\u0439 \u0438 \u0440\u0438\u0444\u043C."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    underline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\u0418\u0433\u0440\u0430\u0439\u0442\u0435 \u0432 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044C!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingPromo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0444\u0430\u043A\u0442\u044B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingBlocks"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u0411\u0443\u0440\u0438\u043C\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C\u044E \u0443 \u043F\u043E\u044D\u0442\u043E\u0432 XX \u0432\u0435\u043A\u0430 (\u0411\u0440\u0435\u0442\u043E\u043D, \u042D\u043B\u044E\u0430\u0440, \u0410\u0440\u0430\u0433\u043E\u043D)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u0411\u0443\u0440\u0438\u043C\u0435 \u0432\u0445\u043E\u0434\u0438\u043B\u043E \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u0432 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u044B \u041A\u0412\u041D."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u0418\u0433\u0440\u0443 \u0432 \u0431\u0443\u0440\u0438\u043C\u0435 \u0441\u0442\u0430\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432 \u0441\u043E\u0441\u0442\u0430\u0432 \u0442\u0440\u0435\u043D\u0438\u043D\u0433\u043E\u0432 \u043C\u043D\u043E\u0433\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LandingBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "\u042D\u0442\u0430 \u0438\u0433\u0440\u0430 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C \u043D\u0430\u0445\u043E\u0434\u0447\u0438\u0432\u043E\u0441\u0442\u044C, \u0432\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u043E \u044E\u043C\u043E\u0440\u0430, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0441\u0432\u044F\u0437\u0438 \u043C\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u043D\u044B\u043C\u0438, \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434, \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C \u043B\u0435\u043A\u0441\u0438\u043A\u043E\u043D."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Rules_Rules__WEBPACK_IMPORTED_MODULE_5__["Rules"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
};

/***/ }),

/***/ "./components/organizms/Landing/styled.ts":
/*!************************************************!*\
  !*** ./components/organizms/Landing/styled.ts ***!
  \************************************************/
/*! exports provided: LandingItem, LandingWrapper, LandingPoint, LandingPromo, LandingBlocks, LandingBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingItem", function() { return LandingItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingWrapper", function() { return LandingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPoint", function() { return LandingPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPromo", function() { return LandingPromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingBlocks", function() { return LandingBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingBlock", function() { return LandingBlock; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./constants/index.ts");


var LandingItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LandingItem",
  componentId: "sc-1idijhf-0"
})(["text-align:center;padding:12px 0;"]);
var LandingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LandingWrapper",
  componentId: "sc-1idijhf-1"
})(["padding:0 12px;"]);
var LandingPoint = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LandingPoint",
  componentId: "sc-1idijhf-2"
})(["padding:0 12px;"]);
var LandingPromo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LandingPromo",
  componentId: "sc-1idijhf-3"
})(["background-color:#ececec;padding:24px;margin:24px 0;", ""], _constants__WEBPACK_IMPORTED_MODULE_1__["shadow"].simple);
var LandingBlocks = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LandingBlocks",
  componentId: "sc-1idijhf-4"
})(["display:flex;flex-direction:column;"]);
var LandingBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LandingBlock",
  componentId: "sc-1idijhf-5"
})(["margin-bottom:12px;:before{content:'';display:inline-block;width:12px;height:12px;border-radius:6px;background-color:", ";margin-right:12px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);

/***/ }),

/***/ "./components/organizms/Layout/Layout.tsx":
/*!************************************************!*\
  !*** ./components/organizms/Layout/Layout.tsx ***!
  \************************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var butter_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! butter-toast */ "butter-toast");
/* harmony import */ var butter_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(butter_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Header/Header */ "./components/Header/Header.tsx");
/* harmony import */ var _atoms_Section_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/Section/Section */ "./components/atoms/Section/Section.tsx");
/* harmony import */ var _services_contexts_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/contexts/auth */ "./services/contexts/auth.ts");
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/socket */ "./services/socket.tsx");
/* harmony import */ var _Landing_Landing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Landing/Landing */ "./components/organizms/Landing/Landing.tsx");
/* harmony import */ var _molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../molecules/Footer/Footer */ "./components/molecules/Footer/Footer.tsx");

var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\components\\organizms\\Layout\\Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    html, body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n        font-size: 20px;\n        font-family: 'Nunito', sans-serif;\n    }\n    #__next{\n        height: 100%;\n    }\n    a {\n        color: black;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
var SiteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Layout__SiteWrapper",
  componentId: "sc-12g38hs-0"
})(["display:flex;flex-direction:column;min-height:100%;"]);
var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Layout__MainSection",
  componentId: "sc-12g38hs-1"
})(["flex:1 0 auto;"]);
var Layout = function Layout(_ref) {
  var children = _ref.children;
  var user = Object(_services_contexts_auth__WEBPACK_IMPORTED_MODULE_7__["useUser"])();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services_socket__WEBPACK_IMPORTED_MODULE_8__["SocketProvider"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u0411\u0443\u0440\u0438\u043C\u0435"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Neucha&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "favicon/favicon-32x32.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "favicon/favicon-16x16.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "favicon/site.webmanifest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SiteWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Section_Section__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, user ? children : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Landing_Landing__WEBPACK_IMPORTED_MODULE_9__["Landing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(butter_toast__WEBPACK_IMPORTED_MODULE_4___default.a, {
    timeout: 3000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }));
};

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: isClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
var isClient = false;

/***/ }),

/***/ "./constants/animations.ts":
/*!*********************************!*\
  !*** ./constants/animations.ts ***!
  \*********************************/
/*! exports provided: slideUpCss, slider, fade, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUpCss", function() { return slideUpCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var slideUpCss = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["opacity:0;transform:scale(0.9) translateY(-10px);transition:opacity 300ms ease-out 100ms,transform 300ms ease-out 100ms;&.enter-active{opacity:1;transform:scale(1) translateY(0);}&.enter-done{opacity:1;transform:scale(1) translateY(0);}&.exit-active{opacity:0;transform:scale(0.9) translateY(10px);}&.exit-done{display:none;}"]);
var slider = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["height:0;transition:height 200ms ease-in;&.enter-done{height:500px;}&.exit-done{display:none;}"]);
var fade = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["opacity:0;display:none;transition:opacity 500ms ease-in;&.enter{display:block;}&.enter-done{display:block;opacity:1;}"]);
var fadeOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["transition:opacity 500ms ease-in;opacity:1;&.enter{opacity:0;}&.enter-done{display:none;}"]);

/***/ }),

/***/ "./constants/breakpoints.ts":
/*!**********************************!*\
  !*** ./constants/breakpoints.ts ***!
  \**********************************/
/*! exports provided: breakpointSizes, mobile, laptop, desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointSizes", function() { return breakpointSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile", function() { return mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "laptop", function() { return laptop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktop", function() { return desktop; });
var breakpointSizes = {
  mobile: '720px',
  laptop: '1024px',
  desktop: '1280px'
};
var mobile = "(min-width: ".concat(breakpointSizes.mobile, ")");
var laptop = "(min-width: ".concat(breakpointSizes.laptop, ")");
var desktop = "(min-width: ".concat(breakpointSizes.desktop, ")");

/***/ }),

/***/ "./constants/colors.ts":
/*!*****************************!*\
  !*** ./constants/colors.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  primary: '#498ea5',
  plaseholder: '#498ea5',
  lightPrimary: '#d0f3ff',
  textPrimary: '#ffffff',
  secondary: '#e45151',
  danger: '#e45151',
  grey: '#111111'
});

/***/ }),

/***/ "./constants/enums.ts":
/*!****************************!*\
  !*** ./constants/enums.ts ***!
  \****************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
var Size;

(function (Size) {
  Size[Size["sm"] = 0] = "sm";
  Size[Size["md"] = 1] = "md";
  Size[Size["lg"] = 2] = "lg";
})(Size || (Size = {}));

/***/ }),

/***/ "./constants/fonts.ts":
/*!****************************!*\
  !*** ./constants/fonts.ts ***!
  \****************************/
/*! exports provided: fredericka, nunito, neucha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fredericka", function() { return fredericka; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nunito", function() { return nunito; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neucha", function() { return neucha; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var fredericka = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:'Fredericka the Great',cursive;"]);
var nunito = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:'Nunito',sans-serif;"]);
var neucha = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:'Neucha',cursive;"]);

/***/ }),

/***/ "./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/*! exports provided: colors, sizes, animations, shadow, fonts, breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./constants/colors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes */ "./constants/sizes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return _sizes__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shadow */ "./constants/shadow.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return _shadow__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./constants/animations.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "animations", function() { return _animations__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts */ "./constants/fonts.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return _fonts__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breakpoints */ "./constants/breakpoints.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_5__; });








/***/ }),

/***/ "./constants/shadow.ts":
/*!*****************************!*\
  !*** ./constants/shadow.ts ***!
  \*****************************/
/*! exports provided: simple, small */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple", function() { return simple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "small", function() { return small; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var simple = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["box-shadow:0 0 10px rgba(0,0,0,0.5);"]);
var small = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["box-shadow:0 0 5px rgba(0,0,0,0.4);"]);

/***/ }),

/***/ "./constants/sizes.ts":
/*!****************************!*\
  !*** ./constants/sizes.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  siteWidth: '1040px'
});

/***/ }),

/***/ "./constants/socketEvents.ts":
/*!***********************************!*\
  !*** ./constants/socketEvents.ts ***!
  \***********************************/
/*! exports provided: sendCommonMessage, createBurime, deleteBurime, acceptBurime, createStep, closeBurime, getCommonMessage, changeActiveUsers, newBurime, deletedBurime, acceptedBurime, brimeStarted, newStep, finishBurime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCommonMessage", function() { return sendCommonMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBurime", function() { return createBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBurime", function() { return deleteBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptBurime", function() { return acceptBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStep", function() { return createStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBurime", function() { return closeBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonMessage", function() { return getCommonMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeActiveUsers", function() { return changeActiveUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newBurime", function() { return newBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletedBurime", function() { return deletedBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptedBurime", function() { return acceptedBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brimeStarted", function() { return brimeStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newStep", function() { return newStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishBurime", function() { return finishBurime; });
//client
var sendCommonMessage = 'send_message';
var createBurime = 'create_burime';
var deleteBurime = 'delete_burime';
var acceptBurime = 'accept_burime';
var createStep = 'create_step';
var closeBurime = 'close_burime'; // server

var getCommonMessage = 'new_message';
var changeActiveUsers = 'change_active_users';
var newBurime = 'new_burime';
var deletedBurime = 'deleted_burime';
var acceptedBurime = 'accepted_burime';
var brimeStarted = 'started_burime';
var newStep = 'new_step';
var finishBurime = 'finish_burime';

/***/ }),

/***/ "./constants/urls.ts":
/*!***************************!*\
  !*** ./constants/urls.ts ***!
  \***************************/
/*! exports provided: baseServerUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseServerUrl", function() { return baseServerUrl; });
var baseServerUrl = 'http://localhost:3003';

/***/ }),

/***/ "./models/burime.ts":
/*!**************************!*\
  !*** ./models/burime.ts ***!
  \**************************/
/*! exports provided: BurimeStatus, BurimeStepsAmount, StepDuration, BurimeStepsAmountOptions, StepDurationOptions, BurimeStepsAmountOptionsMap, StepDurationOptionsMap, BurimeStep, BurimeModel, LikeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurimeStatus", function() { return BurimeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurimeStepsAmount", function() { return BurimeStepsAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepDuration", function() { return StepDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurimeStepsAmountOptions", function() { return BurimeStepsAmountOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepDurationOptions", function() { return StepDurationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurimeStepsAmountOptionsMap", function() { return BurimeStepsAmountOptionsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepDurationOptionsMap", function() { return StepDurationOptionsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurimeStep", function() { return BurimeStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurimeModel", function() { return BurimeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeModel", function() { return LikeModel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");

var BurimeStatus;

(function (BurimeStatus) {
  BurimeStatus["Call"] = "Call";
  BurimeStatus["Process"] = "Process";
  BurimeStatus["Finish"] = "Finish";
  BurimeStatus["Obsolete"] = "Obsolete";
  BurimeStatus["Deleted"] = "Deleted";
})(BurimeStatus || (BurimeStatus = {}));

var BurimeStepsAmount;

(function (BurimeStepsAmount) {
  BurimeStepsAmount[BurimeStepsAmount["Two"] = 2] = "Two";
  BurimeStepsAmount[BurimeStepsAmount["Four"] = 4] = "Four";
  BurimeStepsAmount[BurimeStepsAmount["Seven"] = 7] = "Seven";
  BurimeStepsAmount[BurimeStepsAmount["Ten"] = 10] = "Ten";
})(BurimeStepsAmount || (BurimeStepsAmount = {}));

var StepDuration;

(function (StepDuration) {
  StepDuration[StepDuration["None"] = 0] = "None";
  StepDuration[StepDuration["Fast"] = 40] = "Fast";
  StepDuration[StepDuration["Mid"] = 80] = "Mid";
  StepDuration[StepDuration["Long"] = 120] = "Long";
  StepDuration[StepDuration["ExtraLong"] = 1800] = "ExtraLong";
})(StepDuration || (StepDuration = {}));

var BurimeStepsAmountOptions = [{
  value: BurimeStepsAmount.Two,
  label: '4 строки'
}, {
  value: BurimeStepsAmount.Four,
  label: '8 строк'
}, {
  value: BurimeStepsAmount.Seven,
  label: '14 строк'
}, {
  value: BurimeStepsAmount.Ten,
  label: '20 строк'
}];
var StepDurationOptions = [{
  value: StepDuration.None,
  label: 'без огарничений'
}, {
  value: StepDuration.Fast,
  label: '1 минута'
}, {
  value: StepDuration.Mid,
  label: '2 минуты '
}, {
  value: StepDuration.Long,
  label: '3 минуты'
}, {
  value: StepDuration.ExtraLong,
  label: '10 минут'
}];
var BurimeStepsAmountOptionsMap = BurimeStepsAmountOptions.reduce(function (acc, item) {
  acc[item.value] = item;
  return acc;
}, {});
var StepDurationOptionsMap = StepDurationOptions.reduce(function (acc, item) {
  acc[item.value] = item;
  return acc;
}, {});
var BurimeStep = function BurimeStep() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BurimeStep);
};
var BurimeModel = function BurimeModel() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BurimeModel);
};
var LikeModel = function LikeModel() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LikeModel);
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _typeof = __webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

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

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _getIterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

var _construct = __webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

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

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

var React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");

var _typeof = __webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

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
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

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

            if (true) {
              throw new Error(error);
            } else {}

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

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          } // @ts-ignore pathname is always defined


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

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        } // @ts-ignore method should always exist on history


        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

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

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

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
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) return; // @ts-ignore pathname is always defined

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


var TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");
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
          if (false) {}

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
          if (true) {
            if (_Object$keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

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
  if (true) {
    if (url !== null && _typeof(url) === 'object') {
      _Object$keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/all.tsx":
/*!***********************!*\
  !*** ./pages/all.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_organizms_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/organizms/Layout/Layout */ "./components/organizms/Layout/Layout.tsx");
/* harmony import */ var _components_Chat_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chat/Chat */ "./components/Chat/Chat.tsx");
/* harmony import */ var _components_organizms_AllBurimeList_AllBurimeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/organizms/AllBurimeList/AllBurimeList */ "./components/organizms/AllBurimeList/AllBurimeList.tsx");
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\pages\\all.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Page = function Page() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organizms_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organizms_AllBurimeList_AllBurimeList__WEBPACK_IMPORTED_MODULE_3__["AllBurimeList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Chat_Chat__WEBPACK_IMPORTED_MODULE_2__["Chat"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./services/api/api.ts":
/*!*****************************!*\
  !*** ./services/api/api.ts ***!
  \*****************************/
/*! exports provided: getApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApi", function() { return getApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:3003/',
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

/***/ "./services/api/auth.ts":
/*!******************************!*\
  !*** ./services/api/auth.ts ***!
  \******************************/
/*! exports provided: registration, signIn, signOut, status, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registration", function() { return registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./services/api/api.ts");


var api = Object(_api__WEBPACK_IMPORTED_MODULE_1__["getApi"])();

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
  return api.post('auth/logout')["catch"](function (error) {
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

/***/ "./services/api/burime.ts":
/*!********************************!*\
  !*** ./services/api/burime.ts ***!
  \********************************/
/*! exports provided: getBurimes, getBurime, getFinishedBurime, getCalls, getActiveGame, getUserGames, useBurime, useGame, useFinishedBurime, useMyBurimes, useBurimesPage, useCheckFinishedBurime, useActiveBurime, getRandomTitle, useCalls, goToGame, goToBurime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBurimes", function() { return getBurimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBurime", function() { return getBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFinishedBurime", function() { return getFinishedBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalls", function() { return getCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveGame", function() { return getActiveGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserGames", function() { return getUserGames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBurime", function() { return useBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGame", function() { return useGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFinishedBurime", function() { return useFinishedBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMyBurimes", function() { return useMyBurimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBurimesPage", function() { return useBurimesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckFinishedBurime", function() { return useCheckFinishedBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActiveBurime", function() { return useActiveBurime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomTitle", function() { return getRandomTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCalls", function() { return useCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToGame", function() { return goToGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToBurime", function() { return goToBurime; });
/* harmony import */ var _models_burime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/burime */ "./models/burime.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./services/api/api.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




var api = Object(_api__WEBPACK_IMPORTED_MODULE_2__["getApi"])();
var callsUrl = '/api/calls';
var burimeUrl = '/api/burime';
var myBurimeUrl = '/api/burime/my';
var allBurimeUrl = '/api/burime/all';
var randomTitleUrl = '/api/burime/random-title';
var getBurimes = function getBurimes(url, params) {
  return api.get(url, {
    params: params
  }).then(function (response) {
    return response.data;
  });
};
var getBurime = function getBurime(id) {
  return api.get("".concat(burimeUrl, "/").concat(id)).then(function (response) {
    return response.data;
  });
};
var getFinishedBurime = function getFinishedBurime(id) {
  return api.get("".concat(burimeUrl, "/").concat(id), {
    params: {
      status: _models_burime__WEBPACK_IMPORTED_MODULE_0__["BurimeStatus"].Finish
    }
  }).then(function (response) {
    return response.data;
  });
};
var getCalls = function getCalls() {
  return api.get('/api/calls').then(function (response) {
    return response.data;
  });
};
var getActiveGame = function getActiveGame() {
  return api.get('/api/burime/active').then(function (response) {
    return response.data;
  });
};
var getUserGames = function getUserGames() {
  return api.get('/api/burime/user-games').then(function (response) {
    return response.data;
  });
};
var useBurime = function useBurime(url) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      burimes = _useState3[0],
      setBurimes = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getBurimes(url).then(function (data) {
      return setBurimes(data.burimes);
    })["catch"](function (err) {
      return setError(err);
    })["finally"](function () {
      return setLoading(false);
    });
  }, []);
  return {
    loading: loading,
    burimes: burimes,
    error: error,
    setBurimes: setBurimes
  };
};
var useGame = function useGame(id, user) {
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      error = _useState5[0],
      setError = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      burime = _useState6[0],
      setBurime = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getBurime(id).then(function (data) {
      var burime = data.burime;

      if (!user) {
        setError("plese enter");
        return;
      }

      if (!burime) {
        setError("No burime with id: ".concat(id));
        return;
      }

      if (burime.user1.email !== user.email && burime.user2.email !== user.email) {
        setError("not you game");
        return;
      }

      setBurime(data.burime);
    })["catch"](function (err) {
      return setError(err);
    })["finally"](function () {
      return setLoading(false);
    });
  }, []);
  return {
    loading: loading,
    burime: burime,
    error: error
  };
};
var useFinishedBurime = function useFinishedBurime(id) {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState7[0],
      setLoading = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      error = _useState8[0],
      setError = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      burime = _useState9[0],
      setBurime = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getFinishedBurime(id).then(function (data) {
      var burime = data.burime;

      if (!burime) {
        setError("No burime with id: ".concat(id));
        return;
      }

      setBurime(data.burime);
    })["catch"](function (err) {
      return setError(err);
    })["finally"](function () {
      return setLoading(false);
    });
  }, []);
  return {
    loading: loading,
    burime: burime,
    error: error
  };
};
var useMyBurimes = function useMyBurimes() {
  return useBurime(myBurimeUrl);
};
var useBurimesPage = function useBurimesPage(_ref) {
  var page = _ref.page,
      size = _ref.size;

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(page),
      pageNumber = _useState11[0],
      setPage = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(size),
      pageSize = _useState12[0],
      setPageSize = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      error = _useState13[0],
      setError = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      burimes = _useState14[0],
      setBurimes = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      total = _useState15[0],
      setTotal = _useState15[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getBurimes(allBurimeUrl, {
      page: pageNumber,
      size: pageSize
    }).then(function (data) {
      setBurimes(data.burimes);
      setTotal(data.total);
    })["catch"](function (err) {
      return setError(err);
    })["finally"](function () {
      return setLoading(false);
    });
  }, [pageNumber]);
  return {
    loading: loading,
    burimes: burimes,
    error: error,
    total: total,
    setPage: setPage,
    setPageSize: setPageSize,
    setBurimes: setBurimes
  };
};
var useCheckFinishedBurime = function useCheckFinishedBurime(id) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getFinishedBurime(id).then(function (data) {
      if (data.burime) {
        goToBurime(id);
      }
    });
  }, []);
};
var useActiveBurime = function useActiveBurime() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getActiveGame().then(function (data) {
      if (data.burime) {
        goToGame(data.burime.id);
      }
    });
  }, []);
};
var getRandomTitle = function getRandomTitle() {
  return api.get(randomTitleUrl).then(function (response) {
    return response.data;
  });
};
var useCalls = function useCalls() {
  return useBurime(callsUrl);
};
var goToGame = function goToGame(burimeId) {
  return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/game/".concat(burimeId));
};
var goToBurime = function goToBurime(burimeId) {
  return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/burime/".concat(burimeId));
};

/***/ }),

/***/ "./services/api/likes.ts":
/*!*******************************!*\
  !*** ./services/api/likes.ts ***!
  \*******************************/
/*! exports provided: like, dislike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "like", function() { return like; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dislike", function() { return dislike; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./services/api/api.ts");

var api = Object(_api__WEBPACK_IMPORTED_MODULE_0__["getApi"])();
var likeUrl = '/api/like';
var like = function like(burimeId) {
  return api.post(likeUrl, {
    burimeId: burimeId
  }).then(function (response) {
    return response.data;
  });
};
var dislike = function dislike(burimeId) {
  return api["delete"](likeUrl, {
    params: {
      burimeId: burimeId
    }
  }).then(function (response) {
    return response.data;
  });
};

/***/ }),

/***/ "./services/api/messages.ts":
/*!**********************************!*\
  !*** ./services/api/messages.ts ***!
  \**********************************/
/*! exports provided: getCommonMessages, useMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonMessages", function() { return getCommonMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMessages", function() { return useMessages; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _constants_socketEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../constants/socketEvents */ "./constants/socketEvents.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./services/api/api.ts");




var api = Object(_api__WEBPACK_IMPORTED_MODULE_3__["getApi"])();
var getCommonMessages = function getCommonMessages() {
  return api.get('/api/common-chat-messages').then(function (response) {
    return response.data;
  });
};
var useMessages = function useMessages(email, socket) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      messages = _useState3[0],
      setMessages = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      activeUsers = _useState4[0],
      setActiveUsers = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getCommonMessages().then(function (data) {
      var messages = data.messages.map(function (message) {
        message.isMine = message.author.email === email;
        return message;
      });
      setActiveUsers(data.activeUsers);
      setMessages(messages);
    })["catch"](function (err) {
      return setError(err);
    })["finally"](function () {
      return setLoading(false);
    });

    var onChangeActiveUsers = function onChangeActiveUsers(activeUsers) {
      return setActiveUsers(activeUsers);
    };

    socket.on(_constants_socketEvents__WEBPACK_IMPORTED_MODULE_1__["changeActiveUsers"], onChangeActiveUsers);
    return function () {
      socket.off(_constants_socketEvents__WEBPACK_IMPORTED_MODULE_1__["changeActiveUsers"], onChangeActiveUsers);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var onGetMessage = function onGetMessage(message) {
      message.isMine = message.author.email === email;
      setMessages([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [message]));
    };

    socket.on(_constants_socketEvents__WEBPACK_IMPORTED_MODULE_1__["getCommonMessage"], onGetMessage);
    return function () {
      socket.off(_constants_socketEvents__WEBPACK_IMPORTED_MODULE_1__["getCommonMessage"], onGetMessage);
    };
  }, [messages]);
  return {
    loading: loading,
    messages: messages,
    error: error,
    activeUsers: activeUsers
  };
};

/***/ }),

/***/ "./services/contexts/auth.ts":
/*!***********************************!*\
  !*** ./services/contexts/auth.ts ***!
  \***********************************/
/*! exports provided: UserContext, useUser, useSetUser, useUserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return useUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetUser", function() { return useSetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserContext", function() { return useUserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./services/date.ts":
/*!**************************!*\
  !*** ./services/date.ts ***!
  \**************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
var getFullMinutes = function getFullMinutes(date) {
  var m = date.getMinutes();
  return m < 10 ? "0".concat(m) : m;
};

var format = function format(dateString) {
  if (!dateString) {
    return '';
  }

  var date = new Date(dateString);
  return "".concat(date.getDate(), "/").concat(date.getMonth() + 1, " ").concat(date.getHours(), ":").concat(getFullMinutes(date));
};

/***/ }),

/***/ "./services/socket.tsx":
/*!*****************************!*\
  !*** ./services/socket.tsx ***!
  \*****************************/
/*! exports provided: SocketContext, useSocket, SocketProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return SocketContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSocket", function() { return useSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketProvider", function() { return SocketProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\services\\socket.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var serverUrl = 'http://localhost:3003';
var SocketContext = Object(react__WEBPACK_IMPORTED_MODULE_6__["createContext"])(null);
var useSocket = function useSocket() {
  return Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(SocketContext);
};
var SocketProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SocketProvider, _Component);

  function SocketProvider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SocketProvider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SocketProvider).call(this, props));
    _this.state = {
      socket: null
    };

    if (!props.user) {
      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
    }

    _this.state = {
      socket: socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()(serverUrl, props.opts || {
        query: "user=".concat(props.user.email)
      })
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SocketProvider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SocketContext.Provider, {
        value: this.state.socket,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return SocketProvider;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./services/toast.tsx":
/*!****************************!*\
  !*** ./services/toast.tsx ***!
  \****************************/
/*! exports provided: success, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var butter_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! butter-toast */ "butter-toast");
/* harmony import */ var butter_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(butter_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ThumbsUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/feather/ThumbsUp */ "@styled-icons/feather/ThumbsUp");
/* harmony import */ var _styled_icons_feather_ThumbsUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ThumbsUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_material_MoodBad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-icons/material/MoodBad */ "@styled-icons/material/MoodBad");
/* harmony import */ var _styled_icons_material_MoodBad__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_MoodBad__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\alexs\\Desktop\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\code\\burime\\client\\services\\toast.tsx";
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
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThumbsUpStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }),
      title: title,
      content: text,
      scheme: butter_toast__WEBPACK_IMPORTED_MODULE_1__["Cinnamon"].Crunch.SCHEME_GREEN,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })
  });
};
var error = function error(title, text) {
  butter_toast__WEBPACK_IMPORTED_MODULE_1___default.a.raise({
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(butter_toast__WEBPACK_IMPORTED_MODULE_1__["Cinnamon"].Crunch, {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoodBadStyled, {
        fill: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }),
      title: title,
      content: text,
      scheme: butter_toast__WEBPACK_IMPORTED_MODULE_1__["Cinnamon"].Crunch.SCHEME_RED,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })
  });
};

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/all.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alexs\Desktop\Алексей\code\burime\client\pages\all.tsx */"./pages/all.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@styled-icons/boxicons-regular/ChevronDown":
/*!*************************************************************!*\
  !*** external "@styled-icons/boxicons-regular/ChevronDown" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ "@styled-icons/boxicons-regular/Edit":
/*!******************************************************!*\
  !*** external "@styled-icons/boxicons-regular/Edit" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/Edit");

/***/ }),

/***/ "@styled-icons/boxicons-regular/LogOut":
/*!********************************************************!*\
  !*** external "@styled-icons/boxicons-regular/LogOut" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/LogOut");

/***/ }),

/***/ "@styled-icons/boxicons-regular/Send":
/*!******************************************************!*\
  !*** external "@styled-icons/boxicons-regular/Send" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/Send");

/***/ }),

/***/ "@styled-icons/boxicons-regular/Spreadsheet":
/*!*************************************************************!*\
  !*** external "@styled-icons/boxicons-regular/Spreadsheet" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/Spreadsheet");

/***/ }),

/***/ "@styled-icons/entypo-social/VkWithCircle":
/*!***********************************************************!*\
  !*** external "@styled-icons/entypo-social/VkWithCircle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/entypo-social/VkWithCircle");

/***/ }),

/***/ "@styled-icons/entypo/OpenBook":
/*!************************************************!*\
  !*** external "@styled-icons/entypo/OpenBook" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/entypo/OpenBook");

/***/ }),

/***/ "@styled-icons/evil/CloseO":
/*!********************************************!*\
  !*** external "@styled-icons/evil/CloseO" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/evil/CloseO");

/***/ }),

/***/ "@styled-icons/fa-solid/UserCircle":
/*!****************************************************!*\
  !*** external "@styled-icons/fa-solid/UserCircle" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/fa-solid/UserCircle");

/***/ }),

/***/ "@styled-icons/feather/ThumbsUp":
/*!*************************************************!*\
  !*** external "@styled-icons/feather/ThumbsUp" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/feather/ThumbsUp");

/***/ }),

/***/ "@styled-icons/material/MoodBad":
/*!*************************************************!*\
  !*** external "@styled-icons/material/MoodBad" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/material/MoodBad");

/***/ }),

/***/ "@styled-icons/material/Settings":
/*!**************************************************!*\
  !*** external "@styled-icons/material/Settings" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ "@styled-icons/material/SupervisedUserCircle":
/*!**************************************************************!*\
  !*** external "@styled-icons/material/SupervisedUserCircle" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/material/SupervisedUserCircle");

/***/ }),

/***/ "@styled-icons/remix-line/Heart2":
/*!**************************************************!*\
  !*** external "@styled-icons/remix-line/Heart2" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/remix-line/Heart2");

/***/ }),

/***/ "@styled-icons/remix-line/PencilRuler":
/*!*******************************************************!*\
  !*** external "@styled-icons/remix-line/PencilRuler" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/remix-line/PencilRuler");

/***/ }),

/***/ "@styled-icons/zondicons/Heart":
/*!************************************************!*\
  !*** external "@styled-icons/zondicons/Heart" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/zondicons/Heart");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "butter-toast":
/*!*******************************!*\
  !*** external "butter-toast" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("butter-toast");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-data-table-component":
/*!*********************************************!*\
  !*** external "react-data-table-component" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-data-table-component");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=all.js.map