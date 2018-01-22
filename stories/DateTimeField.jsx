import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ReduxFormWrapper from './helpers/ReduxForm';

import DateTimeField from '../src/DateTimeField';

storiesOf('DateTimeField', module)
  .addDecorator(ReduxFormWrapper)
  .add('with text', () => (
    <Field
      name="DateTimeField_withText"
      component={DateTimeField}
      label="Date Field"
      // validate={required}
      helpText="here to help"
      dateFormat="DD/MMM/YYYY"
      timeFormat={false}
    />
  ));
