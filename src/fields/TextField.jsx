import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup } from 'react-bootstrap';


const TextField = ({
  label,
  helpText,
  input,
  type,
  meta: { touched, error, warning },
  ...props
}) => {
  const { name } = input;
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
      <FormControl
        style={{ zIndex: '0' }}
        {...input}
        {...props}
      />
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

export default TextField;
