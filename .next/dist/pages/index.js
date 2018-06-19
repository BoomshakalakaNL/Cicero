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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes.js');

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
              lineNumber: 20
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          }, 'Bekijk details')),
          fluid: true,
          style: { overflowWrap: 'break-word' }
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Hello World'), this.renderDeclaraties());
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
}(_react.Component);

exports.default = DeclaratieIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkRlY2xhcmF0aWVJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJkZWNsYXJhdGllcyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJyZW5kZXJEZWNsYXJhdGllcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZERlY2xhcmF0aWVzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SUFHZixBOzs7Ozs7Ozs7Ozt3Q0FPZ0IsQUFDbEI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsSUFBSSxtQkFBVyxBQUNsRDs7a0JBQU8sQUFDRyxBQUNSO3VDQUNFLEFBQUMsOEJBQUsseUJBQU4sQUFBNkI7d0JBQTdCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpDLEFBR0gsQUFDRSxBQUdKO2lCQVBLLEFBT0UsQUFDUDtpQkFBTyxFQUFFLGNBUlgsQUFBTyxBQVFFLEFBQWdCLEFBRTFCO0FBVlEsQUFDTDtBQUZKLEFBQWMsQUFhZCxPQWJjOzsyQ0FhUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0MscUJBSEwsQUFDRSxBQUVHLEFBQUssQUFHWDs7Ozs7Ozs7Ozs7O3VCQTdCMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHlCQUFoQixBQUF5QyxBOzttQkFBN0Q7QTtpREFFQyxFQUFFLGFBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUptQixBLEFBa0M5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zY290dC9Eb2N1bWVudHMvWnV5ZCBIb2dlc2Nob29sL0xlZXJqYWFyIDQvQmxvayA0L0JNMTQgLSBCbG9ja2NoYWluL1NvbGlkaXR5L0NpY2VybyJ9