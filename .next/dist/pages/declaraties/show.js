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
        this.state.carePrices[i] = [this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2), ",", this.state.carePrices[i].slice(this.state.carePrices[i].length - 2)].join('');
        var totalPrice = parseFloat(this.state.careAmounts[i] * a).toFixed(2);
        this.state.grandTotal = this.state.grandTotal + totalPrice;
        Cards.push(_react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, this.state.careCodes[i]), _react2.default.createElement(_semanticUiReact.Card.Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, this.state.careAmounts[i], " x \u20AC", this.state.carePrices[i]), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
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
          lineNumber: 63
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Declaratie details van adres: ", this.props.address), _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Overzicht geleverde zorg"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 6, centered: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.renderCards()), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement("div", { "class": "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Randomtext"));
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

exports.default = DeclarationShow;


{} /* <Button loading={this.state.loading} onClick={this.load} primary>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNhcmQiLCJEZWNsYXJhdGlvbiIsIndlYjMiLCJMaW5rIiwiRGVjbGFyYXRpb25TaG93Iiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJjbGllbnQiLCJwcm9wcyIsInN1bW1hcnkiLCJpbnN1cmFuY2UiLCJjYXJlQWRtaW5PZmYiLCJjYXJlQ29kZXMiLCJzcGxpdCIsImNhcmVBbW91bnRzIiwiY2FyZVByaWNlcyIsImRhdGVEZWNsYXJhdGlvbiIsImRhdGVFbmREZWNsYXJhdGlvbiIsImlzVmFsaWRhdGVkIiwiaXNBY2NlcHRlZCIsImxvYWRpbmciLCJncmFuZFRvdGFsIiwiQ2FyZHMiLCJpIiwibGVuZ3RoIiwiYSIsInBhcnNlSW50Iiwic2xpY2UiLCJqb2luIiwidG90YWxQcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZGVjbGFyYXRpb24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXREZWNsYXJhdGlvbiIsImNhbGwiLCJmcm9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVE7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OzhOLEFBWUo7b0JBQVEsQUFDUSxBQUNkO2NBQVEsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUZiLEFBRUUsQUFBbUIsQUFDM0I7aUJBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUhoQixBQUdLLEFBQW1CLEFBQzlCO29C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