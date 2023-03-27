/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useState, ChangeEvent, FormEvent, useEffect, useRef,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './inputForm.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addPhone } from '../../store/reducers/phones';

interface IPhone {
  number: string,
  id: string,
}

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

const InputForm = () => {
  const [phone, setPhone] = useState('');
  const [phonesForRender, setPhonesForRender] = useState([]);
  const [inputClass, setInputClass] = useState('input_form');
  const phones = useAppSelector(state => state.phones.phones);
  const dispatch = useAppDispatch();

  const inputRef = useRef(null);

  const maskForm = '999-99';
  const pattern = createPattern(maskForm);

  const checkPhone = (mask: string, number: string) => {
    if (!isPatternCheck(number, mask)) {
      setInputClass('input_form__incorrect');
    } else if (phonesForRender.length === 0) {
      setInputClass('input_form__unique');
    } else {
      setInputClass('input_form');
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPhone(newValue);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone.match(pattern)) {
      alert('Please, write correct phone');
    } else if (phone) {
      const number = removeDash(phone);
      dispatch(addPhone({ number, id: uuidv4() }));
      setPhone('');
      alert('Your phone was added');
    } else {
      alert('Please, write your phone');
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const filteredPhones = phones.filter(el => el.number.startsWith(phone));
    setPhonesForRender(filteredPhones);
  }, [phone]);

  useEffect(() => {
    checkPhone(pattern, phone);
  }, [maskForm, phone, phonesForRender]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Please, write phone here</p>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles[inputClass]}
          value={phone}
          ref={inputRef}
          onChange={e => onChange(e)}
          placeholder={maskForm}
          type="tel"
          pattern={pattern}
        />
        <button type="submit" className={styles.button}>Add phone</button>
      </form>
      <p>{pattern}</p>
      <div className={styles.phones_container}>
        {phone && phonesForRender.map((el: IPhone) => (
          <p key={el.id} className={styles.phone}>{el.number}</p>
        ))}
      </div>
    </div>
  );
};

export default InputForm;
