import React from 'react';
import styles from './speaker.module.scss';
import { ISpeaker } from '../../types';

const Speaker: React.FC<ISpeaker> = ({
  name, work, image,
}) => (
  <div className={styles.speaker_container}>
    <div className={styles.speaker_image} style={{ backgroundImage: `url(${image})` }} />

    <div className={styles.speaker_info}>
      <p className={styles.name}>{name}</p>
      <p className={styles.work}>{work}</p>
    </div>
  </div>
);

export default Speaker;
