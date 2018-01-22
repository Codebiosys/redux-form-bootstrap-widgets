import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ReduxFormWrapper from './helpers/ReduxForm';

import SelectField from '../src/SelectField';

storiesOf('SelectField', module)
  .addDecorator(ReduxFormWrapper)
  .add('with text', () => (

    <Field
      name="field3"
      component={SelectField}
      labelKey={'label'}
      valueKey={'value'}
      label="Multi select Field"
      validate={required}
      multiple
      helpText="here to help"
      options={[
          { label: 'one', value: 1 },
          { label: 'two', value: 2 },
          { label: 'three', value: 3 },
      ]}
    />
  ));
