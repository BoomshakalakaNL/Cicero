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