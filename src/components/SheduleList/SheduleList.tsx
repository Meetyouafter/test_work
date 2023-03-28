import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './sheduleList.module.scss';
import Speakers from '../Speakers/Speakers';
import Program from '../Program/Program';
import SheduleListNextDate from '../SheduleListNextDate/SheduleListNextDate';

const SheduleList = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleClick = () => setIsSubscribe(!isSubscribe);

  const date = '12 октября';
  const dayOfWeek = 'Вторник';
  const time = '14:00';

  return (
    <div className={styles.wrapper}>
      <div className={styles.shedule_container}>

        <p className={styles.shedule_title}>
          {date}
          {' | '}
          {dayOfWeek}
        </p>

        <div className={styles.shedule_body}>

          <div className={styles.event_time}>
            <p className={styles.time}>{time}</p>
            <p className={styles.zone}>мск</p>
          </div>

          <div>
            <p className={styles.shedule_body_title}>
              Круглый стол с хэдофисами НТО: новые турпродукты и триггеры
              для продвижения на туристов из России и СНГ
            </p>
            <p className={styles.shedule_body_description}>
              Официальное открытие «OTM: Зима 20/21»: онлайн-сессия с
              участием представителей туристических офисов Греции, Польши,
              Венгрии, Беларуси и Риги.
            </p>
            <Program />
          </div>

          <div className={styles.shedule_body_register_laptop}>
            <Button variant="disabled" type="long" text="добавить" onClick={handleClick} />
            <p>615 участников уже записались</p>
          </div>

        </div>

        <div className={styles.shedule_body_footer}>
          <hr className={styles.divider_mobile} />
          <div className={styles.divider}>Национальная организация туризма Кореи</div>
          <Speakers />
        </div>

        <div className={styles.shedule_body_register_mobile}>
          <Button variant="disabled" type="long" text="добавить" fullWidth onClick={handleClick} />
          <p>615 участников уже записались</p>
        </div>
      </div>
      <div className={styles.next_shedule_date}>
        <SheduleListNextDate date="13 октября" dayOfWeek="Среда" />
      </div>
    </div>
  );
};

export default SheduleList;
