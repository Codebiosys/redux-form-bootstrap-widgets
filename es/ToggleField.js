'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactToggle = require('react-toggle');

var _reactToggle2 = _interopRequireDefault(_reactToggle);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

require('react-toggle/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ToggleField = function ToggleField(_ref) {
  var label = _ref.label,
      helpText = _ref.helpText,
      _ref$input = _ref.input,
      name = _ref$input.name,
      value = _ref$input.value,
      onChange = _ref$input.onChange,
      meta = _ref.meta,
      inputProps = _objectWithoutProperties(_ref.input, ['name', 'value', 'onChange']),
      props = _objectWithoutProperties(_ref, ['label', 'helpText', 'input', 'meta']);

  var _validationMessage = (0, _utils2.default)(meta),
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
      React.createElement(_reactToggle2.default, _extends({}, inputProps, {
        name: name,
        checked: !!value,
        onChange: function (event) {
          onChange(!!event.target.checked);
        }
      }, props))
    ),
    errorMessage,
    React.createElement(
      _reactBootstrap.HelpBlock,
      null,
      helpText
    )
  );
};

ToggleField.propTypes = _extends({}, _reactToggle2.default.propTypes);
exports.default = ToggleField;