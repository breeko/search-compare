webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SearchResultsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchResultsTable */ "./components/SearchResultsTable.tsx");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/api */ "./utils/api.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");

var _jsxFileName = "/home/branko/Documents/search-compare/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      googleResults = _useState3[0],
      setGoogleResults = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      ddgResults = _useState4[0],
      setDdgResults = _useState4[1];

  var runSearch = function runSearch(search) {
    if (search) {
      setIsLoading(true);
      setDdgResults(undefined);
      setGoogleResults(undefined);
      var g = Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["getGoogleResults"])(search, 2).then(setGoogleResults);
      var d = Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["getDdgResults"])(search).then(setDdgResults);
      Promise.all([g, d]).then(function () {
        return setIsLoading(false);
      });
    }
  };

  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
      root: {
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(0.5)
        }
      },
      suggestions: {
        display: 'inline-block',
        flexWrap: 'wrap',
        margin: theme.spacing(0.5),
        '& > *': {
          fontSize: 14,
          margin: theme.spacing(0.5)
        }
      }
    });
  });
  var classes = useStyles();
  var suggestions = {
    general: ["ddg", "google", "fb", "st patricks in 2022", "date of ny marathon"],
    news: ["2008 crisis", "corona virus"],
    politics: ["trump", "sanders", "biden", "republicans", "democrats"],
    shopping: ["buy tv", "best cell phone", "flights"],
    conspiracy: ["are vacccines dangerous", "flat earth", "bush 9/11", "jfk assassination", "clinton body count", "moon landing"],
    entertainment: ["eminem fast song", "news guy spider man actor"],
    programming: ["css center text", "implicits scala 3.0", "regex match .com", "tsfiddle"]
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "About"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 4,
    style: {
      display: "inline-block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, Object.entries(suggestions).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        category = _ref2[0],
        terms = _ref2[1];

    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: category,
      className: classes.suggestions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      color: "textSecondary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, category), terms.map(function (term) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
        key: "".concat(category).concat(term),
        style: {
          margin: 10
        },
        label: term,
        onClick: function onClick() {
          setSearch(term);
          runSearch(term);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      });
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    autoFocus: true,
    placeholder: "Search Term",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    value: search,
    onKeyPress: function onKeyPress(e) {
      return e.key === "Enter" && runSearch(search);
    },
    InputProps: {
      startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputAdornment"], {
        position: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, isLoading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), googleResults !== undefined && ddgResults !== undefined && __jsx(_components_SearchResultsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resultsLeft: googleResults,
    resultsRight: ddgResults,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.dc147268f63e7283cc34.hot-update.js.map