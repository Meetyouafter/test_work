import React, { FC } from 'react';
import styles from './sheduleTableDay.module.scss';
import SheduleTableTime from '../SheduleTableTime/SheduleTableTime';
import { ISheduleTableDay } from '../../types';
import getParseDate from './getParseDate';

const SheduleTableDay: FC<ISheduleTableDay> = ({ date, events }) => {
  const parsedDate = getParseDate.parseDate(date);
  const {
    dateForTable,
  } = parsedDate;

  return (
    <div className={styles.shedule_container}>
      <p className={styles.shedule_title}>
        {dateForTable}
      </p>
      <div className={styles.container}>
        {events.map(event => <SheduleTableTime key={event.id} event={event} />)}
      </div>
    </div>
  );
};

export default SheduleTableDay;
