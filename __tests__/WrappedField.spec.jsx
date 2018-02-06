/* eslint-disable import/first */

import React from 'react';
import { mount, shallow } from 'enzyme';
import PropTypes from 'prop-types';
import { createMockStore } from 'redux-test-utils';

import { WrappedField, WrappedFields } from 'index';

const renderFields = fields => (
  <div>
    <div className="input-row">
      <input {...fields.firstName.input} type="text" />
    </div>
    <div className="input-row">
      <input {...fields.lastName.input} type="text" />
    </div>
  </div>
);

describe('The Redux Wrapper', () => {
  let inputWrapper;
  let shallowWrapper;
  let store;
  const defaultStore = {};
  beforeEach(() => {
    store = createMockStore(defaultStore);
    shallowWrapper = shallow(
      <WrappedField
        form="formname"
        name="name"
        type="text"
        component="input"
      />,
      { context: { store },
        childContextTypes: {
          store: PropTypes.object } },
    );
    inputWrapper = mount(
      <WrappedField
        form="formname"
        name="name"
        type="text"
        component="input"
      />,
      { context: { store },
        childContextTypes: {
          store: PropTypes.object } },
      );
  });

  it('renders', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('has the correct field name', () => {
    expect(inputWrapper.find('ReduxForm').prop('form')).toEqual('formname');
  });

  it('renders a multi field component', () => {
    const multiwrapper = shallow(
      <WrappedFields
        form="foobar"
        names={['firstName', 'lastName']}
        component={renderFields}
      />,
      { context: { store },
        childContextTypes: {
          store: PropTypes.object } },
    );
    expect(multiwrapper).toMatchSnapshot();
  });
});
