import React from 'react';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';

const clsx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={clsx('wrapper')}>
      <h2>SideBar</h2>
    </aside>
  );
}

export default SideBar;
