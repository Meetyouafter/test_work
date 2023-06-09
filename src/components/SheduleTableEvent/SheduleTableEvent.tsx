import React, { FC, useState } from 'react';
import Button from '../shared/Button/Button';
import getParseDate from '../../utils/functions/getParseDate';
import styles from './sheduleTableEvent.module.scss';

export interface IEvent {
  time: string,
  place: string,
  description: string,
  event: boolean,
  live: boolean,
  id: string,
}
interface ISheduleTableEventProps {
  event: IEvent,
}

const SheduleTableEvent: FC<ISheduleTableEventProps> = ({ event }) => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleClick = () => setIsSubscribe(!isSubscribe);
  const parsedDate = getParseDate.parseDate(event.time);
  const { time } = parsedDate;

  const timeStyle = event.place ? styles.event_time : styles.event_time_disabled;

  return (
    <div className={styles.shedule_body}>
      <div className={styles.header}>

        {event.event ? <p className={styles.time}>{event.place}</p> : (
          <div className={timeStyle}>
            <p className={styles.time}>{time}</p>
            <p className={styles.zone}>мск</p>
          </div>
        )}

        {event.live && (
          <div className={styles.live_event}>
            <div className={styles.red_circle} />
            <p>live</p>
          </div>
        )}
      </div>

      {!event.event && <p className={styles.place}>{event.place}</p>}
      <p className={styles.description}>{event.description}</p>

      {event.event ? <button type="button" className={styles.system_button}>Перейти в систему</button> : (
        <div className={styles.button}>
          <Button variant="check" type="short" text="добавить в календарь" onClick={handleClick} />
        </div>
      )}
    </div>
  );
};

export default SheduleTableEvent;
