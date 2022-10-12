import React, { useState, useRef, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';

const clsx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef(null);
  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debounced.trim()) {
      axios(`https://tiktok.fullstack.edu.vn/api/users/search`, { params: { q: debounced, type: 'less' } })
        .then((res) => {
          setSearchResult(res.data.data);
        })
        .catch((error) => console.log(error));
    } else {
      setSearchResult([]);
      return;
    }
  }, [debounced]);

  const handleHiddenResult = () => setShowResult(false);
  const handleShowResult = () => setShowResult(true);

  return (
    <div>
      <Tippy
        visible={showResult && searchResult?.length > 0}
        interactive
        onClickOutside={handleHiddenResult}
        render={(attrs) => (
          <div className={clsx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={clsx('search-title')}>Accounts</h4>
              {searchResult?.map((result, index) => (
                <AccountItem data={result} key={index} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={clsx('search')}>
          <div className={clsx('search-inner')} style={{ position: 'relative' }}>
            <div>
              <input
                type="text"
                ref={inputRef}
                value={searchValue}
                onFocus={handleShowResult}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search accounts and video"
                className={clsx('search-input')}
              />
              {searchValue && (
                <i
                  onClick={() => {
                    setSearchValue('');
                    setSearchResult([]);
                    inputRef?.current?.focus();
                  }}
                  className="fa-solid fa-circle-xmark"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: 55,
                    fontSize: 14,
                    color: 'rgba(22, 24, 35, 0.34)',
                  }}
                ></i>
              )}
            </div>
            <button className={clsx('search-btn')}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
