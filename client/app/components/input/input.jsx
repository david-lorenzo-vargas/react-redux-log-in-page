import React from 'react';
import styles from './input.scss';

const Input = (props) => {
  const { placeHolder, type } = props;

  return (
    <div className={styles.input}>
      <input className={styles.input__box} type={type} placeholder={placeHolder} />
    </div>
  );
};

export default Input;
