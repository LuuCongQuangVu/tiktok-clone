import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const clsx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

function MenuItem({ title, to, icon }) {
  return (
    <NavLink className={(nav) => clsx('menu-item', { active: nav.isActive })} to={to} end>
      {icon} <span className={clsx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = propTypes;

export default MenuItem;
