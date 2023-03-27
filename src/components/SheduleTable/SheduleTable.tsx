import React, { useState } from 'react';
import SheduleTableDay from '../SheduleTableDay/SheduleTableDay';
import sheduleTableData from './sheduleTableData';
import styles from './sheduleTable.module.scss';

const SheduleTable = () => {
  const [week, setWeek] = useState('first');

  const getActiveWeek = (order: string) => {
    if (week === order) {
      return styles.active_order_button;
    }
    return styles.nonactive_order_button;
  };

  return (
    <div className={styles.container}>
      <div className={styles.shedule_wrapper}>

        <div className={styles.header_wrapper}>
          <p className={styles.title}>Программа выставки</p>
          <div className={styles.shedule_select_container}>
            <span>Вид расписания:</span>
            <select className={styles.shedule_select} name="shedule" id="shedule-select">
              <option value="table">Таблица</option>
              <option value="list">Список</option>
            </select>
          </div>
        </div>

        <div className={styles.order}>
          <p>Порядок:</p>
          <button type="button" onClick={() => setWeek('first')} className={getActiveWeek('first')}>1-я неделя</button>
          <button type="button" onClick={() => setWeek('second')} className={getActiveWeek('second')}>2-я неделя</button>
          <button type="button" onClick={() => setWeek('third')} className={getActiveWeek('third')}>3-я неделя</button>
        </div>
        <div className={styles.day_conteiner}>
          {sheduleTableData
            .map(date => <SheduleTableDay key={date.date} date={date.date} events={date.events} />)}
        </div>
      </div>
    </div>
  );
};

export default SheduleTable;
