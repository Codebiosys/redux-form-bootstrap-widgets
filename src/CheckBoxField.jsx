import React from 'react';
import { Checkbox,
  FormGroup,
  HelpBlock,
  InputGroup } from 'react-bootstrap';

import { union, filter, toArray, find } from 'lodash';

import Label from 'Label';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';

const CheckBoxField = ({
  label,
  required,
  helpText,
  meta,
  valueKey,
  labelKey,
  customValidation,
  input: { name, value, onFocus, onChange, onBlur },
  options,
  ...props
}) => {
  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  const checkValueKey = valueKey || 'value';
  const checkLabelKey = labelKey || 'label';

  const checkboxes = options.map(
    ({ [checkLabelKey]: checkLabel, [checkValueKey]: checkValue }, index) => {
      const handleChange = (event) => {
        let arr = toArray(value);
        if (event.target.checked) {
          arr = union(value, [checkValue]);
        } else {
          arr = filter(arr, val => val !== checkValue);
        }
        arr = arr.length ? arr : null;
        onBlur();
        return onChange(arr);
      };

      return (
        <Checkbox
        key={`${name}_${index}`} // eslint-disable-line
          name={`${name}_${index}`}
          value={checkValue}
          checked={find(value, checkValue)}
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
      <Label label={label} required={required} />
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
