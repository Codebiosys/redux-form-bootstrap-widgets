'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextField = function TextField(_ref) {
  var label = _ref.label,
      helpText = _ref.helpText,
      customValidation = _ref.customValidation,
      input = _ref.input,
      meta = _ref.meta,
      addOnBefore = _ref.addOnBefore,
      addOnAfter = _ref.addOnAfter,
      type = _ref.type,
      componentClass = _ref.componentClass,
      props = _objectWithoutProperties(_ref, ['label', 'helpText', 'customValidation', 'input', 'meta', 'addOnBefore', 'addOnAfter', 'type', 'componentClass']);

  var name = input.name,
      onChange = input.onChange;

  var _ref2 = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
      validationState = _ref2.validationState,
      errorMessage = _ref2.errorMessage;

  var typeConfig = {};
  var inputStyle = { zIndex: '0' };
  var groupStyle = {};

  if (type === 'textarea' || componentClass === 'textarea') {
    typeConfig.componentClass = 'textarea';
    groupStyle.width = '100%';
  } else if (type) {
    typeConfig.type = type;
  }

  var clearContent = function clearContent() {
    return onChange(null);
  };

  var ClearButton = React.createElement(
    _reactBootstrap.InputGroup.Button,
    null,
    React.createElement(
      _reactBootstrap.Button,
      {
        style: { zIndex: '0' },
        onClick: clearContent,
        disabled: !input.value
      },
      React.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
    )
  );

  return React.createElement(
    _reactBootstrap.FormGroup,
    {
      controlId: name,
      validationState: validationState
    },
    label ? React.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label
    ) : '',
    React.createElement(
      _reactBootstrap.InputGroup,
      { style: groupStyle },
      typeConfig.componentClass ? '' : addOnBefore,
      React.createElement(_reactBootstrap.FormControl, _extends({
        style: inputStyle
      }, typeConfig, input, props)),
      typeConfig.componentClass ? '' : addOnAfter,
      typeConfig.componentClass ? '' : ClearButton
    ),
    errorMessage,
    React.createElement(
      _reactBootstrap.HelpBlock,
      null,
      helpText
    )
  );
};

TextField.propTypes = _extends({}, _reactBootstrap.FormControl.propTypes);

exports.default = TextField;