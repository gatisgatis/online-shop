import React, { FC } from 'react';
import style from './slides.module.scss';

interface Props {
  translate: number;
  animationTime: number;
  width: number;
}

export const Slides: FC<Props> = ({ translate, animationTime, width, children }) => {
  return (
    <div
      className={style.slides}
      style={{
        transform: `translateX(-${translate}%)`,
        transition: `transform ease-out ${animationTime}s`,
        width: `${width}%`,
      }}
    >
      {children}
    </div>
  );
};
