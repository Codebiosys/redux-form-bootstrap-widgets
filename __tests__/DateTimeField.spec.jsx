/* eslint-disable import/first */

import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import { omit } from 'lodash';
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
  helpText: 'The help Text',
};

const selectedFieldProps = { ...fieldProps };
selectedFieldProps.input = { ...fieldProps.input };
selectedFieldProps.input.value = moment('2017-01-01');

describe('The Date Time Field', () => {
  let inputWrapper;

  beforeEach(() => {
    inputWrapper = mount(<DateTimeField {...fieldProps} />);
  });

  it('has a label when there is a label', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
  });

  it('does not have a label when there is no label', () => {
    const noLabelFieldProps = omit(fieldProps, ['label']);
    const inputWrapperNoLabel = mount(<DateTimeField {...noLabelFieldProps} />);
    expect(inputWrapperNoLabel.find('ControlLabel').isEmpty()).toBe(true);
  });

  it('does not display the clear button when there is no value', () => {
    expect(inputWrapper.find('.form-control-feedback').hasClass('glyphicon-calendar')).toBe(true);
  });


  it('clears the value when the clear button is pressed', () => {
    inputWrapper = mount(<DateTimeField {...selectedFieldProps} />);
    inputWrapper.find('.form-control-feedback').simulate('click');
    expect(selectedFieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('calls custom validator when the toogle is toggled', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const validatorProps = { ...fieldProps, customValidation: customValidator };
    const inputWrapperValidated = mount(<DateTimeField {...validatorProps} />);

    inputWrapperValidated.find('.form-control-feedback').simulate('click');
    expect(customValidator).toHaveBeenCalledTimes(1);
  });
});
