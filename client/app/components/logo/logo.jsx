import React from 'react';
import classnames from 'classnames/bind';
import styles from './logo.scss';
import logo from './aloe-logo.png';

const cx = classnames.bind(styles);

const Logo = (props) => {
  const { size, position } = props;

  return (
    <>
      <div>
        <img
          className={cx('logo', {
            [`logo--size-${size}`]: size,
            [`logo--position-${position}`]: position,
          })}
          src={logo}
          alt="logo"
        />
      </div>
    </>
  );
};

export default Logo;
