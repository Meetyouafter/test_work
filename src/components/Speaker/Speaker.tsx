import React from 'react';
import styles from './speaker.module.scss';

interface SpeakerProps {
  image: string,
  name: string,
  work: string,
}

const Speaker: React.FC<SpeakerProps> = ({
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
