import React, { FC, memo } from 'react';
import style from './slide.module.scss';

interface Props {
  image: string;
  showText: boolean;
  textColor: 'dark' | 'light';
  textTitle: string;
  textText: string;
  width: number;
  imageFitCover: boolean;
}

const Slide: FC<Props> = ({
  image,
  showText,
  textColor,
  textText,
  imageFitCover,
  textTitle,
  width,
}) => {
  console.log(image);
  return (
    <div
      className={style.slide}
      style={{
        backgroundImage: `url(${image})`,
        width: `${width}%`,
        backgroundSize: imageFitCover ? 'cover' : 'contain',
      }}
    >
      {showText && (
        <div
          className={style.text}
          style={{
            backgroundColor: textColor === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3',
            color: textColor === 'light' ? 'white' : 'black',
          }}
        >
          <h1>{textTitle}</h1>
          <h3>{textText}</h3>
        </div>
      )}
    </div>
  );
};

export default memo(Slide);
