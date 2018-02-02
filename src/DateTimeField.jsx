import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const propTypes = {
  /** Field label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** The helptext to display below the field */
  helpText: PropTypes.string,
  /** The date format to use: Supports moment */
  dateFormat: PropTypes.string,
  /** The custom validation function */
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

const defaultProps = {
  required: false,
  disabled: false,
  dateFormat: undefined,
  helpText: undefined,
  customValidation: undefined,
};

class DateTimeField extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    this.state = {
      validationState: undefined,
      errorMessage: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { customValidation, meta } = nextProps;
    if (customValidation) {
      this.setState(customValidation(meta));
    } else {
      this.setState(validationMessage(meta));
    }
  }

  clearContent = () => {
    const { disabled, input: { onChange } } = this.props;
    if (!disabled) {
      onChange(null);
    }
  };

  controlFeedback = () => {
    const { input: { value } } = this.props;
    if (value) {
      return (
        <FormControl.Feedback
          onClick={this.clearContent}
          style={{ pointerEvents: 'all' }}
        >
          <Glyphicon glyph="remove" />
        </FormControl.Feedback>);
    }
    return (
      <FormControl.Feedback style={{ pointerEvents: 'none' }}>
        <Glyphicon glyph="calendar" />
      </FormControl.Feedback>
    );
  }

  renderInput = ({ onChange, value: dtValue, ...inputProps }) => {
    const { dateFormat, input: { value }, disabled } = this.props;
    return (
      <InputGroup>
        <FormControl
          {...inputProps}
          autoComplete="off"
          disabled={disabled}
          onChange={onChange}
          value={dateFormat ? dtValue : value}
        />
        {this.controlFeedback()}
      </InputGroup>);
  };

  render() {
    const {
        label,
        required,
        helpText,
        disabled,
        input: { name, value, ...inputProps },
        meta: { form },
        ...props
      } = this.props;
    return (
      <FormGroup
        controlId={name}
        validationState={this.state.validationState}
      >
        <Label label={label} required={required} />
        <DateTime
          name={name}
          id={`${form}-${name}`}
          closeOnSelect
          renderInput={this.renderInput}
          {...inputProps}
          {...props}
          value={value}
        />
        <HelpBlock style={{ minHeight: helpText ? '6ex' : '3ex' }}>
          {this.state.errorMessage}
          {(this.state.errorMessage && helpText) ? <br /> : ''}
          {helpText}</HelpBlock>
      </FormGroup>
    );
  }
}

export default DateTimeField;
