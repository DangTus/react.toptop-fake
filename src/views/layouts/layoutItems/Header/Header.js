import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import Search from './Search';
import Action from './Action';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div id={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} />
                    </Link>
                </div>

                <Search />

                <Action />
            </div>
        </header>
    );
}

export default Header;
