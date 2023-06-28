import classNames from 'classnames/bind';

import {
    PlusIcon,
    LanguageIcon,
    FeedbackIcon,
    KeyboardIcon,
    LightModeIcon,
    MenuIcon,
    NotificationIcon,
    MessageIcon,
    UserIcon,
    FavoriteIcon,
    CoinIcon,
    SettingIcon,
    LogoutIcon,
} from '~/views/components/Icons';
import Button from '~/views/components/Button';
import Menu from '~/views/components/Popper/Menu';
import config from '~/config';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

const MENU_WHEN_NOT_LOG_IN = {
    items: [
        {
            icon: <LanguageIcon />,
            name: 'Tiếng Việt',
            children: {
                title: 'Ngôn ngữ',
                items: [
                    {
                        id: 'vi',
                        name: 'Tiếng Việt',
                    },
                    {
                        id: 'en',
                        name: 'English',
                    },
                ],
            },
        },
        {
            icon: <FeedbackIcon />,
            name: 'Phản hồi và trợ giúp',
            to: config.routes.feedback,
        },
        {
            icon: <KeyboardIcon />,
            name: 'Phím tắt trên bàn phím',
        },
        {
            icon: <LightModeIcon />,
            name: 'Chế độ tối',
            switch: true,
        },
    ],
};

const MENU_WHEN_LOG_IN = {
    items: [
        {
            icon: <UserIcon />,
            name: 'Xem hồ sơ',
            to: '/dvhtu',
        },
        {
            icon: <FavoriteIcon />,
            name: 'Yêu thích',
            to: '/dvhtu',
        },
        {
            icon: <CoinIcon />,
            name: 'Nhận xu',
            to: config.routes.coin,
        },
        {
            icon: <SettingIcon />,
            name: 'Cài đặt',
            to: config.routes.setting,
        },
        ...MENU_WHEN_NOT_LOG_IN.items,
        {
            icon: <LogoutIcon />,
            name: 'Đăng xuất',
            onclick: () => {},
        },
    ],
};

function Action() {
    const currentUser = true;

    return (
        <div className={cx('action')}>
            <Button className={cx('btn-upload')} outline color="black" to={config.routes.upload}>
                <PlusIcon />
                <span>Tải lên</span>
            </Button>

            {currentUser ? (
                <>
                    <Button className={cx('btn-default')} color="black" to={config.routes.message}>
                        <MessageIcon />
                    </Button>

                    <Button className={cx('btn-default')} color="black">
                        <NotificationIcon />
                        <sup className={cx('sup-badge')}>1</sup>
                    </Button>
                </>
            ) : (
                <>
                    <Button className={cx('btn-login')} fill color="primary">
                        <span>Đăng nhập</span>
                    </Button>
                </>
            )}

            <Menu items={currentUser ? MENU_WHEN_LOG_IN : MENU_WHEN_NOT_LOG_IN}>
                <div className={cx('btn-more-wrapper')}>
                    <Button className={cx('btn-more')} color="black">
                        {currentUser ? (
                            <img
                                className={cx('avatar-user')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/080b19842b8755b4d33b4110e5ca009d.jpeg?x-expires=1688047200&x-signature=INFBd64CbyosxRggjzQGO7D2%2FZc%3D"
                            />
                        ) : (
                            <MenuIcon />
                        )}
                    </Button>
                </div>
            </Menu>
        </div>
    );
}

export default Action;
