import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RadioField from '../src/RadioField';

storiesOf('RadioField', module)
  .addWithInfo('with text',
  'Some additional info',
  () => (
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
