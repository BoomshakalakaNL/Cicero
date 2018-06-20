'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\declaraties\\new.js?entry';


var NewDeclaration = function (_Component) {
  (0, _inherits3.default)(NewDeclaration, _Component);

  function NewDeclaration() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, NewDeclaration);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewDeclaration.__proto__ || (0, _getPrototypeOf2.default)(NewDeclaration)).call(this));

    _this.handleDeclrationCodeChange = function (idx) {
      return function (evt) {
        var newDeclarations = _this.state.declarations.map(function (declaration, sidx) {
          if (idx !== sidx) return declaration;
          return (0, _extends3.default)({}, declaration, { code: evt.target.value });
        });

        _this.setState({ declarations: newDeclarations });
      };
    };

    _this.handleDeclarationAmountChange = function (idx) {
      return function (evt) {
        var newDeclarations = _this.state.declarations.map(function (declaration, sidx) {
          if (idx !== sidx) return declaration;
          return (0, _extends3.default)({}, declaration, { amount: evt.target.value });
        });

        _this.setState({ declarations: newDeclarations });
      };
    };

    _this.handleDeclarationPriceChange = function (idx) {
      return function (evt) {
        var newDeclarations = _this.state.declarations.map(function (declaration, sidx) {
          if (idx !== sidx) return declaration;
          return (0, _extends3.default)({}, declaration, { price: evt.target.value });
        });

        _this.setState({ declarations: newDeclarations });
      };
    };

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(evt) {
        var codes, amounts, prices, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                evt.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                codes = [];
                amounts = [];
                prices = [];

                _this.state.declarations.forEach(function (element) {
                  codes.push(element.code);
                  amounts.push(element.amount);
                  prices.push(element.price);
                });
                _context.prev = 6;
                _context.next = 9;
                return _web2.default.eth.getAccounts();

              case 9:
                accounts = _context.sent;
                _context.next = 12;
                return _factory2.default.methods.createDeclaration(_this.state.insurance, _this.state.client, codes.join(";"), amounts.join(";"), prices.join(";"), _this.state.dateDeclaration, _this.state.dateEndDeclaration).send({
                  from: accounts[0]
                });

              case 12:
                _routes.Router.pushRoute('/');
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](6);

                _this.setState({ errorMessage: _context.t0.message });

              case 18:
                _this.setState({ loading: false });

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[6, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleAddDeclaration = function () {
      _this.setState({ declarations: _this.state.declarations.concat([{ code: '', amount: '', price: '' }]) });
    };

    _this.handleRemoveDeclaration = function (idx) {
      return function () {
        _this.setState({ declarations: _this.state.declarations.filter(function (s, sidx) {
            return idx !== sidx;
          }) });
      };
    };

    _this.state = {
      insurance: '',
      client: '',
      dateDeclaration: '',
      dateEndDeclaration: '',
      errorMessage: '',
      loading: false,
      declarations: [{
        code: '',
        amount: '',
        price: ''
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(NewDeclaration, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Declarations'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, loading: this.state.loading, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Address van Verzekeraar:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.insurance,
        onChange: function onChange(event) {
          return _this3.setState({ insurance: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Address van Cli\xEBnt:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.client,
        onChange: function onChange(event) {
          return _this3.setState({ client: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, 'Declaratie datum:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.dateDeclaration,
        type: 'date',
        onChange: function onChange(event) {
          return _this3.setState({ dateDeclaration: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, 'Declaratie eind datum:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.dateEndDeclaration,
        type: 'date',
        onChange: function onChange(event) {
          return _this3.setState({ dateEndDeclaration: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), this.state.declarations.map(function (declaration, idx) {
        return _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, 'Code'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, placeholder: 'A5', value: declaration.code, onChange: _this3.handleDeclrationCodeChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, 'Aantal'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, type: 'number', placeholder: '12', value: declaration.amount, onChange: _this3.handleDeclarationAmountChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, 'Prijs'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, type: 'number', placeholder: '1800', value: declaration.price, onChange: _this3.handleDeclarationPriceChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        })), _react2.default.createElement(_semanticUiReact.Button, { type: 'button', style: { height: '38px', marginTop: '23px' }, onClick: _this3.handleRemoveDeclaration(idx), warning: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, 'Remove'));
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'button', onClick: this.handleAddDeclaration, className: 'small', success: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, 'Add Declaration'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', style: { marginTop: '40px' }, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, 'Verstuur')));
    }
  }]);

  return NewDeclaration;
}(_react.Component);

exports.default = NewDeclaration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3RGVjbGFyYXRpb24iLCJoYW5kbGVEZWNscmF0aW9uQ29kZUNoYW5nZSIsImlkeCIsImV2dCIsIm5ld0RlY2xhcmF0aW9ucyIsInN0YXRlIiwiZGVjbGFyYXRpb25zIiwibWFwIiwiZGVjbGFyYXRpb24iLCJzaWR4IiwiY29kZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJoYW5kbGVEZWNsYXJhdGlvbkFtb3VudENoYW5nZSIsImFtb3VudCIsImhhbmRsZURlY2xhcmF0aW9uUHJpY2VDaGFuZ2UiLCJwcmljZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsImNvZGVzIiwiYW1vdW50cyIsInByaWNlcyIsImZvckVhY2giLCJlbGVtZW50IiwicHVzaCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlRGVjbGFyYXRpb24iLCJpbnN1cmFuY2UiLCJjbGllbnQiLCJqb2luIiwiZGF0ZURlY2xhcmF0aW9uIiwiZGF0ZUVuZERlY2xhcmF0aW9uIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiaGFuZGxlQWRkRGVjbGFyYXRpb24iLCJjb25jYXQiLCJoYW5kbGVSZW1vdmVEZWNsYXJhdGlvbiIsImZpbHRlciIsInMiLCJldmVudCIsImhlaWdodCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7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QUEsMkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBREYsQUFDRSxBQUNBLDBCQUFBLEFBQUMsd0NBQU0sT0FBUCxNQUFhLE1BQWIsQUFBa0IsVUFBUyxhQUEzQixBQUF1QyxRQUFPLE9BQU8sWUFBckQsQUFBaUUsT0FBTyxVQUFVLE9BQUEsQUFBSyw2QkFBdkYsQUFBa0YsQUFBa0M7c0JBQXBIO3dCQVhKLEFBU0UsQUFFRSxBQUVGO0FBRkU7NkJBRUYsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxPQUFPLEVBQUMsUUFBRCxBQUFTLFFBQVEsV0FBOUMsQUFBNkIsQUFBNEIsVUFBUyxTQUFTLE9BQUEsQUFBSyx3QkFBaEYsQUFBMkUsQUFBNkIsTUFBTSxTQUE5RztzQkFBQTt3QkFBQTtBQUFBO1dBZHlCLEFBQzNCLEFBYUU7QUEvQ04sQUFpQ0csQUFpQkQsMEJBQUEsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxTQUFTLEtBQS9CLEFBQW9DLHNCQUFzQixXQUExRCxBQUFvRSxTQUFRLFNBQTVFO29CQUFBO3NCQUFBO0FBQUE7U0FsREYsQUFrREUsQUFDQTs7b0JBQUE7c0JBbkRGLEFBbURFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMseUNBQU8sTUFBUixBQUFhLFVBQVMsT0FBTyxFQUFDLFdBQTlCLEFBQTZCLEFBQVksVUFBUyxTQUFsRDtvQkFBQTtzQkFBQTtBQUFBO1NBdkROLEFBQ0UsQUFFRSxBQW9ERSxBQUlQOzs7OztBQTFJMEIsQSxBQTZJN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3Njb3R0L0RvY3VtZW50cy9adXlkIEhvZ2VzY2hvb2wvTGVlcmphYXIgNC9CbG9rIDQvQk0xNCAtIEJsb2NrY2hhaW4vU29saWRpdHkvQ2ljZXJvIn0=