/* eslint-disable no-alert */
import React, {
  useState, FormEvent, useEffect, FC,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IInputProps } from '../../../types';
import getModifyPhones from './getModifyPhones';
import checkPhone from './checkPhone';
import removeNonAlphanumeric from './removeDash';
import styles from './input.module.scss';

const Input: FC<IInputProps> = ({
  name, mask, value, onChange, callBack, searchArray,
}) => {
  const [phonesForRender, setPhonesForRender] = useState([]);
  const [inputClass, setInputClass] = useState(styles.input_form);

  useEffect(() => {
    const phones = getModifyPhones(searchArray, mask);
    const filteredPhones = phones.filter(el => el.startsWith(value));
    setPhonesForRender(filteredPhones);
  }, [value]);

  const getStatusStyle = (maskForm: string, number: string) => {
    if (!value) {
      setInputClass(styles.input_form);
    } else if (!checkPhone(number, maskForm)) {
      setInputClass(styles.input_form__incorrect);
    } else if (phonesForRender.length === 0) {
      setInputClass(styles.input_form__unique);
    } else {
      setInputClass(styles.input_form);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkPhone(value, mask) || (value.length !== mask.length)) {
      alert('Please, write correct phone');
    } else if (phonesForRender.includes(value)) {
      alert('Your phone in list');
    } else if (value) {
      alert('Your phone was added');
      callBack(removeNonAlphanumeric(value));
    } else {
      alert('Please, write your phone');
    }
  };



  useEffect(() => {
    getStatusStyle(mask, value);
  }, [value]);

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={inputClass}
          value={value}
          onChange={e => onChange(e)}
          placeholder={mask}
          type="tel"
          name={name}
        />
        <button type="submit" className={styles.button}>Add phone</button>
      </form>
      <div className={styles.phones_container}>
        {value && phonesForRender.map(el => (
          <p key={uuidv4()} className={styles.phone}>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default Input;
