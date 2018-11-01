import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  HelpBlock,
  InputGroup } from 'react-bootstrap';

import Toggle from 'react-toggle';

import 'react-toggle/style.css';

import Label from './Label';
import validationMessage from './validationMessage';

const propTypes = {
  /** Form label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Additional text that displays below the widget. */
  helpText: PropTypes.string,
  /** HTML input type. */
  validator: PropTypes.func,
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

  helpTextStyle: PropTypes.object,
};

const defaultProps = {
  required: false,
  disabled: false,
  helpText: null,
  validator: validationMessage,
  helpTextStyle: undefined,
};

class ToggleField extends Component {
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

  handleChange = (event) => {
    const { input: { onChange } } = this.props;
    onChange(!!event.target.checked);
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

  render() {
    const {
    label,
    required,
    helpText,
    helpTextStyle,
    disabled,
    validator,
    input: { name, value, onChange, ...inputProps },
    meta,
    ...props
  } = this.props;

    return (
      <FormGroup
        controlId={name}
        validationState={this.state.validationState}
      >
        <Label label={label} required={required} />
        <InputGroup>
          <Toggle
            {...inputProps}
            name={name}
            checked={!!value}
            onChange={this.handleChange}
            disabled={disabled}
            {...props}
          />
        </InputGroup>
        {this.renderHelpMessage()}
      </FormGroup>

    );
  }
}

export default ToggleField;
