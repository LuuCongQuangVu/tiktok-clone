import React from 'react';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';

const clsx = classNames.bind(styles);

function DefaultLayout({ children }) {
  console.log(children);
  return (
    <div className={clsx('wrapper')}>
      <Header />
      <div className={clsx('container')}>
        <SideBar />
        <div className={clsx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
