import React, { useState, FC, ChangeEvent } from 'react';
import Input from '../shared/Input/Input';
import phones from '../../utils/data/phones';
import styles from './inputPage.module.scss';

const InputPage: FC = () => {
  const [phonesForCheck, setPhonesForCheck] = useState(phones);
  const [phone, setPhone] = useState<string>('');

  const callBack = (e: any) => {
    setPhonesForCheck([...phonesForCheck, e]);
    setPhone('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Please, write phone here</p>
      <Input
        name="phone"
        mask="999-999-999"
        value={phone}
        onChange={onChange}
        callBack={callBack}
        searchArray={phonesForCheck}
      />
    </div>
  );
};

export default InputPage;
