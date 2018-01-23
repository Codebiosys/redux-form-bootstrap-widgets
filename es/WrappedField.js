'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappedFields = exports.WrappedField = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reduxFormConfig = {
  destroyOnUnmount: false
};

var ReduxField = function ReduxField(props) {
  return React.createElement(_reduxForm.Field, (0, _lodash.omit)(props, [].concat(_toConsumableArray((0, _lodash.keys)(_reduxForm.propTypes)), ['clearSubmitErrors'])));
};

var ReduxFields = function ReduxFields(props) {
  return React.createElement(_reduxForm.Fields, (0, _lodash.omit)(props, [].concat(_toConsumableArray((0, _lodash.keys)(_reduxForm.propTypes)), ['clearSubmitErrors'])));
};

var WrappedField = exports.WrappedField = (0, _redux.compose)((0, _reactRedux.connect)(function (state, props) {
  return { form: props.form };
}), (0, _reduxForm.reduxForm)(reduxFormConfig))(ReduxField);

var WrappedFields = exports.WrappedFields = (0, _redux.compose)((0, _reactRedux.connect)(function (state, props) {
  return { form: props.form };
}), (0, _reduxForm.reduxForm)(reduxFormConfig))(ReduxFields);