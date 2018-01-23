import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from 'redux-form';
import { reduxForm, Form, Field } from 'redux-form';
import { action } from '@storybook/addon-actions';

const store = createStore(
  combineReducers({
    form: reducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default (formName, initialValues) => ((story) => {
  const storyFormWrapper = (
    { children }) => (
      <Form onSubmit={action('handleSubmit')}>{children}</Form>
    );
  const StoryForm = reduxForm({ form: formName, initialValues})(storyFormWrapper);
  return (<Provider store={store}><div className="container"><StoryForm>{story()}</StoryForm></div></Provider>);
});
