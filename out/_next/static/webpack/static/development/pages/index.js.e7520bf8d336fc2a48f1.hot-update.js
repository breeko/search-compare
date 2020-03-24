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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_SearchResultsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/SearchResultsTable */ "./src/components/SearchResultsTable.tsx");
/* harmony import */ var _src_context_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/context/AppContext */ "./src/context/AppContext.tsx");

var _jsxFileName = "/Users/branko/Documents/search-compare/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Index = function Index() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_src_context_AppContext__WEBPACK_IMPORTED_MODULE_5__["AppContext"]);
  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
      root: {
        "flexWrap": "wrap",
        "& > *": {
          margin: theme.spacing(0.5)
        }
      },
      suggestions: {
        "display": "inline-block",
        "flexWrap": "wrap",
        "margin": theme.spacing(0.5),
        "& > *": {
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
    politics: ["trump", "sanders", "biden", "republicans", "democrats", "trump russia", "sanders socialist"],
    shopping: ["buy tv", "best cell phone", "flights", "mortgage rates"],
    conspiracy: ["are vacccines dangerous", "flat earth", "bush 9/11", "jfk assassination", "clinton body count", "moon landing"],
    entertainment: ["eminem fast song", "news guy spider man actor"],
    programming: ["css center text", "implicits scala 3.0", "regex match .com", "tsfiddle", "nextjs source map"]
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 4,
    style: {
      display: "inline-block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
        lineNumber: 56
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      color: "textSecondary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
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
          context.setSearch(term);
          context.runSearch(term);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, context.isLoading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), context.googleResults !== undefined && context.ddgResults !== undefined && __jsx(_src_components_SearchResultsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resultsLeft: context.googleResults,
    resultsRight: context.ddgResults,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })));
};

var Inner = function Inner() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(Index, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Inner);

/***/ })

})
//# sourceMappingURL=index.js.e7520bf8d336fc2a48f1.hot-update.js.map