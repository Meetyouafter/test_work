import React, { useState, FC } from 'react';
import styles from './shortButton.module.scss';
import { IButtonComponent } from '../../../types';

const ShortButton: FC<IButtonComponent> = ({ variant, text, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleHover = () => setIsHover(true);
  const handleLeave = () => setIsHover(false);

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
        {isHover && variant === 'check' ? 'Убрать' : text}
      </p>
      <button
        type="button"
        className={styles[`${checkedStyle()}_button`]}
        aria-label="button"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      />
    </div>
  );
};

export default ShortButton;
