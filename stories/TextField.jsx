import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FormControl } from 'react-bootstrap';
import TextField from '../src/TextField';
import ReduxFormWrapper from '../.storybook/ReduxForm';

const defaultProps = {
  component: TextField,
  label: 'Text Field Label',
};

const storyConfig = {
  propTables: [TextField, FormControl],
  propTablesExclude: [Field],
};

storiesOf('TextField', module)
.addDecorator(ReduxFormWrapper('storytime', { textField: 'Initial Data' }))
.addWithInfo('Default Text Field',
'A Description',
  () => (
    <Field name="textField1" {...defaultProps} />
  ),
  storyConfig).addWithInfo('with required',
  'A Description',
    () => (
      <Field name="textField2" {...defaultProps} value="foo" />
    ),
  storyConfig);


storiesOf('TextField', module)
  .addDecorator(ReduxFormWrapper('storytime', { textField3: 'Initial Data' }))
  .addWithInfo('Text Field With Initial initialValues',
  'A Description',
    () => (
      <Field name="textField3" {...defaultProps} />
    ),
  storyConfig)
  .addWithInfo('Disabled Text Field With Initial initialValues',
  'A Description',
    () => (
      <Field name="textField3" disabled {...defaultProps} />
    ),
  storyConfig);
