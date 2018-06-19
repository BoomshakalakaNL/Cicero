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

var _declaratie = require('../../ethereum/declaratie');

var _declaratie2 = _interopRequireDefault(_declaratie);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\declaraties\\show.js?entry';


var DeclaratieShow = function (_Component) {
  (0, _inherits3.default)(DeclaratieShow, _Component);

  function DeclaratieShow() {
    (0, _classCallCheck3.default)(this, DeclaratieShow);

    return (0, _possibleConstructorReturn3.default)(this, (DeclaratieShow.__proto__ || (0, _getPrototypeOf2.default)(DeclaratieShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(DeclaratieShow, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Declaratie Details'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var declaratie, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                declaratie = (0, _declaratie2.default)(props.query.address);
                _context.next = 3;
                return declaratie.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address
                  // hier komt de summary van declaratie, zie contract
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DeclaratieShow;
}(_react.Component);

exports.default = DeclaratieShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkRlY2xhcmF0aWUiLCJ3ZWIzIiwiTGluayIsIkRlY2xhcmF0aWVTaG93IiwicHJvcHMiLCJkZWNsYXJhdGllIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7NkJBWUssQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBR0w7QUFISztBQUFBOzs7OzsyR0FmdUIsQTs7Ozs7bUJBQ3JCO0EsNkJBQWEsMEJBQVcsTUFBQSxBQUFNLE1BQWpCLEFBQXVCLEE7O3VCQUNwQixXQUFBLEFBQVcsUUFBWCxBQUFtQixhQUFuQixBQUFnQyxBOzttQkFBaEQ7QTs7MkJBRUssTUFBQSxBQUFNLE1BQU0sQUFDckI7QUFGSyxBO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUx1QixBLEFBc0I3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3Njb3R0L0RvY3VtZW50cy9adXlkIEhvZ2VzY2hvb2wvTGVlcmphYXIgNC9CbG9rIDQvQk0xNCAtIEJsb2NrY2hhaW4vU29saWRpdHkvQ2ljZXJvIn0=