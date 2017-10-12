'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactBootstrap = require('react-bootstrap');

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

require('react-datetime/css/react-datetime.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DateTimeField = function DateTimeField(_ref) {
  var label = _ref.label,
      helpText = _ref.helpText,
      _ref$input = _ref.input,
      name = _ref$input.name,
      onFocus = _ref$input.onFocus,
      form = _ref.meta.form,
      inputProps = _objectWithoutProperties(_ref.input, ['name', 'onFocus']),
      metaProps = _objectWithoutProperties(_ref.meta, ['form']),
      props = _objectWithoutProperties(_ref, ['label', 'helpText', 'input', 'meta']);

  var _validationMessage = (0, _utils2.default)(metaProps),
      validationState = _validationMessage.validationState,
      errorMessage = _validationMessage.errorMessage;

  return React.createElement(
    _reactBootstrap.FormGroup,
    {
      controlId: name,
      validationState: validationState
    },
    React.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label
    ),
    React.createElement(
      _reactBootstrap.InputGroup,
      null,
      React.createElement(_reactDatetime2.default, _extends({
        name: name,
        id: form + '-' + name,
        closeOnSelect: true
      }, inputProps, props)),
      React.createElement(
        _reactBootstrap.InputGroup.Button,
        null,
        React.createElement(
          _reactBootstrap.Button,
          {
            style: { zIndex: '0' },
            onClick: function () {
              return inputProps.onChange(null);
            },
            disabled: !inputProps.value
          },
          React.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
        )
      )
    ),
    errorMessage,
    React.createElement(
      _reactBootstrap.HelpBlock,
      null,
      helpText
    )
  );
};

DateTimeField.propTypes = _extends({}, _lodash2.default.omit(_reactDatetime2.default.propTypes, 'input'));
exports.default = DateTimeField;