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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/FormContext.js":
/*!*********************************!*\
  !*** ./contexts/FormContext.js ***!
  \*********************************/
/*! exports provided: FormContext, FormStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormContext\", function() { return FormContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormStore\", function() { return FormStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/dalyanparker/Programming/Applications/pivot-front-end/contexts/FormContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\nconst FormStore = ({\n  children\n}) => {\n  const {\n    0: onboarding,\n    1: setOnboarding\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  return __jsx(FormContext.Provider, {\n    value: {\n      onboarding,\n      setOnboarding\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcz9jZGNiIl0sIm5hbWVzIjpbIkZvcm1Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkZvcm1TdG9yZSIsImNoaWxkcmVuIiwib25ib2FyZGluZyIsInNldE9uYm9hcmRpbmciLCJ1c2VTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLFdBQVcsR0FBR0MsMkRBQWEsQ0FBQyxJQUFELENBQWpDO0FBRUEsTUFBTUMsU0FBUyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3pDLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FBQyxJQUFELENBQTVDO0FBRUEsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQ0UsU0FBSyxFQUFFO0FBQ0xGLGdCQURLO0FBRUxDO0FBRkssS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdGLFFBTkgsQ0FERjtBQVVELENBYk0iLCJmaWxlIjoiLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBGb3JtU3RvcmUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtvbmJvYXJkaW5nLCBzZXRPbmJvYXJkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBvbmJvYXJkaW5nLFxuICAgICAgICBzZXRPbmJvYXJkaW5nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/FormContext.js\n");

/***/ }),

/***/ "./contexts/LanguageContext.js":
/*!*************************************!*\
  !*** ./contexts/LanguageContext.js ***!
  \*************************************/
/*! exports provided: LanguageContext, LanguageStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageContext\", function() { return LanguageContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageStore\", function() { return LanguageStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/dalyanparker/Programming/Applications/pivot-front-end/contexts/LanguageContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst LanguageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\nconst LanguageStore = ({\n  children\n}) => {\n  const {\n    0: language,\n    1: setLanguage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"english\");\n  return __jsx(LanguageContext.Provider, {\n    value: {\n      language,\n      setLanguage\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQuanM/OGM1YSJdLCJuYW1lcyI6WyJMYW5ndWFnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTGFuZ3VhZ2VTdG9yZSIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsZUFBZSxHQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBckM7QUFFQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDN0MsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLFNBQUQsQ0FBeEM7QUFFQSxTQUNFLE1BQUMsZUFBRCxDQUFpQixRQUFqQjtBQUNFLFNBQUssRUFBRTtBQUNMRixjQURLO0FBRUxDO0FBRkssS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdGLFFBTkgsQ0FERjtBQVVELENBYk0iLCJmaWxlIjoiLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGNvbnN0IExhbmd1YWdlU3RvcmUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoXCJlbmdsaXNoXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPExhbmd1YWdlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgIHNldExhbmd1YWdlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/LanguageContext.js\n");

/***/ }),

/***/ "./contexts/ModalContext.js":
/*!**********************************!*\
  !*** ./contexts/ModalContext.js ***!
  \**********************************/
