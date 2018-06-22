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

var _jsxFileName = 'C:\\Projects\\Cicero\\pages\\index.js?entry';


var DeclarationIndex = function (_Component) {
  (0, _inherits3.default)(DeclarationIndex, _Component);

  function DeclarationIndex() {
    (0, _classCallCheck3.default)(this, DeclarationIndex);

    return (0, _possibleConstructorReturn3.default)(this, (DeclarationIndex.__proto__ || (0, _getPrototypeOf2.default)(DeclarationIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(DeclarationIndex, [{
    key: 'renderDeclarations',
    value: function renderDeclarations() {
      var items = this.props.declarations.map(function (address) {
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
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Declaraties'), this.renderDeclarations());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var declarations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeclarations().call();

              case 2:
                declarations = _context.sent;
                return _context.abrupt('return', { declarations: declarations });

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

  return DeclarationIndex;
}(_react.Component);

exports.default = DeclarationIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkRlY2xhcmF0aW9uSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiZGVjbGFyYXRpb25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJlbmRlckRlY2xhcmF0aW9ucyIsIm1ldGhvZHMiLCJnZXREZWNsYXJhdGlvbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJQUdmLEE7Ozs7Ozs7Ozs7O3lDQU9pQixBQUNuQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUFJLG1CQUFXLEFBQ25EOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyx5QkFBTixBQUE2Qjt3QkFBN0I7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7aUJBUEssQUFPRSxBQUNQO2lCQUFPLEVBQUUsY0FSWCxBQUFPLEFBUUUsQUFBZ0IsQUFFMUI7QUFWUSxBQUNMO0FBRkosQUFBYyxBQWFkLE9BYmM7OzJDQWFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQyxxQkFITCxBQUNFLEFBRUcsQUFBSyxBQUdYOzs7Ozs7Ozs7Ozs7dUJBN0I0QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isa0JBQWhCLEFBQWtDLEE7O21CQUF2RDtBO2lEQUVDLEVBQUUsY0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSm9CLEEsQUFrQy9COztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1Byb2plY3RzL0NpY2VybyJ9