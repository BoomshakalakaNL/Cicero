webpackHotUpdate(5,{

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(787);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(517);

var _Layout = __webpack_require__(1266);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(779);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\index.js?entry';


var DeclaratieIndex = function (_Component) {
  (0, _inherits3.default)(DeclaratieIndex, _Component);

  function DeclaratieIndex() {
    (0, _classCallCheck3.default)(this, DeclaratieIndex);

    return (0, _possibleConstructorReturn3.default)(this, (DeclaratieIndex.__proto__ || (0, _getPrototypeOf2.default)(DeclaratieIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(DeclaratieIndex, [{
    key: 'renderDeclaraties',
    value: function renderDeclaraties() {
      var items = this.props.declaraties.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/declaraties/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }, 'View Declaraties')),
          fluid: true,
          style: { overflowWrap: 'break-word' }
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Hello World'), this.renderCampaigns());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var declaraties;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedDeclaraties().call();

              case 2:
                declaraties = _context.sent;
                return _context.abrupt('return', { declaraties: declaraties });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DeclaratieIndex;
}(Component);

exports.default = DeclaratieIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJEZWNsYXJhdGllSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiZGVjbGFyYXRpZXMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkRGVjbGFyYXRpZXMiLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJQUdmLEE7Ozs7Ozs7Ozs7O3dDQU9nQixBQUNsQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixJQUFJLG1CQUFXLEFBQ2xEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyx5QkFBTixBQUE2Qjt3QkFBN0I7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7aUJBUEssQUFPRSxBQUNQO2lCQUFPLEVBQUUsY0FSWCxBQUFPLEFBUUUsQUFBZ0IsQUFFMUI7QUFWUSxBQUNMO0FBRkosQUFBYyxBQWFkLE9BYmM7OzJDQWFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQyxxQkFITCxBQUNFLEFBRUcsQUFBSyxBQUdYOzs7Ozs7Ozs7Ozs7dUJBN0IyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IseUJBQWhCLEFBQXlDLEE7O21CQUE3RDtBO2lEQUVDLEVBQUUsYUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSm1CLEEsQUFrQzlCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3Njb3R0L0RvY3VtZW50cy9adXlkIEhvZ2VzY2hvb2wvTGVlcmphYXIgNC9CbG9rIDQvQk0xNCAtIEJsb2NrY2hhaW4vU29saWRpdHkvQ2ljZXJvIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xYWMzNWQ3NjZjM2E0MjcwYmJjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MzMyNzVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcy5qcyc7XHJcblxyXG5cclxuY2xhc3MgRGVjbGFyYXRpZUluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgIGNvbnN0IGRlY2xhcmF0aWVzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkRGVjbGFyYXRpZXMoKS5jYWxsKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgZGVjbGFyYXRpZXMgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlckRlY2xhcmF0aWVzKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmRlY2xhcmF0aWVzLm1hcChhZGRyZXNzID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2RlY2xhcmF0aWVzLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgPGE+VmlldyBEZWNsYXJhdGllczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlY2xhcmF0aWVJbmRleDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBUEE7QUFXQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQXpCQTtBQUNBO0FBREE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==