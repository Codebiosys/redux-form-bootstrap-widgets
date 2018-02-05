import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';

const propTypes = {
  /** Fieldset label. */
  label: PropTypes.string.isRequired,
  /** Styling for the Fieldset. */
  style: PropTypes.object,
  /** Styling for the Fieldset label. */
  labelStyle: PropTypes.object,
  /** Child nodes for the Fieldset. */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  style: {},
  labelStyle: {},
};

class FieldSet extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    this.style = {
      padding: '.35em .625em .75em',
      margin: '0 2px',
      border: '1px solid #e5e5e5',
    };
    this.labelStyle = {
      width: 'auto',
      borderBottom: '0px',
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: '1.5em',
    };
  }
  render() {
    const { style, labelStyle, label, children } = this.props;
    return (
      <fieldset
        style={{
          ...this.style,
          ...style,
        }}
        className="form-group"
      >
        <legend style={{
          ...this.labelStyle,
          ...labelStyle,
        }}
        >{label}</legend>
        {children}
      </fieldset>
    );
  }
}

export default FieldSet;
