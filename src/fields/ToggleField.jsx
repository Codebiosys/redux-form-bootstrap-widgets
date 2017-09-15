import React from 'react';
import { FormGroup, ControlLabel, HelpBlock, InputGroup } from 'react-bootstrap';

import Toggle from 'react-toggle';
import 'react-toggle/style.css';


const ToggleField = ({
  label,
  helpText,
  input: { name, value, onChange, ...inputProps },
  type,
  meta: { touched, error, warning },
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

  const handleChange = (event) => {
    onChange(!!event.target.checked);
  };
  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <InputGroup>
        <Toggle
          name={name}
          onChange={handleChange}
          checked={!!value}
          {...inputProps}
        />
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>

  );
};

export default ToggleField;
