/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react';
import style from './image-viewer.module.scss';

interface Props {
  images?: string[];
}

export const ImageViewer: FC<Props> = ({ images = [''] }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const zoomedImgStyle = {
    cursor: 'zoom-out',
    transform: 'scale(1.8)',
  };

  return (
    <div className={style.wrapper}>
      <div className={style.bigImgWrapper} onClick={() => setIsZoomed(!isZoomed)}>
        <img
          className={style.bigImage}
          src={images[activeImageIndex]}
          alt="abc"
          style={isZoomed ? zoomedImgStyle : {}}
        />
      </div>
      <div className={style.smallImagesWrapper}>
        {images.map((img, index) => {
          return (
            <div
              key={String(index)}
              className={style.smallImageWrapper}
              onClick={() => setActiveImageIndex(index)}
              style={{ border: index === activeImageIndex ? '2px solid green' : '' }}
            >
              <img className={style.smallImage} src={img} alt="bbc" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
