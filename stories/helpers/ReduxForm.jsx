import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from 'redux-form';
import { reduxForm, Form, Field } from 'redux-form';

const store = createStore(
  combineReducers({
    form: reducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default (story) => {
  const storyFormWrapper = (
    { children, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>{children}</Form>
    );
  const StoryForm = reduxForm({ form: 'storytime' })(storyFormWrapper);
  return (<Provider store={store}><div className="container"><StoryForm>{story()}</StoryForm></div></Provider>);
};
