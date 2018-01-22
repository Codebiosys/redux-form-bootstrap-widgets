import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ReduxFormWrapper from './helpers/ReduxForm';

import CheckBoxField from '../src/CheckBoxField';

storiesOf('CheckboxField', module)
  .addDecorator(ReduxFormWrapper)
  .add('with text', () => (

    <Field
      name="Checkbox_withText"
      component={CheckBoxField}
      label="Checkbox Field"
              // validate={required}
      helpText="here to help"
      inline
      valueKey="bar"
      labelKey="foo"
      options={[
                { foo: 'one', bar: 1 },
                { foo: 'two', bar: 2 },
                { foo: 'three', bar: 3 },
      ]}
    />
  ));
