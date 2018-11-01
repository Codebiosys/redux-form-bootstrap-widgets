'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var defaultProps = {
  required: false,
  helpText: null,
  disabled: false,
  inline: false,
  validator: _utils2.default,
  labelKey: 'label',
  valueKey: 'value',
  helpTextStyle: undefined
};

var CheckBoxField = function (_Component) {
  _inherits(CheckBoxField, _Component);

  function CheckBoxField(props) {
    _classCallCheck(this, CheckBoxField);

    var _this = _possibleConstructorReturn(this, (CheckBoxField.__proto__ || Object.getPrototypeOf(CheckBoxField)).call(this, props));

    _initialiseProps.call(_this);

    var validator = props.validator,
        meta = props.meta;

    _this.state = validator(meta);
    return _this;
  }

  _createClass(CheckBoxField, [{
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
          this.checkOptions().map(this.renderInput)
        ),
        this.renderHelpMessage()
      );
    }
  }]);

  return CheckBoxField;
}(_react.Component);

CheckBoxField.defaultProps = defaultProps;

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.checkOptions = function () {
    var _props2 = _this2.props,
        labelKey = _props2.labelKey,
        valueKey = _props2.valueKey,
        options = _props2.options,
        value = _props2.input.value;

    var valueList = (0, _lodash.toArray)(value);
    var theOptions = options.map(function (_ref) {
      var checkLabel = _ref[labelKey],
          checkValue = _ref[valueKey];
      return {
        label: checkLabel,
        value: checkValue,
        checked: valueList.includes(checkValue)
      };
    });
    return theOptions;
  };

  this.handleChange = function (event, eventValue) {
    var _props$input = _this2.props.input,
        value = _props$input.value,
        onChange = _props$input.onChange,
        onBlur = _props$input.onBlur;
    var checked = event.target.checked;

    var valueList = (0, _lodash.castArray)(value);
    if (checked) {
      valueList = (0, _lodash.union)(value, [eventValue]);
    } else {
      valueList = (0, _lodash.filter)(valueList, function (val) {
        return val !== eventValue;
      });
    }
    valueList = valueList.length ? valueList : null;
    onBlur();
    onChange(valueList);
  };

  this.helpTextStyle = function () {
    var _props3 = _this2.props,
        helpText = _props3.helpText,
        helpTextStyle = _props3.helpTextStyle;

    if (!helpTextStyle) {
      return { minHeight: helpText ? '6ex' : '3ex' };
    }
    return helpTextStyle;
  };

  this.renderHelpMessage = function () {
    var helpText = _this2.props.helpText;

    var errorMessage = _this2.state.errorMessage;
    return _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      { style: _this2.helpTextStyle() },
      errorMessage,
      errorMessage && helpText ? _react2.default.createElement('br', null) : '',
      helpText
    );
  };

  this.renderInput = function (checkBoxProps) {
    var _props4 = _this2.props,
        widgetLabel = _props4.label,
        required = _props4.required,
        helpText = _props4.helpText,
        helpTextStyle = _props4.helpTextStyle,
        disabled = _props4.disabled,
        meta = _props4.meta,
        valueKey = _props4.valueKey,
        labelKey = _props4.labelKey,
        validator = _props4.validator,
        _props4$input = _props4.input,
        name = _props4$input.name,
        onFocus = _props4$input.onFocus,
        options = _props4.options,
        inline = _props4.inline,
        props = _objectWithoutProperties(_props4, ['label', 'required', 'helpText', 'helpTextStyle', 'disabled', 'meta', 'valueKey', 'labelKey', 'validator', 'input', 'options', 'inline']);

    var value = checkBoxProps.value,
        label = checkBoxProps.label,
        checked = checkBoxProps.checked;


    return _react2.default.createElement(
      _reactBootstrap.Checkbox,
      _extends({
        key: name + '_' + (0, _lodash.camelCase)(label) // eslint-disable-line
        , name: name + '_' + (0, _lodash.camelCase)(label),
        value: value,
        checked: checked,
        onChange: function onChange(event) {
          return _this2.handleChange(event, value);
        },
        onFocus: onFocus,
        disabled: disabled,
        inline: inline
      }, props),
      label
    );
  };
};

exports.default = CheckBoxField;