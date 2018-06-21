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
    var _ref;

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
      loading: false,
      grandTotal: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DeclarationShow, [{
    key: "renderCards",
    value: function renderCards() {
      var Cards = [];

      for (var i = 0; i < this.state.careCodes.length; i++) {
        var a = this.state.carePrices[i];
        a = parseInt(this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2));
        this.state.carePrices[i] = [this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2), ",", this.state.carePrices[i].slice(this.state.carePrices[i].length - 2)].join("");
        var totalPrice = parseFloat(this.state.careAmounts[i] * a).toFixed(2);
        this.state.grandTotal += parseInt(totalPrice);
        Cards.push(_react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, this.state.careCodes[i]), _react2.default.createElement(_semanticUiReact.Card.Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, this.state.careAmounts[i], " x \u20AC", this.state.carePrices[i]), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, "Totaal: \u20AC", totalPrice)))));
      }
      return Cards;
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.careCodes);
      console.log(this.state.carePrices);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Declaratie details van adres: ", this.props.address), _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Overzicht geleverde zorg"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 6, centered: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, this.renderCards()), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Extra informatie"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Client address: ", this.state.client), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Verzekeraar address: ", this.state.insurance), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Zorgkantoor address: ", this.state.careAdminOff), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Goedgekeurd: ", this.state.isAccepted.toString(), " ")), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Totaalprijs Declaratie"), _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "\u20AC", this.state.grandTotal)))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var accounts, declaration, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                declaration = (0, _declaration2.default)(props.query.address);
                _context.next = 6;
                return declaration.methods.getDeclaration().call({ from: accounts[0] });

              case 6:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  summary: summary
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DeclarationShow;
}(_react.Component);
/*
addressen: client, verzekeraar, zorgkantoor
dateDeclaration
dateEndDeclaration
*/

exports.default = DeclarationShow;


{}
/* <Button loading={this.state.loading} onClick={this.load} primary>
        Load
      </Button> */

// load = async event => {
//   const accounts = await web3.eth.getAccounts();
//   this.setState({ loading: true, errorMessage: "" });
//   try {
//     const declaration = Declaration(this.props.address);
//     const summary = await declaration.methods
//       .getDeclaration()
//       .call({ from: accounts[0] });
//     this.setState({
//       insurance: summary[0],
//       client: summary[1],
//       careAdminOff: summary[2],
//       careCodes: summary[3].split(";"), // .join(";")
//       careAmounts: summary[4].split(";"),
//       carePrices: summary[5].split(";"), // .join(";")
//       dateDeclaration: summary[6],
//       dateEndDeclaration: summary[7],
//       isValidated: summary[8],
//       isAccepted: summary[9]
//     });
//   } catch (err) {
//     console.log(err.message);
//     this.setState({ errorMessage: err.message });
//   }
//   this.setState({ loading: false });
//   console.log(this.state);
// };

