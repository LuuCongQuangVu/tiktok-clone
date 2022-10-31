import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Avatar from '~/components/Avatar';

const clsx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data?.nickname}`} className={clsx('wrapper')}>
      <Avatar size={40} src={data?.avatar} />
      <div className={clsx('info')}>
        <p className={clsx('name')}>
          {data?.full_name}
          {data?.tick && (
            <span className={clsx('tick-blue')}>
              <i className="fa-solid fa-circle-check"></i>
            </span>
          )}
        </p>
        <span className={clsx('username')}>{data?.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
