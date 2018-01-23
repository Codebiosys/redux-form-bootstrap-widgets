import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import ReduxFormWrapper from '../.storybook/ReduxForm';

import FieldSet from '../src/FieldSet';

const storyConfig = {
  propTables: [FieldSet],
  propTablesExclude: [Field],
};

storiesOf('FieldSet', module)
  .addDecorator(withKnobs)
  .addDecorator(ReduxFormWrapper('storytime'))
  .addWithInfo('Default FieldSet',
  `A collection ofCheckbox field with a react-bootstrap wrapping that connects to a redux field.
   For fields and their functionality, see the
   [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
   Properties that are not required or optional for the Checkbox widget will be
   passed on to the underlying
   [react-bootstrap checkbox](https://react-bootstrap.github.io/components/forms/).
  `,
  () => (
    <FieldSet
      label={text('Label', 'Field Set Label')}
    >
      Child field: <Field component="input" name="field" />
    </FieldSet>
  ),
  storyConfig);
