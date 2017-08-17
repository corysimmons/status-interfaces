'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusNotFound = exports.statusOk = undefined;

var _ok = require('./statuses/ok');

var _ok2 = _interopRequireDefault(_ok);

var _notFound = require('./statuses/notFound');

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const statusOk = exports.statusOk = _ok2.default;
const statusNotFound = exports.statusNotFound = _notFound2.default;