'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('Label');

var _Label2 = _interopRequireDefault(_Label);

var _reduxForm = require('redux-form');

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/** TextField component description */
var TextField = function TextField(_ref) {
  var label = _ref.label,
      required = _ref.required,
      helpText = _ref.helpText,
      customValidation = _ref.customValidation,
      input = _ref.input,
      meta = _ref.meta,
      addOnBefore = _ref.addOnBefore,
      addOnAfter = _ref.addOnAfter,
      disabled = _ref.disabled,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['label', 'required', 'helpText', 'customValidation', 'input', 'meta', 'addOnBefore', 'addOnAfter', 'disabled', 'type']);

  var name = input.name,
      onChange = input.onChange,
      onBlur = input.onBlur;

  var _ref2 = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
      validationState = _ref2.validationState,
      errorMessage = _ref2.errorMessage;

  var typeConfig = {
    componentClass: 'input',
    type: type
  };
  var inputStyle = { zIndex: '0' };
  var groupStyle = {};

  if (type === 'textarea') {
    typeConfig.componentClass = 'textarea';
    groupStyle.width = '100%';
  }
  var clearContent = function clearContent() {
    onChange(null);onBlur(null);
  };

  var ClearButton = React.createElement(
    _reactBootstrap.FormControl.Feedback,
    { onClick: clearContent, style: { pointerEvents: 'all' } },
    React.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
  );
  return React.createElement(
    _reactBootstrap.FormGroup,
    {
      controlId: name,
      validationState: validationState
    },
    React.createElement(_Label2.default, { label: label, required: required }),
    React.createElement(
      _reactBootstrap.InputGroup,
      { style: groupStyle },
      typeConfig.componentClass === 'textarea' ? '' : addOnBefore,
      React.createElement(_reactBootstrap.FormControl, _extends({
        style: inputStyle
      }, typeConfig, input, {
        disabled: disabled
      }, props)),
      typeConfig.componentClass === 'textarea' ? '' : addOnAfter,
      typeConfig.componentClass === 'textarea' || !input.value || disabled ? '' : ClearButton
    ),
    React.createElement(
      _reactBootstrap.HelpBlock,
      { style: { minHeight: helpText ? '6ex' : '3ex' } },
      errorMessage,
      errorMessage && helpText ? React.createElement('br', null) : '',
      helpText
    )
  );
};

TextField.propTypes = _extends({}, _reactBootstrap.FormControl.propTypes, {
  /** Form label. */
  label: _propTypes2.default.string.isRequired,
  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,
  /** Whether or not the field is disabled */
  disabled: _propTypes2.default.bool,
  /** Additional text that displays below the widget. */
  helpText: _propTypes2.default.string,
  /** HTML input type. */
  type: _propTypes2.default.oneOf(['text', 'password', 'number', 'textarea']),
  /** Override the default validation checks. Takes ReduxForm 'meta' as input */
  customValidation: _propTypes2.default.func,
  /** React Boostrap Field addOn, placed before the input */
  addOnBefore: _propTypes2.default.element,
  /** React Boostrap Field addOn, placed after the input */
  addOnAfter: _propTypes2.default.element,
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

TextField.defaultProps = {
  required: false,
  helpText: null,
  customValidation: null,
  addOnBefore: null,
  addOnAfter: null,
  disabled: false,
  type: 'text'
};

exports.default = TextField;