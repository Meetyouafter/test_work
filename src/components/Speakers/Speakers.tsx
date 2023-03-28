import React, { useRef, useEffect, useState } from 'react';
import styles from './speakers.module.scss';
import Speaker from '../Speaker/Speaker';
import arrowIcon from '../../assets/images/icons/button_arrow.svg';
import speakers from '../../utils/speakers';

const Speakers: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isScrollLeftVisible, setIsScrollLeftVisible] = useState(false);
  const [isScrollRightVisible, setIsScrollRightVisible] = useState(true);

  useEffect(() => {
    const container = scrollContainer.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setIsScrollLeftVisible(container.scrollLeft > 0);
    setIsScrollRightVisible(container.scrollLeft < maxScrollLeft);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainer.current;
    const speakerWidth = (container.querySelector('.speaker') as HTMLElement)?.offsetWidth || 0;
    const scrollDistance = speakerWidth + 200;

    if (direction === 'left') {
      container.scrollTo({
        left: container.scrollLeft - scrollDistance,
        behavior: 'smooth',
      });
    } else if (direction === 'right') {
      container.scrollTo({
        left: container.scrollLeft + scrollDistance,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setIsScrollLeftVisible(container.scrollLeft > 0);
      setIsScrollRightVisible(container.scrollLeft < maxScrollLeft);
    }, 500);
  };

  return (
    <div className={styles.container}>
      {isScrollLeftVisible
        && (
        <button
          type="button"
          className={styles.button_left}
          onClick={() => handleScroll('left')}
        >
          <img src={arrowIcon} alt="back" />
        </button>
        )}
      <div className={styles.speakers_container} ref={scrollContainer}>
        {speakers.map(speaker => (
          <Speaker
            key={speaker.id}
            name={speaker.name}
            work={speaker.work}
            image={speaker.image}
          />
        ))}
      </div>
      {isScrollRightVisible
        && (
        <button
          type="button"
          className={styles.button_right}
          onClick={() => handleScroll('right')}
        >
          <img src={arrowIcon} alt="next" />
        </button>
        )}
    </div>
  );
};

export default Speakers;