/*! exports provided: ModalContext, ModalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalContext\", function() { return ModalContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalStore\", function() { return ModalStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/dalyanparker/Programming/Applications/pivot-front-end/contexts/ModalContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// export const ModalContext = createContext(null);\n// export const ModalStore = ({ children }) => {\n//   const [showOnboard, setShowOnboard] = useState(false);\n//   const [showLogin, setShowLogin] = useState(false);\n//   const [showEdit, setShowEdit] = useState(false);\n//   const [showDelete, setShowDelete] = useState(false);\n//   const [showProfile, setShowProfile] = useState(false);\n//   const [showCreate, setShowCreate] = useState(false);\n//   return (\n//     <ModalContext.Provider\n//       value={{\n//         showOnboard,\n//         setShowOnboard,\n//         showLogin,\n//         setShowLogin,\n//         showEdit,\n//         setShowEdit,\n//         showDelete,\n//         setShowDelete,\n//         showProfile,\n//         setShowProfile,\n//         showCreate,\n//         setShowCreate,\n//       }}\n//     >\n//       {children}\n//     </ModalContext.Provider>\n//   );\n// };\n\nconst ModalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\nconst ModalStore = ({\n  initializeUser = () => {},\n  children\n}) => {\n  const {\n    0: ids,\n    1: setIds\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: index,\n    1: setIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: open,\n    1: setOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: id,\n    1: setId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: next,\n    1: setNext\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: previous,\n    1: setPrevious\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n\n  const getIndex = async id => {\n    const i = ids.indexOf(id);\n    setIndex(i);\n    setNext(i !== ids.length - 1);\n    setPrevious(i !== 0);\n  };\n\n  const nextUser = () => {\n    const i = ids.indexOf(id);\n    const next = ids[i + 1];\n    setId(next);\n  };\n\n  const previousUser = () => {\n    const i = ids.indexOf(id);\n    const prev = ids[i - 1];\n    setId(prev);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(id);\n  }, [id]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getIndex(id);\n  }, [id]); // useEffect(() => {\n  //   // This needs to accomdate batches\n  //   setId(ids[0]);\n  // }, [ids]);\n\n  return __jsx(ModalContext.Provider, {\n    value: {\n      initializeUser,\n      open,\n      setOpen,\n      id,\n      setId,\n      next,\n      previous,\n      nextUser,\n      previousUser,\n      ids,\n      setIds\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Nb2RhbENvbnRleHQuanM/ZjU1MyJdLCJuYW1lcyI6WyJNb2RhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTW9kYWxTdG9yZSIsImluaXRpYWxpemVVc2VyIiwiY2hpbGRyZW4iLCJpZHMiLCJzZXRJZHMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJvcGVuIiwic2V0T3BlbiIsImlkIiwic2V0SWQiLCJuZXh0Iiwic2V0TmV4dCIsInByZXZpb3VzIiwic2V0UHJldmlvdXMiLCJnZXRJbmRleCIsImkiLCJpbmRleE9mIiwibGVuZ3RoIiwibmV4dFVzZXIiLCJwcmV2aW91c1VzZXIiLCJwcmV2IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFsQztBQUVBLE1BQU1DLFVBQVUsR0FBRyxDQUFDO0FBQUVDLGdCQUFjLEdBQUcsTUFBTSxDQUFFLENBQTNCO0FBQTZCQztBQUE3QixDQUFELEtBQTZDO0FBQ3JFLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkMsc0RBQVEsQ0FBQyxFQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRixzREFBUSxDQUFDLENBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JKLHNEQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDSyxFQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFjTixzREFBUSxDQUFDLEVBQUQsQ0FBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ08sSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JSLHNEQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDUyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlYsc0RBQVEsQ0FBQyxJQUFELENBQXhDOztBQUVBLFFBQU1XLFFBQVEsR0FBRyxNQUFPTixFQUFQLElBQWM7QUFDN0IsVUFBTU8sQ0FBQyxHQUFHZCxHQUFHLENBQUNlLE9BQUosQ0FBWVIsRUFBWixDQUFWO0FBRUFILFlBQVEsQ0FBQ1UsQ0FBRCxDQUFSO0FBQ0FKLFdBQU8sQ0FBQ0ksQ0FBQyxLQUFLZCxHQUFHLENBQUNnQixNQUFKLEdBQWEsQ0FBcEIsQ0FBUDtBQUNBSixlQUFXLENBQUNFLENBQUMsS0FBSyxDQUFQLENBQVg7QUFDRCxHQU5EOztBQVFBLFFBQU1HLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFVBQU1ILENBQUMsR0FBR2QsR0FBRyxDQUFDZSxPQUFKLENBQVlSLEVBQVosQ0FBVjtBQUNBLFVBQU1FLElBQUksR0FBR1QsR0FBRyxDQUFDYyxDQUFDLEdBQUcsQ0FBTCxDQUFoQjtBQUNBTixTQUFLLENBQUNDLElBQUQsQ0FBTDtBQUNELEdBSkQ7O0FBTUEsUUFBTVMsWUFBWSxHQUFHLE1BQU07QUFDekIsVUFBTUosQ0FBQyxHQUFHZCxHQUFHLENBQUNlLE9BQUosQ0FBWVIsRUFBWixDQUFWO0FBQ0EsVUFBTVksSUFBSSxHQUFHbkIsR0FBRyxDQUFDYyxDQUFDLEdBQUcsQ0FBTCxDQUFoQjtBQUNBTixTQUFLLENBQUNXLElBQUQsQ0FBTDtBQUNELEdBSkQ7O0FBTUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsRUFBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxFQUFELENBRk0sQ0FBVDtBQUlBYSx5REFBUyxDQUFDLE1BQU07QUFDZFAsWUFBUSxDQUFDTixFQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsRUFBRCxDQUZNLENBQVQsQ0FoQ3FFLENBb0NyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFLE1BQUMsWUFBRCxDQUFjLFFBQWQ7QUFDRSxTQUFLLEVBQUU7QUFDTFQsb0JBREs7QUFFTE8sVUFGSztBQUdMQyxhQUhLO0FBSUxDLFFBSks7QUFLTEMsV0FMSztBQU1MQyxVQU5LO0FBT0xFLGNBUEs7QUFRTE0sY0FSSztBQVNMQyxrQkFUSztBQVVMbEIsU0FWSztBQVdMQztBQVhLLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVHRixRQWZILENBREY7QUFtQkQsQ0E1RE0iLCJmaWxlIjoiLi9jb250ZXh0cy9Nb2RhbENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gZXhwb3J0IGNvbnN0IE1vZGFsU3RvcmUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4vLyAgIGNvbnN0IFtzaG93T25ib2FyZCwgc2V0U2hvd09uYm9hcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy8gICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuLy8gICBjb25zdCBbc2hvd0VkaXQsIHNldFNob3dFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgW3Nob3dEZWxldGUsIHNldFNob3dEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy8gICBjb25zdCBbc2hvd1Byb2ZpbGUsIHNldFNob3dQcm9maWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgW3Nob3dDcmVhdGUsIHNldFNob3dDcmVhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlclxuLy8gICAgICAgdmFsdWU9e3tcbi8vICAgICAgICAgc2hvd09uYm9hcmQsXG4vLyAgICAgICAgIHNldFNob3dPbmJvYXJkLFxuLy8gICAgICAgICBzaG93TG9naW4sXG4vLyAgICAgICAgIHNldFNob3dMb2dpbixcbi8vICAgICAgICAgc2hvd0VkaXQsXG4vLyAgICAgICAgIHNldFNob3dFZGl0LFxuLy8gICAgICAgICBzaG93RGVsZXRlLFxuLy8gICAgICAgICBzZXRTaG93RGVsZXRlLFxuLy8gICAgICAgICBzaG93UHJvZmlsZSxcbi8vICAgICAgICAgc2V0U2hvd1Byb2ZpbGUsXG4vLyAgICAgICAgIHNob3dDcmVhdGUsXG4vLyAgICAgICAgIHNldFNob3dDcmVhdGUsXG4vLyAgICAgICB9fVxuLy8gICAgID5cbi8vICAgICAgIHtjaGlsZHJlbn1cbi8vICAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cbi8vICAgKTtcbi8vIH07XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFN0b3JlID0gKHsgaW5pdGlhbGl6ZVVzZXIgPSAoKSA9PiB7fSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaWRzLCBzZXRJZHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZXh0LCBzZXROZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcHJldmlvdXMsIHNldFByZXZpb3VzXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGdldEluZGV4ID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgaSA9IGlkcy5pbmRleE9mKGlkKTtcblxuICAgIHNldEluZGV4KGkpO1xuICAgIHNldE5leHQoaSAhPT0gaWRzLmxlbmd0aCAtIDEpO1xuICAgIHNldFByZXZpb3VzKGkgIT09IDApO1xuICB9O1xuXG4gIGNvbnN0IG5leHRVc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGkgPSBpZHMuaW5kZXhPZihpZCk7XG4gICAgY29uc3QgbmV4dCA9IGlkc1tpICsgMV07XG4gICAgc2V0SWQobmV4dCk7XG4gIH07XG5cbiAgY29uc3QgcHJldmlvdXNVc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGkgPSBpZHMuaW5kZXhPZihpZCk7XG4gICAgY29uc3QgcHJldiA9IGlkc1tpIC0gMV07XG4gICAgc2V0SWQocHJldik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gIH0sIFtpZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0SW5kZXgoaWQpO1xuICB9LCBbaWRdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIC8vIFRoaXMgbmVlZHMgdG8gYWNjb21kYXRlIGJhdGNoZXNcbiAgLy8gICBzZXRJZChpZHNbMF0pO1xuICAvLyB9LCBbaWRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpbml0aWFsaXplVXNlcixcbiAgICAgICAgb3BlbixcbiAgICAgICAgc2V0T3BlbixcbiAgICAgICAgaWQsXG4gICAgICAgIHNldElkLFxuICAgICAgICBuZXh0LFxuICAgICAgICBwcmV2aW91cyxcbiAgICAgICAgbmV4dFVzZXIsXG4gICAgICAgIHByZXZpb3VzVXNlcixcbiAgICAgICAgaWRzLFxuICAgICAgICBzZXRJZHMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/ModalContext.js\n");

/***/ }),

