import React from 'react';
import PropTypes from 'prop-types';

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
  disabled,
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
          disabled={disabled}
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
      <HelpBlock style={{ minHeight: helpText ? '6ex' : '3ex' }}>
        {errorMessage}
        {(errorMessage && helpText) ? <br /> : ''}
        {helpText}
      </HelpBlock>
    </FormGroup>
  );
};

CheckBoxField.propTypes = {
  /** Field label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Additional text that displays below the widget. */
  helpText: PropTypes.string,
  /** The key in the option list for the display label */
  labelKey: PropTypes.string,
  /** The key in the option list for the selection value */
  valueKey: PropTypes.string,
  /** The list of options to display. Each option must have a labelKey and valueKey */
  options: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  customValidation: PropTypes.func,
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


CheckBoxField.defaultProps = {
  required: false,
  helpText: null,
  disabled: false,
  customValidation: null,
  labelKey: 'label',
  valueKey: 'value',
};
export default CheckBoxField;
