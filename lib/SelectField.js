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

var _lodash = require('lodash');

var _reactBootstrap = require('react-bootstrap');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require('react-select/dist/react-select.css');

require('./selectFieldStyle.css');

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _validationMessage = require('./validationMessage');

var _validationMessage2 = _interopRequireDefault(_validationMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /** Form label. */
  label: _propTypes2.default.string.isRequired,
  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,
  /** Whether or not the field is disabled */
  disabled: _propTypes2.default.bool,
  /** Allow multi select or single select */
  multiple: _propTypes2.default.bool,
  /** Additional text that displays below the widget. */
  helpText: _propTypes2.default.string,
  /** Custom validation function */
  validator: _propTypes2.default.func,
  /** Either an array of objects that have a shape that includes
      the labelKey and valueKey, or a promise that resolves
      such an array */
  options: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.object)]).isRequired,
  /** The key that is used as the select label */
  labelKey: _propTypes2.default.string,
  /** The key that is used as the select value */
  valueKey: _propTypes2.default.string,
  /**
  * @ignore
  * Redux Form internal input property. Set when used in a redux 'Field'
  */
  input: _propTypes2.default.object.isRequired,

  /**
  * @ignore
  * Redux Form internal meta property. Set when used in a redux 'Field'
  */
  meta: _propTypes2.default.object.isRequired,

  helpTextStyle: _propTypes2.default.object
};

var defaultProps = {
  required: false,
  disabled: false,
  helpText: null,
  multiple: false,
  validator: _validationMessage2.default,
  labelKey: 'label',
  valueKey: 'value',
  helpTextStyle: undefined

};

var SelectField = function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField(props) {
    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).call(this, props));

    _this.selectProps = function () {
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          labelKey = _this$props.labelKey,
          valueKey = _this$props.valueKey,
          _this$props$input = _this$props.input,
          name = _this$props$input.name,
          onChange = _this$props$input.onChange,
          onFocus = _this$props$input.onFocus,
          _onBlur = _this$props$input.onBlur,
          value = _this$props$input.value,
          inputProps = _objectWithoutProperties(_this$props$input, ['name', 'onChange', 'onFocus', 'onBlur', 'value']);

      return {
        name: name,
        value: value,
        labelKey: labelKey,
        valueKey: valueKey,
        autoBlur: true,
        onChange: _this.handleChange,
        onFocus: onFocus,
        onBlur: function onBlur() {
          return _onBlur();
        },
        inputProps: inputProps,
        multi: multiple,
        joinValues: true
      };
    };

    _this.handleChange = function (selected) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          valueKey = _this$props2.valueKey,
          onChange = _this$props2.input.onChange;

      var selectedList = (0, _lodash.castArray)(selected);
      var selectedVals = (0, _lodash.map)(selectedList, function (opt) {
        return (0, _lodash.get)(opt, valueKey);
      });
      var changed = void 0;
      if (!multiple) {
        changed = (0, _lodash.get)((0, _lodash.head)(selectedList), valueKey, null);
      } else {
        changed = selectedVals.length ? selectedVals : null;
      }
      onChange(changed);
    };

    _this.helpTextStyle = function () {
      var _this$props3 = _this.props,
          helpText = _this$props3.helpText,
          helpTextStyle = _this$props3.helpTextStyle;

      if (!helpTextStyle) {
        return { minHeight: helpText ? '6ex' : '3ex' };
      }
      return helpTextStyle;
    };

    _this.renderHelpMessage = function () {
      var helpText = _this.props.helpText;

      var errorMessage = _this.state.errorMessage;
      return _react2.default.createElement(
        _reactBootstrap.HelpBlock,
        { style: _this.helpTextStyle() },
        errorMessage,
        errorMessage && helpText ? _react2.default.createElement('br', null) : '',
        helpText
      );
    };

    var validator = props.validator,
        meta = props.meta;

    _this.state = validator(meta);
    return _this;
  }

  _createClass(SelectField, [{
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
          helpTextStyle = _props.helpTextStyle,
          helpText = _props.helpText,
          multiple = _props.multiple,
          labelKey = _props.labelKey,
          valueKey = _props.valueKey,
          validator = _props.validator,
          name = _props.input.name,
          meta = _props.meta,
          options = _props.options,
          props = _objectWithoutProperties(_props, ['label', 'required', 'helpTextStyle', 'helpText', 'multiple', 'labelKey', 'valueKey', 'validator', 'input', 'meta', 'options']);

      var isAsync = (0, _lodash.isFunction)(options);
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: this.state.validationState
        },
        _react2.default.createElement(_Label2.default, { label: label, required: required }),
        !isAsync ? _react2.default.createElement(_reactSelect2.default, _extends({}, this.selectProps(), {
          options: options
        }, props)) : _react2.default.createElement(_reactSelect2.default.Async, _extends({}, this.selectProps(), {
          loadOptions: options
        }, props)),
        this.renderHelpMessage()
      );
    }
  }]);

  return SelectField;
}(_react.Component);

SelectField.defaultProps = defaultProps;
exports.default = SelectField;