import React, { FC } from 'react';
import styles from './sheduleListNextDate.module.scss';
import { ISheduleDateProps } from '../../types';

const SheduleListNextDate: FC<ISheduleDateProps> = ({ date, dayOfWeek }) => (
  <div className={styles.container}>
    <p>
      {date}
      {' | '}
      {dayOfWeek}
    </p>
  </div>
);

export default SheduleListNextDate;
