'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldSet = function FieldSet(_ref) {
  var style = _ref.style,
      legendStyle = _ref.legendStyle,
      label = _ref.label,
      children = _ref.children;
  return _react2.default.createElement(
    'fieldset',
    {
      style: _extends({
        padding: '.35em .625em .75em',
        margin: '0 2px',
        border: '1px solid #e5e5e5'
      }, style),
      className: 'form-group'
    },
    _react2.default.createElement(
      'legend',
      { style: _extends({
          width: 'auto',
          borderBottom: '0px',
          paddingLeft: '10px',
          paddingRight: '10px',
          fontSize: '1.5em'
        }, legendStyle)
      },
      label
    ),
    children
  );
};

FieldSet.propTypes = {
  label: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  style: _propTypes2.default.object,
  legendStyle: _propTypes2.default.object
};

FieldSet.defaultProps = {
  style: {},
  legendStyle: {}
};
exports.default = FieldSet;
FieldSet.__docgenInfo = {
  'description': '',
  'props': {
    'label': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': ''
    },
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'style': {
      'type': {
        'name': 'object'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '{}',
        'computed': false
      }
    },
    'legendStyle': {
      'type': {
        'name': 'object'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '{}',
        'computed': false
      }
    }
  }
};