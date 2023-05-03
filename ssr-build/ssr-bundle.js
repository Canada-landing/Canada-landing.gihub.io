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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+3YS":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+IV6":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+LEj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gdic");

var Report = function Report(_ref) {
  var handleClickScroll = _ref.handleClickScroll;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].report
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportGrid
  }, h("p", null, "ELIGIBLE IMMIGRATION PROGRAMS"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportBox
  }, h(ReportCard, {
    title: "Express Entry",
    subTitle: "You have excellent chances of being accepted into this program.",
    desc: "Express Entry is the fastest and most popular path to permanent residence for skilled workers. This program includes three visas: Canadian Experience Class, Federal Skilled Worker Program, and Federal Skilled Trades Program.",
    subDesc: "A deeper profile research is required. Please contact an immigration professional for more information.",
    progress: 100,
    id: "express_entry",
    handleClickScroll: handleClickScroll
  }), h(ReportCard, {
    title: "Provincial Nominee Program",
    subTitle: "You have excellent chances of being accepted into this program.",
    desc: "PNP programs offer a pathway to permanent residence for skilled workers who are interested in immigrating to one of 13 Canadian provinces or territories.",
    subDesc: "A deeper profile research is required. Please contact an immigration professional for more information.",
    progress: 80,
    id: "provincial_nominee_program",
    handleClickScroll: handleClickScroll
  }), h(ReportCard, {
    title: "Atlantic Immigration Program",
    subTitle: "You have good chances of being accepted into this program.",
    desc: "The AIP program offers a pathway to permanent residence for skilled workers and international graduates who want to work and live in one of Canada's four Atlantic Provinces: New Brunswick, Newfoundland and Labrador, Nova Scotia, and Prince Edward Island.",
    subDesc: "A job offer from a designated employer in Atlantic Canada may be required. Please contact an immigration professional for more information.",
    progress: 60,
    id: "atlantic_immigration_program",
    handleClickScroll: handleClickScroll
  }), h(ReportCard, {
    title: "Temporary Foreign Worker Program",
    subTitle: "You have good chances of being accepted into this program.",
    desc: "The Temporary Foreign Worker Program allows skilled workers to live and work in Canada for 12 months. Employers can hire foreign workers when qualified Canadians cannot fill temporary jobs.",
    subDesc: "Must obtain a specific Labor Market Impact Assessment (LMIA). Please contact an immigration professional for more information.",
    progress: 60,
    id: "temporary_foreign_worker_program",
    blurred: true,
    handleClickScroll: handleClickScroll
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (Report);
var ReportCard = function ReportCard(_ref2) {
  var title = _ref2.title,
    subTitle = _ref2.subTitle,
    desc = _ref2.desc,
    subDesc = _ref2.subDesc,
    progress = _ref2.progress,
    id = _ref2.id,
    blurred = _ref2.blurred,
    handleClickScroll = _ref2.handleClickScroll;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportCard
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportCardTitle
  }, h("h4", null, title), h("span", null, subTitle), h(ReportLoader, {
    progress: progress
  }), h("p", null, desc)), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportCardFooter
  }, h("p", null, subDesc), h("a", {
    id: id,
    onClick: function onClick() {
      return handleClickScroll(id);
    }
  }, "Learn More")), blurred && h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportCardBlurred
  }));
};
var ReportLoader = function ReportLoader(_ref3) {
  var progress = _ref3.progress;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportLoaderBody
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportLoaderWrapper,
    style: {
      maxWidth: "".concat(progress, "%")
    }
  }), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportLoaderWrapperContent
  }, h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportLoader, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].loader1)
  }), h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportLoader, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].loader2)
  }), h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportLoader, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].loader3)
  }), h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reportLoader, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].loader4)
  })));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "+Sw5":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+bRE":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+sxx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "7f75707ac4985463dc6d6f4d91833ebd.webp");

/***/ }),

/***/ "0qAl":
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "1/C7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "9afe90a84b4369026008cd00959c0a99.png");

/***/ }),

/***/ "14Ct":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "7860957946c46350d741564190b57d3b.png");

/***/ }),

/***/ "2UUl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slider = _interopRequireDefault(__webpack_require__("Ht6y"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var _default = _slider["default"];
exports["default"] = _default;

/***/ }),

/***/ "3br2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _components_home_callToAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qTIA");
/* harmony import */ var _components_home_howItWork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6off");
/* harmony import */ var _components_home_testimonial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TP/7");
/* harmony import */ var _components_home_topBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fEz+");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("okHz");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FA6U");






var Home = function Home() {
  return h(_components_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].home
  }, h(_components_home_topBanner__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), h(_components_home_howItWork__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), h(_components_home_testimonial__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h(_components_home_callToAction__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null)));
};
/* harmony default export */ __webpack_exports__["a"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "495I":
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__("tJXC");
module.exports = new MediaQueryDispatch();

/***/ }),

/***/ "4B82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2UUl");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IO5D");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tCvC");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XruS");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QRet");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var ReviewData = [{
  id: 1,
  user: "Margot Babin",
  address: "21, France",
  desc: "J'aimerais partager mon incroyable expérience avec Canada District dans l'obtention de mon visa de travailleur de vacances. Tout était simple et efficace, ils se sont occupés de toutes les étapes nécessaires et m'ont aidé avec de très bons conseils tout au long du processus. Je suis tellement heureux d'avoir choisi Canada District pour mon voyage au Canada et je le recommande vivement à tous ceux qui recherchent un excellent service!"
}, {
  id: 2,
  user: "Emmet Müller",
  address: "32, Germany",
  desc: "I want to share my positive experience with Canada District who recently helped me get my student visa. Their team was exceptional in helping me understand all the details of the process and guiding me every step of the way. Their professionalism made the process very smooth and stress-free. After graduation I’m hoping to get a post-graduate visa, gain more work experience and eventually settle in Canada. And I am definitely going to use Canada District's services"
}, {
  id: 3,
  user: "Johannes De Beer",
  address: "36, South Africa",
  desc: "Canada District helped me obtain my Express Entry work visa so I could continue my work as a financial advisor in Canada. The process was difficult and long and we had to resubmit my profile but we were finally successful. The team was knowledgeable and efficient in handling my case. They offered valuable support and we navigated this complex process together. I highly recommend Canada District to anyone looking for a reliable and trustworthy partner in securing a work visa in Canada."
}, {
  id: 4,
  user: "Ava Thomas",
  address: "41, UK",
  desc: "The job search service provided by Canada District was simply brilliant,  they went the extra mile in finding me the perfect job match. The team was knowledgeable, approachable, and always on hand to answer any queries I had. They made the entire process of finding a job and getting my visa an absolute breeze. I am ever so grateful to Canada District for helping me kickstart my new life in Canada and I wouldn't hesitate in recommending their services to anyone looking for work in this fantastic country."
}, {
  id: 5,
  user: "Benjamin Roberts",
  address: "28, Australia",
  desc: "Canada District were bloody brillian to work with! Super friendly and professional team. But what really set them apart was their Working Holiday package. I had the time of my life in Canada, exploring new spots and meeting a top bunch of people, all while earning some cash. I highly recommend Canada District's Working Holiday package and their services"
}];
var CDReview = function CDReview() {
  var slider = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useRef */ "k"])(null);
  var settings = {
    dots: false,
    centerMode: false,
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  var handleNext = function handleNext() {
    slider.current.slickNext();
  };
  var handlePrevious = function handlePrevious() {
    slider.current.slickPrev();
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewSliderMainContent,
    id: "How"
  }, h("h4", null, "We pride ourselves on creating ", h("span", null, "happy"), " customers"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewSliderContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewSliderBtn
  }, h("button", {
    className: "button",
    onClick: handlePrevious
  }, h(PrevBtnIcon, null)), h("button", {
    className: "button",
    onClick: handleNext
  }, h(NextBtnIcon, null))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewSlider
  }, h(react_slick__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({
    ref: slider
  }, settings, {
    swipeToSlide: true,
    focusOnSelect: true
  }), ReviewData.map(function (e) {
    return h("div", {
      key: e.id
    }, h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewSliderContent
    }, h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewSlide
    }, h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewSlideHead
    }, h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewProfile
    }, h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewProfileTop
    }, h(UserIcon, null), h("h6", null, e === null || e === void 0 ? void 0 : e.user)), h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewProfileDesc
    }, h("span", null, e === null || e === void 0 ? void 0 : e.address))), h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewStars
    }, h(StarIcon, null), h(StarIcon, null), h(StarIcon, null), h(StarIcon, null), h(StarIcon, null))), h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].reviewSliderContents
    }, h("p", null, e === null || e === void 0 ? void 0 : e.desc)))));
  })))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDReview);
var UserIcon = function UserIcon() {
  return h("svg", {
    width: "27",
    height: "28",
    viewBox: "0 0 27 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("rect", {
    y: "0.5",
    width: "27",
    height: "27",
    rx: "13.5",
    fill: "#252D43"
  }), h("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5269 13.1471C15.3624 13.1471 16.8505 11.6591 16.8505 9.82355C16.8505 7.988 15.3624 6.5 13.5269 6.5C11.6914 6.5 10.2034 7.988 10.2034 9.82355C10.2034 11.6591 11.6914 13.1471 13.5269 13.1471ZM10.7172 13.415H11.8015C12.3044 13.7211 12.895 13.8973 13.5268 13.8973C14.1586 13.8973 14.7492 13.7211 15.2522 13.415H16.2831C17.9287 13.415 19.2628 14.749 19.2628 16.3947V19.7589H7.73755V16.3946C7.73755 14.749 9.07159 13.415 10.7172 13.415Z",
    fill: "white"
  }));
};
var StarIcon = function StarIcon() {
  return h("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M21.3901 11.6C21.6648 11.3192 21.856 10.9676 21.9426 10.5845C22.0291 10.2013 22.0074 9.80161 21.8801 9.43002C21.7605 9.05733 21.5387 8.72569 21.2399 8.47288C20.9412 8.22006 20.5774 8.05622 20.1901 8.00002L15.9001 7.34002C15.88 7.33422 15.8616 7.32403 15.846 7.31019C15.8304 7.29635 15.8182 7.27921 15.8101 7.26002L13.9301 3.26002C13.7652 2.88546 13.495 2.56692 13.1523 2.34321C12.8096 2.11949 12.4093 2.00025 12.0001 2.00002C11.5956 1.99835 11.1992 2.11353 10.8586 2.33173C10.518 2.54993 10.2476 2.86186 10.0801 3.23002L8.20006 7.23002C8.1898 7.24952 8.17562 7.26669 8.15841 7.28046C8.1412 7.29423 8.12134 7.30429 8.10006 7.31002L3.82006 8.00002C3.43215 8.05781 3.06788 8.22207 2.76776 8.47452C2.46764 8.72698 2.24342 9.05774 2.12006 9.43002C1.99736 9.8029 1.97908 10.2023 2.06723 10.5848C2.15537 10.9673 2.34656 11.3184 2.62006 11.6L5.78006 14.85C5.78916 14.8705 5.79386 14.8926 5.79386 14.915C5.79386 14.9374 5.78916 14.9596 5.78006 14.98L5.04006 19.52C4.97127 19.9154 5.01611 20.3222 5.16938 20.6931C5.32266 21.064 5.57806 21.3838 5.90589 21.6152C6.23373 21.8467 6.62054 21.9804 7.02135 22.0007C7.42215 22.021 7.82049 21.9272 8.17006 21.73L11.9001 19.66C11.9186 19.6504 11.9392 19.6453 11.9601 19.6453C11.9809 19.6453 12.0015 19.6504 12.0201 19.66L15.7501 21.73C16.1001 21.9229 16.4973 22.0134 16.8964 21.9913C17.2954 21.9691 17.6802 21.835 18.0067 21.6045C18.3331 21.374 18.5882 21.0563 18.7426 20.6877C18.8971 20.319 18.9447 19.9144 18.8801 19.52L18.1901 15C18.1795 14.9818 18.174 14.9611 18.174 14.94C18.174 14.919 18.1795 14.8983 18.1901 14.88L21.3901 11.6Z",
    fill: "#EC8525"
  }));
};
var PrevBtnIcon = function PrevBtnIcon() {
  return h("svg", {
    width: "21",
    height: "15",
    viewBox: "0 0 21 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M7.35 0L8.8305 1.51071L4.0215 6.42857L21 6.42857L21 8.57143L4.0215 8.57143L8.841 13.4893L7.35 15L0 7.5L7.35 0Z",
    fill: "#252D43"
  }));
};
var NextBtnIcon = function NextBtnIcon() {
  return h("svg", {
    width: "21",
    height: "15",
    viewBox: "0 0 21 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M13.65 15L12.1695 13.4893L16.9785 8.57143L-5.62004e-07 8.57143L-7.49338e-07 6.42857L16.9785 6.42857L12.159 1.51071L13.65 -1.19332e-06L21 7.5L13.65 15Z",
    fill: "#252D43"
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "4cRK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "07d3ea3e7a28ea216ff3e7220b24dab4.webp");

/***/ }),

/***/ "5WRv":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("iNmH");
var iterableToArray = __webpack_require__("Qatm");
var unsupportedIterableToArray = __webpack_require__("Zhxd");
var nonIterableSpread = __webpack_require__("kluZ");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "5hT1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4cRK");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gdic");



var Sidebar = function Sidebar(_ref) {
  var _result$englishLangSk, _result$frenchLangSki;
  var result = _ref.result;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].sidebar
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].sidebarGrid
  }, h("p", null, "Profile Summary"), h("ul", null, h("li", null, h("span", null, "Age ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, (result === null || result === void 0 ? void 0 : result.age) || 18, " years old ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Education ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, (result === null || result === void 0 ? void 0 : result.education) || "High school diploma", " ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Work experience in Canada ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].desktopview
  }, " ", (result === null || result === void 0 ? void 0 : result.workExperienceInCanada) || "2 years", " ", " "), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].mobileview
  }, (result === null || result === void 0 ? void 0 : result.workExperienceInCanada) === 'None' ? '0 year' : result === null || result === void 0 ? void 0 : result.workExperienceInCanada, " of work experience in Canada"), h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Work experience outside of Canada ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].desktopview
  }, " ", (result === null || result === void 0 ? void 0 : result.workExperienceOutCanada) || "2 years", " ", " "), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].mobileview
  }, (result === null || result === void 0 ? void 0 : result.workExperienceOutCanada) === 'None' ? '0 year' : result === null || result === void 0 ? void 0 : result.workExperienceOutCanada, " ", " of work experience outside of Canada"), h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Job offer ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, result.jobOffer === "Yes" ? "I have a valid job offer from a registered Canadian employer" : "I don't have a valid job offer from a registered Canadian employer", " ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "English proficiency level ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].desktopview
  }, result === null || result === void 0 ? void 0 : result.englishLangSkill), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].mobileview
  }, "English level: ", result === null || result === void 0 ? void 0 : (_result$englishLangSk = result.englishLangSkill) === null || _result$englishLangSk === void 0 ? void 0 : _result$englishLangSk.toLowerCase()), h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "French proficiency level ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].desktopview
  }, result === null || result === void 0 ? void 0 : result.frenchLangSkill), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].mobileview
  }, "French level: ", result === null || result === void 0 ? void 0 : (_result$frenchLangSki = result.frenchLangSkill) === null || _result$frenchLangSki === void 0 ? void 0 : _result$frenchLangSki.toLowerCase()), h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Canadian relatives ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, (result === null || result === void 0 ? void 0 : result.haveRelative) === "Yes" ? "I have relatives in Canada with Canadian citizenship or permanent residency" : "I don't have relatives in Canada with Canadian citizenship or permanent residency", " ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].resubmit
  }, h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/lp/en/global/immigration/check/"
  }, "Resubmit"))));
};
/* harmony default export */ __webpack_exports__["a"] = (Sidebar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "6OLs":
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
module.exports = function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
  }
  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
      return e[t];
    }.bind(null, a));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 9);
}([function (e, t) {
  e.exports = __webpack_require__("l8WD");
}, function (e, t, r) {
  var n;
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  !function () {
    "use strict";

    var r = {}.hasOwnProperty;
    function a() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        if (n) {
          var o = _typeof(n);
          if ("string" === o || "number" === o) e.push(n);else if (Array.isArray(n) && n.length) {
            var i = a.apply(null, n);
            i && e.push(i);
          } else if ("object" === o) for (var u in n) r.call(n, u) && n[u] && e.push(u);
        }
      }
      return e.join(" ");
    }
    e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function () {
      return a;
    }.apply(t, [])) || (e.exports = n);
  }();
}, function (e, t, r) {
  (function (t) {
    var r = /^\s+|\s+$/g,
      n = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      o = /^0o[0-7]+$/i,
      i = parseInt,
      u = "object" == _typeof(t) && t && t.Object === Object && t,
      c = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      s = u || c || Function("return this")(),
      l = Object.prototype.toString,
      f = s.Symbol,
      d = f ? f.prototype : void 0,
      p = d ? d.toString : void 0;
    function h(e) {
      if ("string" == typeof e) return e;
      if (y(e)) return p ? p.call(e) : "";
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    function m(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function y(e) {
      return "symbol" == _typeof(e) || function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && "[object Symbol]" == l.call(e);
    }
    function b(e) {
      return e ? (e = function (e) {
        if ("number" == typeof e) return e;
        if (y(e)) return NaN;
        if (m(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = m(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var u = a.test(e);
        return u || o.test(e) ? i(e.slice(2), u ? 2 : 8) : n.test(e) ? NaN : +e;
      }(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0;
    }
    e.exports = function (e, t, r) {
      var n, a, o, i;
      return e = null == (n = e) ? "" : h(n), a = function (e) {
        var t = b(e),
          r = t % 1;
        return t == t ? r ? t - r : t : 0;
      }(r), o = 0, i = e.length, a == a && (void 0 !== i && (a = a <= i ? a : i), void 0 !== o && (a = a >= o ? a : o)), r = a, t = h(t), e.slice(r, r + t.length) == t;
    };
  }).call(this, r(3));
}, function (e, t) {
  var r;
  r = function () {
    return this;
  }();
  try {
    r = r || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
  }
  e.exports = r;
}, function (e, t, r) {
  (function (t) {
    var r = /^\[object .+?Constructor\]$/,
      n = "object" == _typeof(t) && t && t.Object === Object && t,
      a = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = n || a || Function("return this")();
    var i,
      u = Array.prototype,
      c = Function.prototype,
      s = Object.prototype,
      l = o["__core-js_shared__"],
      f = (i = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
      d = c.toString,
      p = s.hasOwnProperty,
      h = s.toString,
      m = RegExp("^" + d.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      y = u.splice,
      b = x(o, "Map"),
      g = x(Object, "create");
    function v(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function C(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function _(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function w(e, t) {
      for (var r, n, a = e.length; a--;) if ((r = e[a][0]) === (n = t) || r != r && n != n) return a;
      return -1;
    }
    function S(e) {
      return !(!O(e) || (t = e, f && f in t)) && (function (e) {
        var t = O(e) ? h.call(e) : "";
        return "[object Function]" == t || "[object GeneratorFunction]" == t;
      }(e) || function (e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
          t = !!(e + "");
        } catch (e) {}
        return t;
      }(e) ? m : r).test(function (e) {
        if (null != e) {
          try {
            return d.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }(e));
      var t;
    }
    function j(e, t) {
      var r,
        n,
        a = e.__data__;
      return ("string" == (n = _typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? a["string" == typeof t ? "string" : "hash"] : a.map;
    }
    function x(e, t) {
      var r = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return S(r) ? r : void 0;
    }
    function N(e, t) {
      if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
      var r = function r() {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return r.cache = o.set(a, i), i;
      };
      return r.cache = new (N.Cache || _)(), r;
    }
    function O(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    v.prototype.clear = function () {
      this.__data__ = g ? g(null) : {};
    }, v.prototype.delete = function (e) {
      return this.has(e) && delete this.__data__[e];
    }, v.prototype.get = function (e) {
      var t = this.__data__;
      if (g) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return p.call(t, e) ? t[e] : void 0;
    }, v.prototype.has = function (e) {
      var t = this.__data__;
      return g ? void 0 !== t[e] : p.call(t, e);
    }, v.prototype.set = function (e, t) {
      return this.__data__[e] = g && void 0 === t ? "__lodash_hash_undefined__" : t, this;
    }, C.prototype.clear = function () {
      this.__data__ = [];
    }, C.prototype.delete = function (e) {
      var t = this.__data__,
        r = w(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : y.call(t, r, 1), !0);
    }, C.prototype.get = function (e) {
      var t = this.__data__,
        r = w(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, C.prototype.has = function (e) {
      return w(this.__data__, e) > -1;
    }, C.prototype.set = function (e, t) {
      var r = this.__data__,
        n = w(r, e);
      return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
    }, _.prototype.clear = function () {
      this.__data__ = {
        hash: new v(),
        map: new (b || C)(),
        string: new v()
      };
    }, _.prototype.delete = function (e) {
      return j(this, e).delete(e);
    }, _.prototype.get = function (e) {
      return j(this, e).get(e);
    }, _.prototype.has = function (e) {
      return j(this, e).has(e);
    }, _.prototype.set = function (e, t) {
      return j(this, e).set(e, t), this;
    }, N.Cache = _, e.exports = N;
  }).call(this, r(3));
}, function (e, t, r) {
  (function (t) {
    var r = /^\s+|\s+$/g,
      n = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      o = /^0o[0-7]+$/i,
      i = parseInt,
      u = "object" == _typeof(t) && t && t.Object === Object && t,
      c = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      s = u || c || Function("return this")(),
      l = Object.prototype.toString,
      f = Math.max,
      d = Math.min,
      p = function p() {
        return s.Date.now();
      };
    function h(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function m(e) {
      if ("number" == typeof e) return e;
      if (function (e) {
        return "symbol" == _typeof(e) || function (e) {
          return !!e && "object" == _typeof(e);
        }(e) && "[object Symbol]" == l.call(e);
      }(e)) return NaN;
      if (h(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = h(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(r, "");
      var u = a.test(e);
      return u || o.test(e) ? i(e.slice(2), u ? 2 : 8) : n.test(e) ? NaN : +e;
    }
    e.exports = function (e, t, r) {
      var n,
        a,
        o,
        i,
        u,
        c,
        s = 0,
        l = !1,
        y = !1,
        b = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function g(t) {
        var r = n,
          o = a;
        return n = a = void 0, s = t, i = e.apply(o, r);
      }
      function v(e) {
        return s = e, u = setTimeout(_, t), l ? g(e) : i;
      }
      function C(e) {
        var r = e - c;
        return void 0 === c || r >= t || r < 0 || y && e - s >= o;
      }
      function _() {
        var e = p();
        if (C(e)) return w(e);
        u = setTimeout(_, function (e) {
          var r = t - (e - c);
          return y ? d(r, o - (e - s)) : r;
        }(e));
      }
      function w(e) {
        return u = void 0, b && n ? g(e) : (n = a = void 0, i);
      }
      function S() {
        var e = p(),
          r = C(e);
        if (n = arguments, a = this, c = e, r) {
          if (void 0 === u) return v(c);
          if (y) return u = setTimeout(_, t), g(c);
        }
        return void 0 === u && (u = setTimeout(_, t)), i;
      }
      return t = m(t) || 0, h(r) && (l = !!r.leading, o = (y = "maxWait" in r) ? f(m(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b), S.cancel = function () {
        void 0 !== u && clearTimeout(u), s = 0, n = c = a = u = void 0;
      }, S.flush = function () {
        return void 0 === u ? i : w(p());
      }, S;
    };
  }).call(this, r(3));
}, function (e, t, r) {
  (function (e, r) {
    var n = "[object Arguments]",
      a = "[object Map]",
      o = "[object Object]",
      i = "[object Set]",
      u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      c = /^\w*$/,
      s = /^\./,
      l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      f = /\\(\\)?/g,
      d = /^\[object .+?Constructor\]$/,
      p = /^(?:0|[1-9]\d*)$/,
      h = {};
    h["[object Float32Array]"] = h["[object Float64Array]"] = h["[object Int8Array]"] = h["[object Int16Array]"] = h["[object Int32Array]"] = h["[object Uint8Array]"] = h["[object Uint8ClampedArray]"] = h["[object Uint16Array]"] = h["[object Uint32Array]"] = !0, h[n] = h["[object Array]"] = h["[object ArrayBuffer]"] = h["[object Boolean]"] = h["[object DataView]"] = h["[object Date]"] = h["[object Error]"] = h["[object Function]"] = h[a] = h["[object Number]"] = h[o] = h["[object RegExp]"] = h[i] = h["[object String]"] = h["[object WeakMap]"] = !1;
    var m = "object" == _typeof(e) && e && e.Object === Object && e,
      y = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      b = m || y || Function("return this")(),
      g = t && !t.nodeType && t,
      v = g && "object" == _typeof(r) && r && !r.nodeType && r,
      C = v && v.exports === g && m.process,
      _ = function () {
        try {
          return C && C.binding("util");
        } catch (e) {}
      }(),
      w = _ && _.isTypedArray;
    function S(e, t, r, n) {
      var a = -1,
        o = e ? e.length : 0;
      for (n && o && (r = e[++a]); ++a < o;) r = t(r, e[a], a, e);
      return r;
    }
    function j(e, t) {
      for (var r = -1, n = e ? e.length : 0; ++r < n;) if (t(e[r], r, e)) return !0;
      return !1;
    }
    function x(e, t, r, n, a) {
      return a(e, function (e, a, o) {
        r = n ? (n = !1, e) : t(r, e, a, o);
      }), r;
    }
    function N(e) {
      var t = !1;
      if (null != e && "function" != typeof e.toString) try {
        t = !!(e + "");
      } catch (e) {}
      return t;
    }
    function O(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (e, n) {
        r[++t] = [n, e];
      }), r;
    }
    function k(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (e) {
        r[++t] = e;
      }), r;
    }
    var E,
      T,
      I,
      A = Array.prototype,
      D = Function.prototype,
      P = Object.prototype,
      F = b["__core-js_shared__"],
      M = (E = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + E : "",
      R = D.toString,
      L = P.hasOwnProperty,
      z = P.toString,
      B = RegExp("^" + R.call(L).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      G = b.Symbol,
      $ = b.Uint8Array,
      V = P.propertyIsEnumerable,
      K = A.splice,
      U = (T = Object.keys, I = Object, function (e) {
        return T(I(e));
      }),
      q = Ne(b, "DataView"),
      H = Ne(b, "Map"),
      W = Ne(b, "Promise"),
      J = Ne(b, "Set"),
      Z = Ne(b, "WeakMap"),
      Q = Ne(Object, "create"),
      Y = Pe(q),
      X = Pe(H),
      ee = Pe(W),
      te = Pe(J),
      re = Pe(Z),
      ne = G ? G.prototype : void 0,
      ae = ne ? ne.valueOf : void 0,
      oe = ne ? ne.toString : void 0;
    function ie(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function ue(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function ce(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function se(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.__data__ = new ce(); ++t < r;) this.add(e[t]);
    }
    function le(e) {
      this.__data__ = new ue(e);
    }
    function fe(e, t) {
      var r = Le(e) || Re(e) ? function (e, t) {
          for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
          return n;
        }(e.length, String) : [],
        n = r.length,
        a = !!n;
      for (var o in e) !t && !L.call(e, o) || a && ("length" == o || ke(o, n)) || r.push(o);
      return r;
    }
    function de(e, t) {
      for (var r = e.length; r--;) if (Me(e[r][0], t)) return r;
      return -1;
    }
    ie.prototype.clear = function () {
      this.__data__ = Q ? Q(null) : {};
    }, ie.prototype.delete = function (e) {
      return this.has(e) && delete this.__data__[e];
    }, ie.prototype.get = function (e) {
      var t = this.__data__;
      if (Q) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return L.call(t, e) ? t[e] : void 0;
    }, ie.prototype.has = function (e) {
      var t = this.__data__;
      return Q ? void 0 !== t[e] : L.call(t, e);
    }, ie.prototype.set = function (e, t) {
      return this.__data__[e] = Q && void 0 === t ? "__lodash_hash_undefined__" : t, this;
    }, ue.prototype.clear = function () {
      this.__data__ = [];
    }, ue.prototype.delete = function (e) {
      var t = this.__data__,
        r = de(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : K.call(t, r, 1), !0);
    }, ue.prototype.get = function (e) {
      var t = this.__data__,
        r = de(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, ue.prototype.has = function (e) {
      return de(this.__data__, e) > -1;
    }, ue.prototype.set = function (e, t) {
      var r = this.__data__,
        n = de(r, e);
      return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
    }, ce.prototype.clear = function () {
      this.__data__ = {
        hash: new ie(),
        map: new (H || ue)(),
        string: new ie()
      };
    }, ce.prototype.delete = function (e) {
      return xe(this, e).delete(e);
    }, ce.prototype.get = function (e) {
      return xe(this, e).get(e);
    }, ce.prototype.has = function (e) {
      return xe(this, e).has(e);
    }, ce.prototype.set = function (e, t) {
      return xe(this, e).set(e, t), this;
    }, se.prototype.add = se.prototype.push = function (e) {
      return this.__data__.set(e, "__lodash_hash_undefined__"), this;
    }, se.prototype.has = function (e) {
      return this.__data__.has(e);
    }, le.prototype.clear = function () {
      this.__data__ = new ue();
    }, le.prototype.delete = function (e) {
      return this.__data__.delete(e);
    }, le.prototype.get = function (e) {
      return this.__data__.get(e);
    }, le.prototype.has = function (e) {
      return this.__data__.has(e);
    }, le.prototype.set = function (e, t) {
      var r = this.__data__;
      if (r instanceof ue) {
        var n = r.__data__;
        if (!H || n.length < 199) return n.push([e, t]), this;
        r = this.__data__ = new ce(n);
      }
      return r.set(e, t), this;
    };
    var pe,
      he,
      me = (pe = function pe(e, t) {
        return e && ye(e, t, qe);
      }, function (e, t) {
        if (null == e) return e;
        if (!ze(e)) return pe(e, t);
        for (var r = e.length, n = he ? r : -1, a = Object(e); (he ? n-- : ++n < r) && !1 !== t(a[n], n, a););
        return e;
      }),
      ye = function (e) {
        return function (t, r, n) {
          for (var a = -1, o = Object(t), i = n(t), u = i.length; u--;) {
            var c = i[e ? u : ++a];
            if (!1 === r(o[c], c, o)) break;
          }
          return t;
        };
      }();
    function be(e, t) {
      for (var r = 0, n = (t = Ee(t, e) ? [t] : Se(t)).length; null != e && r < n;) e = e[De(t[r++])];
      return r && r == n ? e : void 0;
    }
    function ge(e, t) {
      return null != e && t in Object(e);
    }
    function ve(e, t, r, u, c) {
      return e === t || (null == e || null == t || !$e(e) && !Ve(t) ? e != e && t != t : function (e, t, r, u, c, s) {
        var l = Le(e),
          f = Le(t),
          d = "[object Array]",
          p = "[object Array]";
        l || (d = (d = Oe(e)) == n ? o : d);
        f || (p = (p = Oe(t)) == n ? o : p);
        var h = d == o && !N(e),
          m = p == o && !N(t),
          y = d == p;
        if (y && !h) return s || (s = new le()), l || Ue(e) ? je(e, t, r, u, c, s) : function (e, t, r, n, o, u, c) {
          switch (r) {
            case "[object DataView]":
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              e = e.buffer, t = t.buffer;
            case "[object ArrayBuffer]":
              return !(e.byteLength != t.byteLength || !n(new $(e), new $(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return Me(+e, +t);
            case "[object Error]":
              return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
              return e == t + "";
            case a:
              var s = O;
            case i:
              var l = 2 & u;
              if (s || (s = k), e.size != t.size && !l) return !1;
              var f = c.get(e);
              if (f) return f == t;
              u |= 1, c.set(e, t);
              var d = je(s(e), s(t), n, o, u, c);
              return c.delete(e), d;
            case "[object Symbol]":
              if (ae) return ae.call(e) == ae.call(t);
          }
          return !1;
        }(e, t, d, r, u, c, s);
        if (!(2 & c)) {
          var b = h && L.call(e, "__wrapped__"),
            g = m && L.call(t, "__wrapped__");
          if (b || g) {
            var v = b ? e.value() : e,
              C = g ? t.value() : t;
            return s || (s = new le()), r(v, C, u, c, s);
          }
        }
        if (!y) return !1;
        return s || (s = new le()), function (e, t, r, n, a, o) {
          var i = 2 & a,
            u = qe(e),
            c = u.length,
            s = qe(t).length;
          if (c != s && !i) return !1;
          var l = c;
          for (; l--;) {
            var f = u[l];
            if (!(i ? f in t : L.call(t, f))) return !1;
          }
          var d = o.get(e);
          if (d && o.get(t)) return d == t;
          var p = !0;
          o.set(e, t), o.set(t, e);
          var h = i;
          for (; ++l < c;) {
            f = u[l];
            var m = e[f],
              y = t[f];
            if (n) var b = i ? n(y, m, f, t, e, o) : n(m, y, f, e, t, o);
            if (!(void 0 === b ? m === y || r(m, y, n, a, o) : b)) {
              p = !1;
              break;
            }
            h || (h = "constructor" == f);
          }
          if (p && !h) {
            var g = e.constructor,
              v = t.constructor;
            g == v || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof v && v instanceof v || (p = !1);
          }
          return o.delete(e), o.delete(t), p;
        }(e, t, r, u, c, s);
      }(e, t, ve, r, u, c));
    }
    function Ce(e) {
      return !(!$e(e) || function (e) {
        return !!M && M in e;
      }(e)) && (Be(e) || N(e) ? B : d).test(Pe(e));
    }
    function _e(e) {
      return "function" == typeof e ? e : null == e ? He : "object" == _typeof(e) ? Le(e) ? function (e, t) {
        if (Ee(e) && Te(t)) return Ie(De(e), t);
        return function (r) {
          var n = function (e, t, r) {
            var n = null == e ? void 0 : be(e, t);
            return void 0 === n ? r : n;
          }(r, e);
          return void 0 === n && n === t ? function (e, t) {
            return null != e && function (e, t, r) {
              t = Ee(t, e) ? [t] : Se(t);
              var n,
                a = -1,
                o = t.length;
              for (; ++a < o;) {
                var i = De(t[a]);
                if (!(n = null != e && r(e, i))) break;
                e = e[i];
              }
              if (n) return n;
              return !!(o = e ? e.length : 0) && Ge(o) && ke(i, o) && (Le(e) || Re(e));
            }(e, t, ge);
          }(r, e) : ve(t, n, void 0, 3);
        };
      }(e[0], e[1]) : function (e) {
        var t = function (e) {
          var t = qe(e),
            r = t.length;
          for (; r--;) {
            var n = t[r],
              a = e[n];
            t[r] = [n, a, Te(a)];
          }
          return t;
        }(e);
        if (1 == t.length && t[0][2]) return Ie(t[0][0], t[0][1]);
        return function (r) {
          return r === e || function (e, t, r, n) {
            var a = r.length,
              o = a,
              i = !n;
            if (null == e) return !o;
            for (e = Object(e); a--;) {
              var u = r[a];
              if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
            }
            for (; ++a < o;) {
              var c = (u = r[a])[0],
                s = e[c],
                l = u[1];
              if (i && u[2]) {
                if (void 0 === s && !(c in e)) return !1;
              } else {
                var f = new le();
                if (n) var d = n(s, l, c, e, t, f);
                if (!(void 0 === d ? ve(l, s, n, 3, f) : d)) return !1;
              }
            }
            return !0;
          }(r, e, t);
        };
      }(e) : Ee(t = e) ? (r = De(t), function (e) {
        return null == e ? void 0 : e[r];
      }) : function (e) {
        return function (t) {
          return be(t, e);
        };
      }(t);
      var t, r;
    }
    function we(e) {
      if (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || P, t !== n) return U(e);
      var t,
        r,
        n,
        a = [];
      for (var o in Object(e)) L.call(e, o) && "constructor" != o && a.push(o);
      return a;
    }
    function Se(e) {
      return Le(e) ? e : Ae(e);
    }
    function je(e, t, r, n, a, o) {
      var i = 2 & a,
        u = e.length,
        c = t.length;
      if (u != c && !(i && c > u)) return !1;
      var s = o.get(e);
      if (s && o.get(t)) return s == t;
      var l = -1,
        f = !0,
        d = 1 & a ? new se() : void 0;
      for (o.set(e, t), o.set(t, e); ++l < u;) {
        var p = e[l],
          h = t[l];
        if (n) var m = i ? n(h, p, l, t, e, o) : n(p, h, l, e, t, o);
        if (void 0 !== m) {
          if (m) continue;
          f = !1;
          break;
        }
        if (d) {
          if (!j(t, function (e, t) {
            if (!d.has(t) && (p === e || r(p, e, n, a, o))) return d.add(t);
          })) {
            f = !1;
            break;
          }
        } else if (p !== h && !r(p, h, n, a, o)) {
          f = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), f;
    }
    function xe(e, t) {
      var r,
        n,
        a = e.__data__;
      return ("string" == (n = _typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? a["string" == typeof t ? "string" : "hash"] : a.map;
    }
    function Ne(e, t) {
      var r = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return Ce(r) ? r : void 0;
    }
    var Oe = function Oe(e) {
      return z.call(e);
    };
    function ke(e, t) {
      return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || p.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function Ee(e, t) {
      if (Le(e)) return !1;
      var r = _typeof(e);
      return !("number" != r && "symbol" != r && "boolean" != r && null != e && !Ke(e)) || c.test(e) || !u.test(e) || null != t && e in Object(t);
    }
    function Te(e) {
      return e == e && !$e(e);
    }
    function Ie(e, t) {
      return function (r) {
        return null != r && r[e] === t && (void 0 !== t || e in Object(r));
      };
    }
    (q && "[object DataView]" != Oe(new q(new ArrayBuffer(1))) || H && Oe(new H()) != a || W && "[object Promise]" != Oe(W.resolve()) || J && Oe(new J()) != i || Z && "[object WeakMap]" != Oe(new Z())) && (Oe = function Oe(e) {
      var t = z.call(e),
        r = t == o ? e.constructor : void 0,
        n = r ? Pe(r) : void 0;
      if (n) switch (n) {
        case Y:
          return "[object DataView]";
        case X:
          return a;
        case ee:
          return "[object Promise]";
        case te:
          return i;
        case re:
          return "[object WeakMap]";
      }
      return t;
    });
    var Ae = Fe(function (e) {
      var t;
      e = null == (t = e) ? "" : function (e) {
        if ("string" == typeof e) return e;
        if (Ke(e)) return oe ? oe.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }(t);
      var r = [];
      return s.test(e) && r.push(""), e.replace(l, function (e, t, n, a) {
        r.push(n ? a.replace(f, "$1") : t || e);
      }), r;
    });
    function De(e) {
      if ("string" == typeof e || Ke(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    function Pe(e) {
      if (null != e) {
        try {
          return R.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    function Fe(e, t) {
      if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
      var r = function r() {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return r.cache = o.set(a, i), i;
      };
      return r.cache = new (Fe.Cache || ce)(), r;
    }
    function Me(e, t) {
      return e === t || e != e && t != t;
    }
    function Re(e) {
      return function (e) {
        return Ve(e) && ze(e);
      }(e) && L.call(e, "callee") && (!V.call(e, "callee") || z.call(e) == n);
    }
    Fe.Cache = ce;
    var Le = Array.isArray;
    function ze(e) {
      return null != e && Ge(e.length) && !Be(e);
    }
    function Be(e) {
      var t = $e(e) ? z.call(e) : "";
      return "[object Function]" == t || "[object GeneratorFunction]" == t;
    }
    function Ge(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    }
    function $e(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function Ve(e) {
      return !!e && "object" == _typeof(e);
    }
    function Ke(e) {
      return "symbol" == _typeof(e) || Ve(e) && "[object Symbol]" == z.call(e);
    }
    var Ue = w ? function (e) {
      return function (t) {
        return e(t);
      };
    }(w) : function (e) {
      return Ve(e) && Ge(e.length) && !!h[z.call(e)];
    };
    function qe(e) {
      return ze(e) ? fe(e) : we(e);
    }
    function He(e) {
      return e;
    }
    r.exports = function (e, t, r) {
      var n = Le(e) ? S : x,
        a = arguments.length < 3;
      return n(e, _e(t), r, a, me);
    };
  }).call(this, r(3), r(7)(e));
}, function (e, t) {
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function get() {
        return e.l;
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function get() {
        return e.i;
      }
    }), e.webpackPolyfill = 1), e;
  };
}, function (e, t) {
  String.prototype.padEnd || (String.prototype.padEnd = function (e, t) {
    return e >>= 0, t = String(void 0 !== t ? t : " "), this.length > e ? String(this) : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)), String(this) + t.slice(0, e));
  });
}, function (e, t, r) {
  "use strict";

  function n(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  function a(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
  }
  function o(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
      }
    }(e) || a(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }
  function i(e) {
    if (Array.isArray(e)) return e;
  }
  function u() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function c(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function s(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }
  function f(e) {
    return (f = "function" == typeof Symbol && "symbol" === l(Symbol.iterator) ? function (e) {
      return l(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : l(e);
    })(e);
  }
  function d(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function p(e) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function h(e, t) {
    return (h = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }
  r.r(t);
  var m = r(0),
    y = r.n(m),
    b = r(5),
    g = r.n(b),
    v = r(4),
    C = r.n(v),
    _ = r(6),
    w = r.n(_),
    S = r(2),
    j = r.n(S),
    x = r(1),
    N = r.n(x);
  r(8);
  function O(e, t) {
    return i(e) || function (e, t) {
      var r = [],
        n = !0,
        a = !1,
        o = void 0;
      try {
        for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
      } catch (e) {
        a = !0, o = e;
      } finally {
        try {
          n || null == u.return || u.return();
        } finally {
          if (a) throw o;
        }
      }
      return r;
    }(e, t) || u();
  }
  var k = [["Afghanistan", ["asia"], "af", "93"], ["Albania", ["europe"], "al", "355"], ["Algeria", ["africa", "north-africa"], "dz", "213"], ["Andorra", ["europe"], "ad", "376"], ["Angola", ["africa"], "ao", "244"], ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"], ["Argentina", ["america", "south-america"], "ar", "54", "(..) ........", 0, ["11", "221", "223", "261", "264", "2652", "280", "2905", "291", "2920", "2966", "299", "341", "342", "343", "351", "376", "379", "381", "3833", "385", "387", "388"]], ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"], ["Aruba", ["america", "carribean"], "aw", "297"], ["Australia", ["oceania"], "au", "61", "(..) .... ....", 0, ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"]], ["Austria", ["europe", "eu-union"], "at", "43"], ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."], ["Bahamas", ["america", "carribean"], "bs", "1242"], ["Bahrain", ["middle-east"], "bh", "973"], ["Bangladesh", ["asia"], "bd", "880"], ["Barbados", ["america", "carribean"], "bb", "1246"], ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."], ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."], ["Belize", ["america", "central-america"], "bz", "501"], ["Benin", ["africa"], "bj", "229"], ["Bhutan", ["asia"], "bt", "975"], ["Bolivia", ["america", "south-america"], "bo", "591"], ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"], ["Botswana", ["africa"], "bw", "267"], ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."], ["British Indian Ocean Territory", ["asia"], "io", "246"], ["Brunei", ["asia"], "bn", "673"], ["Bulgaria", ["europe", "eu-union"], "bg", "359"], ["Burkina Faso", ["africa"], "bf", "226"], ["Burundi", ["africa"], "bi", "257"], ["Cambodia", ["asia"], "kh", "855"], ["Cameroon", ["africa"], "cm", "237"], ["Canada", ["america", "north-america"], "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", ["africa"], "cv", "238"], ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1], ["Central African Republic", ["africa"], "cf", "236"], ["Chad", ["africa"], "td", "235"], ["Chile", ["america", "south-america"], "cl", "56"], ["China", ["asia"], "cn", "86", "..-........."], ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."], ["Comoros", ["africa"], "km", "269"], ["Congo", ["africa"], "cd", "243"], ["Congo", ["africa"], "cg", "242"], ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."], ["Côte d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."], ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"], ["Cuba", ["america", "carribean"], "cu", "53"], ["Curaçao", ["america", "carribean"], "cw", "599", "", 0], ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"], ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."], ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."], ["Djibouti", ["africa"], "dj", "253"], ["Dominica", ["america", "carribean"], "dm", "1767"], ["Dominican Republic", ["america", "carribean"], "do", "1", "", 2, ["809", "829", "849"]], ["Ecuador", ["america", "south-america"], "ec", "593"], ["Egypt", ["africa", "north-africa"], "eg", "20"], ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."], ["Equatorial Guinea", ["africa"], "gq", "240"], ["Eritrea", ["africa"], "er", "291"], ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"], ["Ethiopia", ["africa"], "et", "251"], ["Fiji", ["oceania"], "fj", "679"], ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."], ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."], ["French Guiana", ["america", "south-america"], "gf", "594"], ["French Polynesia", ["oceania"], "pf", "689"], ["Gabon", ["africa"], "ga", "241"], ["Gambia", ["africa"], "gm", "220"], ["Georgia", ["asia", "ex-ussr"], "ge", "995"], ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"], ["Ghana", ["africa"], "gh", "233"], ["Greece", ["europe", "eu-union"], "gr", "30"], ["Grenada", ["america", "carribean"], "gd", "1473"], ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0], ["Guam", ["oceania"], "gu", "1671"], ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."], ["Guinea", ["africa"], "gn", "224"], ["Guinea-Bissau", ["africa"], "gw", "245"], ["Guyana", ["america", "south-america"], "gy", "592"], ["Haiti", ["america", "carribean"], "ht", "509", "....-...."], ["Honduras", ["america", "central-america"], "hn", "504"], ["Hong Kong", ["asia"], "hk", "852", ".... ...."], ["Hungary", ["europe", "eu-union"], "hu", "36"], ["Iceland", ["europe"], "is", "354", "... ...."], ["India", ["asia"], "in", "91", ".....-....."], ["Indonesia", ["asia"], "id", "62"], ["Iran", ["middle-east"], "ir", "98", "... ... ...."], ["Iraq", ["middle-east"], "iq", "964"], ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."], ["Israel", ["middle-east"], "il", "972", "... ... ...."], ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0], ["Jamaica", ["america", "carribean"], "jm", "1876"], ["Japan", ["asia"], "jp", "81", ".. .... ...."], ["Jordan", ["middle-east"], "jo", "962"], ["Kazakhstan", ["asia", "ex-ussr"], "kz", "7", "... ...-..-..", 1, ["310", "311", "312", "313", "315", "318", "321", "324", "325", "326", "327", "336", "7172", "73622"]], ["Kenya", ["africa"], "ke", "254"], ["Kiribati", ["oceania"], "ki", "686"], ["Kosovo", ["europe", "ex-yugos"], "xk", "383"], ["Kuwait", ["middle-east"], "kw", "965"], ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."], ["Laos", ["asia"], "la", "856"], ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."], ["Lebanon", ["middle-east"], "lb", "961"], ["Lesotho", ["africa"], "ls", "266"], ["Liberia", ["africa"], "lr", "231"], ["Libya", ["africa", "north-africa"], "ly", "218"], ["Liechtenstein", ["europe"], "li", "423"], ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"], ["Luxembourg", ["europe", "eu-union"], "lu", "352"], ["Macau", ["asia"], "mo", "853"], ["Macedonia", ["europe", "ex-yugos"], "mk", "389"], ["Madagascar", ["africa"], "mg", "261"], ["Malawi", ["africa"], "mw", "265"], ["Malaysia", ["asia"], "my", "60", "..-....-...."], ["Maldives", ["asia"], "mv", "960"], ["Mali", ["africa"], "ml", "223"], ["Malta", ["europe", "eu-union"], "mt", "356"], ["Marshall Islands", ["oceania"], "mh", "692"], ["Martinique", ["america", "carribean"], "mq", "596"], ["Mauritania", ["africa"], "mr", "222"], ["Mauritius", ["africa"], "mu", "230"], ["Mexico", ["america", "central-america"], "mx", "52", "... ... ....", 0, ["55", "81", "33", "656", "664", "998", "774", "229"]], ["Micronesia", ["oceania"], "fm", "691"], ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."], ["Monaco", ["europe"], "mc", "377"], ["Mongolia", ["asia"], "mn", "976"], ["Montenegro", ["europe", "ex-yugos"], "me", "382"], ["Morocco", ["africa", "north-africa"], "ma", "212"], ["Mozambique", ["africa"], "mz", "258"], ["Myanmar", ["asia"], "mm", "95"], ["Namibia", ["africa"], "na", "264"], ["Nauru", ["africa"], "nr", "674"], ["Nepal", ["asia"], "np", "977"], ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"], ["New Caledonia", ["oceania"], "nc", "687"], ["New Zealand", ["oceania"], "nz", "64", "...-...-...."], ["Nicaragua", ["america", "central-america"], "ni", "505"], ["Niger", ["africa"], "ne", "227"], ["Nigeria", ["africa"], "ng", "234"], ["North Korea", ["asia"], "kp", "850"], ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."], ["Oman", ["middle-east"], "om", "968"], ["Pakistan", ["asia"], "pk", "92", "...-......."], ["Palau", ["oceania"], "pw", "680"], ["Palestine", ["middle-east"], "ps", "970"], ["Panama", ["america", "central-america"], "pa", "507"], ["Papua New Guinea", ["oceania"], "pg", "675"], ["Paraguay", ["america", "south-america"], "py", "595"], ["Peru", ["america", "south-america"], "pe", "51"], ["Philippines", ["asia"], "ph", "63", ".... ......."], ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."], ["Portugal", ["europe", "eu-union"], "pt", "351"], ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]], ["Qatar", ["middle-east"], "qa", "974"], ["Réunion", ["africa"], "re", "262"], ["Romania", ["europe", "eu-union"], "ro", "40"], ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 0], ["Rwanda", ["africa"], "rw", "250"], ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"], ["Saint Lucia", ["america", "carribean"], "lc", "1758"], ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"], ["Samoa", ["oceania"], "ws", "685"], ["San Marino", ["europe"], "sm", "378"], ["São Tomé and Príncipe", ["africa"], "st", "239"], ["Saudi Arabia", ["middle-east"], "sa", "966"], ["Senegal", ["africa"], "sn", "221"], ["Serbia", ["europe", "ex-yugos"], "rs", "381"], ["Seychelles", ["africa"], "sc", "248"], ["Sierra Leone", ["africa"], "sl", "232"], ["Singapore", ["asia"], "sg", "65", "....-...."], ["Slovakia", ["europe", "eu-union"], "sk", "421"], ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"], ["Solomon Islands", ["oceania"], "sb", "677"], ["Somalia", ["africa"], "so", "252"], ["South Africa", ["africa"], "za", "27"], ["South Korea", ["asia"], "kr", "82", "... .... ...."], ["South Sudan", ["africa", "north-africa"], "ss", "211"], ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."], ["Sri Lanka", ["asia"], "lk", "94"], ["Sudan", ["africa"], "sd", "249"], ["Suriname", ["america", "south-america"], "sr", "597"], ["Swaziland", ["africa"], "sz", "268"], ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."], ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."], ["Syria", ["middle-east"], "sy", "963"], ["Taiwan", ["asia"], "tw", "886"], ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"], ["Tanzania", ["africa"], "tz", "255"], ["Thailand", ["asia"], "th", "66"], ["Timor-Leste", ["asia"], "tl", "670"], ["Togo", ["africa"], "tg", "228"], ["Tonga", ["oceania"], "to", "676"], ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"], ["Tunisia", ["africa", "north-africa"], "tn", "216"], ["Turkey", ["europe"], "tr", "90", "... ... .. .."], ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"], ["Tuvalu", ["asia"], "tv", "688"], ["Uganda", ["africa"], "ug", "256"], ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."], ["United Arab Emirates", ["middle-east"], "ae", "971"], ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"], ["United States", ["america", "north-america"], "us", "1", "(...) ...-....", 0, ["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]], ["Uruguay", ["america", "south-america"], "uy", "598"], ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."], ["Vanuatu", ["oceania"], "vu", "678"], ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1], ["Venezuela", ["america", "south-america"], "ve", "58"], ["Vietnam", ["asia"], "vn", "84"], ["Yemen", ["middle-east"], "ye", "967"], ["Zambia", ["africa"], "zm", "260"], ["Zimbabwe", ["africa"], "zw", "263"]],
    E = [["American Samoa", ["oceania"], "as", "1684"], ["Anguilla", ["america", "carribean"], "ai", "1264"], ["Bermuda", ["america", "north-america"], "bm", "1441"], ["British Virgin Islands", ["america", "carribean"], "vg", "1284"], ["Cayman Islands", ["america", "carribean"], "ky", "1345"], ["Cook Islands", ["oceania"], "ck", "682"], ["Falkland Islands", ["america", "south-america"], "fk", "500"], ["Faroe Islands", ["europe"], "fo", "298"], ["Gibraltar", ["europe"], "gi", "350"], ["Greenland", ["america"], "gl", "299"], ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"], ["Montserrat", ["america", "carribean"], "ms", "1664"], ["Niue", ["asia"], "nu", "683"], ["Norfolk Island", ["oceania"], "nf", "672"], ["Northern Mariana Islands", ["oceania"], "mp", "1670"], ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1], ["Saint Helena", ["africa"], "sh", "290"], ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2], ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"], ["Sint Maarten", ["america", "carribean"], "sx", "1721"], ["Tokelau", ["oceania"], "tk", "690"], ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"], ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"], ["Wallis and Futuna", ["oceania"], "wf", "681"]];
  function T(e, t, r, n, a) {
    return !r || a ? e + "".padEnd(t.length, ".") + " " + n : e + "".padEnd(t.length, ".") + " " + r;
  }
  function I(e, t, r, a, i) {
    var u,
      c,
      s = [];
    return c = !0 === t, [(u = []).concat.apply(u, o(e.map(function (e) {
      var o = {
          name: e[0],
          regions: e[1],
          iso2: e[2],
          countryCode: e[3],
          dialCode: e[3],
          format: T(r, e[3], e[4], a, i),
          priority: e[5] || 0
        },
        u = [];
      return e[6] && e[6].map(function (t) {
        var r = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            }))), a.forEach(function (t) {
              n(e, t, r[t]);
            });
          }
          return e;
        }({}, o);
        r.dialCode = e[3] + t, r.isAreaCode = !0, r.areaCodeLength = t.length, u.push(r);
      }), u.length > 0 ? (o.mainCode = !0, c || "Array" === t.constructor.name && t.includes(e[2]) ? (o.hasAreaCodes = !0, [o].concat(u)) : (s = s.concat(u), [o])) : [o];
    }))), s];
  }
  function A(e, t, r, n) {
    if (null !== r) {
      var a = Object.keys(r),
        o = Object.values(r);
      a.forEach(function (r, a) {
        if (n) return e.push([r, o[a]]);
        var i = e.findIndex(function (e) {
          return e[0] === r;
        });
        if (-1 === i) {
          var u = [r];
          u[t] = o[a], e.push(u);
        } else e[i][t] = o[a];
      });
    }
  }
  function D(e, t) {
    return 0 === t.length ? e : e.map(function (e) {
      var r = t.findIndex(function (t) {
        return t[0] === e[2];
      });
      if (-1 === r) return e;
      var n = t[r];
      return n[1] && (e[4] = n[1]), n[3] && (e[5] = n[3]), n[2] && (e[6] = n[2]), e;
    });
  }
  var P = function e(t, r, n, a, i, u, s, l, f, d, p, h, m, y) {
      c(this, e), this.filterRegions = function (e, t) {
        if ("string" == typeof e) {
          var r = e;
          return t.filter(function (e) {
            return e.regions.some(function (e) {
              return e === r;
            });
          });
        }
        return t.filter(function (t) {
          return e.map(function (e) {
            return t.regions.some(function (t) {
              return t === e;
            });
          }).some(function (e) {
            return e;
          });
        });
      }, this.sortTerritories = function (e, t) {
        var r = [].concat(o(e), o(t));
        return r.sort(function (e, t) {
          return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
        }), r;
      }, this.getFilteredCountryList = function (e, t, r) {
        return 0 === e.length ? t : r ? e.map(function (e) {
          var r = t.find(function (t) {
            return t.iso2 === e;
          });
          if (r) return r;
        }).filter(function (e) {
          return e;
        }) : t.filter(function (t) {
          return e.some(function (e) {
            return e === t.iso2;
          });
        });
      }, this.localizeCountries = function (e, t, r) {
        for (var n = 0; n < e.length; n++) void 0 !== t[e[n].iso2] ? e[n].localName = t[e[n].iso2] : void 0 !== t[e[n].name] && (e[n].localName = t[e[n].name]);
        return r || e.sort(function (e, t) {
          return e.localName < t.localName ? -1 : e.localName > t.localName ? 1 : 0;
        }), e;
      }, this.getCustomAreas = function (e, t) {
        for (var r = [], n = 0; n < t.length; n++) {
          var a = JSON.parse(JSON.stringify(e));
          a.dialCode += t[n], r.push(a);
        }
        return r;
      }, this.excludeCountries = function (e, t) {
        return 0 === t.length ? e : e.filter(function (e) {
          return !t.includes(e.iso2);
        });
      };
      var b = function (e, t, r) {
          var n = [];
          return A(n, 1, e, !0), A(n, 3, t), A(n, 2, r), n;
        }(l, f, d),
        g = D(JSON.parse(JSON.stringify(k)), b),
        v = D(JSON.parse(JSON.stringify(E)), b),
        C = O(I(g, t, h, m, y), 2),
        _ = C[0],
        w = C[1];
      if (r) {
        var S = O(I(v, t, h, m, y), 2),
          j = S[0];
        S[1];
        _ = this.sortTerritories(j, _);
      }
      n && (_ = this.filterRegions(n, _)), this.onlyCountries = this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(a, _, s.includes("onlyCountries")), u), p, s.includes("onlyCountries")), this.preferredCountries = 0 === i.length ? [] : this.localizeCountries(this.getFilteredCountryList(i, _, s.includes("preferredCountries")), p, s.includes("preferredCountries")), this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(a, w), u);
    },
    F = function (e) {
      function t(e) {
        var r;
        c(this, t), (r = function (e, t) {
          return !t || "object" !== f(t) && "function" != typeof t ? d(e) : t;
        }(this, p(t).call(this, e))).getProbableCandidate = C()(function (e) {
          return e && 0 !== e.length ? r.state.onlyCountries.filter(function (t) {
            return j()(t.name.toLowerCase(), e.toLowerCase());
          }, d(d(r)))[0] : null;
        }), r.guessSelectedCountry = C()(function (e, t, n, a) {
          var o;
          if (!1 === r.props.enableAreaCodes && (a.some(function (t) {
            if (j()(e, t.dialCode)) return n.some(function (e) {
              if (t.iso2 === e.iso2 && e.mainCode) return o = e, !0;
            }), !0;
          }), o)) return o;
          var i = n.find(function (e) {
            return e.iso2 == t;
          });
          if ("" === e.trim()) return i;
          var u = n.reduce(function (t, r) {
            if (j()(e, r.dialCode)) {
              if (r.dialCode.length > t.dialCode.length) return r;
              if (r.dialCode.length === t.dialCode.length && r.priority < t.priority) return r;
            }
            return t;
          }, {
            dialCode: "",
            priority: 10001
          }, d(d(r)));
          return u.name ? u : i;
        }), r.updateCountry = function (e) {
          var t,
            n = r.state.onlyCountries;
          (t = e.indexOf(0) >= "0" && e.indexOf(0) <= "9" ? n.find(function (t) {
            return t.dialCode == +e;
          }) : n.find(function (t) {
            return t.iso2 == e;
          })) && t.dialCode && r.setState({
            selectedCountry: t,
            formattedNumber: r.props.disableCountryCode ? "" : r.formatNumber(t.dialCode, t)
          });
        }, r.scrollTo = function (e, t) {
          if (e) {
            var n = r.dropdownRef;
            if (n && document.body) {
              var a = n.offsetHeight,
                o = n.getBoundingClientRect().top + document.body.scrollTop,
                i = o + a,
                u = e,
                c = u.getBoundingClientRect(),
                s = u.offsetHeight,
                l = c.top + document.body.scrollTop,
                f = l + s,
                d = l - o + n.scrollTop,
                p = a / 2 - s / 2;
              if (r.props.enableSearch ? l < o + 32 : l < o) t && (d -= p), n.scrollTop = d;else if (f > i) {
                t && (d += p);
                var h = a - s;
                n.scrollTop = d - h;
              }
            }
          }
        }, r.scrollToTop = function () {
          var e = r.dropdownRef;
          e && document.body && (e.scrollTop = 0);
        }, r.formatNumber = function (e, t) {
          if (!t) return e;
          var n,
            o = t.format,
            c = r.props,
            s = c.disableCountryCode,
            l = c.enableAreaCodeStretch,
            f = c.enableLongNumbers,
            d = c.autoFormat;
          if (s ? ((n = o.split(" ")).shift(), n = n.join(" ")) : l && t.isAreaCode ? ((n = o.split(" "))[1] = n[1].replace(/\.+/, "".padEnd(t.areaCodeLength, ".")), n = n.join(" ")) : n = o, !e || 0 === e.length) return s ? "" : r.props.prefix;
          if (e && e.length < 2 || !n || !d) return s ? e : r.props.prefix + e;
          var p,
            h = w()(n, function (e, t) {
              if (0 === e.remainingText.length) return e;
              if ("." !== t) return {
                formattedText: e.formattedText + t,
                remainingText: e.remainingText
              };
              var r,
                n = i(r = e.remainingText) || a(r) || u(),
                o = n[0],
                c = n.slice(1);
              return {
                formattedText: e.formattedText + o,
                remainingText: c
              };
            }, {
              formattedText: "",
              remainingText: e.split("")
            });
          return (p = f ? h.formattedText + h.remainingText.join("") : h.formattedText).includes("(") && !p.includes(")") && (p += ")"), p;
        }, r.cursorToEnd = function () {
          var e = r.numberInputRef;
          if (document.activeElement === e) {
            e.focus();
            var t = e.value.length;
            ")" === e.value.charAt(t - 1) && (t -= 1), e.setSelectionRange(t, t);
          }
        }, r.getElement = function (e) {
          return r["flag_no_".concat(e)];
        }, r.getCountryData = function () {
          return r.state.selectedCountry ? {
            name: r.state.selectedCountry.name || "",
            dialCode: r.state.selectedCountry.dialCode || "",
            countryCode: r.state.selectedCountry.iso2 || "",
            format: r.state.selectedCountry.format || ""
          } : {};
        }, r.handleFlagDropdownClick = function (e) {
          if (e.preventDefault(), r.state.showDropdown || !r.props.disabled) {
            var t = r.state,
              n = t.preferredCountries,
              a = t.onlyCountries,
              o = t.selectedCountry,
              i = r.concatPreferredCountries(n, a).findIndex(function (e) {
                return e.dialCode === o.dialCode && e.iso2 === o.iso2;
              });
            r.setState({
              showDropdown: !r.state.showDropdown,
              highlightCountryIndex: i
            }, function () {
              r.state.showDropdown && r.scrollTo(r.getElement(r.state.highlightCountryIndex));
            });
          }
        }, r.handleInput = function (e) {
          var t = e.target.value,
            n = r.props,
            a = n.prefix,
            o = n.onChange,
            i = r.props.disableCountryCode ? "" : a,
            u = r.state.selectedCountry,
            c = r.state.freezeSelection;
          if (!r.props.countryCodeEditable) {
            var s = a + (u.hasAreaCodes ? r.state.onlyCountries.find(function (e) {
              return e.iso2 === u.iso2 && e.mainCode;
            }).dialCode : u.dialCode);
            if (t.slice(0, s.length) !== s) return;
          }
          if (t === a) return o && o("", r.getCountryData(), e, ""), r.setState({
            formattedNumber: ""
          });
          if (t.replace(/\D/g, "").length > 15) {
            if (!1 === r.props.enableLongNumbers) return;
            if ("number" == typeof r.props.enableLongNumbers && t.replace(/\D/g, "").length > r.props.enableLongNumbers) return;
          }
          if (t !== r.state.formattedNumber) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var l = r.props.country,
              f = r.state,
              d = f.onlyCountries,
              p = f.selectedCountry,
              h = f.hiddenAreaCodes;
            if (o && e.persist(), t.length > 0) {
              var m = t.replace(/\D/g, "");
              (!r.state.freezeSelection || p && p.dialCode.length > m.length) && (u = r.props.disableCountryGuess ? p : r.guessSelectedCountry(m.substring(0, 6), l, d, h) || p, c = !1), i = r.formatNumber(m, u), u = u.dialCode ? u : p;
            }
            var y = e.target.selectionStart,
              b = e.target.selectionStart,
              g = r.state.formattedNumber,
              v = i.length - g.length;
            r.setState({
              formattedNumber: i,
              freezeSelection: c,
              selectedCountry: u
            }, function () {
              v > 0 && (b -= v), ")" == i.charAt(i.length - 1) ? r.numberInputRef.setSelectionRange(i.length - 1, i.length - 1) : b > 0 && g.length >= i.length ? r.numberInputRef.setSelectionRange(b, b) : y < g.length && r.numberInputRef.setSelectionRange(y, y), o && o(i.replace(/[^0-9]+/g, ""), r.getCountryData(), e, i);
            });
          }
        }, r.handleInputClick = function (e) {
          r.setState({
            showDropdown: !1
          }), r.props.onClick && r.props.onClick(e, r.getCountryData());
        }, r.handleDoubleClick = function (e) {
          var t = e.target.value.length;
          e.target.setSelectionRange(0, t);
        }, r.handleFlagItemClick = function (e, t) {
          var n = r.state.selectedCountry,
            a = r.state.onlyCountries.find(function (t) {
              return t == e;
            });
          if (a) {
            var o = r.state.formattedNumber.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""),
              i = o.length > 1 ? o.replace(n.dialCode, a.dialCode) : a.dialCode,
              u = r.formatNumber(i.replace(/\D/g, ""), a);
            r.setState({
              showDropdown: !1,
              selectedCountry: a,
              freezeSelection: !0,
              formattedNumber: u,
              searchValue: ""
            }, function () {
              r.cursorToEnd(), r.props.onChange && r.props.onChange(u.replace(/[^0-9]+/g, ""), r.getCountryData(), t, u);
            });
          }
        }, r.handleInputFocus = function (e) {
          r.numberInputRef && r.numberInputRef.value === r.props.prefix && r.state.selectedCountry && !r.props.disableCountryCode && r.setState({
            formattedNumber: r.props.prefix + r.state.selectedCountry.dialCode
          }, function () {
            r.props.jumpCursorToEnd && setTimeout(r.cursorToEnd, 0);
          }), r.setState({
            placeholder: ""
          }), r.props.onFocus && r.props.onFocus(e, r.getCountryData()), r.props.jumpCursorToEnd && setTimeout(r.cursorToEnd, 0);
        }, r.handleInputBlur = function (e) {
          e.target.value || r.setState({
            placeholder: r.props.placeholder
          }), r.props.onBlur && r.props.onBlur(e, r.getCountryData());
        }, r.handleInputCopy = function (e) {
          if (r.props.copyNumbersOnly) {
            var t = window.getSelection().toString().replace(/[^0-9]+/g, "");
            e.clipboardData.setData("text/plain", t), e.preventDefault();
          }
        }, r.getHighlightCountryIndex = function (e) {
          var t = r.state.highlightCountryIndex + e;
          return t < 0 || t >= r.state.onlyCountries.length + r.state.preferredCountries.length ? t - e : r.props.enableSearch && t > r.getSearchFilteredCountries().length ? 0 : t;
        }, r.searchCountry = function () {
          var e = r.getProbableCandidate(r.state.queryString) || r.state.onlyCountries[0],
            t = r.state.onlyCountries.findIndex(function (t) {
              return t == e;
            }) + r.state.preferredCountries.length;
          r.scrollTo(r.getElement(t), !0), r.setState({
            queryString: "",
            highlightCountryIndex: t
          });
        }, r.handleKeydown = function (e) {
          var t = r.props.keys,
            n = e.target.className;
          if (n.includes("selected-flag") && e.which === t.ENTER && !r.state.showDropdown) return r.handleFlagDropdownClick(e);
          if (n.includes("form-control") && (e.which === t.ENTER || e.which === t.ESC)) return e.target.blur();
          if (r.state.showDropdown && !r.props.disabled && (!n.includes("search-box") || e.which === t.UP || e.which === t.DOWN || e.which === t.ENTER || e.which === t.ESC && "" === e.target.value)) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var a = function a(e) {
              r.setState({
                highlightCountryIndex: r.getHighlightCountryIndex(e)
              }, function () {
                r.scrollTo(r.getElement(r.state.highlightCountryIndex), !0);
              });
            };
            switch (e.which) {
              case t.DOWN:
                a(1);
                break;
              case t.UP:
                a(-1);
                break;
              case t.ENTER:
                r.props.enableSearch ? r.handleFlagItemClick(r.getSearchFilteredCountries()[r.state.highlightCountryIndex] || r.getSearchFilteredCountries()[0], e) : r.handleFlagItemClick([].concat(o(r.state.preferredCountries), o(r.state.onlyCountries))[r.state.highlightCountryIndex], e);
                break;
              case t.ESC:
              case t.TAB:
                r.setState({
                  showDropdown: !1
                }, r.cursorToEnd);
                break;
              default:
                (e.which >= t.A && e.which <= t.Z || e.which === t.SPACE) && r.setState({
                  queryString: r.state.queryString + String.fromCharCode(e.which)
                }, r.state.debouncedQueryStingSearcher);
            }
          }
        }, r.handleInputKeyDown = function (e) {
          var t = r.props,
            n = t.keys,
            a = t.onEnterKeyPress,
            o = t.onKeyDown;
          e.which === n.ENTER && a && a(e), o && o(e);
        }, r.handleClickOutside = function (e) {
          r.dropdownRef && !r.dropdownContainerRef.contains(e.target) && r.state.showDropdown && r.setState({
            showDropdown: !1
          });
        }, r.handleSearchChange = function (e) {
          var t = e.currentTarget.value,
            n = r.state,
            a = n.preferredCountries,
            o = n.selectedCountry,
            i = 0;
          if ("" === t && o) {
            var u = r.state.onlyCountries;
            i = r.concatPreferredCountries(a, u).findIndex(function (e) {
              return e == o;
            }), setTimeout(function () {
              return r.scrollTo(r.getElement(i));
            }, 100);
          }
          r.setState({
            searchValue: t,
            highlightCountryIndex: i
          });
        }, r.concatPreferredCountries = function (e, t) {
          return e.length > 0 ? o(new Set(e.concat(t))) : t;
        }, r.getDropdownCountryName = function (e) {
          return e.localName || e.name;
        }, r.getSearchFilteredCountries = function () {
          var e = r.state,
            t = e.preferredCountries,
            n = e.onlyCountries,
            a = e.searchValue,
            i = r.props.enableSearch,
            u = r.concatPreferredCountries(t, n),
            c = a.trim().toLowerCase().replace("+", "");
          if (i && c) {
            if (/^\d+$/.test(c)) return u.filter(function (e) {
              var t = e.dialCode;
              return ["".concat(t)].some(function (e) {
                return e.toLowerCase().includes(c);
              });
            });
            var s = u.filter(function (e) {
                var t = e.iso2;
                return ["".concat(t)].some(function (e) {
                  return e.toLowerCase().includes(c);
                });
              }),
              l = u.filter(function (e) {
                var t = e.name,
                  r = e.localName;
                e.iso2;
                return ["".concat(t), "".concat(r || "")].some(function (e) {
                  return e.toLowerCase().includes(c);
                });
              });
            return r.scrollToTop(), o(new Set([].concat(s, l)));
          }
          return u;
        }, r.getCountryDropdownList = function () {
          var e = r.state,
            t = e.preferredCountries,
            a = e.highlightCountryIndex,
            o = e.showDropdown,
            i = e.searchValue,
            u = r.props,
            c = u.disableDropdown,
            s = u.prefix,
            l = r.props,
            f = l.enableSearch,
            d = l.searchNotFound,
            p = l.disableSearchIcon,
            h = l.searchClass,
            m = l.searchStyle,
            b = l.searchPlaceholder,
            g = l.autocompleteSearch,
            v = r.getSearchFilteredCountries().map(function (e, t) {
              var n = a === t,
                o = N()({
                  country: !0,
                  preferred: "us" === e.iso2 || "gb" === e.iso2,
                  active: "us" === e.iso2,
                  highlight: n
                }),
                i = "flag ".concat(e.iso2);
              return y.a.createElement("li", _extends({
                ref: function ref(e) {
                  return r["flag_no_".concat(t)] = e;
                },
                key: "flag_no_".concat(t),
                "data-flag-key": "flag_no_".concat(t),
                className: o,
                "data-dial-code": "1",
                tabIndex: c ? "-1" : "0",
                "data-country-code": e.iso2,
                onClick: function onClick(t) {
                  return r.handleFlagItemClick(e, t);
                },
                role: "option"
              }, n ? {
                "aria-selected": !0
              } : {}), y.a.createElement("div", {
                className: i
              }), y.a.createElement("span", {
                className: "country-name"
              }, r.getDropdownCountryName(e)), y.a.createElement("span", {
                className: "dial-code"
              }, e.format ? r.formatNumber(e.dialCode, e) : s + e.dialCode));
            }),
            C = y.a.createElement("li", {
              key: "dashes",
              className: "divider"
            });
          t.length > 0 && (!f || f && !i.trim()) && v.splice(t.length, 0, C);
          var _ = N()(n({
            "country-list": !0,
            hide: !o
          }, r.props.dropdownClass, !0));
          return y.a.createElement("ul", {
            ref: function ref(e) {
              return !f && e && e.focus(), r.dropdownRef = e;
            },
            className: _,
            style: r.props.dropdownStyle,
            role: "listbox",
            tabIndex: "0"
          }, f && y.a.createElement("li", {
            className: N()(n({
              search: !0
            }, h, h))
          }, !p && y.a.createElement("span", {
            className: N()(n({
              "search-emoji": !0
            }, "".concat(h, "-emoji"), h)),
            role: "img",
            "aria-label": "Magnifying glass"
          }, "🔎"), y.a.createElement("input", {
            className: N()(n({
              "search-box": !0
            }, "".concat(h, "-box"), h)),
            style: m,
            type: "search",
            placeholder: b,
            autoFocus: !0,
            autoComplete: g ? "on" : "off",
            value: i,
            onChange: r.handleSearchChange
          })), v.length > 0 ? v : y.a.createElement("li", {
            className: "no-entries-message"
          }, y.a.createElement("span", null, d)));
        };
        var s,
          l = new P(e.enableAreaCodes, e.enableTerritories, e.regions, e.onlyCountries, e.preferredCountries, e.excludeCountries, e.preserveOrder, e.masks, e.priority, e.areaCodes, e.localization, e.prefix, e.defaultMask, e.alwaysDefaultMask),
          h = l.onlyCountries,
          m = l.preferredCountries,
          b = l.hiddenAreaCodes,
          v = e.value ? e.value.replace(/\D/g, "") : "";
        s = e.disableInitialCountryGuess ? 0 : v.length > 1 ? r.guessSelectedCountry(v.substring(0, 6), e.country, h, b) || 0 : e.country && h.find(function (t) {
          return t.iso2 == e.country;
        }) || 0;
        var _,
          S = v.length < 2 && s && !j()(v, s.dialCode) ? s.dialCode : "";
        _ = "" === v && 0 === s ? "" : r.formatNumber((e.disableCountryCode ? "" : S) + v, s.name ? s : void 0);
        var x = h.findIndex(function (e) {
          return e == s;
        });
        return r.state = {
          showDropdown: e.showDropdown,
          formattedNumber: _,
          onlyCountries: h,
          preferredCountries: m,
          hiddenAreaCodes: b,
          selectedCountry: s,
          highlightCountryIndex: x,
          queryString: "",
          freezeSelection: !1,
          debouncedQueryStingSearcher: g()(r.searchCountry, 250),
          searchValue: ""
        }, r;
      }
      var r, l, m;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && h(e, t);
      }(t, e), r = t, (l = [{
        key: "componentDidMount",
        value: function value() {
          document.addEventListener && this.props.enableClickOutside && document.addEventListener("mousedown", this.handleClickOutside), this.props.onMount && this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g, ""), this.getCountryData(), this.state.formattedNumber);
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          document.removeEventListener && this.props.enableClickOutside && document.removeEventListener("mousedown", this.handleClickOutside);
        }
      }, {
        key: "componentDidUpdate",
        value: function value(e, t, r) {
          e.country !== this.props.country ? this.updateCountry(this.props.country) : e.value !== this.props.value && this.updateFormattedNumber(this.props.value);
        }
      }, {
        key: "updateFormattedNumber",
        value: function value(e) {
          if (null === e) return this.setState({
            selectedCountry: 0,
            formattedNumber: ""
          });
          var t = this.state,
            r = t.onlyCountries,
            n = t.selectedCountry,
            a = t.hiddenAreaCodes,
            o = this.props,
            i = o.country,
            u = o.prefix;
          if ("" === e) return this.setState({
            selectedCountry: n,
            formattedNumber: ""
          });
          var c,
            s,
            l = e.replace(/\D/g, "");
          if (n && j()(e, u + n.dialCode)) s = this.formatNumber(l, n), this.setState({
            formattedNumber: s
          });else {
            var f = (c = this.props.disableCountryGuess ? n : this.guessSelectedCountry(l.substring(0, 6), i, r, a) || n) && j()(l, u + c.dialCode) ? c.dialCode : "";
            s = this.formatNumber((this.props.disableCountryCode ? "" : f) + l, c || void 0), this.setState({
              selectedCountry: c,
              formattedNumber: s
            });
          }
        }
      }, {
        key: "render",
        value: function value() {
          var e,
            t,
            r,
            a = this,
            o = this.state,
            i = o.onlyCountries,
            u = o.selectedCountry,
            c = o.showDropdown,
            s = o.formattedNumber,
            l = o.hiddenAreaCodes,
            f = this.props,
            d = f.disableDropdown,
            p = f.renderStringAsFlag,
            h = f.isValid,
            m = f.defaultErrorMessage,
            b = f.specialLabel;
          if ("boolean" == typeof h) t = h;else {
            var g = h(s.replace(/\D/g, ""), u, i, l);
            "boolean" == typeof g ? !1 === (t = g) && (r = m) : (t = !1, r = g);
          }
          var v = N()((n(e = {}, this.props.containerClass, !0), n(e, "react-tel-input", !0), e)),
            C = N()({
              arrow: !0,
              up: c
            }),
            _ = N()(n({
              "form-control": !0,
              "invalid-number": !t,
              open: c
            }, this.props.inputClass, !0)),
            w = N()({
              "selected-flag": !0,
              open: c
            }),
            S = N()(n({
              "flag-dropdown": !0,
              "invalid-number": !t,
              open: c
            }, this.props.buttonClass, !0)),
            j = "flag ".concat(u && u.iso2);
          return y.a.createElement("div", {
            className: "".concat(v, " ").concat(this.props.className),
            style: this.props.style || this.props.containerStyle,
            onKeyDown: this.handleKeydown
          }, b && y.a.createElement("div", {
            className: "special-label"
          }, b), r && y.a.createElement("div", {
            className: "invalid-number-message"
          }, r), y.a.createElement("input", _extends({
            className: _,
            style: this.props.inputStyle,
            onChange: this.handleInput,
            onClick: this.handleInputClick,
            onDoubleClick: this.handleDoubleClick,
            onFocus: this.handleInputFocus,
            onBlur: this.handleInputBlur,
            onCopy: this.handleInputCopy,
            value: s,
            onKeyDown: this.handleInputKeyDown,
            placeholder: this.props.placeholder,
            disabled: this.props.disabled,
            type: "tel"
          }, this.props.inputProps, {
            ref: function ref(e) {
              a.numberInputRef = e, "function" == typeof a.props.inputProps.ref ? a.props.inputProps.ref(e) : "object" == _typeof(a.props.inputProps.ref) && (a.props.inputProps.ref.current = e);
            }
          })), y.a.createElement("div", {
            className: S,
            style: this.props.buttonStyle,
            ref: function ref(e) {
              return a.dropdownContainerRef = e;
            }
          }, p ? y.a.createElement("div", {
            className: w
          }, p) : y.a.createElement("div", {
            onClick: d ? void 0 : this.handleFlagDropdownClick,
            className: w,
            title: u ? "".concat(u.localName || u.name, ": + ").concat(u.dialCode) : "",
            tabIndex: d ? "-1" : "0",
            role: "button",
            "aria-haspopup": "listbox",
            "aria-expanded": !!c || void 0
          }, y.a.createElement("div", {
            className: j
          }, !d && y.a.createElement("div", {
            className: C
          }))), c && this.getCountryDropdownList()));
        }
      }]) && s(r.prototype, l), m && s(r, m), t;
    }(y.a.Component);
  F.defaultProps = {
    country: "",
    value: "",
    onlyCountries: [],
    preferredCountries: [],
    excludeCountries: [],
    placeholder: "1 (702) 123-4567",
    searchPlaceholder: "search",
    searchNotFound: "No entries to show",
    flagsImagePath: "./flags.png",
    disabled: !1,
    containerStyle: {},
    inputStyle: {},
    buttonStyle: {},
    dropdownStyle: {},
    searchStyle: {},
    containerClass: "",
    inputClass: "",
    buttonClass: "",
    dropdownClass: "",
    searchClass: "",
    className: "",
    autoFormat: !0,
    enableAreaCodes: !1,
    enableTerritories: !1,
    disableCountryCode: !1,
    disableDropdown: !1,
    enableLongNumbers: !1,
    countryCodeEditable: !0,
    enableSearch: !1,
    disableSearchIcon: !1,
    disableInitialCountryGuess: !1,
    disableCountryGuess: !1,
    regions: "",
    inputProps: {},
    localization: {},
    masks: null,
    priority: null,
    areaCodes: null,
    preserveOrder: [],
    defaultMask: "... ... ... ... ..",
    alwaysDefaultMask: !1,
    prefix: "+",
    copyNumbersOnly: !0,
    renderStringAsFlag: "",
    autocompleteSearch: !1,
    jumpCursorToEnd: !0,
    enableAreaCodeStretch: !1,
    enableClickOutside: !0,
    showDropdown: !1,
    isValid: !0,
    defaultErrorMessage: "",
    specialLabel: "Phone",
    onEnterKeyPress: null,
    keys: {
      UP: 38,
      DOWN: 40,
      RIGHT: 39,
      LEFT: 37,
      ENTER: 13,
      ESC: 27,
      PLUS: 43,
      A: 65,
      Z: 90,
      SPACE: 32,
      TAB: 9
    }
  };
  t.default = F;
}]);

/***/ }),

/***/ "6oRp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = void 0;
var _react = _interopRequireDefault(__webpack_require__("l8WD"));
var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));
var _innerSliderUtils = __webpack_require__("iWpb");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var getDotCount = function getDotCount(spec) {
  var dots;
  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }
  return dots;
};
var Dots = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);
  var _super = _createSuper(Dots);
  function Dots() {
    _classCallCheck(this, Dots);
    return _super.apply(this, arguments);
  }
  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        onMouseEnter = _this$props.onMouseEnter,
        onMouseOver = _this$props.onMouseOver,
        onMouseLeave = _this$props.onMouseLeave,
        infinite = _this$props.infinite,
        slidesToScroll = _this$props.slidesToScroll,
        slidesToShow = _this$props.slidesToShow,
        slideCount = _this$props.slideCount,
        currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount: slideCount,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        infinite: infinite
      });
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = [];
      for (var i = 0; i < dotCount; i++) {
        var _rightBound = (i + 1) * slidesToScroll - 1;
        var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);
        var _leftBound = rightBound - (slidesToScroll - 1);
        var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
        var className = (0, _classnames["default"])({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: slidesToScroll,
          currentSlide: currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots = dots.concat( /*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          className: className
        }, /*#__PURE__*/_react["default"].cloneElement(this.props.customPaging(i), {
          onClick: onClick
        })));
      }
      return /*#__PURE__*/_react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);
  return Dots;
}(_react["default"].PureComponent);
exports.Dots = Dots;

/***/ }),

/***/ "6off":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EbY7");
/* harmony import */ var _assets_home_how1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnBx");
/* harmony import */ var _assets_home_how2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a+yp");
/* harmony import */ var _assets_home_how3_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YPJM");
/* harmony import */ var _assets_home_how4_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("httU");





var HowItWorks = function HowItWorks() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].howItWork
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].howItWorkContainer
  }, h("h3", null, "How this Works"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].howItWorkGrid
  }, h(HowItWorkCard, null))));
};
/* harmony default export */ __webpack_exports__["a"] = (HowItWorks);
var HowItWorkCard = function HowItWorkCard() {
  var data = [{
    value: "1",
    labelText1: "Complete the form to check available",
    labelBold: "immigration programs.",
    image: _assets_home_how1_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    width: "59",
    height: "84"
  }, {
    value: "2",
    labelText1: "Receive",
    labelBold: "instant results",
    labelText2: "- a detailed list of programs you likely qualify for.",
    image: _assets_home_how2_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    width: "81",
    height: "80"
  }, {
    value: "3",
    labelBold: "Select the program",
    labelText2: "you're interested in.",
    image: _assets_home_how3_webp__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    width: "81",
    height: "80"
  }, {
    value: "4",
    labelText1: "Get a",
    labelBold: "free consultation",
    labelText2: "about the next steps.",
    image: _assets_home_how4_webp__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    width: "83",
    height: "80"
  }];
  return h(Fragment, null, data.map(function (e, i) {
    return h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].howItWorkCard,
      key: i
    }, h("img", {
      src: e.image,
      alt: "img",
      width: e.width,
      height: e.height
    }), h("h4", null, e.value, "."), h("p", null, e.labelText1, " ", h("span", null, e.labelBold), " ", e.labelText2));
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "79EO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y3FI");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var _assets_results_lock_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bI+Y");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gdic");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6OLs");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _alert_errorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("bLYV");
/* harmony import */ var _assets_header_loader_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9WSe");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ResultForm = function ResultForm() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"])({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"])(),
    _useState8 = _slicedToArray(_useState7, 2),
    message = _useState8[0],
    setShowMessage = _useState8[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    if (name === "check") {
      return setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, e.target.checked)));
    }
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "")));
  };
  var checkEmail = /^[A-Za-z0-9.]{2,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,10}$/;
  var handleOnblur = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value,
        placeholder = _e$target2.placeholder;
      if (value === "") {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "".concat(placeholder, " is required"))));
      } else if (name === "email" && !checkEmail.test(value)) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "Email not valid")));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "")));
      }
    });
    return function handleOnblur(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        if (values.firstName === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            firstName: "First Name is required"
          }));
        } else if (values.lastName === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            lastName: "Last Name is required"
          }));
        } else if (values.email === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            email: "Email is required"
          }));
        } else if (values.phoneNumber === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            phoneNumber: "Phone number is required"
          }));
        }
        setLoading(true);
        var response = yield fetch("https://service.uiscanada.com/forms/consult", {
          method: "POST",
          // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });
        var status = response.status;
        if (status === 200) {
          yield window.gtag("event", "generate_lead", {
            currency: "USD"
          });
          yield window.gtag("event", "form_submit", {
            form_id: document.getElementsByTagName("form").lead_form.id,
            form_name: document.getElementsByTagName("form").lead_form.name,
            form_destination: document.getElementsByTagName("form").lead_form.baseURI
          });
          setLoading(false);
          Object(preact_router__WEBPACK_IMPORTED_MODULE_0__["route"])("/thank-you/");
        }
      } catch (err) {
        var _err$response, _err$response$data, _err$response2, _err$response2$data;
        setLoading(false);
        setShowMessage((err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.msg) || (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : _err$response2$data.message) || "Something went wrong");
      }
    });
    return function handleSubmit(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var closeAction = function closeAction() {
    setShowMessage("");
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formTitle
  }, h("h3", null, h("img", {
    src: _assets_results_lock_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    alt: "lock"
  }), " Unlock 60+ available programs"), h("p", null, "Choosing the right immigration program, depending on your own profile, can be challenging to begin with. We are happy to answer any questions about the immigration process to Canada if you are interested in finding out more!")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formGrid
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formBox,
    id: "contact-form"
  }, h("form", {
    onSubmit: handleSubmit,
    id: "lead_form_id",
    name: "lead_form"
  }, h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.firstName ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].errorMsg : ""),
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    value: values === null || values === void 0 ? void 0 : values.firstName,
    onChange: handleChange,
    onBlur: handleOnblur
  }), h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.lastName ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].errorMsg : ""),
    type: "text",
    name: "lastName",
    value: values === null || values === void 0 ? void 0 : values.lastName,
    placeholder: "Last Name",
    onChange: handleChange,
    onBlur: handleOnblur
  }), h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.email ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].errorMsg : ""),
    type: "text",
    name: "email",
    value: values === null || values === void 0 ? void 0 : values.email,
    placeholder: "Email Address",
    onChange: handleChange,
    onBlur: handleOnblur
  }), h(react_phone_input_2__WEBPACK_IMPORTED_MODULE_4___default.a, {
    country: "de",
    value: values === null || values === void 0 ? void 0 : values.phone,
    inputProps: {
      name: "phoneNumber",
      required: true,
      autoFocus: false,
      className: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formField, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formFieldTel, " ").concat(errors !== null && errors !== void 0 && errors.phoneNumber ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].errorMsg : "")
    },
    onChange: function onChange(e) {
      return handleChange({
        target: {
          name: "phoneNumber",
          value: "+".concat(e)
        }
      });
    }
  }), h("button", {
    type: "submit",
    disabled: loading
  }, "Book a meeting \xA0", " ", loading && h("img", {
    src: _assets_header_loader_gif__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    alt: "",
    className: "loader-icon"
  })), h("label", null, h("input", {
    type: "checkbox",
    name: "check",
    defaultChecked: true,
    value: values === null || values === void 0 ? void 0 : values.check,
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), h("span", null, "By clicking on 'book a meeting\u2019, you agree to our", " ", h("a", {
    href: "https://uis.uiscanada.com/termconditions",
    target: "_blank",
    rel: "noreferrer"
  }, "T&C"), " ", "and", " ", h("a", {
    href: "https://uis.uiscanada.com/privacypolicy",
    target: "_blank",
    rel: "noreferrer"
  }, "Privacy Policy"), ".")))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formContent
  }, h("ul", null, h("li", null, "Speak with an immigration professional."), h("li", null, "Get an in-depth immigration plan."), h("li", null, "Save time and money on planning and preparation. "), h("li", null, "Make a fresh start in Canada.")))), message !== "" && message ? h(_alert_errorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    message: message,
    closeAction: closeAction
  }) : null);
};
/* harmony default export */ __webpack_exports__["a"] = (ResultForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "7APR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"cdHome":"cdHome__5nZSy","react-select__indicator-separator":"react-select__indicator-separator__02mPC","react-select__indicator":"react-select__indicator__LKN39","react-select__dropdown-indicator":"react-select__dropdown-indicator__OUrDC"});

/***/ }),

/***/ "7hzt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "7a9c26c4916dcdc857a8e867cae9f54a.svg");

/***/ }),

/***/ "85Bq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"cdheader":"cdheader__d04Bn","cdcontainer":"cdcontainer__i5SIx","cdheaderContent":"cdheaderContent__wS-Od","cdheaderRight":"cdheaderRight__sG495","cdheaderRightToggle":"cdheaderRightToggle__goaZ5","cdheaderRightItem":"cdheaderRightItem__GV1rm"});

/***/ }),

/***/ "8Jek":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  var nativeCodeString = '[native code]';
  function classNames() {
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = _typeof(arg);
      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          classes.push(arg.toString());
          continue;
        }
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
    return classes.join(' ');
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__("K2jg")) === 'object' && __webpack_require__("K2jg")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "8VmE":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "8ucb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _assets_cdimages_visacd_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("u/i4");
/* harmony import */ var _assets_cdimages_mastercd_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Kmk3");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lxfW");



var CDFooter = function CDFooter() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdfooter
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdcontainer
  }, h("p", null, "Canada District is a private immigration company that specializes in helping people make a fresh start in Canada. We provide a range of services to support immigrants as they navigate their new lives in Canada. We will help you improve your language skills, search for jobs, fill out paperwork and guide you until you successfully complete your process.", h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdfooterDetail
  }, h("span", null, "1-778-807-9840"), h("span", null, "support@canadadistrict.com"))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdfooterPay
  }, h("img", {
    src: _assets_cdimages_visacd_svg__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    alt: "card"
  }), h("img", {
    src: _assets_cdimages_mastercd_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "card"
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDFooter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "8vyQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "04268a460743fb81d5e0a053bc90bc8d.svg");

/***/ }),

/***/ "8yPs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "7988729b45babf79184667608e9b8f83.svg");

/***/ }),

/***/ "9WSe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "803f24369a085e35482e874050e62261.gif");

/***/ }),

/***/ "AY/J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"thankyou":"thankyou__7BGPk","container":"container__BbCh5"});

/***/ }),

/***/ "AZDn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("okHz");
/* harmony import */ var _assets_thankyou_thankyou_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aqZz");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AY/J");



var ThankYou = function ThankYou() {
  return h(_components_layout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].thankyou
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].container
  }, h("img", {
    src: _assets_thankyou_thankyou_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "thankyou"
  }), h("h2", null, "Thank You!"), h("p", null, "An immigration professional will contact you shortly to complete your profile evaluation and discuss the next steps."))));
};
/* harmony default export */ __webpack_exports__["a"] = (ThankYou);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "Ath0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_header_cdlogo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xvDY");
/* harmony import */ var _assets_cdimages_menucd_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("D8Mr");
/* harmony import */ var _assets_cdimages_closecd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("i3YD");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("85Bq");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var scrollTowhat = function scrollTowhat() {
  var What = document.getElementById('What');
  if (What) {
    What.scrollIntoView();
  } else {
    window.location.href = '#What';
  }
};
var scrollToHow = function scrollToHow() {
  var How = document.getElementById('How');
  if (How) {
    How.scrollIntoView();
  } else {
    window.location.href = '#How';
  }
};
var scrollToWhy = function scrollToWhy() {
  var Why = document.getElementById('Why');
  if (Why) {
    Why.scrollIntoView();
  } else {
    window.location.href = '#Why';
  }
};

// eslint-disable-next-line react-hooks/rules-of-hooks

var CDHeader = function CDHeader() {
  var thankyouUrl = typeof window !== "undefined" && window.location.pathname === '/thankyou';
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setActive = _useState2[1];
  var toggleClass = function toggleClass() {
    setActive(!isActive);
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheader
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdcontainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheaderContent
  }, h(preact_router_match__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/homeversion"
  }, h("img", {
    src: _assets_header_cdlogo_svg__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    alt: "logo",
    width: 80,
    height: 32
  })), !thankyouUrl ? h(Fragment, null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheaderRight
  }, h("ul", null, h("li", {
    onClick: scrollTowhat
  }, "What"), h("li", {
    onClick: scrollToHow
  }, "How"), h("li", {
    onClick: scrollToWhy
  }, "Why"))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheaderRightToggle
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdToggleButton,
    onClick: toggleClass
  }, isActive ? h("div", null, h("img", {
    src: _assets_cdimages_closecd_svg__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    alt: "close"
  })) : h("div", null, h("img", {
    src: _assets_cdimages_menucd_svg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    alt: "menu"
  }))), isActive ? h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheaderRightItem
  }, h("ul", null, h("li", {
    onClick: scrollTowhat
  }, "What"), h("li", {
    onClick: scrollToHow
  }, "How"), h("li", {
    onClick: scrollToWhy
  }, "Why"))) : '')) : '')));
};
/* harmony default export */ __webpack_exports__["a"] = (CDHeader);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "BaaC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"results":"results__zzOtN","container":"container__HmXZF","resultGrid":"resultGrid__6IvER","callToForm":"callToForm__NTSL3","pageTitle":"pageTitle__0j6Tx"});

/***/ }),

/***/ "BoRb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevArrow = exports.NextArrow = void 0;
var _react = _interopRequireDefault(__webpack_require__("l8WD"));
var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));
var _innerSliderUtils = __webpack_require__("iWpb");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var PrevArrow = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);
  var _super = _createSuper(PrevArrow);
  function PrevArrow() {
    _classCallCheck(this, PrevArrow);
    return _super.apply(this, arguments);
  }
  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }
      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });
      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }
      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;
      if (this.props.prevArrow) {
        prevArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
      } else {
        prevArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }
      return prevArrow;
    }
  }]);
  return PrevArrow;
}(_react["default"].PureComponent);
exports.PrevArrow = PrevArrow;
var NextArrow = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);
  var _super2 = _createSuper(NextArrow);
  function NextArrow() {
    _classCallCheck(this, NextArrow);
    return _super2.apply(this, arguments);
  }
  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }
      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });
      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }
      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;
      if (this.props.nextArrow) {
        nextArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
      } else {
        nextArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }
      return nextArrow;
    }
  }]);
  return NextArrow;
}(_react["default"].PureComponent);
exports.NextArrow = NextArrow;

/***/ }),

/***/ "Brh3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"layout":"layout__gpm4a","wrapper":"wrapper__b8TZG"});

/***/ }),

/***/ "CpeD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "1872fbadb2de9751eb2ac5c97b51e60a.webp");

/***/ }),

/***/ "D8Mr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "7b4dcc6c9c5416d191143444a708e159.svg");

/***/ }),

/***/ "EbY7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"topBanner":"topBanner__ZoZ3Q","error-msg":"error-msg__R7t8d","react-select__control":"react-select__control__SBeQf","topBannerContainer":"topBannerContainer__j2kx2","topBannerTitle":"topBannerTitle__eklzG","formGrid":"formGrid__lu6vo","active":"active__du3Zy","formGroup":"formGroup__MywCE","formInfoIcon":"formInfoIcon__kQLSm","formInfoTooltip":"formInfoTooltip__wdIgh","formScroll":"formScroll__Hg34P","border-red":"border-red__N9r85","buttonGrid":"buttonGrid__saoE+","backBtn":"backBtn__xHrho","submitBtn":"submitBtn__S26p6","formFadeOut":"formFadeOut__fxYMT","formFadeIn":"formFadeIn__haI39","formFadeOutLeft":"formFadeOutLeft__+939h","formFadeInLeft":"formFadeInLeft__Nl7Uc","formField":"formField__XcU8V","howItWork":"howItWork__ns-PQ","howItWorkContainer":"howItWorkContainer__Y+RiZ","howItWorkGrid":"howItWorkGrid__EPcfb","howItWorkCard":"howItWorkCard__B3QBZ","testimonial":"testimonial__aBeSi","testimonialContainer":"testimonialContainer__YXRgq","testimonialGrid":"testimonialGrid__Uca9I","testimonialCard":"testimonialCard__GINIb","rating":"rating__fsW+n","callToAction":"callToAction__1Z-ma","callToActionContainer":"callToActionContainer__ByZwV","callToActionGrid":"callToActionGrid__0uvyu","callToActionCover":"callToActionCover__5m2Yu","callToActionContent":"callToActionContent__sxMal","typoAnimate":"typoAnimate__mzUXD"});

/***/ }),

/***/ "EdTv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__("l8WD"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return /*#__PURE__*/_react["default"].createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return /*#__PURE__*/_react["default"].createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var _default = defaultProps;
exports["default"] = _default;

/***/ }),

/***/ "FA6U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"home":"home__uRcqa"});

/***/ }),

/***/ "GFNa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "GKGO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("L0At");
} else {}

/***/ }),

/***/ "GeWT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__("GKGO");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
module.exports = hoistNonReactStatics;

/***/ }),

/***/ "Ht6y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__("l8WD"));
var _innerSlider = __webpack_require__("lUS9");
var _json2mq = _interopRequireDefault(__webpack_require__("drO/"));
var _defaultProps = _interopRequireDefault(__webpack_require__("EdTv"));
var _innerSliderUtils = __webpack_require__("iWpb");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
var enquire = (0, _innerSliderUtils.canUseDOM)() && __webpack_require__("495I");
var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);
  var _super = _createSuper(Slider);
  function Slider(props) {
    var _this;
    _classCallCheck(this, Slider);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });
    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });
    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });
    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });
    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });
    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }
  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      enquire.register(query, handler);
      this._responsiveMediaHandlers.push({
        query: query,
        handler: handler
      });
    } // handles responsive breakpoints
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        }); // sort them in increasing order of their numerical value

        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;
          if (index === 0) {
            bQuery = (0, _json2mq["default"])({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq["default"])({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          } // when not using server side rendering

          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        }); // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string

        var query = (0, _json2mq["default"])({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var settings;
      var newProps;
      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
      } else {
        settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
      } // force scrolling by one if centerMode is on

      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && "production" !== "production") {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }
        settings.slidesToScroll = 1;
      } // force showing one slide and scrolling by one if the fade mode is on

      if (settings.fade) {
        if (settings.slidesToShow > 1 && "production" !== "production") {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }
        if (settings.slidesToScroll > 1 && "production" !== "production") {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }
        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      } // makes sure that children is an array, even when there is only 1 child

      var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)

      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }
        return !!child;
      }); // rows and slidesPerRow logic is handled here

      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }
      var newChildren = [];
      var currentWidth = null;
      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];
        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];
          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }
            if (k >= children.length) break;
            row.push( /*#__PURE__*/_react["default"].cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }
          newSlide.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: 10 * i + j
          }, row));
        }
        if (settings.variableWidth) {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i
          }, newSlide));
        }
      }
      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, children);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }
      return /*#__PURE__*/_react["default"].createElement(_innerSlider.InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, settings), newChildren);
    }
  }]);
  return Slider;
}(_react["default"].Component);
exports["default"] = Slider;

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "IO5D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "K2jg":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "K4DB":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
var assertThisInitialized = __webpack_require__("T1e2");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "Kmk3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "2917b38dbc4f117552be957e06aad10e.svg");

/***/ }),

/***/ "L0At":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;
exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
exports.isConcurrentMode = A;
exports.isContextConsumer = function (a) {
  return z(a) === k;
};
exports.isContextProvider = function (a) {
  return z(a) === h;
};
exports.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};
exports.isForwardRef = function (a) {
  return z(a) === n;
};
exports.isFragment = function (a) {
  return z(a) === e;
};
exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};
exports.isPortal = function (a) {
  return z(a) === d;
};
exports.isProfiler = function (a) {
  return z(a) === g;
};
exports.isStrictMode = function (a) {
  return z(a) === f;
};
exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
exports.typeOf = z;

/***/ }),

/***/ "L7zD":
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
  this.options = options;
  !options.deferSetup && this.setup();
}
QueryHandler.prototype = {
  constructor: QueryHandler,
  /**
   * coordinates setup of the handler
   *
   * @function
   */
  setup: function setup() {
    if (this.options.setup) {
      this.options.setup();
    }
    this.initialised = true;
  },
  /**
   * coordinates setup and triggering of the handler
   *
   * @function
   */
  on: function on() {
    !this.initialised && this.setup();
    this.options.match && this.options.match();
  },
  /**
   * coordinates the unmatch event for the handler
   *
   * @function
   */
  off: function off() {
    this.options.unmatch && this.options.unmatch();
  },
  /**
   * called when a handler is to be destroyed.
   * delegates to the destroy or unmatch callbacks, depending on availability.
   *
   * @function
   */
  destroy: function destroy() {
    this.options.destroy ? this.options.destroy() : this.off();
  },
  /**
   * determines equality by reference.
   * if object is supplied compare options, if function, compare match callback
   *
   * @function
   * @param {object || function} [target] the target for comparison
   */
  equals: function equals(target) {
    return this.options === target || this.options.match === target;
  }
};
module.exports = QueryHandler;

/***/ }),

/***/ "LlMT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _assets_cdimages_cdbg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1/C7");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XruS");


var CDBannerVersion = function CDBannerVersion() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].bannerVersionContent
  }, h("img", {
    src: _assets_cdimages_cdbg_png__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    alt: "banner"
  }), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].bannerContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].bannerversionContentContainer
  }, h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]["bannerContentLeft"], " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]["bannerContentversion"])
  }, h("h2", null, "Immigrate to Canada"), h("p", null, "Check your visa options with a representative today."), h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].cdbtn
  }, "Check Your Eligibility")))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDBannerVersion);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "NToG":
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__("nOXW");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "NgIc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var _default = initialState;
exports["default"] = _default;

/***/ }),

/***/ "O0KT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _assets_home_cdbanner_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("14Ct");
/* harmony import */ var _assets_cdimages_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wlqu");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XruS");



// import CDStyleButton from "./styleButton";

var CDBanner = function CDBanner() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bannerContent
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bannerContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bannerContentContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bannerContentLeft
  }, h("h2", null, "Immigrate", " ", h("span", null, "t", h("img", {
    src: _assets_cdimages_location_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "location"
  })), " ", "Canada"), h("p", null, "Check your visa options with a representative today."), h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdbtn
  }, "Check Your Eligibility")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bannerContentRight
  }, h("img", {
    src: _assets_home_cdbanner_png__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    alt: "banner"
  })))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDBanner);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "OvAC":
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__("nOXW");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "PE9J":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "Pe5x":
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__("+IV6");
var isNativeReflectConstruct = __webpack_require__("0qAl");
var possibleConstructorReturn = __webpack_require__("K4DB");
function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return possibleConstructorReturn(this, result);
  };
}
module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return p; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function p(n) {
  return o = 1, y(B, n);
}
function y(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }
  return o.__N || o.__;
}
function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "Qatm":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y3FI");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3br2");
/* harmony import */ var _routes_result_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nuWQ");
/* harmony import */ var _routes_thankyou__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AZDn");
/* harmony import */ var _routes_cd_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aUid");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("GFNa");
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zM3l");
/* harmony import */ var _routes_cd_home_homeversion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jnkz");
/* harmony import */ var _components_canada_district_thank_you__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nJ17");









var App = function App() {
  // if (typeof window !== "undefined") {
  //   const location = window.location.pathname;
  //   if (location === "/") {
  //     window.location.href = "/lp/en/global/immigration/check/";
  //   }
  // }
  return h("div", {
    id: "app"
  }, h("main", null, h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
    onChange: function onChange() {
      return typeof window !== "undefined" && window.scrollTo(0, 0);
    }
  }, h(_routes_home__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    path: "/lp/en/global/immigration/check/"
  }), h(_routes_thankyou__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: "/thank-you/"
  }), h(_routes_result_result__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    path: "/result/"
  }), h(_routes_cd_home__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    path: "/"
  }), h(_routes_cd_home_homeversion__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    path: "/homeversion/"
  }), h(_components_canada_district_thank_you__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    path: "/thankyou/"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "QyV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_header_logo_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fsdc");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ySiU");



var Header = function Header() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].header
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].container
  }, h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/lp/en/global/immigration/check/"
  }, h("img", {
    src: _assets_header_logo_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "logo",
    width: 80,
    height: 32
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "RiSW":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("PE9J");
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "S411":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "SDJZ":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "Snkw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "b47d94798062ae78d5c9329068b8f207.svg");

/***/ }),

/***/ "T1e2":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "TP/7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EbY7");
/* harmony import */ var _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Vz2e");
/* harmony import */ var _assets_home_authorstar_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pSyp");



var Testimonial = function Testimonial() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].testimonial
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].testimonialContainer
  }, h("h3", null, "Our Clients"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].testimonialGrid
  }, h(TestimonialCard, null))));
};
/* harmony default export */ __webpack_exports__["a"] = (Testimonial);
var TestimonialCard = function TestimonialCard() {
  var data = [{
    author: 'Bram van Beers',
    content: 'Case number: 55196 Ken Turner helped me really well during the progress. The assistance was pretty pro-active, which I liked a lot. UIS Canada knows exactly what to do and which paperwork I needed to do!'
  }, {
    author: 'Dani Jimenez Cremers',
    content: 'Mr. Kent has been incredibly helpful and always available when I needed him. Really attentive team and I would recommend them services. '
  }, {
    author: 'Ogunniyi T.',
    content: 'UIS Canada goes in depth and explains step by step procedure. They respond when you contact them and tell you everything you need to know if there are some doubts.'
  }];
  return h(Fragment, null, data.map(function (e, i) {
    return h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].testimonialCard,
      key: i
    }, h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].rating
    }, h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    }), h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    }), h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    }), h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    }), h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    })), h("p", null, e.content), h("h4", null, h("img", {
      src: _assets_home_authorstar_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
      alt: "img",
      width: 26,
      height: 25
    }), " ", e.author));
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "TR5t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"errortoast":"errortoast__ne9ep","errortoastgrid":"errortoastgrid__mhsRp","errortoasticon":"errortoasticon__3Q0lk","errortoastcontent":"errortoastcontent__4dMEL","errortoastclose":"errortoastclose__BMc5p"});

/***/ }),

/***/ "UpPA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useStateManager, createFilter, defaultTheme, mergeStyles, components, NonceProvider

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function objectSpread2_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
// EXTERNAL MODULE: ../node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__("l8WD");

// CONCATENATED MODULE: ../node_modules/react-select/dist/useStateManager-7e1e8489.esm.js




var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref) {
  var _ref$defaultInputValu = _ref.defaultInputValue,
    defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
    _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
    defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
    propsInputValue = _ref.inputValue,
    propsMenuIsOpen = _ref.menuIsOpen,
    propsOnChange = _ref.onChange,
    propsOnInputChange = _ref.onInputChange,
    propsOnMenuClose = _ref.onMenuClose,
    propsOnMenuOpen = _ref.onMenuOpen,
    propsValue = _ref.value,
    restSelectProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = Object(compat_module["useState"])(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
    _useState2 = _slicedToArray(_useState, 2),
    stateInputValue = _useState2[0],
    setStateInputValue = _useState2[1];
  var _useState3 = Object(compat_module["useState"])(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
    _useState4 = _slicedToArray(_useState3, 2),
    stateMenuIsOpen = _useState4[0],
    setStateMenuIsOpen = _useState4[1];
  var _useState5 = Object(compat_module["useState"])(propsValue !== undefined ? propsValue : defaultValue),
    _useState6 = _slicedToArray(_useState5, 2),
    stateValue = _useState6[0],
    setStateValue = _useState6[1];
  var onChange = Object(compat_module["useCallback"])(function (value, actionMeta) {
    if (typeof propsOnChange === 'function') {
      propsOnChange(value, actionMeta);
    }
    setStateValue(value);
  }, [propsOnChange]);
  var onInputChange = Object(compat_module["useCallback"])(function (value, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === 'function') {
      newValue = propsOnInputChange(value, actionMeta);
    }
    setStateInputValue(newValue !== undefined ? newValue : value);
  }, [propsOnInputChange]);
  var onMenuOpen = Object(compat_module["useCallback"])(function () {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = Object(compat_module["useCallback"])(function () {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== undefined ? propsValue : stateValue;
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restSelectProps), {}, {
    inputValue: inputValue,
    menuIsOpen: menuIsOpen,
    onChange: onChange,
    onInputChange: onInputChange,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen,
    value: value
  });
}

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (false) { var isImportRule; }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (false) {}
  };
  return StyleSheet;
}();

// CONCATENATED MODULE: ../node_modules/stylis/dist/stylis.mjs
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var stylis_n = "comm";
var c = "rule";
var s = "decl";
var t = "@page";
var u = "@media";
var stylis_i = "@import";
var f = "@charset";
var stylis_o = "@viewport";
var l = "@supports";
var v = "@document";
var p = "@namespace";
var h = "@keyframes";
var b = "@font-face";
var w = "@counter-style";
var d = "@font-feature-values";
var $ = Math.abs;
var k = String.fromCharCode;
var g = Object.assign;
function m(e, r) {
  return C(e, 0) ^ 45 ? (((r << 2 ^ C(e, 0)) << 2 ^ C(e, 1)) << 2 ^ C(e, 2)) << 2 ^ C(e, 3) : 0;
}
function x(e) {
  return e.trim();
}
function y(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function j(e, r, a) {
  return e.replace(r, a);
}
function z(e, r) {
  return e.indexOf(r);
}
function C(e, r) {
  return e.charCodeAt(r) | 0;
}
function O(e, r, a) {
  return e.slice(r, a);
}
function A(e) {
  return e.length;
}
function M(e) {
  return e.length;
}
function S(e, r) {
  return r.push(e), e;
}
function q(e, r) {
  return e.map(r).join("");
}
var B = 1;
var D = 1;
var E = 0;
var F = 0;
var G = 0;
var H = "";
function I(e, r, a, n, c, s, t) {
  return {
    value: e,
    root: r,
    parent: a,
    type: n,
    props: c,
    children: s,
    line: B,
    column: D,
    length: t,
    return: ""
  };
}
function J(e, r) {
  return g(I("", null, null, "", null, null, 0), e, {
    length: -e.length
  }, r);
}
function K() {
  return G;
}
function L() {
  G = F > 0 ? C(H, --F) : 0;
  if (D--, G === 10) D = 1, B--;
  return G;
}
function N() {
  G = F < E ? C(H, F++) : 0;
  if (D++, G === 10) D = 1, B++;
  return G;
}
function P() {
  return C(H, F);
}
function Q() {
  return F;
}
function R(e, r) {
  return O(H, e, r);
}
function T(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function U(e) {
  return B = D = 1, E = A(H = e), F = 0, [];
}
function V(e) {
  return H = "", e;
}
function W(e) {
  return x(R(F - 1, ee(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function X(e) {
  return V(Z(U(e)));
}
function Y(e) {
  while (G = P()) if (G < 33) N();else break;
  return T(e) > 2 || T(G) > 3 ? "" : " ";
}
function Z(e) {
  while (N()) switch (T(G)) {
    case 0:
      S(ae(F - 1), e);
      break;
    case 2:
      S(W(G), e);
      break;
    default:
      S(k(G), e);
  }
  return e;
}
function _(e, r) {
  while (--r && N()) if (G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97) break;
  return R(e, Q() + (r < 6 && P() == 32 && N() == 32));
}
function ee(e) {
  while (N()) switch (G) {
    case e:
      return F;
    case 34:
    case 39:
      if (e !== 34 && e !== 39) ee(G);
      break;
    case 40:
      if (e === 41) ee(e);
      break;
    case 92:
      N();
      break;
  }
  return F;
}
function re(e, r) {
  while (N()) if (e + G === 47 + 10) break;else if (e + G === 42 + 42 && P() === 47) break;
  return "/*" + R(r, F - 1) + "*" + k(e === 47 ? e : N());
}
function ae(e) {
  while (!T(P())) N();
  return R(e, F);
}
function ne(e) {
  return V(ce("", null, null, null, [""], e = U(e), 0, [0], e));
}
function ce(e, r, a, n, c, s, t, u, i) {
  var f = 0;
  var o = 0;
  var l = t;
  var v = 0;
  var p = 0;
  var h = 0;
  var b = 1;
  var w = 1;
  var d = 1;
  var $ = 0;
  var g = "";
  var m = c;
  var x = s;
  var y = n;
  var O = g;
  while (w) switch (h = $, $ = N()) {
    case 40:
      if (h != 108 && C(O, l - 1) == 58) {
        if (z(O += j(W($), "&", "&\f"), "&\f") != -1) d = -1;
        break;
      }
    case 34:
    case 39:
    case 91:
      O += W($);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      O += Y(h);
      break;
    case 92:
      O += _(Q() - 1, 7);
      continue;
    case 47:
      switch (P()) {
        case 42:
        case 47:
          S(te(re(N(), Q()), r, a), i);
          break;
        default:
          O += "/";
      }
      break;
    case 123 * b:
      u[f++] = A(O) * d;
    case 125 * b:
    case 59:
    case 0:
      switch ($) {
        case 0:
        case 125:
          w = 0;
        case 59 + o:
          if (p > 0 && A(O) - l) S(p > 32 ? ue(O + ";", n, a, l - 1) : ue(j(O, " ", "") + ";", n, a, l - 2), i);
          break;
        case 59:
          O += ";";
        default:
          S(y = se(O, r, a, f, o, c, u, g, m = [], x = [], l), s);
          if ($ === 123) if (o === 0) ce(O, r, y, y, m, s, l, u, x);else switch (v === 99 && C(O, 3) === 110 ? 100 : v) {
            case 100:
            case 109:
            case 115:
              ce(e, y, y, n && S(se(e, y, y, 0, 0, c, u, g, c, m = [], l), x), c, x, l, u, n ? m : x);
              break;
            default:
              ce(O, y, y, y, [""], x, 0, u, x);
          }
      }
      f = o = p = 0, b = d = 1, g = O = "", l = t;
      break;
    case 58:
      l = 1 + A(O), p = h;
    default:
      if (b < 1) if ($ == 123) --b;else if ($ == 125 && b++ == 0 && L() == 125) continue;
      switch (O += k($), $ * b) {
        case 38:
          d = o > 0 ? 1 : (O += "\f", -1);
          break;
        case 44:
          u[f++] = (A(O) - 1) * d, d = 1;
          break;
        case 64:
          if (P() === 45) O += W(N());
          v = P(), o = l = A(g = O += ae(Q())), $++;
          break;
        case 45:
          if (h === 45 && A(O) == 2) b = 0;
      }
  }
  return s;
}
function se(e, r, a, n, s, t, u, i, f, o, l) {
  var v = s - 1;
  var p = s === 0 ? t : [""];
  var h = M(p);
  for (var b = 0, w = 0, d = 0; b < n; ++b) for (var k = 0, g = O(e, v + 1, v = $(w = u[b])), m = e; k < h; ++k) if (m = x(w > 0 ? p[k] + " " + g : j(g, /&\f/g, p[k]))) f[d++] = m;
  return I(e, r, a, s === 0 ? c : i, f, o, l);
}
function te(e, r, a) {
  return I(e, r, a, stylis_n, k(K()), O(e, 2, -2), 0);
}
function ue(e, r, a, n) {
  return I(e, r, a, s, O(e, 0, n), O(e, n + 1, -1), n);
}
function ie(n, c, s) {
  switch (m(n, c)) {
    case 5103:
      return a + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + n + n;
    case 4789:
      return r + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + n + r + n + e + n + n;
    case 5936:
      switch (C(n, c + 11)) {
        case 114:
          return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    case 6828:
    case 4268:
    case 2903:
      return a + n + e + n + n;
    case 6165:
      return a + n + e + "flex-" + n + n;
    case 5187:
      return a + n + j(n, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + n;
    case 5443:
      return a + n + e + "flex-item-" + j(n, /flex-|-self/g, "") + (!y(n, /flex-|baseline/) ? e + "grid-row-" + j(n, /flex-|-self/g, "") : "") + n;
    case 4675:
      return a + n + e + "flex-line-pack" + j(n, /align-content|flex-|-self/g, "") + n;
    case 5548:
      return a + n + e + j(n, "shrink", "negative") + n;
    case 5292:
      return a + n + e + j(n, "basis", "preferred-size") + n;
    case 6060:
      return a + "box-" + j(n, "-grow", "") + a + n + e + j(n, "grow", "positive") + n;
    case 4554:
      return a + j(n, /([^-])(transform)/g, "$1" + a + "$2") + n;
    case 6187:
      return j(j(j(n, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), n, "") + n;
    case 5495:
    case 3959:
      return j(n, /(image-set\([^]*)/, a + "$1" + "$`$1");
    case 4968:
      return j(j(n, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + n + n;
    case 4200:
      if (!y(n, /flex-|baseline/)) return e + "grid-column-align" + O(n, c) + n;
      break;
    case 2592:
    case 3360:
      return e + j(n, "template-", "") + n;
    case 4384:
    case 3616:
      if (s && s.some(function (e, r) {
        return c = r, y(e.props, /grid-\w+-end/);
      })) {
        return ~z(n + (s = s[c].value), "span") ? n : e + j(n, "-start", "") + n + e + "grid-row-span:" + (~z(s, "span") ? y(s, /\d+/) : +y(s, /\d+/) - +y(n, /\d+/)) + ";";
      }
      return e + j(n, "-start", "") + n;
    case 4896:
    case 4128:
      return s && s.some(function (e) {
        return y(e.props, /grid-\w+-start/);
      }) ? n : e + j(j(n, "-end", "-span"), "span ", "") + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(n, /(.+)-inline(.+)/, a + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(n) - 1 - c > 6) switch (C(n, c + 1)) {
        case 109:
          if (C(n, c + 4) !== 45) break;
        case 102:
          return j(n, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (C(n, c + 3) == 108 ? "$3" : "$2-$3")) + n;
        case 115:
          return ~z(n, "stretch") ? ie(j(n, "stretch", "fill-available"), c, s) + n : n;
      }
      break;
    case 5152:
    case 5920:
      return j(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, a, c, s, t, u, i) {
        return e + a + ":" + c + i + (s ? e + a + "-span:" + (t ? u : +u - +c) + i : "") + n;
      });
    case 4949:
      if (C(n, c + 6) === 121) return j(n, ":", ":" + a) + n;
      break;
    case 6444:
      switch (C(n, C(n, 14) === 45 ? 18 : 11)) {
        case 120:
          return j(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + a + (C(n, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + n;
        case 100:
          return j(n, ":", ":" + e) + n;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return j(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function fe(e, r) {
  var a = "";
  var n = M(e);
  for (var c = 0; c < n; c++) a += r(e[c], c, e, r) || "";
  return a;
}
function oe(e, r, a, t) {
  switch (e.type) {
    case stylis_i:
    case s:
      return e.return = e.return || e.value;
    case stylis_n:
      return "";
    case h:
      return e.return = e.value + "{" + fe(e.children, t) + "}";
    case c:
      e.value = e.props.join(",");
  }
  return A(a = fe(e.children, t)) ? e.return = e.value + "{" + a + "}" : "";
}
function le(e) {
  var r = M(e);
  return function (a, n, c, s) {
    var t = "";
    for (var u = 0; u < r; u++) t += e[u](a, n, c, s) || "";
    return t;
  };
}
function ve(e) {
  return function (r) {
    if (!r.root) if (r = r.return) e(r);
  };
}
function pe(n, t, u, i) {
  if (n.length > -1) if (!n.return) switch (n.type) {
    case s:
      n.return = ie(n.value, n.length, u);
      return;
    case h:
      return fe([J(n, {
        value: j(n.value, "@", "@" + a)
      })], i);
    case c:
      if (n.length) return q(n.props, function (c) {
        switch (y(c, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return fe([J(n, {
              props: [j(c, /:(read-\w+)/, ":" + r + "$1")]
            })], i);
          case "::placeholder":
            return fe([J(n, {
              props: [j(c, /:(plac\w+)/, ":" + a + "input-$1")]
            }), J(n, {
              props: [j(c, /:(plac\w+)/, ":" + r + "$1")]
            }), J(n, {
              props: [j(c, /:(plac\w+)/, e + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}
function he(e) {
  switch (e.type) {
    case c:
      e.props = e.props.map(function (r) {
        return q(X(r), function (r, a, n) {
          switch (C(r, 0)) {
            case 12:
              return O(r, 1, A(r));
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return r;
            case 58:
              if (n[++a] === "global") n[a] = "", n[++a] = "\f" + O(n[a], a = 1, -1);
            case 32:
              return a === 1 ? "" : r;
            default:
              switch (a) {
                case 0:
                  e = r;
                  return M(n) > 1 ? "" : r;
                case a = M(n) - 1:
                case 2:
                  return a === 2 ? r + e + e : r + e;
                default:
                  return r;
              }
          }
        });
      });
  }
}

// CONCATENATED MODULE: ../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
/* harmony default export */ var emotion_weak_memoize_esm = (weakMemoize);
// CONCATENATED MODULE: ../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}
/* harmony default export */ var emotion_memoize_esm = (memoize);
// CONCATENATED MODULE: ../node_modules/@emotion/cache/dist/emotion-cache.esm.js




var emotion_cache_esm_identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = P(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (T(character)) {
      break;
    }
    N();
  }
  return R(begin, F);
};
var emotion_cache_esm_toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;
  do {
    switch (T(character)) {
      case 0:
        // &\f
        if (character === 38 && P() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }
        parsed[index] += emotion_cache_esm_identifierWithPointTracking(F - 1, points, index);
        break;
      case 2:
        parsed[index] += W(character);
        break;
      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = P() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += k(character);
    }
  } while (character = N());
  return parsed;
};
var emotion_cache_esm_getRules = function getRules(value, points) {
  return V(emotion_cache_esm_toRules(U(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent ||
  // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value,
    parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case

  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */ && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = emotion_cache_esm_getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (
    // charcode for l
    value.charCodeAt(0) === 108 &&
    // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? children[0].children :
      // global rule at the root level
      children;
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];
        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version

        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};
var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user

var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (m(value, length)) {
    // color-adjust
    case 5103:
      return a + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + value + r + value + e + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return a + value + e + value + value;
    // order

    case 6165:
      return a + value + e + 'flex-' + value + value;
    // align-items

    case 5187:
      return a + value + j(value, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return a + value + e + 'flex-item-' + j(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return a + value + e + 'flex-line-pack' + j(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return a + value + e + j(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return a + value + e + j(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return a + 'box-' + j(value, '-grow', '') + a + value + e + j(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return a + j(value, /([^-])(transform)/g, '$1' + a + '$2') + value;
    // cursor

    case 6187:
      return j(j(j(value, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return j(value, /(image-set\([^]*)/, a + '$1' + '$`$1');
    // justify-content

    case 4968:
      return j(j(value, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + a + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(value, /(.+)-inline(.+)/, a + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (A(value) - 1 - length > 6) switch (C(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (C(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return j(value, /(.+:)(.+)-([^]+)/, '$1' + a + '$2-$3' + '$1' + r + (C(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~z(value, 'stretch') ? prefix(j(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (C(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (C(value, A(value) - 3 - (~z(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return j(value, ':', ':' + a) + value;
        // (inline-)?fl(e)x

        case 101:
          return j(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + a + (C(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + a + '$2$3' + '$1' + e + '$2box$3') + value;
      }
      break;
    // writing-mode

    case 5936:
      switch (C(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }
      return a + value + e + value + value;
  }
  return value;
}
var emotion_cache_esm_prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case s:
      element["return"] = prefix(element.value, element.length);
      break;
    case h:
      return fe([J(element, {
        value: j(element.value, '@', '@' + a)
      })], callback);
    case c:
      if (element.length) return q(element.props, function (value) {
        switch (y(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return fe([J(element, {
              props: [j(value, /:(read-\w+)/, ':' + r + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return fe([J(element, {
              props: [j(value, /:(plac\w+)/, ':' + a + 'input-$1')]
            }), J(element, {
              props: [j(value, /:(plac\w+)/, ':' + r + '$1')]
            }), J(element, {
              props: [j(value, /:(plac\w+)/, e + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
};
var isBrowser = typeof document !== 'undefined';
var getServerStylisCache = isBrowser ? undefined : emotion_weak_memoize_esm(function () {
  return emotion_memoize_esm(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [emotion_cache_esm_prefixer];
var emotion_cache_esm_createCache = function createCache(options) {
  var key = options.key;
  if (false) {}
  if (isBrowser && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');
      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (false) {}
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (false) {}
  if (isBrowser) {
    var currentSheet;
    var finalizingPlugins = [oe,  false ? undefined : ve(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = le(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
      return fe(ne(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (false) {}
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [oe];
    var _serializer = le(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis(styles) {
      return fe(ne(styles), _serializer);
    }; // $FlowFixMe

    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);
      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        if (
        // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        false) {}
        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
/* harmony default export */ var emotion_cache_esm = (emotion_cache_esm_createCache);
// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__("GeWT");
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ../node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var emotion_react_isolated_hnrs_esm_hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent) {
  return hoist_non_react_statics_cjs_default()(targetComponent, sourceComponent);
};
/* harmony default export */ var emotion_react_isolated_hnrs_esm = (emotion_react_isolated_hnrs_esm_hoistNonReactStatics);
// CONCATENATED MODULE: ../node_modules/@emotion/utils/dist/emotion-utils.esm.js
var emotion_utils_esm_isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false ||
  // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  emotion_utils_esm_isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
      if (!emotion_utils_esm_isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== undefined);
    if (!emotion_utils_esm_isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

// CONCATENATED MODULE: ../node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
/* harmony default export */ var emotion_hash_esm = (murmur2);
// CONCATENATED MODULE: ../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ var emotion_unitless_esm = (unitlessKeys);
// CONCATENATED MODULE: ../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
function emotion_serialize_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_serialize_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_serialize_esm_typeof(obj); }



var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */emotion_memoize_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var emotion_serialize_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (emotion_unitless_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }
var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}
    return interpolation;
  }
  switch (emotion_serialize_esm_typeof(interpolation)) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== undefined) {
          var next = interpolation.next;
          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (false) {}
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (false) {}
        break;
      }
    case 'string':
      if (false) { var replaced, matched; }
      break;
  } // finalize string values (regular strings and functions interpolated into css calls)

  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (emotion_serialize_esm_typeof(value) !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + emotion_serialize_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + emotion_serialize_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                if (false) {}
                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
var emotion_serialize_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && emotion_serialize_esm_typeof(args[0]) === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (false) {}
    styles += strings[0];
  } // we start at 1 since we've already handled the first arg

  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (false) {}
      styles += strings[i];
    }
  }
  var sourceMap;
  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time

  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' +
    // $FlowFixMe we know it's not null
    match[1];
  }
  var name = emotion_hash_esm(styles) + identifierName;
  if (false) {}
  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

// CONCATENATED MODULE: ../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js


var emotion_use_insertion_effect_with_fallbacks_esm_isBrowser = typeof document !== 'undefined';
var syncFallback = function syncFallback(create) {
  return create();
};
var useInsertionEffect = compat_module['useInsertion' + 'Effect'] ? compat_module['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !emotion_use_insertion_effect_with_fallbacks_esm_isBrowser ? syncFallback : useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || compat_module["useLayoutEffect"];

// CONCATENATED MODULE: ../node_modules/@emotion/react/dist/emotion-element-3838ba9e.esm.js
function emotion_element_3838ba9e_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_element_3838ba9e_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_element_3838ba9e_esm_typeof(obj); }








var emotion_element_3838ba9e_esm_isBrowser = typeof document !== 'undefined';
var emotion_element_3838ba9e_esm_hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* #__PURE__ */Object(compat_module["createContext"])(
// we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */emotion_cache_esm({
  key: 'css'
}) : null);
if (false) {}
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return Object(compat_module["useContext"])(EmotionCacheContext);
};
var emotion_element_3838ba9e_esm_withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/Object(compat_module["forwardRef"])(function (props, ref) {
    // the cache will never be null in the browser
    var cache = Object(compat_module["useContext"])(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
if (!emotion_element_3838ba9e_esm_isBrowser) {
  emotion_element_3838ba9e_esm_withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = Object(compat_module["useContext"])(EmotionCacheContext);
      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = emotion_cache_esm({
          key: 'css'
        });
        return /*#__PURE__*/Object(compat_module["createElement"])(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}
var ThemeContext = /* #__PURE__ */Object(compat_module["createContext"])({});
if (false) {}
var emotion_element_3838ba9e_esm_useTheme = function useTheme() {
  return Object(compat_module["useContext"])(ThemeContext);
};
var emotion_element_3838ba9e_esm_getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);
    if (false) {}
    return mergedTheme;
  }
  if (false) {}
  return _extends({}, outerTheme, theme);
};
var createCacheWithTheme = /* #__PURE__ */emotion_weak_memoize_esm(function (outerTheme) {
  return emotion_weak_memoize_esm(function (theme) {
    return emotion_element_3838ba9e_esm_getTheme(outerTheme, theme);
  });
});
var emotion_element_3838ba9e_esm_ThemeProvider = function ThemeProvider(props) {
  var theme = Object(compat_module["useContext"])(ThemeContext);
  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }
  return /*#__PURE__*/Object(compat_module["createElement"])(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';
  var render = function render(props, ref) {
    var theme = Object(compat_module["useContext"])(ThemeContext);
    return /*#__PURE__*/Object(compat_module["createElement"])(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe

  var WithTheme = /*#__PURE__*/Object(compat_module["forwardRef"])(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return emotion_react_isolated_hnrs_esm(WithTheme, Component);
}
var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};
var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};
var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }
  return undefined;
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}
  var newProps = {};
  for (var key in props) {
    if (emotion_element_3838ba9e_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (false) { var label; }
  return newProps;
};
var emotion_element_3838ba9e_esm_Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serialized = _ref.serialized,
    isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!emotion_element_3838ba9e_esm_isBrowser && rules !== undefined) {
    var _ref2;
    var serializedNames = serialized.name;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }
    return /*#__PURE__*/Object(compat_module["createElement"])("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var Emotion = /* #__PURE__ */emotion_element_3838ba9e_esm_withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';
  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = emotion_serialize_esm_serializeStyles(registeredStyles, undefined, Object(compat_module["useContext"])(ThemeContext));
  if (false) { var labelFromStack; }
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (emotion_element_3838ba9e_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || false)) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/Object(compat_module["createElement"])(compat_module["Fragment"], null, /*#__PURE__*/Object(compat_module["createElement"])(emotion_element_3838ba9e_esm_Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/Object(compat_module["createElement"])(WrappedComponent, newProps));
});
if (false) {}

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");

// CONCATENATED MODULE: ../node_modules/@emotion/react/dist/emotion-react.esm.js
function emotion_react_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_react_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_react_esm_typeof(obj); }











var pkg = {
  name: "@emotion/react",
  version: "11.10.5",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        "default": "./dist/emotion-react.esm.js"
      },
      "default": "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.js", "macro.d.ts", "macro.js.flow"],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.5",
    "@emotion/cache": "^11.10.5",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: true
    },
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@babel/core": "^7.18.5",
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.5",
    "@emotion/css-prettifier": "1.1.1",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.5",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"],
    umdName: "emotionReact",
    exports: {
      envConditions: ["browser", "worker"],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
};
var emotion_react_esm_jsx = function jsx(type, props) {
  var args = arguments;
  if (props == null || !emotion_element_3838ba9e_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return compat_module["createElement"].apply(undefined, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe

  return compat_module["createElement"].apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */emotion_element_3838ba9e_esm_withEmotionCache(function (props, cache) {
  if (false) {}
  var styles = props.styles;
  var serialized = emotion_serialize_esm_serializeStyles([styles], undefined, Object(compat_module["useContext"])(ThemeContext));
  if (!emotion_element_3838ba9e_esm_isBrowser) {
    var _ref;
    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }
    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);
    if (shouldCache) {
      return null;
    }
    return /*#__PURE__*/Object(compat_module["createElement"])("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything

  var sheetRef = Object(compat_module["useRef"])();
  useInsertionEffectWithLayoutFallback(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
      rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
if (false) {}
function emotion_react_esm_css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return emotion_serialize_esm_serializeStyles(args);
}
var keyframes = function keyframes() {
  var insertable = emotion_react_esm_css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (emotion_react_esm_typeof(arg)) {
      case 'boolean':
        break;
      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}
            toAdd = '';
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }
          break;
        }
      default:
        {
          toAdd = arg;
        }
    }
    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var emotion_react_esm_Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    var rules = '';
    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);
      if (!emotion_element_3838ba9e_esm_isBrowser && res !== undefined) {
        rules += res;
      }
    }
    if (!emotion_element_3838ba9e_esm_isBrowser) {
      return rules;
    }
  });
  if (!emotion_element_3838ba9e_esm_isBrowser && rules.length !== 0) {
    var _ref2;
    return /*#__PURE__*/Object(compat_module["createElement"])("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function (serialized) {
      return serialized.name;
    }).join(' '), _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var ClassNames = /* #__PURE__ */emotion_element_3838ba9e_esm_withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css = function css() {
    if (hasRendered && "production" !== 'production') {
      throw new Error('css can only be used during render');
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = emotion_serialize_esm_serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {
      throw new Error('cx can only be used during render');
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css, classnames(args));
  };
  var content = {
    css: css,
    cx: cx,
    theme: Object(compat_module["useContext"])(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/Object(compat_module["createElement"])(compat_module["Fragment"], null, /*#__PURE__*/Object(compat_module["createElement"])(emotion_react_esm_Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});
if (false) {}
if (false) { var globalKey, globalContext, isTestEnv, emotion_react_esm_isBrowser; }

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
// CONCATENATED MODULE: ../node_modules/@floating-ui/core/dist/floating-ui.core.esm.js
var floating_ui_core_esm_excluded = ["crossAxis", "alignment", "allowedPlacements", "autoAlignment"],
  _excluded2 = ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"],
  _excluded3 = ["strategy"],
  _excluded4 = ["mainAxis", "crossAxis", "limiter"],
  _excluded5 = ["apply"];
function floating_ui_core_esm_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = floating_ui_core_esm_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function floating_ui_core_esm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function floating_ui_core_esm_toConsumableArray(arr) { return floating_ui_core_esm_arrayWithoutHoles(arr) || floating_ui_core_esm_iterableToArray(arr) || floating_ui_core_esm_unsupportedIterableToArray(arr) || floating_ui_core_esm_nonIterableSpread(); }
function floating_ui_core_esm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function floating_ui_core_esm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return floating_ui_core_esm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return floating_ui_core_esm_arrayLikeToArray(o, minLen); }
function floating_ui_core_esm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function floating_ui_core_esm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return floating_ui_core_esm_arrayLikeToArray(arr); }
function floating_ui_core_esm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function floating_ui_core_esm_typeof(obj) { "@babel/helpers - typeof"; return floating_ui_core_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, floating_ui_core_esm_typeof(obj); }
function floating_ui_core_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? floating_ui_core_esm_ownKeys(Object(source), !0).forEach(function (key) { floating_ui_core_esm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : floating_ui_core_esm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function floating_ui_core_esm_defineProperty(obj, key, value) { key = floating_ui_core_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function floating_ui_core_esm_toPropertyKey(arg) { var key = floating_ui_core_esm_toPrimitive(arg, "string"); return floating_ui_core_esm_typeof(key) === "symbol" ? key : String(key); }
function floating_ui_core_esm_toPrimitive(input, hint) { if (floating_ui_core_esm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (floating_ui_core_esm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  var reference = _ref.reference,
    floating = _ref.floating;
  var commonX = reference.x + reference.width / 2 - floating.width / 2;
  var commonY = reference.y + reference.height / 2 - floating.height / 2;
  var mainAxis = getMainAxisFromPlacement(placement);
  var length = getLengthFromAxis(mainAxis);
  var commonAlign = reference[length] / 2 - floating[length] / 2;
  var side = getSide(placement);
  var isVertical = mainAxis === 'x';
  var coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
var floating_ui_core_esm_computePosition = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (reference, floating, config) {
    var _config$placement = config.placement,
      placement = _config$placement === void 0 ? 'bottom' : _config$placement,
      _config$strategy = config.strategy,
      strategy = _config$strategy === void 0 ? 'absolute' : _config$strategy,
      _config$middleware = config.middleware,
      middleware = _config$middleware === void 0 ? [] : _config$middleware,
      platform = config.platform;
    var validMiddleware = middleware.filter(Boolean);
    var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(floating);
    if (false) {}
    var rects = yield platform.getElementRects({
      reference: reference,
      floating: floating,
      strategy: strategy
    });
    var _computeCoordsFromPla = computeCoordsFromPlacement(rects, placement, rtl),
      x = _computeCoordsFromPla.x,
      y = _computeCoordsFromPla.y;
    var statefulPlacement = placement;
    var middlewareData = {};
    var resetCount = 0;
    for (var i = 0; i < validMiddleware.length; i++) {
      var _validMiddleware$i = validMiddleware[i],
        name = _validMiddleware$i.name,
        fn = _validMiddleware$i.fn;
      var _yield$fn = yield fn({
          x: x,
          y: y,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy: strategy,
          middlewareData: middlewareData,
          rects: rects,
          platform: platform,
          elements: {
            reference: reference,
            floating: floating
          }
        }),
        nextX = _yield$fn.x,
        nextY = _yield$fn.y,
        data = _yield$fn.data,
        reset = _yield$fn.reset;
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = _objectSpread(_objectSpread({}, middlewareData), {}, floating_ui_core_esm_defineProperty({}, name, _objectSpread(_objectSpread({}, middlewareData[name]), data)));
      if (false) {}
      if (reset && resetCount <= 50) {
        resetCount++;
        if (floating_ui_core_esm_typeof(reset) === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? yield platform.getElementRects({
              reference: reference,
              floating: floating,
              strategy: strategy
            }) : reset.rects;
          }
          var _computeCoordsFromPla2 = computeCoordsFromPlacement(rects, statefulPlacement, rtl);
          x = _computeCoordsFromPla2.x;
          y = _computeCoordsFromPla2.y;
        }
        i = -1;
        continue;
      }
    }
    return {
      x: x,
      y: y,
      placement: statefulPlacement,
      strategy: strategy,
      middlewareData: middlewareData
    };
  });
  return function computePosition(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
function expandPaddingObject(padding) {
  return _objectSpread({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return _objectSpread(_objectSpread({}, rect), {}, {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
function detectOverflow(_x4, _x5) {
  return _detectOverflow.apply(this, arguments);
}
function _detectOverflow() {
  _detectOverflow = _asyncToGenerator(function* (middlewareArguments, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    var x = middlewareArguments.x,
      y = middlewareArguments.y,
      platform = middlewareArguments.platform,
      rects = middlewareArguments.rects,
      elements = middlewareArguments.elements,
      strategy = middlewareArguments.strategy;
    var _options8 = options,
      _options8$boundary = _options8.boundary,
      boundary = _options8$boundary === void 0 ? 'clippingAncestors' : _options8$boundary,
      _options8$rootBoundar = _options8.rootBoundary,
      rootBoundary = _options8$rootBoundar === void 0 ? 'viewport' : _options8$rootBoundar,
      _options8$elementCont = _options8.elementContext,
      elementContext = _options8$elementCont === void 0 ? 'floating' : _options8$elementCont,
      _options8$altBoundary = _options8.altBoundary,
      altBoundary = _options8$altBoundary === void 0 ? false : _options8$altBoundary,
      _options8$padding = _options8.padding,
      padding = _options8$padding === void 0 ? 0 : _options8$padding;
    var paddingObject = getSideObjectFromPadding(padding);
    var altContext = elementContext === 'floating' ? 'reference' : 'floating';
    var element = elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = rectToClientRect(yield platform.getClippingRect({
      element: ((_await$platform$isEle = yield platform.isElement == null ? void 0 : platform.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
      boundary: boundary,
      rootBoundary: rootBoundary,
      strategy: strategy
    }));
    var rect = elementContext === 'floating' ? _objectSpread(_objectSpread({}, rects.floating), {}, {
      x: x,
      y: y
    }) : rects.reference;
    var offsetParent = yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating);
    var offsetScale = (yield platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? (yield platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    var elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: rect,
      offsetParent: offsetParent,
      strategy: strategy
    }) : rect);
    if (false) {}
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
  return _detectOverflow.apply(this, arguments);
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

/**
 * A data provider that provides data to position an inner element of the
 * floating element (usually a triangle or caret) so that it is centered to the
 * reference element.
 * @see https://floating-ui.com/docs/arrow
 */
var arrow = function arrow(options) {
  return {
    name: 'arrow',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _data, _ref4;
        // Since `element` is required, we don't Partial<> the type.
        var _ref3 = options || {},
          element = _ref3.element,
          _ref3$padding = _ref3.padding,
          padding = _ref3$padding === void 0 ? 0 : _ref3$padding;
        var x = middlewareArguments.x,
          y = middlewareArguments.y,
          placement = middlewareArguments.placement,
          rects = middlewareArguments.rects,
          platform = middlewareArguments.platform;
        if (element == null) {
          if (false) {}
          return {};
        }
        var paddingObject = getSideObjectFromPadding(padding);
        var coords = {
          x: x,
          y: y
        };
        var axis = getMainAxisFromPlacement(placement);
        var length = getLengthFromAxis(axis);
        var arrowDimensions = yield platform.getDimensions(element);
        var minProp = axis === 'y' ? 'top' : 'left';
        var maxProp = axis === 'y' ? 'bottom' : 'right';
        var endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        var startDiff = coords[axis] - rects.reference[axis];
        var arrowOffsetParent = yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element);
        var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        if (clientSize === 0) {
          clientSize = rects.floating[length];
        }
        var centerToReference = endDiff / 2 - startDiff / 2;

        // Make sure the arrow doesn't overflow the floating element if the center
        // point is outside the floating element's bounds.
        var min = paddingObject[minProp];
        var max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        var offset = within(min, center, max);

        // If the reference is small enough that the arrow's padding causes it to
        // to point to nothing for an aligned placement, adjust the offset of the
        // floating element itself. This stops `shift()` from taking action, but can
        // be worked around by calling it again after the `arrow()` if desired.
        var shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
        var alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
        return _ref4 = {}, floating_ui_core_esm_defineProperty(_ref4, axis, coords[axis] - alignmentOffset), floating_ui_core_esm_defineProperty(_ref4, "data", (_data = {}, floating_ui_core_esm_defineProperty(_data, axis, offset), floating_ui_core_esm_defineProperty(_data, "centerOffset", center - offset), _data)), _ref4;
      })();
    }
  };
};
var sides = ['top', 'right', 'bottom', 'left'];
var allPlacements = /*#__PURE__*/sides.reduce(function (acc, side) {
  return acc.concat(side, side + "-start", side + "-end");
}, []);
var oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (side) {
    return oppositeSideMap[side];
  });
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  var alignment = getAlignment(placement);
  var mainAxis = getMainAxisFromPlacement(placement);
  var length = getLengthFromAxis(mainAxis);
  var mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, function (alignment) {
    return oppositeAlignmentMap[alignment];
  });
}
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  var allowedPlacementsSortedByAlignment = alignment ? [].concat(floating_ui_core_esm_toConsumableArray(allowedPlacements.filter(function (placement) {
    return getAlignment(placement) === alignment;
  })), floating_ui_core_esm_toConsumableArray(allowedPlacements.filter(function (placement) {
    return getAlignment(placement) !== alignment;
  }))) : allowedPlacements.filter(function (placement) {
    return getSide(placement) === placement;
  });
  return allowedPlacementsSortedByAlignment.filter(function (placement) {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Automatically chooses the `placement` which has the most space available.
 * @see https://floating-ui.com/docs/autoPlacement
 */
var autoPlacement = function autoPlacement(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
        var rects = middlewareArguments.rects,
          middlewareData = middlewareArguments.middlewareData,
          placement = middlewareArguments.placement,
          platform = middlewareArguments.platform,
          elements = middlewareArguments.elements;
        var _options = options,
          _options$crossAxis = _options.crossAxis,
          crossAxis = _options$crossAxis === void 0 ? false : _options$crossAxis,
          alignment = _options.alignment,
          _options$allowedPlace = _options.allowedPlacements,
          allowedPlacements = _options$allowedPlace === void 0 ? allPlacements : _options$allowedPlace,
          _options$autoAlignmen = _options.autoAlignment,
          autoAlignment = _options$autoAlignmen === void 0 ? true : _options$autoAlignmen,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options, floating_ui_core_esm_excluded);
        var placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
        var overflow = yield detectOverflow(middlewareArguments, detectOverflowOptions);
        var currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
        var currentPlacement = placements[currentIndex];
        if (currentPlacement == null) {
          return {};
        }
        var _getAlignmentSides = getAlignmentSides(currentPlacement, rects, yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)),
          main = _getAlignmentSides.main,
          cross = _getAlignmentSides.cross;

        // Make `computeCoords` start from the right place.
        if (placement !== currentPlacement) {
          return {
            reset: {
              placement: placements[0]
            }
          };
        }
        var currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
        var allOverflows = [].concat(floating_ui_core_esm_toConsumableArray(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), [{
          placement: currentPlacement,
          overflows: currentOverflows
        }]);
        var nextPlacement = placements[currentIndex + 1];

        // There are more placements to check.
        if (nextPlacement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        var placementsSortedByMostSpace = allOverflows.map(function (d) {
          var alignment = getAlignment(d.placement);
          return [d.placement, alignment && crossAxis ?
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce(function (acc, v) {
            return acc + v;
          }, 0) :
          // Check only the mainAxis.
          d.overflows[0], d.overflows];
        }).sort(function (a, b) {
          return a[1] - b[1];
        });
        var placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(function (d) {
          return d[2].slice(0,
          // Aligned placements should not check their opposite crossAxis
          // side.
          getAlignment(d[0]) ? 2 : 3).every(function (v) {
            return v <= 0;
          });
        });
        var resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
        if (resetPlacement !== placement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: resetPlacement
            }
          };
        }
        return {};
      })();
    }
  };
};
function getExpandedPlacements(placement) {
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  var lr = ['left', 'right'];
  var rl = ['right', 'left'];
  var tb = ['top', 'bottom'];
  var bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  var alignment = getAlignment(placement);
  var list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(function (side) {
      return side + "-" + alignment;
    });
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * A visibility optimizer that changes the placement of the floating element in
 * order to keep it in view. By default, only the opposite placement is tried.
 *
 * It has the ability to flip to any placement, not just the opposite one. You
 * can use a series of “fallback” placements, where each placement is
 * progressively tried until the one that fits can be used.
 * @see https://floating-ui.com/docs/flip
 */
var flip = function flip(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _middlewareData$flip;
        var placement = middlewareArguments.placement,
          middlewareData = middlewareArguments.middlewareData,
          rects = middlewareArguments.rects,
          initialPlacement = middlewareArguments.initialPlacement,
          platform = middlewareArguments.platform,
          elements = middlewareArguments.elements;
        var _options2 = options,
          _options2$mainAxis = _options2.mainAxis,
          checkMainAxis = _options2$mainAxis === void 0 ? true : _options2$mainAxis,
          _options2$crossAxis = _options2.crossAxis,
          checkCrossAxis = _options2$crossAxis === void 0 ? true : _options2$crossAxis,
          specifiedFallbackPlacements = _options2.fallbackPlacements,
          _options2$fallbackStr = _options2.fallbackStrategy,
          fallbackStrategy = _options2$fallbackStr === void 0 ? 'bestFit' : _options2$fallbackStr,
          _options2$fallbackAxi = _options2.fallbackAxisSideDirection,
          fallbackAxisSideDirection = _options2$fallbackAxi === void 0 ? 'none' : _options2$fallbackAxi,
          _options2$flipAlignme = _options2.flipAlignment,
          flipAlignment = _options2$flipAlignme === void 0 ? true : _options2$flipAlignme,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options2, _excluded2);
        var side = getSide(placement);
        var isBasePlacement = getSide(initialPlacement) === initialPlacement;
        var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push.apply(fallbackPlacements, floating_ui_core_esm_toConsumableArray(getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl)));
        }
        var placements = [initialPlacement].concat(floating_ui_core_esm_toConsumableArray(fallbackPlacements));
        var overflow = yield detectOverflow(middlewareArguments, detectOverflowOptions);
        var overflows = [];
        var overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          var _getAlignmentSides2 = getAlignmentSides(placement, rects, rtl),
            main = _getAlignmentSides2.main,
            cross = _getAlignmentSides2.cross;
          overflows.push(overflow[main], overflow[cross]);
        }
        overflowsData = [].concat(floating_ui_core_esm_toConsumableArray(overflowsData), [{
          placement: placement,
          overflows: overflows
        }]);

        // One or more sides is overflowing.
        if (!overflows.every(function (side) {
          return side <= 0;
        })) {
          var _middlewareData$flip2, _overflowsData$filter;
          var nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          var nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          var resetPlacement = (_overflowsData$filter = overflowsData.filter(function (d) {
            return d.overflows[0] <= 0;
          }).sort(function (a, b) {
            return a.overflows[1] - b.overflows[1];
          })[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
                {
                  var _overflowsData$map$so;
                  var _placement = (_overflowsData$map$so = overflowsData.map(function (d) {
                    return [d.placement, d.overflows.filter(function (overflow) {
                      return overflow > 0;
                    }).reduce(function (acc, overflow) {
                      return acc + overflow;
                    }, 0)];
                  }).sort(function (a, b) {
                    return a[1] - b[1];
                  })[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (_placement) {
                    resetPlacement = _placement;
                  }
                  break;
                }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      })();
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(function (side) {
    return overflow[side] >= 0;
  });
}
/**
 * A data provider that allows you to hide the floating element in applicable
 * situations, usually when it’s not within the same clipping context as the
 * reference element.
 * @see https://floating-ui.com/docs/hide
 */
var hide = function hide(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _options3 = options,
          _options3$strategy = _options3.strategy,
          strategy = _options3$strategy === void 0 ? 'referenceHidden' : _options3$strategy,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options3, _excluded3);
        var rects = middlewareArguments.rects;
        switch (strategy) {
          case 'referenceHidden':
            {
              var overflow = yield detectOverflow(middlewareArguments, _objectSpread(_objectSpread({}, detectOverflowOptions), {}, {
                elementContext: 'reference'
              }));
              var offsets = getSideOffsets(overflow, rects.reference);
              return {
                data: {
                  referenceHiddenOffsets: offsets,
                  referenceHidden: isAnySideFullyClipped(offsets)
                }
              };
            }
          case 'escaped':
            {
              var _overflow = yield detectOverflow(middlewareArguments, _objectSpread(_objectSpread({}, detectOverflowOptions), {}, {
                altBoundary: true
              }));
              var _offsets = getSideOffsets(_overflow, rects.floating);
              return {
                data: {
                  escapedOffsets: _offsets,
                  escaped: isAnySideFullyClipped(_offsets)
                }
              };
            }
          default:
            {
              return {};
            }
        }
      })();
    }
  };
};

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
var inline = function inline(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var placement = middlewareArguments.placement,
          elements = middlewareArguments.elements,
          rects = middlewareArguments.rects,
          platform = middlewareArguments.platform,
          strategy = middlewareArguments.strategy;
        // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
        // ClientRect's bounds, despite the event listener being triggered. A
        // padding of 2 seems to handle this issue.
        var _options4 = options,
          _options4$padding = _options4.padding,
          padding = _options4$padding === void 0 ? 2 : _options4$padding,
          x = _options4.x,
          y = _options4.y;
        var fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: rects.reference,
          offsetParent: yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating),
          strategy: strategy
        }) : rects.reference);
        var clientRects = (yield platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || [];
        var paddingObject = getSideObjectFromPadding(padding);
        function getBoundingClientRect() {
          // There are two rects and they are disjoined.
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            // Find the first rect in which the point is fully inside.
            return clientRects.find(function (rect) {
              return x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom;
            }) || fallback;
          }

          // There are 2 or more connected rects.
          if (clientRects.length >= 2) {
            if (getMainAxisFromPlacement(placement) === 'x') {
              var firstRect = clientRects[0];
              var lastRect = clientRects[clientRects.length - 1];
              var isTop = getSide(placement) === 'top';
              var _top = firstRect.top;
              var _bottom = lastRect.bottom;
              var _left = isTop ? firstRect.left : lastRect.left;
              var _right = isTop ? firstRect.right : lastRect.right;
              var _width = _right - _left;
              var _height = _bottom - _top;
              return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height,
                x: _left,
                y: _top
              };
            }
            var isLeftSide = getSide(placement) === 'left';
            var maxRight = max.apply(void 0, floating_ui_core_esm_toConsumableArray(clientRects.map(function (rect) {
              return rect.right;
            })));
            var minLeft = min.apply(void 0, floating_ui_core_esm_toConsumableArray(clientRects.map(function (rect) {
              return rect.left;
            })));
            var measureRects = clientRects.filter(function (rect) {
              return isLeftSide ? rect.left === minLeft : rect.right === maxRight;
            });
            var top = measureRects[0].top;
            var bottom = measureRects[measureRects.length - 1].bottom;
            var left = minLeft;
            var right = maxRight;
            var width = right - left;
            var height = bottom - top;
            return {
              top: top,
              bottom: bottom,
              left: left,
              right: right,
              width: width,
              height: height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        var resetRects = yield platform.getElementRects({
          reference: {
            getBoundingClientRect: getBoundingClientRect
          },
          floating: elements.floating,
          strategy: strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      })();
    }
  };
};
function convertValueToCoords(_x6, _x7) {
  return _convertValueToCoords.apply(this, arguments);
}
/**
 * A placement modifier that translates the floating element along the specified
 * axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
function _convertValueToCoords() {
  _convertValueToCoords = _asyncToGenerator(function* (middlewareArguments, value) {
    var placement = middlewareArguments.placement,
      platform = middlewareArguments.platform,
      elements = middlewareArguments.elements;
    var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
    var side = getSide(placement);
    var alignment = getAlignment(placement);
    var isVertical = getMainAxisFromPlacement(placement) === 'x';
    var mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    var crossAxisMulti = rtl && isVertical ? -1 : 1;
    var rawValue = typeof value === 'function' ? value(middlewareArguments) : value;

    // eslint-disable-next-line prefer-const
    var _ref6 = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
      } : _objectSpread({
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null
      }, rawValue),
      mainAxis = _ref6.mainAxis,
      crossAxis = _ref6.crossAxis,
      alignmentAxis = _ref6.alignmentAxis;
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
  return _convertValueToCoords.apply(this, arguments);
}
var floating_ui_core_esm_offset = function offset(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: 'offset',
    options: value,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var x = middlewareArguments.x,
          y = middlewareArguments.y;
        var diffCoords = yield convertValueToCoords(middlewareArguments, value);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      })();
    }
  };
};
function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * A visibility optimizer that shifts the floating element along the specified
 * axes in order to keep it in view.
 * @see https://floating-ui.com/docs/shift
 */
var shift = function shift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _objectSpread3;
        var x = middlewareArguments.x,
          y = middlewareArguments.y,
          placement = middlewareArguments.placement;
        var _options5 = options,
          _options5$mainAxis = _options5.mainAxis,
          checkMainAxis = _options5$mainAxis === void 0 ? true : _options5$mainAxis,
          _options5$crossAxis = _options5.crossAxis,
          checkCrossAxis = _options5$crossAxis === void 0 ? false : _options5$crossAxis,
          _options5$limiter = _options5.limiter,
          limiter = _options5$limiter === void 0 ? {
            fn: function fn(_ref) {
              var x = _ref.x,
                y = _ref.y;
              return {
                x: x,
                y: y
              };
            }
          } : _options5$limiter,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options5, _excluded4);
        var coords = {
          x: x,
          y: y
        };
        var overflow = yield detectOverflow(middlewareArguments, detectOverflowOptions);
        var mainAxis = getMainAxisFromPlacement(getSide(placement));
        var crossAxis = getCrossAxis(mainAxis);
        var mainAxisCoord = coords[mainAxis];
        var crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          var minSide = mainAxis === 'y' ? 'top' : 'left';
          var maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          var _min = mainAxisCoord + overflow[minSide];
          var _max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = within(_min, mainAxisCoord, _max);
        }
        if (checkCrossAxis) {
          var _minSide = crossAxis === 'y' ? 'top' : 'left';
          var _maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          var _min2 = crossAxisCoord + overflow[_minSide];
          var _max2 = crossAxisCoord - overflow[_maxSide];
          crossAxisCoord = within(_min2, crossAxisCoord, _max2);
        }
        var limitedCoords = limiter.fn(_objectSpread(_objectSpread({}, middlewareArguments), {}, (_objectSpread3 = {}, floating_ui_core_esm_defineProperty(_objectSpread3, mainAxis, mainAxisCoord), floating_ui_core_esm_defineProperty(_objectSpread3, crossAxis, crossAxisCoord), _objectSpread3)));
        return _objectSpread(_objectSpread({}, limitedCoords), {}, {
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        });
      })();
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
var limitShift = function limitShift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options: options,
    fn: function fn(middlewareArguments) {
      var _ref5;
      var x = middlewareArguments.x,
        y = middlewareArguments.y,
        placement = middlewareArguments.placement,
        rects = middlewareArguments.rects,
        middlewareData = middlewareArguments.middlewareData;
      var _options6 = options,
        _options6$offset = _options6.offset,
        offset = _options6$offset === void 0 ? 0 : _options6$offset,
        _options6$mainAxis = _options6.mainAxis,
        checkMainAxis = _options6$mainAxis === void 0 ? true : _options6$mainAxis,
        _options6$crossAxis = _options6.crossAxis,
        checkCrossAxis = _options6$crossAxis === void 0 ? true : _options6$crossAxis;
      var coords = {
        x: x,
        y: y
      };
      var mainAxis = getMainAxisFromPlacement(placement);
      var crossAxis = getCrossAxis(mainAxis);
      var mainAxisCoord = coords[mainAxis];
      var crossAxisCoord = coords[crossAxis];
      var rawOffset = typeof offset === 'function' ? offset(middlewareArguments) : offset;
      var computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : _objectSpread({
        mainAxis: 0,
        crossAxis: 0
      }, rawOffset);
      if (checkMainAxis) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        var limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        var limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        var _len = mainAxis === 'y' ? 'width' : 'height';
        var isOriginSide = ['top', 'left'].includes(getSide(placement));
        var _limitMin = rects.reference[crossAxis] - rects.floating[_len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        var _limitMax = rects.reference[crossAxis] + rects.reference[_len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < _limitMin) {
          crossAxisCoord = _limitMin;
        } else if (crossAxisCoord > _limitMax) {
          crossAxisCoord = _limitMax;
        }
      }
      return _ref5 = {}, floating_ui_core_esm_defineProperty(_ref5, mainAxis, mainAxisCoord), floating_ui_core_esm_defineProperty(_ref5, crossAxis, crossAxisCoord), _ref5;
    }
  };
};

/**
 * Provides data to change the size of the floating element. For instance,
 * prevent it from overflowing its clipping boundary or match the width of the
 * reference element.
 * @see https://floating-ui.com/docs/size
 */
var floating_ui_core_esm_size = function size(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var placement = middlewareArguments.placement,
          rects = middlewareArguments.rects,
          platform = middlewareArguments.platform,
          elements = middlewareArguments.elements;
        var _options7 = options,
          _options7$apply = _options7.apply,
          apply = _options7$apply === void 0 ? function () {} : _options7$apply,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options7, _excluded5);
        var overflow = yield detectOverflow(middlewareArguments, detectOverflowOptions);
        var side = getSide(placement);
        var alignment = getAlignment(placement);
        var axis = getMainAxisFromPlacement(placement);
        var isXAxis = axis === 'x';
        var _rects$floating = rects.floating,
          width = _rects$floating.width,
          height = _rects$floating.height;
        var heightSide;
        var widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide = alignment === ((yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        var overflowAvailableHeight = height - overflow[heightSide];
        var overflowAvailableWidth = width - overflow[widthSide];
        var availableHeight = overflowAvailableHeight;
        var availableWidth = overflowAvailableWidth;
        if (isXAxis) {
          availableWidth = min(
          // Maximum clipping viewport width
          width - overflow.right - overflow.left, overflowAvailableWidth);
        } else {
          availableHeight = min(
          // Maximum clipping viewport height
          height - overflow.bottom - overflow.top, overflowAvailableHeight);
        }
        if (!middlewareArguments.middlewareData.shift && !alignment) {
          var xMin = max(overflow.left, 0);
          var xMax = max(overflow.right, 0);
          var yMin = max(overflow.top, 0);
          var yMax = max(overflow.bottom, 0);
          if (isXAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        yield apply(_objectSpread(_objectSpread({}, middlewareArguments), {}, {
          availableWidth: availableWidth,
          availableHeight: availableHeight
        }));
        var nextDimensions = yield platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      })();
    }
  };
};

// CONCATENATED MODULE: ../node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js
function floating_ui_dom_esm_typeof(obj) { "@babel/helpers - typeof"; return floating_ui_dom_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, floating_ui_dom_esm_typeof(obj); }
function floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function floating_ui_dom_esm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function floating_ui_dom_esm_toConsumableArray(arr) { return floating_ui_dom_esm_arrayWithoutHoles(arr) || floating_ui_dom_esm_iterableToArray(arr) || floating_ui_dom_esm_unsupportedIterableToArray(arr) || floating_ui_dom_esm_nonIterableSpread(); }
function floating_ui_dom_esm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function floating_ui_dom_esm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return floating_ui_dom_esm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return floating_ui_dom_esm_arrayLikeToArray(o, minLen); }
function floating_ui_dom_esm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function floating_ui_dom_esm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return floating_ui_dom_esm_arrayLikeToArray(arr); }
function floating_ui_dom_esm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function floating_ui_dom_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function floating_ui_dom_esm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? floating_ui_dom_esm_ownKeys(Object(source), !0).forEach(function (key) { floating_ui_dom_esm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : floating_ui_dom_esm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function floating_ui_dom_esm_defineProperty(obj, key, value) { key = floating_ui_dom_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function floating_ui_dom_esm_toPropertyKey(arg) { var key = floating_ui_dom_esm_toPrimitive(arg, "string"); return floating_ui_dom_esm_typeof(key) === "symbol" ? key : String(key); }
function floating_ui_dom_esm_toPrimitive(input, hint) { if (floating_ui_dom_esm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (floating_ui_dom_esm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
var floating_ui_dom_esm_min = Math.min;
var floating_ui_dom_esm_max = Math.max;
var round = Math.round;
function getCssDimensions(element) {
  var css = getComputedStyle$1(element);
  var width = parseFloat(css.width);
  var height = parseFloat(css.height);
  var offsetWidth = element.offsetWidth;
  var offsetHeight = element.offsetHeight;
  var shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width: width,
    height: height,
    fallback: shouldFallback
  };
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
}
var uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  var uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
    return uaString;
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  var _getComputedStyle$ = getComputedStyle$1(element),
    overflow = _getComputedStyle$.overflow,
    overflowX = _getComputedStyle$.overflowX,
    overflowY = _getComputedStyle$.overflowY,
    display = _getComputedStyle$.display;
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try to use feature detection here instead.
  var isFirefox = /firefox/i.test(getUAString());
  var css = getComputedStyle$1(element);
  var backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;

  // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (backdropFilter ? backdropFilter !== 'none' : false) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective'].some(function (value) {
    return css.willChange.includes(value);
  }) || ['paint', 'layout', 'strict', 'content'].some(function (value) {
    // Add type check for old browsers.
    var contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}

/**
 * Determines whether or not `.getBoundingClientRect()` is affected by visual
 * viewport offsets. In Safari, the `x`/`y` offsets are values relative to the
 * visual viewport, while in other engines, they are values relative to the
 * layout viewport.
 */
function isClientRectVisualViewportBased() {
  // TODO: Try to use feature detection here instead. Feature detection for
  // this can fail in various ways, making the userAgent check the most
  // reliable:
  // • Always-visible scrollbar or not
  // • Width of <html>

  // Is Safari.
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
var FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  var domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  var rect = domElement.getBoundingClientRect();
  var _getCssDimensions = getCssDimensions(domElement),
    width = _getCssDimensions.width,
    height = _getCssDimensions.height,
    fallback = _getCssDimensions.fallback;
  var x = (fallback ? round(rect.width) : rect.width) / width;
  var y = (fallback ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x: x,
    y: y
  };
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var domElement = unwrapElement(element);
  var scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  var win = domElement ? getWindow(domElement) : window;
  var addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  var y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  var width = clientRect.width / scale.x;
  var height = clientRect.height / scale.y;
  if (domElement) {
    var _win = getWindow(domElement);
    var offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    var currentIFrame = _win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== _win) {
      var iframeScale = getScale(currentIFrame);
      var iframeRect = currentIFrame.getBoundingClientRect();
      var css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  var rect = _ref.rect,
    offsetParent = _ref.offsetParent,
    strategy = _ref.strategy;
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var scale = {
    x: 1,
    y: 1
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      var offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var scroll = getNodeScroll(element);
  var body = element.ownerDocument.body;
  var width = floating_ui_dom_esm_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  var height = floating_ui_dom_esm_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  var x = -scroll.scrollLeft + getWindowScrollBarX(element);
  var y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += floating_ui_dom_esm_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  var result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  var parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  var scrollableAncestor = getNearestOverflowAncestor(node);
  var isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  var win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  var clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  var top = clientRect.top + element.clientTop;
  var left = clientRect.left + element.clientLeft;
  var scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  var width = element.clientWidth * scale.x;
  var height = element.clientHeight * scale.y;
  var x = left * scale.x;
  var y = top * scale.y;
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  var rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    var mutableRect = floating_ui_dom_esm_objectSpread({}, clippingAncestor);
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      var win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  var cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  var result = getOverflowAncestors(element).filter(function (el) {
    return isElement(el) && getNodeName(el) !== 'body';
  });
  var currentContainingBlockComputedStyle = null;
  var elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  var currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    var computedStyle = getComputedStyle$1(currentNode);
    var containingBlock = isContainingBlock(currentNode);
    var shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(function (ancestor) {
        return ancestor !== currentNode;
      });
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  var element = _ref.element,
    boundary = _ref.boundary,
    rootBoundary = _ref.rootBoundary,
    strategy = _ref.strategy;
  var elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  var clippingAncestors = [].concat(floating_ui_dom_esm_toConsumableArray(elementClippingAncestors), [rootBoundary]);
  var firstClippingAncestor = clippingAncestors[0];
  var clippingRect = clippingAncestors.reduce(function (accRect, clippingAncestor) {
    var rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_dom_esm_max(rect.top, accRect.top);
    accRect.right = floating_ui_dom_esm_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_dom_esm_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_dom_esm_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return getCssDimensions(element);
  }
  return element.getBoundingClientRect();
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(element, true, strategy === 'fixed', offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      var offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
var platform = {
  getClippingRect: getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement: isElement,
  getDimensions: getDimensions,
  getOffsetParent: getOffsetParent,
  getDocumentElement: getDocumentElement,
  getScale: getScale,
  getElementRects: function getElementRects(_ref) {
    var _this = this;
    return floating_ui_dom_esm_asyncToGenerator(function* () {
      var reference = _ref.reference,
        floating = _ref.floating,
        strategy = _ref.strategy;
      var getOffsetParentFn = _this.getOffsetParent || getOffsetParent;
      var getDimensionsFn = _this.getDimensions;
      return {
        reference: getRectRelativeToOffsetParent(reference, yield getOffsetParentFn(floating), strategy),
        floating: floating_ui_dom_esm_objectSpread({
          x: 0,
          y: 0
        }, yield getDimensionsFn(floating))
      };
    })();
  },
  getClientRects: function getClientRects(element) {
    return Array.from(element.getClientRects());
  },
  isRTL: function isRTL(element) {
    return getComputedStyle$1(element).direction === 'rtl';
  }
};

/**
 * Automatically updates the position of the floating element when necessary.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$ancestorScro = _options.ancestorScroll,
    _ancestorScroll = _options$ancestorScro === void 0 ? true : _options$ancestorScro,
    _options$ancestorResi = _options.ancestorResize,
    ancestorResize = _options$ancestorResi === void 0 ? true : _options$ancestorResi,
    _options$elementResiz = _options.elementResize,
    elementResize = _options$elementResiz === void 0 ? true : _options$elementResiz,
    _options$animationFra = _options.animationFrame,
    animationFrame = _options$animationFra === void 0 ? false : _options$animationFra;
  var ancestorScroll = _ancestorScroll && !animationFrame;
  var ancestors = ancestorScroll || ancestorResize ? [].concat(floating_ui_dom_esm_toConsumableArray(isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : []), floating_ui_dom_esm_toConsumableArray(getOverflowAncestors(floating))) : [];
  ancestors.forEach(function (ancestor) {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  var observer = null;
  if (elementResize) {
    var initialUpdate = true;
    observer = new ResizeObserver(function () {
      if (!initialUpdate) {
        update();
      }
      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  var frameId;
  var prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    var nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return function () {
    var _observer;
    ancestors.forEach(function (ancestor) {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
var floating_ui_dom_esm_computePosition = function computePosition(reference, floating, options) {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  var cache = new Map();
  var mergedOptions = floating_ui_dom_esm_objectSpread({
    platform: platform
  }, options);
  var platformWithCache = floating_ui_dom_esm_objectSpread(floating_ui_dom_esm_objectSpread({}, mergedOptions.platform), {}, {
    _c: cache
  });
  return floating_ui_core_esm_computePosition(reference, floating, floating_ui_dom_esm_objectSpread(floating_ui_dom_esm_objectSpread({}, mergedOptions), {}, {
    platform: platformWithCache
  }));
};

// CONCATENATED MODULE: ../node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.esm.js

var use_isomorphic_layout_effect_esm_index = typeof document !== 'undefined' ? compat_module["useLayoutEffect"] : compat_module["useEffect"];
/* harmony default export */ var use_isomorphic_layout_effect_esm = (use_isomorphic_layout_effect_esm_index);
// CONCATENATED MODULE: ../node_modules/react-select/dist/index-a86253bb.esm.js












var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
// ==============================
// NO OP
// ==============================

var noop = function noop() {};

// ==============================
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}
function classNames(prefix, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }
  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
}
// ==============================
// Clean Value
// ==============================

var index_a86253bb_esm_cleanValue = function cleanValue(value) {
  if (isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
};

// ==============================
// Clean Common Props
// ==============================

var index_a86253bb_esm_cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getClassNames;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$3);
  return objectSpread2_objectSpread2({}, innerProps);
};

// ==============================
// Get Style Props
// ==============================

var getStyleProps = function getStyleProps(props, name, classNamesState) {
  var cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};

// ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var _newValue = onInputChange(inputValue, actionMeta);
    if (typeof _newValue === 'string') return _newValue;
  }
  return inputValue;
}

// ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

// Normalized Scroll Top
// ------------------------------

function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}

// Normalized scrollTo & scrollTop
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}

// Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  if (style.position === 'fixed') return document.documentElement;
  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}

// Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}

// Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

// ==============================
// Get bounding client object
// ==============================

// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

// ==============================
// Passive Event Detector
// ==============================

// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
var passiveOptionAccessed = false;
var index_a86253bb_esm_options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
// check for SSR
var index_a86253bb_esm_w = typeof window !== 'undefined' ? window : {};
if (index_a86253bb_esm_w.addEventListener && index_a86253bb_esm_w.removeEventListener) {
  index_a86253bb_esm_w.addEventListener('p', noop, index_a86253bb_esm_options);
  index_a86253bb_esm_w.removeEventListener('p', noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var index_a86253bb_esm_removeProps = function removeProps(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      key = _ref2[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function (newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
function getMenuPlacement(_ref) {
  var preferredMaxHeight = _ref.maxHeight,
    menuEl = _ref.menuEl,
    minHeight = _ref.minHeight,
    preferredPlacement = _ref.placement,
    shouldScroll = _ref.shouldScroll,
    isFixedPosition = _ref.isFixedPosition,
    controlHeight = _ref.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: preferredMaxHeight
  };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
    scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
    menuBottom = _menuEl$getBoundingCl.bottom,
    menuHeight = _menuEl$getBoundingCl.height,
    menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
    containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (preferredPlacement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (preferredPlacement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return {
        placement: 'bottom',
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
  }
  return defaultState;
}

// Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};
var index_a86253bb_esm_menuCSS = function menuCSS(_ref2, unstyled) {
  var _objectSpread2;
  var placement = _ref2.placement,
    _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    spacing = _ref2$theme.spacing,
    colors = _ref2$theme.colors;
  return objectSpread2_objectSpread2((_objectSpread2 = {
    label: 'menu'
  }, _defineProperty(_objectSpread2, alignToControl(placement), '100%'), _defineProperty(_objectSpread2, "position", 'absolute'), _defineProperty(_objectSpread2, "width", '100%'), _defineProperty(_objectSpread2, "zIndex", 1), _objectSpread2), unstyled ? {} : {
    backgroundColor: colors.neutral0,
    borderRadius: borderRadius,
    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
    marginBottom: spacing.menuGutter,
    marginTop: spacing.menuGutter
  });
};
var PortalPlacementContext = /*#__PURE__*/Object(compat_module["createContext"])(null);

// NOTE: internal only
var index_a86253bb_esm_MenuPlacer = function MenuPlacer(props) {
  var children = props.children,
    minMenuHeight = props.minMenuHeight,
    maxMenuHeight = props.maxMenuHeight,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition,
    menuShouldScrollIntoView = props.menuShouldScrollIntoView,
    theme = props.theme;
  var _ref3 = Object(compat_module["useContext"])(PortalPlacementContext) || {},
    setPortalPlacement = _ref3.setPortalPlacement;
  var ref = Object(compat_module["useRef"])(null);
  var _useState = Object(compat_module["useState"])(maxMenuHeight),
    _useState2 = _slicedToArray(_useState, 2),
    maxHeight = _useState2[0],
    setMaxHeight = _useState2[1];
  var _useState3 = Object(compat_module["useState"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    placement = _useState4[0],
    setPlacement = _useState4[1];
  var controlHeight = theme.spacing.controlHeight;
  use_isomorphic_layout_effect_esm(function () {
    var menuEl = ref.current;
    if (!menuEl) return;

    // DO NOT scroll if position is fixed
    var isFixedPosition = menuPosition === 'fixed';
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl: menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll: shouldScroll,
      isFixedPosition: isFixedPosition,
      controlHeight: controlHeight
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
  return children({
    ref: ref,
    placerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight: maxHeight
    })
  });
};
var index_a86253bb_esm_Menu = function Menu(props) {
  var children = props.children,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'menu', {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};

// ==============================
// Menu List
// ==============================

var index_a86253bb_esm_menuListCSS = function menuListCSS(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight,
    baseUnit = _ref4.theme.spacing.baseUnit;
  return objectSpread2_objectSpread2({
    maxHeight: maxHeight,
    overflowY: 'auto',
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  }, unstyled ? {} : {
    paddingBottom: baseUnit,
    paddingTop: baseUnit
  });
};
var index_a86253bb_esm_MenuList = function MenuList(props) {
  var children = props.children,
    innerProps = props.innerProps,
    innerRef = props.innerRef,
    isMulti = props.isMulti;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'menuList', {
    'menu-list': true,
    'menu-list--is-multi': isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};

// ==============================
// Menu Notices
// ==============================

var index_a86253bb_esm_noticeCSS = function noticeCSS(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme,
    baseUnit = _ref5$theme.spacing.baseUnit,
    colors = _ref5$theme.colors;
  return objectSpread2_objectSpread2({
    textAlign: 'center'
  }, unstyled ? {} : {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
  });
};
var noOptionsMessageCSS = index_a86253bb_esm_noticeCSS;
var loadingMessageCSS = index_a86253bb_esm_noticeCSS;
var index_a86253bb_esm_NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'noOptionsMessage', {
    'menu-notice': true,
    'menu-notice--no-options': true
  }), innerProps), children);
};
index_a86253bb_esm_NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var index_a86253bb_esm_LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'loadingMessage', {
    'menu-notice': true,
    'menu-notice--loading': true
  }), innerProps), children);
};
index_a86253bb_esm_LoadingMessage.defaultProps = {
  children: 'Loading...'
};

// ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
    offset = _ref6.offset,
    position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var index_a86253bb_esm_MenuPortal = function MenuPortal(props) {
  var appendTo = props.appendTo,
    children = props.children,
    controlElement = props.controlElement,
    innerProps = props.innerProps,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition;
  var menuPortalRef = Object(compat_module["useRef"])(null);
  var cleanupRef = Object(compat_module["useRef"])(null);
  var _useState5 = Object(compat_module["useState"])(coercePlacement(menuPlacement)),
    _useState6 = _slicedToArray(_useState5, 2),
    placement = _useState6[0],
    setPortalPlacement = _useState6[1];
  var portalPlacementContext = Object(compat_module["useMemo"])(function () {
    return {
      setPortalPlacement: setPortalPlacement
    };
  }, []);
  var _useState7 = Object(compat_module["useState"])(null),
    _useState8 = _slicedToArray(_useState7, 2),
    computedPosition = _useState8[0],
    setComputedPosition = _useState8[1];
  var updateComputedPosition = Object(compat_module["useCallback"])(function () {
    if (!controlElement) return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset: offset,
        rect: rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  use_isomorphic_layout_effect_esm(function () {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = Object(compat_module["useCallback"])(function () {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: 'ResizeObserver' in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  use_isomorphic_layout_effect_esm(function () {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = Object(compat_module["useCallback"])(function (menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);

  // bail early if required elements aren't present
  if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

  // same wrapper element whether fixed or portalled
  var menuWrapper = emotion_react_esm_jsx("div", _extends({
    ref: setMenuPortalElement
  }, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), 'menuPortal', {
    'menu-portal': true
  }), innerProps), children);
  return emotion_react_esm_jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /*#__PURE__*/Object(compat_module["createPortal"])(menuWrapper, appendTo) : menuWrapper);
};

// ==============================
// Root Container
// ==============================

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
    isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : undefined,
    pointerEvents: isDisabled ? 'none' : undefined,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var index_a86253bb_esm_SelectContainer = function SelectContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    isRtl = props.isRtl;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'container', {
    '--is-disabled': isDisabled,
    '--is-rtl': isRtl
  }), innerProps), children);
};

// ==============================
// Value Container
// ==============================

var index_a86253bb_esm_valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
  var spacing = _ref2.theme.spacing,
    isMulti = _ref2.isMulti,
    hasValue = _ref2.hasValue,
    controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
  return objectSpread2_objectSpread2({
    alignItems: 'center',
    display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
    flex: 1,
    flexWrap: 'wrap',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  }, unstyled ? {} : {
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
  });
};
var index_a86253bb_esm_ValueContainer = function ValueContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isMulti = props.isMulti,
    hasValue = props.hasValue;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
    'value-container': true,
    'value-container--is-multi': isMulti,
    'value-container--has-value': hasValue
  }), innerProps), children);
};

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var index_a86253bb_esm_IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
    indicators: true
  }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

// ==============================
// Dropdown & Clear Icons
// ==============================
var index_a86253bb_esm_ref2 =  true ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : undefined;
var index_a86253bb_esm_Svg = function Svg(_ref) {
  var size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded$2);
  return emotion_react_esm_jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: index_a86253bb_esm_ref2
  }, props));
};
var index_a86253bb_esm_CrossIcon = function CrossIcon(props) {
  return emotion_react_esm_jsx(index_a86253bb_esm_Svg, _extends({
    size: 20
  }, props), emotion_react_esm_jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var index_a86253bb_esm_DownChevron = function DownChevron(props) {
  return emotion_react_esm_jsx(index_a86253bb_esm_Svg, _extends({
    size: 20
  }, props), emotion_react_esm_jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};

// ==============================
// Dropdown & Clear Buttons
// ==============================

var index_a86253bb_esm_baseCSS = function baseCSS(_ref3, unstyled) {
  var isFocused = _ref3.isFocused,
    _ref3$theme = _ref3.theme,
    baseUnit = _ref3$theme.spacing.baseUnit,
    colors = _ref3$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'indicatorContainer',
    display: 'flex',
    transition: 'color 150ms'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2,
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  });
};
var dropdownIndicatorCSS = index_a86253bb_esm_baseCSS;
var index_a86253bb_esm_DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
    indicator: true,
    'dropdown-indicator': true
  }), innerProps), children || emotion_react_esm_jsx(index_a86253bb_esm_DownChevron, null));
};
var clearIndicatorCSS = index_a86253bb_esm_baseCSS;
var index_a86253bb_esm_ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
    indicator: true,
    'clear-indicator': true
  }), innerProps), children || emotion_react_esm_jsx(index_a86253bb_esm_CrossIcon, null));
};

// ==============================
// Separator
// ==============================

var index_a86253bb_esm_indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled,
    _ref4$theme = _ref4.theme,
    baseUnit = _ref4$theme.spacing.baseUnit,
    colors = _ref4$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2
  });
};
var index_a86253bb_esm_IndicatorSeparator = function IndicatorSeparator(props) {
  var innerProps = props.innerProps;
  return emotion_react_esm_jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
    'indicator-separator': true
  })));
};

// ==============================
// Loading
// ==============================

var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var index_a86253bb_esm_loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
  var isFocused = _ref5.isFocused,
    size = _ref5.size,
    _ref5$theme = _ref5.theme,
    colors = _ref5$theme.colors,
    baseUnit = _ref5$theme.spacing.baseUnit;
  return objectSpread2_objectSpread2({
    label: 'loadingIndicator',
    display: 'flex',
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2
  });
};
var index_a86253bb_esm_LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
    offset = _ref6.offset;
  return emotion_react_esm_jsx("span", {
    css: /*#__PURE__*/emotion_react_esm_css({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : undefined,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  true ? "" : undefined,  true ? "" : undefined)
  });
};
var index_a86253bb_esm_LoadingIndicator = function LoadingIndicator(props) {
  var innerProps = props.innerProps,
    isRtl = props.isRtl;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'loadingIndicator', {
    indicator: true,
    'loading-indicator': true
  }), innerProps), emotion_react_esm_jsx(index_a86253bb_esm_LoadingDot, {
    delay: 0,
    offset: isRtl
  }), emotion_react_esm_jsx(index_a86253bb_esm_LoadingDot, {
    delay: 160,
    offset: true
  }), emotion_react_esm_jsx(index_a86253bb_esm_LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
index_a86253bb_esm_LoadingIndicator.defaultProps = {
  size: 4
};
var css$1 = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    _ref$theme = _ref.theme,
    colors = _ref$theme.colors,
    borderRadius = _ref$theme.borderRadius,
    spacing = _ref$theme.spacing;
  return objectSpread2_objectSpread2({
    label: 'control',
    alignItems: 'center',
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms'
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  });
};
var index_a86253bb_esm_Control = function Control(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    innerRef = props.innerRef,
    innerProps = props.innerProps,
    menuIsOpen = props.menuIsOpen;
  return emotion_react_esm_jsx("div", _extends({
    ref: innerRef
  }, getStyleProps(props, 'control', {
    control: true,
    'control--is-disabled': isDisabled,
    'control--is-focused': isFocused,
    'control--menu-is-open': menuIsOpen
  }), innerProps), children);
};
var _excluded$1 = ["data"];
var groupCSS = function groupCSS(_ref, unstyled) {
  var spacing = _ref.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};
var index_a86253bb_esm_Group = function Group(props) {
  var children = props.children,
    cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    Heading = props.Heading,
    headingProps = props.headingProps,
    innerProps = props.innerProps,
    label = props.label,
    theme = props.theme,
    selectProps = props.selectProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'group', {
    group: true
  }), innerProps), emotion_react_esm_jsx(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    getClassNames: getClassNames,
    cx: cx
  }), label), emotion_react_esm_jsx("div", null, children));
};
var index_a86253bb_esm_groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    colors = _ref2$theme.colors,
    spacing = _ref2$theme.spacing;
  return objectSpread2_objectSpread2({
    label: 'group',
    cursor: 'default',
    display: 'block'
  }, unstyled ? {} : {
    color: colors.neutral40,
    fontSize: '75%',
    fontWeight: 500,
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  });
};
var index_a86253bb_esm_GroupHeading = function GroupHeading(props) {
  var _cleanCommonProps = index_a86253bb_esm_cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
    'group-heading': true
  }), innerProps));
};
var index_a86253bb_esm_excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var index_a86253bb_esm_inputCSS = function inputCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    value = _ref.value,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({
    visibility: isDisabled ? 'hidden' : 'visible',
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? 'translateZ(0)' : ''
  }, containerStyle), unstyled ? {} : {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    color: colors.neutral80
  });
};
var spacingStyle = {
  gridArea: '1 / 2',
  font: 'inherit',
  minWidth: '2px',
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: '1 1 auto',
  display: 'inline-grid',
  gridArea: '1 / 1 / 2 / 3',
  gridTemplateColumns: '0 min-content',
  '&:after': objectSpread2_objectSpread2({
    content: 'attr(data-value) " "',
    visibility: 'hidden',
    whiteSpace: 'pre'
  }, spacingStyle)
};
var index_a86253bb_esm_inputStyle = function inputStyle(isHidden) {
  return objectSpread2_objectSpread2({
    label: 'input',
    color: 'inherit',
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: '100%'
  }, spacingStyle);
};
var index_a86253bb_esm_Input = function Input(props) {
  var cx = props.cx,
    value = props.value;
  var _cleanCommonProps = index_a86253bb_esm_cleanCommonProps(props),
    innerRef = _cleanCommonProps.innerRef,
    isDisabled = _cleanCommonProps.isDisabled,
    isHidden = _cleanCommonProps.isHidden,
    inputClassName = _cleanCommonProps.inputClassName,
    innerProps = _objectWithoutProperties(_cleanCommonProps, index_a86253bb_esm_excluded);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'input', {
    'input-container': true
  }), {
    "data-value": value || ''
  }), emotion_react_esm_jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: index_a86253bb_esm_inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var index_a86253bb_esm_multiValueCSS = function multiValueCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    borderRadius = _ref$theme.borderRadius,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'multiValue',
    display: 'flex',
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    margin: spacing.baseUnit / 2
  });
};
var index_a86253bb_esm_multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    colors = _ref2$theme.colors,
    cropWithEllipsis = _ref2.cropWithEllipsis;
  return objectSpread2_objectSpread2({
    overflow: 'hidden',
    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    padding: 3,
    paddingLeft: 6
  });
};
var index_a86253bb_esm_multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme,
    spacing = _ref3$theme.spacing,
    borderRadius = _ref3$theme.borderRadius,
    colors = _ref3$theme.colors,
    isFocused = _ref3.isFocused;
  return objectSpread2_objectSpread2({
    alignItems: 'center',
    display: 'flex'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused ? colors.dangerLight : undefined,
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  });
};
var index_a86253bb_esm_MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
    innerProps = _ref4.innerProps;
  return emotion_react_esm_jsx("div", innerProps, children);
};
var index_a86253bb_esm_MultiValueContainer = index_a86253bb_esm_MultiValueGeneric;
var index_a86253bb_esm_MultiValueLabel = index_a86253bb_esm_MultiValueGeneric;
function index_a86253bb_esm_MultiValueRemove(_ref5) {
  var children = _ref5.children,
    innerProps = _ref5.innerProps;
  return emotion_react_esm_jsx("div", _extends({
    role: "button"
  }, innerProps), children || emotion_react_esm_jsx(index_a86253bb_esm_CrossIcon, {
    size: 14
  }));
}
var index_a86253bb_esm_MultiValue = function MultiValue(props) {
  var children = props.children,
    components = props.components,
    data = props.data,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    removeProps = props.removeProps,
    selectProps = props.selectProps;
  var Container = components.Container,
    Label = components.Label,
    Remove = components.Remove;
  return emotion_react_esm_jsx(Container, {
    data: data,
    innerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValue', {
      'multi-value': true,
      'multi-value--is-disabled': isDisabled
    })), innerProps),
    selectProps: selectProps
  }, emotion_react_esm_jsx(Label, {
    data: data,
    innerProps: objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
      'multi-value__label': true
    })),
    selectProps: selectProps
  }, children), emotion_react_esm_jsx(Remove, {
    data: data,
    innerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
      'multi-value__remove': true
    })), {}, {
      'aria-label': "Remove ".concat(children || 'option')
    }, removeProps),
    selectProps: selectProps
  }));
};
var index_a86253bb_esm_optionCSS = function optionCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    isSelected = _ref.isSelected,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'option',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
    }
  });
};
var index_a86253bb_esm_Option = function Option(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    isSelected = props.isSelected,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'option', {
    option: true,
    'option--is-disabled': isDisabled,
    'option--is-focused': isFocused,
    'option--is-selected': isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var index_a86253bb_esm_placeholderCSS = function placeholderCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'placeholder',
    gridArea: '1 / 1 / 2 / 3'
  }, unstyled ? {} : {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var index_a86253bb_esm_Placeholder = function Placeholder(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
    placeholder: true
  }), innerProps), children);
};
var index_a86253bb_esm_css = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'singleValue',
    gridArea: '1 / 1 / 2 / 3',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var index_a86253bb_esm_SingleValue = function SingleValue(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
    'single-value': true,
    'single-value--is-disabled': isDisabled
  }), innerProps), children);
};
var index_a86253bb_esm_components = {
  ClearIndicator: index_a86253bb_esm_ClearIndicator,
  Control: index_a86253bb_esm_Control,
  DropdownIndicator: index_a86253bb_esm_DropdownIndicator,
  DownChevron: index_a86253bb_esm_DownChevron,
  CrossIcon: index_a86253bb_esm_CrossIcon,
  Group: index_a86253bb_esm_Group,
  GroupHeading: index_a86253bb_esm_GroupHeading,
  IndicatorsContainer: index_a86253bb_esm_IndicatorsContainer,
  IndicatorSeparator: index_a86253bb_esm_IndicatorSeparator,
  Input: index_a86253bb_esm_Input,
  LoadingIndicator: index_a86253bb_esm_LoadingIndicator,
  Menu: index_a86253bb_esm_Menu,
  MenuList: index_a86253bb_esm_MenuList,
  MenuPortal: index_a86253bb_esm_MenuPortal,
  LoadingMessage: index_a86253bb_esm_LoadingMessage,
  NoOptionsMessage: index_a86253bb_esm_NoOptionsMessage,
  MultiValue: index_a86253bb_esm_MultiValue,
  MultiValueContainer: index_a86253bb_esm_MultiValueContainer,
  MultiValueLabel: index_a86253bb_esm_MultiValueLabel,
  MultiValueRemove: index_a86253bb_esm_MultiValueRemove,
  Option: index_a86253bb_esm_Option,
  Placeholder: index_a86253bb_esm_Placeholder,
  SelectContainer: index_a86253bb_esm_SelectContainer,
  SingleValue: index_a86253bb_esm_SingleValue,
  ValueContainer: index_a86253bb_esm_ValueContainer
};
var index_a86253bb_esm_defaultComponents = function defaultComponents(props) {
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, index_a86253bb_esm_components), props.components);
};

// CONCATENATED MODULE: ../node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult: lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// CONCATENATED MODULE: ../node_modules/react-select/dist/Select-40119e12.esm.js













function _EMOTION_STRINGIFIED_CSS_ERROR__$2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

// Assistive text to describe visual elements. Hidden for sighted users.
var Select_40119e12_esm_ref =  true ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : undefined;
var Select_40119e12_esm_A11yText = function A11yText(props) {
  return emotion_react_esm_jsx("span", _extends({
    css: Select_40119e12_esm_ref
  }, props));
};
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
      isMulti = props.isMulti,
      isDisabled = props.isDisabled,
      tabSelectsValue = props.tabSelectsValue,
      context = props.context;
    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
      case 'input':
        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');
      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      labels = props.labels,
      isDisabled = props.isDisabled;
    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");
      case 'clear':
        return 'All selected options have been cleared.';
      case 'initial-input-focus':
        return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
      focused = props.focused,
      options = props.options,
      _props$label2 = props.label,
      label = _props$label2 === void 0 ? '' : _props$label2,
      selectValue = props.selectValue,
      isDisabled = props.isDisabled,
      isSelected = props.isSelected;
    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };
    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === 'menu') {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }
    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
      resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};
var Select_40119e12_esm_LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
    focusedOption = props.focusedOption,
    focusedValue = props.focusedValue,
    focusableOptions = props.focusableOptions,
    isFocused = props.isFocused,
    selectValue = props.selectValue,
    selectProps = props.selectProps,
    id = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
    getOptionLabel = selectProps.getOptionLabel,
    inputValue = selectProps.inputValue,
    isMulti = selectProps.isMulti,
    isOptionDisabled = selectProps.isOptionDisabled,
    isSearchable = selectProps.isSearchable,
    menuIsOpen = selectProps.menuIsOpen,
    options = selectProps.options,
    screenReaderStatus = selectProps.screenReaderStatus,
    tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live'];

  // Update aria live message configuration when prop changes
  var messages = Object(compat_module["useMemo"])(function () {
    return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);

  // Update aria live selected option when prop changes
  var ariaSelected = Object(compat_module["useMemo"])(function () {
    var message = '';
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
        selectedOptions = ariaSelection.options,
        removedValue = ariaSelection.removedValue,
        removedValues = ariaSelection.removedValues,
        value = ariaSelection.value;
      // select-option when !isMulti does not return option so we assume selected option is value
      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      };

      // If there is just one item from the action then get its label
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel(selected) : '';

      // If there are multiple items from the action then return an array of labels
      var multiSelected = selectedOptions || removedValues || undefined;
      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
      var onChangeProps = objectSpread2_objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled(selected, selectValue),
        label: label,
        labels: labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
  var ariaFocused = Object(compat_module["useMemo"])(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused, selectValue),
        isSelected: isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue]);
  var ariaResults = Object(compat_module["useMemo"])(function () {
    var resultsMsg = '';
    if (menuIsOpen && options.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
  var ariaGuidance = Object(compat_module["useMemo"])(function () {
    var guidanceMsg = '';
    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = emotion_react_esm_jsx(compat_module["Fragment"], null, emotion_react_esm_jsx("span", {
    id: "aria-selection"
  }, ariaSelected), emotion_react_esm_jsx("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
  return emotion_react_esm_jsx(compat_module["Fragment"], null, emotion_react_esm_jsx(Select_40119e12_esm_A11yText, {
    id: id
  }, isInitialFocus && ScreenReaderText), emotion_react_esm_jsx(Select_40119e12_esm_A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};
for (var Select_40119e12_esm_i = 0; Select_40119e12_esm_i < diacritics.length; Select_40119e12_esm_i++) {
  var diacritic = diacritics[Select_40119e12_esm_i];
  for (var Select_40119e12_esm_j = 0; Select_40119e12_esm_j < diacritic.letters.length; Select_40119e12_esm_j++) {
    diacriticToBase[diacritic.letters[Select_40119e12_esm_j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var Select_40119e12_esm_createFilter = function createFilter(config) {
  return function (option, rawInput) {
    // eslint-disable-next-line no-underscore-dangle
    if (option.data.__isNew__) return true;
    var _ignoreCase$ignoreAcc = objectSpread2_objectSpread2({
        ignoreCase: true,
        ignoreAccents: true,
        stringify: defaultStringify,
        trim: true,
        matchFrom: 'any'
      }, config),
      ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
      ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
      stringify = _ignoreCase$ignoreAcc.stringify,
      trim = _ignoreCase$ignoreAcc.trim,
      matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var Select_40119e12_esm_excluded = ["innerRef"];
function DummyInput(_ref) {
  var innerRef = _ref.innerRef,
    props = _objectWithoutProperties(_ref, Select_40119e12_esm_excluded);
  // Remove animation props not meant for HTML elements
  var filteredProps = index_a86253bb_esm_removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
  return emotion_react_esm_jsx("input", _extends({
    ref: innerRef
  }, filteredProps, {
    css: /*#__PURE__*/emotion_react_esm_css({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: 'transparent',
      fontSize: 'inherit',
      gridArea: '1 / 1 / 2 / 3',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(.01)'
    },  true ? "" : undefined,  true ? "" : undefined)
  }));
}
var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var isBottom = Object(compat_module["useRef"])(false);
  var isTop = Object(compat_module["useRef"])(false);
  var touchStart = Object(compat_module["useRef"])(0);
  var scrollTarget = Object(compat_module["useRef"])(null);
  var handleEventDelta = Object(compat_module["useCallback"])(function (event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
      scrollTop = _scrollTarget$current.scrollTop,
      scrollHeight = _scrollTarget$current.scrollHeight,
      clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;

    // reset bottom/top flags
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }

    // bottom limit
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;

      // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }

    // cancel scroll
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = Object(compat_module["useCallback"])(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = Object(compat_module["useCallback"])(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = Object(compat_module["useCallback"])(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = Object(compat_module["useCallback"])(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener('wheel', onWheel, notPassive);
    el.addEventListener('touchstart', onTouchStart, notPassive);
    el.addEventListener('touchmove', onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = Object(compat_module["useCallback"])(function (el) {
    // bail early if no element is available to detach from
    if (!el) return;
    el.removeEventListener('wheel', onWheel, false);
    el.removeEventListener('touchstart', onTouchStart, false);
    el.removeEventListener('touchmove', onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  Object(compat_module["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};
function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
    _ref$accountForScroll = _ref.accountForScrollbars,
    accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = Object(compat_module["useRef"])({});
  var scrollTarget = Object(compat_module["useRef"])(null);
  var addScrollLock = Object(compat_module["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }

    // apply the lock styles and padding if this is the first scroll lock
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }

    // account for touch devices
    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions);

      // Allow scroll on provided target
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }

    // increment active scroll locks
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = Object(compat_module["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    // safely decrement active scroll locks
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

    // reapply original body styles, if any
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }

    // remove touch listeners
    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  Object(compat_module["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};
var _ref2$1 =  true ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : undefined;
function ScrollManager(_ref) {
  var children = _ref.children,
    lockEnabled = _ref.lockEnabled,
    _ref$captureEnabled = _ref.captureEnabled,
    captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return emotion_react_esm_jsx(compat_module["Fragment"], null, lockEnabled && emotion_react_esm_jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
function Select_40119e12_esm_EMOTION_STRINGIFIED_CSS_ERROR_() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Select_40119e12_esm_ref2 =  true ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : undefined;
var Select_40119e12_esm_RequiredInput = function RequiredInput(_ref) {
  var name = _ref.name,
    onFocus = _ref.onFocus;
  return emotion_react_esm_jsx("input", {
    required: true,
    name: name,
    tabIndex: -1,
    onFocus: onFocus,
    css: Select_40119e12_esm_ref2
    // Prevent `Switching from uncontrolled to controlled` error
    ,

    value: "",
    onChange: function onChange() {}
  });
};
var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var Select_40119e12_esm_isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: index_a86253bb_esm_groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: index_a86253bb_esm_indicatorSeparatorCSS,
  input: index_a86253bb_esm_inputCSS,
  loadingIndicator: index_a86253bb_esm_loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: index_a86253bb_esm_menuCSS,
  menuList: index_a86253bb_esm_menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: index_a86253bb_esm_multiValueCSS,
  multiValueLabel: index_a86253bb_esm_multiValueLabelCSS,
  multiValueRemove: index_a86253bb_esm_multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: index_a86253bb_esm_optionCSS,
  placeholder: index_a86253bb_esm_placeholderCSS,
  singleValue: index_a86253bb_esm_css,
  valueContainer: index_a86253bb_esm_valueContainerCSS
};
// Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // initialize with source styles
  var styles = objectSpread2_objectSpread2({}, source);

  // massage in target styles
  Object.keys(target).forEach(function (keyAsString) {
    var key = keyAsString;
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}
var Select_40119e12_esm_colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var Select_40119e12_esm_borderRadius = 4;
// Used to calculate consistent margin/padding on elements
var Select_40119e12_esm_baseUnit = 4;
// The minimum height of the control
var Select_40119e12_esm_controlHeight = 38;
// The amount of space between the control and menu */
var menuGutter = Select_40119e12_esm_baseUnit * 2;
var Select_40119e12_esm_spacing = {
  baseUnit: Select_40119e12_esm_baseUnit,
  controlHeight: Select_40119e12_esm_controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: Select_40119e12_esm_borderRadius,
  colors: Select_40119e12_esm_colors,
  spacing: Select_40119e12_esm_spacing
};
var defaultProps = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: Select_40119e12_esm_createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: Select_40119e12_esm_isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = Select_40119e12_esm_getOptionLabel(props, option);
  var value = getOptionValue(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if ('options' in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
    inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
    isSelected = categorizedOption.isSelected,
    label = categorizedOption.label,
    value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
    lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var Select_40119e12_esm_getOptionLabel = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;
  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue(props, option);
  return selectValue.some(function (i) {
    return getOptionValue(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
    isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select_40119e12_esm_Select = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);
  var _super = _createSuper(Select);
  // Misc. Instance Properties
  // ------------------------------

  // TODO

  // Refs
  // ------------------------------

  // Lifecycle
  // ------------------------------

  function Select(_props) {
    var _this;
    _classCallCheck(this, Select);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;
    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange(newValue, actionMeta);
    };
    _this.setValue = function (newValue, action, option) {
      var _this$props2 = _this.props,
        closeMenuOnSelect = _this$props2.closeMenuOnSelect,
        isMulti = _this$props2.isMulti,
        inputValue = _this$props2.inputValue;
      _this.onInputChange('', {
        action: 'set-value',
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      // when the select value should change, we should reset focusedValue
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };
    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
        blurInputOnSelect = _this$props3.blurInputOnSelect,
        isMulti = _this$props3.isMulti,
        name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        })), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), 'select-option', newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), 'select-option');
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: 'select-option',
          option: newValue,
          name: name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: 'clear',
        removedValues: selectValue
      });
    };
    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };
    _this.getValue = function () {
      return _this.state.selectValue;
    };
    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function (data) {
      return Select_40119e12_esm_getOptionLabel(_this.props, data);
    };
    _this.getOptionValue = function (data) {
      return getOptionValue(_this.props, data);
    };
    _this.getStyles = function (key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function (key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function () {
      return index_a86253bb_esm_defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: objectSpread2_objectSpread2({
          value: value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function (event) {
      // Event captured by dropdown indicator
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
        isMulti = _this$props4.isMulti,
        menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };
    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }

      // reset move vars
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function (event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: 'input-change',
        prevInputValue: prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function (event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange('', {
        action: 'input-blur',
        prevInputValue: prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      _this.setState({
        focusedOption: focusedOption
      });
    };
    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
        isMulti = _this$props5.isMulti,
        backspaceRemovesValue = _this$props5.backspaceRemovesValue,
        escapeClearsValue = _this$props5.escapeClearsValue,
        inputValue = _this$props5.inputValue,
        isClearable = _this$props5.isClearable,
        isDisabled = _this$props5.isDisabled,
        menuIsOpen = _this$props5.menuIsOpen,
        onKeyDown = _this$props5.onKeyDown,
        tabSelectsValue = _this$props5.tabSelectsValue,
        openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
        focusedOption = _this$state.focusedOption,
        focusedValue = _this$state.focusedValue,
        selectValue = _this$state.selectValue;
      if (isDisabled) return;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }

      // Block option hover events when the user has just pressed a key
      _this.blockOptionHover = true;
      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;
          _this.focusValue('previous');
          break;
        case 'ArrowRight':
          if (!isMulti || inputValue) return;
          _this.focusValue('next');
          break;
        case 'Delete':
        case 'Backspace':
          if (inputValue) return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case 'Tab':
          if (_this.isComposing) return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
          // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange('', {
              action: 'menu-close',
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case ' ':
          // space
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu('first');
            break;
          }
          if (!focusedOption) return;
          _this.selectOption(focusedOption);
          break;
        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }
          break;
        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }
          break;
        case 'PageUp':
          if (!menuIsOpen) return;
          _this.focusOption('pageup');
          break;
        case 'PageDown':
          if (!menuIsOpen) return;
          _this.focusOption('pagedown');
          break;
        case 'Home':
          if (!menuIsOpen) return;
          _this.focusOption('first');
          break;
        case 'End':
          if (!menuIsOpen) return;
          _this.focusOption('last');
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = index_a86253bb_esm_cleanValue(_props.value);

    // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusedOption = focusableOptions[optionIndex];
    }
    return _this;
  }
  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }

      // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
        isDisabled = _this$props6.isDisabled,
        menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
      // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled ||
      // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programmatically disabled while focused
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: true
        });
      }

      // scroll the focused option into view if necessary
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }

    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close',
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }

    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }

    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state,
        selectValue = _this$state2.selectValue,
        isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      // only scroll if the menu isn't already open
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        focusedValue = _this$state3.focusedValue;

      // Only multiselects support value focusing
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;
      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'
      var focusedIndex = options.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value:
    // ==============================
    // Getters
    // ==============================

    function getTheme() {
      // Use the default theme if there are no customisations.
      if (!this.props.theme) {
        return defaultTheme;
      }
      // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.
      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      }
      // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.
      return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
        cx = this.cx,
        getStyles = this.getStyles,
        getClassNames = this.getClassNames,
        getValue = this.getValue,
        selectOption = this.selectOption,
        setValue = this.setValue,
        props = this.props;
      var isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getClassNames: getClassNames,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
        isClearable = _this$props7.isClearable,
        isMulti = _this$props7.isMulti;

      // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable
      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    }

    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value:
    // ==============================
    // Composition Handlers
    // ==============================

    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value:
    // ==============================
    // Touch Handlers
    // ==============================

    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value:
    // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
        isDisabled = _this$props8.isDisabled,
        isSearchable = _this$props8.isSearchable,
        inputId = _this$props8.inputId,
        inputValue = _this$props8.inputValue,
        tabIndex = _this$props8.tabIndex,
        form = _this$props8.form,
        menuIsOpen = _this$props8.menuIsOpen,
        required = _this$props8.required;
      var _this$getComponents = this.getComponents(),
        Input = _this$getComponents.Input;
      var _this$state4 = this.state,
        inputIsHidden = _this$state4.inputIsHidden,
        ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input');

      // aria attributes makes the JSX "noisy", separated for clarity
      var ariaAttributes = objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({
        'aria-autocomplete': 'list',
        'aria-expanded': menuIsOpen,
        'aria-haspopup': true,
        'aria-errormessage': this.props['aria-errormessage'],
        'aria-invalid': this.props['aria-invalid'],
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-required': required,
        role: 'combobox'
      }, menuIsOpen && {
        'aria-controls': this.getElementId('listbox'),
        'aria-owns': this.getElementId('listbox')
      }), !isSearchable && {
        'aria-readonly': true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
        'aria-describedby': this.getElementId('live-region')
      } : {
        'aria-describedby': this.getElementId('placeholder')
      });
      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/compat_module["createElement"](DummyInput, _extends({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex: tabIndex,
          inputMode: "none",
          form: form,
          value: ""
        }, ariaAttributes));
      }
      return /*#__PURE__*/compat_module["createElement"](Input, _extends({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(),
        MultiValue = _this$getComponents2.MultiValue,
        MultiValueContainer = _this$getComponents2.MultiValueContainer,
        MultiValueLabel = _this$getComponents2.MultiValueLabel,
        MultiValueRemove = _this$getComponents2.MultiValueRemove,
        SingleValue = _this$getComponents2.SingleValue,
        Placeholder = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props,
        controlShouldRenderValue = _this$props9.controlShouldRenderValue,
        isDisabled = _this$props9.isDisabled,
        isMulti = _this$props9.isMulti,
        inputValue = _this$props9.inputValue,
        placeholder = _this$props9.placeholder;
      var _this$state5 = this.state,
        selectValue = _this$state5.selectValue,
        focusedValue = _this$state5.focusedValue,
        isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/compat_module["createElement"](Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused,
          innerProps: {
            id: this.getElementId('placeholder')
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /*#__PURE__*/compat_module["createElement"](MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: key,
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /*#__PURE__*/compat_module["createElement"](SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
        ClearIndicator = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props,
        isDisabled = _this$props10.isDisabled,
        isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
        LoadingIndicator = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props,
        isDisabled = _this$props11.isDisabled,
        isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
        DropdownIndicator = _this$getComponents5.DropdownIndicator,
        IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

      // separator doesn't make sense without the dropdown indicator
      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/compat_module["createElement"](IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
        DropdownIndicator = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(),
        Group = _this$getComponents7.Group,
        GroupHeading = _this$getComponents7.GroupHeading,
        Menu = _this$getComponents7.Menu,
        MenuList = _this$getComponents7.MenuList,
        MenuPortal = _this$getComponents7.MenuPortal,
        LoadingMessage = _this$getComponents7.LoadingMessage,
        NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
        Option = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
        captureMenuScroll = _this$props12.captureMenuScroll,
        inputValue = _this$props12.inputValue,
        isLoading = _this$props12.isLoading,
        loadingMessage = _this$props12.loadingMessage,
        minMenuHeight = _this$props12.minMenuHeight,
        maxMenuHeight = _this$props12.maxMenuHeight,
        menuIsOpen = _this$props12.menuIsOpen,
        menuPlacement = _this$props12.menuPlacement,
        menuPosition = _this$props12.menuPosition,
        menuPortalTarget = _this$props12.menuPortalTarget,
        menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
        noOptionsMessage = _this$props12.noOptionsMessage,
        onMenuScrollToTop = _this$props12.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;

      // TODO: Internal Option Type here
      var render = function render(props, id) {
        var type = props.type,
          data = props.data,
          isDisabled = props.isDisabled,
          isSelected = props.isSelected,
          label = props.label,
          value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/compat_module["createElement"](Option, _extends({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var _data = item.data,
              options = item.options,
              groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/compat_module["createElement"](Group, _extends({}, commonProps, {
              key: groupId,
              data: _data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/compat_module["createElement"](LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });
        if (_message === null) return null;
        menuUI = /*#__PURE__*/compat_module["createElement"](NoOptionsMessage, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/compat_module["createElement"](index_a86253bb_esm_MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
          _ref4$placerProps = _ref4.placerProps,
          placement = _ref4$placerProps.placement,
          maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/compat_module["createElement"](Menu, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId('listbox')
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/compat_module["createElement"](ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/compat_module["createElement"](MenuList, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      });

      // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`
      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/compat_module["createElement"](MenuPortal, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props,
        delimiter = _this$props13.delimiter,
        isDisabled = _this$props13.isDisabled,
        isMulti = _this$props13.isMulti,
        name = _this$props13.name,
        required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;
      if (required && !this.hasValue()) {
        return /*#__PURE__*/compat_module["createElement"](Select_40119e12_esm_RequiredInput, {
          name: name,
          onFocus: this.onValueInputFocus
        });
      }
      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/compat_module["createElement"]("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/compat_module["createElement"]("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/compat_module["createElement"]("input", {
            name: name,
            type: "hidden",
            value: ""
          });
          return /*#__PURE__*/compat_module["createElement"]("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return /*#__PURE__*/compat_module["createElement"]("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state,
        ariaSelection = _this$state6.ariaSelection,
        focusedOption = _this$state6.focusedOption,
        focusedValue = _this$state6.focusedValue,
        isFocused = _this$state6.isFocused,
        selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/compat_module["createElement"](Select_40119e12_esm_LiveRegion, _extends({}, commonProps, {
        id: this.getElementId('live-region'),
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
        Control = _this$getComponents8.Control,
        IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
        SelectContainer = _this$getComponents8.SelectContainer,
        ValueContainer = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props,
        className = _this$props14.className,
        id = _this$props14.id,
        isDisabled = _this$props14.isDisabled,
        menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/compat_module["createElement"](SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/compat_module["createElement"](Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/compat_module["createElement"](ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/compat_module["createElement"](IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
        clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
        inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
        ariaSelection = state.ariaSelection,
        isFocused = state.isFocused,
        prevWasFocused = state.prevWasFocused;
      var options = props.options,
        value = props.value,
        menuIsOpen = props.menuIsOpen,
        inputValue = props.inputValue,
        isMulti = props.isMulti;
      var selectValue = index_a86253bb_esm_cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      // some updates should toggle the state of the input visibility
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        // If `value` or `defaultValue` props are not empty then announce them
        // when the Select is initially focused
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: 'initial-input-focus'
        };
        hasKeptFocus = !prevWasFocused;
      }

      // If the 'initial-input-focus' action has been set already
      // then reset the ariaSelection to null
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
        newAriaSelection = null;
      }
      return objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select;
}(compat_module["Component"]);
Select_40119e12_esm_Select.defaultProps = defaultProps;

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("yO+l");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("nxTg");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("RiSW");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__("Pe5x");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("5WRv");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("e+GP");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("hc4W");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");

// CONCATENATED MODULE: ../node_modules/react-select/dist/react-select.esm.js

























var StateManagedSelect = /*#__PURE__*/Object(compat_module["forwardRef"])(function (props, ref) {
  var baseSelectProps = useStateManager(props);
  return /*#__PURE__*/compat_module["createElement"](Select_40119e12_esm_Select, _extends({
    ref: ref
  }, baseSelectProps));
});
var react_select_esm_NonceProvider = function NonceProvider(_ref) {
  var nonce = _ref.nonce,
    children = _ref.children,
    cacheKey = _ref.cacheKey;
  var emotionCache = Object(compat_module["useMemo"])(function () {
    return emotion_cache_esm({
      key: cacheKey,
      nonce: nonce
    });
  }, [cacheKey, nonce]);
  return /*#__PURE__*/compat_module["createElement"](CacheProvider, {
    value: emotionCache
  }, children);
};
/* harmony default export */ var react_select_esm = __webpack_exports__["a"] = (StateManagedSelect);


/***/ }),

/***/ "VorK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "e302bb27fc53b328f274e537cd7c74e5.mp4");

/***/ }),

/***/ "Vz2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "007383c9222d1d10f99e78cbca777fa2.webp");

/***/ }),

/***/ "WI9V":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "WKmn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "459762446aeb4d92a5ad34769916e301.svg");

/***/ }),

/***/ "WyQQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"layout":"layout__IYgBR","wrapper":"wrapper__myN2s"});

/***/ }),

/***/ "XruS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"bannerContent":"bannerContent__R1RK+","bannerContainer":"bannerContainer__Y14FG","bannerContentContainer":"bannerContentContainer__Pb9Qi","bannerContentLeft":"bannerContentLeft__jZb3o","bannerContentRight":"bannerContentRight__ec8GF","bannerVersionContent":"bannerVersionContent__5xPgq","bannerContentversion":"bannerContentversion__SXMMf","serviceContent":"serviceContent__-zR3K","serviceContentContainer":"serviceContentContainer__Nqz7C","serviceContentLeft":"serviceContentLeft__sxMxO","serviceContentRight":"serviceContentRight__SKolg","serviceContentBox":"serviceContentBox__lpEgf","serviceContentBoxItem":"serviceContentBoxItem__TVnOz","formContent":"formContent__xYukN","formContainer":"formContainer__tWtHm","formBg":"formBg__vpAPv","formBgversion":"formBgversion__a4E7u","formContents":"formContents__hYofZ","formText":"formText__W4YBy","formMainContent":"formMainContent__3styu","formFieldGrid":"formFieldGrid__l+43J","formFieldTel":"formFieldTel__uSrsn","react-select__indicator-separator":"react-select__indicator-separator__7ZtCB","react-select__indicator":"react-select__indicator__MbE9N","react-select__dropdown-indicator":"react-select__dropdown-indicator__d9-eS","reviewSliderMainContent":"reviewSliderMainContent__oosR-","reviewSlider":"reviewSlider__e1dRT","reviewSliderContainer":"reviewSliderContainer__C2sbU","reviewSliderContent":"reviewSliderContent__aaOXO","reviewSlide":"reviewSlide__bXf5R","reviewSlideHead":"reviewSlideHead__BrUwb","reviewProfile":"reviewProfile__hb9p5","reviewProfileTop":"reviewProfileTop__BDhUr","reviewProfileDesc":"reviewProfileDesc__VT9DX","reviewStars":"reviewStars__mS1F3","reviewHead":"reviewHead__ZY02I","reviewSliderBtn":"reviewSliderBtn__RgD2N","formField":"formField__rhfee","errorMsg":"errorMsg__87rSn","cd-button":"cd-button__HKJk7","cdButton":"cdButton__KjBpM"});

/***/ }),

/***/ "Y3FI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exec", function() { return exec; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var EMPTY$1 = {};
function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var Link = function Link(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', assign({
    onClick: handleLinkClick
  }, props));
};
var Route = function Route(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(props.component, props);
};
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "YPJM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "c574758bcd8d2de374cfe7a4bda92fcd.webp");

/***/ }),

/***/ "Zhxd":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("+Sw5");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "a+yp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "75a6c6b506599ac54c0bcf3022a07e4f.webp");

/***/ }),

/***/ "aUid":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _components_canada_district_home_cdBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("O0KT");
/* harmony import */ var _components_canada_district_home_cdForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sO9k");
/* harmony import */ var _components_canada_district_home_cdReview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4B82");
/* harmony import */ var _components_canada_district_home_cdService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bX5n");
/* harmony import */ var _components_canada_district_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("drx9");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7APR");






var CDHome = function CDHome() {
  return h(_components_canada_district_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdHome
  }, h(_components_canada_district_home_cdBanner__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null), h(_components_canada_district_home_cdService__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), h(_components_canada_district_home_cdForm__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), h(_components_canada_district_home_cdReview__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)));
};
/* harmony default export */ __webpack_exports__["a"] = (CDHome);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "aqZz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "21c5fabbada394b262606237a2264383.webp");

/***/ }),

/***/ "b2z7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"thankyou":"thankyou__vyAt3","container":"container__ZCZfC"});

/***/ }),

/***/ "bI+Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "fcb1c95e0d38c8d074abb9e0e8801bf6.webp");

/***/ }),

/***/ "bLYV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bPE1");
/* harmony import */ var _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8yPs");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TR5t");



var ErrorMessage = function ErrorMessage(_ref) {
  var message = _ref.message,
    closeAction = _ref.closeAction;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoast
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoastgrid
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoasticon
  }, h("img", {
    src: _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: ""
  })), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoastcontent
  }, h("p", null, message))), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoastclose,
    onClick: closeAction,
    role: "presentation"
  }, h("img", {
    src: _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    alt: ""
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (ErrorMessage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "bPE1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "48af88d001e288aefdd7cff20de1acc5.svg");

/***/ }),

/***/ "bX5n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XruS");
/* harmony import */ var _assets_service_support_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7hzt");
/* harmony import */ var _assets_service_target_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WKmn");
/* harmony import */ var _assets_service_preparetion_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8vyQ");
/* harmony import */ var _assets_service_comunication_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Snkw");





var CDService = function CDService() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContent,
    id: "What"
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContentContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContentLeft
  }, h("h2", null, "Canada District - your ", h("span", null, "trusted"), " immigration partner!"), h("p", null, "Canada District offers personalized guidance and support throughout the immigration process, expert advice on the best program for your unique situation, and assistance with completing your paperwork to maximize your chances of success.")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContentRight
  }, h("p", null, "Our services include:"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContentBox
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContentBoxItem
  }, h("img", {
    src: _assets_service_support_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "support"
  }), h("h4", null, "Free initial consultation")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContentBoxItem
  }, h("img", {
    src: _assets_service_target_svg__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    alt: "target"
  }), h("h4", null, "Immigration program selection")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContentBoxItem
  }, h("img", {
    src: _assets_service_preparetion_svg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    alt: "preparetion"
  }), h("h4", null, "Preparation")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].serviceContentBoxItem
  }, h("img", {
    src: _assets_service_comunication_svg__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    alt: "comunication"
  }), h("h4", null, "Communication with the Canadian government"))))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDService);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "cVwm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "3806ebdfe66f0c42063be558d5de296a.webp");

/***/ }),

/***/ "drO/":
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__("jFWS");
var isDimension = function isDimension(feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};
var obj2mq = function obj2mq(obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length - 1) {
      mq += ' and ';
    }
  });
  return mq;
};
var json2mq = function json2mq(query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length - 1) {
        mq += ', ';
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};
module.exports = json2mq;

/***/ }),

/***/ "drx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WyQQ");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ath0");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8ucb");




var CDLayout = function CDLayout(_ref) {
  var children = _ref.children;
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (window.location.pathname !== "/result/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    window.addEventListener("load", function () {
      window.gtag({
        event: "page_view"
      }, {
        page_location: window.location.href
      });
    });
    return function () {
      window.removeEventListener("load", function () {});
    };
  }, []);
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].layout
  }, h(_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].wrapper
  }, children), h(_footer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["a"] = (CDLayout);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "eef+":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("WI9V");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "fEz+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UpPA");
/* harmony import */ var _assets_home_arrow_gray_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+sxx");
/* harmony import */ var _assets_home_checkicon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("u+e0");
/* harmony import */ var _assets_home_light_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cVwm");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("EbY7");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Y3FI");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-prototype-builtins */







var newArray = [{
  name: "age",
  label: "What is your age?",
  tooltipLabel: "",
  option: [{
    value: "18-20",
    label: "18-20"
  }, {
    value: "21-25",
    label: "21-25"
  }, {
    value: "26-30",
    label: "26-30"
  }, {
    value: "31-35",
    label: "31-35"
  }, {
    value: "36-39",
    label: "36-39"
  }, {
    value: "40-49",
    label: "40-49"
  }, {
    value: "50-59",
    label: "50-59"
  }, {
    value: "60-69",
    label: "60-69"
  }, {
    value: "70+",
    label: "70+"
  }],
  counter: "2"
}, {
  name: "education",
  label: "What is your highest level of education?",
  tooltipLabel: "",
  option: [{
    value: "High School Diploma",
    label: "High School Diploma"
  }, {
    value: "1-Year Program Diploma or Certificate",
    label: "1-Year Program Diploma or Certificate"
  }, {
    value: "2-Year Program Diploma or Certificate",
    label: "2-Year Program Diploma or Certificate"
  }, {
    value: "3-Year Program Diploma or Certificate",
    label: "3-Year Program Diploma or Certificate"
  }, {
    value: "Bachelor’s Degree",
    label: "Bachelor’s Degree"
  }, {
    value: "Master’s Degree",
    label: "Master’s Degree"
  }, {
    value: "Professional Degree",
    label: "Professional Degree"
  }, {
    value: "PhD",
    label: "PhD"
  }, {
    value: "Post Doctorate",
    label: "Post Doctorate"
  }],
  counter: "3"
}, {
  name: "workExperienceInCanada",
  label: "How many years of work experience in Canada?",
  tooltipLabel: "",
  option: [{
    value: "None",
    label: "None"
  }, {
    value: "1 year",
    label: "1 year"
  }, {
    value: "2 years",
    label: "2 years"
  }, {
    value: "3 years",
    label: "3 years"
  }, {
    value: "4 years",
    label: "4 years"
  }, {
    value: "5+ years",
    label: "5+ years"
  }],
  counter: "4"
}, {
  name: "workExperienceOutCanada",
  label: "How many years of work experience outside of Canada?",
  tooltipLabel: "",
  option: [{
    value: "None",
    label: "None"
  }, {
    value: "1 year",
    label: "1 year"
  }, {
    value: "2 years",
    label: "2 years"
  }, {
    value: "3 years",
    label: "3 years"
  }, {
    value: "4 years",
    label: "4 years"
  }, {
    value: "5+ years",
    label: "5+ years"
  }],
  counter: "5"
}, {
  name: "jobOffer",
  label: "Do you have a valid job offer from Canada?",
  tooltipLabel: "Getting a job offer from a Registered Canadian employer is not necessarily required.",
  option: [{
    value: "Yes",
    label: "Yes"
  }, {
    value: "No",
    label: "No"
  }],
  counter: "6"
},
// {
//   name: "language",
//   label: "Do you know Canadian language?",
//   tooltipLabel: "",
//   option: [
//     { value: "Yes", label: "Yes" },
//     { value: "No", label: "No" },
//   ],
//   counter: "7",
// },
{
  name: "englishLangSkill",
  label: "English proficiency level",
  tooltipLabel: "",
  option: [{
    value: "Basic",
    label: "Basic"
  }, {
    value: "Intermediate",
    label: "Intermediate"
  }, {
    value: "Fluent",
    label: "Fluent"
  }, {
    value: "Native",
    label: "Native"
  }],
  counter: "8"
}, {
  name: "frenchLangSkill",
  label: "French proficiency level",
  tooltipLabel: "",
  option: [{
    value: "None",
    label: "None"
  }, {
    value: "Basic",
    label: "Basic"
  }, {
    value: "Intermediate",
    label: "Intermediate"
  }, {
    value: "Fluent",
    label: "Fluent"
  }, {
    value: "Native",
    label: "Native"
  }],
  counter: "9"
}, {
  name: "haveRelative",
  label: "Do you have Canadian relatives?",
  tooltipLabel: "Please select 'Yes' if you have close family members with Canadian citizenship or permanent residency, such as parents, grandparents, siblings, etc.",
  option: [{
    value: "Yes",
    label: "Yes"
  }, {
    value: "No",
    label: "No"
  }],
  counter: "10"
}];
var TopBanner = function TopBanner() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])({
      age: "",
      education: "",
      workExperienceInCanada: "",
      workExperienceOutCanada: "",
      jobOffer: "",
      frenchLangSkill: "",
      englishLangSkill: "",
      haveRelative: "",
      // language: "",
      defaultValue: {
        label: "",
        value: ""
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(0),
    _useState6 = _slicedToArray(_useState5, 2),
    formStep = _useState6[0],
    setFormStep = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(false),
    _useState8 = _slicedToArray(_useState7, 2),
    check = _useState8[0],
    setCheck = _useState8[1];
  var _useState9 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(false),
    _useState10 = _slicedToArray(_useState9, 2),
    fadeOut = _useState10[0],
    setFadeOut = _useState10[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (Object.values(values).every(function (val) {
      return val !== "";
    })) {
      localStorage.setItem("result", JSON.stringify(values));
      setCheck(true);
    }
  }, [values]);
  var prevFormStep = function prevFormStep() {
    setCheck(false);
    setFadeOut(true);
    setTimeout(function () {
      setFormStep(function (currentStep) {
        return Math.abs(currentStep - 1);
      });
      setFadeOut(false);
    }, [300]);
  };
  var handleOnBlur = function handleOnBlur(val, name) {
    if (values[name] === "") {
      setErrors(_defineProperty({}, name, true));
    } else if (val.value !== "") {
      setErrors(_defineProperty({}, name, false));
    }
  };
  var handleInputChange = function handleInputChange(val, name, counter) {
    var _objectSpread2;
    setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, name, val.value), _defineProperty(_objectSpread2, "defaultValue", {
      label: val.value,
      value: val.value
    }), _objectSpread2)));
    if (counter === "2") {
      window.gtag("event", "form_start", {
        form_id: name,
        form_name: name,
        form_destination: window.location.href
      });
    }
    if (counter !== "10") {
      setTimeout(function () {
        setFormStep(function (currentStep) {
          return currentStep + 1;
        });
      }, 200);
    }
    if (counter === "10") {
      return setFadeOut(false);
    }
    setFadeOut(true);
    setTimeout(function () {
      setFadeOut(false);
    }, [300]);
    setErrors(_defineProperty({}, name, false));
  };
  var handleCheckOption = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      yield window.gtag("event", "form_submit", {
        form_id: document.getElementsByTagName("form").QA_form.id,
        form_name: document.getElementsByTagName("form").QA_form.name,
        form_destination: document.getElementsByTagName("form").QA_form.baseURI
      });
      if (Object.values(values).every(function (val) {
        return val !== "";
      })) {
        Object(preact_router__WEBPACK_IMPORTED_MODULE_6__["route"])("/result/");
      }
    });
    return function handleCheckOption() {
      return _ref.apply(this, arguments);
    };
  }();
  var customStyles = {
    option: function option(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: "#fff",
        color: "#333",
        fontWeight: "500",
        fontSize: "16px",
        padding: "4px 10px",
        lineHeight: "24px",
        cursor: "pointer",
        ":hover": {
          background: "#F1EEFB",
          borderRadius: 8
        }
      });
    },
    menu: function menu(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: "#ffffff",
        padding: "15px"
      });
    },
    control: function control() {
      return {
        background: "#ffffff",
        border: "2px solid #CED0D0",
        borderRadius: "6px",
        padding: "0px 10px",
        color: "#333333",
        display: "flex",
        alignItem: "center",
        height: "48px",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px"
      };
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "#333",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px"
      });
    },
    errorStyle: function errorStyle(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        border: "2px solid red"
      });
    }
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].topBanner
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].topBannerContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].topBannerTitle
  }, h("h3", null, "Check if You Can Immigrate to ", h("span", null, "Canada")), h("p", null, "Get a full list of eligible immigration programs based on your profile.")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formGrid,
    id: "instantForm"
  }, h("h4", null, "Complete the Form for ", h("span", null, "Instant Results"), " ", h("img", {
    src: _assets_home_light_webp__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    alt: ""
  })), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formBox
  }, h("ul", null, h("li", {
    class: "".concat(formStep >= 0 ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].active : "")
  }, h(AgeIcon, null)), h("li", {
    class: "".concat(formStep >= 1 ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].active : "")
  }, h(EducationIcon, null)), h("li", {
    class: "".concat(formStep >= 2 || formStep >= 3 ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].active : "")
  }, h(ExperienceIcon, null)), h("li", {
    class: "".concat(formStep >= 3 || formStep >= 4 ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].active : "")
  }, h(ExperienceWorld, null)), h("li", {
    class: "".concat(formStep >= 4 || formStep >= 5 ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].active : "")
  }, h(HandIcon, null)), h("li", {
    class: "".concat(formStep >= 5 || formStep >= 6 ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].active : "")
  }, h(LanguageEnIcon, null)), h("li", {
    class: "".concat(formStep >= 6 || formStep >= 7 ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].active : "")
  }, h(LanguagefrIcon, null)), h("li", {
    class: "".concat(formStep >= 7 || formStep >= 8 ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].active : "")
  }, h(RelativesIcon, null))), h("form", {
    id: "QA_form_id",
    name: "QA_form"
  }, h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formScroll, " ").concat(fadeOut ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formFadeOut : _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formFadeIn)
  }, newArray.slice(formStep, formStep + 1).map(function (el) {
    return values[el.name] === "" && (el === null || el === void 0 ? void 0 : el.counter) !== "10" || values[el.name] && (el === null || el === void 0 ? void 0 : el.counter) !== "10" ? h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formField,
      key: el.name
    }, h(SelectInput, {
      fadeOut: fadeOut,
      label: el.label,
      tooltipLabel: el.tooltipLabel,
      options: el.option,
      name: el.name,
      errors: errors,
      onChange: handleInputChange,
      onBlur: handleOnBlur,
      counter: el.counter,
      customStyles: customStyles,
      values: values,
      defaultVal: {
        label: values[el.name] || "Select",
        value: values[el.name] || ""
      }
    })) : h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formField,
      key: el.name
    }, h(SelectInput, {
      fadeOut: fadeOut,
      label: el.label,
      tooltipLabel: el.tooltipLabel,
      options: el.option,
      name: el.name,
      errors: errors,
      onChange: handleInputChange,
      onBlur: handleOnBlur,
      counter: el.counter,
      customStyles: customStyles,
      values: values,
      defaultVal: {
        label: values[el.name] || "Select",
        value: values[el.name] || ""
      }
    }));
  })), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].buttonGrid
  }, formStep > 0 && h("button", {
    onClick: prevFormStep,
    type: "button",
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].backBtn
  }, h("img", {
    src: _assets_home_arrow_gray_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    alt: ""
  }), "Back"), check ? h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].submitBtn,
    type: "button",
    onClick: handleCheckOption
  }, "Check my options", h("img", {
    src: _assets_home_checkicon_svg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    alt: ""
  })) : null))))));
};
/* harmony default export */ __webpack_exports__["a"] = (TopBanner);
var SelectInput = function SelectInput(_ref2) {
  var label = _ref2.label,
    options = _ref2.options,
    name = _ref2.name,
    errors = _ref2.errors,
    _onChange = _ref2.onChange,
    _onBlur = _ref2.onBlur,
    counter = _ref2.counter,
    customStyles = _ref2.customStyles,
    disable = _ref2.disable,
    tooltipLabel = _ref2.tooltipLabel,
    values = _ref2.values,
    defaultVal = _ref2.defaultVal,
    _ref2$fadeOut = _ref2.fadeOut,
    fadeOut = _ref2$fadeOut === void 0 ? {
      fadeOut: fadeOut
    } : _ref2$fadeOut;
  return h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formGroup)
  }, h("label", {
    class: "".concat(fadeOut ? _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formFadeOutLeft : _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formFadeInLeft),
    htmlFor: "react-select-".concat(counter, "-input")
  }, label, tooltipLabel !== "" && h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formInfoIcon
  }, h(InfoIcon, null), h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].formInfoTooltip
  }, tooltipLabel))), h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    styles: customStyles,
    inputProps: {
      id: name
    },
    options: options,
    defaultValue: defaultVal,
    value: defaultVal,
    isDisabled: disable,
    isSearchable: false,
    onChange: function onChange(e) {
      return _onChange(e, name, counter);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e, name);
    },
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors[name] && values[name] === "" ? "error-msg" : ""),
    classNamePrefix: "react-select"
  }));
};
var AgeIcon = function AgeIcon() {
  return h("svg", {
    width: "45",
    height: "44",
    viewBox: "0 0 45 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M33.2228 33.1563H12.9183C12.6746 33.1563 12.4409 33.0595 12.2686 32.8872C12.0963 32.7149 11.9995 32.4812 11.9995 32.2376C11.9995 26.9216 15.2262 23.4855 20.2196 23.4855H25.9214C30.9158 23.4855 34.1425 26.9216 34.1425 32.2376C34.1425 32.3583 34.1187 32.4778 34.0724 32.5894C34.0262 32.7009 33.9585 32.8022 33.8731 32.8875C33.7877 32.9729 33.6862 33.0405 33.5746 33.0866C33.4631 33.1328 33.3435 33.1564 33.2228 33.1563ZM13.8738 31.3188H32.2664C31.9476 27.5445 29.6268 25.323 25.9205 25.323H20.2187C16.5134 25.323 14.1953 27.5473 13.8738 31.3188Z",
    fill: "#6243CE"
  }), h("path", {
    d: "M23.0905 20.7775C20.0678 20.7775 18.0374 18.4108 18.0374 14.8883C18.0374 11.3658 20.0678 9 23.0905 9C26.1132 9 28.1437 11.3658 28.1437 14.8883C28.1437 18.4108 26.1132 20.7775 23.0905 20.7775ZM23.0905 10.8375C20.7201 10.8375 19.8749 12.9304 19.8749 14.8883C19.8749 16.8462 20.7201 18.94 23.0905 18.94C25.4609 18.94 26.3062 16.8471 26.3062 14.8883C26.3062 12.9295 25.4609 10.8375 23.0905 10.8375Z",
    fill: "#6243CE"
  }));
};
var EducationIcon = function EducationIcon() {
  return h("svg", {
    width: "46",
    height: "44",
    viewBox: "0 0 46 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("g", {
    "clip-path": "url(#clip0_261_4161)"
  }, h("path", {
    d: "M24.452 33.2472C24.4176 33.2472 24.3833 33.2439 24.3495 33.2375C24.2266 33.2137 24.1158 33.1479 24.0361 33.0514C23.9563 32.9548 23.9127 32.8335 23.9126 32.7083V12.1504C23.9125 12.0813 23.9257 12.0128 23.9514 11.9487C24.2918 11.1001 27.5052 3.72279 35.9269 4.13438C36.0654 4.14104 36.1961 4.2008 36.2917 4.30125C36.3874 4.4017 36.4406 4.53513 36.4405 4.67382V25.1017C36.4405 25.1749 36.4258 25.2472 36.397 25.3145C36.3683 25.3817 36.3262 25.4424 36.2733 25.4928C36.2203 25.5433 36.1577 25.5825 36.0892 25.608C36.0206 25.6335 35.9476 25.6448 35.8746 25.6412C28.1553 25.2576 25.0772 32.5999 24.951 32.9133C24.9103 33.0122 24.8411 33.0967 24.7523 33.1561C24.6634 33.2156 24.5589 33.2473 24.452 33.2472ZM24.9915 12.2567V30.604C26.5138 28.2488 29.7871 24.5472 35.3141 24.5472H35.3632V5.19653C28.3042 5.12425 25.4381 11.1924 24.9915 12.2567Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M24.4521 33.2471C24.3486 33.2471 24.2472 33.2174 24.1601 33.1613C24.0731 33.1053 24.0039 33.0254 23.9611 32.9311C23.9182 32.8369 23.9033 32.7323 23.9182 32.6298C23.9332 32.5273 23.9773 32.4314 24.0454 32.3533C24.0993 32.2891 29.6156 26.1082 38.2255 27.8312V8.3748C37.452 8.20737 36.6662 8.10256 35.8757 8.06139C35.805 8.05787 35.7356 8.04043 35.6715 8.01008C35.6075 7.97974 35.5501 7.93707 35.5025 7.88452C35.455 7.83197 35.4183 7.77057 35.3945 7.70382C35.3707 7.63708 35.3602 7.56629 35.3638 7.49552C35.3743 7.35398 35.4389 7.2219 35.5441 7.12668C35.6494 7.03147 35.7873 6.98042 35.9291 6.98414C36.9296 7.03623 37.923 7.18253 38.896 7.42108C39.0134 7.44983 39.1177 7.51713 39.1922 7.6122C39.2667 7.70727 39.3072 7.82461 39.3071 7.94541V28.5033C39.3071 28.5851 39.2886 28.6658 39.2529 28.7393C39.2172 28.8128 39.1652 28.8773 39.101 28.9278C39.0367 28.9783 38.9618 29.0135 38.8819 29.0308C38.802 29.0481 38.7192 29.047 38.6398 29.0277C30.3012 26.9935 24.9139 33.0022 24.861 33.0632C24.81 33.1214 24.7471 33.1679 24.6766 33.1997C24.606 33.2314 24.5295 33.2476 24.4521 33.2471Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M24.4519 33.2475C24.3255 33.2476 24.2031 33.2033 24.1061 33.1224C24.0937 33.1121 22.5045 31.8525 18.1825 31.0504C18.0418 31.0243 17.9172 30.9433 17.8362 30.8254C17.7552 30.7074 17.7243 30.5621 17.7504 30.4214C17.7765 30.2807 17.8575 30.1561 17.9754 30.0751C18.0934 29.9941 18.2387 29.9632 18.3794 29.9893C21.233 30.519 22.9765 31.2457 23.9124 31.7403V12.4738C23.0768 11.9382 19.4281 9.97569 10.679 9.87427V23.1601C10.679 23.3031 10.6221 23.4403 10.521 23.5415C10.4198 23.6427 10.2826 23.6995 10.1395 23.6995C9.99647 23.6995 9.85925 23.6427 9.75808 23.5415C9.65692 23.4403 9.6001 23.3031 9.6001 23.1601V9.33106C9.6001 9.18799 9.65692 9.05079 9.75808 8.94962C9.85925 8.84846 9.99647 8.79163 10.1395 8.79163C21.1208 8.82183 24.6504 11.6582 24.796 11.779C24.8567 11.8297 24.9056 11.8932 24.939 11.9649C24.9725 12.0366 24.9898 12.1147 24.9897 12.1939V32.7081C24.9897 32.8511 24.9328 32.9883 24.8317 33.0895C24.7305 33.1907 24.5933 33.2475 24.4502 33.2475H24.4519Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M41.6282 33.2474H17.1972C17.0541 33.2474 16.9169 33.1905 16.8157 33.0894C16.7145 32.9882 16.6577 32.851 16.6577 32.7079C16.6577 32.5649 16.7145 32.4277 16.8157 32.3265C16.9169 32.2253 17.0541 32.1685 17.1972 32.1685H41.0888V12.7331H39.1182C38.9752 12.7331 38.8379 12.6763 38.7368 12.5751C38.6356 12.474 38.5788 12.3368 38.5788 12.1937C38.5788 12.0506 38.6356 11.9134 38.7368 11.8123C38.8379 11.7111 38.9752 11.6543 39.1182 11.6543H41.6282C41.7713 11.6543 41.9085 11.7111 42.0097 11.8123C42.1108 11.9134 42.1677 12.0506 42.1677 12.1937V32.7079C42.1677 32.851 42.1108 32.9882 42.0097 33.0894C41.9085 33.1905 41.7713 33.2474 41.6282 33.2474Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M7.27723 24.6088C7.13416 24.6088 6.99697 24.552 6.8958 24.4508C6.79464 24.3497 6.73779 24.2125 6.73779 24.0694V12.1937C6.73779 12.0506 6.79464 11.9134 6.8958 11.8123C6.99697 11.7111 7.13416 11.6543 7.27723 11.6543H9.78777C9.93084 11.6543 10.0681 11.7111 10.1692 11.8123C10.2704 11.9134 10.3272 12.0506 10.3272 12.1937C10.3272 12.3368 10.2704 12.474 10.1692 12.5751C10.0681 12.6763 9.93084 12.7331 9.78777 12.7331H7.81667V24.0694C7.81667 24.2125 7.75984 24.3497 7.65868 24.4508C7.55752 24.552 7.4203 24.6088 7.27723 24.6088Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M11.7722 39.5333C11.6939 39.5334 11.6165 39.5164 11.5454 39.4836C11.4743 39.4508 11.4113 39.4029 11.3606 39.3433C11.3098 39.2836 11.2727 39.2137 11.2517 39.1382C11.2308 39.0628 11.2265 38.9837 11.2392 38.9065L11.3751 38.0763C11.3911 37.9787 11.4337 37.8873 11.4981 37.8123C11.5625 37.7372 11.6463 37.6813 11.7403 37.6507C12.7987 37.3049 13.4336 36.6624 14.3048 35.522L17.2534 31.3522C17.5716 30.8413 17.9126 30.0824 17.631 29.5133C17.4546 29.1535 17.0662 28.9199 16.6983 28.7888L16.407 30.5927C16.3837 30.7332 16.3057 30.8589 16.1901 30.9422C16.0745 31.0254 15.9306 31.0596 15.7899 31.0371C15.6491 31.0147 15.523 30.9375 15.439 30.8224C15.3551 30.7073 15.32 30.5636 15.3416 30.4227L15.716 28.0492C15.7207 28.0163 15.7288 27.9839 15.7403 27.9527L17.0123 20.072C17.0256 20.0159 17.0271 19.9576 17.0166 19.9008C17.0061 19.844 16.9839 19.7901 16.9513 19.7424C16.8407 19.586 16.6017 19.4727 16.2797 19.4188C15.8935 19.3573 15.4867 19.5714 15.4355 19.8611L14.0124 27.9786C14.0002 28.0484 13.9744 28.1151 13.9364 28.1749C13.8984 28.2347 13.8489 28.2865 13.7909 28.3272C13.7329 28.3679 13.6675 28.3968 13.5983 28.4123C13.5291 28.4277 13.4576 28.4293 13.3878 28.4171C13.318 28.4049 13.2512 28.379 13.1914 28.341C13.1316 28.303 13.0799 28.2536 13.0391 28.1956C12.9984 28.1376 12.9695 28.0722 12.9541 28.003C12.9386 27.9338 12.937 27.8623 12.9492 27.7925L13.5426 24.3854C13.5569 24.3188 13.5578 24.2501 13.5452 24.1832C13.5326 24.1163 13.5068 24.0527 13.4692 23.9959C13.377 23.8675 13.2114 23.7801 12.9897 23.7472C12.3262 23.6431 12.2344 23.8659 12.1805 24.1896L11.633 27.5476C11.6079 27.6863 11.5294 27.8096 11.4145 27.8912C11.2996 27.9728 11.1572 28.0062 11.018 27.9842C10.8788 27.9622 10.7537 27.8866 10.6695 27.7735C10.5853 27.6605 10.5487 27.5189 10.5676 27.3792L10.976 24.702C11.0234 24.4323 10.6652 24.0655 10.1166 23.9689C9.58044 23.8729 9.09763 24.2829 9.04261 24.5925L8.95737 25.2177C8.9536 25.2603 8.94769 25.3035 8.93959 25.3466L8.70709 27.0464C8.69749 27.1166 8.67416 27.1842 8.63843 27.2454C8.60269 27.3066 8.55525 27.3602 8.49883 27.403C8.4424 27.4459 8.37808 27.4772 8.30955 27.4952C8.24102 27.5132 8.16961 27.5175 8.09941 27.5079C8.02921 27.4983 7.96157 27.475 7.90039 27.4392C7.8392 27.4035 7.78565 27.3561 7.7428 27.2996C7.69995 27.2432 7.66863 27.1789 7.65064 27.1104C7.63264 27.0418 7.62832 26.9704 7.63791 26.9002L7.88174 25.1201C7.89288 25.0428 7.87354 24.9643 7.8278 24.9011C7.7824 24.8491 7.72713 24.8066 7.66518 24.7761C7.60322 24.7457 7.53583 24.7278 7.46692 24.7236C7.17778 24.6939 6.85034 24.7851 6.80395 25.1336L5.51093 32.9236C5.33723 33.9873 6.08811 35.1218 6.69174 36.0329C6.76671 36.1463 6.79636 36.2838 6.77482 36.418L6.49432 38.1291C6.47122 38.2704 6.39292 38.3967 6.27668 38.4803C6.16044 38.5638 6.01578 38.5978 5.8745 38.5747C5.73322 38.5516 5.6069 38.4733 5.52334 38.3571C5.43978 38.2408 5.40583 38.0962 5.42894 37.9549L5.67545 36.452C5.02111 35.4584 4.21897 34.1459 4.44607 32.7477L5.73532 24.9717C5.85076 24.1124 6.62702 23.5482 7.57696 23.649C7.79712 23.6715 8.01078 23.7368 8.20596 23.8411C8.42505 23.4967 8.74061 23.2244 9.11336 23.058C9.4861 22.8917 9.89955 22.8387 10.3022 22.9057C10.682 22.9691 11.0415 23.1208 11.3519 23.3486C11.6891 22.7892 12.3175 22.5513 13.1558 22.6802C13.3844 22.714 13.6053 22.787 13.8091 22.896L14.3733 19.6745C14.5292 18.8006 15.4797 18.1959 16.4539 18.355C17.235 18.4829 17.6342 18.8405 17.8317 19.1189C17.9469 19.2814 18.028 19.4655 18.0701 19.6602C18.1121 19.8549 18.1144 20.0561 18.0766 20.2517L16.872 27.7115C17.487 27.8922 18.2346 28.2898 18.5982 29.0359C18.9985 29.8493 18.8463 30.8295 18.1483 31.9488L15.1706 36.1602C14.3922 37.1808 13.6445 38.0606 12.386 38.5623L12.3014 39.0807C12.2808 39.2065 12.2164 39.321 12.1196 39.4038C12.0227 39.4867 11.8996 39.5325 11.7722 39.5333Z",
    fill: "#CED0D0"
  })), h("defs", null, h("clipPath", {
    id: "clip0_261_4161"
  }, h("rect", {
    width: "45",
    height: "44",
    fill: "white",
    transform: "translate(0.285645)"
  }))));
};
var ExperienceIcon = function ExperienceIcon() {
  return h("svg", {
    width: "45",
    height: "44",
    viewBox: "0 0 45 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M24.5026 37.8888H6.01366C5.58305 37.8882 5.17024 37.7169 4.86575 37.4124C4.56127 37.1079 4.38996 36.6951 4.3894 36.2645V26.1905C4.3894 26.0504 4.44503 25.9161 4.54405 25.8171C4.64308 25.7181 4.7774 25.6624 4.91745 25.6624C5.05749 25.6624 5.19179 25.7181 5.29082 25.8171C5.38985 25.9161 5.44549 26.0504 5.44549 26.1905V36.2629C5.44563 36.4136 5.50553 36.558 5.61205 36.6645C5.71858 36.7711 5.86301 36.831 6.01366 36.8311H24.5026C24.6532 36.8308 24.7976 36.7709 24.9041 36.6644C25.0105 36.5579 25.0705 36.4135 25.0708 36.2629V26.1905C25.0708 26.0504 25.1264 25.9161 25.2254 25.8171C25.3245 25.7181 25.4588 25.6624 25.5988 25.6624C25.7389 25.6624 25.8732 25.7181 25.9722 25.8171C26.0712 25.9161 26.1269 26.0504 26.1269 26.1905V36.2629C26.1267 36.6938 25.9556 37.107 25.6511 37.4119C25.3465 37.7167 24.9335 37.8882 24.5026 37.8888V37.8888Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M18.2675 20.5161H12.2478C12.1077 20.5161 11.9734 20.4605 11.8744 20.3615C11.7753 20.2624 11.7197 20.1281 11.7197 19.9881V17.6214C11.7197 17.3413 11.831 17.0727 12.0291 16.8746C12.2271 16.6766 12.4957 16.5653 12.7758 16.5653H17.7394C18.0195 16.5653 18.2881 16.6766 18.4862 16.8746C18.6843 17.0727 18.7955 17.3413 18.7955 17.6214V19.9881C18.7955 20.1281 18.7399 20.2624 18.6408 20.3615C18.5418 20.4605 18.4075 20.5161 18.2675 20.5161V20.5161ZM12.7758 19.4601H17.7394V17.6214H12.7758V19.4601Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M15.2574 30.0279C14.8257 30.028 14.4035 29.9 14.0445 29.6602C13.6854 29.4204 13.4055 29.0795 13.2402 28.6806C13.0749 28.2817 13.0317 27.8427 13.1159 27.4192C13.2001 26.9957 13.408 26.6067 13.7133 26.3014C14.0186 25.9961 14.4077 25.7882 14.8312 25.7039C15.2547 25.6197 15.6936 25.663 16.0925 25.8283C16.4914 25.9936 16.8324 26.2734 17.0722 26.6325C17.312 26.9916 17.4399 27.4137 17.4398 27.8455C17.4393 28.4241 17.2092 28.9789 16.8 29.3881C16.3909 29.7972 15.8361 30.0273 15.2574 30.0279V30.0279ZM15.2574 26.7186C15.0346 26.7185 14.8166 26.7845 14.6312 26.9083C14.4459 27.032 14.3014 27.208 14.216 27.4139C14.1306 27.6198 14.1082 27.8464 14.1516 28.065C14.1951 28.2836 14.3023 28.4845 14.4599 28.6421C14.6175 28.7997 14.8183 28.9071 15.0369 28.9506C15.2555 28.9942 15.4821 28.9719 15.688 28.8866C15.8939 28.8013 16.07 28.6569 16.1938 28.4716C16.3177 28.2863 16.3837 28.0684 16.3837 27.8455C16.3833 27.5468 16.2645 27.2605 16.0534 27.0493C15.8423 26.8381 15.5561 26.7192 15.2574 26.7186V26.7186Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M25.1368 26.6198C25.8713 26.3113 26.6308 25.4642 24.927 25.6667L16.8447 27.0281C16.7747 27.0383 16.7075 27.0626 16.6471 27.0993C16.5867 27.136 16.5343 27.1845 16.4929 27.2419C16.4516 27.2992 16.4222 27.3643 16.4065 27.4333C16.3908 27.5022 16.3892 27.5736 16.4016 27.6432C16.414 27.7128 16.4402 27.7792 16.4788 27.8385C16.5174 27.8978 16.5674 27.9487 16.6261 27.9883C16.6847 28.0278 16.7506 28.0552 16.82 28.0687C16.8894 28.0823 16.9608 28.0818 17.03 28.0673L25.1368 26.6198Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M20.0156 19.4601H3.67526C3.53522 19.4601 3.40092 19.5158 3.30189 19.6148C3.20286 19.7138 3.14722 19.8481 3.14722 19.9882V25.7771C3.14714 25.9011 3.1907 26.0212 3.27026 26.1163C3.34981 26.2114 3.46029 26.2754 3.58234 26.2973L13.5069 28.0694C13.5377 28.075 13.569 28.0779 13.6004 28.0778V28.0799C13.7326 28.0803 13.8602 28.031 13.9578 27.9418C14.0555 27.8526 14.1161 27.73 14.1277 27.5983C14.1393 27.4665 14.1011 27.3352 14.0205 27.2303C13.94 27.1255 13.823 27.0546 13.6928 27.0318L4.20331 25.3373V20.5162H20.2387C20.1456 20.1714 20.0708 19.819 20.0156 19.4601Z",
    fill: "#CED0D0"
  }), h("g", {
    "clip-path": "url(#clip0_885_2615)"
  }, h("path", {
    d: "M43.4069 19.2778C42.9715 18.5256 42.8554 17.6485 43.0807 16.809L43.2501 16.1759C43.2861 16.0416 43.2668 15.8984 43.1973 15.7787C43.1278 15.6579 43.0128 15.5706 42.8789 15.5351L42.2454 15.3673C41.4169 15.1477 40.6955 14.5952 40.2481 13.8211C40.0897 13.5827 39.7698 13.5163 39.5293 13.6721L37.1932 15.1828C37.0254 15.291 36.8205 15.2957 36.6465 15.1937C36.5634 15.1456 36.3726 15.0024 36.3888 14.7139L36.6815 9.10762C36.6904 8.94191 36.6198 8.78248 36.4917 8.67689C36.3637 8.5713 36.1948 8.5321 36.0323 8.57339C34.9659 8.84051 33.8525 8.44376 33.1933 7.56401L32.9184 7.19705C32.7213 6.93464 32.2791 6.93464 32.082 7.19705L31.8071 7.56453C31.1479 8.44376 30.034 8.84051 28.9681 8.57339C28.8056 8.53262 28.6367 8.5713 28.5086 8.67689C28.3806 8.78196 28.31 8.94191 28.3189 9.10762L28.6121 14.716C28.6278 15.0024 28.437 15.1462 28.3539 15.1943C28.1804 15.2957 27.9755 15.2915 27.8082 15.1838L25.4711 13.6726C25.3498 13.5942 25.2019 13.5707 25.0644 13.6041C24.9248 13.6376 24.8051 13.7275 24.7335 13.8519C24.3049 14.5957 23.5835 15.1483 22.755 15.3678L22.1214 15.5356C21.9871 15.5711 21.8721 15.6584 21.8031 15.7792C21.7336 15.8994 21.7142 16.0421 21.7503 16.1765L21.9197 16.8095C22.145 17.649 22.0289 18.5261 21.5935 19.2783C21.5182 19.4074 21.5025 19.5622 21.5496 19.7043C21.5961 19.846 21.7012 19.961 21.8381 20.0206L28.068 22.7189C28.3142 22.8261 28.4412 23.0979 28.3618 23.353L27.8181 25.1418C27.77 25.3001 27.7998 25.4721 27.8981 25.6054C27.9964 25.7382 28.1527 25.8171 28.3184 25.8171H30.932C31.5086 25.8171 31.9775 26.2865 31.9775 26.8631V29.4783C31.9775 29.7663 32.2111 30 32.5002 30C32.7893 30 33.0229 29.7663 33.0229 29.4767V26.8615C33.0229 26.285 33.4918 25.8155 34.0684 25.8155H36.682C36.8472 25.8155 37.0035 25.7371 37.1023 25.6038C37.2006 25.4706 37.2304 25.2986 37.1823 25.1402L36.6386 23.3514L36.6376 23.3493C36.5597 23.0963 36.6867 22.825 36.9314 22.7179L43.1623 20.019C43.2992 19.96 43.4043 19.8444 43.4508 19.7028C43.4979 19.5622 43.4822 19.4074 43.4069 19.2778ZM36.5153 21.7592C35.7808 22.0801 35.4045 22.8951 35.6386 23.6572L35.9763 24.7701H34.0684C33.6852 24.7701 33.3319 24.883 33.0229 25.0639V21.4325L36.9157 19.4848C37.1739 19.3557 37.2784 19.0415 37.1493 18.7833C37.0197 18.5251 36.7061 18.4211 36.4478 18.5496L33.0229 20.2626V14.3098C33.0229 14.0207 32.7893 13.7866 32.5002 13.7866C32.2111 13.7866 31.9775 14.0202 31.9775 14.3098V20.2626L28.552 18.5491C28.2938 18.4211 27.9802 18.5246 27.8505 18.7828C27.7214 19.041 27.826 19.3552 28.0842 19.4843L31.9775 21.4325V25.0639C31.6685 24.883 31.3152 24.7701 30.932 24.7701H29.0241L29.3617 23.6588C29.5975 22.8966 29.2206 22.0801 28.4846 21.7587L22.756 19.2778C23.1131 18.4116 23.1758 17.4582 22.9291 16.5382L22.8956 16.4122L23.0221 16.3788C23.9479 16.1336 24.7717 15.5743 25.3367 14.831L27.2416 16.0625C27.7392 16.3824 28.3665 16.3965 28.8808 16.0975C29.3921 15.7991 29.689 15.2476 29.656 14.6595L29.3968 9.6936C30.5766 9.76782 31.7255 9.28482 32.5007 8.3711C33.2759 9.28535 34.4249 9.76782 35.6041 9.6936L35.3454 14.6574C35.3125 15.2476 35.6094 15.7996 36.1201 16.0975C36.6344 16.3976 37.2612 16.3829 37.7604 16.062L39.6657 14.8299C40.2407 15.5816 41.0593 16.1346 41.9788 16.3782L42.1053 16.4117L42.0719 16.5377C41.8251 17.4577 41.8879 18.4111 42.2449 19.2773L36.5153 21.7592Z",
    fill: "#CED0D0"
  })), h("defs", null, h("clipPath", {
    id: "clip0_885_2615"
  }, h("rect", {
    width: "23",
    height: "23",
    fill: "white",
    transform: "translate(21 7)"
  }))));
};
var ExperienceWorld = function ExperienceWorld() {
  return h("svg", {
    width: "45",
    height: "44",
    viewBox: "0 0 45 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M24.7882 37.8888H6.2993C5.86869 37.8882 5.45588 37.7169 5.1514 37.4124C4.84691 37.1079 4.67561 36.6951 4.67505 36.2645V26.1905C4.67505 26.0504 4.73067 25.9161 4.8297 25.8171C4.92873 25.7181 5.06305 25.6624 5.20309 25.6624C5.34314 25.6624 5.47744 25.7181 5.57646 25.8171C5.67549 25.9161 5.73114 26.0504 5.73114 26.1905V36.2629C5.73128 36.4136 5.79117 36.558 5.8977 36.6645C6.00422 36.7711 6.14865 36.831 6.2993 36.8311H24.7882C24.9389 36.8308 25.0832 36.7709 25.1897 36.6644C25.2962 36.5579 25.3561 36.4135 25.3564 36.2629V26.1905C25.3564 26.0504 25.4121 25.9161 25.5111 25.8171C25.6101 25.7181 25.7444 25.6624 25.8845 25.6624C26.0245 25.6624 26.1588 25.7181 26.2579 25.8171C26.3569 25.9161 26.4125 26.0504 26.4125 26.1905V36.2629C26.4124 36.6938 26.2413 37.107 25.9367 37.4119C25.6322 37.7167 25.2191 37.8882 24.7882 37.8888Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M18.5531 20.5161H12.5334C12.3934 20.5161 12.259 20.4605 12.16 20.3615C12.061 20.2624 12.0054 20.1281 12.0054 19.9881V17.6214C12.0054 17.3413 12.1166 17.0727 12.3147 16.8746C12.5127 16.6766 12.7814 16.5653 13.0615 16.5653H18.0251C18.3052 16.5653 18.5738 16.6766 18.7718 16.8746C18.9699 17.0727 19.0812 17.3413 19.0812 17.6214V19.9881C19.0812 20.1281 19.0255 20.2624 18.9265 20.3615C18.8275 20.4605 18.6932 20.5161 18.5531 20.5161ZM13.0615 19.4601H18.0251V17.6214H13.0615V19.4601Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M15.5431 30.0279C15.1113 30.028 14.6892 29.9 14.3301 29.6602C13.971 29.4204 13.6912 29.0795 13.5259 28.6806C13.3606 28.2817 13.3173 27.8427 13.4015 27.4192C13.4858 26.9957 13.6937 26.6067 13.999 26.3014C14.3043 25.9961 14.6933 25.7882 15.1168 25.7039C15.5403 25.6197 15.9793 25.663 16.3782 25.8283C16.7771 25.9936 17.118 26.2734 17.3578 26.6325C17.5977 26.9916 17.7256 27.4137 17.7255 27.8455C17.7249 28.4241 17.4948 28.9789 17.0857 29.3881C16.6765 29.7972 16.1217 30.0273 15.5431 30.0279ZM15.5431 26.7186C15.3202 26.7185 15.1023 26.7845 14.9169 26.9083C14.7315 27.032 14.587 27.208 14.5016 27.4139C14.4163 27.6198 14.3939 27.8464 14.4373 28.065C14.4807 28.2836 14.588 28.4845 14.7456 28.6421C14.9031 28.7997 15.1039 28.9071 15.3225 28.9506C15.5411 28.9942 15.7677 28.9719 15.9736 28.8866C16.1796 28.8013 16.3556 28.6569 16.4795 28.4716C16.6033 28.2863 16.6694 28.0684 16.6694 27.8455C16.669 27.5468 16.5502 27.2605 16.3391 27.0493C16.128 26.8381 15.8417 26.7192 15.5431 26.7186Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M25.4224 26.6198C26.157 26.3113 26.9164 25.4642 25.2126 25.6667L17.1304 27.0281C17.0604 27.0383 16.9932 27.0626 16.9328 27.0993C16.8723 27.136 16.8199 27.1845 16.7786 27.2419C16.7373 27.2992 16.7079 27.3643 16.6922 27.4333C16.6765 27.5022 16.6748 27.5736 16.6872 27.6432C16.6996 27.7128 16.7259 27.7792 16.7645 27.8385C16.803 27.8978 16.8531 27.9487 16.9117 27.9883C16.9703 28.0278 17.0363 28.0552 17.1057 28.0687C17.1751 28.0823 17.2465 28.0818 17.3157 28.0673L25.4224 26.6198Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M20.3013 19.4601H3.96091C3.82086 19.4601 3.68656 19.5158 3.58754 19.6148C3.48851 19.7138 3.43286 19.8481 3.43286 19.9882V25.7771C3.43279 25.9011 3.47635 26.0212 3.5559 26.1163C3.63545 26.2114 3.74593 26.2754 3.86798 26.2973L13.7926 28.0694C13.8234 28.075 13.8547 28.0779 13.886 28.0778V28.0799C14.0183 28.0803 14.1458 28.031 14.2435 27.9418C14.3411 27.8526 14.4017 27.73 14.4133 27.5983C14.425 27.4665 14.3867 27.3352 14.3062 27.2303C14.2257 27.1255 14.1087 27.0546 13.9784 27.0318L4.48895 25.3373V20.5162H20.5243C20.4312 20.1714 20.3565 19.819 20.3013 19.4601Z",
    fill: "#CED0D0"
  }), h("circle", {
    cx: "31",
    cy: "15",
    r: "10.5",
    stroke: "#CED0D0"
  }), h("path", {
    d: "M24.0664 8C24.4105 8.0295 24.8437 8.50899 24.9304 8.8035C24.9965 9.028 24.9633 9.31278 24.9943 9.54673C25.0204 9.74394 24.9554 9.84723 24.833 10.003C24.6815 10.196 24.401 10.2471 24.2672 10.4765C24.1829 10.6211 24.2248 10.789 24.1334 10.9442C24.0767 11.0404 23.9057 11.075 23.82 11.1738C23.662 11.356 23.4974 11.5536 23.4671 11.7965C23.3703 12.573 22.4043 12.3578 21.8548 12.7033C21.6464 12.8344 22.1799 13.0803 22.2473 13.1022C22.39 13.1486 22.4094 13.2253 22.4785 13.3719C22.546 13.5154 22.7723 13.5637 22.7523 13.7335C22.7364 13.8681 22.43 13.9783 22.3172 13.9889C21.8722 14.0309 21.4413 13.9401 21 13.9401",
    stroke: "#CED0D0",
    "stroke-linecap": "round"
  }), h("path", {
    d: "M21 15.5446C21.1834 15.5218 21.4029 15.4263 21.5834 15.3682C21.8038 15.2972 22.0544 15 22.2779 15C22.4365 15 22.6335 15.3607 22.7348 15.4909C22.9459 15.7622 23.1552 15.9791 23.3892 16.2196C23.5454 16.38 23.7081 16.4994 23.809 16.7143C23.8907 16.8883 24.3326 16.7872 24.4665 16.7872C24.9156 16.7872 25.1937 16.7836 25.3308 17.4084C25.399 17.719 25.49 18.0278 25.3895 18.3442C25.291 18.654 25.7 18.9492 25.8648 19.1189C26.2363 19.5013 25.7549 20.3659 25.4666 20.5839C25.3083 20.7036 25.1324 20.7881 24.9697 20.8984C24.8285 20.9941 24.8832 21.3571 24.9017 21.5273C24.9552 22.0173 24.945 22.506 24.945 23",
    stroke: "#CED0D0",
    "stroke-linecap": "round"
  }), h("path", {
    d: "M31 5C30.9681 5.17943 30.638 5.43861 30.5265 5.53151C30.3838 5.65039 30.2126 5.76431 30.0852 5.9059C29.9296 6.07872 29.7857 6.38618 29.5823 6.47418C29.2529 6.61666 28.8924 6.51648 28.5577 6.63129C28.2016 6.75347 27.3478 6.90431 27.2229 7.40014C27.0776 7.97716 27.0287 8.61507 27.0036 9.21194C26.9873 9.59851 27.0275 9.97681 27.1026 10.3518C27.1282 10.4802 27.4369 11.329 27.4369 10.8599C27.4369 10.5725 27.4866 10.5259 27.7044 10.4421C27.9574 10.3448 28.2466 10.219 28.5069 10.1613C28.8784 10.0789 29.1228 9.81365 29.5074 9.81365",
    stroke: "#CED0D0",
    "stroke-linecap": "round"
  }), h("path", {
    d: "M32 10C32.353 10.2343 32.8893 10.2206 33.2391 10.4745C33.3512 10.5557 33.4003 10.6668 33.5 10.7502C33.6049 10.8378 33.752 10.8413 33.8514 10.9489C34.0202 11.1314 33.9565 11.5214 33.9565 11.744C33.9565 12.2088 34.4212 12.365 34.6993 12.7057C34.9085 12.9621 34.8683 13.1209 34.9674 13.4014C35.0828 13.7281 36.0213 13.0833 36.2101 12.9558C36.4583 12.7882 36.7034 12.6198 36.9529 12.4492C37.0972 12.3506 37.1524 12.0615 37.0725 11.9043C36.9893 11.7407 36.909 11.5985 36.7609 11.4747C36.5015 11.258 36.8056 11.3295 36.9891 11.417C37.5533 11.6858 38.3511 11.6287 38.558 12.2825C38.6489 12.57 39.7129 14.2207 39.9565 13.9752C40.2696 13.6597 40.2664 13.3238 40.4457 12.975C40.5508 12.7703 40.8034 12.6632 41 12.539",
    stroke: "#CED0D0",
    "stroke-linecap": "round"
  }), h("path", {
    d: "M36.1999 17.1081C36.1999 17.5221 36.0839 17.59 35.7279 17.764C35.2234 18.0105 35.3007 18.2095 35.1712 18.6648C35.0771 18.9962 35.1381 19.4112 35.1381 19.7531C35.1381 20.0905 34.9371 20.481 35.0201 20.8053C35.1413 21.2792 35.7756 20.7575 35.9676 20.6107C36.5309 20.1798 36.9962 19.6059 36.9962 18.8919C36.9962 18.675 37.0047 18.4563 36.9962 18.2396C36.9871 18.0083 36.7885 17.8877 36.6939 17.6919C36.5985 17.4944 36.598 16.8248 36.598 17.0433",
    stroke: "#CED0D0",
    "stroke-linecap": "round"
  }), h("path", {
    d: "M31.6044 12.1734C31.3583 12.1264 31.1284 11.8973 30.9086 11.7897C30.6679 11.6717 30.5376 11.591 30.5097 11.3512C30.4434 10.7821 29.3011 11.0581 28.9872 11.1319C28.7789 11.1809 28.0822 11.2081 28.0425 11.473C27.9784 11.9014 27.7594 12.0631 27.385 12.3104C27.0539 12.5292 26.5131 12.8352 26.2871 13.1479C26.1129 13.3888 26.1137 13.6255 26.0605 13.9001C26.0134 14.1426 25.9341 14.7462 26.102 14.9598C26.2917 15.2012 27.0403 15.456 27.385 15.4623C28.0852 15.4751 28.7563 15.5458 29.4532 15.5719C29.7361 15.5825 29.6285 15.9859 29.7469 16.1688C29.9714 16.5156 30.2504 16.5883 30.5352 16.8601C30.7108 17.0276 30.6278 17.3934 30.6278 17.6062C30.6278 17.9066 30.6278 18.2071 30.6278 18.5076C30.6278 18.7224 30.6422 18.9066 30.7299 19.1075C30.9689 19.6548 31.1062 20.1065 31.5789 20.4931C31.7231 20.611 31.7925 20.9844 31.9938 20.9986C32.3099 21.0209 32.3232 20.7726 32.3481 20.5114C32.3833 20.1421 32.4363 19.9334 32.6896 19.6313C32.8753 19.4098 33.3017 19.1242 33.3726 18.8608C33.4447 18.5935 33.4531 18.5161 33.6663 18.3127C33.8351 18.1516 33.7826 17.7446 33.7876 17.5331C33.7936 17.2743 33.7904 16.8428 33.9152 16.6134C34.0799 16.3108 34.4617 16.1242 34.678 15.849C34.9407 15.5149 35.2113 14.896 34.7514 14.6279C34.335 14.385 34.0658 14.1199 33.9056 13.6869C33.741 13.2419 33.4614 12.9084 33.1364 12.551C33.0009 12.402 32.7521 12.0638 32.5236 12.0638C32.2747 12.0638 32.0257 12.0638 31.7768 12.0638",
    stroke: "#CED0D0",
    "stroke-linecap": "round"
  }));
};
var HandIcon = function HandIcon() {
  return h("svg", {
    width: "45",
    height: "44",
    viewBox: "0 0 45 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("line", {
    x1: "18",
    y1: "9.5",
    x2: "25",
    y2: "9.5",
    stroke: "#CED0D0"
  }), h("line", {
    x1: "12",
    y1: "12.5",
    x2: "31",
    y2: "12.5",
    stroke: "#CED0D0"
  }), h("line", {
    x1: "12",
    y1: "14.5",
    x2: "31",
    y2: "14.5",
    stroke: "#CED0D0"
  }), h("line", {
    x1: "12",
    y1: "16.5",
    x2: "23",
    y2: "16.5",
    stroke: "#CED0D0"
  }), h("line", {
    x1: "12",
    y1: "19.5",
    x2: "19",
    y2: "19.5",
    stroke: "#CED0D0"
  }), h("line", {
    x1: "25",
    y1: "19.5",
    x2: "32",
    y2: "19.5",
    stroke: "#CED0D0"
  }), h("line", {
    x1: "27",
    y1: "21.5",
    x2: "31",
    y2: "21.5",
    stroke: "#CED0D0"
  }), h("line", {
    x1: "13",
    y1: "21.5",
    x2: "17",
    y2: "21.5",
    stroke: "#CED0D0"
  }), h("path", {
    d: "M7 25H14.5L19.5 23H26",
    stroke: "#CED0D0"
  }), h("path", {
    d: "M36.9998 25H30.4998C28.3687 23.7937 26.4999 23 24.9998 23C23.9999 23 22.1718 24.8709 19.9998 26.5C18 28 19.9999 30.5 21.4998 29.5L24.4999 27.5C25.1666 28 26.8999 28.7 28.4999 27.5",
    stroke: "#CED0D0"
  }), h("path", {
    d: "M37 31H33L31.2222 32H29",
    stroke: "#CED0D0"
  }), h("path", {
    d: "M7 31.5H13.5",
    stroke: "#CED0D0"
  }), h("rect", {
    x: "13.7068",
    y: "32.3449",
    width: "5",
    height: "2",
    rx: "1",
    transform: "rotate(-46.6871 13.7068 32.3449)",
    stroke: "#CED0D0"
  }), h("rect", {
    x: "25.1593",
    y: "27.7068",
    width: "6.75811",
    height: "2",
    rx: "1",
    transform: "rotate(46.5714 25.1593 27.7068)",
    stroke: "#CED0D0"
  }), h("rect", {
    x: "24.1593",
    y: "30.7068",
    width: "5.0521",
    height: "2",
    rx: "1",
    transform: "rotate(46.5714 24.1593 30.7068)",
    stroke: "#CED0D0"
  }), h("rect", {
    x: "23.1593",
    y: "32.7068",
    width: "4.00411",
    height: "2",
    rx: "1",
    transform: "rotate(46.5714 23.1593 32.7068)",
    stroke: "#CED0D0"
  }), h("rect", {
    x: "16.0217",
    y: "34.011",
    width: "4.08213",
    height: "1.85284",
    rx: "0.926421",
    transform: "rotate(-46.6871 16.0217 34.011)",
    stroke: "#CED0D0"
  }), h("rect", {
    x: "18.012",
    y: "35.3533",
    width: "3.63714",
    height: "1.81773",
    rx: "0.908864",
    transform: "rotate(-46.6871 18.012 35.3533)",
    stroke: "#CED0D0"
  }), h("rect", {
    x: "20.7068",
    y: "35.9407",
    width: "1.69582",
    height: "1.54106",
    rx: "0.770532",
    transform: "rotate(-46.6871 20.7068 35.9407)",
    stroke: "#CED0D0"
  }), h("rect", {
    x: "12.4631",
    y: "30.4473",
    width: "4.08213",
    height: "1.87598",
    rx: "0.937991",
    transform: "rotate(-46.6871 12.4631 30.4473)",
    stroke: "#CED0D0"
  }), h("path", {
    d: "M32.8333 8H11.1667C10.5684 8 10.0833 8.44772 10.0833 9V25.5H9V9C9 7.89543 9.97005 7 11.1667 7H32.8333C34.03 7 35 7.89543 35 9V25.5H33.9167V9C33.9167 8.44772 33.4316 8 32.8333 8ZM32.8333 36C33.4316 36 33.9167 35.5523 33.9167 35V30.5H35V35C35 36.1046 34.0299 37 32.8333 37H28.5V36H32.8333ZM11.1667 37C9.97005 37 9 36.1046 9 35V31H10.0833V35C10.0833 35.5523 10.5684 36 11.1667 36H15.5V37H11.1667Z",
    fill: "#CED0D0"
  }));
};
var LanguageEnIcon = function LanguageEnIcon() {
  return h("svg", {
    width: "46",
    height: "44",
    viewBox: "0 0 46 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M15.4905 23.5606C15.3735 23.5606 15.2749 23.5206 15.1948 23.4405C15.1147 23.3604 15.0747 23.2618 15.0747 23.1448V17.5362C15.0747 17.4191 15.1147 17.3206 15.1948 17.2405C15.2749 17.1542 15.3735 17.1111 15.4905 17.1111H19.1957C19.3066 17.1111 19.399 17.1512 19.4729 17.2312C19.553 17.3052 19.593 17.3976 19.593 17.5084C19.593 17.6193 19.553 17.7117 19.4729 17.7856C19.399 17.8596 19.3066 17.8965 19.1957 17.8965H15.9155V19.9385H18.8631C18.974 19.9385 19.0664 19.9786 19.1403 20.0587C19.2204 20.1326 19.2604 20.225 19.2604 20.3359C19.2604 20.4467 19.2204 20.5391 19.1403 20.6131C19.0664 20.687 18.974 20.7239 18.8631 20.7239H15.9155V22.7752H19.1957C19.3066 22.7752 19.399 22.8152 19.4729 22.8953C19.553 22.9692 19.593 23.0616 19.593 23.1725C19.593 23.2834 19.553 23.3758 19.4729 23.4497C19.399 23.5236 19.3066 23.5606 19.1957 23.5606H15.4905Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M20.2664 23.6068C20.1494 23.6068 20.0508 23.5668 19.9707 23.4867C19.8906 23.4066 19.8506 23.308 19.8506 23.191V19.2271C19.8506 19.11 19.8906 19.0115 19.9707 18.9314C20.0508 18.8451 20.1494 18.802 20.2664 18.802C20.3834 18.802 20.482 18.8451 20.5621 18.9314C20.6483 19.0115 20.6914 19.11 20.6914 19.2271V19.6059C20.9255 19.3472 21.1781 19.1408 21.4491 18.9868C21.7201 18.8328 22.0405 18.7558 22.4101 18.7558C22.7489 18.7558 23.0415 18.8359 23.2879 18.9961C23.5404 19.1562 23.7314 19.3749 23.8607 19.6521C23.9963 19.9293 24.064 20.2342 24.064 20.5669V23.191C24.064 23.308 24.0209 23.4066 23.9347 23.4867C23.8546 23.5668 23.756 23.6068 23.639 23.6068C23.5219 23.6068 23.4234 23.5668 23.3433 23.4867C23.2632 23.4066 23.2232 23.308 23.2232 23.191V20.6593C23.2232 19.9077 22.8844 19.532 22.2068 19.532C21.8988 19.532 21.6216 19.6121 21.3752 19.7722C21.1349 19.9324 20.907 20.148 20.6914 20.419V23.191C20.6914 23.308 20.6483 23.4066 20.5621 23.4867C20.482 23.5668 20.3834 23.6068 20.2664 23.6068Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M26.7934 25.7782C26.4361 25.7782 26.0758 25.732 25.7123 25.6396C25.3489 25.5472 25.0501 25.4332 24.816 25.2977C24.7052 25.23 24.6497 25.1222 24.6497 24.9743C24.6497 24.8758 24.6836 24.7864 24.7514 24.7064C24.8253 24.6324 24.9146 24.5955 25.0193 24.5955C25.0686 24.5955 25.124 24.6078 25.1856 24.6324C25.6538 24.8665 26.162 24.9836 26.7102 24.9836C27.6527 24.9836 28.124 24.4815 28.124 23.4774V22.8584C27.6866 23.3265 27.1599 23.5606 26.5439 23.5606C26.1805 23.5606 25.8263 23.4713 25.4813 23.2926C25.1425 23.1078 24.8622 22.8368 24.6405 22.4795C24.4187 22.1161 24.3078 21.6757 24.3078 21.1582C24.3078 20.6408 24.4187 20.2034 24.6405 19.8461C24.8622 19.4827 25.1425 19.2117 25.4813 19.033C25.8263 18.8482 26.1805 18.7558 26.5439 18.7558C27.1599 18.7558 27.6866 18.9899 28.124 19.4581V19.2271C28.124 19.11 28.164 19.0115 28.2441 18.9314C28.3242 18.8451 28.4227 18.802 28.5398 18.802C28.6568 18.802 28.7553 18.8451 28.8354 18.9314C28.9217 19.0115 28.9648 19.11 28.9648 19.2271V23.3573C28.9648 24.1335 28.7769 24.731 28.4012 25.1499C28.0254 25.5688 27.4895 25.7782 26.7934 25.7782ZM26.7195 22.7937C27.009 22.7937 27.2646 22.7321 27.4864 22.6089C27.7082 22.4857 27.9207 22.3194 28.124 22.1099V20.2065C27.9207 19.9971 27.7082 19.8307 27.4864 19.7075C27.2646 19.5843 27.009 19.5227 26.7195 19.5227C26.2575 19.5227 25.8786 19.6644 25.583 19.9478C25.2934 20.225 25.1487 20.6285 25.1487 21.1582C25.1487 21.688 25.2934 22.0945 25.583 22.3779C25.8786 22.6551 26.2575 22.7937 26.7195 22.7937Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M33.2289 9.77777H11.4432C9.6489 9.77777 8.75176 9.77777 8.06643 10.133C7.4636 10.4454 6.97349 10.944 6.66633 11.5573C6.31714 12.2544 6.31714 13.167 6.31714 14.9923V27.3768C6.31714 29.2021 6.31714 30.1147 6.66633 30.8118C6.97349 31.4251 7.4636 31.9237 8.06643 32.2361C8.75176 32.5913 9.6489 32.5913 11.4432 32.5913C12.1509 32.5913 12.7247 33.175 12.7247 33.895V35.8504C12.7247 36.5218 13.4782 36.9051 14.0062 36.5022L17.7653 33.6342C18.2725 33.2473 18.5261 33.0538 18.8054 32.9164C19.0532 32.7945 19.3154 32.7056 19.5855 32.6519C19.89 32.5913 20.207 32.5913 20.841 32.5913H33.2289C35.0232 32.5913 35.9203 32.5913 36.6057 32.2361C37.2085 31.9237 37.6986 31.4251 38.0058 30.8118C38.355 30.1147 38.355 29.2021 38.355 27.3768V14.9923C38.355 13.167 38.355 12.2544 38.0058 11.5573C37.6986 10.944 37.2085 10.4454 36.6057 10.133C35.9203 9.77777 35.0232 9.77777 33.2289 9.77777Z",
    stroke: "#CED0D0",
    "stroke-width": "1.14421"
  }));
};
var LanguagefrIcon = function LanguagefrIcon() {
  return h("svg", {
    width: "46",
    height: "44",
    viewBox: "0 0 46 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M12.0857 8.55557H34.8616C36.7375 8.55557 37.6754 8.55557 38.3919 8.91079C39.0221 9.22325 39.5345 9.72183 39.8556 10.3351C40.2207 11.0322 40.2207 11.9448 40.2207 13.7701V26.1546C40.2207 27.9799 40.2207 28.8925 39.8556 29.5896C39.5345 30.2029 39.0221 30.7015 38.3919 31.0139C37.6754 31.3691 36.7375 31.3691 34.8616 31.3691C34.1217 31.3691 33.5219 31.9528 33.5219 32.6728V34.6282C33.5219 35.2996 32.7341 35.6829 32.1821 35.28L28.2521 32.412C27.7219 32.0251 27.4568 31.8316 27.1648 31.6942C26.9058 31.5723 26.6316 31.4834 26.3492 31.4297C26.0309 31.3691 25.6995 31.3691 25.0367 31.3691H12.0857C10.2098 31.3691 9.2719 31.3691 8.55542 31.0139C7.92519 30.7015 7.4128 30.2029 7.09168 29.5896C6.72661 28.8925 6.72661 27.9799 6.72661 26.1546V13.7701C6.72661 11.9448 6.72661 11.0322 7.09168 10.3351C7.4128 9.72183 7.92519 9.22325 8.55542 8.91079C9.2719 8.55557 10.2098 8.55557 12.0857 8.55557Z",
    stroke: "#CED0D0",
    "stroke-width": "1.19622"
  }), h("path", {
    d: "M19.3286 23.516C19.1911 23.516 19.0754 23.469 18.9814 23.375C18.8873 23.2809 18.8403 23.1652 18.8403 23.0278V16.388C18.8403 16.2506 18.8873 16.1348 18.9814 16.0408C19.0754 15.9395 19.1911 15.8889 19.3286 15.8889H23.549C23.6791 15.8889 23.7876 15.9359 23.8744 16.03C23.9685 16.1168 24.0155 16.2252 24.0155 16.3554C24.0155 16.4856 23.9685 16.5941 23.8744 16.6809C23.7876 16.7677 23.6791 16.8111 23.549 16.8111H19.8276V19.2088H23.1692C23.2994 19.2088 23.4079 19.2558 23.4947 19.3499C23.5887 19.4367 23.6358 19.5452 23.6358 19.6753C23.6358 19.8055 23.5887 19.914 23.4947 20.0008C23.4079 20.0876 23.2994 20.131 23.1692 20.131H19.8276V23.0278C19.8276 23.1652 19.777 23.2809 19.6757 23.375C19.5817 23.469 19.466 23.516 19.3286 23.516Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M25.3288 23.516C25.1914 23.516 25.0757 23.469 24.9817 23.375C24.8876 23.2809 24.8406 23.1652 24.8406 23.0278V18.3734C24.8406 18.236 24.8876 18.1203 24.9817 18.0262C25.0757 17.925 25.1914 17.8743 25.3288 17.8743C25.4663 17.8743 25.582 17.925 25.676 18.0262C25.7773 18.1203 25.8279 18.236 25.8279 18.3734V18.8399C26.3342 18.16 26.902 17.8201 27.5313 17.8201H27.5855C27.7229 17.8201 27.835 17.8671 27.9218 17.9611C28.0159 18.0552 28.0629 18.1709 28.0629 18.3083C28.0629 18.4457 28.0159 18.5579 27.9218 18.6447C27.8278 18.7314 27.7085 18.7748 27.5638 18.7748H27.5096C27.1624 18.7748 26.8441 18.8616 26.5548 19.0352C26.2655 19.2016 26.0232 19.433 25.8279 19.7296V23.0278C25.8279 23.1652 25.7773 23.2809 25.676 23.375C25.582 23.469 25.4663 23.516 25.3288 23.516Z",
    fill: "#CED0D0"
  }));
};
var RelativesIcon = function RelativesIcon() {
  return h("svg", {
    width: "45",
    height: "44",
    viewBox: "0 0 45 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M36.25 39.0663C36.1171 39.0663 35.9897 39.0135 35.8958 38.9196C35.8018 38.8257 35.749 38.6982 35.749 38.5654V32.554C35.749 32.4211 35.8018 32.2937 35.8958 32.1998C35.9897 32.1058 36.1171 32.053 36.25 32.053C36.3828 32.053 36.5103 32.1058 36.6042 32.1998C36.6982 32.2937 36.7509 32.4211 36.7509 32.554V38.5654C36.7509 38.6982 36.6982 38.8257 36.6042 38.9196C36.5103 39.0135 36.3828 39.0663 36.25 39.0663Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M37.7533 33.0552H27.7343C27.6643 33.0552 27.5951 33.0405 27.5311 33.0121C27.4671 32.9837 27.4098 32.9422 27.3628 32.8903C27.3159 32.8384 27.2803 32.7772 27.2584 32.7107C27.2366 32.6442 27.2289 32.5738 27.2359 32.5041L28.1852 22.5302C28.0573 22.5174 27.9393 22.4559 27.8554 22.3585C27.7716 22.261 27.7285 22.1351 27.7349 22.0067C27.7413 21.8784 27.7969 21.7574 27.89 21.6688C27.9831 21.5802 28.1068 21.5308 28.2353 21.5309H28.7362C28.8062 21.5305 28.8755 21.5449 28.9396 21.573C29.0037 21.6011 29.0612 21.6423 29.1084 21.694C29.1556 21.7457 29.1915 21.8067 29.2136 21.873C29.2358 21.9394 29.2438 22.0097 29.2372 22.0794L28.2854 32.0508H37.2023L36.253 22.0794C36.2464 22.0099 36.2543 21.9399 36.2763 21.8736C36.2984 21.8074 36.334 21.7466 36.3809 21.6949C36.4278 21.6433 36.485 21.602 36.5488 21.5737C36.6126 21.5455 36.6816 21.5309 36.7514 21.5309H37.2524C37.3809 21.5308 37.5045 21.5802 37.5976 21.6688C37.6908 21.7574 37.7463 21.8784 37.7528 22.0067C37.7592 22.1351 37.716 22.261 37.6322 22.3585C37.5484 22.4559 37.4303 22.5174 37.3025 22.5302L38.2543 32.5041C38.2613 32.574 38.2536 32.6446 38.2315 32.7113C38.2095 32.7779 38.1737 32.8393 38.1265 32.8912C38.0793 32.9432 38.0216 32.9846 37.9573 33.0129C37.893 33.0411 37.8235 33.0555 37.7533 33.0552Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M32.7436 39.0663C32.6108 39.0663 32.4834 39.0135 32.3894 38.9196C32.2955 38.8257 32.2427 38.6982 32.2427 38.5654V32.554C32.2427 32.4211 32.2955 32.2937 32.3894 32.1998C32.4834 32.1058 32.6108 32.053 32.7436 32.053C32.8765 32.053 33.0039 32.1058 33.0979 32.1998C33.1918 32.2937 33.2446 32.4211 33.2446 32.554V38.5654C33.2446 38.6982 33.1918 38.8257 33.0979 38.9196C33.0039 39.0135 32.8765 39.0663 32.7436 39.0663Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M29.2373 39.0663C29.1044 39.0663 28.977 39.0135 28.8831 38.9196C28.7891 38.8257 28.7363 38.6982 28.7363 38.5654V32.554C28.7363 32.4211 28.7891 32.2937 28.8831 32.1998C28.977 32.1058 29.1044 32.053 29.2373 32.053C29.3701 32.053 29.4976 32.1058 29.5915 32.1998C29.6855 32.2937 29.7382 32.4211 29.7382 32.554V38.5654C29.7382 38.6982 29.6855 38.8257 29.5915 38.9196C29.4976 39.0135 29.3701 39.0663 29.2373 39.0663Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M26.7326 29.5489H25.7307C25.6613 29.5492 25.5925 29.5349 25.5288 29.5072C25.4651 29.4794 25.4079 29.4387 25.3608 29.3876C25.3137 29.3366 25.2777 29.2762 25.2551 29.2105C25.2326 29.1448 25.224 29.0751 25.2298 29.0059L25.9507 20.4787C26.5764 16.8929 28.75 15.0214 32.2411 15.0214H33.243C34.7308 15.0214 35.9892 15.361 36.9836 16.0313C37.0402 16.0671 37.0891 16.1139 37.1273 16.169C37.1655 16.224 37.1923 16.2861 37.2061 16.3517C37.2198 16.4173 37.2203 16.485 37.2075 16.5507C37.1946 16.6165 37.1687 16.679 37.1313 16.7346C37.0938 16.7902 37.0456 16.8376 36.9895 16.8743C36.9334 16.9109 36.8705 16.9358 36.8046 16.9477C36.7386 16.9596 36.6709 16.9581 36.6056 16.9434C36.5402 16.9286 36.4785 16.9009 36.424 16.8619C35.5979 16.3053 34.5279 16.0233 33.243 16.0233H32.2411C29.2163 16.0233 27.4821 17.5226 26.9431 20.607L26.2738 28.547H26.7306C26.8635 28.547 26.9909 28.5998 27.0849 28.6937C27.1788 28.7877 27.2316 28.9151 27.2316 29.048C27.2316 29.1808 27.1788 29.3082 27.0849 29.4022C26.9909 29.4961 26.8635 29.5489 26.7306 29.5489H26.7326Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M39.7569 29.549H38.755C38.6221 29.549 38.4947 29.4962 38.4008 29.4022C38.3068 29.3083 38.254 29.1809 38.254 29.048C38.254 28.9152 38.3068 28.7877 38.4008 28.6938C38.4947 28.5998 38.6221 28.5471 38.755 28.5471H39.2119L38.5386 20.5629C38.4581 20.1081 38.3387 19.6609 38.1819 19.2264C38.1593 19.1646 38.1491 19.0989 38.1518 19.0332C38.1545 18.9674 38.1702 18.9028 38.1979 18.8431C38.2256 18.7834 38.2648 18.7298 38.3132 18.6852C38.3617 18.6407 38.4184 18.6061 38.4802 18.5834C38.542 18.5608 38.6077 18.5506 38.6735 18.5533C38.7392 18.5561 38.8038 18.5717 38.8635 18.5994C38.9232 18.6271 38.9769 18.6663 39.0214 18.7148C39.066 18.7632 39.1006 18.8199 39.1232 18.8818C39.3048 19.3864 39.4414 19.906 39.5315 20.4347L40.2578 29.0059C40.2637 29.0752 40.2551 29.1449 40.2325 29.2106C40.21 29.2763 40.174 29.3366 40.1269 29.3877C40.0798 29.4388 40.0225 29.4795 39.9588 29.5072C39.8951 29.535 39.8264 29.5492 39.7569 29.549Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M16.956 39.0665C16.8232 39.0665 16.6957 39.0137 16.6018 38.9198C16.5078 38.8258 16.4551 38.6984 16.4551 38.5656V33.5561C16.4551 33.4232 16.5078 33.2958 16.6018 33.2018C16.6957 33.1079 16.8232 33.0551 16.956 33.0551C17.0889 33.0551 17.2163 33.1079 17.3102 33.2018C17.4042 33.2958 17.457 33.4232 17.457 33.5561V38.5656C17.457 38.6984 17.4042 38.8258 17.3102 38.9198C17.2163 39.0137 17.0889 39.0665 16.956 39.0665Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M25.9726 39.0665C25.8398 39.0665 25.7123 39.0138 25.6184 38.9198C25.5244 38.8259 25.4717 38.6985 25.4717 38.5656V31.5523C25.4717 31.4195 25.5244 31.292 25.6184 31.1981C25.7123 31.1041 25.8398 31.0514 25.9726 31.0514C26.1055 31.0514 26.2329 31.1041 26.3268 31.1981C26.4208 31.292 26.4736 31.4195 26.4736 31.5523V38.5656C26.4736 38.6985 26.4208 38.8259 26.3268 38.9198C26.2329 39.0138 26.1055 39.0665 25.9726 39.0665Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M21.4643 39.0664C21.3315 39.0664 21.204 39.0136 21.1101 38.9197C21.0161 38.8257 20.9634 38.6983 20.9634 38.5655V28.5465C20.9634 28.4136 21.0161 28.2862 21.1101 28.1923C21.204 28.0983 21.3315 28.0455 21.4643 28.0455C21.5972 28.0455 21.7246 28.0983 21.8185 28.1923C21.9125 28.2862 21.9653 28.4136 21.9653 28.5465V38.5655C21.9653 38.6983 21.9125 38.8257 21.8185 38.9197C21.7246 39.0136 21.5972 39.0664 21.4643 39.0664Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M27.4859 15.8109C27.4145 15.8109 27.3438 15.7956 27.2788 15.766C27.2137 15.7365 27.1557 15.6933 27.1087 15.6395C26.1825 14.5795 24.9236 14.0195 23.4683 14.0195H18.4588C16.416 14.0195 15.8289 14.3075 15.1025 14.7814C14.9913 14.8545 14.8557 14.8804 14.7255 14.8535C14.5952 14.8266 14.481 14.749 14.4079 14.6379C14.3348 14.5268 14.3089 14.3911 14.3358 14.2609C14.3627 14.1306 14.4403 14.0164 14.5514 13.9433C15.5293 13.3031 16.3253 13.0176 18.4548 13.0176H23.4643C25.1921 13.0176 26.7525 13.7149 27.8586 14.9803C27.9219 15.0527 27.963 15.1418 27.977 15.237C27.991 15.3321 27.9774 15.4292 27.9376 15.5168C27.8979 15.6044 27.8338 15.6787 27.753 15.7308C27.6722 15.783 27.5781 15.8108 27.4819 15.8109H27.4859Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M21.4637 12.0152C19.3662 12.0152 17.957 10.4047 17.957 8.00765C17.957 5.61061 19.3662 4.00006 21.4637 4.00006C23.5611 4.00006 24.9703 5.61061 24.9703 8.00765C24.9703 10.4047 23.5596 12.0152 21.4637 12.0152ZM21.4637 5.00196C19.6152 5.00196 18.9589 6.62103 18.9589 8.00765C18.9589 9.39428 19.6152 11.0133 21.4637 11.0133C23.3122 11.0133 23.9684 9.39428 23.9684 8.00765C23.9684 6.62103 23.3122 5.00196 21.4637 5.00196Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M16.8898 32.3652H16.4711C16.3456 32.3649 16.2248 32.3174 16.1326 32.2323C16.0404 32.1472 15.9835 32.0305 15.9732 31.9055C15.9628 31.7804 15.9998 31.656 16.0768 31.5569C16.1538 31.4578 16.2652 31.3912 16.3889 31.3703V23.7794C16.3889 21.8162 14.7588 20.2192 12.7555 20.2192H10.1345C9.95686 20.223 9.77954 20.2372 9.60353 20.2618L9.47127 20.2773C9.33852 20.2918 9.16471 20.3229 9.09157 20.3855C9.0158 20.448 8.92773 20.4939 8.83308 20.5203C8.71796 20.5448 8.59788 20.528 8.49391 20.4728C8.38994 20.4176 8.30872 20.3276 8.26449 20.2185C8.22027 20.1095 8.21586 19.9883 8.25204 19.8763C8.28823 19.7643 8.36269 19.6686 8.46238 19.606C8.61817 19.4788 8.86012 19.3375 9.35956 19.2814L9.4858 19.2669C9.70086 19.2373 9.91749 19.2206 10.1345 19.2168H12.7555C15.3103 19.2168 17.3908 21.2637 17.3908 23.7789V31.8637C17.3909 31.9296 17.3779 31.9948 17.3528 32.0556C17.3277 32.1164 17.2908 32.1717 17.2442 32.2183C17.1977 32.2649 17.1425 32.3018 17.0817 32.327C17.0208 32.3522 16.9557 32.3652 16.8898 32.3652Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M6.419 32.3656H6.00022C5.86736 32.3656 5.73993 32.3129 5.64598 32.2189C5.55204 32.125 5.49927 31.9975 5.49927 31.8647V24.2352C5.49884 23.5925 5.6246 22.9559 5.86945 22.3617C5.92007 22.2388 6.01744 22.141 6.14013 22.0899C6.26282 22.0388 6.4008 22.0385 6.52369 22.0892C6.64659 22.1398 6.74434 22.2371 6.79545 22.3598C6.84656 22.4825 6.84683 22.6205 6.79621 22.7434C6.60084 23.2165 6.50059 23.7234 6.50117 24.2352V31.3707C6.6249 31.3917 6.73625 31.4583 6.81323 31.5574C6.89022 31.6565 6.92722 31.7808 6.9169 31.9059C6.90657 32.031 6.84966 32.1476 6.75746 32.2327C6.66527 32.3179 6.54449 32.3653 6.419 32.3656Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M8.09538 39.0669C7.96252 39.0669 7.83511 39.0141 7.74117 38.9201C7.64722 38.8262 7.59443 38.6988 7.59443 38.5659V25.6574C7.4707 25.6365 7.35935 25.5699 7.28236 25.4708C7.20538 25.3717 7.16837 25.2473 7.1787 25.1223C7.18903 24.9972 7.24594 24.8806 7.33813 24.7955C7.43033 24.7103 7.55111 24.6629 7.67659 24.6626H8.09538C8.22824 24.6626 8.35567 24.7153 8.44961 24.8093C8.54356 24.9032 8.59633 25.0307 8.59633 25.1635V38.5659C8.59633 38.6317 8.58337 38.6968 8.55819 38.7576C8.53302 38.8184 8.49613 38.8736 8.44961 38.9201C8.4031 38.9666 8.34788 39.0035 8.2871 39.0287C8.22632 39.0539 8.16116 39.0669 8.09538 39.0669Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M11.4455 39.0664C11.3127 39.0664 11.1852 39.0137 11.0913 38.9197C10.9973 38.8258 10.9446 38.6984 10.9446 38.5655V31.0262C10.9446 30.8934 10.9973 30.7659 11.0913 30.672C11.1852 30.578 11.3127 30.5253 11.4455 30.5253C11.5784 30.5253 11.7058 30.578 11.7997 30.672C11.8937 30.7659 11.9465 30.8934 11.9465 31.0262V38.5655C11.9465 38.6984 11.8937 38.8258 11.7997 38.9197C11.7058 39.0137 11.5784 39.0664 11.4455 39.0664Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M11.4453 18.5438C9.89233 18.5438 8.84985 17.3325 8.84985 15.5301C8.84985 13.7276 9.89283 12.5164 11.4453 12.5164C12.9977 12.5164 14.0422 13.7266 14.0422 15.5301C14.0422 17.3335 12.9977 18.5438 11.4453 18.5438ZM11.4453 13.5183C9.96697 13.5183 9.85175 15.0577 9.85175 15.5301C9.85175 16.5024 10.2705 17.5419 11.4453 17.5419C12.62 17.5419 13.0403 16.5024 13.0403 15.5301C13.0403 15.0577 12.9236 13.5183 11.4453 13.5183Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M14.7942 39.0669C14.6613 39.0669 14.5339 39.0141 14.4399 38.9202C14.346 38.8262 14.2932 38.6988 14.2932 38.5659V25.1631C14.2932 25.0302 14.346 24.9028 14.4399 24.8088C14.5339 24.7149 14.6613 24.6621 14.7942 24.6621H15.2129C15.3384 24.6625 15.4592 24.7099 15.5514 24.795C15.6436 24.8801 15.7005 24.9968 15.7108 25.1218C15.7212 25.2469 15.6842 25.3713 15.6072 25.4704C15.5302 25.5695 15.4188 25.6361 15.2951 25.657V38.5659C15.2951 38.6988 15.2423 38.8262 15.1484 38.9202C15.0545 39.0141 14.927 39.0669 14.7942 39.0669Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M6.86172 22.9998C6.6599 23.0003 6.4604 22.9568 6.27709 22.8723C6.09378 22.7879 5.93105 22.6646 5.80021 22.5109L5.33382 21.9644C5.09449 21.6829 4.97646 21.318 5.00556 20.9497C5.03467 20.5814 5.20853 20.2396 5.4891 19.9991L6.41737 19.2071C6.69893 18.9679 7.06382 18.8499 7.43216 18.8791C7.80049 18.9083 8.14225 19.0823 8.38259 19.3629L8.84846 19.9105C9.08792 20.1919 9.20605 20.5568 9.17694 20.9252C9.14783 21.2936 8.97387 21.6354 8.69319 21.8757L7.76492 22.6672C7.51311 22.8822 7.19281 23.0001 6.86172 22.9998ZM7.06809 19.9696L6.13984 20.7611C6.06147 20.8287 6.01288 20.9244 6.00462 21.0276C5.99637 21.1307 6.02913 21.233 6.09576 21.3121L6.56264 21.8587C6.63007 21.9373 6.72585 21.986 6.82909 21.9943C6.93232 22.0025 7.03462 21.9696 7.11368 21.9027L8.04144 21.1112C8.11981 21.0437 8.16841 20.9479 8.17666 20.8448C8.18491 20.7416 8.15215 20.6394 8.08552 20.5602L7.61913 20.0132C7.55142 19.935 7.45567 19.8866 7.35256 19.8784C7.24945 19.8703 7.14725 19.903 7.06809 19.9696Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M38.1384 19.5631C37.8076 19.5634 37.4877 19.445 37.2367 19.2295L36.309 18.438C36.0282 18.1979 35.854 17.8562 35.8247 17.4879C35.7954 17.1196 35.9133 16.7548 36.1527 16.4733L36.6196 15.9262C36.8594 15.6451 37.2011 15.4707 37.5695 15.4414C37.938 15.4121 38.3029 15.5303 38.5843 15.7699L39.512 16.5619C39.7932 16.8019 39.9677 17.1438 39.9969 17.5123C40.0261 17.8808 39.9077 18.2459 39.6678 18.5272L39.2014 19.0737C39.0829 19.2136 38.9377 19.3286 38.7743 19.4119C38.6109 19.4953 38.4325 19.5453 38.2496 19.5591C38.2126 19.5616 38.1745 19.5631 38.1384 19.5631ZM37.6795 16.4387C37.6225 16.4384 37.5661 16.4506 37.5142 16.4743C37.4623 16.498 37.4161 16.5327 37.379 16.576L36.9121 17.1235C36.8453 17.2026 36.8125 17.3049 36.8208 17.4081C36.829 17.5113 36.8777 17.607 36.9562 17.6745L37.8844 18.466C37.9234 18.4999 37.9687 18.5254 38.0178 18.5413C38.0669 18.5571 38.1186 18.5629 38.17 18.5582C38.2212 18.5543 38.2712 18.5403 38.3171 18.517C38.3629 18.4937 38.4036 18.4616 38.437 18.4225L38.9034 17.8754C38.9701 17.7963 39.0029 17.6941 38.9947 17.591C38.9866 17.4878 38.9381 17.392 38.8598 17.3244L37.9325 16.5319C37.8616 16.4716 37.7716 16.4386 37.6785 16.4387H37.6795Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M32.9944 14.0188C31.0768 14.0188 29.7383 12.4739 29.7383 10.2617C29.7383 8.04953 31.0768 6.50461 32.9944 6.50461C33.1273 6.50461 33.2547 6.55739 33.3487 6.65133C33.4426 6.74528 33.4954 6.8727 33.4954 7.00556C33.4954 7.13842 33.4426 7.26583 33.3487 7.35978C33.2547 7.45373 33.1273 7.50651 32.9944 7.50651C31.3303 7.50651 30.7402 8.99082 30.7402 10.2617C30.7402 11.5326 31.3303 13.0169 32.9944 13.0169C34.6586 13.0169 35.2487 11.5326 35.2487 10.2617C35.2546 9.80245 35.174 9.34617 35.0113 8.91667C34.9649 8.79352 34.9689 8.65707 35.0223 8.5368C35.0757 8.41654 35.1743 8.32213 35.2967 8.27396C35.4192 8.2258 35.5557 8.22774 35.6767 8.27939C35.7977 8.33104 35.8936 8.42823 35.9435 8.54997C36.1527 9.09615 36.2569 9.67691 36.2506 10.2617C36.2506 12.4739 34.9116 14.0188 32.9944 14.0188Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M35.4745 9.22834C34.1625 9.22834 32.9512 8.38224 32.5284 7.17044C32.5067 7.10831 32.4975 7.04252 32.5013 6.97684C32.5051 6.91115 32.5218 6.84685 32.5504 6.78761C32.5791 6.72837 32.6191 6.67535 32.6682 6.63158C32.7173 6.58781 32.7746 6.55413 32.8367 6.53249C32.8989 6.51085 32.9646 6.50165 33.0303 6.50544C33.096 6.50922 33.1603 6.5259 33.2195 6.55453C33.2788 6.58316 33.3318 6.62318 33.3756 6.67231C33.4194 6.72143 33.453 6.77869 33.4747 6.84083C33.7547 7.64234 34.5958 8.22645 35.4745 8.22645C35.6073 8.22645 35.7347 8.27922 35.8287 8.37317C35.9226 8.46712 35.9754 8.59453 35.9754 8.72739C35.9754 8.86025 35.9226 8.98767 35.8287 9.08162C35.7347 9.17556 35.6073 9.22834 35.4745 9.22834Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M36.6114 13.7653C36.4832 13.7655 36.3598 13.7166 36.2666 13.6286C36.1735 13.5405 36.1175 13.4202 36.1104 13.2922C36.1033 13.1642 36.1455 13.0383 36.2283 12.9405C36.3112 12.8427 36.4284 12.7804 36.5558 12.7664C36.6717 12.754 36.7856 12.7452 36.8975 12.7398C36.9766 12.7375 37.0543 12.7179 37.125 12.6825C37.1958 12.647 37.258 12.5965 37.3072 12.5345C37.3493 12.4821 37.3793 12.4211 37.3951 12.3558C37.411 12.2905 37.4123 12.2226 37.3989 12.1567C37.2351 11.3497 37.2306 10.4064 37.2271 9.71762C37.2271 9.53427 37.2271 9.36696 37.2216 9.22068C37.1659 6.99296 36.0869 5.8032 34.0155 5.68448L32.6629 5.66995H32.6284C31.1901 5.66995 28.9098 6.62726 28.8211 9.22668L28.8111 9.58887C28.7951 10.2772 28.7726 11.2195 28.6062 12.0606C28.5903 12.1364 28.5915 12.2149 28.6096 12.2902C28.6277 12.3656 28.6623 12.436 28.7109 12.4964C28.753 12.549 28.8064 12.5916 28.8671 12.6209C28.9277 12.6502 28.9942 12.6655 29.0616 12.6657C29.2389 12.6659 29.416 12.6761 29.5921 12.6963C29.7241 12.7115 29.8446 12.7785 29.9272 12.8826C30.0098 12.9867 30.0477 13.1193 30.0325 13.2513C30.0172 13.3833 29.9502 13.5039 29.8461 13.5864C29.742 13.669 29.6094 13.7069 29.4774 13.6916C29.338 13.6761 29.1979 13.6681 29.0576 13.6676C28.8422 13.667 28.6296 13.6185 28.4353 13.5256C28.241 13.4327 28.0697 13.2978 27.934 13.1306C27.7915 12.956 27.6896 12.752 27.6356 12.5333C27.5816 12.3145 27.5769 12.0865 27.6219 11.8657C27.7722 11.1093 27.7927 10.2166 27.8082 9.56483L27.8188 9.19212C27.9315 5.88837 30.8124 4.66956 32.6279 4.66956H32.6669L34.0455 4.68509C35.5789 4.77225 38.1263 5.47308 38.2194 9.19664C38.2234 9.34692 38.224 9.52325 38.225 9.71411C38.2285 10.3979 38.2325 11.248 38.3753 11.9594C38.4171 12.1674 38.4132 12.3821 38.3638 12.5885C38.3144 12.7949 38.2207 12.9881 38.0892 13.1546C37.9507 13.3306 37.7757 13.4743 37.5761 13.5758C37.3765 13.6772 37.1572 13.734 36.9335 13.7422C36.8458 13.7463 36.7542 13.7533 36.6625 13.7638C36.6455 13.7651 36.6284 13.7656 36.6114 13.7653Z",
    fill: "#CED0D0"
  }));
};
var InfoIcon = function InfoIcon() {
  return h("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 19 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("circle", {
    cx: "9.5",
    cy: "9.5",
    r: "9.5",
    fill: "#CED0D0"
  }), h("path", {
    d: "M9.54244 7.59998C8.93789 7.59998 8.46289 8.07498 8.46289 8.67952V14.4659C8.46289 15.0704 8.93789 15.5454 9.54244 15.5454C10.147 15.5454 10.622 15.0704 10.622 14.4659V8.67952C10.622 8.07498 10.147 7.59998 9.54244 7.59998Z",
    fill: "white"
  }), h("path", {
    d: "M9.41419 6.30452C10.0619 6.30452 10.6233 5.78635 10.6233 5.09544C10.6233 4.44771 10.1051 3.88635 9.41419 3.88635C8.76646 3.88635 8.20508 4.40453 8.20508 5.09544C8.24826 5.74317 8.76646 6.30452 9.41419 6.30452Z",
    fill: "white"
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "fsdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "cdd678acce64e0943c9828db719221d4.webp");

/***/ }),

/***/ "gdic":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"sidebar":"sidebar__+lnjO","report":"report__0e2nB","sidebarGrid":"sidebarGrid__v6Xt1","mobileview":"mobileview__uYIU+","resubmit":"resubmit__oSkc7","reportBox":"reportBox__JTBFn","reportGrid":"reportGrid__cY21S","reportCard":"reportCard__Xq2pJ","reportCardBlurred":"reportCardBlurred__Ft5ml","reportCardTitle":"reportCardTitle__Y1VJi","reportLoaderBody":"reportLoaderBody__+wlKG","reportLoaderWrapper":"reportLoaderWrapper__Z6b6D","reportLoader":"reportLoader__kd3ig","loader1":"loader1__eOljv","loader2":"loader2__FbB7M","loader3":"loader3__wauzM","loader4":"loader4__uZRpZ","reportLoaderWrapperContent":"reportLoaderWrapperContent__f1CKK","reportCardFooter":"reportCardFooter__4vIvz","formContainer":"formContainer__-h5rO","formTitle":"formTitle__rKtBp","formGrid":"formGrid__AfLtb","formBox":"formBox__3jqhN","formContent":"formContent__RccAs","formFieldTel":"formFieldTel__k+yVm","loader-icon":"loader-icon__F8p6u","formField":"formField__a0tu1","errorMsg":"errorMsg__INLwD","results":"results__VABbx","pageTitle":"pageTitle__ewL8F","desktopview":"desktopview__OA3bX"});

/***/ }),

/***/ "hc4W":
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "httU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "1b4d714492a4669f03734ef6a13f984f.webp");

/***/ }),

/***/ "i3YD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "705400e4837a3a1e29c5110366fd8555.svg");

/***/ }),

/***/ "iNmH":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("+Sw5");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "iWpb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSpecKeys = exports.checkNavigable = exports.changeSlide = exports.canUseDOM = exports.canGoNext = void 0;
exports.clamp = clamp;
exports.swipeStart = exports.swipeMove = exports.swipeEnd = exports.slidesOnRight = exports.slidesOnLeft = exports.slideHandler = exports.siblingDirection = exports.safePreventDefault = exports.lazyStartIndex = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.keyHandler = exports.initializedState = exports.getWidth = exports.getTrackLeft = exports.getTrackCSS = exports.getTrackAnimateCSS = exports.getTotalSlides = exports.getSwipeDirection = exports.getSlideCount = exports.getRequiredLazySlides = exports.getPreClones = exports.getPostClones = exports.getOnDemandLazySlides = exports.getNavigableIndexes = exports.getHeight = exports.extractObject = void 0;
var _react = _interopRequireDefault(__webpack_require__("l8WD"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = function safePreventDefault(event) {
  var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];
  if (!passiveEvents.includes(event._reactName)) {
    event.preventDefault();
  }
};
exports.safePreventDefault = safePreventDefault;
var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }
  return onDemandSlides;
}; // return list of slides that need to be present

exports.getOnDemandLazySlides = getOnDemandLazySlides;
var getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }
  return requiredSlides;
}; // startIndex that needs to be present

exports.getRequiredLazySlides = getRequiredLazySlides;
var lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};
exports.lazyStartIndex = lazyStartIndex;
var lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};
exports.lazyEndIndex = lazyEndIndex;
var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
exports.lazySlidesOnLeft = lazySlidesOnLeft;
var lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
}; // get width of an element

exports.lazySlidesOnRight = lazySlidesOnRight;
var getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};
exports.getWidth = getWidth;
var getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};
exports.getHeight = getHeight;
var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);
  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }
  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }
  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }
  return "vertical";
}; // whether or not we can go next

exports.getSwipeDirection = getSwipeDirection;
var canGoNext = function canGoNext(spec) {
  var canGo = true;
  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }
  return canGo;
}; // given an object and a list of keys, return new object with given keys

exports.canGoNext = canGoNext;
var extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
}; // get initialized state

exports.extractObject = extractObject;
var initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react["default"].Children.count(spec.children);
  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;
  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }
    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }
  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;
  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }
  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }));
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };
  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }
  return state;
};
exports.initializedState = initializedState;
var slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
    animating = spec.animating,
    fade = spec.fade,
    infinite = spec.infinite,
    index = spec.index,
    slideCount = spec.slideCount,
    lazyLoad = spec.lazyLoad,
    currentSlide = spec.currentSlide,
    centerMode = spec.centerMode,
    slidesToScroll = spec.slidesToScroll,
    slidesToShow = spec.slidesToShow,
    useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
    finalSlide,
    animationLeft,
    finalLeft;
  var state = {},
    nextState = {};
  var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};
    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }
    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }
    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;
    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }
    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }
    animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: finalSlide
    }));
    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }
    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
        currentSlide: animationSlide
      })));
    }
    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide: targetSlide
      };
    }
  }
  return {
    state: state,
    nextState: nextState
  };
};
exports.slideHandler = slideHandler;
var changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
    slidesToShow = spec.slidesToShow,
    slideCount = spec.slideCount,
    currentSlide = spec.currentSlide,
    previousTargetSlide = spec.targetSlide,
    lazyLoad = spec.lazyLoad,
    infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;
    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;
    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;
    if (infinite) {
      var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
        targetSlide: targetSlide
      }));
      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }
  return targetSlide;
};
exports.changeSlide = changeSlide;
var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};
exports.keyHandler = keyHandler;
var swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && safePreventDefault(e);
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};
exports.swipeStart = swipeStart;
var swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
    animating = spec.animating,
    vertical = spec.vertical,
    swipeToSlide = spec.swipeToSlide,
    verticalSwiping = spec.verticalSwiping,
    rtl = spec.rtl,
    currentSlide = spec.currentSlide,
    edgeFriction = spec.edgeFriction,
    edgeDragged = spec.edgeDragged,
    onEdge = spec.onEdge,
    swiped = spec.swiped,
    swiping = spec.swiping,
    slideCount = spec.slideCount,
    slidesToScroll = spec.slidesToScroll,
    infinite = spec.infinite,
    touchObject = spec.touchObject,
    swipeEvent = spec.swipeEvent,
    listHeight = spec.listHeight,
    listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return safePreventDefault(e);
  if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
  var swipeLeft,
    state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }
  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;
  if (!infinite) {
    if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;
      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }
  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }
  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }
  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }
  state = _objectSpread(_objectSpread({}, state), {}, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: swipeLeft
    }))
  });
  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }
  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    safePreventDefault(e);
  }
  return state;
};
exports.swipeMove = swipeMove;
var swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
    swipe = spec.swipe,
    touchObject = spec.touchObject,
    listWidth = spec.listWidth,
    touchThreshold = spec.touchThreshold,
    verticalSwiping = spec.verticalSwiping,
    listHeight = spec.listHeight,
    swipeToSlide = spec.swipeToSlide,
    scrolling = spec.scrolling,
    onSwipe = spec.onSwipe,
    targetSlide = spec.targetSlide,
    currentSlide = spec.currentSlide,
    infinite = spec.infinite;
  if (!dragging) {
    if (swipe) safePreventDefault(e);
    return {};
  }
  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };
  if (scrolling) {
    return state;
  }
  if (!touchObject.swipeLength) {
    return state;
  }
  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e);
    if (onSwipe) {
      onSwipe(swipeDirection);
    }
    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;
    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;
      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;
      default:
        slideCount = activeSlide;
    }
    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: currentLeft
    }));
  }
  return state;
};
exports.swipeEnd = swipeEnd;
var getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];
  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }
  return indexes;
};
exports.getNavigableIndexes = getNavigableIndexes;
var checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;
  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }
      prevNavigable = navigables[n];
    }
  }
  return index;
};
exports.checkNavigable = checkNavigable;
var getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }
      return true;
    });
    if (!swipedSlide) {
      return 0;
    }
    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};
exports.getSlideCount = getSlideCount;
var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};
exports.checkSpecKeys = checkSpecKeys;
var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }
  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };
  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread(_objectSpread({}, style), {}, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }
  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight; // Fallback for IE8

  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }
  return style;
};
exports.getTrackCSS = getTrackCSS;
var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
exports.getTrackAnimateCSS = getTrackAnimateCSS;
var getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }
  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
    trackRef = spec.trackRef,
    infinite = spec.infinite,
    centerMode = spec.centerMode,
    slideCount = spec.slideCount,
    slidesToShow = spec.slidesToShow,
    slidesToScroll = spec.slidesToScroll,
    slideWidth = spec.slideWidth,
    listWidth = spec.listWidth,
    variableWidth = spec.variableWidth,
    slideHeight = spec.slideHeight,
    fade = spec.fade,
    vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;
  if (fade || spec.slideCount === 1) {
    return 0;
  }
  var slidesToOffset = 0;
  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    } // shift current slide to center of the frame

    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }
    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }
  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;
  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }
  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;
      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }
      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }
  return targetLeft;
};
exports.getTrackLeft = getTrackLeft;
var getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  if (spec.variableWidth) {
    return spec.slideCount;
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
exports.getPreClones = getPreClones;
var getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  return spec.slideCount;
};
exports.getPostClones = getPostClones;
var getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
exports.getTotalSlides = getTotalSlides;
var siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }
    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }
    return "left";
  }
};
exports.siblingDirection = siblingDirection;
var slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
    centerMode = _ref.centerMode,
    rtl = _ref.rtl,
    centerPadding = _ref.centerPadding;

  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }
  if (rtl) {
    return 0;
  }
  return slidesToShow - 1;
};
exports.slidesOnRight = slidesOnRight;
var slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
    centerMode = _ref2.centerMode,
    rtl = _ref2.rtl,
    centerPadding = _ref2.centerPadding;

  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }
  if (rtl) {
    return slidesToShow - 1;
  }
  return 0;
};
exports.slidesOnLeft = slidesOnLeft;
var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
exports.canUseDOM = canUseDOM;

/***/ }),

/***/ "iXzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }
      return false;
    });
    return result;
  }
  return (/** @class */function () {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function get() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @param {*} key
       * @returns {*}
       */
      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */
      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);
        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);
        if (~index) {
          entries.splice(index, 1);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      /**
       * @returns {void}
       */
      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */
      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }
  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }
  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  }
  // eslint-disable-next-line no-new-func
  return Function('return this')();
}();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }
  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
}();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle(callback, delay) {
  var leadingCall = false,
    trailingCall = false,
    lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */
    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */
    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */
  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */
  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);
    // Remove observer if it's present in registry.
    if (~index) {
      observers.splice(index, 1);
    }
    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */
  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();
    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */
  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    }
    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */
  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
      propertyName = _b === void 0 ? '' : _b;
    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */
  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }
    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */
  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
}();

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = function defineConfigurable(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = function getWindowOf(target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  // Return the local global object if it's not possible extract one from
  // provided element.
  return ownerGlobal || global$1;
};

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
    clientHeight = target.clientHeight;
  // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.
  var width = toFloat(styles.width),
    height = toFloat(styles.height);
  // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).
  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  }
  // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.
  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens
  return function (target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
  };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
  var x = _a.x,
    y = _a.y,
    width = _a.width,
    height = _a.height;
  // If DOMRectReadOnly is available use it as a prototype for the rectangle.
  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  // Rectangle's properties are not writable and non-enumerable.
  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */
    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */
  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */
  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation;
}();
var ResizeObserverEntry = /** @class */function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, {
      target: target,
      contentRect: contentRect
    });
  }
  return ResizeObserverEntry;
}();
var ResizeObserverSPI = /** @class */function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */
    this.observations_ = new MapShim();
    if (typeof callback !== 'function') {
      throw new TypeError('The callback provided as parameter 1 is not a function.');
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is already being observed.
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    // Force the update of observations.
    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */
  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI;
}();

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "jFWS":
/***/ (function(module, exports) {

var camel2hyphen = function camel2hyphen(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  }).toLowerCase();
};
module.exports = camel2hyphen;

/***/ }),

/***/ "jffb":
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;

/***/ }),

/***/ "jnkz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _components_canada_district_home_cdForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sO9k");
/* harmony import */ var _components_canada_district_home_cdReview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4B82");
/* harmony import */ var _components_canada_district_home_cdService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bX5n");
/* harmony import */ var _components_canada_district_home_cdbannerversion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LlMT");
/* harmony import */ var _components_canada_district_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("drx9");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7APR");






var CDHomeVersion = function CDHomeVersion() {
  return h(_components_canada_district_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdHome
  }, h(_components_canada_district_home_cdbannerversion__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), h(_components_canada_district_home_cdService__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h(_components_canada_district_home_cdForm__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null), h(_components_canada_district_home_cdReview__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)));
};
/* harmony default export */ __webpack_exports__["a"] = (CDHomeVersion);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "kd9Q":
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
  var i = 0,
    length = collection.length,
    cont;
  for (i; i < length; i++) {
    cont = fn(collection[i], i);
    if (cont === false) {
      break; //allow early exit
    }
  }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
  return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
  return typeof target === 'function';
}
module.exports = {
  isFunction: isFunction,
  isArray: isArray,
  each: each
};

/***/ }),

/***/ "kluZ":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "l8WD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushSync", function() { return hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTransition", function() { return dn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeferredValue", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInsertionEffect", function() { return yn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSyncExternalStore", function() { return _n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return mn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return un; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["createRef"]; });

/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["l"]; });

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




function g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n, t) {
  return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function w(n) {
  this.props = n;
}
function R(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(w.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__["Component"]()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var x = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n) {
  function t(t) {
    var e = g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var A = function A(n, t) {
    return null == n ? null : Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n).map(t));
  },
  O = {
    map: A,
    forEach: A,
    count: function count(n) {
      return n ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n).length : 0;
    },
    only: function only(n) {
      var t = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"]
  },
  T = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  T(n, t, e, r);
};
var I = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function L(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  })), n;
}
function U(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return U(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function M(n) {
  var e, r, u;
  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n.default || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(r, o);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function V() {
  this.u = null, this.o = null;
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
}, (D.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__["Component"]()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = F(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;
          r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, D.prototype.componentWillUnmount = function () {
  this.t = [];
}, D.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, n.fallback);
  return i && (i.__h = null), [Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, e.__a ? null : n.children), i];
};
var W = function W(n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function P(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function $(n) {
  var e = this,
    r = n.i;
  e.componentWillUnmount = function () {
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function appendChild(n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function insertBefore(n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(P, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function j(n, e) {
  var r = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])($, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}
(V.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__["Component"]()).__a = function (n) {
  var t = this,
    e = F(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, V.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    W(n, e, t);
  });
};
var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  H = "undefined" != typeof document,
  Z = function Z(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n);
  };
function Y(n, t, e) {
  return null == t.__k && (t.textContent = ""), Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function q(n, t, e) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
preact__WEBPACK_IMPORTED_MODULE_0__["Component"].prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__["Component"].prototype, t, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var G = preact__WEBPACK_IMPORTED_MODULE_0__["options"].event;
function J() {}
function K() {
  return this.cancelBubble;
}
function Q() {
  return this.defaultPrevented;
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].event = function (n) {
  return G && (n = G(n)), n.persist = J, n.isPropagationStopped = K, n.isDefaultPrevented = Q, n.nativeEvent = n;
};
var X,
  nn = {
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
  tn = preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode = function (n) {
  var t = n.type,
    e = n.props,
    u = e;
  if ("string" == typeof t) {
    var o = -1 === t.indexOf("-");
    for (var i in u = {}, e) {
      var l = e[i];
      H && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Z(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && B.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
    }
    "select" == t && u.multiple && Array.isArray(u.value) && (u.value = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(e.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == t && null != u.defaultValue && (u.value = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(e.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
  }
  n.$$typeof = z, tn && tn(n);
};
var en = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  en && en(n), X = n.__c;
};
var rn = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return X.__n[n.__c].props.value;
        }
      }
    }
  },
  un = "17.0.2";
function on(n) {
  return preact__WEBPACK_IMPORTED_MODULE_0__["createElement"].bind(null, n);
}
function ln(n) {
  return !!n && n.$$typeof === z;
}
function cn(n) {
  return ln(n) ? preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"].apply(null, arguments) : n;
}
function fn(n) {
  return !!n.__k && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(null, n), !0);
}
function an(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var sn = function sn(n, t) {
    return n(t);
  },
  hn = function hn(n, t) {
    return n(t);
  },
  vn = preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
function dn(n) {
  n();
}
function pn(n) {
  return n;
}
function mn() {
  return [!1, dn];
}
var yn = preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useLayoutEffect */ "h"];
function _n(n, t) {
  var e = t(),
    r = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"])({
      h: {
        __: e,
        v: t
      }
    }),
    u = r[0].h,
    o = r[1];
  return Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useLayoutEffect */ "h"])(function () {
    u.__ = e, u.v = t, E(u.__, t()) || o({
      h: u
    });
  }, [n, e, t]), Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "d"])(function () {
    return E(u.__, u.v()) || o({
      h: u
    }), n(function () {
      E(u.__, u.v()) || o({
        h: u
      });
    });
  }, [n]), e;
}
var bn = {
  useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"],
  useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useId */ "f"],
  useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useReducer */ "j"],
  useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "d"],
  useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useLayoutEffect */ "h"],
  useInsertionEffect: yn,
  useTransition: mn,
  useDeferredValue: pn,
  useSyncExternalStore: _n,
  startTransition: dn,
  useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useRef */ "k"],
  useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useImperativeHandle */ "g"],
  useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "i"],
  useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useCallback */ "a"],
  useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useContext */ "b"],
  useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useDebugValue */ "c"],
  version: "17.0.2",
  Children: O,
  render: Y,
  hydrate: q,
  unmountComponentAtNode: fn,
  createPortal: j,
  createElement: preact__WEBPACK_IMPORTED_MODULE_0__["createElement"],
  createContext: preact__WEBPACK_IMPORTED_MODULE_0__["createContext"],
  createFactory: on,
  cloneElement: cn,
  createRef: preact__WEBPACK_IMPORTED_MODULE_0__["createRef"],
  Fragment: preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
  isValidElement: ln,
  findDOMNode: an,
  Component: preact__WEBPACK_IMPORTED_MODULE_0__["Component"],
  PureComponent: w,
  memo: R,
  forwardRef: k,
  flushSync: hn,
  unstable_batchedUpdates: sn,
  StrictMode: vn,
  Suspense: D,
  SuspenseList: V,
  lazy: M,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rn
};


/***/ }),

/***/ "lUS9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSlider = void 0;
var _react = _interopRequireDefault(__webpack_require__("l8WD"));
var _initialState = _interopRequireDefault(__webpack_require__("NgIc"));
var _lodash = _interopRequireDefault(__webpack_require__("jffb"));
var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));
var _innerSliderUtils = __webpack_require__("iWpb");
var _track = __webpack_require__("wMKW");
var _dots = __webpack_require__("6oRp");
var _arrows = __webpack_require__("BoRb");
var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__("iXzu"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _extends() {
  _extends = Object.assign || function (target) {
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
var InnerSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(InnerSlider, _React$Component);
  var _super = _createSuper(InnerSlider);
  function InnerSlider(props) {
    var _this;
    _classCallCheck(this, InnerSlider);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
      return _this.list = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));
        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.onInit && _this.props.onInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);
      _this.updateState(spec, true, function () {
        _this.adaptHeight();
        _this.props.autoplay && _this.autoPlay("update");
      });
      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }
      _this.ro = new _resizeObserverPolyfill["default"](function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation

          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });
      _this.ro.observe(_this.list);
      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });
      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }
      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }
      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });
        _this.callbackTimers = [];
      }
      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      _this.ro.disconnect();
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      _this.checkImagesLoad();
      _this.props.onReInit && _this.props.onReInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      } // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }

      _this.adaptHeight();
      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      var setTrackStyle = _this.didPropsChange(prevProps);
      setTrackStyle && _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }
        if (_this.props.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);
      _this.debouncedResize();
    });
    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node); // prevent warning: setting state on unmounted component (server side rendering)

      if (!isTrackMounted) return;
      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      }); // animating state should be cleared while resizing, otherwise autoplay stops working

      _this.setState({
        animating: false
      });
      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });
    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }
      _this.setState(updatedState, callback);
    });
    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
          _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });
        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }
        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }
        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }
        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };
        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }
        return {
          trackStyle: _trackStyle
        };
      }
      var childrenCount = _react["default"].Children.count(_this.props.children);
      var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });
      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      };
    });
    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
      var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
      var imagesCount = images.length,
        loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };
        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();
              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;
            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
      var slidesToLoad = [];
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }
      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
        asNavFor = _this$props.asNavFor,
        beforeChange = _this$props.beforeChange,
        onLazyLoad = _this$props.onLazyLoad,
        speed = _this$props.speed,
        afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;
      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
          index: index
        }, _this.props), _this.state), {}, {
          trackRef: _this.track,
          useCSS: _this.props.useCSS && !dontAnimate
        })),
        state = _slideHandler.state,
        nextState = _slideHandler.nextState;
      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }
      _this.setState(state, function () {
        // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
        if (asNavFor && _this.asNavForIndex !== index) {
          _this.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
            firstBatch = _objectWithoutProperties(nextState, ["animating"]);
          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));
            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;
      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
      _this.props.autoplay && _this.autoPlay("update");
      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");
        nodes[0] && nodes[0].focus();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.clickable = true;
    });
    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });
    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
      _this.changeSlide(options);
    });
    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    });
    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });
    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }
      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      if (state["swiping"]) {
        _this.clickable = false;
      }
      _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];
      _this.setState(state);
      if (triggerSlideHandler === undefined) return;
      _this.slideHandler(triggerSlideHandler);
      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "touchEnd", function (e) {
      _this.swipeEnd(e);
      _this.clickable = true;
    });
    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var nextIndex;
      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }
      _this.slideHandler(nextIndex);
    });
    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      var autoplaying = _this.state.autoplaying;
      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }
      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
      _this.setState({
        autoplaying: "playing"
      });
    });
    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }
      var autoplaying = _this.state.autoplaying;
      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });
    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });
    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots;
      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = /*#__PURE__*/_react["default"].createElement(_dots.Dots, dotProps);
      }
      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;
      if (_this.props.arrows) {
        prevArrow = /*#__PURE__*/_react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = /*#__PURE__*/_react["default"].createElement(_arrows.NextArrow, arrowProps);
      }
      var verticalHeightStyle = null;
      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }
      var centerPaddingStyle = null;
      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }
      var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr",
        style: _this.props.style
      };
      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className
        };
      }
      return /*#__PURE__*/_react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), /*#__PURE__*/_react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });
    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
      currentSlide: _this.props.initialSlide,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    var ssrState = _this.ssrInit();
    _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
    return _this;
  }
  _createClass(InnerSlider, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;
      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];
        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }
        if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function") {
          continue;
        }
        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }
      return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
    }
  }]);
  return InnerSlider;
}(_react["default"].Component);
exports.InnerSlider = InnerSlider;

/***/ }),

/***/ "lxfW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"cdfooter":"cdfooter__P6g8p","cdcontainer":"cdcontainer__8w70c","cdfooterPay":"cdfooterPay__39R43","cdfooterDetail":"cdfooterDetail__02K24"});

/***/ }),

/***/ "nJ17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var _assets_thankyou_thankyou_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aqZz");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("drx9");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b2z7");



var CDThankYou = function CDThankYou() {
  return h(Fragment, null, h(_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].thankyou
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].container
  }, h("img", {
    src: _assets_thankyou_thankyou_webp__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    alt: "thankyou"
  }), h("h2", null, "Thank You!"), h("p", null, "An immigration professional will contact you shortly to complete your profile evaluation and discuss the next steps.")))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDThankYou);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "nOXW":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
var toPrimitive = __webpack_require__("s9iv");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "nuWQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("okHz");
/* harmony import */ var _assets_results_bell_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CpeD");
/* harmony import */ var _components_results_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5hT1");
/* harmony import */ var _components_results_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+LEj");
/* harmony import */ var _components_results_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("79EO");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BaaC");






//import { useEffect } from "preact/hooks";

var Results = function Results() {
  var handleClickScroll = function handleClickScroll(id) {
    var element = document.getElementById("form-result");
    window.gtag("event", "select_content", {
      item_id: id
    });
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  // useEffect(()=>{
  // window.addEventListener("scroll",()=>console.log(window.scrollY))
  // return()=>{
  //   window.removeEventListener("scroll",console.log("helll"))
  // }
  // },[])
  return h(_components_layout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].results,
    id: "result"
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].container
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].pageTitle
  }, h("h2", null, "Your results ", h("img", {
    src: _assets_results_bell_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "bell"
  })), h("p", null, "Your profile analysis is complete! Please find your results below.")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].resultGrid
  }, h(_components_results_sidebar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    result: JSON.parse(localStorage.getItem("result"))
  }), h(_components_results_report__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    handleClickScroll: handleClickScroll
  })), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].callToForm,
    id: "form-result"
  }, h(_components_results_form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)))));
};
/* harmony default export */ __webpack_exports__["a"] = (Results);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "nxTg":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("+3YS");
var iterableToArrayLimit = __webpack_require__("S411");
var unsupportedIterableToArray = __webpack_require__("Zhxd");
var nonIterableRest = __webpack_require__("+bRE");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "okHz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qinx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QyV/");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Brh3");




var Layout = function Layout(_ref) {
  var children = _ref.children;
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (window.location.pathname !== '/result/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    window.addEventListener('load', function () {
      window.gtag({
        event: 'page_view'
      }, {
        page_location: window.location.href
      });
    });
    return function () {
      window.removeEventListener('load', function () {});
    };
  }, []);
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].layout
  }, h(_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].wrapper
  }, children), h(_footer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["a"] = (Layout);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "ox/y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Match = undefined;
var _extends = Object.assign || function (target) {
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
var _preact = __webpack_require__("HteQ");
var _preactRouter = __webpack_require__("Y3FI");
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Match = exports.Match = function (_Component) {
  _inherits(Match, _Component);
  function Match() {
    var _temp, _this, _ret;
    _classCallCheck(this, Match);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
      _this.nextUrl = url;
      _this.setState({});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Match.prototype.componentDidMount = function componentDidMount() {
    _preactRouter.subscribers.push(this.update);
  };
  Match.prototype.componentWillUnmount = function componentWillUnmount() {
    _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
  };
  Match.prototype.render = function render(props) {
    var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
      path = url.replace(/\?.+$/, '');
    this.nextUrl = null;
    return props.children({
      url: url,
      path: path,
      matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
    });
  };
  return Match;
}(_preact.Component);
var Link = function Link(_ref) {
  var activeClassName = _ref.activeClassName,
    path = _ref.path,
    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);
  return (0, _preact.h)(Match, {
    path: path || props.href
  }, function (_ref2) {
    var matches = _ref2.matches;
    return (0, _preact.h)(_preactRouter.Link, _extends({}, props, {
      'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ')
    }));
  });
};
exports.Link = Link;
exports.default = Match;
Match.Link = Link;

/***/ }),

/***/ "pSyp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "d10cbe7920ac7bd5a135ef87dd01c7f2.webp");

/***/ }),

/***/ "qTIA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EbY7");
/* harmony import */ var _assets_home_calltoaction_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VorK");


var CallToAction = function CallToAction() {
  var handleScroll = function handleScroll() {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      var position = document.getElementById("instantForm");
      position.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToAction
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToActionContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToActionGrid
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToActionCover
  }, h("video", {
    width: "296",
    height: "296",
    autoplay: true,
    muted: true
  }, h("source", {
    src: _assets_home_calltoaction_mp4__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    type: "video/mp4"
  }))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToActionContent
  }, h("h2", null, "Discover Your Options within ", h("span", null, "2 minutes!")), h("span", {
    onClick: function onClick() {
      return handleScroll();
    },
    role: "presentation"
  }, "Go to Form")))));
};
/* harmony default export */ __webpack_exports__["a"] = (CallToAction);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "qinx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rS5q");

var Footer = function Footer() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].footer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].container
  }, h("p", null, "UIS Canada is a private immigration company that specializes in helping people make a fresh start in Canada. We provide a range of services to support immigrants as they navigate their new lives in Canada. We will help you improve your language skills, search for jobs, fill out paperwork and guide you until you successfully complete your process."), h("p", null, h("a", {
    href: "tel:+16042623728"
  }, "+1-604-262-3728"), "   ", h("a", {
    href: "mailto:support@uiscanada.com"
  }, "support@uiscanada.com"))));
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "rS5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"footer":"footer__DGBa9","container":"container__eare5"});

/***/ }),

/***/ "s9iv":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "sO9k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6OLs");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UpPA");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y3FI");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XruS");
/* harmony import */ var _alert_errorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("bLYV");
/* harmony import */ var _assets_header_loader_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9WSe");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("l8WD");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var CDForm = function CDForm() {
  var customStyles = {
    option: function option(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: "#fff",
        color: "#333",
        fontWeight: "500",
        fontSize: "16px",
        padding: "4px 10px",
        lineHeight: "24px",
        cursor: "pointer",
        ":hover": {
          background: "#F1EEFB",
          borderRadius: 8
        }
      });
    },
    menu: function menu(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: "#ffffff",
        padding: "15px"
      });
    },
    control: function control() {
      return {
        background: "#ffffff",
        border: "2px solid #CED0D0",
        borderRadius: "6px",
        padding: "0px 10px",
        color: "#333333",
        display: "flex",
        alignItem: "center",
        height: "40px",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px"
      };
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "#333",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px"
      });
    },
    errorStyle: function errorStyle(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        border: "2px solid red"
      });
    }
  };
  var checkUrl = typeof window !== "undefined" && window.location.pathname === "/homeversion";
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formContent
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formContainer
  }, h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formSection, " ").concat(checkUrl ? _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formBgversion : _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formBg)
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formContents
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formText
  }, h("h4", null, "Immigrate to Canada in a few ", h("span", null, "easy steps")), h("p", null, "Fill out the form to make sure you meet the Canadian government requirements.")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formCd
  }, h(Form, {
    customStyles: customStyles
  }))))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDForm);
var Form = function Form(_ref) {
  var customStyles = _ref.customStyles;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useState */ "l"])({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      age: "",
      income: "",
      engLevel: "",
      country: "",
      check: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useState */ "l"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useState */ "l"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useState */ "l"])(),
    _useState8 = _slicedToArray(_useState7, 2),
    message = _useState8[0],
    setShowMessage = _useState8[1];
  var _useState9 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useState */ "l"])([]),
    _useState10 = _slicedToArray(_useState9, 2),
    countries = _useState10[0],
    setCountries = _useState10[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    if (name === "check") {
      return setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, e.target.checked)));
    }
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "")));
  };
  var checkEmail = /^[A-Za-z0-9.]{2,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,10}$/;
  var handleOnblur = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (e) {
      var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value,
        placeholder = _e$target2.placeholder;
      if (value === "") {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "".concat(placeholder, " is required"))));
      } else if (name === "email" && !checkEmail.test(value)) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "Email not valid")));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "")));
      }
    });
    return function handleOnblur(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSelectBlur = function handleSelectBlur(val, name, erName) {
    if (values[name] === "") {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "".concat(erName, " is required"))));
    } else if (val.value !== "") {
      setErrors(_defineProperty({}, name, ""));
    }
  };
  var handleSelectChange = function handleSelectChange(val, name) {
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, val.value)));
  };
  var getCountries = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      var countryDetail = [];
      try {
        var res = yield fetch("https://restcountries.com/v2/all");
        var jsonData = yield res.json();
        if ((jsonData === null || jsonData === void 0 ? void 0 : jsonData.length) > 0) {
          jsonData === null || jsonData === void 0 ? void 0 : jsonData.forEach(function (el) {
            countryDetail.push({
              countryCode: el.alpha2Code,
              name: el.name
            });
            setCountries(countryDetail);
          });
        }
      } catch (err) {
        var _err$response, _err$response$data, _err$response2, _err$response2$data;
        setShowMessage((err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.msg) || (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : _err$response2$data.message) || "Something went wrong");
      }
    });
    return function getCountries() {
      return _ref3.apply(this, arguments);
    };
  }();
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    getCountries();
  }, []);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        if (values.firstName === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            firstName: "First Name is required"
          }));
        } else if (values.lastName === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            lastName: "Last Name is required"
          }));
        } else if (values.email === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            email: "Email is required"
          }));
        } else if (values.phoneNumber === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            phoneNumber: "Phone number is required"
          }));
        } else if (values.age === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            age: "Age is required"
          }));
        } else if (values.income === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            income: "Income is required"
          }));
        } else if (values.engLevel === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            engLevel: "English level is required"
          }));
        }
        setLoading(true);
        var payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          Age_score__c: values.age,
          Income_score__c: values.income,
          Level_of_English_score__c: values.engLevel,
          Passport_Holder_score__c: values.country
        };
        var response = yield fetch("https://service.uiscanada.com/forms/consult", {
          method: "POST",
          // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
        var status = response.status;
        if (status === 200) {
          setLoading(false);
          Object(preact_router__WEBPACK_IMPORTED_MODULE_2__["route"])("/thankyou/");
        }
      } catch (err) {
        var _err$response3, _err$response3$data, _err$response4, _err$response4$data;
        setLoading(false);
        setShowMessage((err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : _err$response3$data.msg) || (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : _err$response4$data.message) || "Something went wrong");
      }
    });
    return function handleSubmit(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var closeAction = function closeAction() {
    setShowMessage("");
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formMainContent,
    id: "Why"
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formFieldGrid
  }, h("form", {
    onSubmit: handleSubmit
  }, h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.firstName ? _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].errorMsg : ""),
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    value: values === null || values === void 0 ? void 0 : values.firstName,
    onChange: handleChange,
    onBlur: handleOnblur
  }), (errors === null || errors === void 0 ? void 0 : errors.firstName) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.firstName), h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.lastName ? _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].errorMsg : ""),
    type: "text",
    name: "lastName",
    value: values === null || values === void 0 ? void 0 : values.lastName,
    placeholder: "Last Name",
    onChange: handleChange,
    onBlur: handleOnblur
  }), (errors === null || errors === void 0 ? void 0 : errors.lastName) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.lastName), h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.email ? _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].errorMsg : ""),
    type: "text",
    name: "email",
    value: values === null || values === void 0 ? void 0 : values.email,
    placeholder: "Email Address",
    onChange: handleChange,
    onBlur: handleOnblur
  }), (errors === null || errors === void 0 ? void 0 : errors.email) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.email), h(react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default.a, {
    country: "de",
    value: values === null || values === void 0 ? void 0 : values.phone,
    inputProps: {
      name: "phoneNumber",
      required: true,
      autoFocus: false,
      className: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formField, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formFieldTel, " ").concat(errors !== null && errors !== void 0 && errors.phoneNumber ? _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].errorMsg : "")
    },
    onChange: function onChange(e) {
      return handleChange({
        target: {
          name: "phoneNumber",
          value: "+".concat(e)
        }
      });
    }
  }), (errors === null || errors === void 0 ? void 0 : errors.phoneNumber) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.phoneNumber), h(SelectAge, {
    customStyles: customStyles,
    handleSelectChange: handleSelectChange,
    onBlur: handleSelectBlur,
    errors: errors
  }), h(SelectIncome, {
    customStyles: customStyles,
    handleSelectChange: handleSelectChange,
    onBlur: handleSelectBlur,
    errors: errors
  }), h(SelectLevel, {
    customStyles: customStyles,
    handleSelectChange: handleSelectChange,
    onBlur: handleSelectBlur,
    errors: errors
  }), h(SelectCountry, {
    customStyles: customStyles,
    countries: countries,
    handleSelectChange: handleSelectChange,
    onBlur: handleSelectBlur,
    errors: errors
  }), console.log("Values-->", values.check), h("button", {
    type: "submit",
    disabled: loading || !values.check
  }, "Check Your Eligibility \xA0", " ", loading && h("img", {
    src: _assets_header_loader_gif__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    alt: "",
    className: "loader-icon"
  })), h("label", null, h("input", {
    type: "checkbox",
    name: "check",
    defaultChecked: true,
    value: values === null || values === void 0 ? void 0 : values.check,
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), h("p", null, "By clicking on 'Check Your Eligibility\u2019, you are agreeing to our .", h("a", {
    href: "https://canadadistrict.com/termconditions",
    target: "_blank",
    rel: "noreferrer"
  }, "T&C"), " ", "and", " ", h("a", {
    href: "https://canadadistrict.com/privacypolicy",
    target: "_blank",
    rel: "noreferrer"
  }, "Privacy Policy"), ".")))), message !== "" && message ? h(_alert_errorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    message: message,
    closeAction: closeAction
  }) : null);
};
var SelectAge = function SelectAge(_ref5) {
  var customStyles = _ref5.customStyles,
    handleSelectChange = _ref5.handleSelectChange,
    _onBlur = _ref5.onBlur,
    errors = _ref5.errors;
  var options = [{
    value: "18-20",
    label: "18-20"
  }, {
    value: "21-25",
    label: "21-25"
  }, {
    value: "26-30",
    label: "26-30"
  }, {
    value: "31-35",
    label: "31-35"
  }, {
    value: "36-39",
    label: "36-39"
  }, {
    value: "40-49",
    label: "40-49"
  }, {
    value: "50-59",
    label: "50-59"
  }, {
    value: "60-69",
    label: "60-69"
  }, {
    value: "70+",
    label: "70+"
  }];
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formSelectContent
  }, h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: options,
    placeholder: "Your age",
    styles: customStyles,
    onChange: function onChange(e) {
      return handleSelectChange(e, "age");
    },
    onBlur: function onBlur(e) {
      return _onBlur(e, "age", "Age");
    },
    classNamePrefix: "react-select",
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors.age ? "error-msg" : "")
  }), (errors === null || errors === void 0 ? void 0 : errors.age) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.age));
};
var SelectIncome = function SelectIncome(_ref6) {
  var customStyles = _ref6.customStyles,
    handleSelectChange = _ref6.handleSelectChange,
    _onBlur2 = _ref6.onBlur,
    errors = _ref6.errors;
  var options = [{
    value: "0-1500",
    label: "0-1500"
  }, {
    value: "1500-3000",
    label: "1500-3000"
  }, {
    value: "3000-5000",
    label: "3000-5000"
  }, {
    value: "5000-10000",
    label: "5000-10000"
  }, {
    value: "10000+",
    label: "10000+"
  }];
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formSelectContent
  }, h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: options,
    placeholder: "Your Monthly income ($)",
    styles: customStyles,
    onChange: function onChange(e) {
      return handleSelectChange(e, "income");
    },
    onBlur: function onBlur(e) {
      return _onBlur2(e, "income", "Income");
    },
    classNamePrefix: "react-select",
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors.income ? "error-msg" : "")
  }), (errors === null || errors === void 0 ? void 0 : errors.income) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.income));
};
var SelectLevel = function SelectLevel(_ref7) {
  var customStyles = _ref7.customStyles,
    handleSelectChange = _ref7.handleSelectChange,
    _onBlur3 = _ref7.onBlur,
    errors = _ref7.errors;
  var options = [{
    value: "Fluent",
    label: "Fluent"
  }, {
    value: "Very high",
    label: "Very high"
  }, {
    value: "High",
    label: "High"
  }, {
    value: "Basic",
    label: "Basic"
  }, {
    value: "Low",
    label: "Low"
  }, {
    value: "Not at all",
    label: "Not at all"
  }];
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formSelectContent
  }, h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: options,
    placeholder: "English level",
    styles: customStyles,
    onChange: function onChange(e) {
      return handleSelectChange(e, "engLevel");
    },
    onBlur: function onBlur(e) {
      return _onBlur3(e, "engLevel", "English level");
    },
    classNamePrefix: "react-select",
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors.engLevel ? "error-msg" : "")
  }), (errors === null || errors === void 0 ? void 0 : errors.engLevel) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.engLevel));
};
var SelectCountry = function SelectCountry(_ref8) {
  var customStyles = _ref8.customStyles,
    countries = _ref8.countries,
    handleSelectChange = _ref8.handleSelectChange,
    _onBlur4 = _ref8.onBlur,
    errors = _ref8.errors;
  var options = [];
  if (countries.length > 0) {
    countries.forEach(function (el) {
      options.push({
        value: el.name,
        label: el.name
      });
    });
  }
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].formSelectContent
  }, h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: options,
    placeholder: "Select Country",
    styles: customStyles,
    onChange: function onChange(e) {
      return handleSelectChange(e, "country");
    },
    onBlur: function onBlur(e) {
      return _onBlur4(e, "country", "Country");
    },
    classNamePrefix: "react-select",
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors.country ? "error-msg" : "")
  }), (errors === null || errors === void 0 ? void 0 : errors.country) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.country));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "tCvC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "tJXC":
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__("w24S");
var Util = __webpack_require__("kd9Q");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch() {
  if (!window.matchMedia) {
    throw new Error('matchMedia not present, legacy browsers require a polyfill');
  }
  this.queries = {};
  this.browserIsIncapable = !window.matchMedia('only all').matches;
}
MediaQueryDispatch.prototype = {
  constructor: MediaQueryDispatch,
  /**
   * Registers a handler for the given media query
   *
   * @param {string} q the media query
   * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
   * @param {function} options.match fired when query matched
   * @param {function} [options.unmatch] fired when a query is no longer matched
   * @param {function} [options.setup] fired when handler first triggered
   * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
   * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
   */
  register: function register(q, options, shouldDegrade) {
    var queries = this.queries,
      isUnconditional = shouldDegrade && this.browserIsIncapable;
    if (!queries[q]) {
      queries[q] = new MediaQuery(q, isUnconditional);
    }

    //normalise to object in an array
    if (isFunction(options)) {
      options = {
        match: options
      };
    }
    if (!isArray(options)) {
      options = [options];
    }
    each(options, function (handler) {
      if (isFunction(handler)) {
        handler = {
          match: handler
        };
      }
      queries[q].addHandler(handler);
    });
    return this;
  },
  /**
   * unregisters a query and all it's handlers, or a specific handler for a query
   *
   * @param {string} q the media query to target
   * @param {object || function} [handler] specific handler to unregister
   */
  unregister: function unregister(q, handler) {
    var query = this.queries[q];
    if (query) {
      if (handler) {
        query.removeHandler(handler);
      } else {
        query.clear();
        delete this.queries[q];
      }
    }
    return this;
  }
};
module.exports = MediaQueryDispatch;

/***/ }),

/***/ "u+e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "f576374cce4bbff033f09466b0125440.svg");

/***/ }),

/***/ "u/i4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "7d6aee87591dae404132fadf0c29c9cd.svg");

/***/ }),

/***/ "w24S":
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__("L7zD");
var each = __webpack_require__("kd9Q").each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
  this.query = query;
  this.isUnconditional = isUnconditional;
  this.handlers = [];
  this.mql = window.matchMedia(query);
  var self = this;
  this.listener = function (mql) {
    // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
    self.mql = mql.currentTarget || mql;
    self.assess();
  };
  this.mql.addListener(this.listener);
}
MediaQuery.prototype = {
  constuctor: MediaQuery,
  /**
   * add a handler for this query, triggering if already active
   *
   * @param {object} handler
   * @param {function} handler.match callback for when query is activated
   * @param {function} [handler.unmatch] callback for when query is deactivated
   * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
   * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
   */
  addHandler: function addHandler(handler) {
    var qh = new QueryHandler(handler);
    this.handlers.push(qh);
    this.matches() && qh.on();
  },
  /**
   * removes the given handler from the collection, and calls it's destroy methods
   *
   * @param {object || function} handler the handler to remove
   */
  removeHandler: function removeHandler(handler) {
    var handlers = this.handlers;
    each(handlers, function (h, i) {
      if (h.equals(handler)) {
        h.destroy();
        return !handlers.splice(i, 1); //remove from array and exit each early
      }
    });
  },

  /**
   * Determine whether the media query should be considered a match
   *
   * @return {Boolean} true if media query can be considered a match, false otherwise
   */
  matches: function matches() {
    return this.mql.matches || this.isUnconditional;
  },
  /**
   * Clears all handlers and unbinds events
   */
  clear: function clear() {
    each(this.handlers, function (handler) {
      handler.destroy();
    });
    this.mql.removeListener(this.listener);
    this.handlers.length = 0; //clear array
  },

  /*
      * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
      */
  assess: function assess() {
    var action = this.matches() ? 'on' : 'off';
    each(this.handlers, function (handler) {
      handler[action]();
    });
  }
};
module.exports = MediaQuery;

/***/ }),

/***/ "wMKW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;
var _react = _interopRequireDefault(__webpack_require__("l8WD"));
var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));
var _innerSliderUtils = __webpack_require__("iWpb");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;
  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }
  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }
  var focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  var slickCurrent = index === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL
  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};
  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }
  if (spec.fade) {
    style.position = "relative";
    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};
var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = _react["default"].Children.count(spec.children);
  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
  _react["default"].Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = /*#__PURE__*/_react["default"].createElement("div", null);
    }
    var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    })); // push a cloned element of the desired slide

    slides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread(_objectSpread({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);
        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;
      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;
        if (key < endIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        postCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });
  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};
var Track = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);
  var _super = _createSuper(Track);
  function Track() {
    var _this;
    _classCallCheck(this, Track);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "node", null);
    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this.node = ref;
    });
    return _this;
  }
  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
        onMouseEnter = _this$props.onMouseEnter,
        onMouseOver = _this$props.onMouseOver,
        onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);
  return Track;
}(_react["default"].PureComponent);
exports.Track = Track;

/***/ }),

/***/ "wlqu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "5b66e29b78c621d332f6bbfac18f27ac.svg");

/***/ }),

/***/ "xnBx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "e148ac447be66c2a350e261b19f1da28.webp");

/***/ }),

/***/ "xvDY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "bcd7773dd0a6127216de9e8af9b36b75.svg");

/***/ }),

/***/ "yO+l":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("OvAC");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "ySiU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"header":"header__OVZyn","container":"container__J9tNr"});

/***/ }),

/***/ "zM3l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map