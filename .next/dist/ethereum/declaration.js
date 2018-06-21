'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Declaration = require('./build/Declaration.json');

var _Declaration2 = _interopRequireDefault(_Declaration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Declaration2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxkZWNsYXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiRGVjbGFyYXRpb24iLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4QixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDMUI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTCxLQUFLLEFBQUwsTUFBVyxzQkFBWSxBQUF2QixBQURLLFlBRUwsQUFGSyxBQUFQLEFBSUQ7QUFMRCIsImZpbGUiOiJkZWNsYXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Qcm9qZWN0cy9CbG9ja2NoYWluL2tpY2tzdGFydGVyL0NpY2VybyJ9