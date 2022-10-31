import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Divider.module.scss';

const clsx = classNames.bind(styles);

const propTypes = {};

function Divider(props) {
  return <div className={clsx('wrapper')} {...props}></div>;
}

Divider.propTypes = propTypes;

export default Divider;
