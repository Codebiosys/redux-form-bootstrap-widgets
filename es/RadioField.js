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

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RadioField = function RadioField(_ref) {
  var label = _ref.label,
      options = _ref.options,
      helpText = _ref.helpText,
      customValidation = _ref.customValidation,
      _ref$input = _ref.input,
      name = _ref$input.name,
      onBlur = _ref$input.onBlur,
      value = _ref$input.value,
      meta = _ref.meta,
      valueKey = _ref.valueKey,
      labelKey = _ref.labelKey,
      inputProps = _objectWithoutProperties(_ref.input, ['name', 'onBlur', 'value']),
      props = _objectWithoutProperties(_ref, ['label', 'options', 'helpText', 'customValidation', 'input', 'meta', 'valueKey', 'labelKey']);

  var _ref2 = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
      validationState = _ref2.validationState,
      errorMessage = _ref2.errorMessage;

  var radioValueKey = valueKey || 'value';
  var radioLabelKey = labelKey || 'label';
  var handleClick = function handleClick(event) {
    var changeValue = event.target.value === value ? null : event.target.value;
    inputProps.onChange(changeValue);
    onBlur();
  };

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
      null,
      _lodash2.default.map(options, function (option) {
        return React.createElement(
          'div',
          { key: name + '_' + option[radioValueKey] },
          React.createElement(
            _reactBootstrap.Radio,
            _extends({
              name: name
            }, inputProps, {
              checked: '' + option[radioValueKey] === '' + value,
              value: option[radioValueKey],
              onBlur: function () {
                return onBlur();
              },
              onClick: handleClick
            }, props),
            option[radioLabelKey]
          ),
          option.description
        );
      })
    ),
    errorMessage,
    React.createElement(
      _reactBootstrap.HelpBlock,
      null,
      helpText
    )
  );
};

RadioField.propTypes = _extends({}, _reactBootstrap.Radio.propTypes);
exports.default = RadioField;