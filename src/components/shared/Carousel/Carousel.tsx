import React, {
  useRef, useEffect, useState, FC, ReactNode,
} from 'react';
import arrowIcon from '../../../assets/images/icons/button_arrow.svg';
import styles from './carousel.module.scss';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: FC<CarouselProps> = ({ children }) => {
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
        {children}
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

export default Carousel;
