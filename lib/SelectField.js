'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _reactBootstrap = require('react-bootstrap');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Label = require('Label');

var _Label2 = _interopRequireDefault(_Label);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

require('react-select/dist/react-select.css');

require('./selectFieldStyle.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SelectField = function SelectField(_ref) {
  var label = _ref.label,
      required = _ref.required,
      helpText = _ref.helpText,
      multiple = _ref.multiple,
      valueKey = _ref.valueKey,
      customValidation = _ref.customValidation,
      _ref$input = _ref.input,
      name = _ref$input.name,
      onChange = _ref$input.onChange,
      onFocus = _ref$input.onFocus,
      _onBlur = _ref$input.onBlur,
      value = _ref$input.value,
      inputProps = _objectWithoutProperties(_ref$input, ['name', 'onChange', 'onFocus', 'onBlur', 'value']),
      meta = _ref.meta,
      options = _ref.options,
      loadOptions = _ref.loadOptions,
      props = _objectWithoutProperties(_ref, ['label', 'required', 'helpText', 'multiple', 'valueKey', 'customValidation', 'input', 'meta', 'options', 'loadOptions']);

  var selectValueKey = valueKey || 'value';

  var handleChange = function handleChange(selected) {
    var selectedList = (0, _lodash.castArray)(selected);
    var selectedVals = (0, _lodash.map)(selectedList, function (opt) {
      return (0, _lodash.get)(opt, selectValueKey);
    });
    var changed = void 0;
    if (!multiple) {
      changed = (0, _lodash.get)((0, _lodash.head)(selectedList), selectValueKey, null);
    } else {
      changed = selectedVals.length ? selectedVals : null;
    }
    onChange(changed);
  };

  var _ref2 = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
      validationState = _ref2.validationState,
      errorMessage = _ref2.errorMessage;

  return _react2.default.createElement(
    _reactBootstrap.FormGroup,
    {
      controlId: name,
      validationState: validationState
    },
    _react2.default.createElement(_Label2.default, { label: label, required: required }),
    options ? _react2.default.createElement(_reactSelect2.default, _extends({
      name: name,
      value: value,
      valueKey: selectValueKey,
      autoBlur: true,
      onChange: handleChange,
      onFocus: onFocus,
      onBlur: function onBlur() {
        return _onBlur();
      },
      inputProps: inputProps,
      multi: !!multiple,
      joinValues: true,
      options: options
    }, props)) : _react2.default.createElement(_reactSelect2.default.Async, _extends({
      name: name,
      value: value,
      valueKey: selectValueKey,
      autoBlur: true,
      onChange: handleChange,
      onFocus: onFocus,
      onBlur: function onBlur() {
        return _onBlur();
      },
      inputProps: inputProps,
      multi: !!multiple,
      joinValues: true,
      loadOptions: loadOptions
    }, props)),
    errorMessage,
    _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      null,
      helpText
    )
  );
};

SelectField.propTypes = _extends({}, _reactSelect2.default.propTypes);
exports.default = SelectField;
SelectField.__docgenInfo = {
  'description': '',
  'composes': ['react-select']
};