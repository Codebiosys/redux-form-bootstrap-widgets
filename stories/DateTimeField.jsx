import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateTime from 'react-datetime';

import DateTimeField from '../src/DateTimeField';

storiesOf('DateTimeField', module)
.addWithInfo('with text',
'A Description',
   () => (
     <Field
       name="DateTimeField_withText"
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
