'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _declaration = require('../../ethereum/declaration');

var _declaration2 = _interopRequireDefault(_declaration);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\declaraties\\show.js?entry';


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
      errorMessage: '',
      client: '',
      insurance: '',
      careAdminOff: '',
      careCodes: '',
      carePrices: '',
      dateDeclaration: '',
      isValidated: '',
      isAccepted: '',
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

                _this.setState({ loading: true, errorMessage: '' });
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
                _context.t0 = _context['catch'](4);

                console.log(_context.t0.message);
                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false });
                console.log(_this.state);

              case 18:
              case 'end':
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Declaratie details'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Declaratie address: ', this.props.address), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, onClick: this.load, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Load'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', {
                  address: props.query.address
                });

              case 1:
              case 'end':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkRlY2xhcmF0aW9uIiwid2ViMyIsIkxpbmsiLCJEZWNsYXJhdGlvblNob3ciLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImNsaWVudCIsImluc3VyYW5jZSIsImNhcmVBZG1pbk9mZiIsImNhcmVDb2RlcyIsImNhcmVQcmljZXMiLCJkYXRlRGVjbGFyYXRpb24iLCJpc1ZhbGlkYXRlZCIsImlzQWNjZXB0ZWQiLCJsb2FkaW5nIiwibG9hZCIsImV2ZW50IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwiZGVjbGFyYXRpb24iLCJwcm9wcyIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0RGVjbGFyYXRpb24iLCJjYWxsIiwiZnJvbSIsInN1bW1hcnkiLCJzcGxpdCIsImNhcmVBbW91bnRzIiwiZGF0ZUVuZERlY2xhcmF0aW9uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUzs7QUFDVCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7OE4sQUFNSjtvQkFBUSxBQUNRLEFBQ2Q7Y0FGTSxBQUVFLEFBQ1I7aUJBSE0sQUFHSyxBQUNYO29CQUpNLEFBSVEsQUFDZDtpQkFMTSxBQUtLLEFBQ1g7a0JBTk0sQUFNTSxBQUNaO3VCQVBNLEFBT1csQUFDakI7bUJBUk0sQUFRTyxBQUNiO2tCQVRNLEFBU00sQUFDWjtlQVZNLEFBVUcsQTtBQVZILEFBQ04sYSxBQVlGOzJGQUFPLGlCQUFBLEFBQU8sT0FBUDttQ0FBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFBQTtnQ0FBQTt1QkFDa0IsY0FBQSxBQUFLLElBRHZCLEFBQ2tCLEFBQVM7O21CQUExQjtBQURELG9DQUVMOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUYxQixBQUVMLEFBQWMsQUFBK0I7Z0NBRXJDO0FBSkgsOEJBSWlCLDJCQUFZLE1BQUEsQUFBSyxNQUpsQyxBQUlpQixBQUF1QjtnQ0FKeEM7dUJBS21CLFlBQUEsQUFBWSxRQUFaLEFBQW9CLGlCQUFwQixBQUFxQyxLQUFLLEVBQUMsTUFBSyxTQUxuRSxBQUttQixBQUEwQyxBQUFNLEFBQVM7O21CQUF6RTtBQUxILG1DQU1IOztzQkFBQSxBQUFLOzZCQUNRLFFBREMsQUFDRCxBQUFRLEFBQ25COzBCQUFRLFFBRkksQUFFSixBQUFRLEFBQ2hCO2dDQUFjLFFBSEYsQUFHRSxBQUFRLEFBQ3RCOzZCQUFXLFFBQUEsQUFBUSxHQUFSLEFBQVcsTUFKVixBQUlELEFBQWlCLE1BQU0sQUFDbEM7K0JBQWEsUUFBQSxBQUFRLEdBQVIsQUFBVyxNQUxaLEFBS0MsQUFBaUIsQUFDOUI7OEJBQVksUUFBQSxBQUFRLEdBQVIsQUFBVyxNQU5YLEFBTUEsQUFBaUIsTUFBTSxBQUNuQzttQ0FBaUIsUUFQTCxBQU9LLEFBQVEsQUFDekI7c0NBQW9CLFFBUlIsQUFRUSxBQUFRLEFBQzVCOytCQUFhLFFBVEQsQUFTQyxBQUFRLEFBQ3JCOzhCQUFZLFFBaEJYLEFBTUgsQUFBYyxBQVVBLEFBQVE7QUFWUixBQUNaO2dDQVBDO0FBQUE7O21CQUFBO2dDQUFBO2dEQW9CSDs7d0JBQUEsQUFBUSxJQUFJLFlBQVosQUFBZ0IsQUFDaEI7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQXJCMUIsQUFxQkgsQUFBYyxBQUFtQjs7bUJBRW5DO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYyxBQUFVLEFBQ3hCO3dCQUFBLEFBQVEsSUFBSSxNQXhCUCxBQXdCTCxBQUFpQjs7bUJBeEJaO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBMkJDLEFBQ047NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUNBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQXdCLDZCQUFBLEFBQUssTUFGL0IsQUFFRSxBQUFtQyxBQUNuQzs7b0JBQUE7c0JBSEYsQUFHRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBUyxLQUE5QyxBQUFtRCxNQUFNLFNBQXpEO29CQUFBO3NCQUFBO0FBQUE7U0FMSixBQUNFLEFBSUUsQUFHTDs7Ozs7NkdBdEQ0QixBOzs7Ozs7MkJBRWhCLE1BQUEsQUFBTSxNQURYLEFBQ2lCLEE7QUFEakIsQUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUh3QixBLEFBMEQ5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3Njb3R0L0RvY3VtZW50cy9adXlkIEhvZ2VzY2hvb2wvTGVlcmphYXIgNC9CbG9rIDQvQk0xNCAtIEJsb2NrY2hhaW4vU29saWRpdHkvQ2ljZXJvIn0=