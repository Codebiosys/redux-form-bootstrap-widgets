'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactToggle = require('react-toggle');

var _reactToggle2 = _interopRequireDefault(_reactToggle);

var _Label = require('Label');

var _Label2 = _interopRequireDefault(_Label);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

require('react-toggle/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ToggleField = function ToggleField(_ref) {
  var label = _ref.label,
      required = _ref.required,
      helpText = _ref.helpText,
      disabled = _ref.disabled,
      customValidation = _ref.customValidation,
      _ref$input = _ref.input,
      name = _ref$input.name,
      value = _ref$input.value,
      onChange = _ref$input.onChange,
      meta = _ref.meta,
      inputProps = _objectWithoutProperties(_ref.input, ['name', 'value', 'onChange']),
      props = _objectWithoutProperties(_ref, ['label', 'required', 'helpText', 'disabled', 'customValidation', 'input', 'meta']);

  var _ref2 = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
      validationState = _ref2.validationState,
      errorMessage = _ref2.errorMessage;

  return React.createElement(
    _reactBootstrap.FormGroup,
    {
      controlId: name,
      validationState: validationState
    },
    React.createElement(_Label2.default, { label: label, required: required }),
    React.createElement(
      _reactBootstrap.InputGroup,
      null,
      React.createElement(_reactToggle2.default, _extends({}, inputProps, {
        name: name,
        checked: !!value,
        onChange: function (event) {
          onChange(!!event.target.checked);
        },
        disabled: disabled
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

ToggleField.propTypes = _extends({}, ToggleField.propTypes, {
  /** Form label. */
  label: _propTypes2.default.string.isRequired,
  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,
  /** Whether or not the field is disabled */
  disabled: _propTypes2.default.bool,
  /** Additional text that displays below the widget. */
  helpText: _propTypes2.default.string,
  /** HTML input type. */
  customValidation: _propTypes2.default.func,
  /** React Boostrap Field addOn, placed before the input */
  /**
  * @ignore
  * Redux Form internal input property. Set when used in a redux 'Field'
  */
  input: _propTypes2.default.object.isRequired,

  /**
  * @ignore
  * Redux Form internal meta property. Set when used in a redux 'Field'
  */
  meta: _propTypes2.default.object.isRequired

});

ToggleField.defaultProps = {
  required: false,
  disabled: false,
  helpText: null,
  customValidation: undefined
};
exports.default = ToggleField;