import React, { Component } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import {
  FormGroup,
  HelpBlock,
  InputGroup,
  Radio } from 'react-bootstrap';

import Label from 'Label';
import validationMessage from 'utils';

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
  inline: false,
  labelKey: 'label',
  valueKey: 'value',
  validator: validationMessage,
  helpText: null,
  helpTextStyle: undefined,
};

class RadioField extends Component {
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

  handleChange = (event, targetValue) => {
    const { input: { onChange, onBlur, value } } = this.props;
    const changeValue = targetValue === value ? null : targetValue;
    onChange(changeValue);
    onBlur(changeValue);
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

  renderOption = (option) => {
    const {
      label,
      required,
      helpText,
      helpTextStyle,
      valueKey,
      labelKey,
      options,
      inline,
      disabled,
      validator,
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
      onChange={event => this.handleChange(event, option[valueKey])}
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
          {map(options, option => (
            this.renderOption(option)
          ))}
        </InputGroup>
        {this.renderHelpMessage()}
      </FormGroup>
    );
  }
}

export default RadioField;
