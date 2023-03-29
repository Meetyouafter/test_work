import React, { useState } from 'react';
import styles from './program.module.scss';

const Program: React.FC = () => {
  const [isShowProgram, setIsShowProgram] = useState(false);

  const handleClick = () => setIsShowProgram(!isShowProgram);

  return (
    <div className={styles.program_container}>
      <button type="button" onClick={handleClick}>Программа</button>
      <ol className={isShowProgram ? styles.list_show : styles.list_hidden}>
        <li>Новогодняя столица России 2021 — итоги проекта.</li>
        <li>Календарь событий 2021.</li>
        <li>Космос как событие — запуск второй очереди музея Истории космонавтики</li>
        <li>Город науики и технологий — 65 лет Обнинску.</li>
        <li>День города как региональный праздник — 650 лет Калуге.</li>
        <li>Эктотуризм как тренд развития — маршруты, новые проекты, инвесторы.</li>
      </ol>
    </div>
  );
};

export default Program;
