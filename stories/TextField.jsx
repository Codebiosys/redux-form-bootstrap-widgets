import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import TextField from '../src/TextField';
import ReduxFormWrapper from '../.storybook/ReduxForm';

const storyConfig = {
  propTables: [TextField],
  propTablesExclude: [FormControl, Field],
};

storiesOf('TextField', module)
.addDecorator(withKnobs)
.addDecorator(ReduxFormWrapper('storytime'))
.addWithInfo('Default Text Field',
`A Text field with a react-bootstrap wrapping that connects to a redux field.
 For fields and their functionality, see the
 [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
 Properties that are not required or optional for the TextField widget will be
 passed on to the underlying
 [react-bootstrap formcontrol](https://react-bootstrap.github.io/components/forms/).
`,
  () => (
    <Field
      name="fieldName"
      component={TextField}
      label={text('Label', 'Text Field Label')}
      required={boolean('Required', false)}
      disabled={boolean('Disabled', false)}
      helpText={text('Help Text', 'Help text for the widget')}
      type="text"
    />
  ),
  storyConfig);

storiesOf('TextField', module)
  .addDecorator(withKnobs)
  .addDecorator(
    ReduxFormWrapper(
      'TextFieldInitialValues',
      { fieldName: 'Initial Data' },
    ))
  .addWithInfo('Text Field With Initial initialValues',
  'A Description',
    () => (
      <Field
        name="fieldName"
        component={TextField}
        label={text('Label', 'Text Field Label')}
        required={boolean('Required', false)}
        disabled={boolean('Disabled', false)}
        helpText={text('Help Text', 'Help text for the widget')}
        type="text"
      />
    ),
  storyConfig)
  .addWithInfo('with required validation',
  'A Description',
    () => (
      <Field
        name="fieldName"
        component={TextField}
        label={text('Label', 'Text Field Label')}
        required
        validate={value => (value ? undefined : 'Required')}
        disabled={boolean('Disabled', false)}
        helpText={text('Help Text', '')}
        type="text"
      />
    ),
  storyConfig)
  .addWithInfo('with required validation and help text',
  'A Description',
    () => (
      <Field
        name="fieldName"
        component={TextField}
        label={text('Label', 'Text Field Label')}
        required
        validate={value => (value ? undefined : 'Required')}
        disabled={boolean('Disabled', false)}
        helpText={text('Help Text', 'Help text for the widget')}
        type="text"
      />
    ),
  storyConfig)
  .addWithInfo('with debounce delay',
  'A Description',
    () => (
      <Field
        name="fieldName"
        component={TextField}
        label={text('Label', 'Text Field Label')}
        required
        validate={value => (value ? undefined : 'Required')}
        disabled={boolean('Disabled', false)}
        helpText={text('Help Text', 'Help text for the widget')}
        type="text"
        delay={500}
      />
    ),
  storyConfig);


storiesOf('TextField', module)
    .addDecorator(withKnobs)
    .addDecorator(
      ReduxFormWrapper(
        'TextFieldAddOns',
      ))
    .addWithInfo('Text Field With Add Ons',
    'A Description',
      () => (
        <Field
          name="fieldName"
          component={TextField}
          label={text('Label', 'Text Field Label')}
          required={boolean('Required', false)}
          disabled={boolean('Disabled', false)}
          helpText={text('Help Text', 'Help text for the widget')}
          type="text"
          addOnBefore={<InputGroup.Button>
            <Button>Before</Button>
          </InputGroup.Button>}
        />
      ),
    storyConfig);
