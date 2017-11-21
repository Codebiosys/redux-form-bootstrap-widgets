/* eslint-disable import/first */

import React from 'react';
import { mount } from 'enzyme';
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
  let store;
  const defaultStore = {};
  beforeEach(() => {
    store = createMockStore(defaultStore);
    inputWrapper = mount(
      <WrappedField
        form="formname"
        name="name"
        type="text"
        component="input"
        clearSubmitErrors
      />,
      { context: { store },
        childContextTypes: {
          store: PropTypes.object } },
      );
  });

  it('renders', () => {
    expect(inputWrapper).toMatchSnapshot();
  });

  it('has the correct field name', () => {
    expect(inputWrapper.find('ReduxForm').prop('form')).toEqual('formname');
  });

  it('renders a multi field component', () => {
    const multiwrapper = mount(
      <WrappedFields
        form="foobar"
        names={['firstName', 'lastName']}
        component={renderFields}
        clearSubmitErrors
      />,
      { context: { store },
        childContextTypes: {
          store: PropTypes.object } },
    );
    expect(multiwrapper).toMatchSnapshot();
  });
});
