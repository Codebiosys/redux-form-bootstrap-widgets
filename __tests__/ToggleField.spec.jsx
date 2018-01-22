/* eslint-disable import/first */

import React from 'react';
import { mount } from 'enzyme';
import { omit } from 'lodash';
import { ToggleField } from 'index';

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
};

const selectedFieldProps = { ...fieldProps };
selectedFieldProps.input = { ...fieldProps.input };
selectedFieldProps.input.value = true;

describe('The Toggle Field', () => {
  let inputWrapper;

  beforeEach(() => {
    inputWrapper = mount(<ToggleField {...fieldProps} />);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('has a label when there is a label', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
  });

  it('is not checked by default', () => {
    expect(inputWrapper.find(`input[name="${fieldProps.input.name}"]`).prop('checked')).toBe(false);
  });

  it('is checked when the value is true', () => {
    inputWrapper = mount(<ToggleField {...selectedFieldProps} />);
    expect(inputWrapper.find(`input[name="${fieldProps.input.name}"]`).prop('checked')).toBe(true);
  });
  it('triggers the focus when focused', () => {
    inputWrapper.find(`input[name="${fieldProps.input.name}"]`).simulate('focus');
    expect(fieldProps.input.onFocus).toHaveBeenCalledTimes(1);
  });

  it('triggers the blur when blurred', () => {
    inputWrapper.find(`input[name="${fieldProps.input.name}"]`).simulate('blur');
    expect(fieldProps.input.onBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when the toogle is toggled', () => {
    inputWrapper.find(`input[name="${fieldProps.input.name}"]`).simulate('change', { target: { checked: true } });
    expect(fieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onChange).toHaveBeenCalledWith(true);
  });

  it('calls onChange when the toogle is toggled off', () => {
    inputWrapper.find(`input[name="${fieldProps.input.name}"]`).simulate('change', { target: { checked: false } });
    expect(fieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onChange).toHaveBeenCalledWith(false);
  });

  it('calls custom validator when the toogle is toggled', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const validatorProps = { ...fieldProps, customValidation: customValidator };
    const inputWrapperValidated = mount(<ToggleField {...validatorProps} />);

    inputWrapperValidated.find(`input[name="${fieldProps.input.name}"]`).simulate('change', { target: { checked: true } });
    expect(customValidator).toHaveBeenCalledTimes(1);
  });
});
