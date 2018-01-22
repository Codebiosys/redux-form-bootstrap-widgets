import React from 'react';
import PropTypes from 'prop-types';

import { ControlLabel, Glyphicon } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const Label = ({ label, required }) => {
  if (label && required) {
    return (<ControlLabel>{label}&nbsp;<small><Glyphicon glyph="asterisk" style={{ color: '#a94442' }} /></small></ControlLabel>);
  } else if (label) {
    return (<ControlLabel>{label}</ControlLabel>);
  }
  return null;
};

Label.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
};

Label.defaultProps = {
  label: '',
  required: false,
};

export default Label;
