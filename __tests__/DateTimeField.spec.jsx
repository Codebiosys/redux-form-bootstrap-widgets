/* eslint-disable import/first */

import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import { DateTimeField } from 'index';

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
};

const selectedFieldProps = { ...fieldProps };
selectedFieldProps.input = { ...fieldProps.input };
selectedFieldProps.input.value = moment('2017-01-01');

describe('The Date Time Field', () => {
  let inputWrapper;

  beforeEach(() => {
    inputWrapper = mount(<DateTimeField {...fieldProps} />);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('has a label when there is a label', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
  });

  it('does not display the clear button when there is no value', () => {
    expect(inputWrapper.find('.form-control-feedback').hasClass('glyphicon-calendar')).toBe(true);
  });


  it('clears the value when the clear button is pressed', () => {
    inputWrapper = mount(<DateTimeField {...selectedFieldProps} />);
    inputWrapper.find('.form-control-feedback').simulate('click');
    expect(selectedFieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('calls custom validator when the date changes', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const validatorProps = { ...fieldProps, validator: customValidator };
    const inputWrapperValidated = shallow(<DateTimeField {...validatorProps} />);
    expect(customValidator).toHaveBeenCalledTimes(1);
    inputWrapperValidated.setProps({ label: 'new Label' });
    expect(customValidator).toHaveBeenCalledTimes(2); // On Prop Change
  });

  it('renders the help message with a break', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: 'There was an error' }));
    const customProps = { ...fieldProps, helpText: 'The help Text', validator: customValidator };
    inputWrapper = shallow(<DateTimeField {...customProps} />);
    expect(inputWrapper).toMatchSnapshot();
  });
});
