import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({ header = false, className, children }) {
    return (
        <div className={cx('wrapper', className)}>
            {header && <>{header}</>}
            <ul
                className={cx('content', {
                    'has-header': header,
                })}
            >
                {children}
            </ul>
        </div>
    );
}

Popper.propTypes = {
    header: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Popper;
