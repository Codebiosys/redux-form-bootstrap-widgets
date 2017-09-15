import React from 'react';
import { Checkbox, FormGroup, ControlLabel, HelpBlock, InputGroup } from 'react-bootstrap';
import _ from 'lodash';


const CheckBoxField = ({
  label,
  helpText,
  input,
  options,
  inline,
  type,
  meta: { touched, error, warning },
  ...props
}) => {
  const { name } = input;
  const inputValue = input.value;
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

  const checkboxes = options.map(({ label: checkLabel, value: checkValue }, index) => {
    const handleChange = (event) => {
      let arr = [...inputValue];
      if (event.target.checked) {
        arr = _.union(inputValue, [`${checkValue}`]);
      } else {
        arr = _.filter(arr, val => `${val}` !== `${checkValue}`);
      }
      input.onBlur(arr);
      return input.onChange(arr);
    };
    const checked = inputValue.includes(`${checkValue}`);
    return (
      <Checkbox inline={inline} key={`${name}[${index}]`} name={`${name}[${index}]`} value={`${checkValue}`} checked={checked} onChange={handleChange} onFocus={input.onFocus}>
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

export default CheckBoxField;
