import React, { FC } from 'react';
import styles from './sheduleListNextDate.module.scss';

interface SheduleDateProps {
  date: string,
}

const SheduleListNextDate: FC<SheduleDateProps> = ({ date }) => (
  <div className={styles.container}>
    <p>{date}</p>
  </div>
);

export default SheduleListNextDate;
