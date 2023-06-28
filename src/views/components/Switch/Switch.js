import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

function Switch({ mode = 'off' }) {
    const [switchMode, setSwitchMode] = useState(mode);

    const changeMode = () => {
        setSwitchMode((pre) => (pre === 'on' ? 'off' : 'on'));
    };

    return (
        <button className={cx('wrapper')} onClick={changeMode}>
            <div className={cx('switch-wrapper', switchMode)}>
                <span className={cx('switch-icon', switchMode)} />
            </div>
        </button>
    );
}

Switch.propTypes = {
    mode: PropTypes.string,
};

export default Switch;
