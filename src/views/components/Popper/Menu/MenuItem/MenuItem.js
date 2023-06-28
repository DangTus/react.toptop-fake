import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/views/components/Button';
import Switch from '~/views/components/Switch';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ children, onClick, to, href }) {
    return (
        <li className={cx('menu-item-wrapper')} onClick={onClick}>
            <Button className={cx('menu-item')} to={to} href={href}>
                {children.icon}
                <span>{children.name}</span>
            </Button>

            {children.switch && <Switch />}
        </li>
    );
}

MenuItem.propTypes = {
    children: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    to: PropTypes.string,
    href: PropTypes.string,
};

export default MenuItem;
