import React, { FC } from 'react';
import {useSelector, useDispatch } from 'react-redux';



const Cart: FC = () => {

  const store = useSelector((state) => state);

  console.log(store);

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>Cart</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
