import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SideBar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from '~/layouts/DefaultLayout/SideBar/Menu';
import Avatar from '~/components/Avatar';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const clsx = classNames.bind(styles);

const dataTest = [
  { username: 'vuluu2k', full_name: 'Lưu Công Quang Vũ' },
  { username: 'vuluu2k', full_name: 'Lưu Công Quang Vũ' },
  { username: 'vuluu2k', full_name: 'Lưu Công Quang Vũ' },
  { username: 'vuluu2k', full_name: 'Lưu Công Quang Vũ' },
];

function SideBar() {
  return (
    <aside className={clsx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<i className="fa-solid fa-house"></i>}></MenuItem>
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<i className="fa-solid fa-user-group"></i>}
        ></MenuItem>
        <MenuItem title="Live" to={config.routes.live} icon={<i className="fa-brands fa-youtube"></i>}></MenuItem>
      </Menu>
      <MenuAvatar title="Suggested accounts" data={dataTest} />
      <MenuAvatar title="Following accounts" data={dataTest} />
    </aside>
  );
}

function MenuAvatar({ title, data }) {
  return (
    <div className={clsx('wrapper-menu-avatar')}>
      <div className={clsx('title')}>{title}</div>
      {data.map((item, index) => {
        return <MenuAvatarItem key={index} userName={item.username} fullName={item.full_name} />;
      })}
      <button className={clsx('see-all-btn')}>See all</button>
    </div>
  );
}

function MenuAvatarItem({ userName, fullName, tick }) {
  return (
    <div>
      <Tippy
        interactive
        delay={[1000, 0]}
        placement="bottom-start"
        offset={[-10, 0]}
        render={(attrs) => (
          <div {...attrs} tabIndex="-1">
            <PopperWrapper>
              <div className={clsx('tippy-wrapper')}>
                <div className="d-flex justify-content-between align-items-center">
                  <Avatar size={40} />
                  <Button primary>Follow</Button>
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>
                    {userName}
                    {tick && (
                      <span className={clsx('tick-blue')}>
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 14, color: 'rgba(22, 24, 35, 0.75)' }}>{fullName}</div>
                </div>
                <div className="d-flex">
                  <div className="mr-12">
                    <strong>7.1M</strong>
                    <span className="ml-4">Follower</span>
                  </div>
                  <div>
                    <strong>5.2M</strong>
                    <span className="ml-4">Likes</span>
                  </div>
                </div>
              </div>
            </PopperWrapper>
          </div>
        )}
      >
        <div className={clsx({ 'd-flex align-items-center p-8': true }, 'menu-avatar-item')}>
          <Avatar size={32} />
          <div className="ml-12">
            <div style={{ fontSize: 16, fontWeight: 700 }}>
              {userName}
              {tick && (
                <span className={clsx('tick-blue')}>
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              )}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(22, 24, 35, 0.75)' }}>{fullName}</div>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default SideBar;
