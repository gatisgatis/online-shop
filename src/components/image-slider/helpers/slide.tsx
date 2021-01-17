import React, { FC, memo } from 'react';
import style from './slide.module.scss';

interface Props {
  image: string;
  showText: boolean;
  textColor: 'dark' | 'light';
  textBigger: string;
  textSmaller: string;
  width: number;
  imageFitCover: boolean;
}

const Slide: FC<Props> = ({
  image,
  showText,
  textColor,
  textSmaller,
  imageFitCover,
  textBigger,
  width,
}) => {
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
          <h1>{textBigger}</h1>
          <h3>{textSmaller}</h3>
        </div>
      )}
    </div>
  );
};

export default memo(Slide);
// export default Slide;
