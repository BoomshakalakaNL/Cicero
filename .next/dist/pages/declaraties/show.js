"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _declaration = require("../../ethereum/declaration");

var _declaration2 = _interopRequireDefault(_declaration);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

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
      var grandTotaal;
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
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Declaratie details van adres: ", this.props.address), _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Overzicht geleverde zorg"), _react2.default.createElement(_routes.Link, { route: "/declaraties/" + this.props.address + "/edit", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Bewerk details")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 6, centered: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, this.renderCards()), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Extra informatie"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Client address: ", this.state.client), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Verzekeraar address: ", this.state.insurance), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Zorgkantoor address: ", this.state.careAdminOff), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Goedgekeurd door Zorgkantoor:", " ", this.state.isValidated.toString()), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Goedgekeurd: ", this.state.isAccepted.toString(), " ")), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Totaalprijs Declaratie"), _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "\u20AC", this.calcGrandTotal().grandTotal), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, this.state.isValidated ? this.state.isAccepted ? null : _react2.default.createElement(_semanticUiReact.Button, { onClick: this.goedkeuren, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Goedkeuren") : _react2.default.createElement(_semanticUiReact.Button, { onClick: this.valideren, secondary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Valideren"), _react2.default.createElement(_semanticUiReact.Message, { error: true, content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }))))));
    }
  }, {
    key: "calcGrandTotal",
    value: function calcGrandTotal() {
      var grandTotal = 0;
      for (var i = 0; i < this.state.careCodes.length; i++) {
        var a = this.state.carePrices[i];
        a = parseInt(this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2));
        this.state.carePrices[i] = [this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2), ",", this.state.carePrices[i].slice(this.state.carePrices[i].length - 2)].join("");
        var totalPrice = parseFloat(this.state.careAmounts[i] * a).toFixed(2);
        grandTotal += parseInt(totalPrice);
      }
      return {
        grandTotal: grandTotal
      };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNhcmQiLCJHcmlkIiwiSW1hZ2UiLCJNZXNzYWdlIiwiRm9ybSIsIkRlY2xhcmF0aW9uIiwid2ViMyIsIkxpbmsiLCJEZWNsYXJhdGlvblNob3ciLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImNsaWVudCIsInByb3BzIiwic3VtbWFyeSIsImluc3VyYW5jZSIsImNhcmVBZG1pbk9mZiIsImNhcmVDb2RlcyIsInNwbGl0IiwiY2FyZUFtb3VudHMiLCJjYXJlUHJpY2VzIiwiZGF0ZURlY2xhcmF0aW9uIiwiZGF0ZUVuZERlY2xhcmF0aW9uIiwiaXNWYWxpZGF0ZWQiLCJpc0FjY2VwdGVkIiwibG9hZGluZyIsImdyYW5kVG90YWwiLCJnb2Vka2V1cmVuIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlY2xhcmF0aW9uIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhY2NlcHQiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ2YWxpZGVyZW4iLCJ2YWxpZGF0ZSIsIkNhcmRzIiwiZ3JhbmRUb3RhYWwiLCJpIiwibGVuZ3RoIiwiYSIsInBhcnNlSW50Iiwic2xpY2UiLCJqb2luIiwidG90YWxQcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicHVzaCIsInJlbmRlckNhcmRzIiwidG9TdHJpbmciLCJjYWxjR3JhbmRUb3RhbCIsIm9uU3VibWl0IiwicXVlcnkiLCJnZXREZWNsYXJhdGlvbiIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBTyxBQUFTOztBQUM3QyxBQUFPLEFBQWlC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QyxRQUEzRCxBQUFpQixBQUFrRCxBQUNuRTtzQkFBYyxTQUFkLEFBQWMsQUFBUyxBQUV4QjtBQUNEOztvQkFBQSxBQUFPLEFBR1I7QUFIUSxBQUNMOzs7Ozs2R0EvSXlCLEE7Ozs7Ozs7dUJBQ0osY0FBQSxBQUFLLElBQUwsQUFBUyxBOzttQkFBMUI7QSxxQ0FDQTtBLDhCQUFjLDJCQUFZLE1BQUEsQUFBTSxNQUFsQixBQUF3QixBOzt1QkFDdEIsWUFBQSxBQUFZLFFBQVosQUFDbkIsaUJBRG1CLEFBRW5CLEtBQUssRUFBRSxNQUFNLFMsQUFGTSxBQUVkLEFBQVEsQUFBUzs7bUJBRm5CO0E7OzJCQUlLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCOzJCLEFBRkssQUFFSTtBQUZKLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSd0IsQTtBQW1LOUIsQUFLQTs7Ozs7O2tCQUFBLEFBQWU7OztBQUVmLEFBSUM7QUFIQzs7OztBQUtGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1Byb2plY3RzL0Jsb2NrY2hhaW4va2lja3N0YXJ0ZXIvQ2ljZXJvIn0=