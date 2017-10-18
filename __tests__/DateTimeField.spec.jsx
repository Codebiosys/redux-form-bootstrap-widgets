/* eslint-disable import/first */

import React from 'react';
import { mount } from 'enzyme';
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
  helpText: 'The help Text',
};

const selectedFieldProps = { ...fieldProps };
selectedFieldProps.input = { ...fieldProps.input };
selectedFieldProps.input.value = moment('2017-01-01');

describe('The Toggle Field', () => {
  let inputWrapper;

  beforeEach(() => {
    inputWrapper = mount(<DateTimeField {...fieldProps} />);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('disables clear button when there is no value', () => {
    expect(inputWrapper.find('button').prop('disabled')).toEqual(true);
  });

  it('clears the value when the clear button is pressed', () => {
    inputWrapper = mount(<DateTimeField {...selectedFieldProps} />);
    inputWrapper.find('button').simulate('click');
    expect(selectedFieldProps.input.onChange).toHaveBeenCalledWith(null);
  });
});
