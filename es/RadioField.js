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

var propTypes = {
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
  inline: false,
  labelKey: 'label',
  valueKey: 'value',
  validator: _utils2.default,
  helpText: null
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

RadioField.propTypes = propTypes;
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

  this.renderHelpMessage = function () {
    var helpText = _this3.props.helpText;

    var errorMessage = _this3.state.errorMessage;
    return _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      { style: { minHeight: helpText ? '6ex' : '3ex' } },
      errorMessage,
      errorMessage && helpText ? _react2.default.createElement('br', null) : '',
      helpText
    );
  };

  this.renderOption = function (option) {
    var _props2 = _this3.props,
        label = _props2.label,
        required = _props2.required,
        helpText = _props2.helpText,
        valueKey = _props2.valueKey,
        labelKey = _props2.labelKey,
        options = _props2.options,
        inline = _props2.inline,
        disabled = _props2.disabled,
        validator = _props2.validator,
        _props2$input = _props2.input,
        name = _props2$input.name,
        _onBlur = _props2$input.onBlur,
        onChange = _props2$input.onChange,
        value = _props2$input.value,
        inputProps = _objectWithoutProperties(_props2$input, ['name', 'onBlur', 'onChange', 'value']),
        meta = _props2.meta,
        props = _objectWithoutProperties(_props2, ['label', 'required', 'helpText', 'valueKey', 'labelKey', 'options', 'inline', 'disabled', 'validator', 'input', 'meta']);

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