webpackHotUpdate(6,{

/***/ 1285:
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

var _Layout = __webpack_require__(1266);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(517);

var _declaration = __webpack_require__(1286);

var _declaration2 = _interopRequireDefault(_declaration);

var _web = __webpack_require__(788);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(779);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Projects\\Blockchain\\kickstarter\\Cicero\\pages\\declaraties\\show.js?entry";


var DeclarationShow = function (_Component) {
  (0, _inherits3.default)(DeclarationShow, _Component);

  function DeclarationShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DeclarationShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DeclarationShow.__proto__ || (0, _getPrototypeOf2.default)(DeclarationShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: "",
      client: _this.props.summary[1],
      insurance: _this.props.summary[0],
      careAdminOff: _this.props.summary[2],
      careCodes: _this.props.summary[3].split(";"),
      careAmounts: _this.props.summary[4].split(";"),
      carePrices: _this.props.summary[5].split(";"),
      dateDeclaration: _this.props.summary[6],
      dateEndDeclaration: _this.props.summary[7],
      isValidated: _this.props.summary[8],
      isAccepted: _this.props.summary[9],
      loading: false
    }, _this.load = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, declaration, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;

                _this.setState({ loading: true, errorMessage: "" });
                _context.prev = 4;
                declaration = (0, _declaration2.default)(_this.props.address);
                _context.next = 8;
                return declaration.methods.getDeclaration().call({ from: accounts[0] });

              case 8:
                summary = _context.sent;

                _this.setState({
                  insurance: summary[0],
                  client: summary[1],
                  careAdminOff: summary[2],
                  careCodes: summary[3].split(";"), // .join(";")
                  careAmounts: summary[4].split(";"),
                  carePrices: summary[5].split(";"), // .join(";")
                  dateDeclaration: summary[6],
                  dateEndDeclaration: summary[7],
                  isValidated: summary[8],
                  isAccepted: summary[9]
                });
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);

                console.log(_context.t0.message);
                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false });
                console.log(_this.state);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DeclarationShow, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Declaratie details"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Declaratie address: ", this.props.address), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.state.careCodes[0]), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Co-Worker"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Matthew is a pianist living in Nashville.")))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, onClick: this.load, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Load"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var accounts, declaration, summary;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                declaration = (0, _declaration2.default)(props.query.address);
                _context2.next = 6;
                return declaration.methods.getDeclaration().call({ from: accounts[0] });

              case 6:
                summary = _context2.sent;
                return _context2.abrupt("return", {
                  address: props.query.address,
                  summary: summary
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DeclarationShow;
}(_react.Component);

exports.default = DeclarationShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNhcmQiLCJEZWNsYXJhdGlvbiIsIndlYjMiLCJMaW5rIiwiRGVjbGFyYXRpb25TaG93Iiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJjbGllbnQiLCJwcm9wcyIsInN1bW1hcnkiLCJpbnN1cmFuY2UiLCJjYXJlQWRtaW5PZmYiLCJjYXJlQ29kZXMiLCJzcGxpdCIsImNhcmVBbW91bnRzIiwiY2FyZVByaWNlcyIsImRhdGVEZWNsYXJhdGlvbiIsImRhdGVFbmREZWNsYXJhdGlvbiIsImlzVmFsaWRhdGVkIiwiaXNBY2NlcHRlZCIsImxvYWRpbmciLCJsb2FkIiwiZXZlbnQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2V0U3RhdGUiLCJkZWNsYXJhdGlvbiIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0RGVjbGFyYXRpb24iLCJjYWxsIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7OzhOQVlKLEE7b0JBQVEsQUFDUSxBQUNkO2NBQVEsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUZiLEFBRUUsQUFBbUIsQUFDM0I7aUJBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUhoQixBQUdLLEFBQW1CLEFBQzlCO29CQUFjLE1BQUEsQUFBSyxNQUFMLEFBQVcsUUFKbkIsQUFJUSxBQUFtQixBQUNqQztpQkFBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIs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QUFBcUIsQUFDbkMscUJBQUMsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsOEJBQUMsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQTtBQUFBO0FBQUEsU0FUUixBQUlFLEFBQ0UsQUFDRSxBQUdFLEFBTU47O29CQUFBO3NCQWZGLEFBZUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQVMsS0FBOUMsQUFBbUQsTUFBTSxTQUF6RDtvQkFBQTtzQkFBQTtBQUFBO1NBakJKLEFBQ0UsQUFnQkUsQUFLTDs7Ozs7NkdBN0U0QixBOzs7Ozs7O3VCQUNKLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0EscUNBQ0E7QSw4QkFBYywyQkFBWSxNQUFBLEFBQU0sTUFBbEIsQUFBd0IsQTs7dUJBQ3RCLFlBQUEsQUFBWSxRQUFaLEFBQ25CLGlCQURtQixBQUVuQixLQUFLLEVBQUUsTUFBTSxTQUZNLEFBRWQsQUFBUSxBQUFTLEE7O21CQUZuQjtBOzsyQkFJSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjsyQixBQUZLLEFBRUk7QUFGSixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUndCLEEsQUFpRjlCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovUHJvamVjdHMvQmxvY2tjaGFpbi9raWNrc3RhcnRlci9DaWNlcm8ifQ==

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Projects\\Blockchain\\kickstarter\\Cicero\\pages\\declaraties\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Projects\\Blockchain\\kickstarter\\Cicero\\pages\\declaraties\\show.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/declaraties\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iZWUzMDI0NTc2MWI5YmVlMjEzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGVjbGFyYXRpZXMvc2hvdy5qcz9jOTc0NzAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZGVjbGFyYXRpb25cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNsYXNzIERlY2xhcmF0aW9uU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBkZWNsYXJhdGlvbi5tZXRob2RzXHJcbiAgICAgIC5nZXREZWNsYXJhdGlvbigpXHJcbiAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICBzdW1tYXJ5OiBzdW1tYXJ5XHJcbiAgICB9O1xyXG4gIH1cclxuICBzdGF0ZSA9IHtcclxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgIGNsaWVudDogdGhpcy5wcm9wcy5zdW1tYXJ5WzFdLFxyXG4gICAgaW5zdXJhbmNlOiB0aGlzLnByb3BzLnN1bW1hcnlbMF0sXHJcbiAgICBjYXJlQWRtaW5PZmY6IHRoaXMucHJvcHMuc3VtbWFyeVsyXSxcclxuICAgIGNhcmVDb2RlczogdGhpcy5wcm9wcy5zdW1tYXJ5WzNdLnNwbGl0KFwiO1wiKSxcclxuICAgIGNhcmVBbW91bnRzOiB0aGlzLnByb3BzLnN1bW1hcnlbNF0uc3BsaXQoXCI7XCIpLFxyXG4gICAgY2FyZVByaWNlczogdGhpcy5wcm9wcy5zdW1tYXJ5WzVdLnNwbGl0KFwiO1wiKSxcclxuICAgIGRhdGVEZWNsYXJhdGlvbjogdGhpcy5wcm9wcy5zdW1tYXJ5WzZdLFxyXG4gICAgZGF0ZUVuZERlY2xhcmF0aW9uOiB0aGlzLnByb3BzLnN1bW1hcnlbN10sXHJcbiAgICBpc1ZhbGlkYXRlZDogdGhpcy5wcm9wcy5zdW1tYXJ5WzhdLFxyXG4gICAgaXNBY2NlcHRlZDogdGhpcy5wcm9wcy5zdW1tYXJ5WzldLFxyXG4gICAgbG9hZGluZzogZmFsc2VcclxuICB9O1xyXG5cclxuICBsb2FkID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogXCJcIiB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGRlY2xhcmF0aW9uLm1ldGhvZHNcclxuICAgICAgICAuZ2V0RGVjbGFyYXRpb24oKVxyXG4gICAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGluc3VyYW5jZTogc3VtbWFyeVswXSxcclxuICAgICAgICBjbGllbnQ6IHN1bW1hcnlbMV0sXHJcbiAgICAgICAgY2FyZUFkbWluT2ZmOiBzdW1tYXJ5WzJdLFxyXG4gICAgICAgIGNhcmVDb2Rlczogc3VtbWFyeVszXS5zcGxpdChcIjtcIiksIC8vIC5qb2luKFwiO1wiKVxyXG4gICAgICAgIGNhcmVBbW91bnRzOiBzdW1tYXJ5WzRdLnNwbGl0KFwiO1wiKSxcclxuICAgICAgICBjYXJlUHJpY2VzOiBzdW1tYXJ5WzVdLnNwbGl0KFwiO1wiKSwgLy8gLmpvaW4oXCI7XCIpXHJcbiAgICAgICAgZGF0ZURlY2xhcmF0aW9uOiBzdW1tYXJ5WzZdLFxyXG4gICAgICAgIGRhdGVFbmREZWNsYXJhdGlvbjogc3VtbWFyeVs3XSxcclxuICAgICAgICBpc1ZhbGlkYXRlZDogc3VtbWFyeVs4XSxcclxuICAgICAgICBpc0FjY2VwdGVkOiBzdW1tYXJ5WzldXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5EZWNsYXJhdGllIGRldGFpbHM8L2gzPlxyXG4gICAgICAgIDxwPkRlY2xhcmF0aWUgYWRkcmVzczoge3RoaXMucHJvcHMuYWRkcmVzc308L3A+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPENhcmQuR3JvdXAgaXRlbXNQZXJSb3c9ezZ9PlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPnt0aGlzLnN0YXRlLmNhcmVDb2Rlc1swXX08L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkLk1ldGE+Q28tV29ya2VyPC9DYXJkLk1ldGE+XHJcbiAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICBNYXR0aGV3IGlzIGEgcGlhbmlzdCBsaXZpbmcgaW4gTmFzaHZpbGxlLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9DYXJkLkdyb3VwPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBvbkNsaWNrPXt0aGlzLmxvYWR9IHByaW1hcnk+XHJcbiAgICAgICAgICBMb2FkXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlY2xhcmF0aW9uU2hvdztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGVjbGFyYXRpZXMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVRBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFxQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBMUJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQTZCQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7O0FBNUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFJQTs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9