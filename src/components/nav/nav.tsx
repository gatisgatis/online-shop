import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.scss';

export const Nav: FC = () => {
  return (
    <nav className={style.nav}>
      <NavLink className={style.navItem} to="/">Home</NavLink>
      <NavLink className={style.navItem} to="/about">About</NavLink>
      <NavLink className={style.navItem} to="/catalog">Catalog</NavLink>
      <NavLink className={style.navItem} to="/contacts">Contacts</NavLink>
    </nav>
  );
};
