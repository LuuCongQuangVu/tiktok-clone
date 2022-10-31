import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Menu({ children }) {
  return <nav>{children}</nav>;
}

Menu.propTypes = propTypes;

export default Menu;
