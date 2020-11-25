import React from 'react';
import classnames from 'classnames/bind';
import styles from './text.scss';

// const cx = classnames.bind(styles);

const Text = (props) => {
  const { text } = props;

  return (
    <div>
      <span>{text}</span>
    </div>
  );
};

export default Text;
