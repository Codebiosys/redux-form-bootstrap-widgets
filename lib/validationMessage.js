'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validationMessage = function validationMessage(_ref) {
  var dirty = _ref.dirty,
      touched = _ref.touched,
      error = _ref.error,
      warning = _ref.warning;

  var errorMessage = void 0;
  var validationState = void 0;
  if (dirty && !error && !warning) {
    validationState = 'success';
  } else if (touched && (!!error || !!warning)) {
    if (error) {
      validationState = 'error';
    } else {
      validationState = 'warning';
    }
    errorMessage = error || warning;
  }
  return { validationState: validationState, errorMessage: errorMessage };
};

exports.default = validationMessage;