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

var _lodash = require('lodash');

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
      disabled = _ref.disabled,
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
      inline = _ref.inline,
      props = _objectWithoutProperties(_ref, ['label', 'required', 'helpText', 'disabled', 'meta', 'valueKey', 'labelKey', 'customValidation', 'input', 'options', 'inline']);

  var _ref2 = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
      validationState = _ref2.validationState,
      errorMessage = _ref2.errorMessage;

  var checkValueKey = valueKey || 'value';
  var checkLabelKey = labelKey || 'label';

  var checkboxes = options.map(function (_ref3, index) {
    var checkLabel = _ref3[checkLabelKey],
        checkValue = _ref3[checkValueKey];

    var handleChange = function handleChange(event) {
      var arr = (0, _lodash.toArray)(value);
      if (event.target.checked) {
        arr = (0, _lodash.union)(value, [checkValue]);
      } else {
        arr = (0, _lodash.filter)(arr, function (val) {
          return val !== checkValue;
        });
      }
      arr = arr.length ? arr : null;
      onBlur();
      return onChange(arr);
    };

    return _react2.default.createElement(
      _reactBootstrap.Checkbox,
      _extends({
        key: name + '_' + index // eslint-disable-line
        , name: name + '_' + index,
        value: checkValue,
        checked: (0, _lodash.find)(value, checkValue),
        onChange: handleChange,
        onFocus: onFocus,
        disabled: disabled,
        inline: inline
      }, props),
      checkLabel
    );
  });

  return _react2.default.createElement(
    _reactBootstrap.FormGroup,
    {
      controlId: name,
      validationState: validationState
    },
    _react2.default.createElement(_Label2.default, { label: label, required: required }),
    _react2.default.createElement(
      _reactBootstrap.InputGroup,
      null,
      checkboxes
    ),
    _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      { style: { minHeight: helpText ? '6ex' : '3ex' } },
      errorMessage,
      errorMessage && helpText ? _react2.default.createElement('br', null) : '',
      helpText
    )
  );
};

CheckBoxField.propTypes = {
  /** Field label. */
  label: _propTypes2.default.string.isRequired,
  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,
  /** Whether or not the field is disabled */
  disabled: _propTypes2.default.bool,
  /** Whether or not the fields are inline */
  inline: _propTypes2.default.bool,
  /** Additional text that displays below the widget. */
  helpText: _propTypes2.default.string,
  /** The key in the option list for the display label */
  labelKey: _propTypes2.default.string,
  /** The key in the option list for the selection value */
  valueKey: _propTypes2.default.string,
  /** The list of options to display. Each option must have a labelKey and valueKey */
  options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  customValidation: _propTypes2.default.func,
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
};

CheckBoxField.defaultProps = {
  required: false,
  helpText: null,
  disabled: false,
  inline: false,
  customValidation: null,
  labelKey: 'label',
  valueKey: 'value'
};
exports.default = CheckBoxField;
CheckBoxField.__docgenInfo = {
  'description': '',
  'props': {
    'label': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Field label.'
    },
    'required': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Flag to display required Astrisk.',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'disabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Whether or not the field is disabled',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'inline': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Whether or not the fields are inline',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'helpText': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Additional text that displays below the widget.',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelKey': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The key in the option list for the display label',
      'defaultValue': {
        'value': '\'label\'',
        'computed': false
      }
    },
    'valueKey': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The key in the option list for the selection value',
      'defaultValue': {
        'value': '\'value\'',
        'computed': false
      }
    },
    'options': {
      'type': {
        'name': 'arrayOf',
        'value': {
          'name': 'object'
        }
      },
      'required': true,
      'description': 'The list of options to display. Each option must have a labelKey and valueKey'
    },
    'customValidation': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'input': {
      'type': {
        'name': 'object'
      },
      'required': true,
      'description': '@ignore\nRedux Form internal input property. Set when used in a redux \'Field\''
    },
    'meta': {
      'type': {
        'name': 'object'
      },
      'required': true,
      'description': '@ignore\nRedux Form internal meta property. Set when used in a redux \'Field\''
    }
  }
};