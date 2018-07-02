import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  FormControl,
  HelpBlock,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import { debounce, trim } from 'lodash';

import Label from 'Label';

import validationMessage from 'utils';

import 'bootstrap/dist/css/bootstrap.css';

const propTypes = {
  /** additional Props that can be passed to Form Control */
  ...FormControl.propTypes,
  /** Form label. */
  label: PropTypes.string.isRequired,
  /** Flag to display required Astrisk. */
  required: PropTypes.bool,
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Additional text that displays below the widget. */
  delay: PropTypes.number,
  /** Additional text that displays below the widget. */
  helpText: PropTypes.string,
  /** HTML input type. */
  type: PropTypes.oneOf(['text', 'password', 'number', 'textarea']),
  /** Override the default validation checks. Takes ReduxForm 'meta' as input */
  validator: PropTypes.func,
  /** normalize field after blur * */
  normalizeOnBlur: PropTypes.func,
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
  helpTextStyle: PropTypes.object,
};

const defaultProps = {
  required: false,
  helpText: null,
  validator: validationMessage,
  addOnBefore: null,
  addOnAfter: null,
  disabled: false,
  type: 'text',
  delay: undefined,
  normalizeOnBlur: value => (trim(value)),
  helpTextStyle: undefined,
};

class TextField extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    const { input: { value }, validator, meta } = props;
    this.state = { value: value || '', lastPropValue: value || '', ...validator(meta) };

    this.onChange = this.onChange.bind(this);

    this.debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, this.props.delay, {
      leading: false,
      trailing: true,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { input: { value }, validator, meta } = nextProps;
    const localValue = value !== this.state.lastPropValue ?
        value :
        this.state.value;
    this.setState({
      ...this.state,
      value: localValue,
      lastPropValue: value,
      ...validator(meta) });
  }

  onChange = (event) => {
    // Required function for debounce binding.
    const { input: { onChange } } = this.props;
    onChange(event);
  }

  getValue() {
    const { delay, input: { value } } = this.props;
    if (!delay) {
      return value;
    }
    return this.state.value;
  }

  handleChange = (event) => {
    const { delay } = this.props;
    event.persist();
    this.setState({ ...this.state, value: event.target.value });
    if (delay) {
      this.debouncedOnChange.cancel();
      this.debouncedOnChange(event);
    } else {
      this.onChange(event);
    }
  }

  handleBlur = (event) => {
    const { normalizeOnBlur, input: { onBlur } } = this.props;
    onBlur(normalizeOnBlur(event.target.value));
  }

  clearContent = () => {
    const { disabled } = this.props;
    if (!disabled) {
      this.setState({ ...this.state, lastPropValue: '', value: '' });
      this.onChange(null);
    }
  }

  helpTextStyle = () => {
    const { helpText, helpTextStyle } = this.props;
    if (!helpTextStyle) {
      return { minHeight: helpText ? '6ex' : '3ex' };
    }
    return helpTextStyle;
  }

  renderClearButton = () => {
    const { type } = this.props;
    if (type === 'textarea') {
      return undefined;
    } else if (!this.getValue()) {
      return (
        <FormControl.Feedback />
      );
    }
    return (
      <FormControl.Feedback
        onClick={this.clearContent}
        style={{ pointerEvents: 'all' }}
      >
        <Glyphicon glyph="remove" />
      </FormControl.Feedback>
    );
  };

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
      validator,
      normalizeOnBlur,
      delay,
      disabled,
      input: { name, onChange, onBlur, ...inputProps },
      meta,
      addOnBefore,
      addOnAfter,
      type,
      ...rest
    } = this.props;

    const typeConfig = {};
    const inputStyle = { zIndex: '0' };
    const groupStyle = {};

    if (type === 'textarea') {
      typeConfig.componentClass = 'textarea';
      groupStyle.width = '100%';
    } else {
      typeConfig.type = type;
    }
    return (
      <FormGroup
        controlId={name}
        validationState={this.state.validationState}
      >
        <Label label={label} required={required} />
        <InputGroup style={groupStyle}>
          {typeConfig.componentClass === 'textarea' ? '' : addOnBefore }
          <FormControl
            name={name}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            style={inputStyle}
            {...typeConfig}
            {...inputProps}
            {...rest}
            disabled={disabled}
            value={this.getValue()}

          />
          {typeConfig.componentClass === 'textarea' ? '' : addOnAfter }
          {this.renderClearButton()}
        </InputGroup>
        {this.renderHelpMessage()}
      </FormGroup>
    );
  }
}
export default TextField;
