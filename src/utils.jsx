import React from 'react';
import { HelpBlock } from 'react-bootstrap';

const validationMessage = ({ dirty, touched, error, warning }) => {
  let errorMessage;
  let validationState;
  if (dirty && !error && !warning) {
    validationState = 'success';
  } else if (touched && (!!error || !!warning)) {
    if (error) {
      validationState = 'error';
    } else {
      validationState = 'warning';
    }
    errorMessage = (<HelpBlock>{error || warning}</HelpBlock>);
  }
  return { validationState, errorMessage };
};

export default validationMessage;
