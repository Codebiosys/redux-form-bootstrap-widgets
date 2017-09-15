import React from 'react';
import _ from 'lodash';
import { FormGroup,
  ControlLabel,
  InputGroup,
  HelpBlock,
  Button,
  Glyphicon } from 'react-bootstrap';
import DateTime from 'react-datetime';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css';

const DateTimeField = ({
  label,
  helpText,
  input: { name, onFocus, ...inputProps },
  meta: { form, ...metaProps },
  ...props
}) => {
  const { validationState, errorMessage } = validationMessage(metaProps);

  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <InputGroup>
        <DateTime
          name={name}
          id={`${form}-${name}`}
          closeOnSelect
          {...inputProps}
          {...props}
        />
        <InputGroup.Button>
          <Button
            style={{ zIndex: '0' }}
            onClick={() => inputProps.onChange(null)}
            disabled={!inputProps.value}
          ><Glyphicon glyph="remove" /></Button>
        </InputGroup.Button>
      </InputGroup>
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

DateTimeField.propTypes = {
  ..._.omit(DateTime.propTypes, 'input'),
};
export default DateTimeField;
