/* eslint-disable import/first */

import React from 'react';
import { mount, shallow } from 'enzyme';

import { InputGroup } from 'react-bootstrap';

import { TextField } from 'index';

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
    inputWrapper = mount(<TextField {...fieldProps} />);
    valueWrapper = mount(<TextField {...valueFieldProps} />);
    textAreaWrapper = mount(<TextField {...textAreaFieldProps} />);
  });

  it('renders', () => {
    const shallowField = shallow(<TextField {...fieldProps} />);
    expect(shallowField).toMatchSnapshot();
  });

  it('has a label when there is a label', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
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
    valueWrapper.find('.form-control-feedback.glyphicon').simulate('click');
    expect(valueFieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('displays full width when the type is textarea', () => {
    expect(textAreaWrapper.find(InputGroup).prop('style')).toEqual({ width: '100%' });
  });

  it('has the password field type when set to password', () => {
    const passwordFieldProps = { ...fieldProps };
    passwordFieldProps.type = 'password';
    const passwordWrapper = mount(<TextField {...passwordFieldProps} />);
    expect(passwordWrapper.find('input').prop('type')).toEqual('password');
  });

  it('calls custom validator and onChange when the content changes', () => {
    const lodash = require.requireActual('lodash');
    lodash.debounce = jest.fn((event, time) => {event.cancel= jest.fn(); return event}); // eslint-disable-line
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const validatorProps = { ...fieldProps, validator: customValidator };
    const inputWrapperValidated = mount(<TextField {...validatorProps} />);
    inputWrapperValidated.find(`input[name="${fieldProps.input.name}"]`).simulate('change', { target: { value: 'foo' } });
    expect(fieldProps.input.onChange).toHaveBeenCalled();
    expect(customValidator).toHaveBeenCalled();
  });

  it('uses a custom validator when new props are added', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const customProps = { ...fieldProps, validator: customValidator };
    inputWrapper = shallow(<TextField {...customProps} />);
    expect(customValidator).toHaveBeenCalledTimes(1); // Constructor
    inputWrapper.setProps({ label: 'new Label' });
    expect(customValidator).toHaveBeenCalledTimes(2); // On Prop Change
  });

  it('renders the help message with a break', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: 'There was an error' }));
    const customProps = { ...fieldProps, helpText: 'The help Text', validator: customValidator };
    inputWrapper = shallow(<TextField {...customProps} />);
    expect(inputWrapper).toMatchSnapshot();
  });

  it('manages internal state', () => {
    inputWrapper = shallow(<TextField {...fieldProps} />);
    inputWrapper.setProps({ ...fieldProps, input: { ...fieldProps.input, value: 'A Value' } });
    expect(inputWrapper.state('value')).toEqual('A Value');
    inputWrapper.setState({ ...inputWrapper.state, value: 'New Value' });
    inputWrapper.setProps({ ...fieldProps, input: { ...fieldProps.input, value: 'A Value' } });
    expect(inputWrapper.state('value')).toEqual('New Value');
  });
});
