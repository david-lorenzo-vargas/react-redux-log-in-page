import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = (props) => {
  const { theme, text, onClick } = props;

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div
      onClick={handleButtonClick}
      className={cx('button', {
        'button--blue': theme,
      })}
    >
      <span>{text}</span>
    </div>
  );
};

export default Button;
