import React from 'react';
import styles from './input.scss';

const Input = (props) => {
  const { placeHolder, type, onChange } = props;

  const handleOnChange = () => {
    onChange();
  };

  return (
    <div className={styles.input}>
      <input
        onChange={handleOnChange}
        className={styles.input__box}
        type={type}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
