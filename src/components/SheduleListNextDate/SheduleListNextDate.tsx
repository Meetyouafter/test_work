import React, { FC } from 'react';
import styles from './sheduleListNextDate.module.scss';
import { ISheduleDate } from '../../types';

const SheduleListNextDate: FC<ISheduleDate> = ({ date, dayOfWeek }) => (
  <div className={styles.container}>
    <p>
      {date}
      {' | '}
      {dayOfWeek}
    </p>
  </div>
);

export default SheduleListNextDate;
