import React, { FC } from 'react';
import style from './button.module.scss';

interface Props {
  size?: 'large' | 'small' | 'normal' | 'extraLarge';
  color?: 'primary' | 'secondary' | 'special' | 'extra';
  onClick?: () => void;
  isTypeButton?: boolean;
}

export const Button: FC<Props> = ({
  size = 'normal',
  isTypeButton = true,
  color = 'primary',
  onClick,
  children,
}) => {
  return (
    <button
      className={`${style.button} ${style[size]} ${style[color]}`}
      type={isTypeButton ? 'button' : 'submit'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
