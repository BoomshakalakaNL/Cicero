webpackHotUpdate(5,{

/***/ 787:
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

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

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

var _semanticUiReact = __webpack_require__(501);

var _Layout = __webpack_require__(1101);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(1119);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(730);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(724);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\declaraties\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\declaraties\\new.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/declaraties\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xMjc2ZjQwNDY1MjI1MzAyMDNjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGVjbGFyYXRpZXMvbmV3LmpzPzQ4OTYzOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qcyc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIE5ld0RlY2xhcmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbnN1cmFuY2UgOiAnJyxcclxuICAgICAgY2xpZW50OiAnJyxcclxuICAgICAgZGF0ZURlY2xhcmF0aW9uOiAnJyxcclxuICAgICAgZGF0ZUVuZERlY2xhcmF0aW9uOiAnJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGRlY2xhcmF0aW9uczogW3tcclxuICAgICAgICBjb2RlOiAnJyxcclxuICAgICAgICBhbW91bnQ6ICcnLFxyXG4gICAgICAgIHByaWNlOiAnJ1xyXG4gICAgICB9XSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZWNscmF0aW9uQ29kZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RlY2xhcmF0aW9ucyA9IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLm1hcCgoZGVjbGFyYXRpb24sIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIGRlY2xhcmF0aW9uO1xyXG4gICAgICByZXR1cm4geyAuLi5kZWNsYXJhdGlvbiwgY29kZTogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlY2xhcmF0aW9uczogbmV3RGVjbGFyYXRpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVjbGFyYXRpb25BbW91bnRDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEZWNsYXJhdGlvbnMgPSB0aGlzLnN0YXRlLmRlY2xhcmF0aW9ucy5tYXAoKGRlY2xhcmF0aW9uLCBzaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBkZWNsYXJhdGlvbjtcclxuICAgICAgcmV0dXJuIHsgLi4uZGVjbGFyYXRpb24sIGFtb3VudDogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlY2xhcmF0aW9uczogbmV3RGVjbGFyYXRpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVjbGFyYXRpb25QcmljZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RlY2xhcmF0aW9ucyA9IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLm1hcCgoZGVjbGFyYXRpb24sIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIGRlY2xhcmF0aW9uO1xyXG4gICAgICByZXR1cm4geyAuLi5kZWNsYXJhdGlvbiwgcHJpY2U6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZWNsYXJhdGlvbnM6IG5ld0RlY2xhcmF0aW9ucyB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldnQpID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJ30pO1xyXG4gICAgdmFyIGNvZGVzID0gW107XHJcbiAgICB2YXIgYW1vdW50cyA9IFtdO1xyXG4gICAgdmFyIHByaWNlcyA9IFtdO1xyXG4gICAgdGhpcy5zdGF0ZS5kZWNsYXJhdGlvbnMuZm9yRWFjaCggZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICBjb2Rlcy5wdXNoKGVsZW1lbnQuY29kZSk7XHJcbiAgICAgIGFtb3VudHMucHVzaChlbGVtZW50LmFtb3VudCk7XHJcbiAgICAgIHByaWNlcy5wdXNoKGVsZW1lbnQucHJpY2UpO1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5jcmVhdGVEZWNsYXJhdGlvbih0aGlzLnN0YXRlLmluc3VyYW5jZSwgdGhpcy5zdGF0ZS5jbGllbnQsIGNvZGVzLmpvaW4oXCI7XCIpLCBhbW91bnRzLmpvaW4oXCI7XCIpLCBwcmljZXMuam9pbihcIjtcIiksIHRoaXMuc3RhdGUuZGF0ZURlY2xhcmF0aW9uLCB0aGlzLnN0YXRlLmRhdGVFbmREZWNsYXJhdGlvbilcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGREZWNsYXJhdGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZWNsYXJhdGlvbnM6IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLmNvbmNhdChbeyBjb2RlOiAnJywgYW1vdW50OiAnJywgIHByaWNlOiAnJyB9XSkgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmVEZWNsYXJhdGlvbiA9IChpZHgpID0+ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZWNsYXJhdGlvbnM6IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLmZpbHRlcigocywgc2lkeCkgPT4gaWR4ICE9PSBzaWR4KSB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGg0PkRlY2xhcmF0aW9uczwvaDQ+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyB2YW4gVmVyemVrZXJhYXI6PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmluc3VyYW5jZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17IGV2ZW50ID0+IHRoaXMuc2V0U3RhdGUoIHtpbnN1cmFuY2U6IGV2ZW50LnRhcmdldC52YWx1ZX0gKSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgdmFuIENsacOrbnQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmNsaWVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17IGV2ZW50ID0+IHRoaXMuc2V0U3RhdGUoIHtjbGllbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0gKSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPkRlY2xhcmF0aWUgZGF0dW06PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmRhdGVEZWNsYXJhdGlvbn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLnNldFN0YXRlKCB7ZGF0ZURlY2xhcmF0aW9uOiBldmVudC50YXJnZXQudmFsdWV9ICkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5EZWNsYXJhdGllIGVpbmQgZGF0dW06PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmRhdGVFbmREZWNsYXJhdGlvbn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLnNldFN0YXRlKCB7ZGF0ZUVuZERlY2xhcmF0aW9uOiBldmVudC50YXJnZXQudmFsdWV9ICkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuXHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWNsYXJhdGlvbnMubWFwKChkZWNsYXJhdGlvbiwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGZsdWlkIHBsYWNlaG9sZGVyPSdBNScgdmFsdWU9e2RlY2xhcmF0aW9uLmNvZGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURlY2xyYXRpb25Db2RlQ2hhbmdlKGlkeCl9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+QWFudGFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBmbHVpZCB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPScxMicgdmFsdWU9e2RlY2xhcmF0aW9uLmFtb3VudH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGVjbGFyYXRpb25BbW91bnRDaGFuZ2UoaWR4KX0vPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5QcmlqczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgZmx1aWQgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nMTgwMCcgdmFsdWU9e2RlY2xhcmF0aW9uLnByaWNlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZWNsYXJhdGlvblByaWNlQ2hhbmdlKGlkeCl9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9e3toZWlnaHQ6ICczOHB4JywgbWFyZ2luVG9wOiAnMjNweCd9fSBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZURlY2xhcmF0aW9uKGlkeCl9IHdhcm5pbmc+UmVtb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGREZWNsYXJhdGlvbn0gY2xhc3NOYW1lPVwic21hbGxcIiBzdWNjZXNzPkFkZCBEZWNsYXJhdGlvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnNDBweCd9fSBwcmltYXJ5PlZlcnN0dXVyPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0RlY2xhcmF0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9kZWNsYXJhdGllcy9uZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFnQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBakJBO0FBQ0E7QUF5QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBMUJBO0FBQ0E7QUFrQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBbkNBO0FBQ0E7QUEyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQVpBO0FBQUE7QUFhQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFqQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQW9CQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTVDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW9FQTtBQUNBO0FBdEVBO0FBQ0E7QUF3RUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBdkVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQVBBO0FBWUE7Ozs7O0FBOERBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFGQTs7QUFBQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUFBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBSEE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9