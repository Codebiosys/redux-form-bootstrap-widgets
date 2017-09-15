import React from 'react';
import { HelpBlock } from 'react-bootstrap';

const validationMessage = ({ touched, error, warning }) => {
  let errorMessage;
  let validationState;
  if (touched && !error && !warning) {
    validationState = 'success';
  } else if (touched) {
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
