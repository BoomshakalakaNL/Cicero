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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _declaration = require('../../ethereum/declaration');

var _declaration2 = _interopRequireDefault(_declaration);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\declaraties\\edit.js?entry';


var EditDeclaration = function (_Component) {
  (0, _inherits3.default)(EditDeclaration, _Component);

  function EditDeclaration() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EditDeclaration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditDeclaration.__proto__ || (0, _getPrototypeOf2.default)(EditDeclaration)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

  (0, _createClass3.default)(EditDeclaration, [{
    key: 'render',
    value: function render() {
      console.log(this.props.summary);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Bewerken declaratie'));
    }
  }], [{
    key: 'getInitialProps',
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
                return _context.abrupt('return', {
                  address: props.query.address,
                  summary: summary
                });

              case 8:
              case 'end':
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

  return EditDeclaration;
}(_react.Component);

exports.default = EditDeclaration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcZWRpdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJEZWNsYXJhdGlvbiIsIndlYjMiLCJSb3V0ZXIiLCJFZGl0RGVjbGFyYXRpb24iLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImNsaWVudCIsInByb3BzIiwic3VtbWFyeSIsImluc3VyYW5jZSIsImNhcmVBZG1pbk9mZiIsImNhcmVDb2RlcyIsInNwbGl0IiwiY2FyZUFtb3VudHMiLCJjYXJlUHJpY2VzIiwiZGF0ZURlY2xhcmF0aW9uIiwiZGF0ZUVuZERlY2xhcmF0aW9uIiwiaXNWYWxpZGF0ZWQiLCJpc0FjY2VwdGVkIiwibG9hZGluZyIsImdyYW5kVG90YWwiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImRlY2xhcmF0aW9uIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldERlY2xhcmF0aW9uIiwiY2FsbCIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs4TixBQVlKO29CQUFRLEFBQ1EsQUFDZDtjQUFRLE1BQUEsQUFBSyxNQUFMLEFBQVcsUUFGYixBQUVFLEFBQW1CLEFBQzNCO2lCQUFXLE1BQUEsQUFBSyxNQUFMLEFBQVcsUUFIaEIsQUFHSyxBQUFtQixBQUM5QjtvQkFBYyxNQUFBLEFBQUssTUFBTCxBQUFXLFFBSm5CLEFBSVEsQUFBbUIsQUFDakM7aUJBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEdBQW5CLEFBQXNCLE1BTDNCLEFBS0ssQUFBNEIsQUFDdkM7bUJBQWEsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEdBQW5CLEFBQXNCLE1BTjdCLEFBTU8sQUFBNEIsQUFDekM7a0JBQVksTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEdBQW5CLEFBQXNCLE1BUDVCLEFBT00sQUFBNEIsQUFDeEM7dUJBQWlCLE1BQUEsQUFBSyxNQUFMLEFBQVcsUUFSdEIsQUFRVyxBQUFtQixBQUNwQzswQkFBb0IsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQVR6QixBQVNjLEFBQW1CLEFBQ3ZDO21CQUFhLE1BQUEsQUFBSyxNQUFMLEFBQVcsUUFWbEIsQUFVTyxBQUFtQixBQUNoQztrQkFBWSxNQUFBLEFBQUssTUFBTCxBQUFXLFFBWGpCLEFBV00sQUFBbUIsQUFDL0I7ZUFaTSxBQVlHLEFBQ1Q7a0JBYk0sQUFhTSxBO0FBYk4sQUFDTjs7Ozs7NkJBZU0sQUFDTjtjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFHTDs7Ozs7NEdBbEM0QixBOzs7Ozs7O3VCQUNKLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0Esb0NBQ0E7QSw4QkFBYywyQkFBWSxNQUFBLEFBQU0sTUFBbEIsQUFBd0IsQTs7dUJBQ3RCLFlBQUEsQUFBWSxRQUFaLEFBQ25CLGlCQURtQixBQUVuQixLQUFLLEVBQUUsTUFBTSxTQUZNLEFBRWQsQUFBUSxBLEFBQVM7O21CQUZuQjtBOzsyQkFJSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjsyQixBQUZLLEFBRUk7QUFGSixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUndCLEEsQUFxQzlCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImVkaXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvc2NvdHQvRG9jdW1lbnRzL1p1eWQgSG9nZXNjaG9vbC9MZWVyamFhciA0L0Jsb2sgNC9CTTE0IC0gQmxvY2tjaGFpbi9Tb2xpZGl0eS9DaWNlcm8ifQ==