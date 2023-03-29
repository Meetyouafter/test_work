import React, { useState, FC } from 'react';
import styles from './shortButton.module.scss';
import { IButtonComponent } from '../../../types';

const ShortButton: FC<IButtonComponent> = ({ variant, text, onClick }) => {
  const [isEnabled, setIsEnabled] = useState(false);

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
    <div className={styles.container}>
      <p className={styles.description}>
        {isEnabled && variant === 'check' ? 'Убрать' : text}
      </p>
      <button
        type="button"
        className={styles[`${checkedStyle()}_button`]}
        aria-label="button"
        onClick={handleClick}
      />
    </div>
  );
};

export default ShortButton;
