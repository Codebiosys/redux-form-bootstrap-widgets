import React from 'react';
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  InputGroup } from 'react-bootstrap';
import Toggle from 'react-toggle';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toggle/style.css';

const ToggleField = ({
  label,
  helpText,
  input: { name, value, onChange, ...inputProps },
  meta,
  ...props
}) => {
  const { validationState, errorMessage } = validationMessage(meta);

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <InputGroup>
        <Toggle
          {...inputProps}
          name={name}
          checked={!!value}
          onChange={(event) => {
            onChange(!!event.target.checked);
          }}
          {...props}
        />
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>

  );
};

ToggleField.propTypes = {
  ...Toggle.propTypes,
};
export default ToggleField;
