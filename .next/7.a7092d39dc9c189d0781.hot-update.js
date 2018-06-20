webpackHotUpdate(7,{

/***/ 1289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Layout = __webpack_require__(788);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(1286);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(730);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(724);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\scott\\Documents\\Zuyd Hogeschool\\Leerjaar 4\\Blok 4\\BM14 - Blockchain\\Solidity\\Cicero\\pages\\declaraties\\new.js?entry';


/*class NewDeclaration extends Component{


  state = {
    insurance : '',
    client: '',
    declarations: [],
    dateDeclaration: '',
    dateEndDeclaration: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
      event.preventDefault();
      this.setState({ loading: true, errorMessage: ''});
      /*
      try {
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createDeclaration(this.state.insurance, this.state.client, this.state.careCodes, this.state.careAmounts, this.state.carePrices, this.state.dateDeclaration, this.state.dateEndDeclaration)
          .send({
            from: accounts[0]
          });
        Router.pushRoute('/');
      }
      catch (err) {
        this.setState({ errorMessage: err.message });
      }
      */ /*
         this.setState({loading: false});
         };
         /*
         render(){
         return(
         <Layout>
         <h3>Nieuwe declaratie</h3>
         <Form  loading={this.state.loading} onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
           <Form.Field>
             <label>Address van Verzekeraar:</label>
             <Input
               value={ this.state.insurance}
               onChange={ event => this.setState( {insurance: event.target.value} ) }
             />
           </Form.Field>
           <Form.Field>
             <label>Address van Cliënt:</label>
             <Input
               value={ this.state.client}
               onChange={ event => this.setState( {client: event.target.value} ) }
             />
           </Form.Field>
           <Form.Group widths='equal'>
             <Form.Field>
               <label>Code</label>
               <Input fluid placeholder='A5'/>
             </Form.Field>
             <Form.Field>
               <label>Aantal</label>
               <Input fluid type='number' placeholder='12'/>
             </Form.Field>
             <Form.Field>
               <label>Prijs</label>
               <Input fluid type='number' placeholder='1800'/>
             </Form.Field>
             <Button>Remove</Button>
           </Form.Group>
           <Form.Field>
             <label>Declaratie datum:</label>
             <Input
               value={ this.state.dateDeclaration}
               type="date"
               onChange={ event => this.setState( {dateDeclaration: event.target.value} ) }
             />
           </Form.Field>
           <Form.Field>
             <label>Declaratie datum:</label>
             <Input
               value={ this.state.dateEndDeclaration}
               type="date"
               onChange={ event => this.setState( {dateEndDeclaration: event.target.value} ) }
             />
           </Form.Field>
           <Message error header="Oeps!" content={this.state.errorMessage} />
           <Button type='submit' primary>Create!</Button>
         </Form>
         </Layout>
         );
         }
         }
         export default NewDeclaration;
         */

var IncorporationForm = function (_Component) {
  (0, _inherits3.default)(IncorporationForm, _Component);

  function IncorporationForm() {
    (0, _classCallCheck3.default)(this, IncorporationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (IncorporationForm.__proto__ || (0, _getPrototypeOf2.default)(IncorporationForm)).call(this));

    _this.handleNameChange = function (evt) {
      _this.setState({ code: evt.target.value });
    };

    _this.handleDeclarationNameChange = function (idx) {
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

    _this.handleSubmit = function (evt) {
      var _this$state = _this.state,
          name = _this$state.name,
          declarations = _this$state.declarations;

      alert('Incorporated: ' + name + ' with ' + declarations.length + ' declarations');
      console.log(_this.state.declarations);
    };

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
      name: '',
      declarations: [{
        code: '',
        amount: '',
        price: ''
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(IncorporationForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        type: 'text',
        placeholder: 'Company name, e.g. Magic Everywhere LLC',
        value: this.state.name,
        onChange: this.handleNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, 'Declarations'), this.state.declarations.map(function (declaration, idx) {
        return _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }, _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, 'Code'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, placeholder: 'A5', value: declaration.code, onChange: _this2.handleDeclarationNameChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, 'Aantal'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, type: 'number', placeholder: '12', value: declaration.amount, onChange: _this2.handleDeclarationAmountChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, 'Prijs'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, type: 'number', placeholder: '1800', value: declaration.price, onChange: _this2.handleDeclarationPriceChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        })), _react2.default.createElement(_semanticUiReact.Button, { onClick: _this2.handleRemoveDeclaration(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        }, 'Remove'));
      }), _react2.default.createElement('button', { type: 'button', onClick: this.handleAddDeclaration, className: 'small', __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, 'Add Declaration'), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, 'Incorporate')));
    }
  }]);

  return IncorporationForm;
}(_react.Component);

