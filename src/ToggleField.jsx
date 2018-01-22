import React from 'react';
import {
  FormGroup,
  HelpBlock,
  InputGroup } from 'react-bootstrap';

import Toggle from 'react-toggle';

import Label from 'Label';
import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toggle/style.css';

const ToggleField = ({
  label,
  required,
  helpText,
  customValidation,
  input: { name, value, onChange, ...inputProps },
  meta,
  ...props
}) => {
  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <Label label={label} required={required} />
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
