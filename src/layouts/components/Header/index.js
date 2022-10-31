import React from 'react';
import Tooltip from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Menu as PopperMenu } from '~/components/Popper';
import Button from '~/components/Button';
import Avatar from '~/components/Avatar';
import Search from '~/layouts/components/Search';
import config from '~/config';

const clsx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: 'fa-solid fa-language',
    text: 'English',
    children: {
      title: 'Language',
      data: [
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
        { code: 'en', text: 'English' },
        { code: 'vi', text: 'Vietnamese' },
      ],
    },
  },
  { icon: 'fa-solid fa-comment', text: 'Feedback and help', to: '/feedback' },
  { icon: 'fa-solid fa-keyboard', text: 'Keyboard shortcuts' },
];

function Header() {
  const currentUser = true;
  const handleMenuChange = () => {};

  const userMenu = [
    { icon: 'fa-solid fa-user', text: 'Views profile', to: '/@vuluu2k' },
    { icon: 'fa-solid fa-coins', text: 'Get coins', to: '/coins' },
    { icon: 'fa-solid fa-gear', text: 'Settings', to: '/settings' },
    ...MENU_ITEMS,
    { icon: 'fa-solid fa-right-from-bracket', text: 'Log out', to: '/', separate: true },
  ];

  return (
    <header className={clsx('wrapper')}>
      <div className={clsx('inner')}>
        <Link to={config.routes.home} className={clsx('logo-link')}>
          <div className={clsx('logo')}>
            <img src={images.logo} alt="tiktok" />
          </div>
        </Link>
        {/* Search */}
        <Search />

        <div className={clsx('actions')}>
          {currentUser ? (
            <>
              <Button icon={<i className="fa-solid fa-plus"></i>} text>
                Upload
              </Button>
              <Tooltip content="Messages">
                <button>
                  <i className="fa-regular fa-paper-plane fz-24 p-16"></i>
                </button>
              </Tooltip>
              <Tooltip content="Inbox">
                <button>
                  <i className="fa-regular fa-message fz-24 p-16"></i>
                </button>
              </Tooltip>
            </>
          ) : (
            <>
              <Button icon={<i className="fa-solid fa-plus"></i>} text>
                Upload
              </Button>

              <Button primary>Log in</Button>
            </>
          )}
          <PopperMenu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <div className="d-flex align-items-center justify-content-center">
                <Avatar size={32} />
              </div>
            ) : (
              <div className={clsx('action-more')}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            )}
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
