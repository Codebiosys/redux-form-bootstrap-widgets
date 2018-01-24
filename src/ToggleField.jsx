import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  HelpBlock,
  InputGroup } from 'react-bootstrap';

import Toggle from 'react-toggle';

import Label from 'Label';
import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toggle/style.css';

const ToggleField = ({
  label,
  required,
  helpText,
  disabled,
  customValidation,
  input: { name, value, onChange, ...inputProps },
  meta,
  ...props
}) => {
  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <Label label={label} required={required} />
      <InputGroup>
        <Toggle
          {...inputProps}
          name={name}
          checked={!!value}
          onChange={(event) => {
            onChange(!!event.target.checked);
          }}
          disabled={disabled}
          {...props}
        />
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>

  );
};

ToggleField.propTypes = {
  /** additional Props that can be passed to the Toggle Field */
  ...ToggleField.propTypes,
  /** Form label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Additional text that displays below the widget. */
  helpText: PropTypes.string,
  /** HTML input type. */
  customValidation: PropTypes.func,
  /** React Boostrap Field addOn, placed before the input */
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

ToggleField.defaultProps = {
  required: false,
  disabled: false,
  helpText: null,
  customValidation: undefined,
};
export default ToggleField;
