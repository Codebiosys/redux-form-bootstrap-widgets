import React from 'react';
import { configure, setAddon, addDecorator  } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import ReduxFormWrapper from './ReduxForm';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

setDefaults({
  inline: true,
  // maxPropsIntoLine: 1,
  // maxPropObjectKeys: 10,
  // maxPropArrayLength: 10,
  // maxPropStringLength: 100,
});

setAddon(infoAddon);

const req = require.context('../stories', true, /\.jsx$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
