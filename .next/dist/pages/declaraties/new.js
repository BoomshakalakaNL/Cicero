'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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