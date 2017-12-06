'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var DebounceTextField = function (_Component) {
  _inherits(DebounceTextField, _Component);

  function DebounceTextField(props) {
    _classCallCheck(this, DebounceTextField);

    var _this = _possibleConstructorReturn(this, (DebounceTextField.__proto__ || Object.getPrototypeOf(DebounceTextField)).call(this, props));

    _this.propTypes = _extends({}, _reactBootstrap.FormControl.propTypes);
    var delay = props.delay,
        _props$input = props.input,
        onChange = _props$input.onChange,
        value = _props$input.value;


    _this.state = { value: value };
    _this.lastPropValue = value;

    _this.debouncedOnChange = (0, _lodash.debounce)(function (event) {
      onChange(event.target.value);
    }, delay);
    return _this;
  }

  _createClass(DebounceTextField, [{
    key: 'getValue',
    value: function getValue() {
      var value = this.props.input.value;

      var componentValue = value !== this.lastPropValue ? value : this.state.value;
      this.lastPropValue = componentValue;
      return componentValue;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      event.persist();
      this.setState({ value: event.target.value });
      this.debouncedOnChange(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          required = _props.required,
          helpText = _props.helpText,
          customValidation = _props.customValidation,
          _props$input2 = _props.input,
          name = _props$input2.name,
          onChange = _props$input2.onChange,
          meta = _props.meta,
          addOnBefore = _props.addOnBefore,
          addOnAfter = _props.addOnAfter,
          type = _props.type,
          componentClass = _props.componentClass,
          inputProps = _objectWithoutProperties(_props.input, ['name', 'onChange']),
          rest = _objectWithoutProperties(_props, ['label', 'required', 'helpText', 'customValidation', 'input', 'meta', 'addOnBefore', 'addOnAfter', 'type', 'componentClass']);

      var _ref = customValidation ? customValidation(meta) : (0, _utils2.default)(meta),
          validationState = _ref.validationState,
          errorMessage = _ref.errorMessage;

      var typeConfig = {};
      var inputStyle = { zIndex: '0' };
      var groupStyle = {};

      if (type === 'textarea' || componentClass === 'textarea') {
        typeConfig.componentClass = 'textarea';
        groupStyle.width = '100%';
      } else if (type) {
        typeConfig.type = type;
      }

      var clearContent = function clearContent() {
        _this2.setState({ value: null });
        onChange(null);
      };

      var ClearButton = React.createElement(
        _reactBootstrap.FormControl.Feedback,
        { onClick: clearContent, style: { pointerEvents: 'all' } },
        React.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
      );

      return React.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: validationState
        },
        React.createElement(_Label2.default, { label: label, required: required }),
        React.createElement(
          _reactBootstrap.InputGroup,
          { style: groupStyle },
          typeConfig.componentClass ? '' : addOnBefore,
          React.createElement(_reactBootstrap.FormControl, _extends({
            name: name,
            onChange: this.handleChange,
            style: inputStyle
          }, typeConfig, inputProps, rest, {
            value: this.getValue()
          })),
          addOnAfter,
          ClearButton
        ),
        errorMessage,
        React.createElement(
          _reactBootstrap.HelpBlock,
          null,
          helpText
        )
      );
    }
  }]);

  return DebounceTextField;
}(_react.Component);

exports.default = DebounceTextField;