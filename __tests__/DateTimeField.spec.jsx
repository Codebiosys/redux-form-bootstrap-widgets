/* eslint-disable import/first */

import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import { DateTimeField } from 'index';
import { trim } from 'lodash';

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
    const shallowinputWrapper = shallow(<DateTimeField {...fieldProps} />);
    expect(shallowinputWrapper).toMatchSnapshot();
  });

  it('has a label when there is a label', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
  });

  it('displays the formatted value when a date is entered', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
  });


  it('displays a formatted string when the date can be convered', () => {
    const formatWrapper = mount(<DateTimeField {...selectedFieldProps} dateFormat="DD/MMM/YYYY" />);
    expect(formatWrapper.find('FormControl').prop('value')).toEqual('01/Jan/2017');
  });

  it('clears the value when the clear button is pressed', () => {
    inputWrapper = mount(<DateTimeField {...selectedFieldProps} />);
    inputWrapper.find('.form-control-feedback.glyphicon').simulate('click');
    expect(selectedFieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('does not clear the value when the clear button is pressed and the field is disabled', () => {
    const disabledInputWrapper = mount(<DateTimeField {...selectedFieldProps} disabled />);
    disabledInputWrapper.find('.form-control-feedback.glyphicon').simulate('click');
    expect(selectedFieldProps.input.onChange).not.toHaveBeenCalled();
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
