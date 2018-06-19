'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Declaratie = require('./build/Declaratie.json');

var _Declaratie2 = _interopRequireDefault(_Declaratie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Declaratie2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxkZWNsYXJhdGllLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJEZWNsYXJhdGllIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBdUIsQUFBdkIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzFCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ0wsS0FBSyxBQUFMLE1BQVcscUJBQVcsQUFBdEIsQUFESyxZQUVMLEFBRkssQUFBUCxBQUlEO0FBTEQiLCJmaWxlIjoiZGVjbGFyYXRpZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zY290dC9Eb2N1bWVudHMvWnV5ZCBIb2dlc2Nob29sL0xlZXJqYWFyIDQvQmxvayA0L0JNMTQgLSBCbG9ja2NoYWluL1NvbGlkaXR5L0NpY2VybyJ9