import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Checkbox, FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, Radio } from 'react-bootstrap';
import storeFactory from 'store';

import SelectField from 'fields/SelectField';
import TextField from 'fields/TextField';
import RadioField from 'fields/RadioField';
import DateTimeField from 'fields/DateTimeField';
import CheckBoxField from 'fields/CheckBoxField';
import ToggleField from 'fields/ToggleField';

import _ from 'lodash';


const store = storeFactory();
const required = value => (value ? undefined : 'Required');

const ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="field6"
        component={ToggleField}
        label="Input Text 6"
        validate={required}
        helpText="here to help"
      />

      <Field
        name="field5"
        component={CheckBoxField}
        label="Input Text 5"
        validate={required}
        helpText="here to help"
        inline
        options={[
            { label: 'one', value: 1 },
            { label: 'two', value: 2 },
            { label: 'three', value: 3 },
        ]}

      />

      <Field
        name="field4"
        component={DateTimeField}
        label="Input Text 4"
        validate={required}
        helpText="here to help"
        dateFormat="DD/MMM/YYYY"
        timeFormat={false}
      />

      <Field
        name="field1"
        component={RadioField}
        label="Input Text 3"
        validate={required}
        helpText="here to help"

        options={[
          { label: 'one', value: 1 },
          { label: 'two', value: 2 },
          { label: 'three', value: 3 },
        ]}
      />

      <Field
        name="field3"
        component={SelectField}
        labelKey={'label'}
        valueKey={'value'}
        label="Input Text 3"
        validate={required}
        multiple
        helpText="here to help"
        options={[
          { label: 'one', value: 1 },
          { label: 'two', value: 2 },
          { label: 'three', value: 3 },
        ]}
      />

      <Field
        name="field7"
        component={SelectField}
        labelKey={'label'}
        valueKey={'value'}
        label="Input Text 7"
        validate={required}

        helpText="here to help"
        options={[
          { label: 'one', value: 1 },
          { label: 'two', value: 2 },
          { label: 'three', value: 3 },
        ]}
      />

      <Field
        name="field2"
        component={TextField}
        label="Input Text 2"
        type="text"
        validate={required}
      />
    </Form>
  );
};

const ReduxContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
})(ContactForm);

const App = () => (
  <Provider store={store}>
    <div>
      <ReduxContactForm handleSubmit={() => {}} />
      <Button bsStyle="primary" bsSize="large">Hello React</Button>
    </div>
  </Provider>
);

App.propTypes = {
  message: React.PropTypes.string,
};

export default App;
