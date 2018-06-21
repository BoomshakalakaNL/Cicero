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