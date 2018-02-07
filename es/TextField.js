'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = _extends({}, _reactBootstrap.FormControl.propTypes, {
  /** Form label. */
  label: _propTypes2.default.string.isRequired,
  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,
  /** Whether or not the field is disabled */
  disabled: _propTypes2.default.bool,
  /** Additional text that displays below the widget. */
  delay: _propTypes2.default.number,
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

var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.debouncedOnChange = (0, _lodash.debounce)(function (event) {
      _this.props.input.onChange(event.target.value);
    }, _this.props.delay);

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          delay = _this$props.delay,
          onChange = _this$props.input.onChange;

      event.persist();
      _this.setState({ value: event.target.value });
      if (delay) {
        _this.debouncedOnChange(event);
      } else {
        onChange(event.target.value);
      }
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
      return React.createElement(
        _reactBootstrap.FormControl.Feedback,
        {
          onClick: _this.clearContent,
          style: { pointerEvents: 'all' }
        },
        React.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
      );
    };

    _this.renderHelpMessage = function () {
      var helpText = _this.props.helpText;

      var errorMessage = _this.state.errorMessage;
      return React.createElement(
        _reactBootstrap.HelpBlock,
        { style: { minHeight: helpText ? '6ex' : '3ex' } },
        errorMessage,
        errorMessage && helpText ? React.createElement('br', null) : '',
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
          meta = _props.meta,
          addOnBefore = _props.addOnBefore,
          addOnAfter = _props.addOnAfter,
          type = _props.type,
          inputProps = _objectWithoutProperties(_props.input, ['name', 'onChange']),
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

      return React.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: this.state.validationState
        },
        React.createElement(_Label2.default, { label: label, required: required }),
        React.createElement(
          _reactBootstrap.InputGroup,
          { style: groupStyle },
          typeConfig.componentClass === 'textarea' ? '' : addOnBefore,
          React.createElement(_reactBootstrap.FormControl, _extends({
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
}(_react.Component);

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;
exports.default = TextField;