exports.default = IncorporationForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiSW5jb3Jwb3JhdGlvbkZvcm0iLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZ0Iiwic2V0U3RhdGUiLCJjb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEZWNsYXJhdGlvbk5hbWVDaGFuZ2UiLCJpZHgiLCJuZXdEZWNsYXJhdGlvbnMiLCJzdGF0ZSIsImRlY2xhcmF0aW9ucyIsIm1hcCIsImRlY2xhcmF0aW9uIiwic2lkeCIsImhhbmRsZURlY2xhcmF0aW9uQW1vdW50Q2hhbmdlIiwiYW1vdW50IiwiaGFuZGxlRGVjbGFyYXRpb25QcmljZUNoYW5nZSIsInByaWNlIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsImFsZXJ0IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZERlY2xhcmF0aW9uIiwiY29uY2F0IiwiaGFuZGxlUmVtb3ZlRGVjbGFyYXRpb24iLCJmaWx0ZXIiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0FBSXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNEJROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0VGLEE7NkNBQ0o7OytCQUFjO3dDQUFBOztzSkFBQTs7VUFBQSxBQVlkLG1CQUFtQixVQUFBLEFBQUMsS0FBUSxBQUMxQjtZQUFBLEFBQUssU0FBUyxF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LFVBQVUsT0FBQSxBQUFLLDZCQUF2RixBQUFrRixBQUFrQztzQkFBcEg7d0JBWEosQUFTRSxBQUVFLEFBRUY7QUFGRTs2QkFFRixBQUFDLHlDQUFPLFNBQVMsT0FBQSxBQUFLLHdCQUF0QixBQUFpQixBQUE2QjtzQkFBOUM7d0JBQUE7QUFBQTtXQWR5QixBQUMzQixBQWFFO0FBekJOLEFBV0csQUFpQkQsMEJBQUEsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFNBQVMsS0FBL0IsQUFBb0Msc0JBQXNCLFdBQTFELEFBQW9FO29CQUFwRTtzQkFBQTtBQUFBO1NBNUJGLEFBNEJFLEFBQ0Esb0NBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBL0JKLEFBQ0UsQUFDQSxBQTZCRSxBQUlMOzs7OztBQTlGNkIsQSxBQWlHaEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3Njb3R0L0RvY3VtZW50cy9adXlkIEhvZ2VzY2hvb2wvTGVlcmphYXIgNC9CbG9rIDQvQk0xNCAtIEJsb2NrY2hhaW4vU29saWRpdHkvQ2ljZXJvIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5hNzA5MmQzOWRjOWMxODlkMDc4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGVjbGFyYXRpZXMvbmV3LmpzP2IzYzFhMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qcyc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcblxyXG5cclxuLypjbGFzcyBOZXdEZWNsYXJhdGlvbiBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaW5zdXJhbmNlIDogJycsXHJcbiAgICBjbGllbnQ6ICcnLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgIGRhdGVEZWNsYXJhdGlvbjogJycsXHJcbiAgICBkYXRlRW5kRGVjbGFyYXRpb246ICcnLFxyXG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcclxuICAgICAgLypcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZURlY2xhcmF0aW9uKHRoaXMuc3RhdGUuaW5zdXJhbmNlLCB0aGlzLnN0YXRlLmNsaWVudCwgdGhpcy5zdGF0ZS5jYXJlQ29kZXMsIHRoaXMuc3RhdGUuY2FyZUFtb3VudHMsIHRoaXMuc3RhdGUuY2FyZVByaWNlcywgdGhpcy5zdGF0ZS5kYXRlRGVjbGFyYXRpb24sIHRoaXMuc3RhdGUuZGF0ZUVuZERlY2xhcmF0aW9uKVxyXG4gICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgICAqLy8qXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICB9O1xyXG5cclxuLypcclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+TmlldXdlIGRlY2xhcmF0aWU8L2gzPlxyXG4gICAgICAgIDxGb3JtICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgdmFuIFZlcnpla2VyYWFyOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS5pbnN1cmFuY2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLnNldFN0YXRlKCB7aW5zdXJhbmNlOiBldmVudC50YXJnZXQudmFsdWV9ICkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIHZhbiBDbGnDq250OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS5jbGllbnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLnNldFN0YXRlKCB7Y2xpZW50OiBldmVudC50YXJnZXQudmFsdWV9ICkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XHJcbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Db2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgZmx1aWQgcGxhY2Vob2xkZXI9J0E1Jy8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkFhbnRhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0IGZsdWlkIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9JzEyJy8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByaWpzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgZmx1aWQgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nMTgwMCcvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24+UmVtb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPkRlY2xhcmF0aWUgZGF0dW06PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmRhdGVEZWNsYXJhdGlvbn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLnNldFN0YXRlKCB7ZGF0ZURlY2xhcmF0aW9uOiBldmVudC50YXJnZXQudmFsdWV9ICkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5EZWNsYXJhdGllIGRhdHVtOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS5kYXRlRW5kRGVjbGFyYXRpb259XHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSgge2RhdGVFbmREZWNsYXJhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSApIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9lcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgcHJpbWFyeT5DcmVhdGUhPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdEZWNsYXJhdGlvbjtcclxuKi9cclxuXHJcbmNsYXNzIEluY29ycG9yYXRpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgZGVjbGFyYXRpb25zOiBbe1xyXG4gICAgICAgIGNvZGU6ICcnLFxyXG4gICAgICAgIGFtb3VudDogJycsXHJcbiAgICAgICAgcHJpY2U6ICcnXHJcbiAgICAgIH1dLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZ0KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29kZTogZXZ0LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlY2xhcmF0aW9uTmFtZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RlY2xhcmF0aW9ucyA9IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLm1hcCgoZGVjbGFyYXRpb24sIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIGRlY2xhcmF0aW9uO1xyXG4gICAgICByZXR1cm4geyAuLi5kZWNsYXJhdGlvbiwgY29kZTogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlY2xhcmF0aW9uczogbmV3RGVjbGFyYXRpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVjbGFyYXRpb25BbW91bnRDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEZWNsYXJhdGlvbnMgPSB0aGlzLnN0YXRlLmRlY2xhcmF0aW9ucy5tYXAoKGRlY2xhcmF0aW9uLCBzaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBkZWNsYXJhdGlvbjtcclxuICAgICAgcmV0dXJuIHsgLi4uZGVjbGFyYXRpb24sIGFtb3VudDogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlY2xhcmF0aW9uczogbmV3RGVjbGFyYXRpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVjbGFyYXRpb25QcmljZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RlY2xhcmF0aW9ucyA9IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLm1hcCgoZGVjbGFyYXRpb24sIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIGRlY2xhcmF0aW9uO1xyXG4gICAgICByZXR1cm4geyAuLi5kZWNsYXJhdGlvbiwgcHJpY2U6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZWNsYXJhdGlvbnM6IG5ld0RlY2xhcmF0aW9ucyB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZGVjbGFyYXRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgYWxlcnQoYEluY29ycG9yYXRlZDogJHtuYW1lfSB3aXRoICR7ZGVjbGFyYXRpb25zLmxlbmd0aH0gZGVjbGFyYXRpb25zYCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRlY2xhcmF0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGREZWNsYXJhdGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZWNsYXJhdGlvbnM6IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLmNvbmNhdChbeyBjb2RlOiAnJywgYW1vdW50OiAnJywgIHByaWNlOiAnJyB9XSkgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmVEZWNsYXJhdGlvbiA9IChpZHgpID0+ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZWNsYXJhdGlvbnM6IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLmZpbHRlcigocywgc2lkeCkgPT4gaWR4ICE9PSBzaWR4KSB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBhbnkgbmFtZSwgZS5nLiBNYWdpYyBFdmVyeXdoZXJlIExMQ1wiXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8aDQ+RGVjbGFyYXRpb25zPC9oND5cclxuXHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRlY2xhcmF0aW9ucy5tYXAoKGRlY2xhcmF0aW9uLCBpZHgpID0+IChcclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0IGZsdWlkIHBsYWNlaG9sZGVyPSdBNScgdmFsdWU9e2RlY2xhcmF0aW9uLmNvZGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURlY2xhcmF0aW9uTmFtZUNoYW5nZShpZHgpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkFhbnRhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0IGZsdWlkIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9JzEyJyB2YWx1ZT17ZGVjbGFyYXRpb24uYW1vdW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZWNsYXJhdGlvbkFtb3VudENoYW5nZShpZHgpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByaWpzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgZmx1aWQgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nMTgwMCcgdmFsdWU9e2RlY2xhcmF0aW9uLnByaWNlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZWNsYXJhdGlvblByaWNlQ2hhbmdlKGlkeCl9Lz5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlRGVjbGFyYXRpb24oaWR4KX0+UmVtb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGREZWNsYXJhdGlvbn0gY2xhc3NOYW1lPVwic21hbGxcIj5BZGQgRGVjbGFyYXRpb248L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uPkluY29ycG9yYXRlPC9idXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmNvcnBvcmF0aW9uRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGVjbGFyYXRpZXMvbmV3LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFXQTtBQUNBO0FBYkE7QUFDQTtBQWVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFOQTtBQWhCQTtBQUNBO0FBd0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFOQTtBQXpCQTtBQUNBO0FBaUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFOQTtBQWxDQTtBQUNBO0FBMENBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBOUNBO0FBQ0E7QUFnREE7QUFDQTtBQWxEQTtBQUNBO0FBb0RBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQW5EQTtBQUNBO0FBREE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUZBO0FBT0E7Ozs7O0FBK0NBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9