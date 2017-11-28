import React from 'react';
import _ from 'lodash';

import { ControlLabel, Glyphicon } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default ({ label, required }) => {
  if (label && required) {
    return (<ControlLabel>{label}&nbsp;<small><Glyphicon glyph="asterisk" style={{ color: '#a94442' }} /></small></ControlLabel>);
  } else if (label) {
    return (<ControlLabel>{label}</ControlLabel>);
  }
  return null;
};
