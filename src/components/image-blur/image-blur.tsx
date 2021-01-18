/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import style from './image-blur.module.scss';

interface Props {
  image: string;
  aspectRatio?: number;
  text?: string;
  onClick?: () => void;
}

export const ImageBlur: FC<Props> = ({
  image = 'https://upload.wikimedia.org/wikipedia/commons/6/66/Sin_datos.jpg',
  aspectRatio = 1,
  text = 'MORE INFO',
  onClick = () => {},
}) => {
  const paddingTopConverted = `${(aspectRatio * 100).toFixed(2)}%`;
  return (
    <div onClick={onClick} className={style.wrapper} style={{ paddingTop: paddingTopConverted }}>
      <div className={style.text}>{text}</div>
      <img src={image} alt="no_info" className={style.image} />
    </div>
  );
};
