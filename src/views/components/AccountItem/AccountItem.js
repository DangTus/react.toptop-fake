import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    const handleLoadFailImage = (e) => {
        e.target.src = images.userDefault;
    };

    return (
        <li>
            <Link to={`/${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
                <img src={data.avatar} className={cx('avatar')} alt={data.full_name} onError={handleLoadFailImage} />

                <div className={cx('info')}>
                    <h4 className={cx('user-name')}>
                        {data.nickname}
                        {data.tick && <i className="fa-solid fa-circle-check" />}
                    </h4>
                    <p className={cx('name')}>{data.full_name}</p>
                </div>
            </Link>
        </li>
    );
}

AccountItem.propTypes = {
    data: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        tick: PropTypes.bool.isRequired,
        full_name: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
};

export default AccountItem;
