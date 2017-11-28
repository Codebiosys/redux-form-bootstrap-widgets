'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactBootstrap = require('react-bootstrap');

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var label = _ref.label,
      required = _ref.required;

  if (label && required) {
    return React.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label,
      '\xA0',
      React.createElement(
        'small',
        null,
        React.createElement(_reactBootstrap.Glyphicon, { glyph: 'asterisk', style: { color: '#a94442' } })
      )
    );
  } else if (label) {
    return React.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label
    );
  }
  return null;
};