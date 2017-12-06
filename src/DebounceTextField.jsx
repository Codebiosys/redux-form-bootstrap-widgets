import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  HelpBlock,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import { debounce } from 'lodash';

import Label from 'Label';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';


class DebounceTextField extends Component {


  constructor(props) {
    super(props);
    const { delay, input: { onChange, value } } = props;

    this.state = { value: value || '' };
    this.lastPropValue = value || '';

    this.debouncedOnChange = debounce((event) => {
      onChange(event.target.value);
    }, delay || 100);

    this.handleChange = (event) => {
      event.persist();
      this.setState({ value: event.target.value });
      this.debouncedOnChange(event);
    };
  }

  getValue() {
    const { input: { value } } = this.props;
    const componentValue = value !== this.lastPropValue ?
      value :
      this.state.value;
    this.lastPropValue = componentValue;
    return componentValue;
  }


  render() {
    const {
      label,
      required,
      helpText,
      customValidation,
      delay,
      input: { name, onChange, ...inputProps },
      meta,
      addOnBefore,
      addOnAfter,
      type,
      componentClass,
      ...rest
    } = this.props;

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

    const clearContent = () => {
      this.setState({ value: '' });
      onChange(null);
    };

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
            name={name}
            onChange={this.handleChange}
            style={inputStyle}
            {...typeConfig}
            {...inputProps}
            {...rest}
            value={this.getValue()}
          />
          { addOnAfter }
          {(!this.getValue()) ? '' : ClearButton }
        </InputGroup>
        {errorMessage}
        <HelpBlock>{helpText}</HelpBlock>
      </FormGroup>
    );
  }
}

DebounceTextField.propTypes = {
  ...FormControl.propTypes,
};

export default DebounceTextField;
