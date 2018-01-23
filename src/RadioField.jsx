import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
  FormGroup,
  HelpBlock,
  InputGroup,
  Radio } from 'react-bootstrap';

import Label from 'Label';
import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';

const RadioField = ({
  label,
  required,
  helpText,
  valueKey,
  labelKey,
  options,
  inline,
  disabled,
  customValidation,
  input: { name, onBlur, onChange, value, ...inputProps },
  meta,
  ...props
}) => {
  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  const handleClick = (event) => {
    const changeValue = event.target.value === value ? null : event.target.value;
    onChange(changeValue);
    onBlur(changeValue);
  };

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <Label label={label} required={required} />
      <InputGroup>
        {_.map(options, option => (
          <Radio
            key={`${name}_${option[valueKey]}`}
            name={name}
            {...inputProps}
            checked={`${option[valueKey]}` === `${value}`}
            value={option[valueKey]}
            onBlur={() => onBlur()}
            onChange={handleClick}
            inline={inline}
            disabled={disabled}
            {...props}
          >
            {option[labelKey]}
          </Radio>
        ))}
      </InputGroup>
      <HelpBlock style={{ minHeight: helpText ? '6ex' : '3ex' }}>
        {errorMessage}
        {(errorMessage && helpText) ? <br /> : ''}
        {helpText}</HelpBlock>
    </FormGroup>
  );
};

RadioField.propTypes = {
  /** Field label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Whether or not the fields are inline */
  inline: PropTypes.bool,
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

RadioField.defaultProps = {
  required: false,
  disabled: false,
  inline: false,
  labelKey: 'label',
  valueKey: 'value',
  customValidation: null,
  helpText: null,
};
export default RadioField;
