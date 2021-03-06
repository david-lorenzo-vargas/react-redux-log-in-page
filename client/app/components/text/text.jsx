import React from 'react';
import classnames from 'classnames/bind';
import styles from './text.scss';

const cx = classnames.bind(styles);

const Text = (props) => {
  const {
    text,
    bold,
    theme,
    size,
    type,
    cursive,
    link,
    underLine,
    center,
    margin,
    onClick,
  } = props;

  const handleStartRegisterButtonClick = () => {
    onClick();
  };

  return (
    <div className={cx('text', {
      'text--bold': bold,
      [`text--theme-${theme}`]: theme,
      [`text--size-${size}`]: size,
      [`text--type-${type}`]: type,
      'text--cursive': cursive,
      'text--link': link,
      'text--underline': underLine,
      'text--center': center,
      'text--margin': margin,
    })}
    >
      <span onClick={handleStartRegisterButtonClick}>{text}</span>
    </div>
  );
};

export default Text;
