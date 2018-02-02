import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import DateTime from 'react-datetime';
import { join, tail, head, split } from 'lodash';
import moment from 'moment';

import ReduxFormWrapper from '../.storybook/ReduxForm';

import DateTimeField from '../src/DateTimeField';

const dateNormalizeFactory = (validFormats, finalFormat) => (value) => {
  if (moment(value, validFormats, true).isValid()) {
//    console.log('ITS VALID: ', moment(value, validFormats, true).isValid());
    return moment(value).format(finalFormat);
  }
//  console.log('ITS Not VALID: ', moment(value, validFormats, true).isValid());
  if (!value) {
    return value;
  }
  const newVal = value.replace(/[HhIiKkQqWwXxZ]/g, '');
  console.log('newVal is', newVal);
  return newVal;
};
  // if (!value) {
  //   return value;
  // }
  // const onlyNums = value.replace(/[^\dx]/g, '');
  // const numAndExtension = split(onlyNums, 'x');
  // const number = head(numAndExtension);
  // let extension;
  // if (numAndExtension.length > 1) {
  //   extension = join(tail(numAndExtension), 'x');
  // }
  // let retnum;
  // if (number.length <= 3) {
  //   retnum = number;
  // } else if (number.length <= 7) {
  //   retnum = `${number.slice(0, 3)}-${number.slice(3)}`;
  // } else {
  //   retnum = `${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(6, 10)}`;
  // }
  // if (numAndExtension.length > 1) {
  //   return `${retnum}x${extension}`;
  // }
  // return retnum;
  // dateNormalizeFactory(
  //   ['DD/MMM/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'],
  //   'DD/MMM/YYYY',
  // )


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
       normalize={

         (value) => {
           if (!value) {
             return value;
           }
           if (moment(value, ['DD/MMM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'], true).isValid()) {
             return moment(value).format('DD/MMM/YYYY');
           }
           const newVal = value.replace(/[HhIiKkQqWwXxZz]/g, '');
           return newVal;
         }

       }
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
