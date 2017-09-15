import React from 'react';
import { Checkbox,
  FormGroup,
  ControlLabel,
  HelpBlock,
  InputGroup } from 'react-bootstrap';
import _ from 'lodash';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';

const CheckBoxField = ({
  label,
  helpText,
  meta,
  input: { name, value, onFocus, onChange, onBlur },
  options,
  ...props
}) => {
  const { validationState, errorMessage } = validationMessage(meta);

  const checkboxes = options.map(({ label: checkLabel, value: checkValue }, index) => {
    const handleChange = (event) => {
      let arr = [...value];
      if (event.target.checked) {
        arr = _.union(value, [checkValue]);
      } else {
        arr = _.filter(arr, val => val !== checkValue);
      }
      arr = arr.length ? arr : null;
      onBlur();
      return onChange(arr);
    };

    return (
      <Checkbox
        key={`${name}[${index}]`} // eslint-disable-line
        name={`${name}[${index}]`}
        value={checkValue}
        checked={_.find(value, checkValue)}
        onChange={handleChange}
        onFocus={onFocus}
        {...props}
      >
        {checkLabel}
      </Checkbox>
    );
  });

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <InputGroup>
        {checkboxes}
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

CheckBoxField.propTypes = {
  ...Checkbox.propTypes,
};
export default CheckBoxField;
