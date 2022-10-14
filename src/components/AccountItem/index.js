import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Avatar from '~/components/Avatar';

const clsx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data?.username}`} className={clsx('wrapper')}>
      <Avatar
        size={40}
        src={
          data?.avatar ||
          'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5fc1836f5b4b2eb602dce826cd51af3a~c5_300x300.webp?x-expires=1665648000&x-signature=0lDsJUnXRrT%2FvQVRHQN%2F5TYnsis%3D'
        }
      />
      <div className={clsx('info')}>
        <p className={clsx('name')}>
          {data?.full_name}
          {data?.tick && (
            <span className={clsx('tick-blue')}>
              <i className="fa-solid fa-circle-check"></i>
            </span>
          )}
        </p>
        <span className={clsx('username')}>{data?.username}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
