import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  // delay: PropTypes.int,
  /** Additional text that displays below the widget. */
  helpText: PropTypes.string,
  /** HTML input type. */
  type: PropTypes.oneOf(['text', 'password', 'number', 'textarea']),
  /** Override the default validation checks. Takes ReduxForm 'meta' as input */
  validator: PropTypes.func,
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
};

class TextField extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    const { input: { value }, validator, meta } = props;

    this.state = { value: value || '', ...validator(meta) };
    this.lastPropValue = value || '';
  }

  componentWillReceiveProps(nextProps) {
    const { input: { value }, validator, meta } = nextProps;
    this.setState({ ...this.state, value, ...validator(meta) });
  }

  getValue() {
    const { input: { value } } = this.props;
    const componentValue = value !== this.lastPropValue ? value : this.state.value;
    this.lastPropValue = componentValue;
    return componentValue;
  }

  debouncedOnChange = () => {
    const { input: { onChange }, delay } = this.props;
    if (delay) {
      return debounce((event) => {
        onChange(event);
      }, delay, {
        leading: false,
        trailing: true });
    }
    return onChange;
  }

  handleChange = (event) => {
    event.persist();
    this.setState({ value: event.target.value });
    this.debouncedOnChange()(event);
  }

  clearContent = () => {
    const { disabled, input: { onChange } } = this.props;
    if (!disabled) {
      this.setState({ value: '' });
      onChange(null);
    }
  }

  renderClearButton = () => {
    const { type } = this.props;
    if (type === 'textarea' || !this.getValue()) {
      return undefined;
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
    return (<HelpBlock style={{ minHeight: helpText ? '6ex' : '3ex' }}>
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
      validator,
      delay,
      disabled,
      input: { name, onChange, ...inputProps },
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
    } else if (type) {
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
