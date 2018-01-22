import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ReduxFormWrapper from './helpers/ReduxForm';

import RadioField from '../src/RadioField';

storiesOf('RadioField', module)
  .addDecorator(ReduxFormWrapper)
  .add('with text', () => (
    <Field
      name="field1"
      component={RadioField}
      label="Radio Field"
            // validate={required}
      helpText="here to help"
      options={[
            { label: 'one', value: 1 },
            { label: 'two', value: 2 },
            { label: 'three', value: 3 },
      ]}
    />
  ));
