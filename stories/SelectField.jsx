import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import ReduxFormWrapper from '../.storybook/ReduxForm';

import SelectField from '../src/SelectField';

const storyConfig = {
  propTables: [SelectField],
  propTablesExclude: [Field],
};

storiesOf('SelectField', module)
  .addDecorator(withKnobs)
  .addDecorator(ReduxFormWrapper('storytime'))
  .addWithInfo('Default Select Field',
  `A Select Field field with a react-bootstrap wrapping that connects to a redux field.
   For fields and their functionality, see the
   [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
   Properties that are not required or optional for the Checkbox widget will be
   passed on to the underlying
   [react-select](http://jedwatson.github.io/react-select/).
  `,
  () => (
    <Field
      name="fieldName"
      component={SelectField}
      label={text('Label', 'Radio Field Label')}
      required={boolean('Required', false)}
      disabled={boolean('Disabled', false)}
      helpText={text('Help Text', 'Help text for the widget')}
      options={[
                { label: 'one', value: 1 },
                { label: 'two', value: 2 },
                { label: 'three', value: 3 },
      ]}
    />
  ),
  storyConfig);

storiesOf('SelectField', module)
    .addDecorator(withKnobs)
    .addDecorator(ReduxFormWrapper('storytime'))
    .addWithInfo('Multi Select Field',
    `A Select Field field with a react-bootstrap wrapping that connects to a redux field.
     For fields and their functionality, see the
     [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
     Properties that are not required or optional for the Checkbox widget will be
     passed on to the underlying
     [react-select](http://jedwatson.github.io/react-select/).
    `,
    () => (
      <Field
        name="fieldName"
        component={SelectField}
        label={text('Label', 'Radio Field Label')}
        required={boolean('Required', false)}
        disabled={boolean('Disabled', false)}
        multiple
        helpText={text('Help Text', 'Help text for the widget')}
        options={[
                  { label: 'one', value: 1 },
                  { label: 'two', value: 2 },
                  { label: 'three', value: 3 },
        ]}
      />
    ),
    storyConfig);


storiesOf('SelectField', module)
        .addDecorator(withKnobs)
        .addDecorator(ReduxFormWrapper('storytime'))
        .addWithInfo('Async Select Field',
        `A Select Field field with a react-bootstrap wrapping that connects to a redux field.
         For fields and their functionality, see the
         [redux-form documentation](https://redux-form.com/7.2.1/docs/api/field.md/).
         Properties that are not required or optional for the Checkbox widget will be
         passed on to the underlying
         [react-select](http://jedwatson.github.io/react-select/).

         Example callback (see Select.Async on react-select for details)
         const options = (input, callback) => {
           setTimeout(() => {
             callback(null, {
               options: [
                 { label: 'one', value: 1 },
                 { label: 'two', value: 2 },
                 { label: 'three', value: 3 },
               ],
         // CAREFUL! Only set this to true when there are no more options,
         // or more specific queries will not be sent to the server.
               complete: true,
             });
           }, 500);
         }

        `,
        () => (
          <Field
            name="fieldName"
            component={SelectField}
            label={text('Label', 'Radio Field Label')}
            required={boolean('Required', false)}
            disabled={boolean('Disabled', false)}
            helpText={text('Help Text', 'Help text for the widget')}
            options={(input, callback) => {
              setTimeout(() => {
                callback(null, {
                  options: [
                    { label: 'one', value: 1 },
                    { label: 'two', value: 2 },
                    { label: 'three', value: 3 },
                  ],
                  complete: true,
                });
              }, 500);
            }}
          />
        ),
        storyConfig);
