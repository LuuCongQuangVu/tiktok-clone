import React from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const clsx = classNames.bind(styles);

function Header() {
  return (
    <header className={clsx('wrapper')}>
      <div className={clsx('inner')}>
        <div className={clsx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <div className={clsx('search')}>
          <div className={clsx('search-inner')}>
            <div>
              <input type="text" placeholder="Search accounts and video" className={clsx('search-input')} />
            </div>
            <button className={clsx('search-btn')}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className={clsx('actions')}>
          <button className={clsx('action-upload')}>
            <span className={clsx('mr-8')}>
              <i className="fa-solid fa-plus"></i>
            </span>
            Upload
          </button>
          <button className={clsx('action-login')}>Log in</button>
          <div className={clsx('action-more')}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
