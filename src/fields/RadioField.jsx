import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, Radio } from 'react-bootstrap';
import _ from 'lodash';

const RadioField = ({
  label,
  options,
  helpText,
  inline,
  input: { name, onBlur, ...inputProps },
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
  const handleClick = (event) => {
    if (event.target.value === inputProps.value) {
      inputProps.onChange(null);
    }
  };

  const handleBlur = (event) => {
    if (inputProps.value) {
      onBlur(event);
    }
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
              inline={inline}
              checked={`${option.value}` === `${inputProps.value}`}
              value={option.value}
              onBlur={handleBlur}
              onClick={handleClick}
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

export default RadioField;
