/* eslint-disable import/first */

import React from 'react';
import { mount } from 'enzyme';
import { omit } from 'lodash';

import { InputGroup } from 'react-bootstrap';

import { DebounceTextField } from 'index';

jest.unmock('lodash');

const fieldProps = {
  input: {
    name: 'fieldName',
    onChange: jest.fn(),
  },
  meta: {
    form: 'formName',
    pristine: false,
  },
  delay: 100,
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


describe('The Debounce Text Field', () => {
  let inputWrapper;
  let textAreaWrapper;
  let valueWrapper;
  beforeEach(() => {
    inputWrapper = mount(<DebounceTextField {...fieldProps} />);
    valueWrapper = mount(<DebounceTextField {...valueFieldProps} />);
    textAreaWrapper = mount(<DebounceTextField {...textAreaFieldProps} />);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('has a label when there is a label', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
  });

  it('does not have a label when there is no label', () => {
    const noLabelFieldProps = omit(fieldProps, ['label']);
    const inputWrapperNoLabel = mount(<DebounceTextField {...noLabelFieldProps} />);
    expect(inputWrapperNoLabel.find('Label').exists()).toBe(false);
  });


  it('displays the add ons and clear button for text input', () => {
    expect(inputWrapper.find('#before_addon').exists()).toBe(true);
    expect(inputWrapper.find('#after_addon').exists()).toBe(true);
  });

  it('does not display the clear button when there is no value', () => {
    expect(inputWrapper.find('.form-control-feedback').exists()).toBe(false);
  });

  it('displays the clear button when there is a value', () => {
    expect(valueWrapper.find('.form-control-feedback').exists()).toBe(true);
  });

  it('clears the value when the clear button is pressed', () => {
    valueWrapper.find('.form-control-feedback').simulate('click');
    expect(valueFieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('displays full width when the type is textarea', () => {
    expect(textAreaWrapper.find(InputGroup).prop('style')).toEqual({ width: '100%' });
  });

  it('has the password field type when set to password', () => {
    const passwordFieldProps = { ...fieldProps };
    passwordFieldProps.type = 'password';
    const passwordWrapper = mount(<DebounceTextField {...passwordFieldProps} />);
    expect(passwordWrapper.find('input').prop('type')).toEqual('password');
  });

  it('calls custom validator and onChange when the content changes', () => {
    // expect.assertions(1);
    const lodash = require.requireActual('lodash');
    lodash.debounce = jest.fn((event, time) => event);
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const validatorProps = { ...fieldProps, customValidation: customValidator };
    const inputWrapperValidated = mount(<DebounceTextField {...validatorProps} />);
    inputWrapperValidated.find(`input[name="${fieldProps.input.name}"]`).simulate('change', { target: { value: 'foo' } });
    expect(fieldProps.input.onChange).toHaveBeenCalled();
    expect(customValidator).toHaveBeenCalled();
  });

  it('uses debounce 100 when there is no delay', () => {
    // expect.assertions(1);

    let mockEvent;
    const lodash = require.requireActual('lodash');
    lodash.debounce = jest.fn((event, time) => { mockEvent = event; return event; });
    const validatorProps = omit(fieldProps, 'delay');
    const inputWrapperValidated = mount(<DebounceTextField {...validatorProps} />);
    inputWrapperValidated.find(`input[name="${fieldProps.input.name}"]`).simulate('change', { target: { value: 'foo' } });
    expect(lodash.debounce).toHaveBeenCalledWith(mockEvent, 100);
  });
});
