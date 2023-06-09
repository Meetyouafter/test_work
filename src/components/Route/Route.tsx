import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './route.module.scss';

const RoutePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p>Нажмите на кнопку, соответствующую заданию</p>
      <div className={styles.buttons_container}>
        <button type="button" onClick={() => navigate('/input')}>Input</button>
        <button type="button" onClick={() => navigate('/shedule')}>Shedule</button>
      </div>
    </div>
  );
};

export default RoutePage;
