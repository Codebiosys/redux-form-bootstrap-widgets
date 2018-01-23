'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/davidmoteconsulting/Env/codebiosys/redux-form-bootstrap-widgets/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/davidmoteconsulting/Env/codebiosys/redux-form-bootstrap-widgets/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/davidmoteconsulting/Env/codebiosys/redux-form-bootstrap-widgets/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _components = {
  DebounceTextField: {
    displayName: 'DebounceTextField'
  }
};

var _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/DebounceTextField.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/DebounceTextField.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformHmrLibIndexJs2(_UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var DebounceTextField = _wrapComponent('DebounceTextField')(function (_Component) {
  _inherits(DebounceTextField, _Component);

  function DebounceTextField(props) {
    _classCallCheck(this, DebounceTextField);

    var _this = _possibleConstructorReturn(this, (DebounceTextField.__proto__ || Object.getPrototypeOf(DebounceTextField)).call(this, props));

    var delay = props.delay,
        _props$input = props.input,
        onChange = _props$input.onChange,
        value = _props$input.value;


    _this.state = { value: value || '' };
    _this.lastPropValue = value || '';

    _this.debouncedOnChange = (0, _lodash.debounce)(function (event) {
      onChange(event.target.value);
    }, delay || 100);

    _this.handleChange = function (event) {
      event.persist();
      _this.setState({ value: event.target.value });
      _this.debouncedOnChange(event);
    };
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          required = _props.required,
          helpText = _props.helpText,
          customValidation = _props.customValidation,
          delay = _props.delay,
          _props$input2 = _props.input,
          name = _props$input2.name,
          onChange = _props$input2.onChange,
          inputProps = _objectWithoutProperties(_props$input2, ['name', 'onChange']),
          meta = _props.meta,
          addOnBefore = _props.addOnBefore,
          addOnAfter = _props.addOnAfter,
          type = _props.type,
          componentClass = _props.componentClass,
          rest = _objectWithoutProperties(_props, ['label', 'required', 'helpText', 'customValidation', 'delay', 'input', 'meta', 'addOnBefore', 'addOnAfter', 'type', 'componentClass']);

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
        _this2.setState({ value: '' });
        onChange(null);
      };

      var ClearButton = _react3.default.createElement(
        _reactBootstrap.FormControl.Feedback,
        { onClick: clearContent, style: { pointerEvents: 'all' } },
        _react3.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
      );

      return _react3.default.createElement(
        _reactBootstrap.FormGroup,
        {
          controlId: name,
          validationState: validationState
        },
        _react3.default.createElement(_Label2.default, { label: label, required: required }),
        _react3.default.createElement(
          _reactBootstrap.InputGroup,
          { style: groupStyle },
          typeConfig.componentClass ? '' : addOnBefore,
          _react3.default.createElement(_reactBootstrap.FormControl, _extends({
            name: name,
            onChange: this.handleChange,
            style: inputStyle
          }, typeConfig, inputProps, rest, {
            value: this.getValue()
          })),
          addOnAfter,
          !this.getValue() ? '' : ClearButton
        ),
        errorMessage,
        _react3.default.createElement(
          _reactBootstrap.HelpBlock,
          null,
          helpText
        )
      );
    }
  }]);

  return DebounceTextField;
}(_react2.Component));

DebounceTextField.propTypes = _extends({}, _reactBootstrap.FormControl.propTypes);

exports.default = DebounceTextField;
DebounceTextField.__docgenInfo = {
  'description': '',
  'displayName': 'DebounceTextField',
  'composes': ['react-bootstrap']
};