/***/ "./contexts/SearchContext.js":
/*!***********************************!*\
  !*** ./contexts/SearchContext.js ***!
  \***********************************/
/*! exports provided: SearchContext, SearchStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchContext\", function() { return SearchContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchStore\", function() { return SearchStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/dalyanparker/Programming/Applications/pivot-front-end/contexts/SearchContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst SearchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\nconst SearchStore = ({\n  children\n}) => {\n  const {\n    0: search,\n    1: setSearch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: display,\n    1: setDisplay\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: full,\n    1: setFull\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return __jsx(SearchContext.Provider, {\n    value: {\n      search,\n      setSearch,\n      display,\n      setDisplay,\n      full,\n      setFull,\n      search,\n      setSearch\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0LmpzPzc3N2UiXSwibmFtZXMiOlsiU2VhcmNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJTZWFyY2hTdG9yZSIsImNoaWxkcmVuIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsImZ1bGwiLCJzZXRGdWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsYUFBYSxHQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBbkM7QUFFQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDM0MsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkosc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBRUEsU0FDRSxNQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0UsU0FBSyxFQUFFO0FBQ0xGLFlBREs7QUFFTEMsZUFGSztBQUdMRSxhQUhLO0FBSUxDLGdCQUpLO0FBS0xDLFVBTEs7QUFNTEMsYUFOSztBQU9MTixZQVBLO0FBUUxDO0FBUkssS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUdGLFFBWkgsQ0FERjtBQWdCRCxDQXJCTSIsImZpbGUiOiIuL2NvbnRleHRzL1NlYXJjaENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hTdG9yZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgc2V0U2VhcmNoLFxuICAgICAgICBkaXNwbGF5LFxuICAgICAgICBzZXREaXNwbGF5LFxuICAgICAgICBmdWxsLFxuICAgICAgICBzZXRGdWxsLFxuICAgICAgICBzZWFyY2gsXG4gICAgICAgIHNldFNlYXJjaCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2VhcmNoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/SearchContext.js\n");

/***/ }),

