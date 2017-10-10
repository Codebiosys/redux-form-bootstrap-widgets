/* eslint-disable import/first */
jest.mock('redux-form');

import React from 'react';
import { shallow } from 'enzyme';

import TextField from 'TextField';

const fieldProps = {
  input: {
    name: 'fieldName',
  },
  meta: {
    form: 'formName',
    pristine: false,
  },
  label: 'Text Test',
};

describe('The Filtering Text Field', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TextField {...fieldProps} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
