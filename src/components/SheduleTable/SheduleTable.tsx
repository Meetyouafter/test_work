import React, { FC, useState } from 'react';
import SheduleTableElement from '../SheduleTableElement/SheduleTableElement';
import { ISheduleTableElementProps } from '../../types';
import styles from './sheduleTable.module.scss';

const SheduleTable: FC<ISheduleTableElementProps> = ({ data }) => {
  const [week, setWeek] = useState('first');

  const getActiveWeek = (order: string) => {
    if (week === order) {
      return styles.active_order_button;
    }
    return styles.nonactive_order_button;
  };

  return (
    <>
      <div className={styles.order}>
        <p>Порядок:</p>
        <button type="button" onClick={() => setWeek('first')} className={getActiveWeek('first')}>1-я неделя</button>
        <button type="button" onClick={() => setWeek('second')} className={getActiveWeek('second')}>2-я неделя</button>
        <button type="button" onClick={() => setWeek('third')} className={getActiveWeek('third')}>3-я неделя</button>
      </div>
      <div className={styles.day_conteiner}>
        {data
          .map(element => (
            <SheduleTableElement
              key={element.date}
              date={element.date}
              isMeasure={element.isMeasure}
              events={element.events}
            />
          ))}
      </div>
    </>
  );
};

export default SheduleTable;
