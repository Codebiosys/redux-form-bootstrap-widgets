'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Label = require('Label');

var _Label2 = _interopRequireDefault(_Label);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckBoxField = function CheckBoxField(_ref) {
  var label = _ref.label,
      required = _ref.required,
      helpText = _ref.helpText,
      meta = _ref.meta,
      valueKey = _ref.valueKey,
      labelKey = _ref.labelKey,
      customValidation = _ref.customValidation,
      _ref$input = _ref.input,
      name = _ref$input.name,
      value = _ref$input.value,
      onFocus = _ref$input.onFocus,
      onChange = _ref$input.onChange,
      onBlur = _ref$input.onBlur,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, ['label', 'required', 'helpText', 'meta', 'valueKey', 'labelKey', 'customValidation', 'input', 'options']);

  var _ref2 = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
      validationState = _ref2.validationState,
      errorMessage = _ref2.errorMessage;

  var checkValueKey = valueKey || 'value';
  var checkLabelKey = labelKey || 'label';

  var checkboxes = options.map(function (_ref3, index) {
    var checkLabel = _ref3[checkLabelKey],
        checkValue = _ref3[checkValueKey];

    var handleChange = function handleChange(event) {
      var arr = _lodash2.default.toArray(value);
      if (event.target.checked) {
        arr = _lodash2.default.union(value, [checkValue]);
      } else {
        arr = _lodash2.default.filter(arr, function (val) {
          return val !== checkValue;
        });
      }
      arr = arr.length ? arr : null;
      onBlur();
      return onChange(arr);
    };

    return React.createElement(
      _reactBootstrap.Checkbox,
      _extends({
        key: name + '_' + index // eslint-disable-line
        , name: name + '_' + index,
        value: checkValue,
        checked: _lodash2.default.find(value, checkValue),
        onChange: handleChange,
        onFocus: onFocus
      }, props),
      checkLabel
    );
  });

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
      checkboxes
    ),
    errorMessage,
    React.createElement(
      _reactBootstrap.HelpBlock,
      null,
      helpText
    )
  );
};

CheckBoxField.propTypes = _extends({}, _reactBootstrap.Checkbox.propTypes);
exports.default = CheckBoxField;