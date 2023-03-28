import React, { FC } from 'react';
import styles from './sheduleTableElement.module.scss';
import SheduleTableEvent from '../SheduleTableEvent/SheduleTableEvent';
import { ISheduleTableElement } from '../../types';
import getParseDate from '../../utils/getParseDate';

const SheduleTableElement: FC<ISheduleTableElement> = ({ isMeasure, date, events }) => {
  const parsedDate = getParseDate.parseDate(date);
  const {
    dateForTable,
  } = parsedDate;

  const titleStyle = isMeasure ? styles.shedule_title_measure : styles.shedule_title;

  return (
    <div className={styles.shedule_container}>
      <a className={titleStyle} href="/">
        {dateForTable}
      </a>
      <div className={styles.container}>
        {events.map(event => <SheduleTableEvent key={event.id} event={event} />)}
      </div>
    </div>
  );
};

export default SheduleTableElement;
