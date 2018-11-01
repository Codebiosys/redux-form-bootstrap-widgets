import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  FormControl,
  InputGroup,
  HelpBlock,
  Glyphicon } from 'react-bootstrap';
import DateTime from 'react-datetime';
import moment from 'moment';

import 'react-datetime/css/react-datetime.css';

import Label from './Label';
import validationMessage from './validationMessage';

const propTypes = {
  /** Field label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** The helptext to display below the field */
  helpText: PropTypes.string,
  // /** The date format to use: Supports moment */
  dateFormat: PropTypes.string,
  /** The custom validation function */
  validator: PropTypes.func,
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

  helpTextStyle: PropTypes.object,
};

const defaultProps = {
  required: false,
  disabled: false,
  dateFormat: undefined,
  helpText: undefined,
  validator: validationMessage,
  helpTextStyle: undefined,
};

class DateTimeField extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    const { validator, meta } = props;
    this.state = validator(meta);
  }

  componentWillReceiveProps(nextProps) {
    const { validator, meta } = nextProps;
    this.setState({ ...this.state, ...validator(meta) });
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

  helpTextStyle = () => {
    const { helpText, helpTextStyle } = this.props;
    if (!helpTextStyle) {
      return { minHeight: helpText ? '6ex' : '3ex' };
    }
    return helpTextStyle;
  }

  renderHelpMessage = () => {
    const { helpText } = this.props;
    const errorMessage = this.state.errorMessage;
    return (<HelpBlock style={this.helpTextStyle()}>
      {errorMessage}
      {(errorMessage && helpText) ? <br /> : ''}
      {helpText}
    </HelpBlock>);
  }

  renderInput = ({ ...inputProps }) => {
    const { dateFormat, input: { value, onFocus }, disabled } = this.props;
    return (
      <InputGroup>
        <FormControl
          {...inputProps}
          autoComplete="off"
          disabled={disabled}
          // Pass in the redux onFocus instead of the DateTime onFocus so that
          // Focus is not called multiple times, which causes the date picker
          // to not open in some circumstances
          onFocus={onFocus}
          value={
            dateFormat && moment.isMoment(value) ?
             value.format(dateFormat) :
             value
           }
        />
        {this.controlFeedback()}
      </InputGroup>);
  };

  render() {
    const {
        label,
        required,
        helpText,
        helpTextStyle,
        disabled,
        input: { name, value, onFocus, onBlur, ...inputProps },
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
          // Ignore event value on blur, because this overrides
          // Redux format handlers.
          onBlur={() => { onBlur(); }}
          {...props}
        />
        {this.renderHelpMessage()}
      </FormGroup>
    );
  }
}

export default DateTimeField;
