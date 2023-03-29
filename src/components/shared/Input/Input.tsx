import React, {
  useState, FormEvent, useEffect, FC, ChangeEvent,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import getModifyPhones from '../../../utils/functions/getModifyPhones';
import checkPhone from '../../../utils/functions/checkPhone';
import removeNonAlphanumeric from '../../../utils/functions/removeNonAlphanumeric';
import styles from './input.module.scss';

interface InputProps {
  name: string,
  mask: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  callBack: (e: any) => void,
  searchArray: string[],
}

const Input: FC<InputProps> = ({
  name, mask, value, onChange, callBack, searchArray,
}) => {
  const [phonesForRender, setPhonesForRender] = useState([]);
  const [inputClass, setInputClass] = useState(styles.input_form);

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
    const phones = getModifyPhones(searchArray, mask);
    const filteredPhones = phones.filter(el => el.startsWith(value));
    setPhonesForRender(filteredPhones);
  }, [value]);

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
