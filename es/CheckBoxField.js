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
      var _props2 = this.props,
          label = _props2.label,
          required = _props2.required,
          name = _props2.input.name;


      return React.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: this.state.validationState
        },
        React.createElement(_Label2.default, { label: label, required: required }),
        React.createElement(
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
    var _props3 = _this2.props,
        labelKey = _props3.labelKey,
        valueKey = _props3.valueKey,
        options = _props3.options,
        value = _props3.input.value;

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
    return React.createElement(
      _reactBootstrap.HelpBlock,
      { style: { minHeight: helpText ? '6ex' : '3ex' } },
      errorMessage,
      errorMessage && helpText ? React.createElement('br', null) : '',
      helpText
    );
  };

  this.renderInput = function (checkBoxProps) {
    var _props = _this2.props,
        widgetLabel = _props.label,
        required = _props.required,
        helpText = _props.helpText,
        disabled = _props.disabled,
        meta = _props.meta,
        valueKey = _props.valueKey,
        labelKey = _props.labelKey,
        validator = _props.validator,
        _props$input2 = _props.input,
        name = _props$input2.name,
        onFocus = _props$input2.onFocus,
        options = _props.options,
        inline = _props.inline,
        props = _objectWithoutProperties(_props, ['label', 'required', 'helpText', 'disabled', 'meta', 'valueKey', 'labelKey', 'validator', 'input', 'options', 'inline']);

    var value = checkBoxProps.value,
        label = checkBoxProps.label,
        checked = checkBoxProps.checked;


    return React.createElement(
      _reactBootstrap.Checkbox,
      _extends({
        key: name + '_' + (0, _lodash.camelCase)(label) // eslint-disable-line
        , name: name + '_' + (0, _lodash.camelCase)(label),
        value: value,
        checked: checked,
        onChange: function (event) {
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