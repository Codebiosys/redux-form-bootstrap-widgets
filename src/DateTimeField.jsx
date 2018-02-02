import React from 'react';
import { omit } from 'lodash';
import {
  FormGroup,
  FormControl,
  InputGroup,
  HelpBlock,
  Glyphicon } from 'react-bootstrap';
import DateTime from 'react-datetime';

import Label from 'Label';
import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css';

const DateTimeField = ({
  label,
  required,
  helpText,
  customValidation,
  disabled,
  input: { name, value, ...inputProps },
  meta: { form, ...metaProps },
  ...props
}) => {
  const { validationState, errorMessage } = customValidation ?
  customValidation(metaProps) :
  validationMessage(metaProps);

  const clearContent = () => {
    if (!disabled) {
      inputProps.onChange(null);
    }
  };

  const ClearButton = (
    <span>
      <FormControl.Feedback onClick={clearContent} style={{ pointerEvents: 'all' }}>
        <Glyphicon glyph="remove" />
      </FormControl.Feedback>
    </span>
  );
  const CalendarFeedback = (
    <FormControl.Feedback style={{ pointerEvents: 'none' }}>
      <Glyphicon glyph="calendar" />
    </FormControl.Feedback>
  );
  const renderInput = (renderinputprops, openCalendar) => {
    // console.log(openCalendar);
    const onChange = (event) => {
      renderinputprops.onChange(event);
    };

    return (
      <InputGroup>
        <FormControl
          {...renderinputprops}
          autoComplete="off"
          disabled={disabled}
          onChange={onChange}
          value={value}
        />
        { (!value) ? CalendarFeedback : ClearButton }

      </InputGroup>);
  }
//    return (<input {...renderinputprops} onFocus={() => {}} />);
  ;
  return (
    <FormGroup
      controlId={name}
      validationState={validationState}
    >
      <Label label={label} required={required} />
      {/* <FormControl
          {...inputProps}
          disabled={disabled}
          {...props}
        /> */}
      <DateTime
        name={name}
        id={`${form}-${name}`}
        closeOnSelect
        renderInput={renderInput}
          // onChange={inputProps.onChange}
          // onFocus={inputProps.onFocus}
        {...inputProps}
        {...props}
        value={value}
      />
      {errorMessage}
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

DateTimeField.propTypes = {
  ...omit(DateTime.propTypes, 'input'),
};
export default DateTimeField;
