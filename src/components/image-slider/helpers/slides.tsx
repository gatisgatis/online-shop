import React, { FC } from 'react';
import style from './slides.module.scss';
import Slide from './slide';


interface Props {
  translate: number;
  animationTime: number;
  width: number;
  images: string[];
  showText: boolean;
  textColor: 'dark' | 'light';
  textSmaller: string[];
  textBigger: string[];
  imageFitCover: boolean;
}

const Slides: FC<Props> = ({
  translate,
  animationTime,
  width,
  images,
  showText,
  textColor,
  textSmaller,
  textBigger,
  imageFitCover,
}) => {
  return (
    <div
      className={style.slides}
      style={{
        transform: `translateX(-${translate}%)`,
        transition: `transform ease-out ${animationTime}s`,
        width: `${width}%`,
      }}
    >
      {images.map((slide, i) => {
        return (
          <Slide
            key={i.toString()}
            image={slide}
            showText={showText}
            width={100 / images.length}
            textColor={textColor}
            textSmaller={textSmaller[i] || ''}
            textBigger={textBigger[i] || ''}
            imageFitCover={imageFitCover}
          />
        );
      })}
    </div>
  );
};

export default Slides;
