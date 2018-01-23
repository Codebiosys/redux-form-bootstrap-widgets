import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ToggleField from '../src/ToggleField';

storiesOf('ToggleField', module)
.addWithInfo('with text',
'A Description',
 () => (
   <Field
     name="toggle_withtext"
     component={ToggleField}
     label="Toggle Field"
     helpText="here to help"
   />
  ));
