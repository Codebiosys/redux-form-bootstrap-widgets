import React from 'react';
import {
  FormGroup,
  FormControl,
  HelpBlock,
  InputGroup,
  Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Label from 'Label';

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
  type,
  componentClass,
  ...props
}) => {
  const { name, onChange } = input;
  const { validationState, errorMessage } = customValidation ?
  customValidation(meta) :
  validationMessage(meta);

  const typeConfig = {};
  const inputStyle = { zIndex: '0' };
  const groupStyle = {};

  if (type === 'textarea' || componentClass === 'textarea') {
    typeConfig.componentClass = 'textarea';
    groupStyle.width = '100%';
  } else if (type) {
    typeConfig.type = type;
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
        {typeConfig.componentClass ? '' : addOnBefore }
        <FormControl
          style={inputStyle}
          {...typeConfig}
          {...input}
          {...props}
        />
        {typeConfig.componentClass ? '' : addOnAfter }
        {typeConfig.componentClass || (!input.value) ? '' : ClearButton }
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
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

  /** Additional text that displays below the widget. */
  helpText: PropTypes.string,

  /** Override the default validation checks. Takes ReduxForm 'meta' as input */
  customValidation: PropTypes.func,

  /** Redux Form Input property. Set when used in a redux 'Field' */
  input: PropTypes.object.isRequired,

  /** Redux Form meta property. Set when used in a redux 'Field' */

  meta: PropTypes.object.isRequired,
  /** React Boostrap Field addOn, placed before the input */
  addOnBefore: PropTypes.element,

  /** React Boostrap Field addOn, placed after the input */
  addOnAfter: PropTypes.element,

  type: PropTypes.string,
  componentClass: PropTypes.string,
};

TextField.defaultProps = {
  required: false,
  helpText: null,
  customValidation: null,
  addOnBefore: null,
  addOnAfter: null,
};

export default TextField;
