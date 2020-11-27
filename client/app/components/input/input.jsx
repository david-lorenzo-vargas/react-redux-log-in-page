import React from 'react';
import styles from './input.scss';

const Input = (props) => {
  const {
    placeHolder,
    type,
    onChange,
    value,
  } = props;

  const handleOnChange = (event) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div className={styles.input}>
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
