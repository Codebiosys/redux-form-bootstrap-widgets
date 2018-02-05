import React, { Component } from 'react';
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

const propTypes = {
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

const defaultProps = {
  required: false,
  disabled: false,
  inline: false,
  labelKey: 'label',
  valueKey: 'value',
  customValidation: null,
  helpText: null,
};

class RadioField extends Component {
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

  handleClick = (event) => {
    const { input: { onChange, onBlur, value } } = this.props;
    const changeValue = event.target.value === value ? null : event.target.value;
    onChange(changeValue);
    onBlur(changeValue);
  }

  renderHelpMessage = () => {
    const { helpText } = this.props;
    const errorMessage = this.state.errorMessage;
    return (<HelpBlock style={{ minHeight: helpText ? '6ex' : '3ex' }}>
      {errorMessage}
      {(errorMessage && helpText) ? <br /> : ''}
      {helpText}
    </HelpBlock>);
  }

  renderOption = (option) => {
    const {
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
    } = this.props;
    return (<Radio
      key={`${name}_${option[valueKey]}`}
      name={name}
      {...inputProps}
      checked={`${option[valueKey]}` === `${value}`}
      value={option[valueKey]}
      onBlur={() => onBlur()}
      onChange={this.handleClick}
      inline={inline}
      disabled={disabled}
      {...props}
    >
      {option[labelKey]}
    </Radio>);
  }

  render() {
    const {
      label,
      required,
      options,
      input: { name },
    } = this.props;
    return (
      <FormGroup
        controlId={name}
        validationState={this.state.validationState}
      >
        <Label label={label} required={required} />
        <InputGroup>
          {_.map(options, option => (
            this.renderOption(option)

          ))}
        </InputGroup>
        {this.renderHelpMessage()}
      </FormGroup>
    );
  }
}

export default RadioField;
