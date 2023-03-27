import React, { useState, FC } from 'react';
import styles from './shortButton.module.scss';
import { IButtonComponent } from '../../../types';

const ShortButton: FC<IButtonComponent> = ({ variant, text }) => {
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
      />
    </div>
  );
};

export default ShortButton;
