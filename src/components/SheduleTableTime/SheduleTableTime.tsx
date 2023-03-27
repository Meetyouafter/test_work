import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './sheduleTableTime.module.scss';
import { ISheduleTableTime } from '../../types';
import getParseDate from '../SheduleTableDay/getParseDate';

const SheduleTableTime: FC<ISheduleTableTime> = ({ event }) => {
  const parsedDate = getParseDate.parseDate(event.time);
  const { time } = parsedDate;

  return (
    <div className={styles.shedule_body}>
      <div className={styles.event_time}>
        <p className={styles.time}>{time}</p>
        <p className={styles.zone}>мск</p>
      </div>
      <p className={styles.place}>{event.place}</p>
      <p className={styles.description}>{event.description}</p>
      <Button variant="disabled" type="short" text="добавить в календарь" />
    </div>
  );
};

export default SheduleTableTime;
