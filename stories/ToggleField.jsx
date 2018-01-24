import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import ReduxFormWrapper from '../.storybook/ReduxForm';

import ToggleField from '../src/ToggleField';

const storyConfig = {
  propTables: [ToggleField],
  propTablesExclude: [Field],
};

storiesOf('ToggleField', module)
  .addDecorator(withKnobs)
  .addDecorator(ReduxFormWrapper('storytime'))
  .addWithInfo('Default ToggleField Field',
  `A ToggleField field with a react-bootstrap wrapping that connects to a redux field.
   For fields and their functionality, see the
   [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
   Properties that are not required or optional for the Checkbox widget will be
   passed on to the underlying
   [react-toggle](http://aaronshaf.github.io/react-toggle/).
  `,
  () => (
    <Field
      name="fieldName"
      component={ToggleField}
      label={text('Label', 'Radio Field Label')}
      required={boolean('Required', false)}
      disabled={boolean('Disabled', false)}
      helpText={text('Help Text', 'Help text for the widget')}
      inline={boolean('Inline', false)}
      options={[
                { label: 'one', value: 1 },
                { label: 'two', value: 2 },
                { label: 'three', value: 3 },
      ]}
    />
  ),
  storyConfig);
