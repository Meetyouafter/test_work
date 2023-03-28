import React, { useState, FC } from 'react';
import styles from './shortButton.module.scss';
import { IButtonComponent } from '../../../types';

const ShortButton: FC<IButtonComponent> = ({ variant, text, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        {isHover && variant === 'enabled' ? 'Убрать' : text}
      </p>
      <button
        type="button"
        className={styles[`${variant}_button`]}
        aria-label="button"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={onClick}
      />
    </div>
  );
};

export default ShortButton;
