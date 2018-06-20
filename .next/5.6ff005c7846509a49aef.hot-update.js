webpackHotUpdate(5,{

/***/ 787:
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

var _Layout = __webpack_require__(1101);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(1119);

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

var NewDeclaration = function (_Component) {
  (0, _inherits3.default)(NewDeclaration, _Component);

  function NewDeclaration() {
    (0, _classCallCheck3.default)(this, NewDeclaration);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewDeclaration.__proto__ || (0, _getPrototypeOf2.default)(NewDeclaration)).call(this));

    _this.handleNameChange = function (evt) {
      _this.setState({ code: evt.target.value });
    };

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

    _this.handleSubmit = function (evt) {
      var _this$state = _this.state,
          name = _this$state.name,
          declarations = _this$state.declarations;

      var codes = [];
      var amounts = [];
      var prices = [];
      declarations.forEach(function (element) {
        codes.push(element.code);
        amounts.push(element.amount);
        prices.push(element.price);
      });
      console.log(codes.join(";"));
      console.log(amounts.join(";"));
      console.log(prices.join(";"));
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
      var _this2 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        type: 'text',
        placeholder: 'Company name, e.g. Magic Everywhere LLC',
        value: this.state.name,
        onChange: this.handleNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, 'Declarations'), this.state.declarations.map(function (declaration, idx) {
        return _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }, _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }, 'Code'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, placeholder: 'A5', value: declaration.code, onChange: _this2.handleDeclrationCodeChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, 'Aantal'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, type: 'number', placeholder: '12', value: declaration.amount, onChange: _this2.handleDeclarationAmountChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, 'Prijs'), _react2.default.createElement(_semanticUiReact.Input, { fluid: true, type: 'number', placeholder: '1800', value: declaration.price, onChange: _this2.handleDeclarationPriceChange(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          }
        })), _react2.default.createElement(_semanticUiReact.Button, { type: 'button', onClick: _this2.handleRemoveDeclaration(idx), __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, 'Remove'));
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'button', onClick: this.handleAddDeclaration, className: 'small', __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, 'Add Declaration'), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, 'Incorporate')));
    }
  }]);

  return NewDeclaration;
}(_react.Component);

