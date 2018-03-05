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
  helpText: null,
  disabled: false,
  inline: false,
  validator: _utils2.default,
  labelKey: 'label',
  valueKey: 'value'
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

CheckBoxField.propTypes = propTypes;
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

  this.renderHelpMessage = function () {
    var helpText = _this2.props.helpText;

    var errorMessage = _this2.state.errorMessage;
    return _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      { style: { minHeight: helpText ? '6ex' : '3ex' } },
      errorMessage,
      errorMessage && helpText ? _react2.default.createElement('br', null) : '',
      helpText
    );
  };

  this.renderInput = function (checkBoxProps) {
    var _props3 = _this2.props,
        widgetLabel = _props3.label,
        required = _props3.required,
        helpText = _props3.helpText,
        disabled = _props3.disabled,
        meta = _props3.meta,
        valueKey = _props3.valueKey,
        labelKey = _props3.labelKey,
        validator = _props3.validator,
        _props3$input = _props3.input,
        name = _props3$input.name,
        onFocus = _props3$input.onFocus,
        options = _props3.options,
        inline = _props3.inline,
        props = _objectWithoutProperties(_props3, ['label', 'required', 'helpText', 'disabled', 'meta', 'valueKey', 'labelKey', 'validator', 'input', 'options', 'inline']);

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