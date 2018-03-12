/* eslint-disable import/first */

import React from 'react';
import { shallow } from 'enzyme';
import Label from 'Label';

const fieldProps = {
  label: 'Field Label',
  required: false,
};

const requiredFieldProps = {
  label: 'Field Label',
  required: true,
};

describe('The Label', () => {
  let inputWrapper;

  beforeEach(() => {
    inputWrapper = shallow(<Label {...fieldProps} />);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('has no asterisk when not required', () => {
    expect(inputWrapper.find('Glyphicon').exists()).toBe(false);
  });

  it('has an asterisk when required', () => {
    const requiredWrapper = shallow(<Label {...requiredFieldProps} />);
    expect(requiredWrapper.find('Glyphicon').prop('glyph')).toEqual('asterisk');
  });

  it('is empty when there is no label', () => {
    const emptywrapper = shallow(<Label />);
    expect(emptywrapper.getElement()).toBe(null);
  });
});
