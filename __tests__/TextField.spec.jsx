/* eslint-disable import/first */

import React from 'react';
import { mount } from 'enzyme';
import { InputGroup } from 'react-bootstrap';

import { TextField } from 'index';

const fieldProps = {
  input: {
    name: 'fieldName',
    onChange: jest.fn(),
  },
  meta: {
    form: 'formName',
    pristine: false,
  },
  label: 'Text Test',
  helpText: 'The help Text',
  addOnBefore: (<div id="before_addon">before</div>),
  addOnAfter: (<div id="after_addon">after</div>),
};

const valueFieldProps = { ...fieldProps };
valueFieldProps.input = { ...fieldProps.input };
valueFieldProps.input.value = 'entered text';
valueFieldProps.input.value = 'entered text';
const textAreaFieldProps = { ...fieldProps };
textAreaFieldProps.type = 'textarea';


describe('The Text Field', () => {
  let inputWrapper;
  let textAreaWrapper;
  let valueWrapper;
  beforeEach(() => {
    inputWrapper = mount(<TextField {...fieldProps} />);
    valueWrapper = mount(<TextField {...valueFieldProps} />);
    textAreaWrapper = mount(<TextField {...textAreaFieldProps} />);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('displays the add ons and clear button for text input', () => {
    expect(inputWrapper.find('#before_addon').exists()).toBe(true);
    expect(inputWrapper.find('#after_addon').exists()).toBe(true);
    expect(inputWrapper.find('button').exists()).toBe(true);
  });

  it('disables clear button when there is no value', () => {
    expect(inputWrapper.find('button').prop('disabled')).toEqual(true);
  });

  it('enables clear button when there is a value', () => {
    expect(valueWrapper.find('button').prop('disabled')).toEqual(false);
  });

  it('clears the value when the clear button is pressed', () => {
    valueWrapper.find('button').simulate('click');
    expect(valueFieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('displays a textarea when the type is textarea', () => {
    expect(textAreaWrapper).toMatchSnapshot();
    expect(textAreaWrapper.find('textarea').exists()).toBe(true);
  });

  it('displays full width when the type is textarea', () => {
    expect(textAreaWrapper.find(InputGroup).prop('style')).toEqual({ width: '100%' });
  });

  it('hides the add ons and clear button for textareas', () => {
    expect(textAreaWrapper.find('#before_addon').exists()).toBe(false);
    expect(textAreaWrapper.find('#after_addon').exists()).toBe(false);
    expect(textAreaWrapper.find('button').exists()).toBe(false);
  });
  it('has the password field type when set to password', () => {
    const passwordFieldProps = { ...fieldProps };
    passwordFieldProps.type = 'password';
    const passwordWrapper = mount(<TextField {...passwordFieldProps} />);
    expect(passwordWrapper.find('input').prop('type')).toEqual('password');
  });
});
