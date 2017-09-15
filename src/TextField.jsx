import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  InputGroup,
  Button,
  Glyphicon } from 'react-bootstrap';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';

const TextField = ({
  label,
  helpText,
  input,
  meta,
  addOnBefore,
  addOnAfter,
  ...props
}) => {
  const { name } = input;
  const { validationState, errorMessage } = validationMessage(meta);
  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <InputGroup>
        {addOnBefore}
        <FormControl
          style={{ zIndex: '0' }}
          {...input}
          {...props}
        />
        {addOnAfter}
        <InputGroup.Button>
          <Button
            style={{ zIndex: '0' }}
            onClick={() => input.onChange(null)}
            disabled={!input.value}
          ><Glyphicon glyph="remove" /></Button>
        </InputGroup.Button>
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

TextField.propTypes = {
  ...FormControl.propTypes,
};

export default TextField;
