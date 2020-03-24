webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_AppToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/AppToolbar */ "./src/components/AppToolbar.tsx");
/* harmony import */ var _src_context_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/context/AppContext */ "./src/context/AppContext.tsx");
/* harmony import */ var _src_utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/utils/api */ "./src/utils/api.ts");
var _jsxFileName = "/Users/branko/Documents/search-compare/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Layout = function Layout(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      googleResults = _useState3[0],
      setGoogleResults = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      ddgResults = _useState4[0],
      setDdgResults = _useState4[1];

  var runSearch = function runSearch(term) {
    if (term) {
      if (next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pathname !== "/") {
        // TODO: Change to page and keep state!!
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/").then(function () {
          setSearch(term);
          runSearch(term);
        });
      } else {
        setIsLoading(true);
        setDdgResults(undefined);
        setGoogleResults(undefined);
        var g = Object(_src_utils_api__WEBPACK_IMPORTED_MODULE_6__["getGoogleResults"])(term, 2).then(setGoogleResults);
        var d = Object(_src_utils_api__WEBPACK_IMPORTED_MODULE_6__["getDdgResults"])(term).then(setDdgResults);
        Promise.all([g, d]).then(function () {
          return setIsLoading(false);
        });
      }
    }
  };

  return __jsx(_src_context_AppContext__WEBPACK_IMPORTED_MODULE_5__["AppContext"].Provider, {
    value: {
      googleResults: googleResults,
      ddgResults: ddgResults,
      setGoogleResults: setGoogleResults,
      setDdgResults: setDdgResults,
      search: search,
      setSearch: setSearch,
      isLoading: isLoading,
      setIsLoading: setIsLoading,
      runSearch: runSearch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/public/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Search Compare"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_src_components_AppToolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.927a17a40780555b2c65.hot-update.js.map