/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState, useRef, useEffect } from 'react';
import { v4 } from 'uuid';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { Slides } from './helpers/slides';
import Slide from './helpers/slide';
import style from './image-slider.module.scss';

interface Props {
  images: string[];
  textTitles?: string[];
  textTexts?: string[];
  showText?: boolean;
  textColor?: 'dark' | 'light';
  showArrows?: boolean;
  showDots?: boolean;
  animationTime?: number;
  timeBetweenSlides?: number;
  autoPlay?: boolean;
  imageFitCover?: boolean;
}

export const ImageSlider: FC<Props> = ({
  images,
  textColor = 'light',
  textTitles = [...images],
  textTexts = [...images],
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
  }, [activeSlideInfo.index, autoPlay, timeBetweenSlides]);

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
                key={v4()}
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
      >
        {images.map((slide, i) => {
          return (
            <Slide
              key={v4()}
              image={slide}
              showText={showText}
              width={100 / images.length}
              textColor={textColor}
              textText={textTexts[i]}
              textTitle={textTitles[i]}
              imageFitCover={imageFitCover}
            />
          );
        })}
      </Slides>
    </div>
  );
};
