import React, { useState, useRef, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import { search } from '~/apiServices/searchService';

const clsx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef(null);
  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    async function searchApi() {
      const response = await search(debounced);
      setSearchResult(response);
    }
    if (debounced.trim()) {
      searchApi();
    } else {
      setSearchResult([]);
      return;
    }
  }, [debounced]);

  const handleChangeInputSearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(' ')) return;
    setSearchValue(searchValue);
  };
  const handleSearchSubmit = () => {};
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
                onChange={handleChangeInputSearch}
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
            <button className={clsx('search-btn')} onClick={handleSearchSubmit}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
