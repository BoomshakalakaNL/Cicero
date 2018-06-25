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

var _jsxFileName = "C:\\Projects\\Cicero\\pages\\declaraties\\show.js?entry";


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
      loading: false,
      grandTotal: 0
    }, _this.goedkeuren = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var declaration, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                declaration = (0, _declaration2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: "" });
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return declaration.methods.accept().send({
                  from: accounts[0]
                });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.valideren = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var declaration, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                declaration = (0, _declaration2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: "" });
                _context2.prev = 3;
                _context2.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context2.sent;
                _context2.next = 9;
                return declaration.methods.validate().send({
                  from: accounts[0]
                });

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);

                _this.setState({ errorMessage: _context2.t0.message });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[3, 11]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
      }, "Overzicht geleverde zorg"), _react2.default.createElement(_routes.Link, { route: "/declaraties/" + this.props.address + "/edit", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Bewerk details")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 6, centered: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, this.renderCards()), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Extra informatie"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Client address: ", this.state.client), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Verzekeraar address: ", this.state.insurance), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Zorgkantoor address: ", this.state.careAdminOff), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Goedgekeurd door Zorgkantoor:", " ", this.state.isValidated.toString()), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Goedgekeurd: ", this.state.isAccepted.toString(), " ")), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Totaalprijs Declaratie"), _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "\u20AC", this.state.grandTotal), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.valideren, secondary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "Valideren"), _react2.default.createElement(_semanticUiReact.Button, {
        onClick: this.goedkeuren,
        error: !!this.state.errorMessage,
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Goedkeuren"), _react2.default.createElement(_semanticUiReact.Message, { error: true, content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var accounts, declaration, summary;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context3.sent;
                declaration = (0, _declaration2.default)(props.query.address);
                _context3.next = 6;
                return declaration.methods.getDeclaration().call({ from: accounts[0] });

              case 6:
                summary = _context3.sent;
                return _context3.abrupt("return", {
                  address: props.query.address,
                  summary: summary
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x3) {
        return _ref4.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNhcmQiLCJHcmlkIiwiSW1hZ2UiLCJNZXNzYWdlIiwiRm9ybSIsIkRlY2xhcmF0aW9uIiwid2ViMyIsIkxpbmsiLCJEZWNsYXJhdGlvblNob3ciLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImNsaWVudCIsInByb3BzIiwic3VtbWFyeSIsImluc3VyYW5jZSIsImNhcmVBZG1pbk9mZiIsImNhcmVDb2RlcyIsInNwbGl0IiwiY2FyZUFtb3VudHMiLCJjYXJlUHJpY2VzIiwiZGF0ZURlY2xhcmF0aW9uIiwiZGF0ZUVuZERlY2xhcmF0aW9uIiwiaXNWYWxpZGF0ZWQiLCJpc0FjY2VwdGVkIiwibG9hZGluZyIsImdyYW5kVG90YWwiLCJnb2Vka2V1cmVuIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlY2xhcmF0aW9uIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhY2NlcHQiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ2YWxpZGVyZW4iLCJ2YWxpZGF0ZSIsIkNhcmRzIiwiaSIsImxlbmd0aCIsImEiLCJwYXJzZUludCIsInNsaWNlIiwiam9pbiIsInRvdGFsUHJpY2UiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicmVuZGVyQ2FyZHMiLCJ0b1N0cmluZyIsIm9uU3VibWl0IiwicXVlcnkiLCJnZXREZWNsYXJhdGlvbiIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBTyxBQUFTOztBQUM3QyxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8s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LDhCQUFBLEFBQUM7aUJBQ1UsS0FEWCxBQUNnQixBQUNkO2VBQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUZoQixBQUVzQixBQUNwQjtpQkFIRjs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBTEosQUFJRSxBQVFBLCtCQUFBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTdCLEFBQW1DO29CQUFuQztzQkF6Q1osQUFDRSxBQVlFLEFBQ0UsQUFZRSxBQUdFLEFBWUUsQUFPYjtBQVBhOzs7Ozs7NkcsQUF0R2U7Ozs7Ozs7dUJBQ0osY0FBQSxBQUFLLElBQUwsQUFBUyxBOzttQkFBMUI7QSxxQ0FDQTtBLDhCQUFjLDJCQUFZLE1BQUEsQUFBTSxNQUFsQixBQUF3QixBOzt1QkFDdEIsWUFBQSxBQUFZLFFBQVosQUFDbkIsaUJBRG1CLEFBRW5CLEtBQUssRUFBRSxNQUFNLFNBRk0sQUFFZCxBQUFRLEEsQUFBUzs7bUJBRm5CO0E7OzJCQUlLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCOzJCQUZLLEFBRUksQTtBQUZKLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSd0IsQTtBQThJOUIsQUFLQTs7Ozs7O2tCQUFBLEFBQWU7OztBQUVmLEFBSUM7QUFIQzs7OztBQUtGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1Byb2plY3RzL0NpY2VybyJ9

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Projects\\Cicero\\pages\\declaraties\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Projects\\Cicero\\pages\\declaraties\\show.js"); } } })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5hMGY5NGYyZGFlNTcxOTdmNjUyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGVjbGFyYXRpZXMvc2hvdy5qcz8zZmQ3NzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBHcmlkLCBJbWFnZSwgTWVzc2FnZSwgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2RlY2xhcmF0aW9uXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jbGFzcyBEZWNsYXJhdGlvblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgZGVjbGFyYXRpb24ubWV0aG9kc1xyXG4gICAgICAuZ2V0RGVjbGFyYXRpb24oKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgc3VtbWFyeTogc3VtbWFyeVxyXG4gICAgfTtcclxuICB9XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICBjbGllbnQ6IHRoaXMucHJvcHMuc3VtbWFyeVsxXSxcclxuICAgIGluc3VyYW5jZTogdGhpcy5wcm9wcy5zdW1tYXJ5WzBdLFxyXG4gICAgY2FyZUFkbWluT2ZmOiB0aGlzLnByb3BzLnN1bW1hcnlbMl0sXHJcbiAgICBjYXJlQ29kZXM6IHRoaXMucHJvcHMuc3VtbWFyeVszXS5zcGxpdChcIjtcIiksXHJcbiAgICBjYXJlQW1vdW50czogdGhpcy5wcm9wcy5zdW1tYXJ5WzRdLnNwbGl0KFwiO1wiKSxcclxuICAgIGNhcmVQcmljZXM6IHRoaXMucHJvcHMuc3VtbWFyeVs1XS5zcGxpdChcIjtcIiksXHJcbiAgICBkYXRlRGVjbGFyYXRpb246IHRoaXMucHJvcHMuc3VtbWFyeVs2XSxcclxuICAgIGRhdGVFbmREZWNsYXJhdGlvbjogdGhpcy5wcm9wcy5zdW1tYXJ5WzddLFxyXG4gICAgaXNWYWxpZGF0ZWQ6IHRoaXMucHJvcHMuc3VtbWFyeVs4XSxcclxuICAgIGlzQWNjZXB0ZWQ6IHRoaXMucHJvcHMuc3VtbWFyeVs5XSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZ3JhbmRUb3RhbDogMFxyXG4gIH07XHJcblxyXG4gIHJlbmRlckNhcmRzKCkge1xyXG4gICAgdmFyIENhcmRzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmNhcmVDb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgYSA9IHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXTtcclxuICAgICAgYSA9IHBhcnNlSW50KFxyXG4gICAgICAgIHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXS5zbGljZSgwLCB0aGlzLnN0YXRlLmNhcmVQcmljZXNbaV0ubGVuZ3RoIC0gMilcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zdGF0ZS5jYXJlUHJpY2VzW2ldID0gW1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXS5zbGljZSgwLCB0aGlzLnN0YXRlLmNhcmVQcmljZXNbaV0ubGVuZ3RoIC0gMiksXHJcbiAgICAgICAgXCIsXCIsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jYXJlUHJpY2VzW2ldLnNsaWNlKHRoaXMuc3RhdGUuY2FyZVByaWNlc1tpXS5sZW5ndGggLSAyKVxyXG4gICAgICBdLmpvaW4oXCJcIik7XHJcbiAgICAgIHZhciB0b3RhbFByaWNlID0gcGFyc2VGbG9hdCh0aGlzLnN0YXRlLmNhcmVBbW91bnRzW2ldICogYSkudG9GaXhlZCgyKTtcclxuICAgICAgdGhpcy5zdGF0ZS5ncmFuZFRvdGFsICs9IHBhcnNlSW50KHRvdGFsUHJpY2UpO1xyXG4gICAgICBDYXJkcy5wdXNoKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPnt0aGlzLnN0YXRlLmNhcmVDb2Rlc1tpXX08L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhcmVBbW91bnRzW2ldfSB4IOKCrHt0aGlzLnN0YXRlLmNhcmVQcmljZXNbaV19XHJcbiAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxyXG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8aDM+VG90YWFsOiDigqx7dG90YWxQcmljZX08L2gzPlxyXG4gICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2FyZHM7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY2FyZUNvZGVzKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY2FyZVByaWNlcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5EZWNsYXJhdGllIGRldGFpbHMgdmFuIGFkcmVzOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvaDM+XHJcbiAgICAgICAgey8qIDxwPkRlY2xhcmF0aWUgYWRkcmVzczogPC9wPiAqL31cclxuICAgICAgICA8aDQ+T3ZlcnppY2h0IGdlbGV2ZXJkZSB6b3JnPC9oND5cclxuICAgICAgICA8TGluayByb3V0ZT17YC9kZWNsYXJhdGllcy8ke3RoaXMucHJvcHMuYWRkcmVzc30vZWRpdGB9PlxyXG4gICAgICAgICAgPGE+QmV3ZXJrIGRldGFpbHM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXs2fSBjZW50ZXJlZD5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgPC9DYXJkLkdyb3VwPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEyfT5cclxuICAgICAgICAgICAgICA8aDM+RXh0cmEgaW5mb3JtYXRpZTwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+Q2xpZW50IGFkZHJlc3M6IHt0aGlzLnN0YXRlLmNsaWVudH08L3A+XHJcbiAgICAgICAgICAgICAgPHA+VmVyemVrZXJhYXIgYWRkcmVzczoge3RoaXMuc3RhdGUuaW5zdXJhbmNlfTwvcD5cclxuICAgICAgICAgICAgICA8cD5ab3Jna2FudG9vciBhZGRyZXNzOiB7dGhpcy5zdGF0ZS5jYXJlQWRtaW5PZmZ9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgR29lZGdla2V1cmQgZG9vciBab3Jna2FudG9vcjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1ZhbGlkYXRlZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5Hb2VkZ2VrZXVyZDoge3RoaXMuc3RhdGUuaXNBY2NlcHRlZC50b1N0cmluZygpfSA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgPGgzPlRvdGFhbHByaWpzIERlY2xhcmF0aWU8L2gzPlxyXG4gICAgICAgICAgICAgIDxoMT7igqx7dGhpcy5zdGF0ZS5ncmFuZFRvdGFsfTwvaDE+XHJcbiAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy52YWxpZGVyZW59IHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgICAgVmFsaWRlcmVuXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb2Vka2V1cmVufVxyXG4gICAgICAgICAgICAgICAgICBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHb2Vka2V1cmVuXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ29lZGtldXJlbiA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBkZWNsYXJhdGlvbi5tZXRob2RzLmFjY2VwdCgpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhbGlkZXJlbiA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGRlY2xhcmF0aW9uLm1ldGhvZHMudmFsaWRhdGUoKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUgKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG59XHJcbi8qXHJcbmFkZHJlc3NlbjogY2xpZW50LCB2ZXJ6ZWtlcmFhciwgem9yZ2thbnRvb3JcclxuZGF0ZURlY2xhcmF0aW9uXHJcbmRhdGVFbmREZWNsYXJhdGlvblxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBEZWNsYXJhdGlvblNob3c7XHJcblxyXG57XHJcbiAgLyogPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IG9uQ2xpY2s9e3RoaXMubG9hZH0gcHJpbWFyeT5cclxuICAgICAgICAgIExvYWRcclxuICAgICAgICA8L0J1dHRvbj4gKi9cclxufVxyXG5cclxuLy8gbG9hZCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuLy8gICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbi8vICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogXCJcIiB9KTtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4vLyAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGRlY2xhcmF0aW9uLm1ldGhvZHNcclxuLy8gICAgICAgLmdldERlY2xhcmF0aW9uKClcclxuLy8gICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICBpbnN1cmFuY2U6IHN1bW1hcnlbMF0sXHJcbi8vICAgICAgIGNsaWVudDogc3VtbWFyeVsxXSxcclxuLy8gICAgICAgY2FyZUFkbWluT2ZmOiBzdW1tYXJ5WzJdLFxyXG4vLyAgICAgICBjYXJlQ29kZXM6IHN1bW1hcnlbM10uc3BsaXQoXCI7XCIpLCAvLyAuam9pbihcIjtcIilcclxuLy8gICAgICAgY2FyZUFtb3VudHM6IHN1bW1hcnlbNF0uc3BsaXQoXCI7XCIpLFxyXG4vLyAgICAgICBjYXJlUHJpY2VzOiBzdW1tYXJ5WzVdLnNwbGl0KFwiO1wiKSwgLy8gLmpvaW4oXCI7XCIpXHJcbi8vICAgICAgIGRhdGVEZWNsYXJhdGlvbjogc3VtbWFyeVs2XSxcclxuLy8gICAgICAgZGF0ZUVuZERlY2xhcmF0aW9uOiBzdW1tYXJ5WzddLFxyXG4vLyAgICAgICBpc1ZhbGlkYXRlZDogc3VtbWFyeVs4XSxcclxuLy8gICAgICAgaXNBY2NlcHRlZDogc3VtbWFyeVs5XVxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuLy8gICB9XHJcbi8vICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4vLyAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4vLyB9O1xyXG5cclxuLy8gdGhpcy5zdGF0ZS5jYXJlUHJpY2VzW2ldID0gcGFyc2VGbG9hdCh0aGlzLnN0YXRlLmNhcmVQcmljZXNbaV0pLnRvRml4ZWQoMik7XHJcbi8vIHZhciBiID0gJywnO1xyXG4vLyB2YXIgcG9zID0gYS5sZW5ndGgtMjtcclxuLy8gdmFyIG91dHB1dCA9IGNcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGVjbGFyYXRpZXMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVpBO0FBbUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBSEE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBYkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFMQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFVQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQWxHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBT0E7QUFQQTs7Ozs7Ozs7Ozs7OztBQXJHQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBSUE7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBJQTs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFIQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==