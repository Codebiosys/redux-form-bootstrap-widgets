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
      type = _ref.type,
      componentClass = _ref.componentClass,
      props = _objectWithoutProperties(_ref, ['label', 'required', 'helpText', 'customValidation', 'input', 'meta', 'addOnBefore', 'addOnAfter', 'type', 'componentClass']);

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

  var ClearButton = _react2.default.createElement(
    _reactBootstrap.FormControl.Feedback,
    { onClick: clearContent, style: { pointerEvents: 'all' } },
    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
  );

  return _react2.default.createElement(
    _reactBootstrap.FormGroup,
    {
      controlId: name,
      validationState: validationState
    },
    _react2.default.createElement(_Label2.default, { label: label, required: required }),
    _react2.default.createElement(
      _reactBootstrap.InputGroup,
      { style: groupStyle },
      typeConfig.componentClass ? '' : addOnBefore,
      _react2.default.createElement(_reactBootstrap.FormControl, _extends({
        style: inputStyle
      }, typeConfig, input, props)),
      typeConfig.componentClass ? '' : addOnAfter,
      typeConfig.componentClass || !input.value ? '' : ClearButton
    ),
    errorMessage,
    _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      null,
      helpText
    )
  );
};

TextField.propTypes = _extends({}, _reactBootstrap.FormControl.propTypes, {
  /** Form label. */
  label: _propTypes2.default.string.isRequired,

  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,

  /** Additional text that displays below the widget. */
  helpText: _propTypes2.default.string,

  /** Override the default validation checks. Takes ReduxForm 'meta' as input */
  customValidation: _propTypes2.default.func,

  /** Redux Form Input property. Set when used in a redux 'Field' */
  input: _propTypes2.default.object.isRequired,

  /** Redux Form meta property. Set when used in a redux 'Field' */

  meta: _propTypes2.default.object.isRequired,
  /** React Boostrap Field addOn, placed before the input */
  addOnBefore: _propTypes2.default.element,

  /** React Boostrap Field addOn, placed after the input */
  addOnAfter: _propTypes2.default.element,

  type: _propTypes2.default.string,
  componentClass: _propTypes2.default.string
});

TextField.defaultProps = {
  required: false,
  helpText: null,
  customValidation: null,
  addOnBefore: null,
  addOnAfter: null
};

exports.default = TextField;
TextField.__docgenInfo = {
  'description': 'TextField component description',
  'props': {
    'label': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Form label.'
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
    'customValidation': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Override the default validation checks. Takes ReduxForm \'meta\' as input',
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
      'description': 'Redux Form Input property. Set when used in a redux \'Field\''
    },
    'meta': {
      'type': {
        'name': 'object'
      },
      'required': true,
      'description': 'Redux Form meta property. Set when used in a redux \'Field\''
    },
    'addOnBefore': {
      'type': {
        'name': 'element'
      },
      'required': false,
      'description': 'React Boostrap Field addOn, placed before the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'addOnAfter': {
      'type': {
        'name': 'element'
      },
      'required': false,
      'description': 'React Boostrap Field addOn, placed after the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'type': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'componentClass': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    }
  },
  'composes': ['react-bootstrap']
};