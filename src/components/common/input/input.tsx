import React, { FC, useRef, useEffect } from 'react';
import style from './input.module.scss';

type Props = {
  value: string;
  onChangeHandler: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'search';
  size?: 'large' | 'small' | 'normal' | 'extraLarge';
  color?: 'primary' | 'secondary' | 'special' | 'extra';
  placeholder?: string;
  id?: string;
  required?: boolean;
  list?: string;
  focus?: boolean;
};

const Input: FC<Props> = ({
  value,
  onChangeHandler,
  placeholder = '',
  id,
  required = false,
  list,
  type = 'text',
  size = 'normal',
  color = 'primary',
  focus = false,
}) => {

  const focusRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    focus && focusRef.current?.focus();
  }, []);

  return (
    <input
      className={`${style.input} ${style.size} ${style.color}`}
      list={list}
      type={type}
      onChange={(e) => onChangeHandler(e.target.value)}
      placeholder={placeholder}
      value={value}
      id={id}
      required={required}
      ref={focusRef}
    />
  );
};

export default Input;
