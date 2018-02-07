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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TextField: {
    displayName: 'TextField'
  }
};

var _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/TextField.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/TextField.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformHmrLibIndexJs2(_UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var propTypes = _extends({}, _reactBootstrap.FormControl.propTypes, {
  /** Form label. */
  label: _propTypes2.default.string.isRequired,
  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,
  /** Whether or not the field is disabled */
  disabled: _propTypes2.default.bool,
  /** Additional text that displays below the widget. */
  // delay: PropTypes.int,
  /** Additional text that displays below the widget. */
  helpText: _propTypes2.default.string,
  /** HTML input type. */
  type: _propTypes2.default.oneOf(['text', 'password', 'number', 'textarea']),
  /** Override the default validation checks. Takes ReduxForm 'meta' as input */
  validator: _propTypes2.default.func,
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

var defaultProps = {
  required: false,
  helpText: null,
  validator: _utils2.default,
  addOnBefore: null,
  addOnAfter: null,
  disabled: false,
  type: 'text',
  delay: undefined
};

var TextField = _wrapComponent('TextField')((_temp = _class = function (_Component) {
  _inherits(TextField, _Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.debouncedOnChange = function () {
      var _this$props = _this.props,
          onChange = _this$props.input.onChange,
          delay = _this$props.delay;

      if (delay) {
        return (0, _lodash.debounce)(function (event) {
          onChange(event);
        }, delay, {
          leading: false,
          trailing: true });
      }
      return onChange;
    };

    _this.handleChange = function (event) {
      event.persist();
      _this.setState({ value: event.target.value });
      _this.debouncedOnChange()(event);
    };

    _this.clearContent = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          onChange = _this$props2.input.onChange;

      if (!disabled) {
        _this.setState({ value: '' });
        onChange(null);
      }
    };

    _this.renderClearButton = function () {
      var type = _this.props.type;

      if (type === 'textarea' || !_this.getValue()) {
        return undefined;
      }
      return _react3.default.createElement(
        _reactBootstrap.FormControl.Feedback,
        {
          onClick: _this.clearContent,
          style: { pointerEvents: 'all' }
        },
        _react3.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
      );
    };

    _this.renderHelpMessage = function () {
      var helpText = _this.props.helpText;

      var errorMessage = _this.state.errorMessage;
      return _react3.default.createElement(
        _reactBootstrap.HelpBlock,
        { style: { minHeight: helpText ? '6ex' : '3ex' } },
        errorMessage,
        errorMessage && helpText ? _react3.default.createElement('br', null) : '',
        helpText
      );
    };

    var value = props.input.value,
        validator = props.validator,
        meta = props.meta;


    _this.state = _extends({ value: value || '' }, validator(meta));
    _this.lastPropValue = value || '';
    return _this;
  }

  _createClass(TextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.input.value,
          validator = nextProps.validator,
          meta = nextProps.meta;

      this.setState(_extends({}, this.state, { value: value }, validator(meta)));
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var value = this.props.input.value;

      var componentValue = value !== this.lastPropValue ? value : this.state.value;
      this.lastPropValue = componentValue;
      return componentValue;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          required = _props.required,
          helpText = _props.helpText,
          validator = _props.validator,
          delay = _props.delay,
          disabled = _props.disabled,
          _props$input = _props.input,
          name = _props$input.name,
          onChange = _props$input.onChange,
          inputProps = _objectWithoutProperties(_props$input, ['name', 'onChange']),
          meta = _props.meta,
          addOnBefore = _props.addOnBefore,
          addOnAfter = _props.addOnAfter,
          type = _props.type,
          rest = _objectWithoutProperties(_props, ['label', 'required', 'helpText', 'validator', 'delay', 'disabled', 'input', 'meta', 'addOnBefore', 'addOnAfter', 'type']);

      var typeConfig = {};
      var inputStyle = { zIndex: '0' };
      var groupStyle = {};

      if (type === 'textarea') {
        typeConfig.componentClass = 'textarea';
        groupStyle.width = '100%';
      } else {
        typeConfig.type = type;
      }

      return _react3.default.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: this.state.validationState
        },
        _react3.default.createElement(_Label2.default, { label: label, required: required }),
        _react3.default.createElement(
          _reactBootstrap.InputGroup,
          { style: groupStyle },
          typeConfig.componentClass === 'textarea' ? '' : addOnBefore,
          _react3.default.createElement(_reactBootstrap.FormControl, _extends({
            name: name,
            onChange: this.handleChange,
            style: inputStyle
          }, typeConfig, inputProps, rest, {
            disabled: disabled,
            value: this.getValue()

          })),
          typeConfig.componentClass === 'textarea' ? '' : addOnAfter,
          this.renderClearButton()
        ),
        this.renderHelpMessage()
      );
    }
  }]);

  return TextField;
}(_react2.Component), _class.propTypes = propTypes, _class.defaultProps = defaultProps, _temp));

exports.default = TextField;
TextField.__docgenInfo = {
  'description': '',
  'displayName': 'TextField',
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
      'description': 'Additional text that displays below the widget.',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'type': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '\'text\'',
          'computed': false
        }, {
          'value': '\'password\'',
          'computed': false
        }, {
          'value': '\'number\'',
          'computed': false
        }, {
          'value': '\'textarea\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'HTML input type.',
      'defaultValue': {
        'value': '\'text\'',
        'computed': false
      }
    },
    'validator': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Override the default validation checks. Takes ReduxForm \'meta\' as input',
      'defaultValue': {
        'value': 'validationMessage',
        'computed': true
      }
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
    },
    'delay': {
      'defaultValue': {
        'value': 'undefined',
        'computed': true
      }
    }
  },
  'composes': ['react-bootstrap']
};