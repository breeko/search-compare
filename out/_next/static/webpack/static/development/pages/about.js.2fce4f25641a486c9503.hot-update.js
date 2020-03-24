webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/branko/Documents/search-compare/pages/about.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import Layout from "./_app"

var About = function About() {
  var faqs = [{
    question: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "What is this?"),
    answer: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "This is a site where you can compare search results of google vs that of duck duck go"),
    key: 1
  }, {
    question: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "What's Duck Duck Go (DDG)?"),
    answer: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Duck Duck Go is a privacy focused search engine. Check them out at ", __jsx("a", {
      href: "https://duckduckgo.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "https://duckduckgo.com/")),
    key: 2
  }, {
    question: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Why are the Google/DDG search results are different from what I see when I search?"),
    answer: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "For Duck Duck Go, search-compare searches the html version (e.g. duckduckgo.com/html/?q=search). The results are different than the canonical duckduckgo search, but its easier to scrape. For Google, search-compare uses the main google site (e.g. google.com/search?hl=en&q=search), but it doesn't pass any personally identifiable information."),
    key: 3
  }, {
    question: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Why are DDG search results sometimes in Russian?"),
    answer: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "I don't know, as mentioned above, I get the results from the html version of DDG (e.g. duckduckgo.com/html/q=search). I tried to look for a way to specify the language or scrape the main site, but it  proved challenging. Feel free to contact me at branko.blagojevic@[google mail provider] or submit a ", __jsx("a", {
      href: "https://github.com/breeko/search-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "pull request"), "."),
    key: 4
  }, {
    question: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "How do you classify your tags?"),
    answer: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "See ", __jsx("a", {
      href: "https://github.com/breeko/search-compare/blob/master/utils/tagger.ts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "tagger.tsx"), "."),
    key: 5
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, faqs.map(function (_ref, idx) {
    var question = _ref.question,
        answer = _ref.answer,
        key = _ref.key;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      my: 4,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, idx !== 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, question)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, answer)));
  })));
};

var Inner = About; //() => <React.Fragment><About/></React.Fragment>

/* harmony default export */ __webpack_exports__["default"] = (Inner);

/***/ })

})
//# sourceMappingURL=about.js.2fce4f25641a486c9503.hot-update.js.map