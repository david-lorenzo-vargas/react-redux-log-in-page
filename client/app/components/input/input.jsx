import React from 'react';
import styles from './input.scss';

const Input = (props) => {
  const { placeHolder } = props;
  
  return (
    <div className={styles.input}>
      <input className={styles.input__box} type="text" placeholder={placeHolder} />
    </div>
  );
};

export default Input;
