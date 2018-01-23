import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';

const FieldSet = ({ style, labelStyle, label, children }) => (
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
      ...labelStyle,
    }}
    >{label}</legend>
    {children}
  </fieldset>
);


FieldSet.propTypes = {
  /** Fieldset label. */
  label: PropTypes.string.isRequired,
  /** Styling for the Fieldset. */
  style: PropTypes.object,
  /** Styling for the Fieldset label. */
  labelStyle: PropTypes.object,
  /** Child nodes for the Fieldset. */
  children: PropTypes.node.isRequired,
};

FieldSet.defaultProps = {
  style: {},
  labelStyle: {},
};
export default FieldSet;
