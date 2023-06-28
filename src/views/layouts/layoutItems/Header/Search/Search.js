import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';

import * as httpRequest from '~/utils/httpRequest';
import { SearchIcon } from '~/views/components/Icons';
import PopperWrapper from '~/views/components/Popper';
import AccountItem from '~/views/components/AccountItem';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchKey, setSearchKey] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debounceSearchKey = useDebounce(searchKey, searchKey ? 500 : 0);
    const inputRef = useRef();

    const hideSearchResult = () => {
        setShowSearchResult(false);
    };

    const handleChangeSearchKey = (e) => {
        setSearchKey(e.target.value.trimStart());
        setShowSearchResult(true);
    };

    const clearSearch = () => {
        setSearchKey('');
        inputRef.current.focus();
    };

    const handleClickAccountItem = () => {
        setShowSearchResult(false);
    };

    const renderSearchResult = (attrs) => (
        <div className={cx('search-suggest')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('search-suggest-popper')}>
                <div className={cx('search-suggest-title')}>Tài Khoản</div>
                {searchResult.map((item) => {
                    return <AccountItem key={item.id} data={item} onClick={handleClickAccountItem} />;
                })}
            </PopperWrapper>
        </div>
    );

    useEffect(() => {
        if (!debounceSearchKey.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            try {
                const result = await httpRequest.get('/users/search', {
                    params: {
                        q: debounceSearchKey,
                        type: 'less',
                    },
                });

                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                console.log(`Fail to call API: ${error}`);
            }
        };

        fetchApi();
    }, [debounceSearchKey]);

    return (
        <Tippy
            visible={searchResult.length > 0 && showSearchResult}
            placement="bottom"
            appendTo={document.body}
            interactive
            onClickOutside={hideSearchResult}
            render={renderSearchResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Tìm Kiếm"
                    value={searchKey}
                    onChange={handleChangeSearchKey}
                    onFocus={() => setShowSearchResult(true)}
                />

                {searchKey && !loading && (
                    <button className={cx('btn-clear')} onClick={clearSearch}>
                        <i className="fa-solid fa-circle-xmark" />
                    </button>
                )}

                {loading && <i className={cx('fa-solid fa-circle-notch', 'icon-load')} />}

                <span />

                <button className={cx('btn-search')}>
                    <SearchIcon />
                    {/* <i className="fa-solid fa-magnifying-glass" /> */}
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
