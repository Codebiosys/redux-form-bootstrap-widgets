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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    _this.onChange = function (event) {
      // Required function for debounce binding.
      var onChange = _this.props.input.onChange;

      onChange(event);
    };

    _this.handleChange = function (event) {
      var delay = _this.props.delay;

      event.persist();
      _this.setState(_extends({}, _this.state, { value: event.target.value }));
      if (delay) {
        _this.debouncedOnChange.cancel();
        _this.debouncedOnChange(event);
      } else {
        _this.onChange(event);
      }
    };

    _this.clearContent = function () {
      var disabled = _this.props.disabled;

      if (!disabled) {
        _this.setState(_extends({}, _this.state, { lastPropValue: '', value: '' }));
        _this.onChange(null);
      }
    };

    _this.renderClearButton = function () {
      var type = _this.props.type;

      if (type === 'textarea' || !_this.getValue()) {
        return undefined;
      }
      return _react2.default.createElement(
        _reactBootstrap.FormControl.Feedback,
        {
          onClick: _this.clearContent,
          style: { pointerEvents: 'all' }
        },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
      );
    };

    _this.renderHelpMessage = function () {
      var helpText = _this.props.helpText;

      var errorMessage = _this.state.errorMessage;
      return _react2.default.createElement(
        _reactBootstrap.HelpBlock,
        { style: { minHeight: helpText ? '6ex' : '3ex' } },
        errorMessage,
        errorMessage && helpText ? _react2.default.createElement('br', null) : '',
        helpText
      );
    };

    var value = props.input.value,
        validator = props.validator,
        meta = props.meta;

    _this.state = _extends({ value: value || '', lastPropValue: value || '' }, validator(meta));

    _this.onChange = _this.onChange.bind(_this);

    _this.debouncedOnChange = (0, _lodash.debounce)(function (event) {
      _this.onChange(event);
    }, _this.props.delay, {
      leading: false,
      trailing: true
    });
    return _this;
  }

  _createClass(TextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.input.value,
          validator = nextProps.validator,
          meta = nextProps.meta;

      var localValue = value !== this.state.lastPropValue ? value : this.state.value;
      this.setState(_extends({}, this.state, {
        value: localValue,
        lastPropValue: value
      }, validator(meta)));
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var _props = this.props,
          delay = _props.delay,
          value = _props.input.value;

      if (!delay) {
        return value;
      }
      return this.state.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          required = _props2.required,
          helpText = _props2.helpText,
          validator = _props2.validator,
          delay = _props2.delay,
          disabled = _props2.disabled,
          _props2$input = _props2.input,
          name = _props2$input.name,
          onChange = _props2$input.onChange,
          inputProps = _objectWithoutProperties(_props2$input, ['name', 'onChange']),
          meta = _props2.meta,
          addOnBefore = _props2.addOnBefore,
          addOnAfter = _props2.addOnAfter,
          type = _props2.type,
          rest = _objectWithoutProperties(_props2, ['label', 'required', 'helpText', 'validator', 'delay', 'disabled', 'input', 'meta', 'addOnBefore', 'addOnAfter', 'type']);

      var typeConfig = {};
      var inputStyle = { zIndex: '0' };
      var groupStyle = {};

      if (type === 'textarea') {
        typeConfig.componentClass = 'textarea';
        groupStyle.width = '100%';
      } else {
        typeConfig.type = type;
      }

      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: this.state.validationState
        },
        _react2.default.createElement(_Label2.default, { label: label, required: required }),
        _react2.default.createElement(
          _reactBootstrap.InputGroup,
          { style: groupStyle },
          typeConfig.componentClass === 'textarea' ? '' : addOnBefore,
          _react2.default.createElement(_reactBootstrap.FormControl, _extends({
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

TextField.defaultProps = defaultProps;
exports.default = TextField;