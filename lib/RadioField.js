'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _Label = require('Label');

var _Label2 = _interopRequireDefault(_Label);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RadioField = function RadioField(_ref) {
  var label = _ref.label,
      required = _ref.required,
      helpText = _ref.helpText,
      valueKey = _ref.valueKey,
      labelKey = _ref.labelKey,
      options = _ref.options,
      inline = _ref.inline,
      disabled = _ref.disabled,
      customValidation = _ref.customValidation,
      _ref$input = _ref.input,
      name = _ref$input.name,
      _onBlur = _ref$input.onBlur,
      onChange = _ref$input.onChange,
      value = _ref$input.value,
      inputProps = _objectWithoutProperties(_ref$input, ['name', 'onBlur', 'onChange', 'value']),
      meta = _ref.meta,
      props = _objectWithoutProperties(_ref, ['label', 'required', 'helpText', 'valueKey', 'labelKey', 'options', 'inline', 'disabled', 'customValidation', 'input', 'meta']);

  var _ref2 = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
      validationState = _ref2.validationState,
      errorMessage = _ref2.errorMessage;

  var handleClick = function handleClick(event) {
    var changeValue = event.target.value === value ? null : event.target.value;
    onChange(changeValue);
    _onBlur(changeValue);
  };

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
      _lodash2.default.map(options, function (option) {
        return _react2.default.createElement(
          _reactBootstrap.Radio,
          _extends({
            key: name + '_' + option[valueKey],
            name: name
          }, inputProps, {
            checked: '' + option[valueKey] === '' + value,
            value: option[valueKey],
            onBlur: function onBlur() {
              return _onBlur();
            },
            onChange: handleClick,
            inline: inline,
            disabled: disabled
          }, props),
          option[labelKey]
        );
      })
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

RadioField.propTypes = {
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

RadioField.defaultProps = {
  required: false,
  disabled: false,
  inline: false,
  labelKey: 'label',
  valueKey: 'value',
  customValidation: null,
  helpText: null
};
exports.default = RadioField;
RadioField.__docgenInfo = {
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