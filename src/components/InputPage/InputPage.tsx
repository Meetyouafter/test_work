import React, { useState, FC, ChangeEvent } from 'react';
import Input from '../shared/Input/Input';

const InputPage: FC = () => {
  const [phone, setPhone] = useState<string>('');

  const callBack = (e: any) => {
    console.log('Adding phone number');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <Input
        name="phone"
        mask="999-999-999"
        value={phone}
        onChange={onChange}
        callBack={callBack}
        searchArray={[
          '89025671544',
          '89015648559',
          '89456158789',
          '89761954815',
          '89027894156',
          '89481526487',
          '89564819448',
        ]}
      />
    </div>
  );
};

export default InputPage;
