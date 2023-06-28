import { Header, SideBar } from '../layoutItems';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('main')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
