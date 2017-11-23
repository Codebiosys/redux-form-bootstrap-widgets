/* eslint-disable import/first */

import React from 'react';
import { shallow } from 'enzyme';
import { FieldSet } from 'index';

const fieldProps = {
  label: 'Field Label',
};

describe('The Field Set', () => {
  let inputWrapper;

  beforeEach(() => {
    inputWrapper = shallow(<FieldSet {...fieldProps}><input name="foo" /></FieldSet>);
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('has a label when there is a label', () => {
    expect(inputWrapper.find('legend').text()).toEqual(fieldProps.label);
  });
});