exports.default = NewDeclaration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWNsYXJhdGllc1xcbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3RGVjbGFyYXRpb24iLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZ0Iiwic2V0U3RhdGUiLCJjb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEZWNscmF0aW9uQ29kZUNoYW5nZSIsImlkeCIsIm5ld0RlY2xhcmF0aW9ucyIsInN0YXRlIiwiZGVjbGFyYXRpb25zIiwibWFwIiwiZGVjbGFyYXRpb24iLCJzaWR4IiwiaGFuZGxlRGVjbGFyYXRpb25BbW91bnRDaGFuZ2UiLCJhbW91bnQiLCJoYW5kbGVEZWNsYXJhdGlvblByaWNlQ2hhbmdlIiwicHJpY2UiLCJoYW5kbGVTdWJtaXQiLCJuYW1lIiwiY29kZXMiLCJhbW91bnRzIiwicHJpY2VzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImpvaW4iLCJoYW5kbGVBZGREZWNsYXJhdGlvbiIsImNvbmNhdCIsImhhbmRsZVJlbW92ZURlY2xhcmF0aW9uIiwiZmlsdGVyIiwicyIsImluc3VyYW5jZSIsImNsaWVudCIsImRhdGVEZWNsYXJhdGlvbiIsImRhdGVFbmREZWNsYXJhdGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7QUFJdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E0QlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42ZmYwMDVjNzg0NjUwOWE0OWFlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGVjbGFyYXRpZXMvbmV3LmpzP2RhOTM0YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qcyc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcblxyXG5cclxuLypjbGFzcyBOZXdEZWNsYXJhdGlvbiBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaW5zdXJhbmNlIDogJycsXHJcbiAgICBjbGllbnQ6ICcnLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgIGRhdGVEZWNsYXJhdGlvbjogJycsXHJcbiAgICBkYXRlRW5kRGVjbGFyYXRpb246ICcnLFxyXG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcclxuICAgICAgLypcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZURlY2xhcmF0aW9uKHRoaXMuc3RhdGUuaW5zdXJhbmNlLCB0aGlzLnN0YXRlLmNsaWVudCwgdGhpcy5zdGF0ZS5jYXJlQ29kZXMsIHRoaXMuc3RhdGUuY2FyZUFtb3VudHMsIHRoaXMuc3RhdGUuY2FyZVByaWNlcywgdGhpcy5zdGF0ZS5kYXRlRGVjbGFyYXRpb24sIHRoaXMuc3RhdGUuZGF0ZUVuZERlY2xhcmF0aW9uKVxyXG4gICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgICAqLy8qXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICB9O1xyXG5cclxuLypcclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+TmlldXdlIGRlY2xhcmF0aWU8L2gzPlxyXG4gICAgICAgIDxGb3JtICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgdmFuIFZlcnpla2VyYWFyOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS5pbnN1cmFuY2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLnNldFN0YXRlKCB7aW5zdXJhbmNlOiBldmVudC50YXJnZXQudmFsdWV9ICkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIHZhbiBDbGnDq250OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS5jbGllbnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLnNldFN0YXRlKCB7Y2xpZW50OiBldmVudC50YXJnZXQudmFsdWV9ICkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XHJcbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Db2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgZmx1aWQgcGxhY2Vob2xkZXI9J0E1Jy8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkFhbnRhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0IGZsdWlkIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9JzEyJy8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByaWpzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgZmx1aWQgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nMTgwMCcvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24+UmVtb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPkRlY2xhcmF0aWUgZGF0dW06PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmRhdGVEZWNsYXJhdGlvbn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLnNldFN0YXRlKCB7ZGF0ZURlY2xhcmF0aW9uOiBldmVudC50YXJnZXQudmFsdWV9ICkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5EZWNsYXJhdGllIGRhdHVtOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS5kYXRlRW5kRGVjbGFyYXRpb259XHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSgge2RhdGVFbmREZWNsYXJhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSApIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9lcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgcHJpbWFyeT5DcmVhdGUhPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdEZWNsYXJhdGlvbjtcclxuKi9cclxuXHJcbmNsYXNzIE5ld0RlY2xhcmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbnN1cmFuY2UgOiAnJyxcclxuICAgICAgY2xpZW50OiAnJyxcclxuICAgICAgZGF0ZURlY2xhcmF0aW9uOiAnJyxcclxuICAgICAgZGF0ZUVuZERlY2xhcmF0aW9uOiAnJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGRlY2xhcmF0aW9uczogW3tcclxuICAgICAgICBjb2RlOiAnJyxcclxuICAgICAgICBhbW91bnQ6ICcnLFxyXG4gICAgICAgIHByaWNlOiAnJ1xyXG4gICAgICB9XSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvZGU6IGV2dC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZWNscmF0aW9uQ29kZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RlY2xhcmF0aW9ucyA9IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLm1hcCgoZGVjbGFyYXRpb24sIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIGRlY2xhcmF0aW9uO1xyXG4gICAgICByZXR1cm4geyAuLi5kZWNsYXJhdGlvbiwgY29kZTogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlY2xhcmF0aW9uczogbmV3RGVjbGFyYXRpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVjbGFyYXRpb25BbW91bnRDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEZWNsYXJhdGlvbnMgPSB0aGlzLnN0YXRlLmRlY2xhcmF0aW9ucy5tYXAoKGRlY2xhcmF0aW9uLCBzaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBkZWNsYXJhdGlvbjtcclxuICAgICAgcmV0dXJuIHsgLi4uZGVjbGFyYXRpb24sIGFtb3VudDogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlY2xhcmF0aW9uczogbmV3RGVjbGFyYXRpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVjbGFyYXRpb25QcmljZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RlY2xhcmF0aW9ucyA9IHRoaXMuc3RhdGUuZGVjbGFyYXRpb25zLm1hcCgoZGVjbGFyYXRpb24sIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIGRlY2xhcmF0aW9uO1xyXG4gICAgICByZXR1cm4geyAuLi5kZWNsYXJhdGlvbiwgcHJpY2U6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZWNsYXJhdGlvbnM6IG5ld0RlY2xhcmF0aW9ucyB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZGVjbGFyYXRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdmFyIGNvZGVzID0gW107XHJcbiAgICB2YXIgYW1vdW50cyA9IFtdO1xyXG4gICAgdmFyIHByaWNlcyA9IFtdO1xyXG4gICAgZGVjbGFyYXRpb25zLmZvckVhY2goIGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgY29kZXMucHVzaChlbGVtZW50LmNvZGUpO1xyXG4gICAgICBhbW91bnRzLnB1c2goZWxlbWVudC5hbW91bnQpO1xyXG4gICAgICBwcmljZXMucHVzaChlbGVtZW50LnByaWNlKTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coY29kZXMuam9pbihcIjtcIikpO1xyXG4gICAgY29uc29sZS5sb2coYW1vdW50cy5qb2luKFwiO1wiKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcmljZXMuam9pbihcIjtcIikpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkRGVjbGFyYXRpb24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGVjbGFyYXRpb25zOiB0aGlzLnN0YXRlLmRlY2xhcmF0aW9ucy5jb25jYXQoW3sgY29kZTogJycsIGFtb3VudDogJycsICBwcmljZTogJycgfV0pIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlRGVjbGFyYXRpb24gPSAoaWR4KSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGVjbGFyYXRpb25zOiB0aGlzLnN0YXRlLmRlY2xhcmF0aW9ucy5maWx0ZXIoKHMsIHNpZHgpID0+IGlkeCAhPT0gc2lkeCkgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wYW55IG5hbWUsIGUuZy4gTWFnaWMgRXZlcnl3aGVyZSBMTENcIlxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGg0PkRlY2xhcmF0aW9uczwvaDQ+XHJcblxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5kZWNsYXJhdGlvbnMubWFwKChkZWNsYXJhdGlvbiwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9J2VxdWFsJz5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBmbHVpZCBwbGFjZWhvbGRlcj0nQTUnIHZhbHVlPXtkZWNsYXJhdGlvbi5jb2RlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZWNscmF0aW9uQ29kZUNoYW5nZShpZHgpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkFhbnRhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0IGZsdWlkIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9JzEyJyB2YWx1ZT17ZGVjbGFyYXRpb24uYW1vdW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZWNsYXJhdGlvbkFtb3VudENoYW5nZShpZHgpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByaWpzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgZmx1aWQgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nMTgwMCcgdmFsdWU9e2RlY2xhcmF0aW9uLnByaWNlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZWNsYXJhdGlvblByaWNlQ2hhbmdlKGlkeCl9Lz5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZURlY2xhcmF0aW9uKGlkeCl9PlJlbW92ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkRGVjbGFyYXRpb259IGNsYXNzTmFtZT1cInNtYWxsXCI+QWRkIERlY2xhcmF0aW9uPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+SW5jb3Jwb3JhdGU8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0RlY2xhcmF0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9kZWNsYXJhdGllcy9uZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQWdCQTtBQUNBO0FBbEJBO0FBQ0E7QUFvQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBckJBO0FBQ0E7QUE2QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBOUJBO0FBQ0E7QUFzQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBdkNBO0FBQ0E7QUErQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUE1REE7QUFDQTtBQThEQTtBQUNBO0FBaEVBO0FBQ0E7QUFrRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBakVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQVBBO0FBWUE7Ozs7O0FBd0RBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=