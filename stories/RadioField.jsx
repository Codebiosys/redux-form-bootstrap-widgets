import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import ReduxFormWrapper from '../.storybook/ReduxForm';

import RadioField from '../src/RadioField';

const storyConfig = {
  propTables: [RadioField],
  propTablesExclude: [Field],
};

storiesOf('RadioField', module)
  .addDecorator(withKnobs)
  .addDecorator(ReduxFormWrapper('storytime'))
  .addWithInfo('Default RadioField Field',
  `A RadioField field with a react-bootstrap wrapping that connects to a redux field.
   For fields and their functionality, see the
   [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
   Properties that are not required or optional for the Checkbox widget will be
   passed on to the underlying
   [react-bootstrap radio](https://react-bootstrap.github.io/components/forms/).
  `,
  () => (
    <Field
      name="fieldName"
      component={RadioField}
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
  storyConfig)
  .addWithInfo('Required Radio Field',
  `A collection Radio field with a react-bootstrap wrapping that connects to a redux field.
   For fields and their functionality, see the
   [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
   Properties that are not required or optional for the Checkbox widget will be
   passed on to the underlying
   [react-bootstrap radio](https://react-bootstrap.github.io/components/forms/).
  `,
  () => (
    <Field
      name="fieldName"
      component={RadioField}
      label={text('Label', 'Radio Field Label')}
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
