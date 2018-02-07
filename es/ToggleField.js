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

var _reactToggle = require('react-toggle');

var _reactToggle2 = _interopRequireDefault(_reactToggle);

var _Label = require('Label');

var _Label2 = _interopRequireDefault(_Label);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

require('react-toggle/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /** Form label. */
  label: _propTypes2.default.string.isRequired,
  /** Flag to display required Astrisk. */
  required: _propTypes2.default.bool,
  /** Whether or not the field is disabled */
  disabled: _propTypes2.default.bool,
  /** Additional text that displays below the widget. */
  helpText: _propTypes2.default.string,
  /** HTML input type. */
  validator: _propTypes2.default.func,
  /** React Boostrap Field addOn, placed before the input */
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
  helpText: null,
  validator: _utils2.default
};

var ToggleField = function (_Component) {
  _inherits(ToggleField, _Component);

  function ToggleField(props) {
    _classCallCheck(this, ToggleField);

    var _this = _possibleConstructorReturn(this, (ToggleField.__proto__ || Object.getPrototypeOf(ToggleField)).call(this, props));

    _this.handleChange = function (event) {
      var onChange = _this.props.input.onChange;

      onChange(!!event.target.checked);
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

    var validator = props.validator,
        meta = props.meta;

    _this.state = validator(meta);
    return _this;
  }

  _createClass(ToggleField, [{
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
          validator = _props.validator,
          _props$input = _props.input,
          name = _props$input.name,
          value = _props$input.value,
          onChange = _props$input.onChange,
          meta = _props.meta,
          inputProps = _objectWithoutProperties(_props.input, ['name', 'value', 'onChange']),
          props = _objectWithoutProperties(_props, ['label', 'required', 'helpText', 'disabled', 'validator', 'input', 'meta']);

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
          React.createElement(_reactToggle2.default, _extends({}, inputProps, {
            name: name,
            checked: !!value,
            onChange: this.handleChange,
            disabled: disabled
          }, props))
        ),
        this.renderHelpMessage()
      );
    }
  }]);

  return ToggleField;
}(_react.Component);

ToggleField.propTypes = propTypes;
ToggleField.defaultProps = defaultProps;
exports.default = ToggleField;