/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useState, FormEvent, useEffect, FC,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './input.module.scss';
import { IInputProps } from '../../types';

const createPattern = (format: string) => {
  const regexString = format
    .replace(/9/g, '\\d')
    .replace(/-/g, '\\-');

  return regexString;
};

const isPatternCheck = (phone: string, pattern: string) => {
  if (!phone.match(pattern)) {
    return false;
  }
  return true;
};

const removeDash = (str: string) => {
  const regex = /-/g;
  return str.replace(regex, '');
};

const Input: FC<IInputProps> = ({
  name, mask, value, onChange, callBack, searchArray,
}) => {
  const [phonesForRender, setPhonesForRender] = useState([]);
  const [inputClass, setInputClass] = useState('input_form');

  const pattern = createPattern(mask);

  const checkPhone = (maskForm: string, number: string) => {
    if (!isPatternCheck(number, maskForm)) {
      setInputClass('input_form__incorrect');
    } else if (phonesForRender.length === 0) {
      setInputClass('input_form__unique');
    } else {
      setInputClass('input_form');
      callBack(value);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.match(pattern)) {
      alert('Please, write correct phone');
    } else if (value) {
      const number = removeDash(value);
      alert('Your phone was added');
    } else {
      alert('Please, write your phone');
    }
  };

  useEffect(() => {
    const filteredPhones = searchArray.filter(el => el.startsWith(value));
    setPhonesForRender(filteredPhones);
  }, [value]);

  useEffect(() => {
    checkPhone(pattern, value);
  }, [mask, value, phonesForRender]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Please, write phone here</p>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles[inputClass]}
          value={value}
          onChange={e => onChange(e)}
          placeholder={mask}
          type="tel"
          name={name}
          pattern={pattern}
        />
        <button type="submit" className={styles.button}>Add phone</button>
      </form>
      <p>{pattern}</p>
      <div className={styles.phones_container}>
        {value && phonesForRender.map(el => (
          <p key={el.id} className={styles.phone}>{el.number}</p>
        ))}
      </div>
    </div>
  );
};

export default Input;
