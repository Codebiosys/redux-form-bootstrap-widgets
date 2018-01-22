import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextField from '../src/TextField';
import ReduxFormWrapper from './helpers/ReduxForm';

storiesOf('TextField', module)
  .addDecorator(ReduxFormWrapper)
  .add('with text', () => (
    <Field
      name={'text'}
      component={TextField}
      label="hello"
    />
  ));
