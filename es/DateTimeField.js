'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _reactBootstrap = require('react-bootstrap');

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _Label = require('Label');

var _Label2 = _interopRequireDefault(_Label);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

require('bootstrap/dist/css/bootstrap.css');

require('react-datetime/css/react-datetime.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DateTimeField = function DateTimeField(_ref) {
  var label = _ref.label,
      required = _ref.required,
      helpText = _ref.helpText,
      customValidation = _ref.customValidation,
      name = _ref.input.name,
      form = _ref.meta.form,
      disabled = _ref.disabled,
      inputProps = _objectWithoutProperties(_ref.input, ['name']),
      metaProps = _objectWithoutProperties(_ref.meta, ['form']),
      props = _objectWithoutProperties(_ref, ['label', 'required', 'helpText', 'customValidation', 'input', 'meta', 'disabled']);

  var _ref3 = customValidation ? customValidation(metaProps) : (0, _utils2.default)(metaProps),
      validationState = _ref3.validationState,
      errorMessage = _ref3.errorMessage;

  var clearContent = function clearContent() {
    return inputProps.onChange(null);
  };

  var ClearButton = React.createElement(
    'span',
    null,
    React.createElement(
      _reactBootstrap.FormControl.Feedback,
      { onClick: clearContent, style: { pointerEvents: 'all' } },
      React.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
    )
  );
  // const CalendarFeedback = (
  //   <FormControl.Feedback style={{ pointerEvents: 'none' }}>
  //     <Glyphicon glyph="calendar" />
  //   </FormControl.Feedback>
  // );
  var widgetInputProps = {
    name: name,
    className: props.className,
    onClick: function onClick() {},
    disabled: disabled || false
  };
  // name:
  // type: 'text',
  // className: 'form-control',
  // onClick: this.openCalendar,
  // onFocus: this.openCalendar,
  // onChange: this.onInputChange,
  // onKeyDown: this.onInputKey,
  // value: this.state.inputValue,


  var renderInput = function renderInput(_ref2, openCalendar) {
    var onFocus = _ref2.onFocus,
        thisprops = _objectWithoutProperties(_ref2, ['onFocus']);

    return React.createElement(
      _reactBootstrap.InputGroup,
      null,
      React.createElement(_reactBootstrap.FormControl, _extends({}, thisprops, {
        onClick: function () {
          console.log('clicking');
        },
        onFocus: function () {
          console.log('focussing');
        }
      })),
      React.createElement(
        _reactBootstrap.FormControl.Feedback,
        { onClick: openCalendar, style: { pointerEvents: 'all' } },
        React.createElement(_reactBootstrap.Glyphicon, { glyph: 'calendar' })
      )
    );
  };
  return React.createElement(
    _reactBootstrap.FormGroup,
    {
      controlId: name,
      validationState: validationState
    },
    React.createElement(_Label2.default, { label: label, required: required }),
    React.createElement(_reactDatetime2.default, _extends({
      name: name,
      id: form + '-' + name,
      closeOnSelect: true,
      open: false
    }, inputProps, {
      inputProps: widgetInputProps,
      renderInput: renderInput
    }, props)),
    errorMessage,
    React.createElement(
      _reactBootstrap.HelpBlock,
      null,
      helpText
    )
  );
};

DateTimeField.propTypes = _extends({}, (0, _lodash.omit)(_reactDatetime2.default.propTypes, 'input'));
exports.default = DateTimeField;