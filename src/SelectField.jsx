import React from 'react';
import PropTypes from 'prop-types';

import { castArray, map, get, head, isFunction } from 'lodash';

import { FormGroup, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';

import Label from 'Label';
import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';
import './selectFieldStyle.css';

const SelectField = ({
  label,
  required,
  helpText,
  multiple,
  labelKey,
  valueKey,
  customValidation,
  input: { name, onChange, onFocus, onBlur, value, ...inputProps },
  meta,
  options,
  ...props
}) => {
  const handleChange = (selected) => {
    const selectedList = castArray(selected);
    const selectedVals = map(selectedList, opt => get(opt, valueKey));
    let changed;
    if (!multiple) {
      changed = get(head(selectedList), valueKey, null);
    } else {
      changed = selectedVals.length ? selectedVals : null;
    }
    onChange(changed);
  };


  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  const isAsync = isFunction(options);

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <Label label={label} required={required} />
      {!isAsync ? (<Select
        name={name}
        value={value}
        labelKey={labelKey}
        valueKey={valueKey}
        autoBlur
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={() => onBlur()}
        inputProps={inputProps}
        multi={!!multiple}
        joinValues
        options={options}
        {...props}
      />) : (<Select.Async
        name={name}
        value={value}
        labelKey={labelKey}
        valueKey={valueKey}
        autoBlur
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={() => onBlur()}
        inputProps={inputProps}
        multi={!!multiple}
        joinValues
        loadOptions={options}
        {...props}
      />)
    }
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};


SelectField.propTypes = {
  /** Form label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Allow multi select or single select */
  multiple: PropTypes.bool,
  /** Additional text that displays below the widget. */
  helpText: PropTypes.string,
  /** Custom validation function */
  customValidation: PropTypes.func,
  /** Either an array of objects that have a shape that includes
      the labelKey and valueKey, or a promise that resolves
      such an array */
  options: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.object)],
  ).isRequired,
  /** The key that is used as the select label */
  labelKey: PropTypes.string,
  /** The key that is used as the select value */
  valueKey: PropTypes.string,
  /**
  * @ignore
  * Redux Form internal input property. Set when used in a redux 'Field'
  */
  input: PropTypes.object.isRequired,

  /**
  * @ignore
  * Redux Form internal meta property. Set when used in a redux 'Field'
  */
  meta: PropTypes.object.isRequired,
};

SelectField.defaultProps = {
  required: false,
  disabled: false,
  helpText: null,
  multiple: false,
  customValidation: undefined,
  labelKey: 'label',
  valueKey: 'value',
};

export default SelectField;
