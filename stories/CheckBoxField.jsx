import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import ReduxFormWrapper from '../.storybook/ReduxForm';

import CheckBoxField from '../src/CheckBoxField';

const storyConfig = {
  propTables: [CheckBoxField],
  propTablesExclude: [Field],
};

storiesOf('CheckboxField', module)
  .addDecorator(withKnobs)
  .addDecorator(ReduxFormWrapper('storytime'))
  .addWithInfo('Default Checkbox Field',
  `A collection ofCheckbox field with a react-bootstrap wrapping that connects to a redux field.
   For fields and their functionality, see the
   [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
   Properties that are not required or optional for the Checkbox widget will be
   passed on to the underlying
   [react-bootstrap checkbox](https://react-bootstrap.github.io/components/forms/).
  `,
  () => (
    <Field
      name="fieldName"
      component={CheckBoxField}
      label={text('Label', 'Checkbox Field Label')}
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
  storyConfig)
  .addWithInfo('Required Checkbox Field',
  `A collection ofCheckbox field with a react-bootstrap wrapping that connects to a redux field.
   For fields and their functionality, see the
   [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
   Properties that are not required or optional for the Checkbox widget will be
   passed on to the underlying
   [react-bootstrap checkbox](https://react-bootstrap.github.io/components/forms/).
  `,
  () => (
    <Field
      name="fieldName"
      component={CheckBoxField}
      label={text('Label', 'Checkbox Field Label')}
      disabled={boolean('Disabled', false)}
      helpText={text('Help Text', 'Help text for the widget')}
      inline={boolean('Inline', false)}
      required
      validate={value => (value ? undefined : 'Required')}
      options={[
                { label: 'one', value: 1 },
                { label: 'two', value: 2 },
                { label: 'three', value: 3 },
      ]}
    />
  ),
storyConfig);
