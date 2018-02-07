'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/davidmoteconsulting/Env/codebiosys/redux-form-bootstrap-widgets/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/davidmoteconsulting/Env/codebiosys/redux-form-bootstrap-widgets/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/davidmoteconsulting/Env/codebiosys/redux-form-bootstrap-widgets/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Label = require('Label');

var _Label2 = _interopRequireDefault(_Label);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

require('react-datetime/css/react-datetime.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DateTimeField: {
    displayName: 'DateTimeField'
  }
};

var _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/DateTimeField.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/DateTimeField.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformHmrLibIndexJs2(_UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var propTypes = {
  /** Field label. */
  label: _propTypes2.default.string.isRequired,
  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,
  /** Whether or not the field is disabled */
  disabled: _propTypes2.default.bool,
  /** The helptext to display below the field */
  helpText: _propTypes2.default.string,
  // /** The date format to use: Supports moment */
  dateFormat: _propTypes2.default.string,
  /** The custom validation function */
  validator: _propTypes2.default.func,
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

var defaultProps = {
  required: false,
  disabled: false,
  dateFormat: undefined,
  helpText: undefined,
  validator: _utils2.default
};

var DateTimeField = _wrapComponent('DateTimeField')((_temp = _class = function (_Component) {
  _inherits(DateTimeField, _Component);

  function DateTimeField(props) {
    _classCallCheck(this, DateTimeField);

    var _this = _possibleConstructorReturn(this, (DateTimeField.__proto__ || Object.getPrototypeOf(DateTimeField)).call(this, props));

    _this.clearContent = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.input.onChange;

      if (!disabled) {
        onChange(null);
      }
    };

    _this.controlFeedback = function () {
      var value = _this.props.input.value;

      if (value) {
        return _react3.default.createElement(
          _reactBootstrap.FormControl.Feedback,
          {
            onClick: _this.clearContent,
            style: { pointerEvents: 'all' }
          },
          _react3.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
        );
      }
      return _react3.default.createElement(
        _reactBootstrap.FormControl.Feedback,
        { style: { pointerEvents: 'none' } },
        _react3.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'calendar' })
      );
    };

    _this.renderInput = function (_ref) {
      var inputProps = _objectWithoutProperties(_ref, []);

      var _this$props2 = _this.props,
          dateFormat = _this$props2.dateFormat,
          value = _this$props2.input.value,
          disabled = _this$props2.disabled;

      return _react3.default.createElement(
        _reactBootstrap.InputGroup,
        null,
        _react3.default.createElement(_reactBootstrap.FormControl, _extends({}, inputProps, {
          autoComplete: 'off',
          disabled: disabled,
          value: dateFormat && _moment2.default.isMoment(value) ? value.format(dateFormat) : value
        })),
        _this.controlFeedback()
      );
    };

    var validator = props.validator,
        meta = props.meta;

    _this.state = validator(meta);
    return _this;
  }

  _createClass(DateTimeField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var validator = nextProps.validator,
          meta = nextProps.meta;

      this.setState(_extends({}, this.state, validator(meta)));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          required = _props.required,
          helpText = _props.helpText,
          disabled = _props.disabled,
          _props$input = _props.input,
          name = _props$input.name,
          value = _props$input.value,
          inputProps = _objectWithoutProperties(_props$input, ['name', 'value']),
          form = _props.meta.form,
          props = _objectWithoutProperties(_props, ['label', 'required', 'helpText', 'disabled', 'input', 'meta']);

      return _react3.default.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: this.state.validationState
        },
        _react3.default.createElement(_Label2.default, { label: label, required: required }),
        _react3.default.createElement(_reactDatetime2.default, _extends({
          name: name,
          id: form + '-' + name,
          closeOnSelect: true,
          renderInput: this.renderInput
        }, inputProps, props)),
        _react3.default.createElement(
          _reactBootstrap.HelpBlock,
          { style: { minHeight: helpText ? '6ex' : '3ex' } },
          this.state.errorMessage,
          this.state.errorMessage && helpText ? _react3.default.createElement('br', null) : '',
          helpText
        )
      );
    }
  }]);

  return DateTimeField;
}(_react2.Component), _class.propTypes = propTypes, _class.defaultProps = defaultProps, _temp));

exports.default = DateTimeField;
DateTimeField.__docgenInfo = {
  'description': '',
  'displayName': 'DateTimeField',
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
    'helpText': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The helptext to display below the field',
      'defaultValue': {
        'value': 'undefined',
        'computed': true
      }
    },
    'dateFormat': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'undefined',
        'computed': true
      }
    },
    'validator': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'The custom validation function',
      'defaultValue': {
        'value': 'validationMessage',
        'computed': true
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