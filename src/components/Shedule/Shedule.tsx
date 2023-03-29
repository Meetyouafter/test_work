import React, { useState, useEffect } from 'react';
import SheduleTable from '../SheduleTable/SheduleTable';
import SheduleList from '../SheduleList/SheduleList';
import styles from './shedule.module.scss';
import sheduleListData from '../../utils/data/sheduleListData';
import sheduleTableData from '../../utils/data/sheduleTableData';

const Shedule = () => {
  const [view, setView] = useState('list');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => setView(e.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.shedule_wrapper}>

        <div className={styles.header_wrapper}>
          <p className={styles.title}>Программа выставки</p>
          <div className={styles.shedule_select_container}>
            <span>Вид расписания:</span>
            <select className={styles.shedule_select} name="shedule" id="shedule-select" value={view} onChange={e => handleClick(e)}>
              <option value="table">Таблица</option>
              <option value="list">Список</option>
            </select>
          </div>
        </div>
        {view === 'table' && windowWidth >= 1024
          ? <SheduleTable data={sheduleTableData} />
          : <SheduleList data={sheduleListData} />}
      </div>
    </div>
  );
};

export default Shedule;
