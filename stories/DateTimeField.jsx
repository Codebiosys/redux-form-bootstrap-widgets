import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import ReduxFormWrapper from '../.storybook/ReduxForm';

import DateTimeField from '../src/DateTimeField';

const required = value => (value ? undefined : 'Required');
const dateNormalizeFactory = validFormats => (value) => {
  if (moment.isMoment(value)) {
    return value;
  }
  if (moment(value, validFormats, true).isValid()) {
    return moment(value);
  }
  if (!value) {
    return value;
  }
  const newVal = value.replace(/[HhIiKkQqWwXxZz]/g, '');
  if (newVal.length > 11) {
    return newVal.slice(0, 11);
  }
  return newVal;
};

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
       normalize={dateNormalizeFactory(
         ['DD/MMM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'],
       )}
     />
  ),
  {
    propTables: [DateTimeField],
    propTablesExclude: [Field],
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
    propTables: [DateTimeField],
    propTablesExclude: [Field],
  });

storiesOf('DateTimeField', module)
    .addDecorator(ReduxFormWrapper('initialData', { fieldName: '01/Jan/2018' }))
    .addWithInfo('with required data',
    'A Description',
       () => (
         <Field
           required
           validate={required}
           name="fieldName"
           component={DateTimeField}
           label="Date Field"
           helpText="here to help"
           dateFormat="DD/MMM/YYYY"
           timeFormat={false}
         />
      ),
  {
    propTables: [DateTimeField],
    propTablesExclude: [Field],
  });
