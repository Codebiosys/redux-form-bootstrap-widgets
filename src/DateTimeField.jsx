import React from 'react';
import { omit } from 'lodash';
import {
  FormGroup,
  FormControl,
  InputGroup,
  HelpBlock,
  Glyphicon } from 'react-bootstrap';
import DateTime from 'react-datetime';

import Label from 'Label';
import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css';

const DateTimeField = ({
  label,
  required,
  helpText,
  customValidation,
  input: { name, onFocus, ...inputProps },
  meta: { form, ...metaProps },
  ...props
}) => {
  const { validationState, errorMessage } = customValidation ?
  customValidation(metaProps) :
  validationMessage(metaProps);

  const clearContent = () => inputProps.onChange(null);

  const ClearButton = (
    <span>
      <FormControl.Feedback onClick={clearContent} style={{ pointerEvents: 'all' }}>
        <Glyphicon glyph="remove" />
      </FormControl.Feedback>
    </span>
  );
  const CalendarFeedback = (
    <FormControl.Feedback style={{ pointerEvents: 'none' }}>
      <Glyphicon glyph="calendar" />
    </FormControl.Feedback>
  );
  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <Label label={label} required={required} />
      <InputGroup>
        <DateTime
          name={name}
          id={`${form}-${name}`}
          closeOnSelect
          {...inputProps}
          {...props}
        />
        { (!inputProps.value) ? CalendarFeedback : ClearButton }
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

DateTimeField.propTypes = {
  ...omit(DateTime.propTypes, 'input'),
};
export default DateTimeField;
