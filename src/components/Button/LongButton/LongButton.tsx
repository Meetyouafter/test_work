import React from 'react';
import styles from './longButton.module.scss';
import { IButtonComponent } from '../../../types';

const LongButton: React.FC<IButtonComponent> = ({
  variant, text, onClick, fullWidth,
}) => {
  const widthStyle = fullWidth ? 'full_width_button' : '';

  return (
    <button type="button" className={`${styles[`${variant}_button`]} ${styles[widthStyle]}`} onClick={onClick}>
      <p className={styles.button_body}>{text}</p>
      <div className={styles.button_section} />
    </button>
  );
};

export default LongButton;
