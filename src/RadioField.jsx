import React from 'react';
import _ from 'lodash';

import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  InputGroup,
  Radio } from 'react-bootstrap';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';

const RadioField = ({
  label,
  options,
  helpText,
  input: { name, onBlur, value, ...inputProps },
  meta,
  ...props
}) => {
  const { validationState, errorMessage } = validationMessage(meta);

  const handleClick = (event) => {
    if (event.target.value === value) {
      inputProps.onChange(null);
    }
    onBlur();
  };

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <InputGroup>
        {_.map(options, option => (
          <div key={`${name}--${option.value}`}>
            <Radio
              name={name}
              {...inputProps}
              checked={`${option.value}` === `${value}`}
              value={option.value}
              onBlur={() => onBlur()}
              onClick={handleClick}
              {...props}
            >
              {option.label}
            </Radio>
            {option.description}
          </div>
        ))}
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

RadioField.propTypes = {
  ...Radio.propTypes,
};
export default RadioField;
