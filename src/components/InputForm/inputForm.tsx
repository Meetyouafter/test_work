import React from 'react';
import styles from './inputForm.module.scss';

const InputForm = () => {
  const d = 9;

  return (
    <div className={styles.container}>
      <p>{d}</p>
    </div>
  );
};

export default InputForm;
