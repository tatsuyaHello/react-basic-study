import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return (<div>Hi {props.name}</div>);
}

Greeting.PropTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
