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

var DateTimeField = function (_Component) {
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
        return React.createElement(
          _reactBootstrap.FormControl.Feedback,
          {
            onClick: _this.clearContent,
            style: { pointerEvents: 'all' }
          },
          React.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
        );
      }
      return React.createElement(
        _reactBootstrap.FormControl.Feedback,
        { style: { pointerEvents: 'none' } },
        React.createElement(_reactBootstrap.Glyphicon, { glyph: 'calendar' })
      );
    };

    _this.renderInput = function (_ref) {
      var onChange = _ref.onChange,
          dtValue = _ref.value,
          inputProps = _objectWithoutProperties(_ref, ['onChange', 'value']);

      var _this$props2 = _this.props,
          dateFormat = _this$props2.dateFormat,
          value = _this$props2.input.value,
          disabled = _this$props2.disabled;

      return React.createElement(
        _reactBootstrap.InputGroup,
        null,
        React.createElement(_reactBootstrap.FormControl, _extends({}, inputProps, {
          autoComplete: 'off',
          disabled: disabled,
          onChange: onChange,
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
          form = _props.meta.form,
          inputProps = _objectWithoutProperties(_props.input, ['name', 'value']),
          props = _objectWithoutProperties(_props, ['label', 'required', 'helpText', 'disabled', 'input', 'meta']);

      return React.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: this.state.validationState
        },
        React.createElement(_Label2.default, { label: label, required: required }),
        React.createElement(_reactDatetime2.default, _extends({
          name: name,
          id: form + '-' + name,
          closeOnSelect: true,
          renderInput: this.renderInput
        }, inputProps, props)),
        React.createElement(
          _reactBootstrap.HelpBlock,
          { style: { minHeight: helpText ? '6ex' : '3ex' } },
          this.state.errorMessage,
          this.state.errorMessage && helpText ? React.createElement('br', null) : '',
          helpText
        )
      );
    }
  }]);

  return DateTimeField;
}(_react.Component);

DateTimeField.propTypes = propTypes;
DateTimeField.defaultProps = defaultProps;
exports.default = DateTimeField;