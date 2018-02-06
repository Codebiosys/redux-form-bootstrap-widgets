/* eslint-disable import/first */

import React from 'react';
import { mount } from 'enzyme';
import Select from 'react-select';
import { SelectField } from 'index';

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
  label: 'Radio Test',
  helpText: 'The help Text',
  options: [
    { label: 'Option 1', value: 'One' },
    { label: 'Option 2', value: 'Two' },
    { label: 'Option 3', value: 'Three' },
  ],
};

const selectedFieldProps = { ...fieldProps };
selectedFieldProps.input = { ...fieldProps.input };
selectedFieldProps.input.value = 'One';

const customOptionFieldProps = { ...fieldProps };
customOptionFieldProps.labelKey = 'foo';
customOptionFieldProps.valueKey = 'bar';
customOptionFieldProps.options = [
  { foo: 'Option 1', bar: 'One' },
  { foo: 'Option 2', bar: 'Two' },
  { foo: 'Option 3', bar: 'Three' }];


const multipleFieldProps = { ...fieldProps };
multipleFieldProps.multiple = true;

const multiValueFieldProps = { ...multipleFieldProps };
multiValueFieldProps.input = { ...multipleFieldProps.input };
multiValueFieldProps.input.value = ['One', 'Two'];

const asyncFieldProps = { ...fieldProps };
asyncFieldProps.options = input => Promise.resolve({ // eslint-disable-line no-unused-vars
  options: [
          { label: 'one', value: 1 },
          { label: 'two', value: 2 },
          { label: 'three', value: 3 },
  ],
});

describe('The Select Field', () => {
  let inputWrapper;
  let asyncWrapper;
  let multipleWrapper;

  beforeEach(() => {
    inputWrapper = mount(<SelectField {...fieldProps} />);
    asyncWrapper = mount(<SelectField {...asyncFieldProps} />);
    multipleWrapper = mount(<SelectField {...multipleFieldProps} />);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });


  it('has a label when there is a label', () => {
    expect(inputWrapper.find('ControlLabel').text()).toEqual(fieldProps.label);
  });

  it('renders with custom options', () => {
    inputWrapper = mount(<SelectField {...customOptionFieldProps} />);
    expect(inputWrapper).toMatchSnapshot();
  });

  it('renders with async options', () => {
    expect(asyncWrapper).toMatchSnapshot();
  });

  it('renders allowing multiple selections', () => {
    expect(multipleWrapper).toMatchSnapshot();
  });
  it('triggers the focus when focused', () => {
    inputWrapper.find('.Select-input input').simulate('focus');
    expect(fieldProps.input.onFocus).toHaveBeenCalledTimes(1);
  });

  it('triggers the async focus when async field is focused', () => {
    asyncWrapper.find('.Select-input input').simulate('focus');
    expect(asyncFieldProps.input.onFocus).toHaveBeenCalledTimes(1);
  });

  it('triggers the blur when blurred', () => {
    inputWrapper.find('.Select-input input').simulate('blur');
    expect(fieldProps.input.onBlur).toHaveBeenCalledTimes(1);
  });

  it('triggers the async blur when async field is blurred', () => {
    asyncWrapper.find('.Select-input input').simulate('blur');
    expect(asyncFieldProps.input.onBlur).toHaveBeenCalledTimes(1);
  });

  it('triggers the onChange when value is changed', () => {
    inputWrapper.find(Select).prop('onChange')({ label: 'Option 2', value: 'Two' });
    expect(fieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(fieldProps.input.onChange).toHaveBeenCalledWith('Two');
  });

  it('triggers the onChange with null when value is missing', () => {
    inputWrapper.find(Select).prop('onChange')({ label: 'Option 4' });
    expect(fieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('triggers the onChange when value is changed for multiple entry', () => {
    multipleWrapper.find(Select).prop('onChange')({ label: 'Option 2', value: 'Two' });
    expect(multipleFieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(multipleFieldProps.input.onChange).toHaveBeenCalledWith(['Two']);
  });

  it('adds to the value when  the onChange when value is changed for multiple entry', () => {
    multipleWrapper = mount(<SelectField {...multiValueFieldProps} />);
    multipleWrapper.find(Select).prop('onChange')([{ label: 'Option 1', value: 'One' }, { label: 'Option 3', value: 'Three' }]);
    expect(multipleFieldProps.input.onChange).toHaveBeenCalledTimes(1);
    expect(multipleFieldProps.input.onChange).toHaveBeenCalledWith(['One', 'Three']);
  });

  it('triggers the onChange with null when value is emtry', () => {
    multipleWrapper.find(Select).prop('onChange')([]);
    expect(multipleFieldProps.input.onChange).toHaveBeenCalledWith(null);
  });

  it('calls custom validator when the toogle is toggled', () => {
    const customValidator = jest.fn(() => ({ validationState: null, errorMessage: null }));
    const validatorProps = { ...fieldProps, customValidation: customValidator };
    const inputWrapperValidated = mount(<SelectField {...validatorProps} />);

    inputWrapperValidated.find(`input[name="${fieldProps.input.name}"]`).simulate('change', { target: { value: 'Three' } });
    expect(customValidator).toHaveBeenCalledTimes(1);
  });
});
