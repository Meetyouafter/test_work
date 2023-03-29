import React, { FC } from 'react';
import getParseDate from '../../utils/functions/getParseDate';
import SheduleTableEvent, { IEvent } from '../SheduleTableEvent/SheduleTableEvent';
import styles from './sheduleTableElement.module.scss';

export interface SheduleTableDataProps {
  date: string,
  isMeasure: boolean,
  events: IEvent[],
}
export interface SheduleTableElementProps {
  data: SheduleTableDataProps[],
}

const SheduleTableElement: FC<SheduleTableDataProps> = ({ isMeasure, date, events }) => {
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
