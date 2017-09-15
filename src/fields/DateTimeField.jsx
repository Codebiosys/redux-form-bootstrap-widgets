import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, InputGroup, HelpBlock } from 'react-bootstrap';
import storeFactory from 'store';
import DateTime from 'react-datetime';

import moment from 'moment';
import _ from 'lodash';

import 'react-datetime/css/react-datetime.css';

const DateTimeField = ({
  label,
  helpText,
  input: { name, onFocus, ...inputProps },
  meta: { form, touched, error, warning },
  ...props
}) => {
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

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <DateTime
        name={name}
        id={`${form}-${name}`}
        {...props}
        closeOnSelect
        {...inputProps}
      />
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

export default DateTimeField;
