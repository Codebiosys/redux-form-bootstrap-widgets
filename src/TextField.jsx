import React from 'react';
import {
  FormGroup,
  FormControl,
  HelpBlock,
  InputGroup,
  Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Label from 'Label';
import { Field } from 'redux-form';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';

/** TextField component description */
const TextField = ({
  label,
  required,
  helpText,
  customValidation,
  input,
  meta,
  addOnBefore,
  addOnAfter,
  disabled,
  type,
  ...props
}) => {
  const { name, onChange } = input;
  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  const typeConfig = {
    componentClass: 'input',
    type,
  };
  const inputStyle = { zIndex: '0' };
  const groupStyle = {};

  if (type === 'textarea') {
    typeConfig.componentClass = 'textarea';
    groupStyle.width = '100%';
  }
  const clearContent = () => onChange(null);

  const ClearButton = (
    <FormControl.Feedback onClick={clearContent} style={{ pointerEvents: 'all' }}>
      <Glyphicon glyph="remove" />
    </FormControl.Feedback>
  );
  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <Label label={label} required={required} />
      <InputGroup style={groupStyle}>
        {typeConfig.componentClass === 'textarea' ? '' : addOnBefore }
        <FormControl
          style={inputStyle}
          {...typeConfig}
          {...input}
          disabled={disabled}
          {...props}
        />
        {typeConfig.componentClass === 'textarea' ? '' : addOnAfter }
        {typeConfig.componentClass === 'textarea' || (!input.value) || (disabled) ? '' : ClearButton }
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
      {errorMessage ? '' : (<HelpBlock>&nbsp;</HelpBlock>)}
    </FormGroup>
  );
};

TextField.propTypes = {
  /** additional Props that can be passed to Form Control */
  ...FormControl.propTypes,
  /** Form label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Additional text that displays below the widget. */
  helpText: PropTypes.string,
  /** HTML input type. */
  type: PropTypes.oneOf(['text', 'password', 'number', 'textarea']),


  /** Override the default validation checks. Takes ReduxForm 'meta' as input */
  customValidation: PropTypes.func,


  /** React Boostrap Field addOn, placed before the input */
  addOnBefore: PropTypes.element,

  /** React Boostrap Field addOn, placed after the input */
  addOnAfter: PropTypes.element,

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

TextField.defaultProps = {
  required: false,
  helpText: null,
  customValidation: null,
  addOnBefore: null,
  addOnAfter: null,
  disabled: false,
  type: 'text',
};

export default TextField;
