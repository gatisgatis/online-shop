/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState, useRef, useEffect } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import Slides from './helpers/slides';
import style from './image-slider.module.scss';

interface Props {
  images: string[];
  textBigger?: string[];
  textSmaller?: string[];
  showText?: boolean;
  textColor?: 'dark' | 'light';
  showArrows?: boolean;
  showDots?: boolean;
  animationTime?: number;
  timeBetweenSlides?: number;
  autoPlay?: boolean;
  imageFitCover?: boolean;
}

const ImageSlider: FC<Props> = ({
  images,
  textColor = 'light',
  textBigger = [...images],
  textSmaller = [...images],
  showText = false,
  showArrows = true,
  showDots = true,
  animationTime = 0.5,
  imageFitCover = true,
  timeBetweenSlides = 3,
  autoPlay = true,
}) => {
  const [activeSlideInfo, setActiveSlideInfo] = useState({
    index: 0,
    translate: 0,
  });

  const timeOut = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (autoPlay) {
      timeOut.current = setTimeout(() => {
        clickOnRightArrowHandler();
      }, timeBetweenSlides * 1000);
    }
    return () => {
      clearTimeout(timeOut.current!);
    };
  }, [activeSlideInfo.index]);

  const clickOnRightArrowHandler = () => {
    if (activeSlideInfo.index >= images.length - 1) {
      setActiveSlideInfo({
        ...activeSlideInfo,
        translate: 0,
        index: 0,
      });
    } else {
      setActiveSlideInfo({
        ...activeSlideInfo,
        translate: ((activeSlideInfo.index + 1) * 100) / images.length,
        index: activeSlideInfo.index + 1,
      });
    }
  };

  const clickOnLeftArrowHandler = () => {
    if (activeSlideInfo.index <= 0) {
      setActiveSlideInfo({
        ...activeSlideInfo,
        translate: ((images.length - 1) * 100) / images.length,
        index: images.length - 1,
      });
    } else {
      setActiveSlideInfo({
        ...activeSlideInfo,
        translate: ((activeSlideInfo.index - 1) * 100) / images.length,
        index: activeSlideInfo.index - 1,
      });
    }
  };

  const clickOnDotHandler = (index: number) => {
    setActiveSlideInfo({
      ...activeSlideInfo,
      index,
      translate: (index * 100) / images.length,
    });
  };
  return (
    <div className={style.wrapper}>
      {showArrows && (
        <div className={style.arrowsWrapper}>
          <BsChevronDoubleLeft className={style.arrow} onClick={clickOnLeftArrowHandler} />
          <BsChevronDoubleRight onClick={clickOnRightArrowHandler} className={style.arrow} />
        </div>
      )}
      {showDots && (
        <div className={style.dots}>
          {images.map((image, index) => {
            return (
              <span
                onClick={() => clickOnDotHandler(index)}
                key={image}
                className={style.dot}
                style={{ backgroundColor: activeSlideInfo.index === index ? 'black' : 'white' }}
              />
            );
          })}
        </div>
      )}
      <Slides
        translate={activeSlideInfo.translate}
        animationTime={animationTime}
        width={images.length * 100}
        images={images}
        showText={showText}
        textColor={textColor}
        textSmaller={textSmaller}
        textBigger={textBigger}
        imageFitCover={imageFitCover}
      />
    </div>
  );
};

// Could use memo, if this component rerenders too often based on state changes in it's parrent
export default ImageSlider;
