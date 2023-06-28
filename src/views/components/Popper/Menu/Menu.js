import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import PopperWrapper from '../';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    const [menuItemHistory, setMenuItemHistory] = useState([items]);

    const current = menuItemHistory[menuItemHistory.length - 1];

    const handleShowMenu = () => {
        document.body.style.overflow = 'hidden';
    };

    const handleHideMenu = () => {
        setMenuItemHistory((prev) => prev.slice(0, 1));
        document.body.style.overflow = 'auto';
    };

    const menuHeader = current.title && (
        <MenuHeader
            title={current.title}
            onBack={() => {
                setMenuItemHistory((prev) => prev.slice(0, menuItemHistory.length - 1));
            }}
        />
    );

    const listMenuItem = current.items.map((item, index) => {
        const isParent = !!item.children;

        return (
            <MenuItem
                key={index}
                to={item.to}
                href={item.href}
                onClick={() => {
                    if (isParent) {
                        setMenuItemHistory((prev) => [...prev, item.children]);
                    }
                }}
            >
                {item}
            </MenuItem>
        );
    });

    return (
        <Tippy
            placement="bottom"
            interactive
            onShow={handleShowMenu}
            onHide={handleHideMenu}
            hideOnClick={false}
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')} header={menuHeader}>
                        {listMenuItem}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Menu;
