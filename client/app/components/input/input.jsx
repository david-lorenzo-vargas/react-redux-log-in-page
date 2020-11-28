import React from 'react';
import classnames from 'classnames/bind';
import styles from './input.scss';

const cx = classnames.bind(styles);

const Input = (props) => {
  const {
    placeHolder,
    type,
    onChange,
    value,
    wrong,
    outLine,
  } = props;

  const handleOnChange = (event) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div className={cx('input', {
      'input--wrong': wrong,
      [`input--outline-${outLine}`]: outLine,
    })}
    >
      <input
        onChange={handleOnChange}
        className={styles.input__box}
        type={type}
        placeholder={placeHolder}
        value={value}
      />
    </div>
  );
};

export default Input;
