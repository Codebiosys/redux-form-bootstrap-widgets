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
  type,
  ...props
}) => {
  const { name } = input;
  const { validationState, errorMessage } = validationMessage(meta);

  const typeConfig = {};
  const inputStyle = { zIndex: '0' };
  const groupStyle = {};

  if (type && type !== 'textarea') {
    typeConfig.type = type;
  } else if (type && type === 'textarea') {
    typeConfig.componentClass = 'textarea';
    groupStyle.width = '100%';
  }

  const ClearButton = (
    <InputGroup.Button>
      <Button
        style={{ zIndex: '0' }}
        onClick={() => input.onChange(null)}
        disabled={!input.value}
      ><Glyphicon glyph="remove" /></Button>
    </InputGroup.Button>
  );

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <InputGroup style={groupStyle}>
        {addOnBefore}
        <FormControl
          style={inputStyle}
          {...typeConfig}
          {...input}
          {...props}
        />
        {addOnAfter}
        {typeConfig.componentClass ? '' : ClearButton }
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
