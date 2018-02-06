
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Checkbox,
  FormGroup,
  HelpBlock,
  InputGroup,
  } from 'react-bootstrap';

import { castArray, camelCase, union, filter, toArray } from 'lodash';

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
};


const defaultProps = {
  required: false,
  helpText: null,
  disabled: false,
  inline: false,
  validator: validationMessage,
  labelKey: 'label',
  valueKey: 'value',
};

class CheckBoxField extends Component {
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

  checkOptions = () => {
    const { labelKey, valueKey, options, input: { value } } = this.props;
    const valueList = toArray(value);

    return options.map(({ [labelKey]: checkLabel, [valueKey]: checkValue }) => ({
      label: checkLabel,
      value: checkValue,
      checked: valueList.includes(String(checkValue)),
    }));
  }

  handleChange = (event) => {
    const { input: { value, onChange, onBlur } } = this.props;
    const { value: checkValue, checked } = event.target;
    let valueList = castArray(value);
    if (checked) {
      valueList = union(value, [checkValue]);
    } else {
      valueList = filter(valueList, val => val !== checkValue);
    }
    valueList = valueList.length ? valueList : null;
    onBlur();
    onChange(valueList);
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

  renderInput = (checkBoxProps) => {
    const {
      label: widgetLabel,
      required,
      helpText,
      disabled,
      meta,
      valueKey,
      labelKey,
      validator,
      input: { name, onFocus },
      options,
      inline,
      ...props
    } = this.props;
    const { value, label, checked } = checkBoxProps;
    return (<Checkbox
      key={`${name}_${camelCase(label)}`} // eslint-disable-line
      name={`${name}_${camelCase(label)}`}
      value={value}
      checked={checked}
      onChange={this.handleChange}
      onFocus={onFocus}
      disabled={disabled}
      inline={inline}
      {...props}
    >
      {label}
    </Checkbox>);
  }

  render() {
    const {
      label,
      required,
      input: { name },
    } = this.props;

    return (
      <FormGroup
        controlId={name}
        validationState={this.state.validationState}
      >
        <Label label={label} required={required} />
        <InputGroup>
          {this.checkOptions().map(this.renderInput)}
        </InputGroup>
        {this.renderHelpMessage()}
      </FormGroup>
    );
  }
}

export default CheckBoxField;