/***/ "./contexts/UserContext.js":
/*!*********************************!*\
  !*** ./contexts/UserContext.js ***!
  \*********************************/
/*! exports provided: UserContext, UserStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserStore\", function() { return UserStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/dalyanparker/Programming/Applications/pivot-front-end/contexts/UserContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\nconst UserStore = ({\n  children\n}) => {\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: authenticated,\n    1: setAuthenticated\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: token,\n    1: setToken\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      authenticated,\n      token,\n      setUser,\n      setAuthenticated,\n      setToken,\n      loading,\n      setLoading\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcz84MWQyIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlVzZXJTdG9yZSIsImNoaWxkcmVuIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsInNldFRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsV0FBVyxHQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBakM7QUFFQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDekMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDRyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DSixzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JOLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUVBLFNBQ0UsTUFBQyxXQUFELENBQWEsUUFBYjtBQUNFLFNBQUssRUFBRTtBQUNMQyxVQURLO0FBRUxFLG1CQUZLO0FBR0xFLFdBSEs7QUFJTEgsYUFKSztBQUtMRSxzQkFMSztBQU1MRSxjQU5LO0FBT0xSLGFBUEs7QUFRTEM7QUFSSyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZR0YsUUFaSCxDQURGO0FBZ0JELENBdEJNIiwiZmlsZSI6Ii4vY29udGV4dHMvVXNlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgY29uc3QgVXNlclN0b3JlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcixcbiAgICAgICAgYXV0aGVudGljYXRlZCxcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHNldFVzZXIsXG4gICAgICAgIHNldEF1dGhlbnRpY2F0ZWQsXG4gICAgICAgIHNldFRva2VuLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBzZXRMb2FkaW5nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ }),

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/*! exports provided: GA_TRACKING_ID, pageview, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GA_TRACKING_ID\", function() { return GA_TRACKING_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageview\", function() { return pageview; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"event\", function() { return event; });\nconst GA_TRACKING_ID = '<YOUR_GA_TRACKING_ID>'; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages\n\nconst pageview = url => {\n  window.gtag('config', GA_TRACKING_ID, {\n    page_path: url\n  });\n}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events\n\nconst event = ({\n  action,\n  category,\n  label,\n  value\n}) => {\n  window.gtag('event', action, {\n    event_category: category,\n    event_label: label,\n    value: value\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ3RhZy5qcz8zMzRmIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGNBQWMsR0FBRyx1QkFBdkIsQyxDQUVQOztBQUNPLE1BQU1DLFFBQVEsR0FBSUMsR0FBRCxJQUFTO0FBQy9CQyxRQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLEVBQXNCSixjQUF0QixFQUFzQztBQUNwQ0ssYUFBUyxFQUFFSDtBQUR5QixHQUF0QztBQUdELENBSk0sQyxDQU1QOztBQUNPLE1BQU1JLEtBQUssR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUMsVUFBVjtBQUFvQkMsT0FBcEI7QUFBMkJDO0FBQTNCLENBQUQsS0FBd0M7QUFDM0RQLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosRUFBcUJHLE1BQXJCLEVBQTZCO0FBQzNCSSxrQkFBYyxFQUFFSCxRQURXO0FBRTNCSSxlQUFXLEVBQUVILEtBRmM7QUFHM0JDLFNBQUssRUFBRUE7QUFIb0IsR0FBN0I7QUFLRCxDQU5NIiwiZmlsZSI6Ii4vbGliL2d0YWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSAnPFlPVVJfR0FfVFJBQ0tJTkdfSUQ+J1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3BhZ2VzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdjb25maWcnLCBHQV9UUkFDS0lOR19JRCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KVxufVxuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XG4gICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n/* harmony import */ var _contexts_ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/ModalContext */ \"./contexts/ModalContext.js\");\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/UserContext */ \"./contexts/UserContext.js\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./contexts/LanguageContext.js\");\n/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contexts/SearchContext */ \"./contexts/SearchContext.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\nvar _jsxFileName = \"/Users/dalyanparker/Programming/Applications/pivot-front-end/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n // Material UI\n\n\n\n // GA\n\n // Context\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const handleRouteChange = url => {\n      _lib_gtag__WEBPACK_IMPORTED_MODULE_6__[\"pageview\"](url);\n    };\n\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on(\"routeChangeComplete\", handleRouteChange);\n    return () => {\n      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_9__[\"LanguageStore\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(_contexts_ModalContext__WEBPACK_IMPORTED_MODULE_7__[\"ModalStore\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__[\"UserStore\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_10__[\"SearchStore\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_11__[\"FormStore\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: _src_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 19\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 19\n    }\n  })))))))));\n};\n\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImd0YWciLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIm9mZiIsInRoZW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDMUNDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLGlCQUFpQixHQUFJQyxHQUFELElBQVM7QUFDakNDLHdEQUFBLENBQWNELEdBQWQ7QUFDRCxLQUZEOztBQUdBRSxzREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDTCxpQkFBeEM7QUFDQSxXQUFPLE1BQU07QUFDWEcsd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q04saUJBQXpDO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNFQUFEO0FBQWUsU0FBSyxFQUFFTyxrREFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxTQUFELGVBQWVULFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhGLENBREYsQ0FERixDQURGLENBREYsQ0FERixDQURGLENBREY7QUFtQkQsQ0E5QkQ7O0FBZ0NBRixLQUFLLENBQUNZLFNBQU4sR0FBa0I7QUFDaEJYLFdBQVMsRUFBRVksaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEakI7QUFFaEJiLFdBQVMsRUFBRVcsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFGWixDQUFsQjtBQUtlZixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBNYXRlcmlhbCBVSVxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3JjL3RoZW1lXCI7XG4vLyBHQVxuaW1wb3J0ICogYXMgZ3RhZyBmcm9tIFwiLi4vbGliL2d0YWdcIjtcbi8vIENvbnRleHRcbmltcG9ydCB7IE1vZGFsU3RvcmUgfSBmcm9tIFwiLi4vY29udGV4dHMvTW9kYWxDb250ZXh0XCI7XG5pbXBvcnQgeyBVc2VyU3RvcmUgfSBmcm9tIFwiLi4vY29udGV4dHMvVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IExhbmd1YWdlU3RvcmUgfSBmcm9tIFwiLi4vY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0XCI7XG5pbXBvcnQgeyBTZWFyY2hTdG9yZSB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBGb3JtU3RvcmUgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybCk7XG4gICAgfTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExhbmd1YWdlU3RvcmU+XG4gICAgICAgIDxNb2RhbFN0b3JlPlxuICAgICAgICAgIDxVc2VyU3RvcmU+XG4gICAgICAgICAgICA8U2VhcmNoU3RvcmU+XG4gICAgICAgICAgICAgIDxGb3JtU3RvcmU+XG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cbiAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9Gb3JtU3RvcmU+XG4gICAgICAgICAgICA8L1NlYXJjaFN0b3JlPlxuICAgICAgICAgIDwvVXNlclN0b3JlPlxuICAgICAgICA8L01vZGFsU3RvcmU+XG4gICAgICA8L0xhbmd1YWdlU3RvcmU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbk15QXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"blue\"][500]\n    },\n    secondary: {\n      main: \"#fff\"\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"red\"].A400\n    },\n    background: {\n      default: \"#fff\"\n    },\n    typography: {\n      fontFamily: \"Poppins', sans-serif\",\n      fontSize: 1\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUuanM/Y2MzNyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiYmx1ZSIsInNlY29uZGFyeSIsImVycm9yIiwicmVkIiwiQTQwMCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRUMsNkRBQUksQ0FBQyxHQUFEO0FBREgsS0FERjtBQUlQQyxhQUFTLEVBQUU7QUFDVEYsVUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRyxTQUFLLEVBQUU7QUFDTEgsVUFBSSxFQUFFSSw0REFBRyxDQUFDQztBQURMLEtBUEE7QUFVUEMsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFBRTtBQURDLEtBVkw7QUFhUEMsY0FBVSxFQUFFO0FBQ1ZDLGdCQUFVLEVBQUUsc0JBREY7QUFFVkMsY0FBUSxFQUFFO0FBRkE7QUFiTDtBQURrQixDQUFELENBQTVCO0FBcUJlZCxvRUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgcmVkLCBibHVlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogYmx1ZVs1MDBdLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBcIiNmZmZcIixcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiByZWQuQTQwMCxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxuICAgIH0sXG4gICAgdHlwb2dyYXBoeToge1xuICAgICAgZm9udEZhbWlseTogXCJQb3BwaW5zJywgc2Fucy1zZXJpZlwiLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIj83ZTM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });