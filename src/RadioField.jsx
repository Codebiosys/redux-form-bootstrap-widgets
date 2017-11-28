import React from 'react';
import _ from 'lodash';

import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  InputGroup,
  Radio } from 'react-bootstrap';

import Label from 'Label';
import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';

const RadioField = ({
  label,
  required,
  options,
  helpText,
  customValidation,
  input: { name, onBlur, value, ...inputProps },
  meta,
  valueKey,
  labelKey,
  ...props
}) => {
  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  const radioValueKey = valueKey || 'value';
  const radioLabelKey = labelKey || 'label';
  const handleClick = (event) => {
    const changeValue = event.target.value === value ? null : event.target.value;
    inputProps.onChange(changeValue);
    onBlur();
  };

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <Label label={label} required={required} />
      <InputGroup>
        {_.map(options, option => (
          <div key={`${name}_${option[radioValueKey]}`}>
            <Radio
              name={name}
              {...inputProps}
              checked={`${option[radioValueKey]}` === `${value}`}
              value={option[radioValueKey]}
              onBlur={() => onBlur()}
              onClick={handleClick}
              {...props}
            >
              {option[radioLabelKey]}
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
