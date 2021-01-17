/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import ReactDom from 'react-dom';
import style from './modal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  closeOnlyByCloseButton?: boolean;
}

export const Modal: FC<Props> = ({ isOpen, children, onClose, closeOnlyByCloseButton = true }) => {
  const portalElement = document.getElementById('portal');

  if (!portalElement) {
    return null;
  }

  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div
        className={style.overlay}
        onClick={() => {
          !closeOnlyByCloseButton && onClose();
        }}
      />
      <div className={style.modal}>
        <div className={style.close} onClick={onClose}>
          X
        </div>
        {children}
      </div>
    </>,
    portalElement
  );
};
