import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import { IoMdCart } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav } from '../nav/nav';
import { LogInForm } from '../log-in-form/log-in-form';
import './header.scss';
import { RootState } from '../../store';
import { userLogOut } from '../../store/user/actions';

export const Header: FC = () => {
  const activeUserName = useSelector((state: RootState) => {
    return state.user.name.substring(0, 20);
  });

  const activeUserStatus = useSelector((state: RootState) => {
    return state.user.status;
  });

  const itemCountInCart = useSelector((state: RootState) => {
    let count = 0;
    state.items.forEach((item) => {
      if (item.countSelected > 0) count += 1;
    });
    return count;
  });

  const dispatch = useDispatch();

  return (
    <header>
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-12 col-md-3 center-xs">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfnTblmmE1jwRst04xRHrp78vFiCb5WE_vw&usqp=CAU"
              alt=""
              width="100"
            />
          </div>
          <div className="col-md-7 col-xs-12 center-xs">
            <Nav />
          </div>
          <div className="col-md-2 col-xs-12 center-xs">
            <Link to="/cart">
              <IoMdCart />
              {itemCountInCart > 0 && `(${itemCountInCart})`}
            </Link>
            {activeUserStatus === 'guest' ? (
              <div>
                <button type="button" onClick={() => {}}>
                  Log In
                </button>
                <button type="button" onClick={() => {}}>
                  Sign Up
                </button>
              </div>
            ) : (
              <button type="button" onClick={() => dispatch(userLogOut())}>
                Log Out
              </button>
            )}
            <Link to="/user">{activeUserName}</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
