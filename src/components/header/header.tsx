import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../nav/nav';

export const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRpiPYY3t6qaUxWiODT-Rs5tGWak1V4UmwQ&usqp=CAU"
              alt=""
              width="100"
            />
          </div>
          <div className="col-xs-7">
            <Nav />
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            <span>Log In/Sign Up</span>
            <span>Search</span>
          </div>
        </div>
      </div>
    </header>
  );
};
