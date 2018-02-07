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

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  FieldSet: {
    displayName: 'FieldSet'
  }
};

var _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/FieldSet.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/FieldSet.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformHmrLibIndexJs2(_UsersDavidmoteconsultingEnvCodebiosysReduxFormBootstrapWidgetsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var propTypes = {
  /** Fieldset label. */
  label: _propTypes2.default.string.isRequired,
  /** Styling for the Fieldset. */
  style: _propTypes2.default.object,
  /** Styling for the Fieldset label. */
  labelStyle: _propTypes2.default.object,
  /** Child nodes for the Fieldset. */
  children: _propTypes2.default.node.isRequired
};

var defaultProps = {
  style: {},
  labelStyle: {}
};

var FieldSet = _wrapComponent('FieldSet')((_temp = _class = function (_Component) {
  _inherits(FieldSet, _Component);

  function FieldSet(props) {
    _classCallCheck(this, FieldSet);

    var _this = _possibleConstructorReturn(this, (FieldSet.__proto__ || Object.getPrototypeOf(FieldSet)).call(this, props));

    _this.style = {
      padding: '.35em .625em .75em',
      margin: '0 2px',
      border: '1px solid #e5e5e5'
    };
    _this.labelStyle = {
      width: 'auto',
      borderBottom: '0px',
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: '1.5em'
    };
    return _this;
  }

  _createClass(FieldSet, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          labelStyle = _props.labelStyle,
          label = _props.label,
          children = _props.children;

      return _react3.default.createElement(
        'fieldset',
        {
          style: _extends({}, this.style, style),
          className: 'form-group'
        },
        _react3.default.createElement(
          'legend',
          { style: _extends({}, this.labelStyle, labelStyle)
          },
          label
        ),
        children
      );
    }
  }]);

  return FieldSet;
}(_react2.Component), _class.propTypes = propTypes, _class.defaultProps = defaultProps, _temp));

exports.default = FieldSet;
FieldSet.__docgenInfo = {
  'description': '',
  'displayName': 'FieldSet',
  'props': {
    'label': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Fieldset label.'
    },
    'style': {
      'type': {
        'name': 'object'
      },
      'required': false,
      'description': 'Styling for the Fieldset.',
      'defaultValue': {
        'value': '{}',
        'computed': false
      }
    },
    'labelStyle': {
      'type': {
        'name': 'object'
      },
      'required': false,
      'description': 'Styling for the Fieldset label.',
      'defaultValue': {
        'value': '{}',
        'computed': false
      }
    },
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': 'Child nodes for the Fieldset.'
    }
  }
};