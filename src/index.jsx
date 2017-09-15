import React from 'react';
import { render } from 'react-dom';
import App from 'App';

import 'bootstrap/dist/css/bootstrap.css';
import 'style.css';

import 'manifest.json';


render(<App />,
  document.getElementById('root'), // eslint-disable-line
);
