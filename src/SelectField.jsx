import React from 'react';
import _ from 'lodash';

import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';
import 'selectFieldStyle.css';

const SelectField = ({
  label,
  helpText,
  multiple,
  valueKey,
  input: { name, onChange, onFocus, onBlur, value, ...inputProps },
  meta,
  ...props
}) => {
  const handleChange = (selected) => {
    const selectedList = _.castArray(selected);
    const selectedVals = _.map(selectedList, opt => _.get(opt, valueKey));
    let changed;
    if (!multiple) {
      changed = _.get(_.head(selectedList), valueKey, null);
    } else {
      if (_.difference(value, selectedVals).length) {
        changed = _.intersection(value, selectedVals);
      } else {
        changed = _.union(value, selectedVals);
      }
      changed = changed.length ? changed : null;
    }
    onChange(changed);
  };


  const { validationState, errorMessage } = validationMessage(meta);

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <Select
        name={name}
        value={value}
        valueKey={valueKey}
        autoBlur
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={() => onBlur()}
        inputProps={inputProps}
        multi={!!multiple}
        joinValues={!!multiple}
        {...props}
      />
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};


SelectField.propTypes = {
  ...Select.propTypes,
};
export default SelectField;
