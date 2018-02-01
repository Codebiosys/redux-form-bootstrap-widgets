import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import DateTime from 'react-datetime';
import ReduxFormWrapper from '../.storybook/ReduxForm';

import DateTimeField from '../src/DateTimeField';

storiesOf('DateTimeField', module)
.addDecorator(ReduxFormWrapper('datetimefield'))
.addWithInfo('Default Time Widget',
`A Date/Time field with a react-bootstrap wrapping that connects to a redux field.
 For fields and their functionality, see the
 [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
 Properties that are not required or optional for the DateTime widget will be
 passed on to the underlying
 [react-datetime](https://github.com/YouCanBookMe/react-datetime).
`,
   () => (
     <Field
       name="fieldName"
       component={DateTimeField}
       label="Date Field"
      // validate={required}
       helpText="here to help"
       dateFormat="DD/MMM/YYYY"
       timeFormat={false}
     />
  ),
  {
    propTables: [DateTimeField, DateTime],
  });

storiesOf('DateTimeField', module)
  .addDecorator(ReduxFormWrapper('initialData', { fieldName: '2018-01-01' }))
  .addWithInfo('with initial data',
  'A Description',
     () => (
       <Field
         name="fieldName"
         component={DateTimeField}
         label="Date Field"
         disabled
        // validate={required}
         helpText="here to help"
         dateFormat="DD/MMM/YYYY"
         timeFormat={false}
       />
    ),
  {
    propTables: [DateTimeField, DateTime],
  });
