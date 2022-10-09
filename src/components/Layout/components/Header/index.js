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
            <input type="search" placeholder="Tìm kiếm tài khoản hoặc video" className={clsx('search-input')} />
            <button className={clsx('search-btn')}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className={clsx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
