import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field, propTypes, Fields } from 'redux-form';
import _ from 'lodash';

const reduxFormConfig = {
  destroyOnUnmount: false,
};

const ReduxField = props => (
  <Field
    {..._.omit(props, [..._.keys(propTypes), 'clearSubmitErrors'])}
  />
);

const ReduxFields = props => (
  <Fields
    {..._.omit(props, [..._.keys(propTypes), 'clearSubmitErrors'])}
  />
);

export const WrappedField = compose(
  connect((state, props) => ({ form: props.form })),
  reduxForm(reduxFormConfig),
)(ReduxField);

export const WrappedFields = compose(
  connect((state, props) => ({ form: props.form })),
  reduxForm(reduxFormConfig),
)(ReduxFields);
