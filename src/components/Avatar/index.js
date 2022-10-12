import React from 'react';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import images from '~/assets/images';

const clsx = classNames.bind(styles);

function Avatar({ src, size }) {
  return <img className={clsx('avatar')} src={src || images.noAvatar} alt="Avatar" width={size} height={size} />;
}

export default Avatar;
