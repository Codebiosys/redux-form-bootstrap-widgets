'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  required: false,
  disabled: false,
  inline: false,
  labelKey: 'label',
  valueKey: 'value',
  validator: _utils2.default,
  helpText: null,
  helpTextStyle: undefined
};

var RadioField = function (_Component) {
  _inherits(RadioField, _Component);

  function RadioField(props) {
    _classCallCheck(this, RadioField);

    var _this = _possibleConstructorReturn(this, (RadioField.__proto__ || Object.getPrototypeOf(RadioField)).call(this, props));

    _initialiseProps.call(_this);

    var validator = props.validator,
        meta = props.meta;

    _this.state = validator(meta);
    return _this;
  }

  _createClass(RadioField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var validator = nextProps.validator,
          meta = nextProps.meta;

      this.setState(_extends({}, this.state, validator(meta)));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          required = _props.required,
          options = _props.options,
          name = _props.input.name;

      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: this.state.validationState
        },
        _react2.default.createElement(_Label2.default, { label: label, required: required }),
        _react2.default.createElement(
          _reactBootstrap.InputGroup,
          null,
          (0, _lodash.map)(options, function (option) {
            return _this2.renderOption(option);
          })
        ),
        this.renderHelpMessage()
      );
    }
  }]);

  return RadioField;
}(_react.Component);

RadioField.defaultProps = defaultProps;

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleChange = function (event, targetValue) {
    var _props$input = _this3.props.input,
        onChange = _props$input.onChange,
        onBlur = _props$input.onBlur,
        value = _props$input.value;

    var changeValue = targetValue === value ? null : targetValue;
    onChange(changeValue);
    onBlur(changeValue);
  };

  this.helpTextStyle = function () {
    var _props2 = _this3.props,
        helpText = _props2.helpText,
        helpTextStyle = _props2.helpTextStyle;

    if (!helpTextStyle) {
      return { minHeight: helpText ? '6ex' : '3ex' };
    }
    return helpTextStyle;
  };

  this.renderHelpMessage = function () {
    var helpText = _this3.props.helpText;

    var errorMessage = _this3.state.errorMessage;
    return _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      { style: _this3.helpTextStyle() },
      errorMessage,
      errorMessage && helpText ? _react2.default.createElement('br', null) : '',
      helpText
    );
  };

  this.renderOption = function (option) {
    var _props3 = _this3.props,
        label = _props3.label,
        required = _props3.required,
        helpText = _props3.helpText,
        helpTextStyle = _props3.helpTextStyle,
        valueKey = _props3.valueKey,
        labelKey = _props3.labelKey,
        options = _props3.options,
        inline = _props3.inline,
        disabled = _props3.disabled,
        validator = _props3.validator,
        _props3$input = _props3.input,
        name = _props3$input.name,
        _onBlur = _props3$input.onBlur,
        onChange = _props3$input.onChange,
        value = _props3$input.value,
        inputProps = _objectWithoutProperties(_props3$input, ['name', 'onBlur', 'onChange', 'value']),
        meta = _props3.meta,
        props = _objectWithoutProperties(_props3, ['label', 'required', 'helpText', 'helpTextStyle', 'valueKey', 'labelKey', 'options', 'inline', 'disabled', 'validator', 'input', 'meta']);

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
        onChange: function onChange(event) {
          return _this3.handleChange(event, option[valueKey]);
        },
        inline: inline,
        disabled: disabled
      }, props),
      option[labelKey]
    );
  };
};

exports.default = RadioField;