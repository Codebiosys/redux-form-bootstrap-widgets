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
  customValidation,
  input,
  meta,
  addOnBefore,
  addOnAfter,
  type,
  componentClass,
  ...props
}) => {
  const { name, onChange } = input;
  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  const typeConfig = {};
  const inputStyle = { zIndex: '0' };
  const groupStyle = {};

  if (type === 'textarea' || componentClass === 'textarea') {
    typeConfig.componentClass = 'textarea';
    groupStyle.width = '100%';
  } else if (type) {
    typeConfig.type = type;
  }

  const clearContent = () => onChange(null);

  const ClearButton = (
    <InputGroup.Button>
      <Button
        style={{ zIndex: '0' }}
        onClick={clearContent}
        disabled={!input.value}
      ><Glyphicon glyph="remove" /></Button>
    </InputGroup.Button>
  );

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      {label ? <ControlLabel>{label}</ControlLabel> : ''}
      <InputGroup style={groupStyle}>
        {typeConfig.componentClass ? '' : addOnBefore }
        <FormControl
          style={inputStyle}
          {...typeConfig}
          {...input}
          {...props}
        />
        {typeConfig.componentClass ? '' : addOnAfter }
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
