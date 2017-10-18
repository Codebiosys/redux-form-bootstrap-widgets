/* eslint-disable import/first */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { InputGroup } from 'react-bootstrap';

import { CheckBoxField } from 'index';

const fieldProps = {
  input: {
    name: 'fieldName',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onFocus: jest.fn(),
  },
  meta: {
    form: 'formName',
    pristine: false,
  },
  label: 'CheckBox  Test',
  helpText: 'The help Text',
  options: [
    { label: 'Option 1', value: 'One' },
    { label: 'Option 2', value: 'Two' },
    { label: 'Option 3', value: 'Three' },
  ],
};

const selectedFieldProps = { ...fieldProps };
selectedFieldProps.input = { ...fieldProps.input };
selectedFieldProps.input.value = ['One'];

const customOptionFieldProps = { ...fieldProps };
customOptionFieldProps.labelKey = 'foo';
customOptionFieldProps.valueKey = 'bar';
customOptionFieldProps.options = [
  { foo: 'Option 1', bar: 'One' },
  { foo: 'Option 2', bar: 'Two' },
  { foo: 'Option 3', bar: 'Three' }];

describe('The Checkbox Field', () => {
  let inputWrapper;

  beforeEach(() => {
    inputWrapper = mount(<CheckBoxField {...fieldProps} />);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('renders with custom options', () => {
    inputWrapper = mount(<CheckBoxField {...customOptionFieldProps} />);
    expect(inputWrapper).toMatchSnapshot();
  });
  it('triggers the focus when focused', () => {
    inputWrapper.find(`input[name="${fieldProps.input.name}_0"]`).simulate('focus');
    expect(fieldProps.input.onFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onChange and onBlur when the checkbox is selected', () => {
    inputWrapper.find(`input[name="${fieldProps.input.name}_0"]`).simulate('change', { target: { checked: true } });
    expect(fieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onBlur).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onChange).toHaveBeenCalledWith(['One']);
  });

  it('calls onChange and onBlur when the checkbox is deselected', () => {
    inputWrapper = mount(<CheckBoxField {...selectedFieldProps} />);

    inputWrapper.find(`input[name="${fieldProps.input.name}_0"]`).simulate('change', { target: { checked: false } });
    expect(fieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onBlur).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onChange).toHaveBeenCalledWith(null);
  });
});
