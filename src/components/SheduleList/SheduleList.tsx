import React, { FC, useState } from 'react';
import Button from '../shared/Button/Button';
import SpeakerList from '../SpeakerList/SpeakerList';
import Program from '../Program/Program';
import SheduleListNextDate from '../SheduleListNextDate/SheduleListNextDate';
import { ISheduleListElementProps } from '../../types';
import getParseDate from '../../utils/functions/getParseDate';
import styles from './sheduleList.module.scss';

const SheduleList: FC<ISheduleListElementProps> = ({ data }) => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const {
    date, title, description, organization, participants,
  } = data;
  const nextDate = '13 октября | Пятница';

  const parsedDate = getParseDate.parseDate(date);
  const {
    dateForList, time,
  } = parsedDate;

  const handleClick = () => setIsSubscribe(!isSubscribe);

  return (
    <div className={styles.wrapper}>
      <div className={styles.shedule_container}>

        <p className={styles.shedule_title}>
          {dateForList}
        </p>

        <div className={styles.shedule_body}>

          <div className={styles.event_time}>
            <p className={styles.time}>{time}</p>
            <p className={styles.zone}>мск</p>
          </div>

          <div className={styles.links}>
            <a className={styles.shedule_body_title} href="/">
              {title}
            </a>
            <a className={styles.shedule_body_description} href="/">
              {description}
            </a>
            <Program />
          </div>

          <div className={styles.shedule_body_register_laptop}>
            <Button variant="check" type="long" text="добавить" onClick={handleClick} />
            <p>615 участников уже записались</p>
          </div>

        </div>

        <div className={styles.shedule_body_footer}>
          <hr className={styles.divider_mobile} />
          <div className={styles.divider}>{organization}</div>
          <SpeakerList />
        </div>

        <div className={styles.shedule_body_register_mobile}>
          <Button variant="check" type="long" text="добавить" fullWidth onClick={handleClick} />
          <p>{participants}</p>
        </div>
      </div>
      <div className={styles.next_shedule_date}>
        <SheduleListNextDate date={nextDate} />
      </div>
    </div>
  );
};

export default SheduleList;
