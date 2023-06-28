import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to = false,
    href = false,
    fill = false,
    outline = false,
    disable = false,
    round = false,
    onClick,
    color = 'primary', // primary - black - grey
    className,
    ...passProps
}) {
    let Component = 'button';

    const props = {
        onClick: disable ? () => preventDefault() : onClick,
        ...passProps,
    };

    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', {
        fill,
        outline,
        round,
        disable,
        [color]: color,
        [className]: className,
    });

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    fill: PropTypes.bool,
    outline: PropTypes.bool,
    disable: PropTypes.bool,
    round: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'black', 'grey']),
    className: PropTypes.string,
};

export default Button;
