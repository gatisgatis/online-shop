import React, { FC } from 'react';
import { IoMdCart } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Nav } from '../nav/nav';
import './header.scss';
import { RootState } from '../../store';
import { Button } from '../common/button/button';

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

  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <header>
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-12 col-md-2 center-xs">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfnTblmmE1jwRst04xRHrp78vFiCb5WE_vw&usqp=CAU"
              alt=""
              width='100'
            />
          </div>
          <div className="col-md-7 col-xs-12 center-xs">
            <Nav />
          </div>
          <div className="col-md-3 col-xs-12 center-xs ">
            <Link to="/cart">
              <IoMdCart />
              {itemCountInCart > 0 && `(${itemCountInCart})`}
            </Link>
            {activeUserStatus === 'guest' ? (
              <>
                <div>
                  <Button size="small" color="secondary" onClick={() => history.push('/register')}>
                    Sign Up
                  </Button>
                  <Button size="small" color="secondary" onClick={() => history.push('/log-in')}>
                    Log In
                  </Button>
                </div>
                <p>Ielogjies vai reģistrējies, lai iegūtu papildus funkcionalitāti</p>
              </>
            ) : (
              <>
                <Button size="small" color="secondary">
                  Log Out
                </Button>
                <p>
                  Sveiks, {activeUserName}, apskati savu konta informačiju{' '}
                  <Link to="/user">ŠEIT</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
