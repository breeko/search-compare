webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/utils/tagger.ts":
/*!*****************************!*\
  !*** ./src/utils/tagger.ts ***!
  \*****************************/
/*! exports provided: getTags, getTagColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagColor", function() { return getTagColor; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

var tags = {
  news: ["news.yahoo.com", "news.google.com", "huffpost.com", "cnn.com", "nytimes.com", "foxnews.com", "nbcnews.com", "dailymail.co.uk", "independent.co.uk", "washingtonpost.com", "theguardian.com", "abcnews.go.com", "bbc.com", "usatoday.com", "latimes.com", "nbcnews.com", "npr.org", "marketwatch.com", "cnbc.com", "forbes.com", "businessinsider.com", "msnbc.com"],
  wikipedia: [/([a-zA-Z]+\.)?wikipedia\.org/],
  youtube: ["youtube.com"],
  StackExchange: [/(.+)?stackexchange\.com/, "stackoverflow.com", "superuser.com", "askubuntu.com", "serverfault.com"],
  social: ["facebook.com", "fb.com", "instagram.com", "twitter.com", "linkedin.com", "reddit.com"],
  imdb: ["imdb.com"],
  gov: ["^(https?:\/\/)?(www\.)?[a-z0-9-\.]+\.(\.gov)(\.[a-z]{2,3})?"],
  org: ["^(https?:\/\/)?(www\.)?[a-z0-9-]+\.(\.org)(\.[a-z]{2,3})?"]
};
var getTags = function getTags(str) {
  var matched = [];
  Object.entries(tags).forEach(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        tag = _ref2[0],
        regexes = _ref2[1];

    if (regexes.find(function (regex) {
      return str && str.match(regex);
    })) {
      matched.push(tag);
    }
  });
  return matched;
};
var getTagColor = function getTagColor(tag) {
  var backgroundColor;
  var textColor;

  switch (tag) {
    case "news":
      backgroundColor = "#2ecc71";
      textColor = "#ffffff";
      break;

    case "wikipedia":
      backgroundColor = "#8489c1";
      textColor = "#ffffff";
      break;

    case "youtube":
      backgroundColor = "#c4302b";
      textColor = "#ffffff";
      break;

    case "StackExchange":
      backgroundColor = "#f58024";
      textColor = "#000000";
      break;

    case "social":
      backgroundColor = "#3b5998";
      textColor = "#ffffff";
      break;

    case "imdb":
      backgroundColor = "#fbc533";
      textColor = "#000000";
      break;

    case "answers":
      backgroundColor = "#bdc3c7";
      textColor = "#000000";
      break;

    case "gov":
      backgroundColor = "#34495e";
      textColor = "#ffffff";
      break;

    case "org":
      backgroundColor = "#2ecc71";
      textColor = "#000000";
      break;

    default:
      backgroundColor = "none";
      textColor = "#000000";
      break;
  }

  return {
    backgroundColor: backgroundColor,
    textColor: textColor
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.27123722a51d8c7b53aa.hot-update.js.map