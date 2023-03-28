import React, { useState } from 'react';
import styles from './longButton.module.scss';
import { IButtonComponent } from '../../../types';

const LongButton: React.FC<IButtonComponent> = ({
  variant, text, onClick, fullWidth,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const widthStyle = fullWidth ? 'full_width_button' : '';

  const checkedStyle = () => {
    if (variant === 'archive') {
      return variant;
    }
    return isEnabled ? 'enabled' : 'disabled';
  };

  const handleClick = () => {
    onClick();
    setIsEnabled(!isEnabled);
  };

  return (
    <button type="button" className={`${styles[`${checkedStyle()}_button`]} ${styles[widthStyle]}`} onClick={handleClick}>
      <p className={styles.button_body}>{text}</p>
      <div className={styles.button_section} />
    </button>
  );
};

export default LongButton;
