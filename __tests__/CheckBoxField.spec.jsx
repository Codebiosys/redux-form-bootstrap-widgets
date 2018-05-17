/* eslint-disable import/first */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { camelCase } from 'lodash';

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
  label: 'Checkbox Test',
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
    const shallowField = shallow(<CheckBoxField {...fieldProps} />);
    expect(shallowField).toMatchSnapshot();
  });

  it('has a label when there is a label', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
  });

  it('renders with custom options', () => {
    const shallowField = shallow(<CheckBoxField {...customOptionFieldProps} />);
    expect(shallowField).toMatchSnapshot();
  });
  it('triggers the focus when focused', () => {
    inputWrapper.find(`input[name="${fieldProps.input.name}_${camelCase('Option 1')}"]`).simulate('focus');
    expect(fieldProps.input.onFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onChange and onBlur when the checkbox is selected', () => {
    inputWrapper.find(`input[name="${fieldProps.input.name}_${camelCase('Option 1')}"]`).simulate('change', { target: { value: 'One', checked: true } });
    expect(fieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onBlur).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onChange).toHaveBeenCalledWith(['One']);
  });

  it('calls onChange and onBlur when the checkbox is deselected', () => {
    inputWrapper = mount(<CheckBoxField {...selectedFieldProps} />);

    inputWrapper.find(`input[name="${fieldProps.input.name}_${camelCase('Option 1')}"]`).simulate('change', { target: { value: 'One', checked: false } });
    expect(fieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onBlur).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('calls custom validator when the checkbox is checked', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const validatorProps = { ...fieldProps, validator: customValidator };
    const inputWrapperValidated = mount(<CheckBoxField {...validatorProps} />);

    inputWrapperValidated.find(`input[name="${fieldProps.input.name}_${camelCase('Option 1')}"]`).simulate('change', { value: 'One', target: { checked: false } });
    expect(customValidator).toHaveBeenCalledTimes(1);
  });

  it('uses a custom validator when new props are added', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const customProps = { ...fieldProps, validator: customValidator };
    inputWrapper = shallow(<CheckBoxField {...customProps} />);
    expect(customValidator).toHaveBeenCalledTimes(1); // Constructor
    inputWrapper.setProps({ label: 'new Label' });
    expect(customValidator).toHaveBeenCalledTimes(2); // On Prop Change
  });

  it('renders the help message with a break', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: 'There was an error' }));
    const customProps = { ...fieldProps, helpText: 'The help Text', helpTextStyle: { fontWeight: 'bold' }, validator: customValidator };
    inputWrapper = shallow(<CheckBoxField {...customProps} />);
    expect(inputWrapper).toMatchSnapshot();
  });
});
