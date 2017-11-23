import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';

const FieldSet = ({ style, legendStyle, label, children }) => (
  <fieldset
    style={{
      padding: '.35em .625em .75em',
      margin: '0 2px',
      border: '1px solid #e5e5e5',
      ...style,
    }}
    className="form-group"
  >
    <legend style={{
      width: 'auto',
      borderBottom: '0px',
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: '1.5em',
      ...legendStyle,
    }}
    >{label}</legend>
    {children}
  </fieldset>
);


FieldSet.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  legendStyle: PropTypes.object,
};

FieldSet.defaultProps = {
  style: {},
  legendStyle: {},
};
export default FieldSet;
