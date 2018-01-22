import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label from '../src/Label';


storiesOf('Label', module)
  .add('with text', () => (
    <Label label="hello">Hello Button</Label>
  ))
  .add('with required', () => (
    <Label label="hello" required>Hello Button</Label>
  ));
