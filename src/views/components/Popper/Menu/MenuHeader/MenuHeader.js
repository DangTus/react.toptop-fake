import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { LeftIcon } from '~/views/components/Icons';
import styles from './MenuHeader.module.scss';

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return (
        <div className={cx('menu-header')}>
            <button className={cx('menu-header-btn-back')} onClick={onBack}>
                <LeftIcon />
            </button>
            <p className={cx('menu-header-title')}>{title}</p>
        </div>
    );
}

MenuHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
};

export default MenuHeader;
