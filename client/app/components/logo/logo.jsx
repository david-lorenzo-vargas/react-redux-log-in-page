import React from 'react';
import classnames from 'classnames/bind';
import styles from './logo.scss';

const cx = classnames.bind(styles);

const Logo = (props) => {
  const { size } = props;

  return (
    <div className={cx('logo', {
      [`logo--size-${size}`]: size,
    })}
    >
      <img src="img/800px_COLOURBOX36825955.png" alt="logo" />
    </div>
  );
};

export default Logo;
