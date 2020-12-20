import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
