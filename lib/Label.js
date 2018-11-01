'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var label = _ref.label,
      required = _ref.required;

  if (label && required) {
    return _react2.default.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label,
      '\xA0',
      _react2.default.createElement(
        'small',
        null,
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'asterisk', style: { color: '#a94442' } })
      )
    );
  } else if (label) {
    return _react2.default.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label
    );
  }
  return null;
};

Label.defaultProps = {
  label: '',
  required: false
};

exports.default = Label;