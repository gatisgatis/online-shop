import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { CardCart } from '../components/card-cart/card-cart';

const Cart: FC = () => {
  const items = useSelector((state: RootState) => {
    return state.items.filter((item) => item.countSelected > 0);
  });

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>GROZS</h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <CardCart item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
