import React, { FC } from 'react';
import styles from './sheduleDate.module.scss';
import { ISheduleDate } from '../../types';

const SheduleDate: FC<ISheduleDate> = ({ date, dayOfWeek }) => (
  <div className={styles.container}>
    <p>
      {date}
      {' | '}
      {dayOfWeek}
    </p>
  </div>
);

export default SheduleDate;