// this.state.carePrices[i] = parseFloat(this.state.carePrices[i]).toFixed(2);
// var b = ',';
// var pos = a.length-2;
// var output = c
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNhcmQiLCJHcmlkIiwiSW1hZ2UiLCJEZWNsYXJhdGlvbiIsIndlYjMiLCJMaW5rIiwiRGVjbGFyYXRpb25TaG93Iiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJjbGllbnQiLCJwcm9wcyIsInN1bW1hcnkiLCJpbnN1cmFuY2UiLCJjYXJlQWRtaW5PZmYiLCJjYXJlQ29kZXMiLCJzcGxpdCIsImNhcmVBbW91bnRzIiwiY2FyZVByaWNlcyIsImRhdGVEZWNsYXJhdGlvbiIsImRhdGVFbmREZWNsYXJhdGlvbiIsImlzVmFsaWRhdGVkIiwiaXNBY2NlcHRlZCIsImxvYWRpbmciLCJncmFuZFRvdGFsIiwiQ2FyZHMiLCJpIiwibGVuZ3RoIiwiYSIsInBhcnNlSW50Iiwic2xpY2UiLCJqb2luIiwidG90YWxQcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJ0b1N0cmluZyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJkZWNsYXJhdGlvbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldERlY2xhcmF0aW9uIiwiY2FsbCIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUSxBQUFNLEFBQU07O0FBQzdCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OzhOLEFBWUo7b0JBQVEsQUFDUSxBQUNkO2NBQVEsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUZiLEFBRUUsQUFBbUIsQUFDM0I7aUJBQVcsTUFBQSxBQUFL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SyxNQUFMLEFBQVcsV0FBNUIsQUFBaUIsQUFBc0IsWUFOM0MsQUFDRSxBQUtFLEFBRUYsdUJBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwyQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBTSxlQUFBLEFBQUssTUFyQnJCLEFBQ0UsQUFTRSxBQUNFLEFBUUUsQUFFRSxBQUFpQixBQVE1Qjs7Ozs7NEcsQUExRjRCOzs7Ozs7O3VCQUNKLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTFCO0Esb0NBQ0E7QSw4QkFBYywyQkFBWSxNQUFBLEFBQU0sTUFBbEIsQSxBQUF3Qjs7dUJBQ3RCLFlBQUEsQUFBWSxRQUFaLEFBQ25CLGlCQURtQixBQUVuQixLQUFLLEVBQUUsTUFBTSxTQUZNLEFBRWQsQUFBUSxBLEFBQVM7O21CQUZuQjtBOzsyQkFJSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjsyQkFGSyxBQUVJLEE7QUFGSixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFSd0I7QUE2RjlCLEFBS0E7Ozs7OztrQkFBQSxBQUFlOzs7QUFFZixBQUlDO0FBSEM7Ozs7QUFLRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Qcm9qZWN0cy9CbG9ja2NoYWluL2tpY2tzdGFydGVyL0NpY2VybyJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jODRmYjk3NmRhMzNlZjk3ODM3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGVjbGFyYXRpZXMvc2hvdy5qcz8wM2U3ZDRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBHcmlkLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2RlY2xhcmF0aW9uXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jbGFzcyBEZWNsYXJhdGlvblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgZGVjbGFyYXRpb24ubWV0aG9kc1xyXG4gICAgICAuZ2V0RGVjbGFyYXRpb24oKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgc3VtbWFyeTogc3VtbWFyeVxyXG4gICAgfTtcclxuICB9XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICBjbGllbnQ6IHRoaXMucHJvcHMuc3VtbWFyeVsxXSxcclxuICAgIGluc3VyYW5jZTogdGhpcy5wcm9wcy5zdW1tYXJ5WzBdLFxyXG4gICAgY2FyZUFkbWluT2ZmOiB0aGlzLnByb3BzLnN1bW1hcnlbMl0sXHJcbiAgICBjYXJlQ29kZXM6IHRoaXMucHJvcHMuc3VtbWFyeVszXS5zcGxpdChcIjtcIiksXHJcbiAgICBjYXJlQW1vdW50czogdGhpcy5wcm9wcy5zdW1tYXJ5WzRdLnNwbGl0KFwiO1wiKSxcclxuICAgIGNhcmVQcmljZXM6IHRoaXMucHJvcHMuc3VtbWFyeVs1XS5zcGxpdChcIjtcIiksXHJcbiAgICBkYXRlRGVjbGFyYXRpb246IHRoaXMucHJvcHMuc3VtbWFyeVs2XSxcclxuICAgIGRhdGVFbmREZWNsYXJhdGlvbjogdGhpcy5wcm9wcy5zdW1tYXJ5WzddLFxyXG4gICAgaXNWYWxpZGF0ZWQ6IHRoaXMucHJvcHMuc3VtbWFyeVs4XSxcclxuICAgIGlzQWNjZXB0ZWQ6IHRoaXMucHJvcHMuc3VtbWFyeVs5XSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZ3JhbmRUb3RhbDogMFxyXG4gIH07XHJcblxyXG4gIHJlbmRlckNhcmRzKCkge1xyXG4gICAgdmFyIENhcmRzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmNhcmVDb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgYSA9IHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXTtcclxuICAgICAgYSA9IHBhcnNlSW50KFxyXG4gICAgICAgIHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXS5zbGljZSgwLCB0aGlzLnN0YXRlLmNhcmVQcmljZXNbaV0ubGVuZ3RoIC0gMilcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zdGF0ZS5jYXJlUHJpY2VzW2ldID0gW1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXS5zbGljZSgwLCB0aGlzLnN0YXRlLmNhcmVQcmljZXNbaV0ubGVuZ3RoIC0gMiksXHJcbiAgICAgICAgXCIsXCIsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jYXJlUHJpY2VzW2ldLnNsaWNlKHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXS5sZW5ndGggLSAyKVxyXG4gICAgICBdLmpvaW4oXCJcIik7XHJcbiAgICAgIHZhciB0b3RhbFByaWNlID0gcGFyc2VGbG9hdCh0aGlzLnN0YXRlLmNhcmVBbW91bnRzW2ldICogYSkudG9GaXhlZCgyKTtcclxuICAgICAgdGhpcy5zdGF0ZS5ncmFuZFRvdGFsICs9IHBhcnNlSW50KHRvdGFsUHJpY2UpO1xyXG4gICAgICBDYXJkcy5wdXNoKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPnt0aGlzLnN0YXRlLmNhcmVDb2Rlc1tpXX08L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhcmVBbW91bnRzW2ldfSB4IOKCrHt0aGlzLnN0YXRlLmNhcmVQcmljZXNbaV19XHJcbiAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxyXG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8aDM+VG90YWFsOiDigqx7dG90YWxQcmljZX08L2gzPlxyXG4gICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2FyZHM7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY2FyZUNvZGVzKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY2FyZVByaWNlcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5EZWNsYXJhdGllIGRldGFpbHMgdmFuIGFkcmVzOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvaDM+XHJcbiAgICAgICAgey8qIDxwPkRlY2xhcmF0aWUgYWRkcmVzczogPC9wPiAqL31cclxuICAgICAgICA8aDQ+T3ZlcnppY2h0IGdlbGV2ZXJkZSB6b3JnPC9oND5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Nn0gY2VudGVyZWQ+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICAgIDwvQ2FyZC5Hcm91cD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGgzPkV4dHJhIGluZm9ybWF0aWU8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPkNsaWVudCBhZGRyZXNzOiB7dGhpcy5zdGF0ZS5jbGllbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPlZlcnpla2VyYWFyIGFkZHJlc3M6IHt0aGlzLnN0YXRlLmluc3VyYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+Wm9yZ2thbnRvb3IgYWRkcmVzczoge3RoaXMuc3RhdGUuY2FyZUFkbWluT2ZmfTwvcD5cclxuICAgICAgICAgICAgICA8cD5Hb2VkZ2VrZXVyZDoge3RoaXMuc3RhdGUuaXNBY2NlcHRlZC50b1N0cmluZygpfSA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgPGgzPlRvdGFhbHByaWpzIERlY2xhcmF0aWU8L2gzPlxyXG4gICAgICAgICAgICAgIDxoND7igqx7dGhpcy5zdGF0ZS5ncmFuZFRvdGFsfTwvaDQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9XCIvYXNzZXRzL2ltYWdlcy93aXJlZnJhbWUvcGFyYWdyYXBoLnBuZ1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuLypcclxuYWRkcmVzc2VuOiBjbGllbnQsIHZlcnpla2VyYWFyLCB6b3Jna2FudG9vclxyXG5kYXRlRGVjbGFyYXRpb25cclxuZGF0ZUVuZERlY2xhcmF0aW9uXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IERlY2xhcmF0aW9uU2hvdztcclxuXHJcbntcclxuICAvKiA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gb25DbGljaz17dGhpcy5sb2FkfSBwcmltYXJ5PlxyXG4gICAgICAgICAgTG9hZFxyXG4gICAgICAgIDwvQnV0dG9uPiAqL1xyXG59XHJcblxyXG4vLyBsb2FkID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4vLyAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuLy8gICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbi8vICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgZGVjbGFyYXRpb24ubWV0aG9kc1xyXG4vLyAgICAgICAuZ2V0RGVjbGFyYXRpb24oKVxyXG4vLyAgICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgIGluc3VyYW5jZTogc3VtbWFyeVswXSxcclxuLy8gICAgICAgY2xpZW50OiBzdW1tYXJ5WzFdLFxyXG4vLyAgICAgICBjYXJlQWRtaW5PZmY6IHN1bW1hcnlbMl0sXHJcbi8vICAgICAgIGNhcmVDb2Rlczogc3VtbWFyeVszXS5zcGxpdChcIjtcIiksIC8vIC5qb2luKFwiO1wiKVxyXG4vLyAgICAgICBjYXJlQW1vdW50czogc3VtbWFyeVs0XS5zcGxpdChcIjtcIiksXHJcbi8vICAgICAgIGNhcmVQcmljZXM6IHN1bW1hcnlbNV0uc3BsaXQoXCI7XCIpLCAvLyAuam9pbihcIjtcIilcclxuLy8gICAgICAgZGF0ZURlY2xhcmF0aW9uOiBzdW1tYXJ5WzZdLFxyXG4vLyAgICAgICBkYXRlRW5kRGVjbGFyYXRpb246IHN1bW1hcnlbN10sXHJcbi8vICAgICAgIGlzVmFsaWRhdGVkOiBzdW1tYXJ5WzhdLFxyXG4vLyAgICAgICBpc0FjY2VwdGVkOiBzdW1tYXJ5WzldXHJcbi8vICAgICB9KTtcclxuLy8gICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4vLyAgIH1cclxuLy8gICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbi8vICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbi8vIH07XHJcblxyXG4vLyB0aGlzLnN0YXRlLmNhcmVQcmljZXNbaV0gPSBwYXJzZUZsb2F0KHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXSkudG9GaXhlZCgyKTtcclxuLy8gdmFyIGIgPSAnLCc7XHJcbi8vIHZhciBwb3MgPSBhLmxlbmd0aC0yO1xyXG4vLyB2YXIgb3V0cHV0ID0gY1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9kZWNsYXJhdGllcy9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFaQTs7Ozs7QUFnQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQWpGQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBSUE7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlGQTs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFIQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==