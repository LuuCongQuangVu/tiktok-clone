import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { defaultFn } from '~/utils';

const clsx = classNames.bind(styles);

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const handleOnBack = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };
  const renderItems = () => {
    return current?.data?.map((item, index) => {
      const isParent = !!item.children;
      const handleOnClick = () => {
        if (isParent) setHistory((prev) => [...prev, item.children]);
        else onChange(item);
      };

      return <MenuItem data={item} key={index} onClick={handleOnClick} />;
    });
  };

  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={clsx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history?.length > 1 && <Header title={current?.title} onBack={handleOnBack} />}

            <div className="d-flex flex-column">{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
